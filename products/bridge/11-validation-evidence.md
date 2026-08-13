# 11 — Validation Evidence

**Product name:** Bridge  
**Date:** 2026-08-05  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review  
**Status:** Draft — EVIDENCE NOT YET COLLECTED

---

## Purpose of This Document

This document is the evidence collection record for Bridge's validation gates as defined in `08-validation-plan.md`. Each gate has a placeholder for the evidence required to pass.

**No gate may be marked PASSED until real evidence is recorded here. Placeholders are not evidence. An AI agent may not mark a gate as passed on behalf of real-world testing.**

---

## Pre-Build Validation Evidence

### Method 1: Problem Interviews (10 interviews)

> **Research authorization note:** Problem interviews are a pre-build research activity and may
> begin before build authorization is granted. However, interviews require separate research
> authorization from the Founder before participant contact begins. The following consent and
> privacy protocol must be in place before any interview is conducted:
> - Participants must give explicit informed consent before the interview begins.
> - No personally identifiable information may be recorded without participant consent.
> - Interview notes must be anonymized before being stored or referenced in this document.
> - Any participant who discloses a personal safety situation must be referred to appropriate
>   resources; the interviewer must not attempt to provide direct support.
> - Data collected during research must not be used for any purpose other than validating the
>   problem statement.
> Founder sign-off on research protocol required: [Founder name] [Date]

```
Required to proceed: 7 of 10 confirm the problem as significant; at least 5 describe an 
emotional dimension (not just a practical one)

Status: [x] NOT STARTED — pre-build activity; independent of build authorization

Interview log:
  Interview 1: [DATE] [PARTICIPANT PROFILE] [KEY FINDING] [Emotional dimension: Y/N]
  Interview 2: [DATE] [PARTICIPANT PROFILE] [KEY FINDING] [Emotional dimension: Y/N]
  Interview 3: [DATE] [PARTICIPANT PROFILE] [KEY FINDING] [Emotional dimension: Y/N]
  Interview 4: [DATE] [PARTICIPANT PROFILE] [KEY FINDING] [Emotional dimension: Y/N]
  Interview 5: [DATE] [PARTICIPANT PROFILE] [KEY FINDING] [Emotional dimension: Y/N]
  Interview 6: [DATE] [PARTICIPANT PROFILE] [KEY FINDING] [Emotional dimension: Y/N]
  Interview 7: [DATE] [PARTICIPANT PROFILE] [KEY FINDING] [Emotional dimension: Y/N]
  Interview 8: [DATE] [PARTICIPANT PROFILE] [KEY FINDING] [Emotional dimension: Y/N]
  Interview 9: [DATE] [PARTICIPANT PROFILE] [KEY FINDING] [Emotional dimension: Y/N]
  Interview 10: [DATE] [PARTICIPANT PROFILE] [KEY FINDING] [Emotional dimension: Y/N]

Result: [X of 10 confirm problem as significant] [X of 10 describe emotional dimension]
Threshold met: [ ] YES  [ ] NO
Owner sign-off: [Founder name] [Date]
```

### Method 2: Concept Walkthrough (8 participants)

```
Required to proceed: 6 of 8 participants understand what to do next at each step without 
prompting; none describe the concept as "just another translation app"

Status: [x] NOT STARTED — pre-build activity; independent of build authorization

Participant log:
  Participant 2: [DATE] [PROFILE] [Navigation success: Y/N] ["Just another app": Y/N]
  Participant 3: [DATE] [PROFILE] [Navigation success: Y/N] ["Just another app": Y/N]
  Participant 4: [DATE] [PROFILE] [Navigation success: Y/N] ["Just another app": Y/N]
  Participant 5: [DATE] [PROFILE] [Navigation success: Y/N] ["Just another app": Y/N]
  Participant 6: [DATE] [PROFILE] [Navigation success: Y/N] ["Just another app": Y/N]
  Participant 7: [DATE] [PROFILE] [Navigation success: Y/N] ["Just another app": Y/N]
  Participant 8: [DATE] [PROFILE] [Navigation success: Y/N] ["Just another app": Y/N]

Result: [X of 8 navigation success] [X described as "just another app"]
Threshold met: [ ] YES  [ ] NO
Owner sign-off: [Founder name] [Date]
```

