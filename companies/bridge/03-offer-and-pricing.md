# 03 — Offer and Pricing

**Company name:** Bridge  
**Date:** 2026-07-17  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review

---

## Purpose of This Document

This document defines exactly what Bridge offers and what it charges. Pricing must align with the human outcome and Qara OS values — not engineered to maximize extraction.

---

## 1. Core Offer

```
What the customer receives: Bridge is a multilingual companion app that lets you have 
real conversations with someone you love who speaks a different language. You speak and 
write in your language; they speak and write in theirs. Bridge handles the translation 
between you — quietly, without interrupting the conversation. Bridge also remembers the 
people in your life: their names, your shared history, the things that matter to you both. 
Over time, it becomes better at helping you sound like yourself in their language.

What problem it solves for them: The language gap in a close personal relationship — 
the feeling of being unable to say what you really mean, or to fully understand what 
the other person is saying.

What they must do to use it: Download the app, create a connection (name a person and 
their language), and begin a conversation. Setup takes under 2 minutes. The other person 
receives the conversation via link or app — no account required for them to participate.

What they do not get:
  - Bridge is not a general translation tool for tasks, documents, or work
  - Bridge is not a social network — there is no public profile, feed, or community
  - Bridge does not guarantee real-time spoken translation at conversation speed (v0.1)
  - Bridge does not work as an interpreter in professional, medical, or legal contexts
```

---

## 2. Offer Tiers

| Tier | What's Included | What's Not Included | Target Customer |
|---|---|---|---|
| Free (trial) | Core translation flow with 1 connection; 50 messages per month; no story recording; no relationship memory beyond the current session | Multiple connections; story recording; relationship memory; higher message volume | First-time users who want to experience Bridge before committing; lapsed users returning |
| Personal (paid) | Unlimited connections; 1,000 messages per month; relationship memory; story recording for up to 5 stories; data export | More than 5 stored stories; family plan features | An individual maintaining 1–3 cross-language personal relationships |
| Family (paid) | Everything in Personal; up to 3 connected accounts sharing relationship memory context; unlimited story archive | Enterprise or business use | A family unit where multiple members want to communicate with the same extended family network |

---

## 3. Pricing

```
Price: 
  Personal: $9.99/month or $89/year (equivalent to $7.42/month)
  Family: $17.99/month or $159/year (equivalent to $13.25/month)
  Free tier: Free, with the limits described above

Billing model: Monthly or Annual subscription; annual at a discount; no auto-renewing 
without clear disclosure at purchase; reminder before annual renewal

Free trial: 14-day free trial of Personal tier for new accounts; no payment information 
required to start the trial

Pricing rationale:
  - Customer willingness to pay basis: [ASSUMPTION] $9.99/month is within the range 
    that consumers pay for communication-adjacent apps (Duolingo Plus, Rosetta Stone) 
    and below the cost of a single professional translation session; willingness to pay 
    requires validation in pre-build user research
  - Competitive pricing benchmark: Duolingo Plus ~$7–13/month; DeepL Pro from $8.99/month; 
    general AI assistants $20/month; Bridge is priced below premium AI assistants and 
    competitive with language learning apps [INFERENCE]
  - Unit economics implication: At $9.99/month, covering infrastructure and API costs 
    at low scale requires careful cost management — see 08-financial-plan.md

Price points that are prohibited by Qara OS values:
  - Must not charge in ways that exploit limited income or vulnerability: Bridge's target 
    community includes economically diverse immigrant households; the free tier must 
    provide genuine value, not a bait-and-switch experience; annual pricing provides 
    meaningful savings; scholarship/subsidized access should be considered in Year 2
  - Must not use dark pricing patterns: No anchoring with fake "original prices"; 
    no hidden fees; no price increases at renewal without 30-day advance notice; 
    no paywalls that appear mid-conversation
```

---

## 4. Value Proposition

> Bridge is the only companion built for conversations that matter most — the ones that cross a language barrier — and it gets out of the way so you can focus on the person, not the technology.

---

## 5. Offer Constraints (Qara OS)

```
- Must not monetize user data: Confirmed. Bridge does not sell, license, or share 
  conversation content or relationship metadata for any commercial purpose.

- Must not create lock-in that removes user agency: Confirmed. Users can export all 
  their data at any time. Cancellation is simple and immediate. Conversation history 
  and relationship data are fully portable. No lock-in by proprietary format.

- Must not include engagement-maximizing mechanisms not aligned with human outcome: 
  Confirmed. No streak mechanics, no gamified message counts, no "you haven't called 
  [Name] in X days" prompts. Message limits on the free tier exist as a business 
  necessity, not an engagement driver.
```

---

## 6. Offer Evolution

```
Planned expansion (if any):
  - Year 2: Real-time spoken translation (if technology and quality meet the Bridge 
    standard — requires separate Kernel Decision)
  - Year 2: Integration with existing messaging platforms (if privacy terms can be met — 
    requires separate Kernel Decision and legal review)
  - Year 2: Subsidized or scholarship access for communities with demonstrated need 
    and low ability to pay
  - Year 3+: Institutional partnerships (e.g., healthcare settings for caregiver 
    communication) — requires separate Kernel Decision; must not compromise personal 
    product identity

Governance for offer changes: Any change to the core offer, pricing model, or tier 
structure requires a Kernel Decision and Founder approval before implementation. 
Pricing increases require 30-day advance notice to existing subscribers and a recorded 
rationale in records/.
```

---

## Checklist

- [x] Core offer is described in plain language
- [x] Price is explicit with billing model
- [x] Pricing rationale has evidence labels
- [x] Dark pricing patterns are explicitly excluded
- [x] Qara OS offer constraints are confirmed
- [x] This document is consistent with 01 and 02
