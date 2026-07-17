# 09 — Build Handoff

**Product name:** <!-- From 01-product-brief.md -->  
**Date:** <!-- YYYY-MM-DD -->  
**Author:** <!-- Name or agent identifier -->

---

## Purpose of This Document

This document is the single handoff to the builder — human or AI agent — who will implement this product. It consolidates the key decisions from all prior templates into one actionable brief, references sources, and defines the scope of the first build.

A builder receiving this document should be able to act without re-reading all prior documents, but must have access to them for authoritative detail.

---

## 1. Builder Authority

Any builder — human or AI — working from this document operates under:

- Qara OS authority order (QARA_OS_MANIFEST.yaml)
- AGENT_RUNTIME_POLICY.md
- This product's templates 01–08

If a conflict arises between this document and any Qara OS authority document, the authority document governs and the builder must HOLD and escalate.

---

## 2. Product Summary

```
Product name: [From 01]
Primary human outcome: [From 02 — one sentence]
Primary user: [From 03 — one sentence]
Core problem addressed: [From 03 — one sentence]
```

---

## 3. What to Build (Scope of First Build)

List only the Must Have requirements from 05-functional-requirements.md that are in scope for the first build.

```
In scope for v1:
- [Requirement F-01]
- [Requirement F-02]
- [Requirement F-03]

Out of scope for v1 (explicitly):
- [Feature or requirement]
- [Feature or requirement]
```

Do not build anything not listed above without a new Kernel Decision and human approval.

---

## 4. Technical Decisions Summary

```
Frontend: [From 06]
Backend: [From 06]
Database: [From 06]
Auth: [From 06]
Hosting: [From 06]
```

Full architectural detail: `06-technical-architecture.md`

---

## 5. Experience Constraints (Non-Negotiable)

These experience properties must be true of the built product. They are not suggestions.

```
- [From 04 — experience principle 1]
- [From 04 — experience principle 2]
- [From 04 — experience anti-pattern 1 — must not appear]
- [From 04 — experience anti-pattern 2 — must not appear]
```

---

## 6. Safety and Privacy Gates

The following must be completed before any user-facing deployment:

```
- [ ] [Safeguard from 07 — e.g., Privacy policy live]
- [ ] [Safeguard from 07 — e.g., Data deletion path tested]
- [ ] [Safeguard from 07 — e.g., Critical risk mitigations in place]
```

Full risk and safety detail: `07-risk-privacy-and-safety.md`

---

## 7. Validation Gates (Required Before Expanding Scope)

The builder must HOLD at each gate and report before proceeding.

| Gate | Required Evidence | Authority to Proceed |
|---|---|---|
| [Gate 1 from 08] | [Evidence threshold] | Human approval required |
| [Gate 2 from 08] | [Evidence threshold] | Human approval required |

Full validation plan: `08-validation-plan.md`

---

## 8. Record-Keeping Obligations

The builder must create and maintain:

```
Kernel Decision record: records/kernel-decisions/YYYY-MM-DD_[product]-v1-build.md
Assumption log: records/assumption-log/ (for any significant assumption made during build)
Risk log: records/risk-log/ (for any new risk identified during build)
```

---

## 9. Open Questions for Builder

List any questions the builder must resolve before or during implementation, with the person or authority that can answer them.

| Question | Context | Answerable By |
|---|---|---|
| [Question] | [Why it matters] | [Human / Kernel Decision / Prior template] |

---

## 10. Definition of Done (v1)

The first build is complete when:

```
- [ ] All Must Have requirements (Section 3) are implemented and pass acceptance criteria
- [ ] All experience constraints (Section 5) are verifiable
- [ ] All safety and privacy gates (Section 6) are checked
- [ ] Gate 1 validation evidence (Section 7) is collected and recorded
- [ ] Kernel Decision record is written and stored
- [ ] No Critical or High unmitigated risks remain open
- [ ] Human review completed before user-facing deployment
```

---

## Checklist

- [ ] Product summary is accurate and consistent with prior templates
- [ ] v1 scope is limited to Must Have requirements only
- [ ] Experience constraints are copied verbatim from 04
- [ ] Safety gates are copied from 07
- [ ] Validation gates are copied from 08
- [ ] Record-keeping obligations are defined
- [ ] Definition of Done is complete and testable
