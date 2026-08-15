# Bridge — Product Reference Implementation

**Product name:** Bridge  
**Status:** Draft — AWAITING FOUNDER REVIEW AND APPROVAL  
**Last updated:** 2026-08-05

---

## What This Directory Is

`products/bridge/` is the complete product reference implementation for Bridge, a communication companion that removes barriers for better connections and understanding between people across language differences.

This directory follows the Qara OS product template structure exactly. Each file is numbered to indicate reading and execution order.

---

## How to Use This Directory

### If you are a human reviewer (Founder)

1. Read documents 01–09 in order.
2. Verify that each document reflects your intent for Bridge.
3. Address all items marked `[ASSUMPTION]`, `[INFERENCE]`, or `[PROPOSAL]` — confirm or revise.
4. Review and address Open Items in `records/kernel-decisions/2026-07-17_bridge-reference-implementation.md`.
5. Record your approval in a new Kernel Decision before authorizing any build work.

### If you are an AI agent

1. Read documents 01–09 completely before doing anything else.
2. You are not authorized to build unless a Kernel Decision with status ACTIVE and decision PROCEED exists in `records/kernel-decisions/`.
3. See `09-build-handoff.md` Section 5 for AI agent build rules.
4. Record all material decisions in `records/kernel-decisions/`.
5. Do not self-approve. Halt and escalate to the Founder when in doubt.

### If you are a builder (human engineer)

1. Build authorization is required before any code is written. See `09-build-handoff.md` Section 1.
2. Build in phases. Do not start Phase 1 until Phase 0 is complete.
3. Validate at each gate before advancing. See `08-validation-plan.md`.
4. Record all decisions in `records/kernel-decisions/`.

---

## File Index

| File | Purpose | Status |
|---|---|---|
| `01-product-brief.md` | What Bridge is, who it serves, and what it must not do | Draft |
| `02-human-outcome.md` | The specific human outcome Bridge is designed to produce | Draft |
| `03-user-and-problem.md` | Who the users are and the root-cause problem | Draft |
| `04-experience-specification.md` | How the experience should feel; experience principles; core flow | Draft |
| `05-functional-requirements.md` | What Bridge must do (must-have, should-have, prohibited) | Draft |
| `06-technical-architecture.md` | System components, technology choices, open architectural decisions | Draft |
| `07-risk-privacy-and-safety.md` | Risks, privacy safeguards, safety requirements, pre-launch checklist | Draft |
| `08-validation-plan.md` | How Bridge's human outcome is validated; build gates; launch criteria | Draft |
| `09-build-handoff.md` | Instructions for authorized builders; build sequence; phase gates | Draft |
| `10-open-decisions.md` | Tracker for all open decisions requiring resolution before build | Draft |
| `11-validation-evidence.md` | Evidence collection placeholders for each build gate | Draft |
| `12-pilot-summary.md` | Pilot summary template for post-launch validation period | Draft |

---

## Build Authorization Status

```
CURRENT STATUS: NOT AUTHORIZED FOR BUILD
RECONCILIATION DATE: 2026-08-12

Completed (no longer blocking):
  - [x] Qara OS governed-learning Phase 1 artifacts merged to main (PR #8, commit 1553b19)
        → OOR-2026-001, KDR-2026-003 (PROCEED recommendation), and PHASE_1_CHANGELOG on main
        → KDR-2026-003 Founder sign-off still PENDING; re-evaluation of KDR-2026-002 now required

Still required before build may begin:
  - [ ] KDR-2026-003 Founder sign-off on Phase 1 governed-learning closure
  - [ ] Fresh Bridge build-authorization Kernel Decision
        (KDR-2026-002 RE-EVALUATION conditions are met; HOLD must be resolved by a new KDR)
  - [ ] OD-01: Translation API selected (provider, pricing, DPA availability)
  - [ ] OD-02: DPA signed with selected translation provider (blocks Phase 1)
  - [ ] OD-03: STT approach decided (self-hosted Whisper vs external API)
  - [ ] OD-04: Secondary user authentication approach decided
  - [ ] OD-05: Hosting environment and region confirmed
  - [ ] OD-06: Database encryption and key management approach confirmed
  - [ ] OD-07: CI/CD pipeline approach confirmed
  - [ ] OD-08: Legal review of GDPR, COPPA, and CCPA applicability complete (blocks Phase 1)
  - [ ] Pre-build validation evidence collected (Methods 1–3 in 11-validation-evidence.md;
        independent of build authorization — may begin after research protocol is approved)

Note: Validation placeholders in 11-validation-evidence.md are not evidence. No gate
      may be marked passed until real evidence is recorded.
```

---

## Key Governance Constraints

- **No self-approval.** AI agents may not authorize their own work. All Kernel Decisions require human steward approval before status changes from HOLD to ACTIVE.
- **Privacy by default.** No user data is stored unless the user explicitly opts in. This is a hard constraint, not a default-on setting.
- **Trust over growth.** No feature that prioritizes engagement, retention, or growth over user trust, privacy, or consent may be added.
- **Human approval before launch.** No user-facing deployment may occur without Founder review and approval. See `08-validation-plan.md` Section 4.

---

## Related Files

- `records/kernel-decisions/2026-07-17_bridge-reference-implementation.md` — Kernel Decision covering this reference implementation (HOLD)
- `records/kernel-decisions/2026-08-09_kdr-2026-002_bridge-build-authorization-hold.md` — Kernel Decision for build authorization (HOLD — re-evaluation required; Phase 1 complete)
- `records/assumption-log/bridge-assumptions.md` — Bridge assumption log
- `records/risk-log/bridge-risks.md` — Bridge risk register
- `companies/bridge/` — Corresponding company reference implementation
- `BRIDGE_BIBLE.md` — Founding document and source of truth for Bridge's purpose
