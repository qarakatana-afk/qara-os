"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Stripe redirects the browser back right after payment, but the webhook
// that actually flips `isUnlocked` in the database can land a second or
// two later. This bridges that gap with a couple of quiet retries instead
// of showing the paywall again right after someone paid.
export default function UnlockPending() {
  const router = useRouter();
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (attempt >= 4) return;
    const timer = setTimeout(
      () => {
        setAttempt((a) => a + 1);
        router.refresh();
      },
      1500 * (attempt + 1)
    );
    return () => clearTimeout(timer);
  }, [attempt, router]);

  return (
    <div className="card text-center py-8 mb-6">
      <p className="body-text">Confirming your payment…</p>
    </div>
  );
}
