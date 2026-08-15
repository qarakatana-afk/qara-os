# 10 — Open Decisions

**Product name:** Bridge  
**Date:** 2026-08-05  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review  
**Status:** Draft — AWAITING FOUNDER REVIEW AND APPROVAL

---

## Purpose of This Document

This document tracks all open decisions that must be resolved before each build phase may begin. It is referenced by `09-build-handoff.md` and the build authorization Kernel Decision.

**No build phase may begin until all decisions required for that phase are marked RESOLVED with a recorded outcome and responsible owner.**

---

## Decision Status Key

| Status | Meaning |
|---|---|
| OPEN | Not yet resolved; blocks the indicated phase |
| IN PROGRESS | Under active investigation; not yet finalized |
| RESOLVED | Decision made; outcome recorded; owner confirmed |
| DEFERRED | Explicitly deferred to a later phase with rationale |

---

## Phase 0 — Foundation Decisions (Required Before Any Build)

| ID | Decision Required | Owner | Status | Resolution / Notes |
|---|---|---|---|---|
| OD-01 | Translation API selection — which provider(s) will be used (DeepL, Google, Azure, other)? Quality, pricing, DPA availability, and emotional language performance must all be evaluated. | Founder + Engineering | OPEN | See `08-validation-plan.md` Method 3 for quality spot-check protocol. DPA must be signed before any user data is sent to the provider. |
| OD-02 | Translation API Data Processing Agreement — DPA must be signed with selected provider before any user message content is transmitted. | Founder (Legal) | OPEN | Blocks Phase 1. No user content may be sent to any translation API without a signed DPA. |
| OD-03 | Speech-to-text (STT) approach — self-hosted Whisper or external STT API? Self-hosted preserves privacy; external API requires separate DPA. | Founder + Engineering | OPEN | Privacy implication: self-hosted is preferred under Qara OS privacy-by-default principle. If external API is chosen, a separate DPA and risk assessment are required. |
| OD-04 | Secondary user authentication approach — magic link (no account required) or lightweight account creation? Affects UX, security, and abuse prevention. | Founder + UX | OPEN | Decision must include UX validation that the chosen approach does not create barriers for the less technical secondary user (see Gate 2 in `08-validation-plan.md`). |
| OD-05 | Hosting environment and region — EU-region hosting is the default assumption for GDPR compliance. Must confirm hosting provider, region, and data residency commitments. | Founder + Engineering | OPEN | EU-region hosting assumed in `06-technical-architecture.md`. Confirm provider (AWS EU, GCP EU, Hetzner, other) and data residency SLA. |
| OD-06 | Database encryption approach — encryption at rest is required (`06-technical-architecture.md`). Must confirm: key management approach, rotation policy, and whether a managed service (RDS, Cloud SQL) or self-managed PostgreSQL is used. | Engineering | OPEN | Encryption at rest is non-negotiable. Key management and rotation policy must be documented before schema design begins. |
| OD-07 | CI/CD pipeline — automated testing, deployment pipeline, and secret management approach must be defined before code is written. | Engineering | OPEN | Must include: no secrets in code, automated lint/test on PR, deployment to staging before production. |
| OD-08 | Legal review — GDPR, COPPA, and CCPA applicability must be assessed by a qualified legal reviewer before any user data is collected. | Founder (Legal) | OPEN | Blocks Phase 1. If any users under 13 could use Bridge, COPPA applies. If any EU residents could use Bridge, GDPR applies. Both are assumed to apply until legal review confirms otherwise. |

---

## Phase 1 — Core Translation Flow Decisions

| ID | Decision Required | Owner | Status | Resolution / Notes |
|---|---|---|---|---|
| OD-09 | Language pairs for v0.1 launch — which 5 language pairs will be supported in Phase 1? Must be validated for emotional translation quality (see `08-validation-plan.md` Method 3). | Founder + Engineering | OPEN | English/Spanish assumed as first pair based on launch market definition in `companies/bridge/02-market-definition.md`. |
| OD-10 | Consent UX for no-default-storage — how will both-party consent for storage opt-in be communicated and recorded? Must be tested against Gate 5 in `08-validation-plan.md`. | Founder + UX | OPEN | Must not use dark patterns. Consent must be freely given, specific, informed, and unambiguous (GDPR Article 7). |
| OD-11 | Account recovery approach — what is the minimum viable account model that supports Phase 1 while avoiding unnecessary data collection? | Engineering | OPEN | `09-build-handoff.md` states email or phone number for recovery is acceptable; no required profile setup. Must confirm data retention policy for recovery credentials. |

---

## Phase 2 — Quality and Reach Decisions

| ID | Decision Required | Owner | Status | Resolution / Notes |
|---|---|---|---|---|
| OD-12 | Relationship context storage model — what data is stored, with what consent, to enable relationship-context translation (F-11)? | Founder + Engineering | DEFERRED | Deferred to Phase 2. Requires separate consent model design and a Kernel Decision before implementation. No relationship data may be stored in Phase 1. |
| OD-13 | Language pair expansion to 20 pairs — which additional 15 pairs? Quality audit protocol? | Founder + Engineering | DEFERRED | Deferred to Phase 2. Each new pair requires quality validation before enabling. |

---

## Phase 3 — Story and Memory Decisions

| ID | Decision Required | Owner | Status | Resolution / Notes |
|---|---|---|---|---|
| OD-14 | Story feature consent model — what is the both-party consent model for recording, translation, and storage of stories? | Founder + UX + Legal | DEFERRED | Requires separate Kernel Decision per `09-build-handoff.md` Phase 3. Not authorized until Phase 2 is complete. |
| OD-15 | Story archive storage security — encryption, access control, and retention policy for story archive. | Engineering + Legal | DEFERRED | Deferred to Phase 3. Encryption at rest is required; access control must be both-party consent gated. |

---

## Resolution Protocol

When a decision is resolved:

1. Update the Status column to RESOLVED.
2. Record the outcome in the Resolution / Notes column.
3. Create or update a Kernel Decision record in `records/kernel-decisions/` if the decision is material (architecture, data model, legal, or auth-related).
4. Notify the Founder that the decision has been recorded and is ready for review.
5. Do not begin the dependent build phase until the Founder has confirmed the resolution.

---

## Checklist

- [x] All Phase 0 decisions are listed and explicitly marked OPEN
- [x] All Phase 1 decisions are listed
- [x] Phase 2 and 3 decisions are listed as DEFERRED with rationale
- [x] Resolution protocol is defined
- [x] Document is consistent with `09-build-handoff.md` and `06-technical-architecture.md`
