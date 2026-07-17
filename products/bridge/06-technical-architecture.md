# 06 — Technical Architecture

**Product name:** Bridge  
**Date:** 2026-07-17  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review

> **Note:** This document describes a reference architecture for planning purposes. All technology choices are marked [ASSUMPTION] and require human validation before build authorization.

---

## Purpose of This Document

This document defines how Bridge is built at a level sufficient for autonomous implementation. Architecture decisions must be justified by Bridge's requirements and constraints — not by novelty or technical preference.

---

## 1. Architecture Principles

```
1. Collect only data required for the stated human outcome — no behavioral analytics, 
   no location, no usage telemetry unless explicitly consented to by the user

2. Prefer simple and maintainable over clever and optimal — Bridge's team is small; 
   the architecture must remain comprehensible to a single engineer

3. Fail safely — a translation service outage should result in a graceful message, 
   not a broken conversation or an exposed error

4. Human-readable records over proprietary formats — conversation history and relationship 
   data must be exportable in a format the user can read and use elsewhere

5. Privacy by default — store nothing unless the user has explicitly chosen storage; 
   delete is always possible and always complete
```

---

## 2. System Overview

Bridge is a mobile-first communication companion with a lightweight cloud backend. The system consists of four major components: a mobile client, a translation gateway, a relationship context service, and optional encrypted storage.

The mobile client is the primary interface for both participants. The translation gateway receives messages, calls translation and speech APIs, and returns results — it does not persist conversation content by default. The relationship context service stores names, languages, and (with consent) relationship memory. Encrypted cloud storage handles optional story and conversation archiving.

```
Components:
- Mobile client (iOS and Android): Primary interface; handles voice input, message display, 
  connection management, and user preferences
- Translation gateway (API service): Stateless message broker that calls third-party 
  translation and STT services; applies relationship context; returns translated output
- Relationship context service: Stores connection profiles (name, language, preferences, 
  optional shared history) with user consent
- Encrypted story archive (optional, consent-gated): Stores recorded stories and conversation 
  history for users who opt in; encrypted at rest; user-deletable
- Notification service: Delivers opt-in message arrival notifications; no marketing use
```

---

## 3. Technology Choices

[ASSUMPTION — all choices require human validation before implementation]

| Layer | Technology | Justification | Alternative Considered |
|---|---|---|---|
| Mobile frontend | React Native | Single codebase for iOS and Android reduces maintenance burden for a small team; large ecosystem; reasonable performance for a communication app | Native Swift/Kotlin (higher performance but doubles maintenance); Flutter (viable alternative, slightly smaller ecosystem) |
| Backend API | Node.js (TypeScript) | Fast to build, large ecosystem, good async performance for I/O-bound translation calls; TypeScript reduces runtime errors | Python/FastAPI (also viable; better ML ecosystem if custom models are needed later); Go (faster but smaller team familiarity) |
| Database | PostgreSQL (hosted) | Relational model fits connection profiles and relationship metadata; mature, well-understood, strong privacy tooling | MongoDB (less appropriate for structured relationship data); SQLite (insufficient for multi-user cloud service) |
| Auth | Supabase Auth or Auth0 | Managed auth reduces security risk for a small team; supports email, phone, and social login | Custom JWT auth (higher security risk for a small team); Firebase Auth (viable but vendor lock-in concern) |
| Translation API | DeepL API | Superior translation quality on personal/emotional language pairs vs. Google Translate in independent evaluations [INFERENCE — requires benchmarking validation]; privacy terms must be reviewed | Google Cloud Translation (higher language coverage, potentially weaker on nuance); custom fine-tuned model (best control, high cost and complexity for v0.1) |
| Speech-to-text | OpenAI Whisper (self-hosted or API) | Strong multilingual performance; self-hosted option avoids third-party data retention concern | Google Cloud Speech-to-Text (higher cost, third-party data concern); Azure Cognitive Services (viable alternative) |
| Hosting | Railway or Fly.io | Simple deployment, predictable pricing, EU region available for GDPR compliance | AWS/GCP/Azure (more complex, more expensive at small scale); Vercel (frontend only) |
| Encryption (storage) | AES-256 at rest via hosting provider + application-layer encryption for story archive | Industry standard; application-layer encryption ensures provider cannot read story content | Client-side encryption only (complex key management; poor UX for account recovery) |

---

## 4. Data Model (Key Entities)

