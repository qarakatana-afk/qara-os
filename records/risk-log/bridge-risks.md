# Bridge — Risk Register

**Product name:** Bridge  
**Date created:** 2026-08-05  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review  
**Status:** Draft — AWAITING FOUNDER REVIEW

---

## Purpose

This log is the living risk register for Bridge. It consolidates risks identified in `07-risk-privacy-and-safety.md` with additional implementation and build risks identified during the reference implementation process.

**No Critical or High risk may remain unmitigated at launch. The Founder must review and confirm all risk mitigations before the launch gate is passed.**

---

## Risk Rating Key

| Likelihood | Severity | Rating |
|---|---|---|
| High × Critical | Critical |
| High × High or Medium × Critical | High |
| Medium × High or Low × Critical | Medium |
| Low × High or any × Low | Low |

---

## Risk Status Key

| Status | Meaning |
|---|---|
| OPEN | Risk identified; mitigation not yet in place |
| MITIGATED | Mitigation in place and verified |
| ACCEPTED | Risk explicitly accepted by Founder with rationale |
| CLOSED | Risk no longer applies |

---

## Critical Risks

| ID | Risk | Likelihood | Severity | Rating | Mitigation | Status | Owner |
|---|---|---|---|---|---|---|---|
| R-C01 | Translation quality on safety-critical content (medical, legal, crisis) is inadequate and causes harm | Medium | Critical | Critical | Explicit in-app notice that Bridge is not a substitute for professional interpreters in safety-critical situations; crisis resources provided; stop condition in `08-validation-plan.md` Section 7 | OPEN | Founder + Engineering |
| R-C02 | One party records the other without knowledge or consent (surveillance use) | Medium | Critical | Critical | Both-party consent model (Gate 5); technical prohibition on silent recording; stop condition 2 in `08-validation-plan.md` | OPEN | Founder + Engineering |
| R-C03 | Data breach exposing sensitive personal and relationship content | Low | Critical | High | Encryption at rest (OD-06); no default storage (F-06); penetration test required (Gate 4); EU-region hosting (OD-05) | OPEN | Engineering |

---

## High Risks

| ID | Risk | Likelihood | Severity | Rating | Mitigation | Status | Owner |
|---|---|---|---|---|---|---|---|
| R-H01 | Translation API provider uses user message content for model training without consent | Medium | High | High | DPA with provider must explicitly prohibit training on user data (OD-02); provider selection criterion | OPEN | Founder (Legal) |
| R-H02 | Secondary user (no account) cannot complete the receive/respond flow, abandoning the conversation | Medium | High | High | Gate 2 explicitly tests this with 50+ less tech-comfortable users; deferred account creation; simplified secondary UI | OPEN | Founder + UX |
| R-H03 | Legal exposure from non-compliance with GDPR, COPPA, or CCPA | Medium | High | High | Legal review required before Phase 1 (OD-08); EU-region hosting; no default storage; data deletion support | OPEN | Founder (Legal) |
| R-H04 | AI agent (during build) introduces unauthorized data collection or storage | Medium | High | High | AI agent build rules in `09-build-handoff.md` Section 5; human review required on PRs touching data model, auth, storage, translation pipeline | OPEN | Engineering |
| R-H05 | Business assumptions (pricing, market size) are wrong; Break-even is not reached | Medium | High | High | All business decisions marked PROPOSAL; founder validation required before commitments; break-even analysis in `companies/bridge/04-business-model.md` | OPEN | Founder |

---

## Medium Risks

| ID | Risk | Likelihood | Severity | Rating | Mitigation | Status | Owner |
|---|---|---|---|---|---|---|---|
| R-M01 | Emotional translation quality is insufficient for personal language pairs despite API spot-check passing | Medium | Medium | Medium | Gate 3 tests real users with real emotional messages; relationship context (Phase 2 F-11) provides a mitigation path | OPEN | Engineering |
| R-M02 | Low-bandwidth users (rural, international) cannot complete the core flow reliably | High | Medium | Medium | Low-bandwidth optimization deferred to Phase 2 (F-12); Phase 1 limited to LTE; Phase 2 explicitly targets this | OPEN | Engineering |
| R-M03 | User confusion about what is and is not stored | High | Medium | Medium | Gate 5 explicitly tests this; consent UX decision (OD-10) must address this; no dark patterns in consent UI | OPEN | Founder + UX |
| R-M04 | Community trust damaged by any perception that Bridge monetizes or shares relationship data | Low | High | Medium | Explicit prohibition on data licensing; privacy policy in plain language; DPA with all providers; no analytics beyond stated requirements | OPEN | Founder |
| R-M05 | Companion capabilities beyond Translation are underdeveloped and create user confusion about Bridge's scope | Medium | Medium | Medium | Phase 1 scoped to Translation only; other capabilities placeholder only in documentation | OPEN | Founder |
| R-M06 | Build authorized before open decisions are resolved (OD-01 through OD-08) | Low | High | Medium | Build authorization Kernel Decision explicitly requires resolution of all Phase 0 open decisions | OPEN | Founder |

---

## Low Risks

| ID | Risk | Likelihood | Severity | Rating | Mitigation | Status | Owner |
|---|---|---|---|---|---|---|---|
| R-L01 | Language pair expansion reveals quality gaps not present in priority pairs | Medium | Low | Low | Each new language pair in Phase 2 requires individual quality audit before enabling | OPEN | Engineering |
| R-L02 | Story feature (Phase 3) creates long-term storage risk beyond original scope | Low | Medium | Low | Phase 3 requires a separate Kernel Decision with both-party consent model and storage security review | OPEN | Founder |
| R-L03 | App store policies create friction for secondary-user link flow | Low | Low | Low | Design secondary user flow to be web-based (no app install required); test during Gate 2 | OPEN | Engineering |

---

## Pre-Launch Risk Checklist

All items must be checked before the launch gate (Gate 4) can be passed:

```
Critical risks:
  - [ ] R-C01: In-app safety disclaimer implemented and tested
  - [ ] R-C01: Crisis resources disclosed
  - [ ] R-C02: Both-party consent model implemented (technical + UX)
  - [ ] R-C02: Silent recording technically impossible in the system
  - [ ] R-C03: Encryption at rest confirmed by engineering audit
  - [ ] R-C03: Penetration test completed; findings remediated

High risks:
  - [ ] R-H01: DPA signed; training-on-data prohibition explicit
  - [ ] R-H02: Gate 2 passed (secondary user flow tested)
  - [ ] R-H03: Legal review complete (GDPR, COPPA, CCPA)
  - [ ] R-H04: All data model PRs human-reviewed
  - [ ] R-H05: Founder has validated pricing and business assumptions before launch

Founder sign-off on risk register: [Founder name] [Date]
```

---

## Risk Review Schedule

| Phase | Review Trigger | Reviewer |
|---|---|---|
| Phase 0 | All open decisions resolved | Founder + Engineering |
| Phase 1 complete | Gates 1 and 3 passed | Founder |
| Phase 2 complete | Gate 2 passed | Founder |
| Pre-launch | All gates passed; Gate 4 checklist complete | Founder — required |
| Monthly post-launch | New support incidents, user reports | Founder |

---

## Checklist

- [x] All risks from `07-risk-privacy-and-safety.md` are reflected
- [x] Build process risks are included
- [x] Business assumption risks are included
- [x] Pre-launch checklist is complete
- [x] No Critical or High risk may remain OPEN at launch
- [x] Document is consistent with `07-risk-privacy-and-safety.md` and `08-validation-plan.md`
