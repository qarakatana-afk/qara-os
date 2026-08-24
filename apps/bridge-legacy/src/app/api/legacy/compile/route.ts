// POST /api/legacy/compile — turn the owner's raw entries into an actual
// finished piece (memoir, recipe book, letters, novel, etc.), tailored to
// their chosen project type. Saves the result on Legacy so it persists and
// doesn't need regenerating unless the owner explicitly asks.

import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { generateCompilation } from "@/lib/ai";
import { getPreset, getCompilationInstructions } from "@/lib/projectTypes";

export async function POST() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const legacy = await prisma.legacy.findUnique({
    where: { ownerId: userId },
  });

  if (!legacy) {
    return NextResponse.json({ error: "Legacy not found" }, { status: 404 });
  }

  if (!legacy.projectType) {
    return NextResponse.json(
      { error: "Choose what you're making before generating." },
      { status: 400 }
    );
  }

  // Gather everything the owner has actually said — this is the only
  // material the AI is allowed to work from.
  const entries = await prisma.entry.findMany({
    where: {
      legacyId: legacy.id,
      ownerId: userId,
      role: "owner",
    },
    orderBy: { createdAt: "asc" },
  });

  const ownerContent = entries
    .map((e: (typeof entries)[number]) => e.content)
    .filter((c: string) => !c.startsWith("[owner skipped"));

  if (ownerContent.length === 0) {
    return NextResponse.json(
      { error: "There's nothing to compile yet — share a few things first." },
      { status: 400 }
    );
  }

  const projectDescription =
    legacy.projectType === "custom" && legacy.projectDetail
      ? legacy.projectDetail
      : getPreset(legacy.projectType)?.aiDescription;

  const compilationInstructions = getCompilationInstructions(legacy.projectType);

  try {
    const compiled = await generateCompilation(
      ownerContent,
      compilationInstructions,
      projectDescription
    );

    const updated = await prisma.legacy.update({
      where: { id: legacy.id },
      data: {
        compiledContent: compiled,
        compiledAt: new Date(),
      },
    });

    return NextResponse.json({
      compiledContent: updated.compiledContent,
      compiledAt: updated.compiledAt,
    });
  } catch (error) {
    console.error("[compile] Generation failed:", error);
    return NextResponse.json(
      {
        error:
          "Couldn't generate your piece right now — please try again in a moment.",
      },
      { status: 503 }
    );
  }
}
