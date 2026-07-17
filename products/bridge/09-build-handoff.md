# 09 — Build Handoff

**Product name:** Bridge  
**Date:** 2026-07-17  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review

---

## Purpose of This Document

This document is the final instruction set for anyone — human engineer or AI agent — authorized to begin building Bridge. It does not contain philosophy. It contains what to do, in what order, and what the definition of done is for each phase.

**This document is not authorization to build.** Build authorization requires:
1. Human review and approval of documents 01–08
2. A separate Kernel Decision for build authorization
3. Resolution of all open decisions marked in 06-technical-architecture.md

---

## 1. Build Authorization Status

```
Status: NOT AUTHORIZED — documentation phase complete; awaiting human review and 
build authorization Kernel Decision

Required before build may begin:
  - [ ] Human steward (Founder) has reviewed and approved documents 01–08
  - [ ] Kernel Decision for build authorization is recorded in records/kernel-decisions/
  - [ ] Open architectural decisions in 06-technical-architecture.md section 9 are resolved
  - [ ] Translation API data processing agreement is signed
  - [ ] Legal review of GDPR, COPPA, and CCPA applicability is complete
```

---

## 2. Build Sequence

Build in this sequence. Do not begin a phase before the previous phase's definition of done is met.

### Phase 0 — Foundation (Pre-build)

**Goal:** Resolve all open decisions and establish the build environment.

| Task | Owner | Definition of Done |
|---|---|---|
| Resolve translation API choice and sign data processing agreement | Founder | DPA signed; API key available; key stored securely |
| Resolve speech-to-text approach (self-hosted vs. API) | Founder + Engineering | Decision recorded; infrastructure allocated |
| Resolve secondary user auth approach (link vs. lightweight account) | Founder + UX | Decision recorded; UX implications confirmed |
| Set up repository, CI/CD pipeline, and hosting environment | Engineering | Code repository exists; deploy pipeline runs; EU-region hosting configured |
| Set up PostgreSQL database with encryption at rest | Engineering | Database running; encryption confirmed; migration tooling in place |

---

### Phase 1 — Core Translation Flow (v0.1 MVP)

**Goal:** A user can select or create a connection, send a message, have it translated, and the other person can respond — with both people feeling the conversation was meaningful.

**Acceptance criteria (Gate 1 and Gate 3 from 08-validation-plan.md must pass before Phase 2 begins):**

| Feature | Requirements | Definition of Done |
|---|---|---|
| Connection creation | F-03 | A user can create a named connection with language preferences; the connection persists; a returning user sees their connections |
| Send and translate message | F-01, F-05 | A message sent in Language A is received in Language B within 3 seconds on LTE; the translation reflects the tone and meaning of the original as rated by bilingual testers |
| Receive and respond (secondary user) | F-04 | A person with no Bridge account can receive a translated message via link and respond in their language; response is translated back |
| Language memory | F-02 | No language prompt appears on second and subsequent conversations with the same connection |
| No default storage | F-06 | A user who completes a conversation without opting in to storage has no content persisted server-side; verified by engineering audit |
| Simple account creation (deferred-optional) | — | A user can complete the entire Phase 1 flow with an email address or phone number for recovery, but no required profile setup |

**Not in Phase 1:**
- Story recording (F-10)
- Relationship memory applied to translation (F-11)
- Low-bandwidth optimization (F-12) — deprioritized for v0.1; address in Phase 2
- More than 5 language pairs (Phase 1 launches with the 5 pairs with the highest validated translation quality)

---

### Phase 2 — Quality and Reach

**Goal:** Translation quality on emotional language is measurably better; secondary user experience is smooth; low-bandwidth contexts work.

**Begins after:** Gate 2 and Gate 3 in 08-validation-plan.md pass.