### Method 3: Translation Quality Spot-Check

```
Required to proceed: Average rating ≥ 4/5 on meaning; ≥ 3.5/5 on tone and naturalness 
for priority language pairs

Status: [x] NOT STARTED — pre-build activity; independent of build authorization and translation API decision

Language pairs tested:
  Pair 1: [LANGUAGE A → LANGUAGE B]
    Meaning score: [X/5 average across 10 sentences]
    Tone score: [X/5]
    Naturalness score: [X/5]
    Rater profile: [fluent speaker, background]
  Pair 2: [LANGUAGE A → LANGUAGE B]
    [same structure]
  Pair 3: [LANGUAGE A → LANGUAGE B]
    [same structure]
  Pair 4: [LANGUAGE A → LANGUAGE B]
    [same structure]
  Pair 5: [LANGUAGE A → LANGUAGE B]
    [same structure]

Overall result: Meaning avg [X/5] | Tone avg [X/5] | Naturalness avg [X/5]
Threshold met: [ ] YES  [ ] NO
API provider tested: [PROVIDER NAME]
DPA status at time of test: [SIGNED / NOT YET SIGNED — test used anonymized sentences only]
Owner sign-off: [Founder name] [Date]
```

---

## Build Gate Evidence

### Gate 1: Core Flow Completable

```
Required: 5 people from target user group complete the core translation flow 
(F-01 to F-05) end-to-end in under 5 minutes without assistance and describe 
the experience as simple

Status: [ ] NOT STARTED  [ ] IN PROGRESS  [ ] PASSED  [ ] HOLD

Participant log:
  Participant 1: [DATE] [PROFILE] [Time to complete] [Assistance needed: Y/N] ["Simple": Y/N]
  Participant 2: [DATE] [PROFILE] [Time to complete] [Assistance needed: Y/N] ["Simple": Y/N]
  Participant 3: [DATE] [PROFILE] [Time to complete] [Assistance needed: Y/N] ["Simple": Y/N]
  Participant 4: [DATE] [PROFILE] [Time to complete] [Assistance needed: Y/N] ["Simple": Y/N]
  Participant 5: [DATE] [PROFILE] [Time to complete] [Assistance needed: Y/N] ["Simple": Y/N]

Result: [X of 5 completed without assistance in under 5 minutes]
Threshold met: [ ] YES  [ ] NO
Gate decision: [ ] PASS — proceed to Phase 2  [ ] HOLD — redesign required
Owner sign-off: [Founder name] [Date]
Blocking issues identified: [LIST OR "NONE"]
```

### Gate 2: Secondary User Accessible

```
Required: 5 secondary users (aged 50+, not self-described tech-comfortable) complete 
receive + respond flow in under 3 minutes without assistance

Status: [ ] NOT STARTED  [ ] IN PROGRESS  [ ] PASSED  [ ] HOLD

Participant log:
  Participant 1: [DATE] [AGE] [Tech comfort: LOW/MEDIUM] [Time] [Assistance: Y/N]
  Participant 2: [DATE] [AGE] [Tech comfort: LOW/MEDIUM] [Time] [Assistance: Y/N]
  Participant 3: [DATE] [AGE] [Tech comfort: LOW/MEDIUM] [Time] [Assistance: Y/N]
  Participant 4: [DATE] [AGE] [Tech comfort: LOW/MEDIUM] [Time] [Assistance: Y/N]
  Participant 5: [DATE] [AGE] [Tech comfort: LOW/MEDIUM] [Time] [Assistance: Y/N]

Result: [X of 5 completed without assistance in under 3 minutes]
Threshold met: [ ] YES  [ ] NO
Gate decision: [ ] PASS  [ ] HOLD — simplify secondary interface required
Owner sign-off: [Founder name] [Date]
Blocking issues identified: [LIST OR "NONE"]
```

### Gate 3: Emotional Translation Quality

