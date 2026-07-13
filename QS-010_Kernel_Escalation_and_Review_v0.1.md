---
Specification: QS-010
Title: Kernel Escalation and Review
Version: 0.1
Status: Draft
Owner: Steward, Qara Labs
Depends On: QS-001 through QS-009
Supersedes: None
Classification: System Specification
---

# Kernel Escalation and Review

## 1. Purpose

This specification defines when a Kernel matter must be escalated, who may review it, how review is conducted, and how the resulting decision is recorded.

It exists to prevent unresolved consequential judgment from being concealed inside routine execution.

It does not create a new authority above the Founder's Charter.

## 2. Escalation Principle

A matter shall be escalated when the person or agent executing the Kernel cannot responsibly resolve it within the authority, evidence, or judgment available.

Escalation is not failure.

Escalation is the required response when a decision exceeds delegated authority or presents unresolved material consequence.

A matter shall not be escalated merely to avoid accountability for an ordinary decision that can be made under existing authority.

## 3. Mandatory Escalation Triggers

Escalation is required when any of the following applies:

1. A material conflict with the Founder's Charter is alleged or reasonably possible.
2. Consequential judgment remains unresolved after Kernel analysis.
3. The work may materially affect safety, rights, autonomy, finances, access, privacy, or other significant interests.
4. The responsible human steward lacks authority to approve the proposed action.
5. Evidence is materially contested and the disagreement may change the Kernel Decision.
6. The work introduces a new class of risk not addressed by existing specifications.
7. The work expands beyond the approved scope of an ACTIVE Kernel Decision Record.
8. An artificial intelligence agent identifies a conflict it cannot resolve without human judgment.
9. A proposed exception would weaken a controlling requirement.
10. The Founder, responsible steward, or authorized reviewer determines that independent review is necessary.

## 4. Escalation Levels

### Level One - Steward Review

Use Level One when the issue requires clarification or approval from the responsible human steward but does not involve a material constitutional conflict.

The responsible steward may affirm, revise, hold, or reject the recommendation.

### Level Two - Independent Review

Use Level Two when material evidence, risk, or interpretation is disputed.

The reviewer should not be the sole author of the disputed proposal where reasonable separation is possible.

The independent reviewer shall evaluate the record, controlling authority, evidence, and stated conflict.

### Level Three - Constitutional Review

Use Level Three when the matter may conflict with the Founder's Charter, require a Charter amendment, or materially change Qara Labs governance.

A Constitutional Review shall not authorize an action that contradicts the Charter.

If the desired action requires a Charter change, the amendment procedure in QS-002 shall be followed.

## 5. Escalation Request

An escalation request shall include:

```text
ESCALATION REQUEST

RELATED KDR:
WORK:
CURRENT KERNEL DECISION:
ESCALATION LEVEL REQUESTED:
RESPONSIBLE HUMAN STEWARD:

ISSUE REQUIRING REVIEW:
CONTROLLING SPECIFICATIONS:
MATERIAL FACTS:
ASSUMPTIONS:
UNCERTAINTIES:
CONFLICTS:
RISKS:
AVAILABLE OPTIONS:
RECOMMENDED OPTION:
REASON EXECUTOR CANNOT RESOLVE:
REVIEW NEEDED BY:
```

Missing fields shall be marked NOT APPLICABLE.

The request shall be specific enough for the reviewer to understand the issue without reconstructing the entire project.

## 6. Reviewer Responsibilities

A reviewer shall:

1. Confirm the appropriate level of review.
2. Read the relevant Kernel Decision Record.
3. Identify the highest controlling authority.
4. Separate facts from assumptions and preferences.
5. Examine material evidence and contrary evidence.
6. Evaluate risks and scope limits.
7. State any unresolved uncertainty.
8. Issue a clear review outcome.
9. Record the rationale.
10. Identify whether re-evaluation or amendment is required.

A reviewer shall not substitute rank or confidence for analysis.

## 7. Review Outcomes

A review shall produce one outcome:

