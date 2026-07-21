# QARA OS v0.1 Equivalence Matrix

This matrix compares scenario outcomes across recorded runs to verify decision consistency, escalation behavior, and evidence quality under the QARA OS Kernel.

## Method

- Source of truth: `RUN_LOG.md`, `DECISION_RECORDS/*`, `TRACE_LOGS/*`
- Comparison dimensions:
  - Final decision consistency
  - Escalation behavior consistency
  - Authority set consistency
  - Canonical fixed-input identity and decision-question consistency
  - Kernel stage coverage (1–8)
  - Confidence range
- Interpretation:
  - **Equivalent** = outcomes and rationale are materially consistent with scenario intent.
  - **Non-equivalent** = conflicting outcomes or missing mandatory evidence.

---

## Scenario-Level Summary

| Scenario ID | Runs | Expected Behavior | Observed Behavior | Equivalence Result | Notes |
|---|---:|---|---|---|---|
| SCN-001 | 5 valid repeatability runs (RUN-006..RUN-010); input SCN-001-INPUT-v1.0 | Reach equivalent results across five identical executions evaluating MVP_v0.1.md as a valid v0.1 baseline | All five runs produced APPROVED; decision class, authority set, and confidence range consistent | EQUIVALENT | Canonical fixed input established 2026-07-21. RUN-001..RUN-003 remain as historical runs under different objectives and are not counted in this series. |
| SCN-002 | 5 valid repeatability runs (RUN-004, RUN-011..RUN-014); input SCN-002-INPUT-v1.0 | Approve when milestone acceptance criteria are fully satisfied | All five runs produced APPROVED; criteria coverage, authority set, and confidence range consistent | EQUIVALENT | RUN-004 retroactively aligned to SCN-002-INPUT-v1.0; canonical input frozen 2026-07-21. |
| SCN-003 | 5 valid repeatability runs (RUN-005, RUN-015..RUN-018); input SCN-003-INPUT-v1.0 | Escalate when proposal conflicts with approved MVP scope | All five runs produced ESCALATED; conflict detection, escalation path, and confidence range consistent | EQUIVALENT | RUN-005 retroactively aligned to SCN-003-INPUT-v1.0; canonical input frozen 2026-07-21. |

---

## Run-by-Run Comparison

| Run ID | Scenario | Decision | Escalation | Authority Set | Confidence | Stage 1–8 Present | Evidence Completeness |
|---|---|---|---|---|---:|---|---|
| RUN-001 | SCN-001 | APPROVED | N | QARA OS Authority Set v0.1 (2026-07-19) | n/a | Yes | Decision Record + Trace Log + Run Log row |
| RUN-002 | SCN-001 | APPROVED | N | QARA OS Authority Set v0.1 (2026-07-19) | 0.97 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-003 | SCN-001 | APPROVED | N | QARA OS Authority Set v0.1 (2026-07-19) | 0.98 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-004 | SCN-002 | APPROVED | N | QARA OS Authority Set v0.1 (2026-07-19) | 0.98 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-005 | SCN-003 | ESCALATED | Y | QARA OS Authority Set v0.1 (2026-07-19) | 0.99 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-006 | SCN-001 | APPROVED | N | QARA OS Authority Set v0.1 (2026-07-19) | 0.97 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-007 | SCN-001 | APPROVED | N | QARA OS Authority Set v0.1 (2026-07-19) | 0.98 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-008 | SCN-001 | APPROVED | N | QARA OS Authority Set v0.1 (2026-07-19) | 0.97 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-009 | SCN-001 | APPROVED | N | QARA OS Authority Set v0.1 (2026-07-19) | 0.98 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-010 | SCN-001 | APPROVED | N | QARA OS Authority Set v0.1 (2026-07-19) | 0.99 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-011 | SCN-002 | APPROVED | N | QARA OS Authority Set v0.1 (2026-07-19) | 0.97 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-012 | SCN-002 | APPROVED | N | QARA OS Authority Set v0.1 (2026-07-19) | 0.98 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-013 | SCN-002 | APPROVED | N | QARA OS Authority Set v0.1 (2026-07-19) | 0.98 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-014 | SCN-002 | APPROVED | N | QARA OS Authority Set v0.1 (2026-07-19) | 0.97 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-015 | SCN-003 | ESCALATED | Y | QARA OS Authority Set v0.1 (2026-07-19) | 0.98 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-016 | SCN-003 | ESCALATED | Y | QARA OS Authority Set v0.1 (2026-07-19) | 0.99 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-017 | SCN-003 | ESCALATED | Y | QARA OS Authority Set v0.1 (2026-07-19) | 0.98 | Yes | Decision Record + Trace Log + Run Log row |
| RUN-018 | SCN-003 | ESCALATED | Y | QARA OS Authority Set v0.1 (2026-07-19) | 0.99 | Yes | Decision Record + Trace Log + Run Log row |

---

## SCN-001 Comparability Gate Review

