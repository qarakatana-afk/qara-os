"use client";

import { useEffect, useRef, useState } from "react";

interface Entry {
  id: string;
  role: "owner" | "ai";
  content: string;
  createdAt: string;
}

interface ConversationSession {
  id: string;
  status: string;
}

type ConversationState =
  | "loading"
  | "idle"
  | "awaiting_input"
  | "saving"
  | "generating_ai"
  | "ai_failed"
  | "ended"
  | "error";

const OPENING_PROMPT =
  "What's something you've been thinking about lately — something you know, love, or just can't stop talking about?";

export default function ConversationView() {
  const [state, setState] = useState<ConversationState>("loading");
  const [conversation, setConversation] = useState<ConversationSession | null>(
    null
  );
  const [entries, setEntries] = useState<Entry[]>([]);
  const [inputText, setInputText] = useState("");
  const [pendingSavedEntryId, setPendingSavedEntryId] = useState<string | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Initialize: get or create conversation and load entries
  useEffect(() => {
    async function init() {
      try {
        const convRes = await fetch("/api/conversation");
        if (!convRes.ok) throw new Error("Failed to load conversation");
        const { conversation: conv } = await convRes.json();
        setConversation(conv);

        if (conv.status === "ended") {
          // Load past entries for display but don't allow new input
          const entriesRes = await fetch(
            `/api/entries?sessionId=${conv.id}`
          );
          if (entriesRes.ok) {
            const { entries: loaded } = await entriesRes.json();
            setEntries(loaded);
          }
          setState("ended");
          return;
        }

        // Load existing entries for this session
        const entriesRes = await fetch(`/api/entries?sessionId=${conv.id}`);
        let loaded: Entry[] = [];
        if (entriesRes.ok) {
          const data = await entriesRes.json();
          loaded = data.entries;
          setEntries(loaded);
        }

        // If the last entry is an owner entry, auto-generate a follow-up
        const visibleEntries = loaded.filter(
          (e) => !e.content.startsWith("[owner skipped")
        );
        const lastEntry =
          visibleEntries.length > 0
            ? visibleEntries[visibleEntries.length - 1]
            : null;

        if (lastEntry && lastEntry.role === "owner") {
          // Need to generate a follow-up for this entry
          setState("generating_ai");
          try {
            const aiRes = await fetch("/api/ai/followup", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                savedEntryId: lastEntry.id,
                conversationId: conv.id,
              }),
            });
            if (aiRes.ok) {
              const aiData = await aiRes.json();
              setEntries((prev) => [...prev, aiData.aiEntry]);
            }
          } catch {
            // Non-fatal — just proceed to awaiting_input
          }
          setState("awaiting_input");
          return;
        }

        setState("awaiting_input");
      } catch {
        setState("error");
        setErrorMessage("Couldn't load your conversation. Please refresh.");
      }
    }
    init();
  }, []);

  // Scroll to bottom when entries change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [entries, state]);

  async function handleSubmit() {
    const text = inputText.trim();
    if (!text || !conversation) return;

    setState("saving");
    setInputText("");

    // Step 1: Save the owner's response BEFORE calling AI (LM2-06)
    let savedEntry: Entry;
    try {
      const saveRes = await fetch("/api/entries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: text,
          sessionId: conversation.id,
          role: "owner",
        }),
      });
      if (!saveRes.ok) throw new Error("Failed to save response");
      const { entry } = await saveRes.json();
      savedEntry = entry;

      // Immediately show the owner's entry in the UI
      setEntries((prev) => [...prev, savedEntry]);
      setPendingSavedEntryId(savedEntry.id);
    } catch {
      setState("error");
      setErrorMessage(
        "Your response couldn't be saved. Please try again."
      );
      setInputText(text); // Restore input so owner can retry
      return;
    }

    // Step 2: Call AI for follow-up (LM2-06 compliant — entry already saved)
    setState("generating_ai");
    try {
      const aiRes = await fetch("/api/ai/followup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          savedEntryId: savedEntry.id,
          conversationId: conversation.id,
        }),
      });

      const aiData = await aiRes.json();

      if (!aiRes.ok) {
        if (aiData.recoverable) {
          // AI failure — owner's data is safe, offer retry
          setState("ai_failed");
          setPendingSavedEntryId(savedEntry.id);
          return;
        }
        throw new Error("AI error");
      }

      setEntries((prev) => [...prev, aiData.aiEntry]);
      setPendingSavedEntryId(null);
      setState("awaiting_input");
    } catch {
      setState("ai_failed");
    }
  }

  async function handleRetryAI() {
    if (!pendingSavedEntryId || !conversation) return;
    setState("generating_ai");

    try {
      const aiRes = await fetch("/api/ai/followup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          savedEntryId: pendingSavedEntryId,
          conversationId: conversation.id,
        }),
      });

      const aiData = await aiRes.json();

      if (!aiRes.ok) {
        setState("ai_failed");
        return;
      }

      setEntries((prev) => [...prev, aiData.aiEntry]);
      setPendingSavedEntryId(null);
      setState("awaiting_input");
    } catch {
      setState("ai_failed");
    }
  }

  async function handleSkip() {
    if (!conversation) return;
    setState("generating_ai");

    // Generate a new AI question without a new owner entry
    // We pass the existing conversation context to get a different thread
    try {
      // Save a "skip" signal as an implicit entry (not displayed)
      const skipRes = await fetch("/api/entries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: "[owner skipped this question]",
          sessionId: conversation.id,
          role: "owner",
        }),
      });
      if (!skipRes.ok) throw new Error();
      const { entry: skipEntry } = await skipRes.json();

      // Ask AI for a new question, treating the skip as a signal to move on
      const aiRes = await fetch("/api/ai/followup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          savedEntryId: skipEntry.id,
          conversationId: conversation.id,
        }),
      });

      if (!aiRes.ok) {
        setState("awaiting_input");
        return;
      }

      const aiData = await aiRes.json();
      setEntries((prev) => [...prev, aiData.aiEntry]);
      setState("awaiting_input");
    } catch {
      setState("awaiting_input");
    }
  }

  async function handleChangeSubject() {
    if (!conversation) return;

    // Start a new conversation session (LM2-04)
    // Existing data is preserved — this creates a fresh session, not a deletion
    setState("loading");
    try {
      const res = await fetch("/api/conversation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "new" }),
      });
      if (!res.ok) throw new Error();
      const { conversation: newConv } = await res.json();
      setConversation(newConv);
      setEntries([]);
      setState("awaiting_input");
    } catch {
      setState("error");
      setErrorMessage("Couldn't start a new topic. Please try again.");
    }
  }

  async function handleEnd() {
    if (!conversation) return;

    // Pause the conversation so the owner can return to it later (LM2-04)
    try {
      await fetch("/api/conversation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversationId: conversation.id,
          action: "pause",
        }),
      });
    } catch {
      // Non-fatal — just navigate away
    }
    setState("ended");
  }

  const isInputDisabled =
    state === "saving" ||
    state === "generating_ai" ||
    state === "ended" ||
    state === "loading";

  return (
    <div className="flex flex-col flex-1 bg-warm-50">
      {/* Conversation transcript */}
      <div className="flex-1 page-container pb-4">
        {state === "loading" && (
          <div className="text-center py-20 text-stone-400 font-sans text-sm">
            Loading your conversation…
          </div>
        )}

        {state === "error" && (
          <div className="card border-red-100 bg-red-50 text-red-700 font-sans text-sm">
            {errorMessage}
          </div>
        )}

        {/* Past entries */}
        {entries.length > 0 && (
          <div className="space-y-6 mb-8">
            {entries
              .filter((e) => !e.content.startsWith("[owner skipped"))
              .map((entry) => (
                <div
                  key={entry.id}
                  className={
                    entry.role === "owner"
                      ? "flex justify-end"
                      : "flex justify-start"
                  }
                >
                  {entry.role === "ai" ? (
                    <div className="max-w-prose">
                      <p className="label-text mb-2">Bridge Legacy</p>
                      <p className="font-serif text-lg text-stone-700 leading-relaxed">
                        {entry.content}
                      </p>
                    </div>
                  ) : (
                    <div className="max-w-prose bg-white rounded-2xl px-5 py-4 shadow-sm border border-warm-100">
                      <p className="font-sans text-stone-700 leading-relaxed">
                        {entry.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}

        {/* Current prompt — shown when awaiting input */}
        {(state === "awaiting_input" || state === "ai_failed") && (
          <div className="mb-8">
            {state === "ai_failed" && (
              <div className="card border-amber-100 bg-amber-50 mb-4">
                <p className="font-sans text-sm text-amber-800">
                  The follow-up couldn&apos;t be generated right now — but your
                  response has been saved.
                </p>
                <button
                  onClick={handleRetryAI}
                  className="btn-ghost mt-2 text-amber-700"
                >
                  Try again
                </button>
              </div>
            )}

            {entries.length === 0 && state !== "ai_failed" && (
              <div className="mb-8">
                <p className="label-text mb-3">A place for your stories</p>
                <p className="font-serif text-xl text-stone-700 leading-relaxed">
                  {OPENING_PROMPT}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Loading state: AI generating */}
        {state === "generating_ai" && (
          <div className="mb-8 text-stone-400 font-sans text-sm animate-pulse">
            — thinking —
          </div>
        )}

        {/* Ended state */}
        {state === "ended" && (
          <div className="card text-center">
            <p className="font-serif text-xl text-stone-700 mb-2">
              Your Legacy is here when you return.
            </p>
            <p className="body-text">
              Everything you&apos;ve shared has been saved.
            </p>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input area — fixed at bottom */}
      {state !== "ended" && state !== "loading" && state !== "error" && (
        <div className="border-t border-warm-100 bg-warm-50/80 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto px-4 py-4">
            <div className="flex gap-3 items-end">
              <textarea
                className="input-text flex-1 resize-none min-h-[80px] max-h-[200px]"
                placeholder="Share whatever comes to mind…"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isInputDisabled}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    if (inputText.trim()) handleSubmit();
                  }
                }}
                rows={3}
              />
              <button
                onClick={handleSubmit}
                disabled={isInputDisabled || !inputText.trim()}
                className="btn-primary self-end"
              >
                {state === "saving"
                  ? "Saving…"
                  : state === "generating_ai"
                    ? "…"
                    : "Share"}
              </button>
            </div>

            {/* Owner controls — LM2-04 */}
            <div className="flex gap-2 mt-3 flex-wrap">
              <button
                onClick={handleSkip}
                disabled={isInputDisabled}
                className="btn-ghost text-xs"
              >
                Skip this question
              </button>
              <button
                onClick={handleChangeSubject}
                disabled={isInputDisabled}
                className="btn-ghost text-xs"
              >
                Change subject
              </button>
              <button
                onClick={handleEnd}
                disabled={state === "saving" || state === "generating_ai"}
                className="btn-ghost text-xs ml-auto text-stone-400"
              >
                Pause for now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Return button when ended */}
      {state === "ended" && (
        <div className="border-t border-warm-100 bg-warm-50/80">
          <div className="max-w-2xl mx-auto px-4 py-4 flex justify-center gap-4">
            <button
              onClick={() => {
                setEntries([]);
                setConversation(null);
                setState("loading");
                // Re-initialize to get or create a new session
                window.location.reload();
              }}
              className="btn-primary"
            >
              Continue your Legacy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
