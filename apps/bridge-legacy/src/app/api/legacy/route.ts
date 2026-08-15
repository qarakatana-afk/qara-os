// GET /api/legacy — get the authenticated owner's Legacy (creates it if none exists)
// This is the "upsert" pattern: the first visit creates the Legacy automatically.
// Every Legacy belongs to exactly one authenticated owner.

import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // All queries are strictly scoped to the authenticated owner.
  const legacy = await prisma.legacy.upsert({
    where: { ownerId: userId },
    create: { ownerId: userId },
    update: {},
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
