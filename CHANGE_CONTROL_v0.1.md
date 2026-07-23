# QARA OS v0.1 Change Control

## Purpose

This document defines the required control path for changes to QARA OS governance, operating scope, and delegated authority.

It exists to prevent silent scope changes, preserve human accountability, and maintain an auditable record of why changes were made.

## Scope

This control applies to all proposed changes to:

- Root governance documents and numbered QS specifications
- Kernel-related execution and review requirements
- Pilot/production gate criteria and operating constraints
- Delegated authority, steward ownership, and escalation boundaries

## Change Classes

| Class | Description | Typical Examples | Required Review Depth |
|---|---|---|---|
| C1 Editorial | Non-substantive changes that do not change meaning, authority, risk posture, or required behavior | Typos, grammar, link fixes, formatting | Steward confirmation + record note |
| C2 Operational | Substantive process changes that affect execution details but do not change constitutional authority | Runbook step update, template field updates, monitoring cadence detail | Kernel impact review + steward approval |
| C3 Governance / Scope / Authority | Any change to governing intent, authority order, escalation thresholds, scope boundaries, or approval rights | Authority order edits, changed escalation rules, new waiver policy, expanded operating scope | Kernel review + Founder approval + recorded decision |

## Required Change Request Fields

Every proposed change shall include:

- Change ID: `CCR-YYYY-NNN`
- Date (UTC)
- Requestor
- Responsible human steward
- Documents/files affected
- Current state
- Proposed state
- Change class (C1/C2/C3)
- Human outcome served
- Risks introduced or reduced
- Assumptions and uncertainties
- Rollback/revert method
- Required approvals
- Requested effective date

Missing required fields shall produce HOLD.

## Workflow

1. **Propose**
   - Submit a change request with all required fields.
2. **Classify**
   - Classify as C1, C2, or C3.
   - If classification is uncertain, treat as C3 until resolved.
3. **Kernel review (when required)**
   - Required for all C2 and C3 changes.
   - Record decision path and rationale consistent with QS-007/QS-008.
4. **Impact review**
   - Identify impact on assumptions (`records/assumption-log/`) and risks (`records/risk-log/`).
   - State whether new escalation triggers or controls are required.
5. **Approval**
   - Obtain approvals from the matrix below before merge/use.
6. **Record**
   - Store final decision in `records/kernel-decisions/`.
   - Link supporting assumption/risk updates where applicable.
7. **Re-validation**
   - Re-run affected readiness gates or pilot checks before claiming gate PASS.

No material change is active until approval and recording are complete.

## Approval Matrix

| Change Class | Required Approvals |
|---|---|
| C1 Editorial | Responsible human steward |
| C2 Operational | Responsible human steward + Kernel review recorded |
| C3 Governance / Scope / Authority | Responsible human steward + Founder + Kernel review recorded |

If C2 or C3 introduces unresolved consequential risk, escalation follows `docs/kernel/10-Kernel_Escalation_and_Review.md`.

## Audit Trail Requirements

Every approved, rejected, held, or waived change request shall preserve:

- Change ID and timestamp history
- Requested and final class
- Required approvals with names and dates
- Kernel decision or escalation reference (if applicable)
- Final disposition: APPROVED / REJECTED / HOLD / WAIVED
- Linked artifacts in:
  - `records/kernel-decisions/`
  - `records/assumption-log/`
  - `records/risk-log/`

Records are append-only. Corrections are added as new entries; prior records are not rewritten.

## Gate Waiver Handling

A gate waiver is allowed only when temporary deferral is safer than premature compliance.

Each waiver shall include:

- Gate ID
- Owner (Founder or delegated responsible human steward)
- Rationale
- Mitigations in place
- Expiry date (UTC)
- Re-validation condition

Expired waivers automatically revert gate status to FAIL until renewed or closed.

## Rollback / Revert Rule

If a change produces material conflict, unplanned risk, or authority ambiguity:

1. Suspend use of the changed behavior immediately.
2. Revert to the last approved version.
3. Record rollback decision in `records/kernel-decisions/`.
4. Log any invalid assumptions/risks in corresponding logs.
5. Re-enter change control as a new request before retry.

No rollback may silently delete prior audit evidence.
