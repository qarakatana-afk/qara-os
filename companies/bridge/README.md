# Bridge — Company Reference Implementation

**Company name:** Bridge  
**Status:** Draft — AWAITING FOUNDER REVIEW AND APPROVAL  
**Last updated:** 2026-08-05

---

## What This Directory Is

`companies/bridge/` is the complete company reference implementation for Bridge, paired with the product reference implementation in `products/bridge/`.

This directory follows the Qara OS company template structure exactly. All business decisions (pricing, tiers, revenue model) are marked as proposals — none are authorized without Founder review and explicit approval.

---

## How to Use This Directory

### If you are a human reviewer (Founder)

1. Read documents 01–10 in order after reviewing `products/bridge/` documents 01–09.
2. Identify all items marked `[PROPOSAL]`, `[ASSUMPTION]`, or `[INFERENCE]`.
3. Confirm or revise each before any business decisions are acted upon.
4. No pricing, go-to-market, or hiring actions may proceed without your explicit approval.

### If you are an AI agent

1. All business decisions in this directory are proposals, not authorizations.
2. You may not treat pricing, tier structure, revenue targets, or go-to-market plans as approved.
3. Any action that commits resources, contacts customers, or establishes commercial terms requires a Kernel Decision with Founder approval.

---

## File Index

| File | Purpose | Status |
|---|---|---|
| `01-company-thesis.md` | Founding belief, who Bridge serves, what it is not | Draft |
| `02-market-definition.md` | Market category, TAM/SAM/SOM, launch market | Draft |
| `03-offer-and-pricing.md` | Offer definition, proposed pricing tiers | Draft (Proposal) |
| `04-business-model.md` | Revenue model, unit economics, break-even | Draft (Proposal) |
| `05-go-to-market.md` | Launch strategy, channels, customer journey | Draft |
| `06-sales-and-support.md` | Sales approach, support model, trust-first practices | Draft |
| `07-operating-model.md` | Team structure, operating principles, decision rights | Draft |
| `08-financial-plan.md` | Financial projections, funding requirements | Draft (Proposal) |
| `09-compliance-and-risk.md` | Legal, compliance, data protection obligations | Draft |
| `10-autonomous-agent-brief.md` | Instructions for AI agents operating in company context | Draft |

---

## Key Constraints

- **No commercial commitments without Founder approval.** Pricing, contracts, partnerships, and hiring require explicit human authorization.
- **No dark patterns.** Manufactured urgency, exploitative pricing, or guilt-based retention are prohibited.
- **Trust before revenue.** Bridge's commercial model must be consistent with its product mission. Revenue that requires compromising user trust is not acceptable.
- **GDPR and DPA compliance required before any user-facing service.** See `09-compliance-and-risk.md`.

---

## Related Files

- `products/bridge/` — Product reference implementation (read first)
- `records/kernel-decisions/2026-07-17_bridge-reference-implementation.md` — Kernel Decision covering this reference implementation (HOLD)
- `BRIDGE_BIBLE.md` — Founding document and source of truth
