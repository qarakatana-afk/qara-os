# Bridge — Assumption Log

**Product name:** Bridge  
**Date created:** 2026-08-05  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review  
**Status:** Draft — AWAITING FOUNDER REVIEW

---

## Purpose

This log records all material assumptions made in producing the Bridge reference implementation (documents 01–12 in `products/bridge/` and documents 01–10 in `companies/bridge/`).

Assumptions must be validated or explicitly accepted by the Founder before any assumption is treated as a fact in downstream decisions or build work.

---

## Assumption Status Key

| Status | Meaning |
|---|---|
| UNVALIDATED | Assumed but not yet confirmed by evidence or founder review |
| VALIDATED | Confirmed by evidence or explicit founder statement |
| INVALIDATED | Found to be incorrect; dependent decisions must be revisited |
| ACCEPTED | Founder has explicitly accepted the assumption as a working basis without requiring validation evidence |

---

## Product Scope Assumptions

| ID | Assumption | Source | Status | Validation Method | Validated By | Date |
|---|---|---|---|---|---|---|
| A-01 | Bridge has five companion capabilities: Translation, Appointment, Hearing/accessibility, older-adult Independence, and Legacy. | Founder review comment on prior draft | UNVALIDATED | Founder explicitly confirms capability list | — | — |
| A-02 | Translation is the first and primary companion capability to build in Phase 1. | `09-build-handoff.md` Phase 1 definition | UNVALIDATED | Founder confirms build priority | — | — |
| A-03 | The primary language pair for launch is English/Spanish (US market). | `companies/bridge/02-market-definition.md` | UNVALIDATED | Founder confirms launch market and first language pair | — | — |
| A-04 | Secondary users (message recipients) will frequently be older adults with limited tech comfort. | `03-user-and-problem.md` user profiles | UNVALIDATED | Problem interviews Method 1 confirm this pattern in ≥5 of 10 interviews | — | — |
| A-05 | Emotional quality of translation is more important to users than literal accuracy for personal relationship communication. | `03-user-and-problem.md` root cause analysis | UNVALIDATED | Translation quality spot-check (Method 3) and concept walkthrough (Method 2) confirm this | — | — |
| A-06 | Users will not want to create an account before first use; deferred optional account creation is acceptable. | `04-experience-specification.md` friction map | UNVALIDATED | Concept walkthrough (Method 2) tests this assumption | — | — |
| A-07 | The no-default-storage principle is achievable without degrading the core translation experience. | `05-functional-requirements.md` F-06 | UNVALIDATED | Engineering feasibility confirmation during Phase 0 | — | — |

---

## Technical Architecture Assumptions

| ID | Assumption | Source | Status | Validation Method | Validated By | Date |
|---|---|---|---|---|---|---|
| A-08 | DeepL API provides sufficient emotional translation quality for priority language pairs. | `06-technical-architecture.md` | UNVALIDATED | Translation quality spot-check (Method 3) with DeepL | — | — |
| A-09 | OpenAI Whisper provides adequate speech-to-text accuracy for emotionally meaningful personal conversation audio. | `06-technical-architecture.md` | UNVALIDATED | STT quality test on representative audio samples during Phase 0 | — | — |
| A-10 | EU-region hosting is sufficient for GDPR compliance without additional legal requirements. | `06-technical-architecture.md` | UNVALIDATED | Legal review (OD-08) must confirm | — | — |
| A-11 | PostgreSQL with encryption at rest is a sufficient database choice for the Bridge data model. | `06-technical-architecture.md` | UNVALIDATED | Engineering review and security assessment | — | — |
| A-12 | A React Native mobile app is the right primary interface for Bridge users. | `06-technical-architecture.md` | UNVALIDATED | Concept walkthrough and low-fidelity prototype testing (Method 2) | — | — |
| A-13 | Core translation flow will complete within 3 seconds on an LTE connection. | `09-build-handoff.md` Phase 1 table | UNVALIDATED | Performance testing during Phase 1 build | — | — |

---

## Business Model Assumptions

| ID | Assumption | Source | Status | Validation Method | Validated By | Date |
|---|---|---|---|---|---|---|
| A-14 | A monthly subscription model is the right revenue approach for Bridge. | `companies/bridge/04-business-model.md` (PROPOSAL) | UNVALIDATED | Founder review and pricing sensitivity research | — | — |
| A-15 | Users will pay $9.99/month for the Personal tier. | `companies/bridge/03-offer-and-pricing.md` (PROPOSAL) | UNVALIDATED | Pricing sensitivity testing with target users | — | — |
| A-16 | TAM of 84 million (30% of 280M international migrants with language-gap relationships) is a reasonable estimate. | `companies/bridge/02-market-definition.md` | UNVALIDATED | Market research validation | — | — |
| A-17 | Break-even at 350–420 subscribers is achievable within 18 months. | `companies/bridge/04-business-model.md` (PROPOSAL) | UNVALIDATED | Founder financial review and go-to-market validation | — | — |
| A-18 | Community partnerships with diaspora organizations are the most effective launch channel. | `companies/bridge/05-go-to-market.md` | UNVALIDATED | Go-to-market pilot testing | — | — |

---

## Privacy and Legal Assumptions

| ID | Assumption | Source | Status | Validation Method | Validated By | Date |
|---|---|---|---|---|---|---|
| A-19 | GDPR applies because EU residents may use Bridge. | `07-risk-privacy-and-safety.md` | UNVALIDATED | Legal review (OD-08) must confirm | — | — |
| A-20 | COPPA may apply if users under 13 could use Bridge; age gate or exclusion required. | `07-risk-privacy-and-safety.md` | UNVALIDATED | Legal review (OD-08) must confirm | — | — |
| A-21 | Selected translation API providers will agree to DPA terms consistent with GDPR Article 28. | `09-build-handoff.md` Phase 0 table | UNVALIDATED | DPA negotiation with provider during Phase 0 | — | — |

---

## Validation Protocol

When an assumption is validated:

1. Update the Status column to VALIDATED (or ACCEPTED/INVALIDATED as appropriate).
2. Record the validation method used and the date.
3. If the assumption is INVALIDATED, open an issue or Kernel Decision to revise dependent documents.
4. Do not treat an assumption as a fact in any document until it is VALIDATED or ACCEPTED by the Founder.

---

## Checklist

- [x] All material product scope assumptions are logged
- [x] All material technical architecture assumptions are logged
- [x] All business model assumptions are clearly marked as proposals
- [x] Privacy and legal assumptions requiring legal review are flagged
- [x] Validation methods are specified for each assumption
- [x] Document is consistent with `products/bridge/` documents 01–12
