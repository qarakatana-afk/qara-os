// POST /api/ai/followup — generate a server-side AI follow-up question
//
// LM2-06 CRITICAL SEQUENCE (enforced by the client, verified by design here):
//   1. Client saves the owner's response via POST /api/entries → gets back the saved entry
//   2. Client calls this endpoint with the saved entry's ID
//   3. This endpoint verifies the entry is already persisted
//   4. Generates the AI follow-up
//   5. Saves the AI question as an "ai" role entry
//   6. Optionally extracts and saves signals from the owner's content
//   7. Returns the follow-up question and the saved AI entry
//
// If this endpoint fails at any point, the owner's entry is already in the database.
// The client is designed to retry this call without requiring the owner to retype.

import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { generateFollowUp, extractSignals } from "@/lib/ai";
import { getPreset } from "@/lib/projectTypes";

// Number of recent turns to include as conversation context (LM2-07)
const CONTEXT_TURNS = 10;

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { savedEntryId, conversationId } = body as {
    savedEntryId: string;
    conversationId: string;
  };

  if (!savedEntryId || !conversationId) {
    return NextResponse.json(
      { error: "savedEntryId and conversationId are required" },
      { status: 400 }
    );
  }

  // Step 1: Verify the owner's entry is already saved and belongs to this owner
  const savedEntry = await prisma.entry.findFirst({
    where: { id: savedEntryId, ownerId: userId },
  });
  if (!savedEntry) {
    return NextResponse.json(
      { error: "Entry not found or not authorized" },
      { status: 404 }
    );
  }

  // Step 2: Verify the conversation belongs to this owner
  const conversation = await prisma.conversation.findFirst({
    where: { id: conversationId, ownerId: userId },
  });
  if (!conversation) {
    return NextResponse.json(
      { error: "Conversation not found or not authorized" },
      { status: 404 }
    );
  }

  // Step 3: Fetch recent conversation context (LM2-07 — session memory)
  // We include only source content, not AI speculation or inferences.
  // Ordered descending (most recent first) so `take` grabs the latest
  // turns, then reversed back to chronological order for the AI.
  const recentEntriesDesc = await prisma.entry.findMany({
    where: {
      sessionId: conversationId,
      ownerId: userId,
    },
    orderBy: { createdAt: "desc" },
    take: CONTEXT_TURNS,
  });
  const recentEntries = recentEntriesDesc.reverse();

  // Map to the ConversationTurn format expected by the AI library
  const turns = recentEntries.map((e: (typeof recentEntries)[number]) => ({
    role: e.role as "owner" | "ai",
    content: e.content,
  }));

  // Step 3b: Look up what the owner is making, so the AI can tailor its
  // question instead of asking something generic.
  const legacy = await prisma.legacy.findUnique({
    where: { id: savedEntry.legacyId },
  });
  const projectDescription =
    legacy?.projectType === "custom" && legacy.projectDetail
      ? legacy.projectDetail
      : legacy?.projectType
        ? getPreset(legacy.projectType)?.aiDescription
        : undefined;

  // Step 4: Generate the AI follow-up (this is where failures may occur)
  let followUpText: string;
  try {
    followUpText = await generateFollowUp(turns, projectDescription);
  } catch (aiError) {
    // AI failure is non-fatal. The owner's entry is already saved.
    // Return a recoverable error state so the client can retry.
    console.error("AI follow-up generation failed:", aiError);
    return NextResponse.json(
      {
        error: "ai_unavailable",
        message:
          "The follow-up question couldn't be generated right now. Your response has been saved. You can retry or continue later.",
        savedEntryId,
        recoverable: true,
      },
      { status: 503 }
    );
  }

  // Step 5: Save the AI question as an entry (role: "ai")
  const aiEntry = await prisma.entry.create({
    data: {
      legacyId: savedEntry.legacyId,
      ownerId: userId,
      sessionId: conversationId,
      role: "ai",
      content: followUpText,
    },
  });

  // Step 6: Extract and save signals from the owner's entry (non-blocking)
  // Signal extraction failure must never affect the owner's experience.
  try {
    const signals = await extractSignals(savedEntry.content);
    if (signals.length > 0) {
      await prisma.signal.createMany({
        data: signals.map((s) => ({
          legacyId: savedEntry.legacyId,
          sourceEntryId: savedEntry.id,
          category: s.category,
          value: s.value,
          provenance: s.provenance,
        })),
      });
    }
  } catch {
    // Signal extraction failure is always non-fatal.
  }

  return NextResponse.json({
    followUp: followUpText,
    aiEntry,
  });
}
