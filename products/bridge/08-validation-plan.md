# 08 — Validation Plan

**Product name:** Bridge  
**Date:** 2026-07-17  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review  
**Status:** Draft — AWAITING FOUNDER REVIEW AND APPROVAL

---

## Purpose of This Document

This document defines how Bridge's human outcome will be validated before, during, and after launch. Validation is not user acquisition. Validation is evidence that Bridge actually does what it claims to do for people.

---

## 1. Validation Philosophy

Validation under Qara OS answers one question:

> Is Bridge meaningfully improving the stated human outcome — both people in a relationship feeling genuinely understood across a language barrier — for the people it is designed to serve?

Engagement metrics (opens, clicks, session length) are not validation. Evidence of connection, understanding, and relationship quality is.

---

## 2. Pre-Build Validation

```
Method 1: Problem interviews with 10 people who have a close personal relationship 
across a language barrier
What you are testing: Whether the problem described in 03-user-and-problem.md is real, 
significant, and recognizable to real people in this situation
Questions to answer:
  - Do they currently feel the language gap as an emotional limitation, not just a 
    practical one?
  - What have they tried? What was inadequate?
  - Would they want a companion that helped with this — and what would "helping" mean to them?
Minimum evidence required to proceed: 7 of 10 confirm the problem as significant; 
at least 5 describe an emotional dimension (not just a practical one)
Owner: Founder
Timeline: Before any build begins

Method 2: Concept walkthrough using paper or low-fidelity prototype
What you are testing: Whether the experience described in 04-experience-specification.md 
matches what real users expect and want
Minimum evidence: 6 of 8 participants understand what to do next at each step 
without prompting; none describe the concept as "just another translation app"
Owner: Founder
Timeline: Before build begins; after problem interviews confirm the problem

Method 3: Translation quality spot-check across priority language pairs
What you are testing: Whether available translation APIs produce output that users 
describe as capturing tone and meaning — not just words — for personal, emotional language
Method: Present 10 real sentences from an emotional conversation (not "business travel" 
sentences) in 5 target language pairs; have fluent speakers rate translation quality on 
meaning, tone, and naturalness
Minimum evidence: Average rating ≥ 4/5 on meaning; ≥ 3.5/5 on tone and naturalness 
for priority language pairs
Owner: Founder + Engineering
Timeline: Before translation API decision is finalized
```

---

## 3. Build Validation (Milestone Gates)

| Gate | Description | Evidence Required to Pass | If Evidence Not Met |
|---|---|---|---|
| Gate 1: Core flow completable | A user can complete the core translation flow (F-01 to F-05) end-to-end | 5 people from the target user group complete the core flow in under 5 minutes without assistance and describe the experience as simple | HOLD — redesign before Gate 2 |
| Gate 2: Secondary user accessible | The other participant (potentially older, less technical) can receive and respond without account creation or guidance | 5 secondary users (aged 50+, not self-described tech-comfortable) complete receive + respond flow in under 3 minutes without assistance | HOLD — simplify secondary interface before Gate 3 |
| Gate 3: Emotional quality of translation | Users describe translations of emotional messages as capturing meaning, not just words | 8 of 10 users rate a set of emotional test messages as "sounds like what I meant" rather than "technically correct but doesn't feel right" | HOLD — improve translation quality or contextual processing before launch |
| Gate 4: Safety and privacy checks passed | All items in 07-risk-privacy-and-safety.md pre-launch safeguard checklist are complete | All pre-launch safeguard items are checked and verified; HR-01 and HR-04 Kernel Decisions are recorded | HOLD — cannot launch |
| Gate 5: Both-party consent model works | Both participants understand what is and is not being stored | 10 test users in a simulated two-party conversation both correctly report, after use, what was and was not stored about their conversation | HOLD — revise consent and storage communication |

---

## 4. Launch Validation (Minimum Viable Evidence)

```
Minimum user group for launch validation: 20 individuals in active cross-language personal 
relationships, representing at least 5 distinct language pairs, using Bridge over a 4-week 
period

Evidence threshold before expanding:
  - At least 15 of 20 users report that at least one conversation felt meaningfully better 
    than it would have without Bridge (via brief post-conversation check-in, not a survey)
  - At least 10 users report initiating a conversation they would have previously avoided 
    or shortened because of the language barrier
  - Zero users report feeling surveilled, judged, or manipulated by the product
  - Zero Critical or High safety incidents during the validation period

Timeline: 4 weeks of active use with the validation group before any broader availability

Decision authority: Founder, Qara Labs — human approval required before expanding 
beyond the validation group. AI agents may not authorize expansion.
```

---

## 5. Post-Launch Measurement

| Metric | Human Outcome It Represents | Collection Method | Review Frequency |
|---|---|---|---|
| % of users who report a conversation felt meaningful (post-conversation opt-in prompt) | Primary outcome: genuine understanding and connection | Brief in-app opt-in check-in after a conversation ends; never mandatory | Monthly, reviewed by Founder |
| % of users who report initiating conversations they previously avoided | Primary outcome: Bridge reduces the language barrier as a deterrent to connection | Quarterly opt-in survey to active users | Quarterly |
| User-reported translation quality score (opt-in, per-message) | Translation quality as a precondition for the human outcome | Optional thumbs up/down on received translations; never prompted; available if wanted | Monthly — review distribution, not just average |
| Story completion rate (for consented story-feature users) | Secondary outcome: preservation of family stories | Count of started vs. completed stories among consented users | Monthly |
| Cancellation reason (self-reported at cancellation) | Understanding of what is not working | Optional free-text field at cancellation; never guilt-trip | Monthly — qualitative review |
| Support issues categorized as "translation quality" or "felt wrong" | Trust risk TR-01 — poor translation eroding trust | Support ticket categorization | Weekly during first 3 months |

---

## 6. What Does NOT Count as Validation

```
- Session count or daily active users — does not tell us whether conversations were meaningful
- Time in app — more time could indicate confusion or difficulty, not value
- Messages sent — volume without quality is not the outcome Bridge is designed for
- App store rating — a useful signal but not a substitute for evidence of the specific 
  human outcome
- Net Promoter Score — useful directionally but does not distinguish between "I like the 
  app" and "this improved my relationship with my family"
- Revenue growth — people paying for something does not prove it is delivering the 
  human outcome; Bridge's mission is understanding, not subscription conversions
```

---

## 7. Stop Conditions

Under what circumstances should Bridge stop, significantly pivot, or be shut down?

```
Stop condition 1: Translation quality on emotional language pairs is consistently poor 
and cannot be resolved — if 50% or more of users rate emotional message translations 
as "felt wrong" after 6 months of iteration, the core product promise cannot be kept 
with current technology

Stop condition 2: Evidence of systematic harm — if the product is being used for 
surveillance or relationship control (one party recording without the other's knowledge) 
and this cannot be technically prevented

Stop condition 3: The primary human outcome is not observable — if after 6 months 
of validated use, fewer than 40% of users report a meaningful improvement in their 
ability to connect with someone they love across a language barrier, the founding 
belief must be revisited

Stop condition 4: Governance violation — if Bridge is acquired, restructured, or 
modified in a way that violates Qara OS governance and the Founders Charter, 
existing users must be able to export and delete all their data before any change 
takes effect
```

---

## Checklist

- [x] Pre-build validation tests the problem and experience hypotheses
- [x] Build gates include quality, safety, and both-party experience
- [x] Launch validation requires human approval before expansion
- [x] Post-launch metrics are tied to the human outcome, not engagement
- [x] What does not count as validation is explicit
- [x] Stop conditions are defined
- [x] This document is consistent with 01–07
