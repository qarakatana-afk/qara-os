# QARA OS v0.1 Operations Runbook

## Purpose

This runbook defines how QARA OS incidents are detected, triaged, escalated, contained, and closed during controlled production operation.

## Operational Context

QARA OS is a governance operating system. Operational incidents are failures in decision integrity, authority handling, evidence traceability, or controlled rollout behavior.

Primary operating records:

- Kernel decisions: `records/kernel-decisions/`
- Assumptions: `records/assumption-log/`
- Risks: `records/risk-log/`
- Run evidence: `RUN_LOG.md`, `DECISION_RECORDS/`, `TRACE_LOGS/`

## Incident Severity Levels

| Severity | Definition | Example |
|---|---|---|
| SEV-1 Critical | Active or imminent material harm to governance integrity, safety, rights, privacy, or irreversible scope breach | Unauthorized scope expansion, missing constitutional escalation |
| SEV-2 High | Material control failure with contained blast radius; no irreversible harm yet | Decision record integrity gap, unresolved authority conflict in active flow |
| SEV-3 Moderate | Process degradation that can continue temporarily with explicit mitigation | Delayed record completion, monitoring lapse with compensating checks |
| SEV-4 Low | Minor issue with no material governance impact | Non-substantive formatting or reporting issue |

## Incident Response Workflow

1. **Detect and declare**
   - Open incident record and assign Incident ID: `INC-YYYY-NNN`.
2. **Stabilize**
   - Apply smallest responsible containment action.
   - HOLD any affected material action if decision integrity is uncertain.
3. **Classify severity**
   - Assign SEV-1..SEV-4 and responsible human steward.
4. **Assess authority and risk**
   - Confirm controlling specifications and whether escalation is mandatory.
5. **Escalate when triggered**
   - Follow `docs/kernel/10-Kernel_Escalation_and_Review.md` levels.
6. **Mitigate / rollback / disable**
   - Execute approved containment or reversion steps.
7. **Communicate**
   - Send status updates per communications rules below.
8. **Recover and validate**
   - Confirm controls restored and required records complete.
9. **Close with re-entry decision**
   - Document root cause, corrective actions, and re-entry approval.

## Operational Escalation Triggers

Escalation is mandatory when any of the following occurs:

- Potential conflict with Founder's Charter or controlling authority
- Consequential unresolved judgment during incident handling
- Unauthorized change to scope, authority, or production boundary
- Material evidence dispute affecting decision validity
- Repeated incident pattern indicating systemic control weakness

## Rollback / Disable Procedures

When containment requires rollback or disable:

1. Stop affected workflow and mark status HOLD.
2. Revert to last approved known-good state or document baseline.
3. Disable unsafe path until steward re-approval.
4. Record rollback/disable rationale in `records/kernel-decisions/`.
5. Update risk and assumption logs if incident invalidates prior beliefs.
6. Require explicit re-entry approval before resuming normal operation.

Emergency action may be taken immediately only to prevent foreseeable harm and must be recorded as soon as practical.

## Ownership and Communications Rules

- **Founder**: final human authority for constitutional or scope-critical incidents.
- **Responsible human steward**: incident commander by default; accountable for classification, containment, and closure evidence.
- **Reviewer (if escalated)**: independent review outcome per QS-010.

Communication minimums:

- SEV-1: immediate notification to Founder + steward, then updates at least every 60 minutes until stabilized.
- SEV-2: notify steward and Founder in same operating cycle; updates at least every 4 hours while active.
- SEV-3/4: notify steward in same cycle; include in next daily/weekly review.

Communications must separate FACT, ASSUMPTION, UNCERTAINTY, and RISK.

## Minimum Incident Record Template

```
INCIDENT RECORD
INCIDENT ID:
DATE/TIME OPENED (UTC):
REPORTED BY:
RESPONSIBLE HUMAN STEWARD:
SEVERITY:
STATUS: OPEN / STABILIZING / MONITORING / CLOSED

INCIDENT SUMMARY:
AFFECTED ARTIFACTS:
CONTROLLING SPECIFICATIONS:

FACTS:
ASSUMPTIONS:
UNCERTAINTIES:
RISKS:

CONTAINMENT ACTIONS:
ROLLBACK OR DISABLE ACTIONS:
ESCALATION LEVEL (if any):
REVIEW OUTCOME (if any):

COMMUNICATION LOG:
RE-ENTRY CRITERIA CHECK:
CLOSE DECISION:
CLOSED BY:
DATE/TIME CLOSED (UTC):
```

## Re-Entry Criteria After Incident

Normal operation may resume only when all conditions are true:

- Immediate risk is contained
- Required escalation/review outcomes are recorded
- Rollback/disable actions are verified complete
- Required corrective actions are assigned with owners and dates
- Responsible human steward (and Founder for SEV-1 or scope-critical SEV-2) approves re-entry
- Incident record is archived and linked to relevant decision/risk/assumption records
