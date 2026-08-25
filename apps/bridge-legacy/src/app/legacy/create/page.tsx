import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { prisma } from "@/lib/db";
import { getPreset } from "@/lib/projectTypes";
import CompileView from "@/components/CompileView";
import UnlockPending from "@/components/UnlockPending";
import { UNLOCK_PRICE_CENTS } from "@/lib/stripe";

export default async function CreatePage({
  searchParams,
}: {
  searchParams: Promise<{ unlocked?: string }>;
}) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const { unlocked } = await searchParams;

  const legacy = await prisma.legacy.findUnique({
    where: { ownerId: userId },
  });

  if (!legacy) redirect("/legacy");
  if (!legacy.projectType) redirect("/legacy/project");

  const ownerEntryCount = await prisma.entry.count({
    where: {
      legacyId: legacy.id,
      ownerId: userId,
      role: "owner",
      NOT: { content: { startsWith: "[owner skipped" } },
    },
  });

  const preset = getPreset(legacy.projectType);
  const projectLabel =
    legacy.projectType === "custom" && legacy.projectDetail
      ? legacy.projectDetail
      : preset?.label ?? "project";

  return (
    <div className="min-h-screen bg-warm-50 flex flex-col">
      <header className="border-b border-warm-100 bg-warm-50/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/legacy"
            className="font-serif text-stone-500 hover:text-stone-700 transition-colors text-sm"
          >
            ← Your Legacy
          </Link>
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </header>

      <main className="flex-1 page-container">
        <h1 className="section-title mb-2">Your {projectLabel.toLowerCase()}</h1>
        <p className="body-text mb-8">
          Turn what you've shared into the finished thing — grounded only in
          your own words, shaped into {projectLabel.toLowerCase()}.
        </p>

        {unlocked === "1" && !legacy.isUnlocked && <UnlockPending />}

        <CompileView
          legacyId={legacy.id}
          projectLabel={projectLabel}
          hasEnoughContent={ownerEntryCount > 0}
          initialCompiledContent={legacy.compiledContent}
          initialCompiledAt={legacy.compiledAt?.toISOString() ?? null}
          isUnlocked={legacy.isUnlocked}
          unlockPriceDisplay={`$${(UNLOCK_PRICE_CENTS / 100).toFixed(2)}`}
        />
      </main>
    </div>
  );
}
