// Server-side AI integration for Bridge Legacy.
// AI credentials never reach the client.
// All calls are made from API routes only.

import OpenAI from "openai";

const MODEL = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

// Lazy client initialization — prevents build-time env var errors.
// Only called at runtime when an AI request is actually made.
function getClient(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY is not configured. Set it in .env.local before using AI features."
    );
  }
  return new OpenAI({ apiKey });
}

// The system prompt defines the AI persona for Bridge Legacy.
// The AI is a warm, curious listener — not a therapist, interviewer, or chatbot.
const SYSTEM_PROMPT = `You are a deeply curious, warm listener helping someone preserve the stories and wisdom of their life.

Your only job in each turn is to ask ONE thoughtful follow-up question grounded in what the person actually said. You do not introduce topics they haven't raised. You do not make assumptions about what their life means. You do not offer interpretations, compliments, analysis, or advice.

You feel like a friend who says "Wait — that's interesting. Tell me more about that." But specifically, based on their actual words.

Rules:
- Ask exactly one question. Never more.
- Base it entirely on something specific the person mentioned.
- Be concise. The question should be one or two sentences at most.
- Be warm and genuinely curious.
- Never fabricate details they haven't shared.
- Never use memorial, end-of-life, or legacy-as-obituary framing.
- This is a celebration of a life being lived now.`;

export interface ConversationTurn {
  role: "owner" | "ai";
  content: string;
}

/**
 * Generate a single AI follow-up question grounded in the owner's submitted content.
 *
 * LM2-06: This function is ONLY called AFTER the owner's response has already been saved.
 * If this function throws, the owner's data is already safe.
 */
export async function generateFollowUp(
  recentTurns: ConversationTurn[],
  legacyContext?: string
): Promise<string> {
  // Build the message list for the AI.
  // We send only the context needed for the current task (privacy principle).
  const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: SYSTEM_PROMPT,
    },
  ];

  // Optionally provide a brief framing of the Legacy context
  if (legacyContext) {
    messages.push({
      role: "system",
      content: `Context: The owner is sharing their stories. Here is what they have shared in recent turns.`,
    });
  }

  // Map conversation turns to OpenAI message format
  for (const turn of recentTurns) {
    messages.push({
      role: turn.role === "owner" ? "user" : "assistant",
      content: turn.content,
    });
  }

  const completion = await getClient().chat.completions.create({
    model: MODEL,
    messages,
    max_tokens: 150,
    temperature: 0.7,
  });

  const content = completion.choices[0]?.message?.content?.trim();

  if (!content) {
    throw new Error("AI returned empty response");
  }

  return content;
}

/**
 * Extract structured signals from an owner's entry.
 * Returns an array of signals with category, value, and provenance.
 *
 * LM2-05: Signals are always tagged as "explicit" or "inferred".
 * Inference is never silently presented as owner fact.
 */
export interface ExtractedSignal {
  category: string;
  value: string;
  provenance: "explicit" | "inferred";
}

export async function extractSignals(
  ownerContent: string
): Promise<ExtractedSignal[]> {
  const prompt = `Read this person's words and extract structured observations.

For each observation, provide:
- category: one of Person, Place, Passion, Recipe/Food, Skill, Tradition, Memory, Life Period, Relationship, Accomplishment, Lesson/Wisdom, Value/Belief, Favorite, Goal/Dream
- value: a brief description (10 words or fewer)
- provenance: "explicit" if they directly stated it, "inferred" if it is an interpretation

Return a JSON array. Example:
[{"category": "Person", "value": "grandmother named Rosa", "provenance": "explicit"},
 {"category": "Passion", "value": "cooking as an expression of love", "provenance": "inferred"}]

If there are no clear signals, return an empty array [].

Person's words:
"""
${ownerContent}
"""

Return only valid JSON. No other text.`;

  try {
    const completion = await getClient().chat.completions.create({
      model: MODEL,
      messages: [{ role: "user", content: prompt }],
      max_tokens: 400,
      temperature: 0.3,
      response_format: { type: "json_object" },
    });

    const raw = completion.choices[0]?.message?.content?.trim();
    if (!raw) return [];

    // The response_format: json_object wraps arrays, handle both cases
    const parsed = JSON.parse(raw);
    const signals: ExtractedSignal[] = Array.isArray(parsed)
      ? parsed
      : (parsed.signals ?? parsed.data ?? []);

    // Validate and filter
    const validCategories = new Set([
      "Person",
      "Place",
      "Passion",
      "Recipe/Food",
      "Skill",
      "Tradition",
      "Memory",
      "Life Period",
      "Relationship",
      "Accomplishment",
      "Lesson/Wisdom",
      "Value/Belief",
      "Favorite",
      "Goal/Dream",
    ]);

    return signals.filter(
      (s) =>
        validCategories.has(s.category) &&
        typeof s.value === "string" &&
        (s.provenance === "explicit" || s.provenance === "inferred")
    );
  } catch {
    // Signal extraction failure is non-fatal — the entry is already saved.
    return [];
  }
}
