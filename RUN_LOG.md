# QARA OS v0.1 Run Log

This log tracks every execution used for v0.1 validation.

## Instructions

- Create one row per run.
- Use consistent scenario IDs that match `EQUIVALENCE_MATRIX.md`.
- Link each run to its Decision Record and trace artifact.
- Do not delete prior runs; append new rows.

| Run ID | Scenario ID | Date (UTC) | Executor | Input Version | Authority Set Version | Final Decision | Escalation (Y/N) | Decision Record | Trace Log | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| RUN-001 | SCN-001 | 2026-07-19 | qarakatana-afk | markdown | QARA OS Authority Set v0.1 (2026-07-19) | APPROVED | N | DECISION_RECORDS/DR-SCN-001-RUN-001.md | TRACE_LOGS/SCN-001/TRACE-SCN-001-RUN-001.md | MVP accepted as v0.1 baseline; future changes require documented scope/governing-doc revision. |
| RUN-002 | SCN-001 | 2026-07-19 | qarakatana-afk | markdown | QARA OS Authority Set v0.1 (2026-07-19) | APPROVED | N | DECISION_RECORDS/DR-SCN-001-RUN-002.md | TRACE_LOGS/SCN-001/TRACE-SCN-001-RUN-002.md | Roadmap accepted as implementation baseline; milestones validated for measurable progression and auditability. |
| RUN-003 | SCN-001 | 2026-07-19 | qarakatana-afk | markdown | QARA OS Authority Set v0.1 (2026-07-19) | APPROVED | N | DECISION_RECORDS/DR-SCN-001-RUN-003.md | TRACE_LOGS/SCN-001/TRACE-SCN-001-RUN-003.md | Repository operating model approved: Decision Records as immutable governance, Issues for execution, Milestones for release progress. |
| RUN-004 | SCN-002 | 2026-07-19 | qarakatana-afk | markdown | QARA OS Authority Set v0.1 (2026-07-19) | APPROVED | N | DECISION_RECORDS/DR-SCN-002-RUN-004.md | TRACE_LOGS/SCN-002/TRACE-SCN-002-RUN-004.md | Milestone structure validated against acceptance criteria; implementation planning approved for v0.1 execution plan. |
| RUN-005 | SCN-003 | 2026-07-19 | qarakatana-afk | markdown | QARA OS Authority Set v0.1 (2026-07-19) | ESCALATED | Y | DECISION_RECORDS/DR-SCN-003-RUN-005.md | TRACE_LOGS/SCN-003/TRACE-SCN-003-RUN-005.md | Proposed change exceeded approved v0.1 MVP scope; governance review required before implementation. |

## Status Summary (optional)

- Total runs completed: 5
- Total scenarios covered: 3
- Runs with escalation: 1
- Runs pending documentation: 0
