// Shared definitions for what the owner is making. Used by both the
// project-selection UI and the AI prompt logic, so the two always stay
// in sync.

export interface ProjectPreset {
  id: string;
  label: string;
  // Used to build the AI's system prompt — describes the tone and focus
  // for this kind of project.
  aiDescription: string;
  // A handful of varied opening-style questions specific to this project,
  // used for the first question, "skip", and "change subject" without
  // needing an AI call (fast, free, always available).
  openingPrompts: string[];
}

export const PROJECT_PRESETS: ProjectPreset[] = [
  {
    id: "memoir",
    label: "A memoir",
    aiDescription:
      "a reflective, honest memoir capturing the real arc of their life — the events, choices, and turning points that shaped them",
    openingPrompts: [
      "What's a moment that changed the direction of your life?",
      "Tell me about a decision you made that you're still glad you made.",
      "Who's someone whose absence you still feel?",
      "What's a chapter of your life you don't often talk about?",
    ],
  },
  {
    id: "letters",
    label: "Letters to loved ones",
    aiDescription:
      "personal letters written directly to specific people they love, meant for that person to read someday — warm, direct, in their own voice",
    openingPrompts: [
      "Who do you want to write to first?",
      "What's something you've never said out loud to someone you love?",
      "If someone you love read this in twenty years, what would you want them to know?",
      "Is there something you'd want to say to someone who's already gone?",
    ],
  },
  {
    id: "recipes",
    label: "A recipe book & traditions",
    aiDescription:
      "a collection of recipes, kitchen memories, and food traditions — the meals and dishes that carry meaning, and the stories behind them",
    openingPrompts: [
      "What's a dish that instantly brings back a memory when you smell it cooking?",
      "Whose recipe did you learn from, and what did they teach you besides the recipe itself?",
      "What did your family always eat on special occasions?",
      "Is there a dish you make that nobody else makes quite the same way?",
    ],
  },
  {
    id: "playlist",
    label: "A life playlist",
    aiDescription:
      "the story behind meaningful songs and music from different chapters of their life — what a song meant, when they heard it, what it takes them back to",
    openingPrompts: [
      "What song takes you right back to a specific moment when you hear it?",
      "What music did your house sound like growing up?",
      "Is there a song tied to someone you love?",
      "What song would surprise people to learn matters to you?",
    ],
  },
  {
    id: "wisdom",
    label: "Wisdom & lessons learned",
    aiDescription:
      "hard-won lessons, advice, and wisdom they want to pass on — the things they know now that they wish they'd known earlier",
    openingPrompts: [
      "What's something you know now that you wish someone had told you at twenty?",
      "What's a mistake that taught you the most?",
      "What do you believe now that you didn't used to?",
      "What's advice you give often, and where did it come from?",
    ],
  },
  {
    id: "novel",
    label: "My life as a novel",
    aiDescription:
      "their real life story, reframed with the vivid, narrative energy of a novel — real events and people, told with scene, tension, and voice, not dry facts",
    openingPrompts: [
      "If your life had a first chapter, what scene would it open on?",
      "Who's the character in your life who felt larger than life?",
      "What's a moment that felt like a plot twist when it happened?",
      "What's the setting you'd want a reader to really feel?",
    ],
  },
  {
    id: "funny",
    label: "Something funny",
    aiDescription:
      "a funny, irreverent, or satirical take on their life and stories — leaning into humor, absurdity, and the ridiculous parts, not sentimentality",
    openingPrompts: [
      "What's the most ridiculous thing that's ever happened to you?",
      "What's something you did that seemed like a good idea at the time?",
      "Who's the funniest person you've ever known, and what did they do?",
      "What's a story about yourself you tell purely because it's funny?",
    ],
  },
  {
    id: "raw",
    label: "Something raw and unfiltered",
    aiDescription:
      "an honest, unfiltered account, including hard or difficult chapters — told plainly and without softening, sentimentality, or forced silver linings",
    openingPrompts: [
      "What's something you've never fully said out loud?",
      "What's a chapter of your life you're still making sense of?",
      "What's something you want on record, even if it's hard to say?",
      "What's true that you don't usually let yourself say?",
    ],
  },
];

export function getPreset(projectType: string | null | undefined) {
  return PROJECT_PRESETS.find((p) => p.id === projectType) ?? null;
}

// Fallback prompts for "custom" projects or when no project is set yet.
export const DEFAULT_OPENING_PROMPTS = [
  "What's something you've been thinking about lately — something you know, love, or just can't stop talking about?",
  "Tell me about someone who shaped who you are.",
  "What's a skill or piece of knowledge you're proud you picked up along the way?",
  "What's a moment you'd want someone to know about, even if it seems small?",
  "What's some advice you wish someone had given you sooner?",
  "Tell me about a place that means something to you.",
];

export function getOpeningPrompts(
  projectType: string | null | undefined
): string[] {
  const preset = getPreset(projectType);
  return preset ? preset.openingPrompts : DEFAULT_OPENING_PROMPTS;
}
