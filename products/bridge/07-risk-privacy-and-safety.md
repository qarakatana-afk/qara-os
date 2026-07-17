# 07 — Risk, Privacy, and Safety

**Product name:** Bridge  
**Date:** 2026-07-17  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review

---

## Purpose of This Document

This document identifies the risks that could cause Bridge to harm users, erode trust, violate privacy, or fail against its human outcome. Every risk must have a stated mitigation. High-severity risks require a Kernel Decision and human approval before the affected feature may be built.

---

## 1. Risk Classification

| Severity | Definition |
|---|---|
| Critical | Could cause physical, psychological, or financial harm to a user |
| High | Could significantly erode user trust, privacy, or autonomous agency |
| Medium | Could create unnecessary friction or meaningful dissatisfaction |
| Low | Manageable inconvenience with low impact on human outcome |

---

## 2. Human Harm Risks

| ID | Risk Description | Severity | Likelihood | Mitigation | Kernel Decision Required? |
|---|---|---|---|---|---|
| HR-01 | A vulnerable user (someone in crisis, grieving, or experiencing domestic conflict) has a conversation that is inadequately translated, leading to misunderstanding of a serious situation — e.g., health instructions, safety information | Critical | Medium | Bridge is not a substitute for professional interpretation in safety-critical contexts; clear scope statement in onboarding and help documentation; consider an explicit "this is not for medical or legal interpretation" notice | Yes — before launch |
| HR-02 | Translation quality on a sensitive or emotional message is poor, causing the recipient to misunderstand the sender's intention in a way that damages the relationship | High | Medium | Invest disproportionately in translation quality for emotional registers; provide a "I wanted to say something different — try again" affordance without blame; user testing on sensitive message types before launch | Yes — before feature ships |
| HR-03 | A user discloses a mental health crisis through Bridge and there is no path to appropriate help | High | Low | Include a clear, non-intrusive path to crisis resources if crisis language is detected; never surface this automatically without a human safety review of the detection system | Yes — before launch |
| HR-04 | Bridge is used as a surveillance tool — one party records conversations without the other's knowledge or consent | Critical | Low | Both-party consent model for any recording or persistence of conversation content; technical controls to enforce consent; explicit policy and enforcement mechanism | Yes — before any storage feature ships |
| HR-05 | A child or minor uses Bridge in an unmonitored context and encounters inappropriate content from the other participant | High | Low | Bridge is designed for existing personal relationships — it does not connect strangers; document that Bridge is not designed for under-18 use without parental supervision; assess COPPA compliance | Yes — before launch |

---

## 3. Privacy Risks

| ID | Risk Description | Severity | Likelihood | Mitigation |
|---|---|---|---|---|
| PR-01 | Third-party translation API retains conversation content for training purposes without user knowledge | High | Medium | Negotiate data processing agreements that prohibit retention and training use; audit regularly; self-host translation model if agreements cannot be secured |
| PR-02 | A data breach exposes conversation history stored in Bridge's cloud storage | High | Low | Application-layer encryption for all stored conversation content; regular security audits; breach notification process in compliance with GDPR Article 33 |
| PR-03 | Relationship metadata (connection names, languages, relationship labels) is extracted and used for profiling | High | Low | Row-level security; no analytics or ad platform integration; data minimization in all logging |
| PR-04 | User account is linked to their real identity through email without their awareness of the implications | Medium | Low | Clear explanation of what account creation means; option for pseudonymous use where possible; no requirement to use real name |
| PR-05 | Story archive audio is exposed to unauthorized parties through a storage misconfiguration | High | Low | Presigned URL access with short expiry; no public object URLs; storage security audits before story feature ships |

---

## 4. Trust Risks

| ID | Risk Description | Severity | Likelihood | Mitigation |
|---|---|---|---|---|
| TR-01 | Bridge is perceived as translating "incorrectly" on an important message — even if technically accurate — because nuance is lost | High | Medium | Set honest expectations: Bridge translates meaning, not just words, but is not perfect; user testing on emotional language before launch; clear recovery path when a translation feels wrong |
| TR-02 | Users discover that their conversation data was used for a purpose not disclosed at consent time | Critical | Low | Strict data use policy; no scope creep on data use without explicit new consent; regular privacy policy review |
| TR-03 | Bridge sends a notification that feels intrusive or surveillance-like — e.g., "You haven't talked to [Name] in 3 days" | High | Low | No re-engagement notifications; notification policy is opt-in for message arrival only; technical controls to prevent re-engagement triggers |
| TR-04 | Bridge's AI is perceived as "speaking for" the user — putting words in their mouth — rather than translating their words | High | Medium | Always show the original message alongside the translation; never rewrite content beyond translation; user can review and resend if translation is wrong |
| TR-05 | Bridge is acquired by or merges with an entity whose values conflict with Qara OS governance | High | Uncertain | Founders Charter constraints on investment and acquisition; governance change requires public disclosure and user right to export and delete all data |

