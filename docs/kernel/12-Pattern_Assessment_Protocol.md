---
Specification: QS-012
Title: Pattern Assessment Protocol
Version: 0.1
Status: Draft
Owner: Steward, Qara Labs
Depends On: QS-001 through QS-011
Supersedes: None
Classification: System Specification
---

# Pattern Assessment Protocol

## 1. Purpose

This specification defines how Qara OS collects Operational Outcome Records, identifies recurring themes, classifies patterns, and determines escalation thresholds for change proposals.

This protocol adds governed learning behavior. It does not modify Kernel v0.2 decision logic in QS-007.

## 2. Pattern Collection

Pattern assessment shall collect OORs that share one or more of:

1. Related KDR.
2. Shared process stage.
3. Similar variance type.
4. Repeated risk or evidence theme.

Collection windows may be per decision, per workstream, or per governance phase.

Primary pilot collection: outcomes linked to KDR-2026-002 Bridge build authorization HOLD.

## 3. Classification Taxonomy

Every identified pattern candidate shall be classified into at least one category:

### 3.1 Evidence Gap

Required evidence was missing, ambiguous, stale, or not decision-usable.

### 3.2 Authority Conflict

Controlling requirements were interpreted inconsistently, or authority boundaries were unclear.

### 3.3 Process Friction

Execution sequencing, handoff language, template structure, or routing behavior caused repeated ambiguity or delay.

## 4. Evidence Thresholds for Escalation

A change proposal shall be triggered when any threshold is met:

1. Two or more OORs show the same material pattern in one quarter.
2. One OOR shows a high-consequence coherence failure affecting decision correctness.
3. The Founder requests proposal drafting for a documented pattern.
4. A pattern blocks execution of an ACTIVE or review-ready workstream.

If thresholds are not met, record "Monitor only" and define next review trigger.

## 5. Assessment Workflow

1. Collect relevant OORs.
2. Extract explicit variance statements.
3. Group recurring themes.
4. Classify each theme using Section 3 taxonomy.
5. Score consequence (low, medium, high) and recurrence (single, repeated, systemic).
6. Check thresholds in Section 4.
7. If threshold met, generate change proposal draft under QS-013 with a recommended C1/C2/C3 route.
8. Record assessment output and Founder decision point.

## 6. Assessment Output Template

```text
PATTERN ASSESSMENT RECORD

ASSESSMENT ID:
DATE:
ASSESSOR:
RELATED OORS:

PATTERN THEME:
CLASSIFICATION:
CONSEQUENCE:
RECURRENCE:

EVIDENCE SUMMARY:

THRESHOLD CHECK:
RECOMMENDED ROUTE: C1 | C2 | C3 | MONITOR

PROPOSED CHANGE ID (if any):
FOUNDER DECISION REQUIRED: YES | NO
NEXT REVIEW TRIGGER:
```

## 7. Human Accountability

Pattern assessment may be prepared by AI agents, but routing outcomes that change governance artifacts shall include a clear Founder decision point.

No assessment result is self-authorizing.

## 8. Authority

This specification is subordinate to the Founder's Charter and shall be interpreted consistently with QS-001 through QS-011.

Where uncertainty exists, escalation shall follow QS-010 and routing shall follow QS-013.

Amendments shall follow the Founder's Charter.

## 9. Cross-References

- Operational Outcome Record: [`11-Operational_Outcome_Record.md`](11-Operational_Outcome_Record.md)
- Change Proposal and Routing: [`13-Change_Proposal_and_Routing.md`](13-Change_Proposal_and_Routing.md)
- Pilot outcome record: [`../../records/operational-outcomes/2026-08-09_bridge-build-auth-outcome.md`](../../records/operational-outcomes/2026-08-09_bridge-build-auth-outcome.md)

## Ratification Checklist

- [ ] Collection method links outcomes to decisions.
- [ ] Taxonomy covers evidence gaps, authority conflicts, and process friction.
- [ ] Escalation thresholds are explicit.
- [ ] Workflow produces a clear route or monitor decision.
- [ ] Founder decision point is explicit for governance changes.
- [ ] Kernel v0.2 authority remains unchanged.
