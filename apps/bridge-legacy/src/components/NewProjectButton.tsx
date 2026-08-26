"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface NewProjectButtonProps {
  label: string;
  className?: string;
}

export default function NewProjectButton({
  label,
  className,
}: NewProjectButtonProps) {
  const router = useRouter();
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    if (creating) return;
    setCreating(true);
    setError(null);
    try {
      const res = await fetch("/api/legacy", { method: "POST" });
      if (!res.ok) throw new Error();
      const { legacy } = await res.json();
      router.push(`/legacy/${legacy.id}/project`);
    } catch {
      setError("Couldn't start a new project — please try again.");
      setCreating(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button onClick={handleClick} disabled={creating} className={className}>
        {creating ? "Starting…" : label}
      </button>
      {error && (
        <p className="font-sans text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}
