# Pilot Execution Checklist (v0.1)

Use this checklist during pilot runs to reduce process drift and ensure complete evidence capture.

## Pre-Run

- [ ] Scenario selected from `SCENARIOS/`
- [ ] Scenario inputs frozen for run series
- [ ] Governing authority set frozen for run series
- [ ] Run ID assigned
- [ ] Output artifact paths prepared (trace + decision record)

## During Run

- [ ] Kernel stages executed in required order
- [ ] Authority references captured
- [ ] Assumptions captured explicitly
- [ ] Escalation behavior captured (if applicable)
- [ ] Final recommendation captured

## Post-Run Documentation

- [ ] Trace saved under `TRACE_LOGS/<SCN-ID>/`
- [ ] Decision Record created/updated under `DECISION_RECORDS/`
- [ ] `RUN_LOG.md` row added
- [ ] Links to artifacts validated

## Repeatability Series (Outcome 2)

- [ ] Minimum 5 identical runs completed for scenario
- [ ] Pairwise comparisons entered in `EQUIVALENCE_MATRIX.md`
- [ ] Equivalent/non-equivalent judgments justified
- [ ] Non-equivalent cases entered in register

## Quality Gate

- [ ] No required field missing in Decision Record
- [ ] No stage omissions without explicit exception note
- [ ] Confidence level present and justified
- [ ] Go/No-Go relevance flagged for pilot summary