```
Entity: User
Fields:
  - id: uuid — primary key
  - created_at: timestamp
  - language_primary: string — the language they speak
  - display_name: string (optional) — name they want shown to connections
  - account_email: string (optional) — for account recovery
Privacy classification: Private
Retention policy: Retained while account is active; deleted within 30 days of account 
deletion request; no analytics retention

Entity: Connection
Fields:
  - id: uuid — primary key
  - owner_user_id: uuid — the user who created this connection
  - connection_name: string — name this person uses for the other ("Mum", "Abuela", "Dad")
  - language_of_connection: string — the language the other person speaks
  - relationship_label: string (optional) — e.g., "mother", "grandmother"
  - last_active_at: timestamp
Privacy classification: Private
Retention policy: Retained while both users are active; deletable by owner at any time

Entity: ConversationSession
Fields:
  - id: uuid
  - connection_id: uuid — the connection this conversation belongs to
  - started_at: timestamp
  - ended_at: timestamp (nullable)
  - storage_consented: boolean — whether content is stored
Privacy classification: Private
Retention policy: Session metadata retained for 90 days (non-identifying); content only 
if storage_consented = true, then until user deletes

Entity: Message (only persisted if storage_consented = true)
Fields:
  - id: uuid
  - session_id: uuid
  - sender_user_id: uuid
  - original_text: string (encrypted at rest)
  - translated_text: string (encrypted at rest)
  - original_language: string
  - target_language: string
  - sent_at: timestamp
Privacy classification: Sensitive
Retention policy: Until user deletes; no minimum retention

Entity: Story (optional feature, consent-gated)
Fields:
  - id: uuid
  - owner_user_id: uuid
  - title: string
  - original_audio_url: string (encrypted storage location)
  - original_transcript: string (encrypted)
  - translated_transcript: string (encrypted)
  - language_original: string
  - language_translated: string
  - shared_with: uuid[] (connection ids with access)
  - created_at: timestamp
Privacy classification: Sensitive
Retention policy: Until user deletes; exportable on request
```

---

## 5. API / Interface Contract

| Endpoint / Interface | Method | Purpose | Auth Required |
|---|---|---|---|
| /api/connections | GET | List the current user's saved connections | Yes |
| /api/connections | POST | Create a new connection | Yes |
| /api/connections/:id | DELETE | Remove a connection and its metadata | Yes |
| /api/translate | POST | Translate a message; apply relationship context | Yes |
| /api/stories | GET | List the current user's stories | Yes |
| /api/stories | POST | Upload and process a new story | Yes |
| /api/stories/:id | DELETE | Delete a story and all associated data | Yes |
| /api/account | DELETE | Delete the user's account and all data | Yes |
| /api/session | POST | Create a new conversation session | Yes |
| /api/session/:id/message | POST | Send a message in a session; triggers translation | Yes |

---

## 6. Privacy and Data Minimization

```
Data collected:
  - User's primary language (required for translation)
  - Names given to connections and their languages (required for relationship memory)
  - Messages within a session (in-transit only by default; persisted only with explicit consent)

Data not collected:
  - Location — no use case; not collected
  - Device identifiers beyond session auth — not collected
  - Usage telemetry (session counts, time in app, button presses) — not collected
  - Contact list or address book — Bridge only knows connections the user explicitly creates
  - Biometric data — not collected

Data storage location: EU-region hosting by default (supports GDPR compliance); 
configurable for other regions pending compliance assessment

Encryption at rest: Yes — AES-256 for all stored user data; application-layer encryption 
for story archive content

Encryption in transit: Yes — TLS 1.3 required for all API endpoints

Third-party data sharing:
  - Translation API provider: receives message text for translation; privacy terms must 
    prohibit retention and training use — contract review required before launch
  - Speech-to-text provider: receives audio; same requirements as translation API
  - Hosting provider: receives encrypted data only for story archive
  - No analytics, advertising, or data broker sharing of any kind
```

---

## 7. Security Considerations

| Risk | Mitigation |
|---|---|
| Unauthorized access to conversation data | Auth required on all data endpoints; row-level security on database; no publicly accessible data |
| Third-party translation API retaining user content | Contract terms must prohibit retention and training use; periodic audit; move to self-hosted model if terms cannot be guaranteed |
| Account takeover | Email or phone-based verification for account recovery; no password-only auth; consider passkey support |
| Injection attacks | Parameterized queries for all database operations; input validation and sanitization at API layer |
| Insecure story archive access | Application-layer encryption; presigned URLs with short expiry for audio access; no persistent public URLs |
| Mass data extraction | Rate limiting on all endpoints; request size limits; anomaly detection on bulk export patterns |

---

## 8. Scalability and Constraints

```
Expected initial load: [ASSUMPTION] 500 active users in the first 3 months post-launch; 
approximately 2,000 translation requests per day at this scale

Growth assumption: Conservative — Bridge's word-of-mouth and trust-first acquisition model 
means organic growth will be slower than a viral product; the architecture need not 
over-provision for rapid scale in v0.1

Known bottlenecks:
  - Translation API rate limits and latency — mitigated by queuing and graceful degradation
  - Story audio storage — costs scale linearly with consented users; monitor and budget accordingly

Cost constraint: [ASSUMPTION] Target <$500/month infrastructure cost at 500 active users; 
translation API usage is the primary variable cost driver
```

---

## 9. Open Decisions

| Decision | Options | Blocking? | Owner |
|---|---|---|---|
| Translation API provider and privacy contract terms | DeepL / Google Cloud Translation / self-hosted model | Yes — must resolve before launch | Human (Founder) — requires legal review |
| Speech-to-text: self-hosted Whisper vs. API | Self-hosted (better privacy, higher ops cost) vs. API (simpler, third-party data concern) | Yes | Human (Founder + Engineering) |
| Auth method for secondary (non-account) user | Link-based one-time access vs. lightweight account creation | Yes | Human (Product + UX) |
| EU vs. multi-region storage | Single EU region (simpler) vs. region-by-user (better privacy, more complex) | No for v0.1 | Engineering |

---

## Checklist

- [x] Every technology choice is justified by requirements
- [x] Data model includes privacy classification and retention policy
- [x] Privacy and data minimization are explicitly addressed
- [x] Security risks have mitigations
- [x] Open decisions are documented with owners
- [x] This document is consistent with 01–05