### AFFIRM

The existing Kernel Decision remains valid without substantive change.

### MODIFY

The existing decision remains valid only with stated changes to scope, conditions, rationale, or required safeguards.

A MODIFY outcome requires an updated or replacement Kernel Decision Record.

### RETURN

The matter is returned for additional evidence, clarification, revision, or lower-level review.

RETURN shall state exactly what is missing.

### OVERRULE

The existing Kernel Decision is no longer valid and shall be replaced.

OVERRULE shall identify the controlling authority or evidence requiring the change.

### AMENDMENT REQUIRED

The desired action cannot proceed under current Source authority and may proceed only if the relevant constitutional amendment is adopted.

AMENDMENT REQUIRED is not approval of the amendment.

## 8. Review Record

Every formal review shall preserve:

```text
KERNEL REVIEW RECORD

REVIEW ID:
DATE:
RELATED KDR:
REVIEW LEVEL:
REVIEWER:
AUTHORITY TO REVIEW:

ISSUE REVIEWED:
CONTROLLING SPECIFICATIONS:
EVIDENCE CONSIDERED:
CONTRARY EVIDENCE:
MATERIAL RISKS:
UNRESOLVED UNCERTAINTIES:

REVIEW OUTCOME:
RATIONALE:
REQUIRED ACTION:
RE-EVALUATION TRIGGERS:
RELATED NEW OR UPDATED KDR:
```

The recommended identifier format is:

```text
KRR-YYYY-NNN
```

## 9. Independence and Conflict of Interest

A reviewer shall disclose any material interest that could reasonably affect impartial judgment.

Where practical, a reviewer with a material conflict of interest shall not serve as the sole independent reviewer.

Founder status does not remove the requirement to disclose a material conflict.

## 10. Time and Urgency

Urgency may affect how quickly review occurs.

Urgency shall not reduce the authority of the Founder's Charter or justify omission of material risk review.

When immediate action is necessary to prevent foreseeable harm, the responsible steward may authorize the smallest temporary action within existing authority.

The temporary action shall be documented and reviewed as soon as practical.

## 11. Artificial Intelligence Role

An artificial intelligence agent may:

1. Detect escalation triggers.
2. Prepare an escalation request.
3. Summarize evidence and conflict.
4. Identify relevant specifications.
5. Compare available options.
6. Draft a review record.

An artificial intelligence agent shall not serve as the final constitutional reviewer.

It shall not present an escalation recommendation as an approved decision without the required human review.

## 12. Effect on Existing Decisions

An escalation request does not automatically invalidate an existing ACTIVE decision.

The reviewer or responsible steward may suspend the affected work when continued execution presents material risk.

An AFFIRM outcome preserves the existing decision.

MODIFY or OVERRULE requires the record to be updated or replaced according to QS-009.

## 13. Closure

An escalation is closed when:

1. One review outcome has been issued.
2. Required action is assigned.
3. Related Kernel Decision Records are updated or referenced.
4. Re-evaluation triggers are stated.
5. The review record is preserved.
6. The responsible human steward acknowledges the result.

## 14. Authority

This specification is subordinate to the Founder's Charter and shall be interpreted consistently with QS-001 through QS-009.

Where this specification conflicts with the Kernel, Execution Protocol, or Decision Record specifications, the higher controlling Source authority shall prevail and the conflict shall be documented.

Amendments shall follow the Founder's Charter.

## Ratification Checklist

- [ ] Mandatory escalation triggers are explicit.
- [ ] Escalation levels are distinct.
- [ ] Review outcomes are unambiguous.
- [ ] Review does not permit circumvention of the Founder's Charter.
- [ ] Reviewer responsibilities are actionable.
- [ ] Record formats preserve the issue and rationale.
- [ ] Conflicts of interest are addressed.
- [ ] Urgency does not remove constitutional authority.
- [ ] Artificial intelligence remains advisory in constitutional review.
- [ ] Existing Kernel Decisions are updated consistently with QS-009.