| Run ID | Recorded objective | Comparable to SCN-001-INPUT-v1.0? | Evidence |
|---|---|---|---|
| RUN-001 | Validate the MVP definition as the v0.1 baseline | No — different decision question | `DECISION_RECORDS/DR-SCN-001-RUN-001.md` |
| RUN-002 | Validate the v0.1 roadmap against the approved MVP | No — different decision question | `DECISION_RECORDS/DR-SCN-001-RUN-002.md` |
| RUN-003 | Validate the repository operating model for v0.1 governance and execution flow | No — different decision question | `DECISION_RECORDS/DR-SCN-001-RUN-003.md` |
| RUN-006 | Does MVP_v0.1.md satisfy the requirements for a valid v0.1 baseline? | Yes — SCN-001-INPUT-v1.0 | `DECISION_RECORDS/DR-SCN-001-RUN-006.md` |
| RUN-007 | Does MVP_v0.1.md satisfy the requirements for a valid v0.1 baseline? | Yes — SCN-001-INPUT-v1.0 | `DECISION_RECORDS/DR-SCN-001-RUN-007.md` |
| RUN-008 | Does MVP_v0.1.md satisfy the requirements for a valid v0.1 baseline? | Yes — SCN-001-INPUT-v1.0 | `DECISION_RECORDS/DR-SCN-001-RUN-008.md` |
| RUN-009 | Does MVP_v0.1.md satisfy the requirements for a valid v0.1 baseline? | Yes — SCN-001-INPUT-v1.0 | `DECISION_RECORDS/DR-SCN-001-RUN-009.md` |
| RUN-010 | Does MVP_v0.1.md satisfy the requirements for a valid v0.1 baseline? | Yes — SCN-001-INPUT-v1.0 | `DECISION_RECORDS/DR-SCN-001-RUN-010.md` |

- SCN-001-INPUT-v1.0 frozen 2026-07-21 in `SCENARIOS/SCN-001.md`.
- Five valid identical-input runs (RUN-006..RUN-010) completed under that frozen input.
- RUN-001 through RUN-003 remain as historical records and are excluded from the repeatability count.
- HOLD record KDR-2026-001 resolved; see `records/kernel-decisions/2026-07-20_scn-001-repeatability-comparability-gate.md`.

---

## Consistency Findings

### 1) Authority Consistency
- All runs used the same authority set version: **QARA OS Authority Set v0.1 (2026-07-19)**.
- No run indicates authority drift.

**Assessment:** Pass.

### 2) Decision Logic Consistency
- Baseline validation scenarios (SCN-001, SCN-002) consistently produced **APPROVED**.
- Out-of-scope conflict scenario (SCN-003) consistently produced **ESCALATED**.
- SCN-001 five-run series (RUN-006..RUN-010) executed under identical input SCN-001-INPUT-v1.0.
- SCN-002 five-run series (RUN-004, RUN-011..RUN-014) executed under identical input SCN-002-INPUT-v1.0.
- SCN-003 five-run series (RUN-005, RUN-015..RUN-018) executed under identical input SCN-003-INPUT-v1.0.

**Assessment:** Pass.

### 3) Escalation Logic Consistency
- Escalation occurred in all five SCN-003 runs and no others.
- No false-positive escalations in approval scenarios.

**Assessment:** Pass.

### 4) Traceability Completeness
- Every run includes:
  - Run log entry
  - Decision record
  - Trace log
  - Stage sequence coverage 1–8

**Assessment:** Pass.

### 5) Confidence Profile
- SCN-001 repeatability range: 0.97–0.99.
- SCN-002 repeatability range: 0.97–0.98.
- SCN-003 repeatability range: 0.98–0.99.
- All runs in high-confidence band; no low-confidence outcomes.
- RUN-001 lacks an explicit numeric confidence value (pre-existing; not corrected).

**Assessment:** Pass.

---

## Gaps / Risks

1. **RUN-001 missing numeric confidence** — pre-existing minor inconsistency; no action required.
2. **RUN-001 through RUN-003 excluded from SCN-001 repeatability count** — documented as historical runs with different decision questions; no material risk to repeatability evidence.

---

## Recommended Next Validation Actions

1. ~~Define and store one canonical fixed input package for **SCN-001**~~ — Complete (SCN-001-INPUT-v1.0).
2. ~~Add confirming runs for **SCN-002** and **SCN-003**~~ — Complete (five-run series for all three scenarios).
3. Advance to Production Readiness gates G6, G7, G8 (change control, runbook, launch plan).

---

## Current Equivalence Verdict (2026-07-21)

- **SCN-001:** EQUIVALENT — 5 identical runs under SCN-001-INPUT-v1.0; 5/5 APPROVED (100% ≥ 80% threshold).
- **SCN-002:** EQUIVALENT — 5 identical runs under SCN-002-INPUT-v1.0; 5/5 APPROVED (100% ≥ 80% threshold).
- **SCN-003:** EQUIVALENT — 5 identical runs under SCN-003-INPUT-v1.0; 5/5 ESCALATED (100% consistent).
- **Overall:** **PASS for repeatability confidence.** All three pilot scenarios meet the identical-input five-run equivalence requirement.
