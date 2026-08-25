import Stripe from "stripe";

// Single shared Stripe client, server-side only. No apiVersion pinned here
// on purpose — the installed `stripe` package version already pins a
// compatible default, and hardcoding one here risks drifting out of sync
// with it.
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// One-time price to unlock full viewing + download of a compiled piece.
// Override with STRIPE_UNLOCK_PRICE_CENTS if you want to change it without
// a code change (e.g. to run a promo).
export const UNLOCK_PRICE_CENTS = Number(
  process.env.STRIPE_UNLOCK_PRICE_CENTS ?? 2900
);
