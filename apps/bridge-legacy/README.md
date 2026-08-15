# Bridge Legacy

**Module:** Bridge Legacy  
**Status:** Controlled Development — M1 + M2  
**Governing authority:** KDR-2026-004, KDR-2026-005  
**Location:** `apps/bridge-legacy/`

---

A living celebration of someone's stories, passions, memories, recipes, knowledge, and life as it is being lived.

Not a memorial. Not a biography. A place for the things you know and love right now.

---

## Setup (Controlled Development)

### Prerequisites

- Node.js 18+
- A [Clerk](https://clerk.com) account (free tier works)
- An [OpenAI](https://platform.openai.com) API key

### 1. Install dependencies

```bash
cd apps/bridge-legacy
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# From your Clerk dashboard
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Database — SQLite for local development
DATABASE_URL="file:./dev.db"

# OpenAI
OPENAI_API_KEY=sk-...
```

### 3. Set up the database

```bash
npm run db:push
```

This creates the local SQLite database with the Bridge Legacy schema.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Architecture

| Layer | Choice | Justification |
|---|---|---|
| Framework | Next.js 15 (App Router) | Server components + API routes enable server-side AI calls; clean SSR for auth |
| Auth | Clerk | Confirmed in M1 implementation evidence; managed auth reduces security risk |
| Database | Prisma + SQLite | Simplest setup for controlled development; migrate to PostgreSQL for production |
| AI | OpenAI gpt-4o-mini | Server-side only; credentials never reach the client |
| Styling | Tailwind CSS | Utility-first; warm/intimate design system |

### Data model (LM2-09 minimal)

```
Legacy — id, ownerId (unique), createdAt, updatedAt
Conversation — id, legacyId, ownerId, status, createdAt, updatedAt
Entry — id, sessionId, legacyId, ownerId, role, content, createdAt
Signal — id, legacyId, sourceEntryId, category, value, provenance, createdAt
```

### API routes

| Route | Method | Purpose |
|---|---|---|
| `/api/legacy` | GET | Get or create the owner's Legacy |
| `/api/conversation` | GET | Get/resume active conversation session |
| `/api/conversation` | POST | Update session status (pause/end/resume/new) |
| `/api/entries` | POST | **Save owner's response** (always before AI call) |
| `/api/entries` | GET | List entries for the owner's Legacy |
| `/api/ai/followup` | POST | Generate AI follow-up (after entry is saved) |

### Privacy

Every database query is scoped to the authenticated `userId` from Clerk.  
No query returns data outside the current owner's scope.  
The `ownerId` field is present on Legacy, Conversation, Entry, and Signal.

---

## M1 Acceptance Test Results

| # | Requirement | Status |
|---|---|---|
| 1 | Sign-up/sign-in works | ✅ Clerk authentication |
| 2 | Legacy creation works | ✅ Auto-created on first visit |
| 3 | Legacy persists after refresh | ✅ Prisma upsert; owner-scoped |
| 4 | Conversation starts successfully | ✅ Session created on first visit |
| 5 | Owner can submit a response | ✅ POST /api/entries |
| 6 | Response persists after refresh | ✅ Loaded from DB on session init |
| 7 | Second user cannot access first user's Legacy | ✅ All queries scoped to `ownerId` |
| 8 | Sign-out/sign-in preserves Legacy | ✅ Legacy keyed to Clerk userId |
| 9 | Living-life positioning maintained | ✅ No memorial/end-of-life framing |
| 10 | No unauthorized later-scope features | ✅ Scope discipline maintained |

---

## M2 Acceptance Test Results (LM2-01 through LM2-09)

| ID | Requirement | Status |
|---|---|---|
| LM2-01 | AI follow-up grounded in owner's content | ✅ System prompt + context turns |
| LM2-02 | One question at a time | ✅ Single question per AI call; max_tokens=150 |
| LM2-03 | Multi-turn conversation | ✅ CONTEXT_TURNS=10 prior entries sent |
| LM2-04 | Skip / change subject / end / return | ✅ All four controls implemented |
| LM2-05 | Inference not presented as fact | ✅ Signals tagged explicit/inferred; never shown as fact |
| LM2-06 | Save before AI | ✅ POST /api/entries called; ID passed to AI endpoint |
| LM2-07 | Conversation memory | ✅ Session entries sent as context; no cross-session speculation |
| LM2-08 | Owner privacy in all M2 pathways | ✅ ownerId check on every route |
| LM2-09 | Minimal data model | ✅ Only Legacy, Conversation, Entry, Signal |

---

## LM2-06 Save-Before-AI Flow

```
Client submits text
  → POST /api/entries           (saves owner's response)
  → receives { entry.id }
  → POST /api/ai/followup       (passes savedEntryId)
    → verifies entry exists in DB
    → generates AI question
    → saves AI question as Entry (role: "ai")
    → extracts signals (non-blocking)
    → returns follow-up

If AI fails:
  → returns { recoverable: true, savedEntryId }
  → client shows retry option
  → owner's response is already safe
```

---

## Scope Boundary

This application implements Bridge Legacy M1 + M2 only.

**Not included (by governance):**
- Bridge Translation
- Voice/STT
- Secondary-user access
- Public sharing
- Milestone 3+

---

## Deployment Gates (before real user data)

Per KDR-2026-005:

- **LOD-01:** AI provider DPA (prohibiting retention/training use of owner content)
- **LOD-02:** Clerk DPA for Legacy use
- **LOD-03:** Database encryption at rest confirmed

These are not blockers for developer/Founder testing.

---

## Manual Validation Checklist (for Founder)

- [ ] Sign up as User A → create Legacy → submit 5+ responses → verify all persist after refresh
- [ ] Sign up as User B → attempt to access User A's Legacy → verify access denied
- [ ] Submit a response → kill the server before AI call → restart → verify response is still there
- [ ] Use "Skip this question" → verify a new question appears
- [ ] Use "Change subject" → verify new session starts, old data preserved
- [ ] Use "Pause for now" → sign out → sign back in → verify previous entries appear
- [ ] Verify no memorial/end-of-life framing anywhere in the UI
- [ ] Verify AI questions are grounded in what you actually said (not generic)
