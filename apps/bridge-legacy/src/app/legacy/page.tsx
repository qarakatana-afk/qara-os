import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import LegacyHome from "./LegacyHome";

// Server component: fetch Legacy data, then hand off to the client component.
export default async function LegacyPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  // Ensure the Legacy record exists (creates if first visit)
  const legacy = await prisma.legacy.upsert({
    where: { ownerId: userId },
    create: { ownerId: userId },
    update: {},
  });

  // First-time visitors choose what they're making before anything else
  if (!legacy.projectType) {
    redirect("/legacy/project");
  }

  // Count the owner's entries for display context
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
