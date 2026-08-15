// GET /api/conversation — get or create the active conversation session for the owner's Legacy
// POST /api/conversation — update session status (pause | end | resume)

import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Look up the owner's Legacy — must exist
  const legacy = await prisma.legacy.findUnique({
    where: { ownerId: userId },
  });
  if (!legacy) {
    return NextResponse.json({ error: "Legacy not found" }, { status: 404 });
  }

  // Find an active or paused conversation to resume, or create a new one
  let conversation = await prisma.conversation.findFirst({
    where: {
      legacyId: legacy.id,
      ownerId: userId,
      status: { in: ["active", "paused"] },
    },
    orderBy: { updatedAt: "desc" },
  });

  if (!conversation) {
    conversation = await prisma.conversation.create({
      data: {
        legacyId: legacy.id,
        ownerId: userId,
        status: "active",
      },
    });
  } else if (conversation.status === "paused") {
    // Resume the paused session
    conversation = await prisma.conversation.update({
      where: { id: conversation.id },
      data: { status: "active" },
    });
  }

  return NextResponse.json({ conversation });
}

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { conversationId, action } = body as {
    conversationId: string;
    action: "pause" | "end" | "resume" | "new";
  };

  if (action === "new") {
    // Start a fresh conversation — always scoped to the authenticated owner
    const legacy = await prisma.legacy.findUnique({
      where: { ownerId: userId },
    });
    if (!legacy) {
      return NextResponse.json({ error: "Legacy not found" }, { status: 404 });
    }

    const conversation = await prisma.conversation.create({
      data: {
        legacyId: legacy.id,
        ownerId: userId,
        status: "active",
      },
    });

    return NextResponse.json({ conversation });
  }

  // For all other actions, find and update the specific conversation.
  // Strict owner check: only the owner can modify their own conversation.
  const conversation = await prisma.conversation.findFirst({
    where: { id: conversationId, ownerId: userId },
  });
  if (!conversation) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const statusMap: Record<string, string> = {
    pause: "paused",
    end: "ended",
    resume: "active",
  };

  const newStatus = statusMap[action];
  if (!newStatus) {
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }

  const updated = await prisma.conversation.update({
    where: { id: conversation.id },
    data: { status: newStatus },
  });

  return NextResponse.json({ conversation: updated });
}
