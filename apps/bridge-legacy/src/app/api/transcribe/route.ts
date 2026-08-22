// POST /api/transcribe — accepts an audio recording, stores it permanently
// in Vercel Blob, and transcribes it to text via Groq's Whisper API.
//
// Returns both the transcript (to be saved as an Entry's content, exactly
// like a typed response) and the permanent audio URL (to be saved as that
// Entry's audioUrl, for playback later). This keeps voice and text entries
// structurally identical everywhere else in the app — the AI follow-up
// flow, the entries page, and signal extraction all just see text content,
// with audio as an optional add-on.

import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

const GROQ_TRANSCRIBE_URL =
  "https://api.groq.com/openai/v1/audio/transcriptions";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const groqKey = process.env.GROQ_API_KEY;
  if (!groqKey) {
    console.error("[transcribe] GROQ_API_KEY is not set in this environment.");
    return NextResponse.json(
      { error: "Transcription is not configured yet." },
      { status: 500 }
    );
  }

  const formData = await req.formData();
  const audioFile = formData.get("audio");

  if (!audioFile || !(audioFile instanceof File)) {
    console.error(
      "[transcribe] No valid audio file in form data. Received:",
      typeof audioFile,
      audioFile
    );
    return NextResponse.json(
      { error: "No audio file provided" },
      { status: 400 }
    );
  }

  // Reasonable ceiling to avoid runaway uploads — about 15 minutes of
  // typical voice-memo audio.
  const MAX_BYTES = 25 * 1024 * 1024;
  if (audioFile.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "Recording is too long. Please keep it under 15 minutes." },
      { status: 413 }
    );
  }

  // Step 1: Store the original audio permanently, scoped to this owner.
  let audioUrl: string;
  try {
    const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
    if (!blobToken) {
      console.error(
        "[transcribe] BLOB_READ_WRITE_TOKEN is not set in this environment."
      );
    }
    const blob = await put(
      `voice-memos/${userId}/${Date.now()}-${audioFile.name || "recording.webm"}`,
      audioFile,
      { access: "public" }
    );
    audioUrl = blob.url;
  } catch (blobError) {
    console.error("[transcribe] Vercel Blob put() failed:", blobError);
    return NextResponse.json(
      {
        error: "Couldn't save the recording. Please try again.",
        debug:
          process.env.NODE_ENV !== "production"
            ? String(blobError)
            : undefined,
      },
      { status: 500 }
    );
  }

  // Step 2: Transcribe via Groq's Whisper API. Non-fatal if it fails — the
  // audio itself is already safely stored either way.
  try {
    const transcribeForm = new FormData();
    transcribeForm.append("file", audioFile, audioFile.name || "recording.webm");
    transcribeForm.append("model", "whisper-large-v3-turbo");

    const groqRes = await fetch(GROQ_TRANSCRIBE_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${groqKey}` },
      body: transcribeForm,
    });

    if (!groqRes.ok) {
      const errorBody = await groqRes.text();
      console.error(
        "[transcribe] Groq API returned an error:",
        groqRes.status,
        errorBody
      );
      return NextResponse.json({
        audioUrl,
        transcript: null,
        transcriptionFailed: true,
        message:
          "Your recording was saved, but couldn't be transcribed automatically. You can type what you said instead.",
      });
    }

    const data = await groqRes.json();
    const transcript = (data.text ?? "").trim();

    if (!transcript) {
      return NextResponse.json({
        audioUrl,
        transcript: null,
        transcriptionFailed: true,
        message:
          "Your recording was saved, but the transcription came back empty. You can type what you said instead.",
      });
    }

    return NextResponse.json({ audioUrl, transcript, transcriptionFailed: false });
  } catch {
    return NextResponse.json({
      audioUrl,
      transcript: null,
      transcriptionFailed: true,
      message:
        "Your recording was saved, but couldn't be transcribed automatically. You can type what you said instead.",
    });
  }
}
