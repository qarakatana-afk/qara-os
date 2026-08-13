# Bridge Legacy — Milestone 2 Scope Specification

**Module:** Bridge Legacy  
**Date:** 2026-08-13  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review  
**Status:** Draft — AWAITING FOUNDER REVIEW AND APPROVAL  
**Governing KDR:** KDR-2026-005 (`../../../records/kernel-decisions/2026-08-13_kdr-2026-005_bridge-legacy-m2-controlled-development.md`)

---

## 1. Purpose of This Document

This document defines the exact scope of Bridge Legacy Milestone 2 (M2). It is the authoritative scope reference for any M2 controlled development activity.

M2 extends the validated M1 foundation (individual Legacy creation, authenticated access, text-first guided conversation, persistent responses, owner-only privacy) with server-side AI-driven conversational deepening.

---

## 2. M2 Requirements

### 2.1 Must-Have Requirements

| ID | Requirement | Acceptance Criterion |
|---|---|---|
| LM2-01 | The system shall generate a server-side AI conversational follow-up question grounded in what the owner has already submitted in the current Legacy | The follow-up question references content from the owner's prior entries; it does not introduce entirely new topics absent from the owner's own words |
| LM2-02 | The system shall present one follow-up question at a time | No more than one AI-generated question is shown at any point in a conversation session |
| LM2-03 | The system shall support multi-turn conversation sessions | An owner can answer multiple follow-up questions in a single session; the session preserves context across turns |
| LM2-04 | The system shall allow the owner to skip a question, request a different subject, end the conversation session, or return to it later | Each of these four controls is reachable in the conversation interface; triggering any one of them does not cause data loss |
| LM2-05 | The system shall not treat AI inference as a factual statement about the owner | Structured signals derived from AI analysis are explicitly tagged as inferences and are traceable to the specific source entry that generated them |
| LM2-06 | The system shall persist the owner's typed response before sending it to the AI for follow-up generation | If AI generation fails at any point, the owner's response is already saved; no response is lost due to AI failure |
| LM2-07 | Conversation memory shall be maintained within a session but shall not introduce cross-session inference without the owner's awareness | Within a session, prior turns inform follow-up framing; cross-session memory, if used, is disclosed to the owner |
| LM2-08 | All owner content shall remain owner-only; no M2 feature may expose content to another user, a third party, or a public endpoint | An engineering audit confirms no M2 data pathway exposes owner content outside the owner's authenticated session |
| LM2-09 | Data model extensions introduced by M2 shall be limited to what M2 requirements strictly require | No schema additions beyond what supports LM2-01 through LM2-08 are introduced in M2 |

### 2.2 Explicitly Excluded from M2

```
- Real-time translation
- Bridge Translation or any translation pipeline
- Secondary-user messaging or access
- Speech-to-text or voice recording
- Translated transcripts
- Public sharing or any multi-user content access
- Production or public launch
- Milestone 3+ capabilities:
    - Sharing with family members
    - Multi-user collaborative Legacy
    - Video or audio capture
    - External publishing
    - Any capability not in Section 2.1 above
```

---

## 3. Definition of Done for M2

M2 is complete when all of the following are true:

```
- [ ] LM2-01 through LM2-09 pass acceptance testing
- [ ] AI failure recovery verified by engineering audit: owner responses persist 
      when AI is unavailable or returns an error
- [ ] Owner-only privacy isolation verified for all M2 data pathways
- [ ] No inference presented as owner fact in any UI surface
- [ ] Founder review of M2 completion evidence
- [ ] M2 completion recorded in an Operational Outcome Record (OOR-2026-003 or 
      assigned identifier)
```

---

## 4. External Dependencies (Actual, Not Assumed)

The following records the actual external dependencies for Bridge Legacy as understood from implementation evidence. Where this repository does not contain sufficient evidence, the field is marked UNKNOWN / REQUIRES EVIDENCE. The hypothetical Bridge Translation architecture in `products/bridge/06-technical-architecture.md` is **not** used as a substitute.

| Dependency | Category | Known Detail | Gap / Status |
|---|---|---|---|
| Clerk | Authentication | Used for owner authentication in the actual Legacy implementation (Replit project) | REQUIRES EVIDENCE: DPA status, data processing terms, GDPR compliance documentation |
| Database / persistence | Storage | Used to persist Legacies and responses | UNKNOWN: Provider identity, hosting region, encryption at rest confirmation |
| AI provider | Conversational AI (M2) | Server-side AI generation for conversational follow-ups | UNKNOWN: Provider identity, model, data retention terms, DPA |
| Hosting / runtime | Infrastructure | Replit project as development environment | UNKNOWN: Production hosting provider and region |

> **Note on UNKNOWN fields:** These must be resolved before M2 controlled development can proceed to any environment where real owner data is stored. They are not blockers for controlled development in an isolated environment (no real user data), but they are blockers for any deployment involving real personal data.

---

## 5. M2 Open Decisions

The following open decisions are specific to M2's actual requirements. These are not inherited from Bridge Translation's open decisions (OD-01 through OD-08 as referenced in prior governance records) unless an explicit cross-reference applies.

| ID | Decision | Required By | Options | Blocking? |
|---|---|---|---|---|
| LOD-01 | AI provider selection and data processing agreement | LM2-01; privacy constraint from M1 owner-only scope | Provider-specific — must prohibit retention and training use of owner content | Yes — before M2 involves real owner data |
| LOD-02 | Clerk DPA and GDPR data processing terms | Owner authentication via Clerk | Confirm existing Clerk agreement covers Legacy use; or establish separate DPA | Yes — before M2 involves real owner data |
| LOD-03 | Database hosting region and encryption at rest | LM2-08 privacy constraint; GDPR applicability | Confirm current provider; confirm encryption | Yes — before M2 involves real owner data |
| LOD-04 | Cross-session conversation memory: scope and disclosure | LM2-07 | Session-only memory (simpler, lower risk) vs. cross-session with disclosure | No for controlled development; must resolve before user-facing deployment |

> All four LODs are **not blocking for isolated controlled development** (no real user data). They are **blocking for any deployment involving real personal data**.

---

## Checklist

- [x] M2 requirements are enumerated and testable
- [x] Definition of done is stated
- [x] Explicitly excluded features are listed
- [x] External dependencies documented as known / unknown — not substituted from Bridge Translation
- [x] Open decisions are Legacy-specific (not inherited)
- [x] Status is draft awaiting Founder approval
