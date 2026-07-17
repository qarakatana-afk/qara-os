# 05 — Functional Requirements

**Product name:** <!-- From 01-product-brief.md -->  
**Date:** <!-- YYYY-MM-DD -->  
**Author:** <!-- Name or agent identifier -->

---

## Purpose of This Document

This document defines what the product must do — not how it is built. Every requirement must be traceable to the human outcome defined in 02-human-outcome.md.

---

## 1. Requirement Standard

Each requirement must:

- Be a statement of behavior, not a description of technology
- Be testable: you should be able to write an acceptance criterion for it
- Trace to the human outcome or an explicit constraint
- Be marked as **Must Have**, **Should Have**, or **Nice to Have**

---

## 2. Core Requirements (Must Have)

These requirements are the minimum viable set for the product to deliver its primary human outcome.

| ID | Requirement | Human Outcome Link | Acceptance Criterion |
|---|---|---|---|
| F-01 | [The system shall...] | [From 02] | [How we know this works] |
| F-02 | [The system shall...] | [From 02] | [How we know this works] |
| F-03 | [The system shall...] | [From 02] | [How we know this works] |

---

## 3. Supporting Requirements (Should Have)

These requirements meaningfully improve the experience but are not required for the minimum viable product.

| ID | Requirement | Human Outcome Link | Acceptance Criterion |
|---|---|---|---|
| F-10 | [The system should...] | [From 02] | [How we know this works] |
| F-11 | [The system should...] | [From 02] | [How we know this works] |

---

## 4. Deferred Requirements (Nice to Have)

These requirements are valuable but should not delay delivery of the core.

| ID | Requirement | Rationale for Deferral |
|---|---|---|
| F-20 | [The system could...] | [Why this is not blocking] |

---

## 5. Prohibited Features

Explicitly list features this product must never include. This prevents scope creep from well-intentioned additions that compromise the human outcome.

```
- Must not include: [Feature] — Reason: [Why it violates human outcome or Qara OS principle]
- Must not include: [Feature] — Reason: [Why it violates human outcome or Qara OS principle]
```

---

## 6. Integration Requirements

What external systems, data sources, or services does this product require?

| Integration | Purpose | Required By | Notes |
|---|---|---|---|
| [System name] | [Why needed] | [Which requirement] | [Constraints, auth, privacy implications] |

If no integrations: None required.

---

## 7. Constraint Requirements

Non-functional requirements that constrain how the product must behave.

| ID | Constraint | Rationale |
|---|---|---|
| C-01 | [e.g., The system must not store location data] | [Privacy, safety, or governance reason] |
| C-02 | [e.g., The system must work on low-bandwidth connections] | [User context from 03] |
| C-03 | [e.g., Response time under X ms for primary flow] | [Experience principle from 04] |

---

## 8. Scope Boundary Statement

Write a brief paragraph stating what is and is not in scope for this product's functional requirements. Any request to add a feature outside this boundary requires a new Kernel Decision and human approval.

```
In scope: [List]
Out of scope: [List]
```

---

## Checklist

- [ ] Every Must Have requirement traces to the human outcome
- [ ] Acceptance criteria are testable
- [ ] Prohibited features are listed
- [ ] Constraint requirements cover privacy, safety, and user context
- [ ] Scope boundary is explicit
- [ ] This document is consistent with 01–04
