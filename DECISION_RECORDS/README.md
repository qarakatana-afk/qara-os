# Decision Records Index (v0.1)

This directory stores Decision Records generated during v0.1 testing and pilot validation.

## Purpose

Each recommendation must have a corresponding Decision Record to satisfy Outcome 3 (auditable decisions).

## Required Fields per Decision Record

Every Decision Record must include:

- Original inputs
- Governing documents consulted
- Assumptions made
- Kernel execution summary
- Confidence assessment
- Escalation status (if applicable)
- Final recommendation

## Naming Convention

Use one file per run:

`DR-<ScenarioID>-<RunID>.md`

Examples:

- `DR-SCN-001-RUN-001.md`
- `DR-SCN-001-RUN-002.md`

## Minimal Template

```
# Decision Record: <ScenarioID> / <RunID>

## Metadata
- Scenario ID:
- Run ID:
- Date (UTC):
- Evaluator:

## Original Inputs

## Governing Documents Consulted

## Assumptions

## Kernel Execution Summary
- Stage 1:
- Stage 2:
- Stage 3:
- ...

## Confidence Assessment

## Escalation Status
- Escalated: Yes/No
- Escalation Notes:

## Final Recommendation

## Trace and Evidence Links
- Trace Log:
- Related Run Log Entry:
- Equivalence Matrix Reference:

## Notes
```

## Validation Checklist

Before marking a run complete, confirm:

- [ ] All required fields are present
- [ ] Stage sequence is documented
- [ ] Final recommendation is explicit
- [ ] Confidence is stated
- [ ] Escalation status is stated
- [ ] Links to trace/evidence are included

## Relationship to Other Artifacts

- Run index: [`../RUN_LOG.md`](../RUN_LOG.md)
- Repeatability analysis: [`../EQUIVALENCE_MATRIX.md`](../EQUIVALENCE_MATRIX.md)
- Test method: [`../TEST_PLAN_v0.1.md`](../TEST_PLAN_v0.1.md)
- MVP criteria: [`../MVP_v0.1.md`](../MVP_v0.1.md)
