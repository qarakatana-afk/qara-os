# 05 — Functional Requirements

**Product name:** Bridge  
**Date:** 2026-07-17  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review

---

## Purpose of This Document

This document defines what Bridge must do — not how it is built. Every requirement must be traceable to the human outcome defined in 02-human-outcome.md.

---

## 1. Requirement Standard

Each requirement:
- Is a statement of behavior, not a description of technology
- Is testable: an acceptance criterion is provided
- Traces to the human outcome or an explicit constraint
- Is marked as **Must Have**, **Should Have**, or **Nice to Have**

---

## 2. Core Requirements (Must Have)

| ID | Requirement | Human Outcome Link | Acceptance Criterion |
|---|---|---|---|
| F-01 | The system shall translate a spoken or typed message from one language into another and deliver it to the intended recipient in their language | Primary outcome: both people feel understood | A message spoken in Language A is received by the other person in Language B, accurately representing the meaning and tone of the original, within 3 seconds on a standard mobile connection |
| F-02 | The system shall remember the languages of each person in a saved connection without requiring re-entry | Removes friction from repeated use | On second and subsequent conversations with the same person, no language selection prompt appears |
| F-03 | The system shall allow a user to create a named connection representing a specific person in their life | Enables relationship-centered rather than task-centered use | A user can create a connection with a name, an associated language, and optionally a relationship label (e.g., "Mum"), and that connection persists between sessions |
| F-04 | The system shall allow the recipient of a message to respond in their language without requiring account creation | Secondary user accessibility | A person who receives a Bridge message can reply in their language using a simple interface accessible via link or app, without requiring them to sign in or configure language preferences |
| F-05 | The system shall preserve the conversational context of an ongoing exchange (not treat each message as isolated) | Meaningful conversation, not transaction | Translations within the same conversation reflect established names, references, and relationship tone from earlier in the exchange |
| F-06 | The system shall not store conversation content by default without explicit user consent | Privacy constraint (from 07-risk-privacy-and-safety.md) | A new user who completes the core flow without opting into storage has no conversation content persisted on any server after the session ends |
| F-07 | The system shall allow a user to delete their data, including all conversation history and connection information, at any time | User autonomy and trust | A user who requests full data deletion receives a confirmation that all data has been deleted within 30 days, consistent with applicable regulation |

---

## 3. Supporting Requirements (Should Have)

| ID | Requirement | Human Outcome Link | Acceptance Criterion |
|---|---|---|---|
| F-10 | The system should allow a user to record a voice story — a narrative in their language — and share it with a connection, translated | Secondary outcome: preservation of family stories | A user can record audio, have it transcribed and translated, and share the translated version with a named connection; the original and translated versions are both preserved with user consent |
| F-11 | The system should surface relationship context (e.g., the last thing discussed, shared stories, preferences) to improve translation quality over time | Relationship memory — BRIDGE_BIBLE.md | With user consent, Bridge uses remembered context from previous conversations to improve translation accuracy and tone for this specific relationship pair |
| F-12 | The system should work on low-bandwidth connections (2G or intermittent connectivity) for the core translation flow | Context of use: international calls — 03-user-and-problem.md | The core translation flow (F-01 through F-05) completes successfully on a simulated 2G connection (384 kbps) with a latency of under 5 seconds |
| F-13 | The system should support at least 20 major language pairs at launch, with graceful handling of unsupported pairs | Serve the primary user population | A user attempting an unsupported language pair receives a clear, non-judgmental message explaining the limitation and is not left in a broken state |

---

## 4. Deferred Requirements (Nice to Have)

| ID | Requirement | Rationale for Deferral |
|---|---|---|
| F-20 | Group conversations with more than two participants across multiple languages | Core outcome is about one-to-one relationships; multi-party translation is a distinct and complex problem that should not delay the core product |
| F-21 | In-app video or audio calling with real-time translation overlay | Real-time spoken translation at human conversation speed is a more complex capability; begin with asynchronous and near-real-time text-based exchange |
| F-22 | Integration with third-party messaging platforms (WhatsApp, iMessage) | Privacy and architecture complexity; core product must demonstrate value in its own interface before extending to external platforms |
| F-23 | Publicly searchable family story archive | Conflicts with privacy principles; may never be appropriate — deferred pending Kernel Decision and human approval |

---

## 5. Prohibited Features

```
- Must not include: Social feed or public profile — Reason: Violates Bridge's identity as a 
  private companion; creates comparison and performance dynamics incompatible with trust

- Must not include: Engagement streaks or usage rewards — Reason: Incentivizes usage for 
  its own sake rather than for connection; directly contradicts BRIDGE_BIBLE.md principle 
  that Bridge measures life, not usage

- Must not include: In-conversation advertising — Reason: Violates the attention contract; 
  a conversation between people who love each other is not an advertising surface

- Must not include: Translation quality ratings visible to the other participant — Reason: 
  Creates anxiety and judgment about language ability; Bridge must not make either person 
  feel their expression is being graded

- Must not include: Recommendation engine for "people you might also want to connect with" — 
  Reason: Bridge serves existing relationships, not network expansion
```

---

## 6. Integration Requirements

| Integration | Purpose | Required By | Notes |
|---|---|---|---|
| Translation API (e.g., DeepL, Google Cloud Translation, or custom model) | Core translation function | F-01, F-05 | Must evaluate privacy terms — no PII or conversation content should be retained by the third-party provider; contract review required before integration |
| Speech-to-text service | Voice input for translation | F-01 | Same privacy constraints as translation API; user must consent to voice processing |
| Cloud storage (encrypted) | Optional conversation and story storage with user consent | F-06, F-10, F-11 | Storage must be encrypted at rest; user controls deletion |
| Push notification service | Message delivery notification (opt-in only) | F-04 | No marketing or re-engagement use; message delivery only |

---

## 7. Constraint Requirements

| ID | Constraint | Rationale |
|---|---|---|
| C-01 | The system must not transmit conversation content to any third-party service not disclosed in the privacy policy at the time of user consent | Privacy and trust — identified risk PR-02 in 07-risk-privacy-and-safety.md |
| C-02 | The system must present language in a way that does not require reading — core flows must be completable via voice or simple icons | Context of use: secondary users may have low literacy in the interface language |
| C-03 | Core translation flow (F-01 to F-05) must complete in under 3 seconds on a standard mobile connection (LTE) | Experience principle: translation must not interrupt conversation flow |
| C-04 | The system must not collect location data | No use case requires location; collecting it would be unnecessary data collection under QS-001 and GDPR principles |
| C-05 | All data at rest must be encrypted | Privacy and security baseline |

---

## 8. Scope Boundary Statement

```
In scope: Real-time and near-real-time text and voice translation between two people in a 
named, persistent relationship; storage of relationship context and stories with explicit 
user consent; simple, low-friction interface for a non-technical secondary user to participate.

Out of scope: Group translation, real-time spoken translation with sub-200ms latency, 
language learning or fluency development features, integration with third-party messaging 
platforms, social or community features, enterprise or professional translation workflows, 
any feature that collects data beyond what is strictly necessary for the translation and 
relationship memory functions.

Any request to add a feature outside this boundary requires a new Kernel Decision and 
explicit human approval before implementation begins.
```

---

## Checklist

- [x] Every Must Have requirement traces to the human outcome
- [x] Acceptance criteria are testable
- [x] Prohibited features are listed
- [x] Constraint requirements cover privacy, safety, and user context
- [x] Scope boundary is explicit
- [x] This document is consistent with 01–04
