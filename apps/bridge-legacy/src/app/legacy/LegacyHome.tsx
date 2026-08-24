"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { getPreset } from "@/lib/projectTypes";

interface LegacyHomeProps {
  legacyId: string;
  entryCount: number;
  projectType?: string | null;
  projectDetail?: string | null;
}

export default function LegacyHome({
  entryCount,
  projectType,
  projectDetail,
}: LegacyHomeProps) {
  const isFirstVisit = entryCount === 0;
  const preset = getPreset(projectType);
  const projectLabel =
    projectType === "custom" && projectDetail
      ? projectDetail
      : preset?.label ?? null;

  return (
    <div className="min-h-screen bg-warm-50 flex flex-col">
      {/* Header */}
      <header className="border-b border-warm-100 bg-warm-50/80 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-serif text-xl text-stone-700">Bridge Legacy</h1>
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
        {projectLabel && (
          <div className="max-w-2xl mx-auto px-4 pb-3 flex items-center justify-center gap-2">
            <p className="font-sans text-xs text-stone-400">
              Working on: <span className="text-stone-500">{projectLabel}</span>
            </p>
            <Link
              href="/legacy/project"
              className="font-sans text-xs text-warm-600 hover:text-warm-700 underline"
            >
              Change
            </Link>
          </div>
        )}
      </header>

      <main className="flex-1 page-container flex flex-col items-center justify-center text-center">
        {isFirstVisit ? (
          <>
            <div className="mb-10">
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-800 leading-tight mb-5">
                Something to leave behind, made while you&apos;re still here to shape it.
              </h2>
              <p className="body-text max-w-md mx-auto mb-3">
                Bridge Legacy is where your stories, recipes, letters, and
                hard-won wisdom become something the people you love can
                actually hold onto.
              </p>
              <p className="body-text max-w-md mx-auto mb-3">
                Not a biography of a life that&apos;s over. A living collection
                of a life being lived — added to whenever you want, for as
                long as you want.
              </p>
              <p className="body-text max-w-md mx-auto">
                This isn&apos;t just for later in life. It&apos;s for any age,
                any story worth keeping — the wisdom you&apos;ve already
                earned, right now.
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

            <Link href="/legacy/conversation" className="btn-primary text-base">
              Begin your Legacy
            </Link>
          </>
        ) : (
          <>
            <div className="mb-10">
              <h2 className="font-serif text-3xl text-stone-800 mb-4">
                Welcome back.
              </h2>
              <p className="body-text max-w-sm mx-auto">
                Your Legacy has{" "}
                <Link
                  href="/legacy/entries"
                  className="text-stone-700 font-medium underline decoration-warm-300 hover:decoration-warm-500"
                >
                  {entryCount} {entryCount === 1 ? "entry" : "entries"}
                </Link>{" "}
                so far.
                <br />
                Every one of them is yours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/legacy/conversation" className="btn-primary text-base">
                Continue your Legacy
              </Link>
              <Link href="/legacy/entries" className="btn-ghost text-base">
                View your entries
              </Link>
              <Link href="/legacy/create" className="btn-ghost text-base">
                Create my {(preset?.label ?? "project").toLowerCase()}
              </Link>
            </div>
          </>
        )}
      </main>

      <footer className="border-t border-warm-100">
        <div className="max-w-2xl mx-auto px-4 py-4 text-center">
          <p className="font-sans text-xs text-stone-400">
            Bridge Legacy — controlled development
          </p>
        </div>
      </footer>
    </div>
  );
}
