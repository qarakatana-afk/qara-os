---
Specification: QS-013
Title: Change Proposal and Routing
Version: 0.1
Status: Draft
Owner: Steward, Qara Labs
Depends On: QS-001 through QS-012
Supersedes: None
Classification: System Specification
---

# Change Proposal and Routing

## 1. Purpose

This specification defines the governed route for proposing and approving improvements identified through QS-011 and QS-012.

It introduces no new constitutional authority. It standardizes how improvement proposals are classified, routed, approved, and recorded.

## 2. Routing Tiers (Exhaustive)

Every governance improvement proposal shall be routed to exactly one tier:

### C1 — Config

Scope:

- Template wording clarifications.
- Field naming consistency.
- Process notes that do not alter decision criteria or authority.

Approval rule:

- Founder decision point required.
- Founder may auto-approve in routine operation.

### C2 — Coherence

Scope:

- Modifications to decision criteria interpretation.
- Stage definitions, sequencing, or threshold clarity.
- Specification text changes that affect how existing authority is applied.

Approval rule:

- Founder review and explicit approval required.

### C3 — Constitutional

Scope:

- Any change to Founder's Charter-level authority.
- Any change that creates, removes, or materially reorders constitutional control.

Approval rule:

- Formal Charter amendment required.
- Founder approval alone is insufficient without amendment procedure completion.

If a proposal cannot be confidently placed, default to the higher tier and escalate.

## 3. Change Proposal Record

```text
GOVERNANCE CHANGE PROPOSAL

CHANGE ID:
DATE:
INITIATED BY:
RELATED OORS:
RELATED KDRS:
PATTERN ASSESSMENT ID:

PROBLEM STATEMENT:
PROPOSED CHANGE:
EXPECTED IMPACT:
RISKS OF CHANGE:
RISKS OF NO CHANGE:

ROUTING TIER: C1 | C2 | C3
FOUNDER DECISION REQUIRED: YES
DECISION OUTCOME: APPROVED | REVISE | HOLD | REJECT
DECISION DATE:
IMPLEMENTATION RECORDS:
```

## 4. Routing Logic

1. Receive pattern assessment output from QS-012.
2. Determine if proposal only affects templates/process notes (candidate C1).
3. Determine if proposal affects execution coherence of existing authority (candidate C2).
4. Determine if proposal affects constitutional authority or charter scope (C3).
5. Confirm routing tier and record rationale.
6. Present to Founder for decision.
7. Record outcome and implementation linkage.
8. Issue fresh Kernel Decision when the approved change affects active governance flow.

## 5. Escalation Workflow

1. Draft proposal with evidence references.
2. Route to C1, C2, or C3.
3. Founder decision point:
   - APPROVED: implement and record.
   - REVISE: update proposal and re-submit.
   - HOLD: pause pending missing evidence.
   - REJECT: close proposal with rationale.
4. If C3 approved in principle, execute Charter amendment flow before implementation.
5. Log all outcomes in `records/governance-changes/PHASE_1_CHANGELOG.md`.

## 6. Human Accountability Requirement

All C1/C2/C3 proposals require explicit Founder decision capture in the proposal record or linked KDR.

AI agents may draft proposals and routing recommendations but may not self-approve governance changes.

## 7. Authority

This specification is subordinate to the Founder's Charter and shall be interpreted consistently with QS-001 through QS-012.

Where this specification conflicts with Source authority, Source authority shall prevail.

Amendments shall follow the Founder's Charter.

## 8. Cross-References

- Outcome source: [`11-Operational_Outcome_Record.md`](11-Operational_Outcome_Record.md)
- Pattern assessment source: [`12-Pattern_Assessment_Protocol.md`](12-Pattern_Assessment_Protocol.md)
- Pilot routing example: [`../../records/operational-outcomes/2026-08-09_bridge-build-auth-outcome.md`](../../records/operational-outcomes/2026-08-09_bridge-build-auth-outcome.md)

## Ratification Checklist

- [ ] C1/C2/C3 tiers are mutually exclusive and collectively exhaustive.
- [ ] Routing logic defaults uncertain cases upward.
- [ ] Founder decision point is explicit for every proposal.
- [ ] C3 requires formal Charter amendment.
- [ ] Outcomes are recorded and linked to implementation artifacts.
- [ ] Kernel v0.2 decision model is unchanged.
