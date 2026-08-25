// POST /api/stripe/checkout — starts a one-time Stripe Checkout Session to
// unlock full viewing + download of the owner's compiled piece. No
// subscriptions: this is a single payment per Legacy.

import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { stripe, UNLOCK_PRICE_CENTS } from "@/lib/stripe";
import { getPreset } from "@/lib/projectTypes";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const legacy = await prisma.legacy.findUnique({
    where: { ownerId: userId },
  });

  if (!legacy) {
    return NextResponse.json({ error: "Legacy not found" }, { status: 404 });
  }

  if (legacy.isUnlocked) {
    return NextResponse.json(
      { error: "This is already unlocked." },
      { status: 400 }
    );
  }

  const preset = legacy.projectType ? getPreset(legacy.projectType) : null;
  const projectLabel =
    legacy.projectType === "custom" && legacy.projectDetail
      ? legacy.projectDetail
      : (preset?.label ?? "your piece");

  const origin = req.nextUrl.origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: UNLOCK_PRICE_CENTS,
            product_data: {
              name: `Unlock: ${projectLabel}`,
              description:
                "Full viewing and download of your finished piece on Bridge Legacy.",
            },
          },
        },
      ],
      metadata: {
        legacyId: legacy.id,
        ownerId: userId,
      },
      success_url: `${origin}/legacy/create?unlocked=1`,
      cancel_url: `${origin}/legacy/create?unlocked=0`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[stripe/checkout] Failed to create session:", error);
    return NextResponse.json(
      { error: "Couldn't start checkout — please try again." },
      { status: 503 }
    );
  }
}
