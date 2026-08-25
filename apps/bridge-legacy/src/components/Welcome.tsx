"use client";

import Link from "next/link";

// Staggered delays give the waveform an unrehearsed, listening feel
// rather than a mechanical, uniform pulse.
const BAR_DELAYS = [
  0, 0.06, 0.02, 0.11, 0.04, 0.15, 0.01, 0.09, 0.05, 0.18, 0.03, 0.13, 0.07,
  0.16, 0.02, 0.1, 0.06, 0.19, 0.04, 0.12, 0.08, 0.17, 0.03, 0.14, 0.05, 0.2,
  0.09, 0.11,
];

// Mirrors PROJECT_PRESETS in src/lib/projectTypes.ts — this is the actual
// set of formats the app can turn a conversation into, so the welcome
// screen isn't overselling anything.
const PATHS = [
  { label: "A memoir", blurb: "The real arc of your life, your words." },
  { label: "Letters to loved ones", blurb: "Say what you've never said out loud." },
  { label: "A recipe book & traditions", blurb: "The dishes and memories that raised you." },
  { label: "A life playlist", blurb: "Every song, and the story behind it." },
  { label: "Wisdom & lessons learned", blurb: "What you know now that you wish you knew then." },
  { label: "My life as a novel", blurb: "Real events, told with real narrative craft." },
  { label: "Something funny", blurb: "The ridiculous stuff, told exactly how it happened." },
  { label: "Something raw and unfiltered", blurb: "No filter. No silver linings. Just true." },
];

function Waveform() {
  return (
    <div className="flex flex-col items-center gap-5">
      <svg viewBox="0 0 280 64" className="w-56 sm:w-64" aria-hidden="true">
        {BAR_DELAYS.map((delay, i) => {
          const x = i * 10 + 2;
          const baseHeight = 14 + ((i * 37) % 28);
          return (
            <rect
              key={i}
              className="waveform-bar"
              x={x}
              y={32 - baseHeight / 2}
              width="5"
              height={baseHeight}
              rx="2.5"
              fill="#b06030"
              style={{ animationDelay: `${delay}s` }}
            />
          );
        })}
      </svg>
      <p className="waveform-caption font-serif italic text-stone-500 text-sm sm:text-base text-center px-6">
        &ldquo;...so naturally, we bought a llama.&rdquo;
      </p>
    </div>
  );
}

export default function Welcome() {
  return (
    <div className="min-h-screen bg-warm-50 flex flex-col">
      <header className="w-full px-6 sm:px-10 py-6 flex items-center justify-between">
        <span className="font-serif text-lg text-stone-800">
          Bridge Legacy
        </span>
        <Link href="/sign-in" className="btn-ghost">
          Sign in
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 sm:py-16">
        <div className="mb-10 sm:mb-12">
          <Waveform />
        </div>

        <div className="hero-fade-up max-w-xl text-center">
          <p className="label-text mb-3">Not just a memoir</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-stone-800 leading-tight mb-5">
            Your journey begins here.
          </h1>
          <p className="body-text text-base sm:text-lg mb-8">
            Talk about your life however it actually comes out, funny,
            honest, chaotic, poetic. Choose your path and Bridge Legacy
            shapes the conversation into something real.
          </p>

          <Link href="/sign-up" className="btn-primary text-base px-8 py-3.5">
            Choose your path
          </Link>
          <p className="label-text normal-case tracking-normal text-stone-400 mt-4 font-normal">
            Free to begin. No writing required, just talk.
          </p>
        </div>

        <div className="hero-fade-up w-full max-w-3xl mt-20 sm:mt-24">
          <p className="label-text mb-6 text-center">Pick your format</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {PATHS.map((path) => (
              <div
                key={path.label}
                className="rounded-xl border border-warm-200 bg-white/60 px-4 py-4 text-left"
              >
                <p className="font-serif text-sm text-stone-800 mb-1.5 leading-snug">
                  {path.label}
                </p>
                <p className="font-sans text-xs text-stone-500 leading-relaxed">
                  {path.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="px-6 py-8 text-center">
        <p className="label-text text-stone-300 normal-case tracking-normal font-normal">
          Your voice. Your format. Your story.
        </p>
      </footer>
    </div>
  );
}