```
Required: 8 of 10 users rate emotional test messages as "sounds like what I meant" 
rather than "technically correct but doesn't feel right"

Status: [ ] NOT STARTED  [ ] IN PROGRESS  [ ] PASSED  [ ] HOLD

Test message set: [LINK TO ANONYMIZED MESSAGE SET USED FOR TESTING]

Participant log:
  Participant 1: [DATE] [PROFILE] [Rating: "sounds like I meant" or "technically correct only"]
  Participant 2: ...
  [through Participant 10]

Result: [X of 10 rated "sounds like I meant"]
Threshold met: [ ] YES  [ ] NO
Gate decision: [ ] PASS  [ ] HOLD — improve translation quality required
Owner sign-off: [Founder name] [Date]
Blocking issues identified: [LIST OR "NONE"]
```

### Gate 4: Safety and Privacy Checks Passed

```
Required: All items in 07-risk-privacy-and-safety.md pre-launch safeguard checklist 
are complete; HR-01 and HR-04 Kernel Decisions are recorded

Status: [ ] NOT STARTED  [ ] IN PROGRESS  [ ] PASSED  [ ] HOLD

Pre-launch safeguard checklist (from 07-risk-privacy-and-safety.md):
  - [ ] Both-party consent model implemented and tested
  - [ ] DPA with translation provider signed
  - [ ] Crisis resource disclosure implemented
  - [ ] Security penetration test completed; findings remediated
  - [ ] GDPR compliance documentation complete (applicability and scope must be confirmed by qualified legal counsel before this item can be checked)
  - [ ] Data deletion tested (user can delete account and all data within 30 days)
  - [ ] No default storage confirmed by engineering audit
  - [ ] HR-01 Kernel Decision recorded
  - [ ] HR-04 Kernel Decision recorded

Gate decision: [ ] PASS  [ ] HOLD — cannot launch
Owner sign-off: [Founder name] [Date]
Audit evidence: [LINK TO ENGINEERING AUDIT REPORT]
Pentest report: [LINK TO PENTEST REPORT]
```

### Gate 5: Both-Party Consent Model Works

```
Required: 10 test users in a simulated two-party conversation both correctly report, 
after use, what was and was not stored about their conversation

Status: [ ] NOT STARTED  [ ] IN PROGRESS  [ ] PASSED  [ ] HOLD

Participant pair log:
  Pair 1: [DATE] [User A: correct understanding Y/N] [User B: correct understanding Y/N]
  Pair 2: ...
  [through 5 pairs = 10 participants]

Result: [X of 10 correctly reported storage status]
Threshold met: [ ] YES  [ ] NO
Gate decision: [ ] PASS  [ ] HOLD — revise consent and storage communication
Owner sign-off: [Founder name] [Date]
```

---

## Launch Validation Evidence

```
Required: 20 individuals in active cross-language personal relationships using Bridge 
over a 4-week period

Status: [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

Launch validation group:
  - Size: [X of 20 recruited]
  - Language pairs represented: [LIST]
  - Recruitment method: [HOW RECRUITED — must include consent at point of contact]
  - Period: [START DATE] to [END DATE]

Outcome evidence:
  - Users reporting at least one meaningfully better conversation: [X of 20]
    (Threshold: 15 of 20)
  - Users reporting they initiated a previously-avoided conversation: [X of 20]
    (Threshold: 10 of 20)
  - Users reporting feeling surveilled, judged, or manipulated: [X of 20]
    (Threshold: 0)
  - Critical or High safety incidents: [COUNT]
    (Threshold: 0)

Threshold met: [ ] YES  [ ] NO
Launch decision authority: Founder, Qara Labs — HUMAN APPROVAL REQUIRED
Launch decision: [ ] APPROVED FOR EXPANSION  [ ] HOLD — evidence threshold not met
Founder sign-off: [Founder name] [Date]

NOTE: An AI agent may not approve expansion beyond the validation group. This decision 
belongs to the Founder only.
```

---

## Checklist

- [x] All pre-build validation methods have evidence placeholders
- [x] All five build gates have evidence placeholders
- [x] Launch validation evidence section is defined
- [x] Human approval is explicitly required at launch gate
- [x] AI agents are explicitly prohibited from self-approving any gate
- [x] Document is consistent with `08-validation-plan.md`
