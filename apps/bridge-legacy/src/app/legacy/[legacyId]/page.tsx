import { auth } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import LegacyHome from "../LegacyHome";

export default async function LegacyProjectPage({
  params,
}: {
  params: Promise<{ legacyId: string }>;
}) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const { legacyId } = await params;

  const legacy = await prisma.legacy.findFirst({
    where: { id: legacyId, ownerId: userId },
  });
  if (!legacy) notFound();

  // First-time visitors to this specific project choose what they're
  // making before anything else
  if (!legacy.projectType) {
    redirect(`/legacy/${legacyId}/project`);
  }

  const entryCount = await prisma.entry.count({
    where: { legacyId: legacy.id, ownerId: userId, role: "owner" },
  });

  return (
    <LegacyHome
      legacyId={legacy.id}
      entryCount={entryCount}
      projectType={legacy.projectType}
      projectDetail={legacy.projectDetail}
    />
  );
}
