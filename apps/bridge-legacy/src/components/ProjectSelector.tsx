"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PROJECT_PRESETS } from "@/lib/projectTypes";

interface ProjectSelectorProps {
  legacyId: string;
  currentProjectType?: string | null;
  currentProjectDetail?: string | null;
}

export default function ProjectSelector({
  legacyId,
  currentProjectType,
  currentProjectDetail,
}: ProjectSelectorProps) {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(
    currentProjectType ?? null
  );
  const [customText, setCustomText] = useState(
    currentProjectType === "custom" ? currentProjectDetail ?? "" : ""
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isCustom = selected === "custom";
  const canSave = selected && (!isCustom || customText.trim().length > 0);

  async function handleSave() {
    if (!canSave || saving) return;
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/legacy", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          legacyId,
          projectType: selected,
          projectDetail: isCustom ? customText.trim() : null,
        }),
      });
      if (!res.ok) throw new Error();
      router.push(`/legacy/${legacyId}`);
      router.refresh();
    } catch {
      setError("Couldn't save your choice — please try again.");
      setSaving(false);
    }
  }

  return (
    <div className="page-container">
      <div className="mb-8 text-center">
        <h1 className="font-serif text-3xl text-stone-800 mb-3">
          What do you want to create?
        </h1>
        <p className="body-text max-w-md mx-auto">
          Pick whatever feels right — you can change this anytime. Whatever
          you choose, the questions will be shaped around it.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {PROJECT_PRESETS.map((preset) => (
          <button
            key={preset.id}
            onClick={() => setSelected(preset.id)}
            className={`text-left rounded-xl border px-4 py-3 transition-colors ${
              selected === preset.id
                ? "border-warm-500 bg-warm-100"
                : "border-warm-200 bg-white hover:border-warm-300"
            }`}
          >
            <p className="font-serif text-base text-stone-800">
              {preset.label}
            </p>
          </button>
        ))}

        <button
          onClick={() => setSelected("custom")}
          className={`text-left rounded-xl border px-4 py-3 transition-colors sm:col-span-2 ${
            selected === "custom"
              ? "border-warm-500 bg-warm-100"
              : "border-warm-200 bg-white hover:border-warm-300"
          }`}
        >
          <p className="font-serif text-base text-stone-800">
            Something else
          </p>
          <p className="font-sans text-xs text-stone-400 mt-1">
            Tell me exactly what you're making — however you'd describe it.
          </p>
        </button>
      </div>

      {isCustom && (
        <textarea
          className="input-text w-full resize-none min-h-[90px] mb-4"
          placeholder="e.g. 'my life as a tragedy I never fully got over', 'a satirical take on my career', 'random wisdom that doesn't fit anywhere else'…"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
        />
      )}

      {error && (
        <div className="card border-red-100 bg-red-50 text-red-700 font-sans text-sm mb-4">
          {error}
        </div>
      )}

      <div className="flex justify-center">
        <button
          onClick={handleSave}
          disabled={!canSave || saving}
          className="btn-primary"
        >
          {saving ? "Saving…" : "Start"}
        </button>
      </div>
    </div>
  );
}