| Feature | Requirements | Definition of Done |
|---|---|---|
| Relationship context applied to translation | F-11 | With user consent, prior conversation context improves translation of names, recurring references, and relational tone; measurable improvement in user-rated translation quality |
| Low-bandwidth optimization | F-12 | Core flow completes successfully on a simulated 2G connection |
| Language pair expansion | F-13 | 20 supported language pairs; quality audit passed for each; graceful handling of unsupported pairs |
| Account data export | F-07 (partial) | User can download all their data in a readable format |

---

### Phase 3 — Story and Memory

**Goal:** Users who want to preserve family stories can record, translate, and share them with a connection.

**Begins after:** Phase 2 validation passes; separate Kernel Decision issued for story feature (includes both-party consent model and storage security review).

| Feature | Requirements | Definition of Done |
|---|---|---|
| Story recording and translation | F-10 | A user can record audio; it is transcribed, translated, and stored with user consent; original and translated versions are both accessible to authorized connections |
| Data deletion (full) | F-07 | A user can delete their account and all associated data, including stories, within 30 days; deletion is verified by engineering audit |
| GDPR compliance review | C-01, 07-risk | All GDPR obligations are documented and implemented; DPA register is complete |

---

## 3. Prohibited Actions During Build

The following actions are not permitted during any build phase without a new Kernel Decision and human approval:

```
- Adding any feature not in 05-functional-requirements.md
- Changing the data model in ways that increase data collection
- Integrating any third-party service not identified in 06-technical-architecture.md
- Deploying to production any code that has not passed the relevant phase gate
- Contacting users for research, testing, or feedback without explicit consent obtained 
  at the point of contact
- Making any public statement about Bridge (press, social media, website) without 
  Founder approval
```

---

## 4. Definition of Done for Each Phase

```
Phase 0 done: All open decisions resolved; environment running; DPA signed; legal 
review complete

Phase 1 done: Core translation flow works; Gate 1 and Gate 3 pass; no default storage 
confirmed by engineering audit; 5 language pairs at validated quality; 20 validation 
users successfully onboarded

Phase 2 done: Gate 2 passes; low-bandwidth optimization tested; 20 supported language 
pairs; relationship context improving translation ratings

Phase 3 done: Story feature with both-party consent model; full data deletion tested; 
GDPR compliance confirmed by legal review; all pre-launch safeguards in 07-risk-privacy-and-safety.md checked
```

---

## 5. AI Agent Build Instructions

If an AI agent is authorized to build any phase of Bridge, the following rules apply at all times:

```
1. Read and internalize documents 01–09 completely before writing any code
2. Every build decision must be traceable to a requirement in 05-functional-requirements.md
3. Any uncertainty about a requirement, scope, or implementation choice must be 
   HELD and escalated to the human steward — do not infer intent and proceed
4. Record all material technical decisions (technology choices, data model changes, 
   API design decisions) in records/kernel-decisions/
5. Do not store user data beyond what is explicitly required by an implemented feature
6. Do not add analytics, telemetry, or logging that is not required by a stated 
   requirement — no invisible data collection
7. The prohibited features in 05-functional-requirements.md section 5 apply to code, 
   not just design — do not implement any part of them, even as a stub or placeholder
8. Every PR must include a reference to the requirement(s) it implements
9. A human must review and approve any PR that touches the data model, auth, 
   storage, or translation pipeline
```

---

## 6. Handoff Checklist

For each phase, before handing work to the next person or agent:

```
- [ ] Code is committed with meaningful commit messages referencing requirement IDs
- [ ] Phase gate acceptance criteria are documented as passed, with evidence
- [ ] No user data has been stored, processed, or transmitted beyond what was approved
- [ ] All open decisions identified during the phase are recorded in records/
- [ ] Any divergence from documents 01–08 is documented and a Kernel Decision is 
      issued before proceeding
- [ ] The human steward has been notified that the phase is complete and gate is passed
```

---

## Checklist

- [x] Build authorization status is explicit — not authorized until human review
- [x] Build sequence is defined with phase gates
- [x] Prohibited actions during build are explicit
- [x] Definition of done is stated for each phase
- [x] AI agent build instructions are explicit
- [x] This document is consistent with 01–08
