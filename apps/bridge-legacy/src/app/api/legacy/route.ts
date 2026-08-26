// GET /api/legacy — list all of the authenticated owner's Legacies, or
//   fetch a single one with ?legacyId=...
// POST /api/legacy — create a new Legacy for the authenticated owner
//   (starts a new project; the owner picks what it is on the next screen)
// PATCH /api/legacy — update a specific Legacy's chosen project. Requires
//   legacyId in the body — there is no longer "the" Legacy for an owner,
//   since one account can have many.

import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const legacyId = searchParams.get("legacyId");

  if (legacyId) {
    const legacy = await prisma.legacy.findFirst({
      where: { id: legacyId, ownerId: userId },
    });
    if (!legacy) {
      return NextResponse.json({ error: "Legacy not found" }, { status: 404 });
    }
    return NextResponse.json({ legacy });
  }

  const legacies = await prisma.legacy.findMany({
    where: { ownerId: userId },
    orderBy: { updatedAt: "desc" },
  });
  return NextResponse.json({ legacies });
}

export async function POST() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Starts a brand new project. projectType is left null on purpose — the
  // owner picks what they're making on the very next screen.
  const legacy = await prisma.legacy.create({
    data: { ownerId: userId },
  });

  return NextResponse.json({ legacy }, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { legacyId, projectType, projectDetail } = body as {
    legacyId?: string;
    projectType?: string;
    projectDetail?: string;
  };

  if (!legacyId || typeof legacyId !== "string") {
    return NextResponse.json(
      { error: "legacyId is required" },
      { status: 400 }
    );
  }

  if (!projectType || typeof projectType !== "string") {
    return NextResponse.json(
      { error: "projectType is required" },
      { status: 400 }
    );
  }

  // Ownership check — findFirst, not update-by-id-alone, so a stray/guessed
  // legacyId belonging to someone else can never be edited.
  const existing = await prisma.legacy.findFirst({
    where: { id: legacyId, ownerId: userId },
  });
  if (!existing) {
    return NextResponse.json({ error: "Legacy not found" }, { status: 404 });
  }

  const legacy = await prisma.legacy.update({
    where: { id: legacyId },
    data: {
      projectType,
      projectDetail: projectDetail ?? null,
    },
  });

  return NextResponse.json({ legacy });
}

export async function DELETE() {
  // Deletion is not in M1/M2 scope — reject cleanly.
  return NextResponse.json(
    { error: "Not implemented in this milestone" },
    { status: 405 }
  );
}
