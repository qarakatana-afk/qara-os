// POST /api/stripe/webhook — Stripe calls this directly (not the browser).
// We only trust it once the signature is verified against the raw body,
// which is why this route reads req.text() instead of req.json().
//
// Register this endpoint in the Stripe Dashboard (or via `stripe listen`
// locally) pointing at: https://<your-domain>/api/stripe/webhook
// Subscribe it to the "checkout.session.completed" event.

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/db";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const signature = req.headers.get("stripe-signature");
  const rawBody = await req.text();

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error("[stripe/webhook] Signature verification failed:", error);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const legacyId = session.metadata?.legacyId;

    if (!legacyId) {
      console.error("[stripe/webhook] Missing legacyId in session metadata");
      return NextResponse.json({ received: true });
    }

    // Only unlock on confirmed payment — session.completed can fire even
    // for sessions still awaiting async payment methods.
    if (session.payment_status === "paid") {
      await prisma.legacy.update({
        where: { id: legacyId },
        data: {
          isUnlocked: true,
          stripeCustomerId:
            typeof session.customer === "string" ? session.customer : null,
          stripeCheckoutId: session.id,
          unlockedAt: new Date(),
        },
      });
    }
  }

  return NextResponse.json({ received: true });
}
