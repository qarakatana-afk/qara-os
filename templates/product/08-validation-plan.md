# 08 — Validation Plan

**Product name:** <!-- From 01-product-brief.md -->  
**Date:** <!-- YYYY-MM-DD -->  
**Author:** <!-- Name or agent identifier -->

---

## Purpose of This Document

This document defines how the product's human outcome will be validated before, during, and after launch. Validation is not user acquisition. Validation is evidence that the product actually does what it claims to do for people.

---

## 1. Validation Philosophy

Validation under Qara OS answers one question:

> Is this product meaningfully improving the stated human outcome for the people it is designed to serve?

Every validation method must be tied to the human outcome in 02-human-outcome.md. Engagement metrics (opens, clicks, session length) are not validation unless they are proxies for a specific, justified human outcome.

---

## 2. Pre-Build Validation

What will you do before building to confirm the problem and human outcome are real?

```
Method 1: [e.g., Problem interviews with 5 target users]
What you are testing: [Problem hypothesis from 03]
Minimum evidence required to proceed: [e.g., 4 of 5 users confirm the problem]
Owner: [Person or agent]
Timeline: [Before or by: date]

Method 2: [e.g., Paper prototype walkthrough]
What you are testing: [Experience hypothesis from 04]
Minimum evidence: [...]
Owner: [...]
Timeline: [...]
```

---

## 3. Build Validation (Milestone Gates)

Define the checkpoints during build where you pause and validate before continuing.

| Gate | Description | Evidence Required to Pass | If Evidence Not Met |
|---|---|---|---|
| Gate 1 | [e.g., Core flow complete] | [e.g., 3 users complete core flow without prompting] | [HOLD — revise before Gate 2] |
| Gate 2 | [e.g., Human outcome measurable] | [e.g., Observable signal from 02 appears in at least 2 sessions] | [HOLD — revise hypothesis] |
| Gate 3 | [e.g., Safety checks passed] | [e.g., All items in 07-risk-privacy-and-safety.md checklist complete] | [HOLD — cannot launch] |

---

## 4. Launch Validation (Minimum Viable Evidence)

What is the minimum evidence of human outcome that must be present before the product is made available to a broader audience?

```
Minimum user group for launch validation: [Number and criteria for users]
Evidence threshold: [What you must observe before expanding]
Timeline: [How long the validation window runs]
Decision authority: [Who may authorize expansion — human required]
```

---

## 5. Post-Launch Measurement

How will you measure the human outcome on an ongoing basis?

| Metric | Human Outcome It Represents | Collection Method | Review Frequency |
|---|---|---|---|
| [Metric name] | [Link to outcome in 02] | [How measured — survey, log, interview] | [Weekly / Monthly / Per cohort] |

---

## 6. What Does NOT Count as Validation

Explicitly state the metrics and signals you will not use as proxies for human outcome success.

```
Not valid as validation:
- Downloads or installs without evidence of use
- Session length without evidence of outcome
- Return visits without evidence of progress
- [Product-specific metric to exclude]
```

---

## 7. Decision Record for Validation Results

All validation results must be recorded, regardless of outcome. Do not record only positive results.

```
Record location: records/kernel-decisions/ or records/assumption-log/
Record format: [Reference docs/kernel/09-Kernel_Decision_Record.md]
Negative results must: [Be recorded and used to revise, not hidden]
```

---

## Checklist

- [ ] Pre-build validation is planned and has explicit evidence thresholds
- [ ] Build gates are defined with measurable pass criteria
- [ ] Launch validation minimum is explicit
- [ ] Post-launch metrics link to human outcomes, not engagement
- [ ] Invalid proxies are excluded
- [ ] All validation results (including negative) will be recorded
- [ ] This document is consistent with 01–07
