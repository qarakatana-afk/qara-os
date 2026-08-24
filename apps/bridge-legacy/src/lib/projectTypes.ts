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
  // Instructions for turning raw entries into the actual finished piece —
  // used only when the owner asks to generate/compile their project.
  compilationInstructions: string;
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
    compilationInstructions:
      "Organize the material into a memoir with clear chapter breaks (use ## headings). Group related entries by theme or period of life rather than strict chronology if that reads better. Write in first person, in flowing narrative prose — not a Q&A transcript. Preserve the person's actual phrases, word choices, and rhythm wherever possible; do not smooth their voice into generic 'book language.' Open with a short, warm introduction, and close with a brief final reflection.",
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
    compilationInstructions:
      "Organize the material into a set of distinct letters, each addressed to a specific person where one is identifiable from the entries (use ## headings like 'To Mom' or the person's name). If a person isn't named, write the letter to 'someone I love' rather than inventing a name. Each letter should read as a genuine, direct letter — warm, personal, in the person's own words and phrasing — not a generic template. Preserve their actual voice and phrasing wherever possible.",
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
    compilationInstructions:
      "Organize the material into a recipe book. For each dish mentioned, create a section (use ## headings with the dish name) containing: the story or memory behind it (in the person's own words wherever possible), followed by the recipe itself as best it can be reconstructed from what they described — ingredients as a list, steps as a numbered list. If exact quantities or steps weren't given, note '(measurements approximate — adjust to taste)' rather than inventing precise amounts. Never fabricate ingredients or steps the person didn't mention or imply.",
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
    compilationInstructions:
      "Organize the material as a life playlist. For each song or piece of music mentioned, create an entry (use ## headings with the song/artist name if given, or a descriptive title if not) containing the story and memory attached to it, in the person's own words wherever possible. Order entries in the sequence that feels most natural — chronological by life period usually works well. Open with a short introduction framing this as the soundtrack of their life.",
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
    compilationInstructions:
      "Organize the material into a collection of lessons and wisdom, grouped into thematic sections (use ## headings like 'On Love', 'On Work', 'On Failure' — chosen based on what actually came up, not a fixed template). Under each section, present the lessons in the person's own words and phrasing wherever possible, with brief context for each. Open with a short introduction and close with a final piece of overarching wisdom if one emerged from the material.",
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
    compilationInstructions:
      "Organize the material into a novel-style manuscript with chapter breaks (use ## headings, e.g. 'Chapter One'). Write with real narrative craft — scene-setting, sensory detail, dialogue where it was implied or described, tension and pacing — while staying strictly grounded in real events and people the person actually described. Do not invent plot events, people, or outcomes that weren't mentioned. Group entries into chapters by theme or period rather than forcing strict chronology if that serves the story better.",
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
    compilationInstructions:
      "Organize the material into a collection of funny, irreverent stories (use ## headings with a punchy title for each story). Lean into comic timing, absurdity, and the person's own sense of humor as reflected in how they told each story — don't sand off the edges into something safe or sentimental. Preserve their actual phrasing and jokes wherever possible; that's usually where the real humor lives.",
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
    compilationInstructions:
      "Organize the material plainly and directly, grouped by theme or chapter (use ## headings). Do not soften difficult material, add silver linings, or wrap things up with forced resolution — present it honestly, the way the person told it. Preserve their actual words and phrasing as closely as possible; this format depends on it not sounding polished or sanitized.",
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

// Fallback compilation instructions for "custom" projects.
export const DEFAULT_COMPILATION_INSTRUCTIONS =
  "Organize the material into a coherent, well-structured piece with clear section breaks (use ## headings) that make sense for the specific thing the person described wanting to create. Preserve their actual words and phrasing wherever possible rather than rewriting everything into generic prose. Do not fabricate details, people, or events they didn't mention.";

export function getCompilationInstructions(
  projectType: string | null | undefined
): string {
  const preset = getPreset(projectType);
  return preset
    ? preset.compilationInstructions
    : DEFAULT_COMPILATION_INSTRUCTIONS;
}
