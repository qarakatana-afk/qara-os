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

// A curated set of varied opening-style questions, used whenever we need a
// fresh starting point (first visit, skip, or change subject) without
// depending on an AI call. This keeps skip/change-subject fast, free, and
// reliable even if the AI provider is rate-limited or unavailable.
const VARIED_PROMPTS = [
  "What's something you've been thinking about lately — something you know, love, or just can't stop talking about?",
  "Tell me about someone who shaped who you are.",
  "What's a skill or piece of knowledge you're proud you picked up along the way?",
  "Is there a recipe, tradition, or ritual that means something to you?",
  "What's a moment you'd want someone to know about, even if it seems small?",
  "What's some advice you wish someone had given you sooner?",
  "Tell me about a place that means something to you.",
  "What's something you know to be true that took you a long time to learn?",
  "What's a story you've told so many times it's become part of who you are?",
  "Is there something you're proud of that no one ever gave you credit for?",
];

function getRandomPrompt(exclude?: string): string {
  const options = exclude
    ? VARIED_PROMPTS.filter((p) => p !== exclude)
    : VARIED_PROMPTS;
  return options[Math.floor(Math.random() * options.length)];
}

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
  // Transient, non-blocking notice (e.g. "couldn't load a new question").
  // Unlike `error` state, this does NOT hide the input area.
  const [notice, setNotice] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  function showNotice(message: string) {
    setNotice(message);
    setTimeout(() => setNotice(null), 4000);
  }

  // Save a new "ai" role entry directly (used for skip / change subject / the
  // very first question) without depending on an AI call. Returns the saved
  // entry, or null on failure.
  async function postFreshQuestion(
    sessionId: string,
    promptText: string
  ): Promise<Entry | null> {
    try {
      const res = await fetch("/api/entries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: promptText,
          sessionId,
          role: "ai",
        }),
      });
      if (!res.ok) return null;
      const { entry } = await res.json();
      return entry;
    } catch {
      return null;
    }
  }

  useEffect(() => {
    async function init() {
      try {
        const convRes = await fetch("/api/conversation");
        if (!convRes.ok) throw new Error("Failed to load conversation");
        const { conversation: conv } = await convRes.json();
        setConversation(conv);

        if (conv.status === "ended") {
          const entriesRes = await fetch(`/api/entries?sessionId=${conv.id}`);
          if (entriesRes.ok) {
            const { entries: loaded } = await entriesRes.json();
            setEntries(loaded);
          }
          setState("ended");
          return;
        }

        const entriesRes = await fetch(`/api/entries?sessionId=${conv.id}`);
        let loaded: Entry[] = [];
        if (entriesRes.ok) {
          const data = await entriesRes.json();
          loaded = data.entries;
          setEntries(loaded);
        }

        const visibleEntries = loaded.filter(
          (e) => !e.content.startsWith("[owner skipped")
        );
        const lastEntry =
          visibleEntries.length > 0
            ? visibleEntries[visibleEntries.length - 1]
            : null;

        if (!lastEntry) {
          setState("generating_ai");
          const firstQuestion = await postFreshQuestion(
            conv.id,
            getRandomPrompt()
          );
          if (firstQuestion) {
            setEntries((prev) => [...prev, firstQuestion]);
          } else {
            showNotice("Couldn't load your first question — please try again.");
          }
          setState("awaiting_input");
          return;
        }

        if (lastEntry.role === "owner") {
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
            } else {
              const fallback = await postFreshQuestion(
                conv.id,
                getRandomPrompt()
              );
              if (fallback) setEntries((prev) => [...prev, fallback]);
            }
          } catch {
            // Non-fatal — proceed to awaiting_input either way
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

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [entries, state]);

  async function handleSubmit() {
    const text = inputText.trim();
    if (!text || !conversation) return;

    setState("saving");
    setInputText("");

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

      setEntries((prev) => [...prev, savedEntry]);
      setPendingSavedEntryId(savedEntry.id);
    } catch {
      setState("error");
      setErrorMessage("Your response couldn't be saved. Please try again.");
      setInputText(text);
      return;
    }

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

    fetch("/api/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: "[owner skipped this question]",
        sessionId: conversation.id,
        role: "owner",
      }),
    }).catch(() => {
      // Non-fatal — the skip itself should still proceed
    });

    const lastAiText = [...entries].reverse().find((e) => e.role === "ai")
      ?.content;
    const nextPrompt = getRandomPrompt(lastAiText);
    const fresh = await postFreshQuestion(conversation.id, nextPrompt);

    if (fresh) {
      setEntries((prev) => [...prev, fresh]);
    } else {
      showNotice("Couldn't load a new question — please try again.");
    }
    setState("awaiting_input");
  }

  async function handleChangeSubject() {
    if (!conversation) return;

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

      setState("generating_ai");
      const fresh = await postFreshQuestion(newConv.id, getRandomPrompt());
      if (fresh) {
        setEntries([fresh]);
      } else {
        showNotice("Couldn't load a new topic — please try again.");
      }
      setState("awaiting_input");
    } catch {
      setState("error");
      setErrorMessage("Couldn't start a new topic. Please try again.");
    }
  }

  async function handleEnd() {
    if (!conversation) return;

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

        {notice && (
          <div className="card border-amber-100 bg-amber-50 mb-4">
            <p className="font-sans text-sm text-amber-800">{notice}</p>
          </div>
        )}

        {state === "generating_ai" && (
          <div className="mb-8 text-stone-400 font-sans text-sm animate-pulse">
            — thinking —
          </div>
        )}

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

      {state === "ended" && (
        <div className="border-t border-warm-100 bg-warm-50/80">
          <div className="max-w-2xl mx-auto px-4 py-4 flex justify-center gap-4">
            <button
              onClick={() => {
                setEntries([]);
                setConversation(null);
                setState("loading");
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
