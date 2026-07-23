# QARA OS v0.1 Controlled Launch Plan

## Purpose

This plan defines the controlled production pilot path for QARA OS v0.1.

Objective: allow constrained real operation with explicit human stewardship, measurable evidence capture, and clear stop/expand criteria.

## Launch Objective

Demonstrate that QARA OS can be operated in a bounded production pilot while maintaining:

- Authority-consistent Kernel execution
- Auditable records for material decisions
- Reliable incident escalation and containment

## Bounded Launch Scope

### In Scope

- Controlled pilot use of existing v0.1 governance artifacts
- Human-steered execution with Founder/responsible human steward oversight
- Use limited to approved pilot scenarios and pre-defined decision classes

### Out of Scope

- Broad public/general availability
- Autonomous expansion of scope without recorded approval
- New product/company verticals not explicitly approved in pilot decision records

## Entry Criteria

Launch may start only when:

- G1–G5 are PASS (or formally WAIVED where allowed)
- G6 and G7 controls are approved and active
- Initial pilot steward and escalation path are explicitly named
- Monitoring and review cadence are scheduled
- Launch Decision Record is created in `records/kernel-decisions/`

## Pilot Constraints

During pilot, the following constraints are mandatory:

- Smallest responsible action first; no silent scope expansion
- Material actions require valid Kernel decision records
- High-risk or authority-ambiguous actions require escalation before execution
- Changes to governance scope/authority require C3 approval via change control
- Any SEV-1 incident triggers immediate launch HOLD pending review

## Monitoring Requirements

Minimum pilot monitoring:

- Track every material run in `RUN_LOG.md`
- Preserve trace and decision artifacts for each run
- Track incident count/severity and time to containment
- Track gating status drift (PASS/FAIL/WAIVED) by review cycle
- Track assumption/risk updates tied to pilot decisions

## Review Cadence

- **Daily operational check** (while active pilot work occurs): steward review of incidents, open risks, and gate drift
- **Weekly governance review**: Founder + steward review of launch metrics, incidents, and scope conformance
- **Milestone gate review**: formal go/hold decision at pre-defined pilot checkpoints

## Success Criteria and Stop Conditions

### Success Criteria

- No unresolved Critical gate FAIL without waiver
- All material actions have complete auditable records
- Incident response and escalation operate according to runbook
- No unauthorized scope/authority changes during pilot window

### Stop Conditions (Immediate HOLD)

- Unwaived Critical gate regresses to FAIL
- SEV-1 incident or repeated SEV-2 pattern indicating systemic control failure
- Missing or non-auditable decision trail for material action
- Detected scope expansion without required C3 approvals

## Exit Criteria for Broader Rollout

Broader rollout consideration is allowed only when all are true:

- Pilot success criteria sustained across agreed pilot window
- No open SEV-1 incidents and no unresolved systemic SEV-2 issues
- Governance, operations, and launch records are complete and reviewable
- Founder issues explicit expansion approval in a new Kernel Decision Record
- Any expanded scope boundaries are documented before activation

## Required Launch Artifacts

Before pilot activation, create/confirm:

- Launch Decision Record in `records/kernel-decisions/`
- Active readiness assessment (`PRODUCTION_READINESS_CHECKLIST_v0.1.md`)
- Active change control policy (`CHANGE_CONTROL_v0.1.md`)
- Active operations runbook (`OPERATIONS_RUNBOOK_v0.1.md`)
- Pilot monitoring log references (`RUN_LOG.md`, `DECISION_RECORDS/`, `TRACE_LOGS/`)
- Current assumption and risk entries for pilot-critical unknowns

## Roles and Decision Authority

- **Founder**: final approval authority for pilot launch, hold, and expansion.
- **Responsible human steward**: day-to-day launch owner, monitoring owner, and incident commander.
- **Reviewer (as required by escalation)**: independent or constitutional review per QS-010.

## Launch Decision Record Requirement

Pilot launch, pilot HOLD, and pilot expansion decisions shall each be recorded as distinct entries in `records/kernel-decisions/` with:

- Scope boundary
- Decision rationale
- Effective date/time
- Required safeguards
- Re-evaluation triggers
- Named responsible human steward

No pilot phase transition is valid without a recorded human-approved decision.
