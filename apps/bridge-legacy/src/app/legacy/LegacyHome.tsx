"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

interface LegacyHomeProps {
  legacyId: string;
  entryCount: number;
}

export default function LegacyHome({ entryCount }: LegacyHomeProps) {
  const isFirstVisit = entryCount === 0;

  return (
    <div className="min-h-screen bg-warm-50 flex flex-col">
      {/* Header */}
      <header className="border-b border-warm-100 bg-warm-50/80 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-serif text-xl text-stone-700">Bridge Legacy</h1>
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </header>

      <main className="flex-1 page-container flex flex-col items-center justify-center text-center">
        {isFirstVisit ? (
          <>
            <div className="mb-10">
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-800 leading-tight mb-5">
                Your life is interesting now.
              </h2>
              <p className="body-text max-w-md mx-auto mb-3">
                Bridge Legacy is a living celebration of your stories, passions,
                memories, and wisdom — as your life is being lived.
              </p>
              <p className="body-text max-w-md mx-auto mb-3">
                Not a biography. Not a memorial. A place for the things you know
                and love right now.
              </p>
              <p className="body-text max-w-md mx-auto">
                Your recipes. Your humor. Your hard-won lessons. The people who
                shaped you. The dreams you&apos;re still chasing.
              </p>
            </div>

            <div className="space-y-3 mb-8 text-left max-w-sm mx-auto">
              {[
                "Your stories are worth hearing",
                "What you know matters",
                "What you love matters",
                "You are still becoming",
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
                <span className="text-stone-700 font-medium">{entryCount}</span>{" "}
                {entryCount === 1 ? "entry" : "entries"} so far.
                <br />
                Every one of them is yours.
              </p>
            </div>

            <Link href="/legacy/conversation" className="btn-primary text-base">
              Continue your Legacy
            </Link>
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