---

## 5. Operational Risks

| ID | Risk Description | Severity | Likelihood | Mitigation |
|---|---|---|---|---|
| OR-01 | Primary translation API goes down or significantly degrades in quality | High | Low | Graceful degradation to fallback translation provider; user receives message that quality may be reduced; no silent failure |
| OR-02 | Unexpected API cost spike from high translation volume | Medium | Medium | Per-user rate limits; cost monitoring with automatic alerts; usage-based pricing model provides some natural throttle |
| OR-03 | A language pair is poorly supported by the translation provider, leading to systematically poor quality for a specific user community | High | Medium | Pre-launch quality audit across all supported language pairs; honest communication about supported pairs; path for users to report quality issues |
| OR-04 | Story audio storage costs grow faster than revenue | Medium | Medium | Per-user storage limits for story archive; pricing that reflects storage cost; notify users before enforcing limits |

---

## 6. Safeguards Required Before Launch

```
- [ ] Both-party consent model for conversation storage is implemented and tested
- [ ] Data processing agreement with translation API provider is signed, prohibiting retention 
      and training use
- [ ] Privacy policy is published in plain language, linked at the point of account creation 
      and at the point of any data collection
- [ ] Data deletion path (full account + all data) is tested end-to-end
- [ ] Crisis resource disclosure is reviewed by a mental health professional and approved 
      by the human steward before implementation
- [ ] GDPR data processing register is complete
- [ ] Security penetration test or review is completed for the translation gateway and 
      storage service before any real user data is processed
- [ ] "Bridge is not for medical or legal interpretation" scope statement is present in 
      onboarding and help documentation
- [ ] HR-01 and HR-04 Kernel Decisions are issued and recorded before launch
```

---

## 7. Regulatory and Compliance Considerations

| Regulation | Applicability | Status | Owner |
|---|---|---|---|
| GDPR | Applies if any EU residents use Bridge (highly likely given diaspora focus) | Requires assessment — not yet compliant | Founder — legal review required before launch |
| COPPA | Applies if any users under 13 are possible — Bridge is not designed for under-18 use but cannot technically prevent it | Requires age gate or explicit exclusion policy | Founder — legal review required before launch |
| CCPA | Applies if California residents use Bridge | Requires assessment | Founder — legal review required before launch |
| Local data residency laws | May apply depending on user geography (e.g., Russia, China, India) | Not assessed for v0.1 — limit initial launch to regions where assessment is complete | Founder |
| Telecommunications regulations | May apply if Bridge is classified as a communications service in certain jurisdictions | Requires legal assessment | Founder |

---

## 8. Prohibited Design Patterns (Safety)

```
- Must not use: Automatic story or conversation recording without both-party consent 
  — Harm risk: Surveillance; breach of trust; potential legal liability

- Must not use: Emotional state detection or sentiment analysis surfaced to either participant 
  — Harm risk: Misuse for manipulation; privacy violation; making people feel analyzed

- Must not use: Gamification of communication frequency 
  — Harm risk: Creates anxiety and guilt; damages relationships it is meant to support

- Must not use: Dark patterns in consent flows (pre-checked boxes, buried opt-outs) 
  — Harm risk: Users store data they did not intend to; loss of trust when discovered

- Must not use: Automatic reconnection prompts referencing specific people ("Call your 
  mother — she hasn't heard from you") 
  — Harm risk: Surveillance-feel; manipulation of family guilt; privacy violation
```

---

## 9. Incident Response

```
Step 1 (First hour): If a user reports harm (distressing incorrect translation, data breach 
suspicion, surveillance concern, safety event) — immediately log the report with severity 
classification; if Critical or High, notify the Founder within 1 hour regardless of time.

Step 2 (Triage): Classify severity using the table in Section 1. If Critical: suspend the 
affected feature or data pathway within 4 hours while investigation proceeds.

Step 3 (User communication): For Critical and High incidents involving potential user harm 
or data exposure — notify affected users within 72 hours in plain language, explaining 
what happened, what is known, and what is being done. Do not minimize or use legal 
language that obscures the reality.

Step 4 (Post-incident review): Within 14 days, produce a written post-incident review 
documenting root cause, response timeline, what was learned, and what changes are 
being made. File in records/.

Escalation contact: Founder, Qara Labs — responsible for all human safety decisions; 
no AI agent may make a final decision on a Critical or High safety incident without 
human authorization.
```

---

## Checklist

- [x] All Critical and High risks have explicit mitigations
- [x] Critical and High human harm risks have Kernel Decision references
- [x] Pre-launch safeguards are listed and owned
- [x] Regulatory requirements are identified
- [x] Incident response process is defined
- [x] This document is consistent with 01–06
