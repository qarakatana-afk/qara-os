# QARA OS v0.1 Test Plan

## Purpose

This test plan defines how QARA OS v0.1 will be evaluated against the measurable outcomes established in [MVP_v0.1.md](MVP_v0.1.md).

The goal is to validate that the Kernel produces recommendations that are:

- Transparent
- Repeatable
- Auditable

This plan tests the decision process itself, not broad feature completeness.

---

## Scope

In scope:

- Kernel execution behavior
- Governing authority resolution order
- Recommendation consistency under identical inputs
- Decision Record completeness and traceability

Out of scope:

- Specialized agent orchestration
- Long-term memory systems
- Production-grade UI/UX
- Performance optimization beyond functional validation

---

## Test Outcomes Mapped to MVP

### Outcome 1 — Complete Kernel Execution

Validation target:

- 100% of prototype recommendations include complete Kernel execution traces.
- Required Kernel stages execute in prescribed authority order.
- Escalations/exceptions are explicitly documented.

Evidence required:

- Execution trace logs per run
- Stage-by-stage checklist per scenario
- Exception log entries (if any)

---

### Outcome 2 — Repeatable Recommendations

Validation target:

- Minimum five identical runs per selected scenario.
- At least 80% of recommendations are equivalent.

Equivalence standard (from MVP):

Two recommendations are equivalent if they:

1. Reach the same final recommendation or decision.
2. Follow required Kernel stages in prescribed authority order.
3. Reference the same governing authorities (or equivalent supporting authorities).
4. Do not introduce contradictory assumptions or materially different reasoning that changes the outcome.

Allowed variation:

- Minor wording, formatting, and explanatory-style differences.

Non-equivalence triggers:

- Different decision outcome
- Missing/skipped required stage
- Governing authority drift without justification
- Material reasoning divergence that changes outcome

Evidence required:

- Run comparison matrix
- Equivalence judgments with rationale
- Non-equivalence notes in Decision Records

---

### Outcome 3 — Auditable Decision Records

Validation target:

Every recommendation has a complete Decision Record containing:

- Original inputs
- Governing documents consulted
- Assumptions made
- Kernel execution summary
- Confidence assessment
- Escalation status (if applicable)
- Final recommendation

Evidence required:

- Decision Record archive
- Completeness checklist results

---

## Test Scenario Set

At minimum, evaluate 10 representative scenarios spanning:

1. Straightforward recommendation with low ambiguity
2. Conflicting assumptions requiring explicit uncertainty handling
3. Authority conflict requiring hierarchy resolution
4. Missing required input requiring HOLD/REVISE behavior
5. Risk-sensitive case requiring explicit risk test emphasis
6. Simplicity tradeoff case (remove vs add complexity)
7. Evidence-deficient case requiring evidence-needed output
8. Escalation-triggering case
9. Borderline materiality classification case
10. Near-duplicate of a prior scenario to assess consistency drift

Each selected scenario must include:

- Scenario ID
- Input package
- Expected governing authorities
- Expected decision bounds (not exact wording)

---

## Test Execution Method

For each scenario:

1. Prepare fixed inputs and governing-document set.
2. Execute one baseline run.
3. Execute four additional identical runs (minimum five total).
4. Capture outputs, traces, and Decision Records for all runs.
5. Compare outputs against equivalence criteria.
6. Record pass/fail and observations.

Run conditions:

- Keep prompt/input package unchanged across repeated runs.
- Keep governing authorities unchanged.
- Record timestamp and run identifier for every execution.

---

## Scoring and Pass/Fail Rules

### Outcome 1 Pass Rule

Pass if all recommendations include full Kernel stage traces and no required stage is omitted.

### Outcome 2 Pass Rule

Pass if at least 80% of repeated outputs per scenario are equivalent under defined criteria.

### Outcome 3 Pass Rule

Pass if 100% of recommendations include complete Decision Records with all required fields.

### Overall v0.1 Test Pass

v0.1 test validation passes when Outcomes 1, 2, and 3 each pass or any exception is formally documented with steward-approved deferral.

---

## Required Test Artifacts

- `RUN_LOG.md` — execution index for all runs
- `DECISION_RECORDS/` — archived records per run
- `TRACE_LOGS/` — kernel execution traces
- `EQUIVALENCE_MATRIX.md` — per-scenario repeatability comparisons
- `PILOT_SUMMARY_v0.1.md` — aggregate findings and recommendations

---

## Defect and Ambiguity Handling

For every failure or ambiguity:

- Assign an issue ID
- Classify type: Stage Omission / Authority Drift / Reasoning Divergence / Record Incompleteness / Other
- Document impact on outcomes
- Propose corrective action
- Mark disposition: Fix in v0.1 / Defer to v0.2 / Reject

No failed case may be silently ignored.

---

## Exit Criteria

Testing is complete when:

- All planned scenarios are executed
- Required artifacts are archived
- Outcome pass/fail status is determined with evidence
- A go/no-go recommendation for v0.2 is documented

Completion of this plan validates Kernel reliability for v0.1; it does not certify completion of the full QARA OS platform.
