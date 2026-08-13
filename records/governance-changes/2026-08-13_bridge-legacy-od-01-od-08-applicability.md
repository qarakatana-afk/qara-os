# Bridge Legacy Milestone 2 — Applicability Record for Historical OD-01 through OD-08

**Date:** 2026-08-13  
**Prepared by:** Copilot Coding Agent  
**Status:** Draft — AWAITING FOUNDER REVIEW AND APPROVAL

---

## Purpose

This record evaluates whether the historical Bridge open decisions OD-01 through OD-08 apply to
**Bridge Legacy Milestone 2 (M2)**.

It does **not** rewrite, delete, or supersede the original historical decisions in
`products/bridge/10-open-decisions.md` from PR #7. Those entries remain part of Bridge
Translation's governance history exactly as recorded there. This document adds a
Legacy-specific applicability layer only.

---

## Legacy M2 Scope Used for This Applicability Review

For this review, Bridge Legacy M2 is treated as **controlled development only** for a
text-first, owner-only Legacy flow that adds server-side AI conversational deepening to private
story content.

The following are **out of scope and not authorized by this record**:

- production deployment
- voice or STT
- Bridge Translation functionality
- public sharing
- Milestone 3 or later functionality

This scope is consistent with the current Bridge documentation that:

- treats Bridge Legacy as a separate module requiring separate Kernel Decisions before build work
  (`products/bridge/05-functional-requirements.md:8`, `products/bridge/05-functional-requirements.md:103`)
- places story recording and storage behind separate later-phase authorization rather than inside
  the current Translation build path
  (`products/bridge/09-build-handoff.md:96`, `products/bridge/09-build-handoff.md:100`)
- identifies story preservation as Bridge Legacy's human outcome
  (`products/bridge/02-human-outcome.md:97`)

---

## Applicability Summary

| Historical OD | Historical topic | Legacy M2 applicability |
|---|---|---|
| OD-01 | Translation API selection | NOT APPLICABLE |
| OD-02 | Translation API DPA | NOT APPLICABLE |
| OD-03 | STT approach | NOT APPLICABLE |
| OD-04 | Secondary user authentication approach | NOT APPLICABLE |
| OD-05 | Hosting environment and region | CONDITIONALLY APPLICABLE |
| OD-06 | Database encryption approach | APPLICABLE |
| OD-07 | CI/CD pipeline | CONDITIONALLY APPLICABLE |
| OD-08 | Legal review (GDPR/COPPA/CCPA) | CONDITIONALLY APPLICABLE |

---

## Decision-by-Decision Analysis

### OD-01 — Translation API selection

**Applicability:** NOT APPLICABLE

**Evidence**

