// POST /api/entries — save an owner's response (MUST happen before any AI call per LM2-06)
// GET /api/entries — list entries for the owner's Legacy (optionally filtered by conversationId)

import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { content, sessionId, role } = body as {
    content: string;
    sessionId?: string;
    role?: string;
  };

  if (!content || typeof content !== "string" || content.trim().length === 0) {
    return NextResponse.json(
      { error: "Content is required" },
      { status: 400 }
    );
  }

  // Verify the Legacy belongs to this owner
  const legacy = await prisma.legacy.findUnique({
    where: { ownerId: userId },
  });
  if (!legacy) {
    return NextResponse.json({ error: "Legacy not found" }, { status: 404 });
  }

  // If a sessionId is provided, verify the conversation belongs to this owner
  if (sessionId) {
    const conversation = await prisma.conversation.findFirst({
      where: { id: sessionId, ownerId: userId },
    });
    if (!conversation) {
      return NextResponse.json(
        { error: "Conversation not found" },
        { status: 404 }
      );
    }
  }

  // Save the owner's response.
  // LM2-06: This save happens BEFORE the AI is called.
  // The owner's words are safe regardless of what happens next.
  const entry = await prisma.entry.create({
    data: {
      legacyId: legacy.id,
      ownerId: userId,
      sessionId: sessionId ?? null,
      role: role ?? "owner",
      content: content.trim(),
    },
  });

  return NextResponse.json({ entry }, { status: 201 });
}

export async function GET(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const legacy = await prisma.legacy.findUnique({
    where: { ownerId: userId },
  });
  if (!legacy) {
    return NextResponse.json({ entries: [] });
  }

  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("sessionId");

  // All queries are strictly scoped to the authenticated owner.
  const entries = await prisma.entry.findMany({
    where: {
      legacyId: legacy.id,
      ownerId: userId,
      ...(sessionId ? { sessionId } : {}),
    },
    orderBy: { createdAt: "asc" },
  });

  return NextResponse.json({ entries });
}
