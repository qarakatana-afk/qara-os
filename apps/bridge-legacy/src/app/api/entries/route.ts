// POST /api/entries — save an owner's response (MUST happen before any AI call per LM2-06)
// GET /api/entries — list entries for a conversation (?sessionId=...)
//
// Neither handler needs a legacyId parameter: every entry is always tied to
// a sessionId (Conversation), and the Conversation already knows which
// Legacy it belongs to and is already owner-verified. Deriving scope from
// the conversation keeps this route correct even with multiple Legacies
// per owner, with no client-side changes required.

import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { content, sessionId, role, audioUrl } = body as {
    content: string;
    sessionId?: string;
    role?: string;
    audioUrl?: string;
  };

  if (!content || typeof content !== "string" || content.trim().length === 0) {
    return NextResponse.json(
      { error: "Content is required" },
      { status: 400 }
    );
  }

  if (!sessionId) {
    return NextResponse.json(
      { error: "sessionId is required" },
      { status: 400 }
    );
  }

  // The conversation carries its own legacyId, and this lookup is already
  // owner-scoped — no separate Legacy lookup needed.
  const conversation = await prisma.conversation.findFirst({
    where: { id: sessionId, ownerId: userId },
  });
  if (!conversation) {
    return NextResponse.json(
      { error: "Conversation not found" },
      { status: 404 }
    );
  }

  // Save the owner's response.
  // LM2-06: This save happens BEFORE the AI is called.
  // The owner's words are safe regardless of what happens next.
  const entry = await prisma.entry.create({
    data: {
      legacyId: conversation.legacyId,
      ownerId: userId,
      sessionId,
      role: role ?? "owner",
      content: content.trim(),
      audioUrl: audioUrl ?? null,
    },
  });

  return NextResponse.json({ entry }, { status: 201 });
}

export async function GET(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("sessionId");

  if (!sessionId) {
    return NextResponse.json(
      { error: "sessionId is required" },
      { status: 400 }
    );
  }

  // Ownership check happens via the conversation, same as POST above.
  const conversation = await prisma.conversation.findFirst({
    where: { id: sessionId, ownerId: userId },
  });
  if (!conversation) {
    return NextResponse.json({ entries: [] });
  }

  const entries = await prisma.entry.findMany({
    where: { sessionId, ownerId: userId },
    orderBy: { createdAt: "asc" },
  });

  return NextResponse.json({ entries });
}
