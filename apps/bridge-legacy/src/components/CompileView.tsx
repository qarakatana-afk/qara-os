"use client";

import { useState } from "react";

interface CompileViewProps {
  legacyId: string;
  projectLabel: string;
  hasEnoughContent: boolean;
  initialCompiledContent: string | null;
  initialCompiledAt: string | null;
  isUnlocked: boolean;
  unlockPriceDisplay: string;
}

// A small, dependency-free Markdown-to-JSX renderer. Handles the subset of
// Markdown the AI is instructed to produce: ## headings and plain
// paragraphs. Deliberately simple — not a full Markdown parser.
function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const blocks: React.ReactNode[] = [];
  let paragraphBuffer: string[] = [];

  function flushParagraph(key: string) {
    if (paragraphBuffer.length > 0) {
      blocks.push(
        <p key={key} className="body-text mb-4 whitespace-pre-wrap">
          {paragraphBuffer.join(" ")}
        </p>
      );
      paragraphBuffer = [];
    }
  }

  lines.forEach((line, i) => {
    if (line.startsWith("## ")) {
      flushParagraph(`p-${i}`);
      blocks.push(
        <h2 key={`h-${i}`} className="section-title mt-8 mb-3">
          {line.replace(/^##\s*/, "")}
        </h2>
      );
    } else if (line.startsWith("# ")) {
      flushParagraph(`p-${i}`);
      blocks.push(
        <h1 key={`h-${i}`} className="section-title text-2xl mt-6 mb-3">
          {line.replace(/^#\s*/, "")}
        </h1>
      );
    } else if (line.trim() === "") {
      flushParagraph(`p-${i}`);
    } else {
      paragraphBuffer.push(line);
    }
  });
  flushParagraph("p-final");

  return blocks;
}

// How much of the compiled piece a non-paying visitor gets to read before
// hitting the paywall. Character-based rather than paragraph-based so it
// works regardless of how the AI structures a given piece.
const PREVIEW_CHAR_LIMIT = 900;

function truncateForPreview(text: string) {
  if (text.length <= PREVIEW_CHAR_LIMIT) return text;
  const cut = text.slice(0, PREVIEW_CHAR_LIMIT);
  // Avoid chopping mid-word.
  const lastSpace = cut.lastIndexOf(" ");
  return cut.slice(0, lastSpace > 0 ? lastSpace : cut.length);
}

export default function CompileView({
  legacyId,
  projectLabel,
  hasEnoughContent,
  initialCompiledContent,
  initialCompiledAt,
  isUnlocked,
  unlockPriceDisplay,
}: CompileViewProps) {
  const [content, setContent] = useState(initialCompiledContent);
  const [compiledAt, setCompiledAt] = useState(initialCompiledAt);
  const [generating, setGenerating] = useState(false);
  const [unlocking, setUnlocking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerate() {
    setGenerating(true);
    setError(null);
    try {
      const res = await fetch("/api/legacy/compile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ legacyId }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Couldn't generate your piece — please try again.");
        return;
      }
      setContent(data.compiledContent);
      setCompiledAt(data.compiledAt);
    } catch {
      setError("Couldn't generate your piece — please try again.");
    } finally {
      setGenerating(false);
    }
  }

  async function handleUnlock() {
    setUnlocking(true);
    setError(null);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ legacyId }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setError(data.error ?? "Couldn't start checkout — please try again.");
        setUnlocking(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("Couldn't start checkout — please try again.");
      setUnlocking(false);
    }
  }

  function handleDownload() {
    if (!content) return;
    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${projectLabel.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  if (!hasEnoughContent) {
    return (
      <div className="card text-center">
        <p className="body-text">
          Share a few things first, then come back here to turn them into
          your {projectLabel.toLowerCase()}.
        </p>
      </div>
    );
  }

  const isPreviewOnly = Boolean(content) && !isUnlocked;
  const displayedContent =
    content && isPreviewOnly ? truncateForPreview(content) : content;

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-8 items-start sm:items-center justify-between">
        <div>
          {compiledAt && (
            <p className="font-sans text-xs text-stone-400">
              Last generated {new Date(compiledAt).toLocaleString()}
            </p>
          )}
        </div>
        <div className="flex gap-3">
          {content && isUnlocked && (
            <button onClick={handleDownload} className="btn-ghost">
              Download
            </button>
          )}
          <button
            onClick={handleGenerate}
            disabled={generating}
            className="btn-primary"
          >
            {generating
              ? "Writing…"
              : content
                ? "Regenerate"
                : `Create my ${projectLabel.toLowerCase()}`}
          </button>
        </div>
      </div>

      {error && (
        <div className="card border-red-100 bg-red-50 text-red-700 font-sans text-sm mb-6">
          {error}
        </div>
      )}

      {generating && !content && (
        <div className="text-center py-12 text-stone-400 font-sans text-sm animate-pulse">
          Writing your {projectLabel.toLowerCase()}… this can take a minute.
        </div>
      )}

      {displayedContent && <div>{renderMarkdown(displayedContent)}</div>}

      {isPreviewOnly && (
        <div className="relative -mt-24 pt-24 bg-gradient-to-b from-transparent via-warm-50/90 to-warm-50">
          <div className="card text-center py-10">
            <p className="section-title mb-2">
              Unlock your full {projectLabel.toLowerCase()}
            </p>
            <p className="body-text mb-6">
              That's just a taste. Pay once to read the rest and download it,
              yours to keep, no subscription.
            </p>
            <button
              onClick={handleUnlock}
              disabled={unlocking}
              className="btn-primary"
            >
              {unlocking ? "Redirecting…" : `Unlock for ${unlockPriceDisplay}`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
