# Bridge Legacy — Module Scope Specification

**Module:** Bridge Legacy  
**Date:** 2026-08-13  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review  
**Status:** Draft — AWAITING FOUNDER REVIEW AND APPROVAL  
**Governing KDR:** KDR-2026-004 (`../../../records/kernel-decisions/2026-08-13_kdr-2026-004_bridge-legacy-module-scoping.md`)

---

## 1. Purpose

Bridge Legacy is a living-story and wisdom-capture experience. It helps people preserve the stories, passions, memories, recipes, knowledge, personality, and experiences that make a life meaningful.

Bridge Legacy is not an end-of-life product or a memorial tool. It is for people who are alive, present, and want what they know and who they are to outlast a moment. It meets people in the middle of a life, not at its end.

Bridge Legacy is a distinct module of the Bridge companion system. It does not inherit the requirements, open decisions, or architecture constraints of Bridge Translation unless a specific shared requirement genuinely applies and is explicitly cited.

---

## 2. Relationship to Bridge

Bridge Legacy is one companion capability within the Bridge system defined in `products/bridge/01-product-brief.md`. The placeholder entry for Legacy in `products/bridge/05-functional-requirements.md` section 5.4 is superseded by this document for all Legacy-specific governance purposes.

Bridge Legacy does **not** require Bridge Translation to function. Requirements from Bridge Translation's specification apply to Legacy only where explicitly cited in this document or in a Legacy-specific Kernel Decision.

---

## 3. Current Scope

The following capabilities constitute the authorized scope of Bridge Legacy as of this specification. Each was either validated in Milestone 1 or is proposed in Milestone 2 scope (see `02-milestone-2-scope.md`).

| Capability | Milestone | Status |
|---|---|---|
| Individual Legacy creation | M1 | Validated externally (see OOR-2026-002) |
| Authenticated owner access | M1 | Validated externally (see OOR-2026-002) |
| Text-first guided conversation | M1 | Validated externally (see OOR-2026-002) |
| Persistent responses | M1 | Validated externally (see OOR-2026-002) |
| Owner-only privacy isolation | M1 | Validated externally (see OOR-2026-002) |
| Leave and return (session continuity) | M1 | Validated externally (see OOR-2026-002) |
| Approved product positioning | M1 | Validated externally (see OOR-2026-002) |
| Scope control (no unauthorized features) | M1 | Validated externally (see OOR-2026-002) |
| Server-side AI conversational follow-ups | M2 | Proposed — not yet authorized |
| Grounded one-question-at-a-time exploration | M2 | Proposed — not yet authorized |
| Multi-turn conversation sessions | M2 | Proposed — not yet authorized |
| Skip / change-subject / end / return controls | M2 | Proposed — not yet authorized |
| Conversation memory without inference-as-fact | M2 | Proposed — not yet authorized |
| Structured signals linked to source entries | M2 | Proposed — not yet authorized |
| Response-first persistence (AI failure recovery) | M2 | Proposed — not yet authorized |
| Minimal necessary data-model extensions | M2 | Proposed — not yet authorized |

---

## 4. Explicitly Out of Scope

The following capabilities are excluded from Bridge Legacy at this specification level. No implementation of these capabilities is authorized without a new Kernel Decision and Founder approval.

```
- Real-time translation
- Bridge Translation capability (any part)
- Secondary-user messaging
- Speech-to-text
- Voice recording
- Translated transcripts
- Public sharing
- Production or public launch
- Milestone 3+ functionality
- Any capability not listed in Section 3 above
```

---

## 5. Governing Principles (Legacy-Specific)

1. **Legacy belongs to the person who created it.** Owner-only access is a non-negotiable constraint, not a default setting.

2. **AI serves the storyteller, not the platform.** AI-generated follow-ups must be grounded in what the owner has already shared. The AI must not introduce new topics, inferences, or framings that extend beyond the owner's expressed material.

3. **No inference is treated as fact.** Structured signals derived from AI analysis are traceable to specific source entries and are clearly distinguished from what the owner actually said.

4. **Failure recovery protects the owner's words.** If the AI fails, the owner's response is persisted regardless. The owner's words are never lost due to a system failure.

5. **Presence, not performance.** Bridge Legacy does not rate, score, rank, or compare stories. It does not prompt people to add more, engage more, or share more than they choose to.

---

## 6. External Dependencies (Known and Unknown)

Dependencies for the actual current implementation are documented in `02-milestone-2-scope.md` section 4. Where implementation evidence is unavailable in this repository, dependencies are marked UNKNOWN / REQUIRES EVIDENCE.

---

## 7. Controlling Authority

| Layer | Document |
|---|---|
| Highest | `source/FOUNDERS_CHARTER.md` |
| Identity | `QS-003_Art_of_Presence_v0.1.md` |
| Kernel | `docs/kernel/07-Kernel.md` (v0.2) |
| Legacy scoping | `records/kernel-decisions/2026-08-13_kdr-2026-004_bridge-legacy-module-scoping.md` |
| Legacy M2 authorization | `records/kernel-decisions/2026-08-13_kdr-2026-005_bridge-legacy-m2-controlled-development.md` (pending Founder approval) |
| This document | `products/bridge/legacy/01-module-scope.md` |

---

## 8. Scope Boundary Statement

```
In scope for Bridge Legacy (current): Story and wisdom capture for the owner;
AI-assisted conversational deepening; owner-controlled persistence; privacy
isolation at the individual Legacy level.

Out of scope without a new Kernel Decision and Founder approval: Any capability
listed in Section 4; any expansion of user base beyond the authenticated owner;
any translation, voice, or real-time feature; Milestone 3+ functionality.

Any request to add a feature outside this boundary requires a new Kernel Decision
and explicit Founder approval before implementation begins.
```

---

## Checklist

- [x] Purpose is specific to Bridge Legacy — not inherited from Bridge Translation
- [x] Current scope is enumerated with milestone attribution
- [x] Out-of-scope list is explicit
- [x] AI behavior constraints are stated
- [x] Controlling authority hierarchy is cited
- [x] Status is draft awaiting Founder approval
