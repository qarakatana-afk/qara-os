import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { prisma } from "@/lib/db";
import { getPreset } from "@/lib/projectTypes";
import NewProjectButton from "@/components/NewProjectButton";

// The account-level home: lists every Legacy this owner has started, or —
// for a brand new account — shows the original first-visit pitch with a
// single CTA that creates their first project.
export default async function LegacyListPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const legacies = await prisma.legacy.findMany({
    where: { ownerId: userId },
    orderBy: { updatedAt: "desc" },
  });

  if (legacies.length === 0) {
    return (
      <div className="min-h-screen bg-warm-50 flex flex-col">
        <header className="border-b border-warm-100 bg-warm-50/80 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="font-serif text-xl text-stone-700">Bridge Legacy</h1>
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </header>

        <main className="flex-1 page-container flex flex-col items-center justify-center text-center">
          <div className="mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-800 leading-tight mb-5">
              Something to leave behind, made while you&apos;re still here to shape it.
            </h2>
            <p className="body-text max-w-md mx-auto mb-3">
              Bridge Legacy is where your stories, recipes, letters, and
              hard-won wisdom become something the people you love can
              actually hold onto.
            </p>
            <p className="body-text max-w-md mx-auto">
              Not a biography of a life that&apos;s over. A living collection
              of a life being lived — added to whenever you want, for as
              long as you want.
            </p>
          </div>

          <div className="space-y-3 mb-8 text-left max-w-sm mx-auto">
            {[
              "Your recipes and traditions",
              "Letters for the people you love",
              "The lessons that took you years to learn",
              "The stories only you can tell",
            ].map((line) => (
              <div key={line} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-400 flex-shrink-0" />
                <p className="font-sans text-stone-600 text-sm">{line}</p>
              </div>
            ))}
          </div>

          <NewProjectButton label="Begin your Legacy" className="btn-primary text-base" />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-50 flex flex-col">
      <header className="border-b border-warm-100 bg-warm-50/80 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-serif text-xl text-stone-700">Bridge Legacy</h1>
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </header>

      <main className="flex-1 page-container">
        <h2 className="section-title mb-6">Your projects</h2>

        <div className="space-y-3 mb-8">
          {legacies.map((legacy: (typeof legacies)[number]) => {
            const preset = getPreset(legacy.projectType);
            const label =
              legacy.projectType === "custom" && legacy.projectDetail
                ? legacy.projectDetail
                : preset?.label ?? "Untitled project";
            return (
              <Link
                key={legacy.id}
                href={`/legacy/${legacy.id}`}
                className="card flex items-center justify-between hover:border-warm-300 transition-colors"
              >
                <span className="font-serif text-base text-stone-800">
                  {label}
                </span>
                {legacy.isUnlocked && (
                  <span className="label-text text-warm-600">Unlocked</span>
                )}
              </Link>
            );
          })}
        </div>

        <NewProjectButton label="+ Start a new project" className="btn-ghost" />
      </main>
    </div>
  );
}
