# QARA OS v0.1 Equivalence Matrix

This matrix compares scenario outcomes across recorded runs to verify decision consistency, escalation behavior, and evidence quality under the QARA OS Kernel.

## Method

- Source of truth: `RUN_LOG.md`, `DECISION_RECORDS/*`, `TRACE_LOGS/*`
- Comparison dimensions:
  - Final decision consistency
  - Escalation behavior consistency
  - Authority set consistency
  - Kernel stage coverage (1–8)
  - Confidence range
- Interpretation:
  - **Equivalent** = outcomes and rationale are materially consistent with scenario intent.
  - **Non-equivalent** = conflicting outcomes or missing mandatory evidence.

---

## Scenario-Level Summary

| Scenario ID | Runs | Expected Behavior | Observed Behavior | Equivalence Result | Notes |
|---|---:|---|---|---|---|
| SCN-001 | 3 (RUN-001, RUN-002, RUN-003) | Approve in-scope baseline artifacts and operating model with no escalation | All three runs APPROVED, no escalation, complete records | EQUIVALENT | Demonstrates stable approval logic across baseline-definition and operating-model checks |
| SCN-002 | 1 (RUN-004) | Approve when acceptance criteria are fully satisfied | APPROVED, no escalation, criteria-driven rationale present | EQUIVALENT (provisional) | Single-run provisional status; add ≥1 confirming run for stronger repeatability evidence |
| SCN-003 | 1 (RUN-005) | Escalate when proposal conflicts with approved MVP scope | ESCALATED, governance-review path explicitly required | EQUIVALENT (provisional) | Correct conflict detection observed; add ≥1 confirming run for stronger repeatability evidence |

---

## Run-by-Run Comparison

| Run ID | Scenario | Decision | Escalation | Authority Set | Confidence | Stage 1–8 Present | Evidence Completeness |
|---|---|---|---|---|---:|---|---|
| RUN-001 | SCN-001 | APPROVED | N | QARA OS Authority Set v0.1 (2026-07-19) | n/a | Yes | Decision Record + Trace Log + Run Log row |
| RUN-002 | SCN-001 | APPROVED | N | QARA OS Authority Set v0.1 (2026-07-19) | 0.97 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-003 | SCN-001 | APPROVED | N | QARA OS Authority Set v0.1 (2026-07-19) | 0.98 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-004 | SCN-002 | APPROVED | N | QARA OS Authority Set v0.1 (2026-07-19) | 0.98 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-005 | SCN-003 | ESCALATED | Y | QARA OS Authority Set v0.1 (2026-07-19) | 0.99 | Yes | Decision Record + Trace Log + Run Log row |

---

## Consistency Findings

### 1) Authority Consistency
- All runs used the same authority set version: **QARA OS Authority Set v0.1 (2026-07-19)**.
- No run indicates authority drift.

**Assessment:** Pass.

### 2) Decision Logic Consistency
- In-scope validation scenarios (SCN-001, SCN-002) resulted in **APPROVED**.
- Out-of-scope conflict scenario (SCN-003) resulted in **ESCALATED**.

**Assessment:** Pass.

### 3) Escalation Logic Consistency
- Escalation only occurred in the explicit authority-conflict scenario.
- No false-positive escalations in approval scenarios.

**Assessment:** Pass.

### 4) Traceability Completeness
- Every recorded run includes:
  - Run log entry
  - Decision record
  - Trace log
  - Stage sequence coverage 1–8

**Assessment:** Pass.

### 5) Confidence Profile
- Reported confidence values (where provided): 0.97, 0.98, 0.98, 0.99.
- No low-confidence outcomes.

**Assessment:** Pass (with note: RUN-001 did not include explicit numeric confidence).

---

## Gaps / Risks

1. **Scenario repeatability depth**
   - SCN-002 and SCN-003 each have one run only.
   - Risk: insufficient repeatability evidence for those classes.

2. **Confidence field normalization**
   - RUN-001 lacks an explicit numeric confidence value.
   - Risk: minor inconsistency in analytics/aggregation.

3. **Cross-scenario stress testing not yet executed**
   - No mixed-authority or ambiguous-authority stress cases logged.
   - Risk: unknown behavior under multi-conflict conditions.

---

## Recommended Next Validation Actions

1. Add one confirming run for **SCN-002** and one for **SCN-003**.
2. Add a normalized confidence value for RUN-001 if historical reconstruction is permissible.
3. Introduce SCN-004+ stress scenarios (e.g., competing authority precedence, incomplete inputs).
4. Re-run this matrix after new runs and compare drift.

---

## Current Equivalence Verdict (v0.1 evidence set)

- **SCN-001:** Equivalent (strong)
- **SCN-002:** Equivalent (provisional)
- **SCN-003:** Equivalent (provisional)
- **Overall:** **Sufficient for controlled pre-production progression**, with targeted follow-up runs required before full production confidence.