- The historical OD is explicitly about **translation API** selection in the Bridge Translation
  build path (`products/bridge/10-open-decisions.md` in PR #7 history).
- Bridge Legacy remains separately scoped and is not automatically authorized through the
  Translation path (`products/bridge/05-functional-requirements.md:8`,
  `products/bridge/05-functional-requirements.md:103`).
- This Legacy M2 record excludes Translation from scope.

**Rationale**

Legacy M2 does not inherit a Translation-provider choice merely because it is part of the Bridge
family. If Legacy M2 uses an AI processor for private story deepening, that creates a new
Legacy-specific processor decision rather than reusing the Translation API decision.

**Derived Legacy-specific decision**

- **LOD-01:** AI processor selection and data-processing terms for private story content.

### OD-02 — Translation API DPA

**Applicability:** NOT APPLICABLE

**Evidence**

- The historical OD is specific to a **translation API** DPA before user message content is sent
  to that provider (`products/bridge/10-open-decisions.md` in PR #7 history).
- Current Bridge privacy controls require vendor review whenever third-party processors receive
  private content (`products/bridge/06-technical-architecture.md:184`,
  `products/bridge/07-risk-privacy-and-safety.md:43`).
- This Legacy M2 record does not authorize Translation.

**Rationale**

The historical Translation DPA decision does not directly apply because the processor category is
different. The underlying privacy control still matters, but for Legacy M2 it must be recorded as
an AI/private-story-content processor decision instead of altering the historical Translation OD.

**Derived Legacy-specific decision**

- **LOD-01:** AI processor selection and DPA / no-retention / no-training terms for private story
  content.

### OD-03 — STT approach

**Applicability:** NOT APPLICABLE

**Evidence**

- The historical OD is about speech-to-text choice for Translation and story capture
  (`products/bridge/10-open-decisions.md` in PR #7 history).
- Story recording is a later-phase capability in the current Bridge plan
  (`products/bridge/09-build-handoff.md:96`, `products/bridge/09-build-handoff.md:104`).
- This Legacy M2 record excludes voice and STT from scope.

**Rationale**

There is no active STT decision to make for a text-first controlled-development milestone. STT
must be reconsidered only if a later Legacy milestone explicitly authorizes voice or audio
capture.

### OD-04 — Secondary user authentication approach

**Applicability:** NOT APPLICABLE

**Evidence**

- The historical OD is about the less-technical **secondary user** in Bridge Translation
  (`products/bridge/10-open-decisions.md` in PR #7 history).
- Current Bridge docs describe secondary-user concerns in the Translation flow
  (`products/bridge/04-experience-specification.md:103`,
  `products/bridge/08-validation-plan.md:71`).
- This Legacy M2 record is owner-only and does not authorize public sharing.

**Rationale**

Legacy M2 controlled development does not include the Translation-style second participant flow,
link delivery, or shared response path that created the original OD. If later Legacy work adds
family sharing or invited viewer access, that will require a new Legacy-specific auth decision.

### OD-05 — Hosting environment and region

**Applicability:** CONDITIONALLY APPLICABLE

**Evidence**

- Current Bridge architecture assumes region and residency controls matter when personal data is
  stored (`products/bridge/06-technical-architecture.md:176`).
- Current Bridge docs also treat story storage as sensitive and consent-gated
  (`products/bridge/06-technical-architecture.md:53`,
  `products/bridge/07-risk-privacy-and-safety.md:47`).
- This record authorizes controlled development only, not production deployment.

**Rationale**

Hosting and region controls remain necessary, but they are a **deployment gate**, not a reason to
inherit the Translation-specific hosting decision unchanged. For isolated non-production work, the
control applies conditionally: it must be resolved before real-user deployment or public release,
not before narrowly bounded M2 controlled development.

**Derived Legacy-specific decision**

- **LOD-04:** Non-production deployment controls, environment isolation, and region/data residency
  requirements before any real-user or public deployment.

### OD-06 — Database encryption approach

**Applicability:** APPLICABLE

**Evidence**

- Bridge already defines encryption at rest as a non-negotiable control
  (`products/bridge/05-functional-requirements.md:151`,
  `products/bridge/06-technical-architecture.md:179`).
- Story content is explicitly treated as sensitive
  (`products/bridge/06-technical-architecture.md:126`,
  `products/bridge/06-technical-architecture.md:138`).
- Bridge privacy risks include exposure of stored conversation or story content
  (`products/bridge/07-risk-privacy-and-safety.md:44`,
  `products/bridge/07-risk-privacy-and-safety.md:47`).

**Rationale**

Legacy M2 persists private story-related content, so storage encryption and access control are
directly applicable. The control should not be inherited as a Translation decision; it should be
carried forward as a Legacy-specific storage/security requirement because the data class is still
sensitive even though the product flow is different.

**Derived Legacy-specific decision**

- **LOD-03:** Storage security baseline for Legacy M2 persistence, including encryption at rest,
  key handling, and owner-only access enforcement.

### OD-07 — CI/CD pipeline

**Applicability:** CONDITIONALLY APPLICABLE

**Evidence**

- Historical OD-07 required automated checks, secret management, and staged deployment in the
  Translation build path (`products/bridge/10-open-decisions.md` in PR #7 history).
- Current Bridge build instructions prohibit secrets in code and require human review for data,
  auth, storage, and translation pipeline changes (`products/bridge/09-build-handoff.md:155`,
  `products/bridge/09-build-handoff.md:163`).
- Current company operating constraints require Founder approval for production deployment
  (`companies/bridge/07-operating-model.md:83`).

**Rationale**

Pipeline and release governance still matter for Legacy M2, but the production-release portion of
the historical OD is not currently in scope. The applicable part is controlled-development
discipline: isolated environments, secret handling, and review gates. Production promotion remains
out of scope.

**Derived Legacy-specific decisions**

- **LOD-04:** Controlled-development deployment rules for non-production environments.
- **LOD-05:** Release-control gate that blocks production, public rollout, Translation, voice/STT,
  and Milestone 3+ without a fresh Kernel decision.

### OD-08 — Legal review (GDPR/COPPA/CCPA)

**Applicability:** CONDITIONALLY APPLICABLE

**Evidence**

- Current Bridge docs require legal review before any user data is collected
  (`products/bridge/07-risk-privacy-and-safety.md:99`,
  `products/bridge/09-build-handoff.md:33`).
- Current Bridge docs treat stories, relationship history, and stored content as sensitive
  (`products/bridge/06-technical-architecture.md:138`,
  `products/bridge/07-risk-privacy-and-safety.md:47`).
- This record does not authorize production, public sharing, or broad user release.

**Rationale**

Legal review remains necessary before Legacy M2 moves beyond tightly controlled development into
deployment with real users or public availability. Because the current action is narrower than a
launch or production authorization, the legal review is conditional rather than an automatic block
on all M2 engineering work.

**Derived Legacy-specific decisions**

- **LOD-01:** AI/private-story-content processor contract and data-use review.
- **LOD-02:** Legacy-specific retention and deletion policy for stored story content, AI prompts,
  AI responses, and cross-session memory.
- **LOD-05:** Release gate requiring legal review before any public or production authorization.

---

## New Legacy-Specific Decisions Created by Actual M2 Architecture

Only the following new decisions are created here because the actual Legacy M2 architecture
introduces them:

| ID | Legacy-specific decision | Why it exists |
|---|---|---|
| LOD-01 | AI processor and data-processing terms for private story content | M2 adds server-side AI processing that is not the same as Bridge Translation |
| LOD-02 | Retention and deletion policy for story content, AI responses, and cross-session memory | M2 adds persistent private story content and conversation memory |
| LOD-03 | Storage/security baseline for owner-only story persistence | M2 stores sensitive private content |
| LOD-04 | Controlled-development deployment controls | M2 may run in isolated development environments before any real-user deployment |
| LOD-05 | Release controls for expansion beyond controlled development | M2 must not silently expand into production, public sharing, Translation, voice/STT, or M3+ |

These are Legacy-specific decisions. They do not change the historical Bridge Translation
open-decision record.

---

## Outcome

Historical OD-01 through OD-08 remain preserved as historical Bridge Translation governance.

For Bridge Legacy M2:

- Translation-specific decisions (OD-01 through OD-04) are **NOT APPLICABLE**
- Cross-cutting infrastructure, security, process, and legal controls (OD-05 through OD-08) are
  **applied only where the Legacy M2 architecture actually creates that need**
- New Legacy-specific decisions are created only for:
  - AI processing of private story content
  - retention and deletion
  - storage and security
  - deployment controls
  - release controls
