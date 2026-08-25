"use client";

import Link from "next/link";

// Staggered delays give the waveform an unrehearsed, listening feel
// rather than a mechanical, uniform pulse.
const BAR_DELAYS = [
  0, 0.06, 0.02, 0.11, 0.04, 0.15, 0.01, 0.09, 0.05, 0.18, 0.03, 0.13, 0.07,
  0.16, 0.02, 0.1, 0.06, 0.19, 0.04, 0.12, 0.08, 0.17, 0.03, 0.14, 0.05, 0.2,
  0.09, 0.11,
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
        &ldquo;...it began the summer my father taught me to drive.&rdquo;
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
          <h1 className="font-serif text-4xl sm:text-5xl text-stone-800 leading-tight mb-5">
            The story only you can tell.
          </h1>
          <p className="body-text text-base sm:text-lg mb-8">
            Speak your memories, in your own words. Bridge Legacy turns the
            conversation into a memoir the people you love will keep.
          </p>

          <Link href="/sign-up" className="btn-primary text-base px-8 py-3.5">
            Start your memoir
          </Link>
          <p className="label-text normal-case tracking-normal text-stone-400 mt-4 font-normal">
            Free to begin. No writing required, just talk.
          </p>
        </div>

        <div className="hero-fade-up w-full max-w-3xl mt-20 sm:mt-24 grid sm:grid-cols-3 gap-8 sm:gap-10 text-left">
          <div>
            <p className="label-text mb-2">01 &nbsp;Talk</p>
            <p className="body-text text-sm">
              Open the app and talk the way you would with someone you trust.
              No outlines, no blank page.
            </p>
          </div>
          <div>
            <p className="label-text mb-2">02 &nbsp;Reflect</p>
            <p className="body-text text-sm">
              Gentle prompts follow the threads in what you said, drawing out
              details you might not think to write down.
            </p>
          </div>
          <div>
            <p className="label-text mb-2">03 &nbsp;Keep</p>
            <p className="body-text text-sm">
              Everything you share is shaped into chapters, a memoir that
              stays intact long after the conversation ends.
            </p>
          </div>
        </div>
      </main>

      <footer className="px-6 py-8 text-center">
        <p className="label-text text-stone-300 normal-case tracking-normal font-normal">
          Some stories are only told once.
        </p>
      </footer>
    </div>
  );
}
