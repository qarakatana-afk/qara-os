---
Specification: QS-009
Title: Kernel Decision Record
Version: 0.1
Status: Draft
Owner: Steward, Qara Labs
Depends On: QS-001 through QS-008
Supersedes: None
Classification: System Specification
---

# Kernel Decision Record

## 1. Purpose

This specification defines the standard record produced after a formal Qara OS Kernel execution.

The record exists to preserve what was known, what was assumed, what risks were identified, what decision was made, and what evidence will govern later review.

The Kernel Decision Record does not replace Kernel analysis. It is the durable output of that analysis.

## 2. Required Use

A Kernel Decision Record is required for material work reviewed under QS-007 and QS-008.

Routine work operating under an existing valid Kernel Decision does not require a new record unless the work materially changes in purpose, scope, risk, served group, or expected human outcome.

## 3. Record Standard

Each record shall be:

1. Specific enough to support later review.
2. Concise enough to remain usable.
3. Accurate to the information available at the time.
4. Explicit about assumptions and uncertainty.
5. Linked to the responsible human steward.
6. Preserved without retrospective rewriting.

## 4. Required Record

```text
KERNEL DECISION RECORD

RECORD ID:
DATE:
VERSION:

WORK
TITLE:
CLASSIFICATION:
STATUS:

RESPONSIBILITY
RESPONSIBLE HUMAN STEWARD:
CONTRIBUTING PEOPLE OR AGENTS:

PURPOSE
PERSON OR GROUP SERVED:
HUMAN OUTCOME:
FRICTION OR NOISE ADDRESSED:

AUTHORITY
CONTROLLING SPECIFICATIONS:
HIGHEST CONTROLLING AUTHORITY:
LOWER-LEVEL SPECIFICATIONS REVIEWED:

ANALYSIS
FACTS:
ASSUMPTIONS:
UNCERTAINTIES:
CONFLICTS:
PRIMARY RISKS:
SIMPLICITY TEST:
TRUST TEST:
CAPABILITY EFFECT:
EVIDENCE NEEDED:

PROPOSED ACTION
SMALLEST RESPONSIBLE ACTION:
SCOPE LIMITS:
PROHIBITED OR EXCLUDED ACTIONS:

DECISION
KERNEL DECISION:
RATIONALE:
REQUIRED REVISIONS OR MISSING INFORMATION:
RE-EVALUATION TRIGGERS:
REVIEW DATE OR CONDITION:

APPROVAL
HUMAN STEWARD DECISION:
APPROVAL DATE:
NOTES:
```

Fields that do not apply shall be marked NOT APPLICABLE.

Fields shall not be silently removed from the standard record.

## 5. Record Identifier

Each record shall receive a unique identifier.

The recommended format is:

```text
KDR-YYYY-NNN
```

Where:

- KDR means Kernel Decision Record.
- YYYY is the calendar year.
- NNN is the sequential record number for that year.

Example:

```text
KDR-2026-001
```

A product or system may add a short prefix or reference when needed, provided the unique KDR identifier remains intact.

## 6. Status

A record shall use one of the following statuses:

### DRAFT

Analysis is in progress and no formal decision has been approved.

### ACTIVE

A formal Kernel Decision has been approved and remains valid.

### REPLACED

A later Kernel Decision Record supersedes the record.

### CLOSED

The work was completed, retired, rejected, or otherwise ended without requiring a replacement decision.

### ARCHIVED

The record is retained for history but is no longer operationally active.

Status does not change the original decision. It describes the record's current operational state.

## 7. Decision Integrity

The Kernel Decision shall use exactly one of the following:

- PROCEED
- REVISE
- HOLD
- REJECT

The record shall not combine decisions such as "PROCEED WITH HOLD" or "REJECT FOR NOW."

Conditions belong in the rationale, required revisions, scope limits, or re-evaluation triggers.

## 8. Facts, Assumptions, and Uncertainty

Facts shall include only information supported by the evidence available at the time.

Assumptions shall state what is being treated as provisionally true.

Uncertainties shall identify material information that remains unknown.

A statement shall not be moved from assumption to fact without supporting evidence.

## 9. Scope Limits

A PROCEED decision authorizes only the action and scope recorded.

Scope limits shall identify boundaries such as:

1. Features not approved.
2. Users or groups not included.
3. Data not authorized for collection.
4. Decisions that still require human review.
5. Time, cost, geography, or testing limits.
6. Conditions that require re-evaluation.

Work outside the recorded scope requires review.

## 10. Re-Evaluation Triggers

Triggers shall be specific enough to determine when the decision must be reviewed.

Examples include:

- Contrary user evidence.
- Material increase in risk.
- Expansion to a new served group.
- New data collection.
- Change in product purpose.
- Amendment to a controlling specification.
- Failure to produce the expected human outcome.
- Material change in cost, scale, or technical behavior.

"Review later" is not a sufficient trigger.

## 11. Human Approval

A material record shall identify the responsible human steward and the human decision.

An artificial intelligence agent may draft the record, perform analysis, and recommend a Kernel Decision.

The record shall not be marked ACTIVE until the responsible human steward has approved the recorded decision.

## 12. Corrections

A correction may fix an error in transcription, formatting, identifier, date, or attribution.

A correction shall not alter the substance of the original analysis or decision.

Substantive changes require a new version or a new Kernel Decision Record.

Corrections shall be labeled and dated.

## 13. Replacement

When a new decision supersedes an existing record:

1. The new record shall reference the prior record.
2. The prior record shall be marked REPLACED.
3. The prior record shall remain preserved.
4. The reason for replacement shall be stated.
5. The new record shall identify the evidence or change that required re-evaluation.

## 14. Storage

Kernel Decision Records shall be stored in a location appropriate to the work they govern.

The storage location shall preserve:

- Record identifier.
- Version.
- Status.
- Relationship to the relevant product, system, experiment, or implementation.
- Access for authorized review.
- Historical continuity.

Records containing sensitive or confidential information shall not be placed in public repositories without appropriate protection.

## 15. Completion Standard

A Kernel Decision Record is complete when:

1. All required fields are completed or marked NOT APPLICABLE.
2. One Kernel Decision is recorded.
3. The rationale is explicit.
4. Scope limits are stated.
5. Evidence needs are identified.
6. Re-evaluation triggers are specific.
7. A responsible human steward is named.
8. Approval status is clear.
9. The record identifier and status are assigned.
10. The record is preserved in the correct location.

## 16. Authority

This specification is subordinate to the Founder's Charter and shall be interpreted consistently with QS-001 through QS-008.

Where this specification conflicts with QS-007 or QS-008, those specifications control Kernel purpose and execution.

Where any Kernel specification conflicts with Source authority, Source authority shall prevail.

Amendments shall follow the Founder's Charter.

## Ratification Checklist

- [ ] The required record preserves material reasoning.
- [ ] Record identifiers are consistent and unique.
- [ ] Status values are distinct.
- [ ] Decision integrity prevents ambiguous combined decisions.
- [ ] Scope limits prevent unauthorized expansion.
- [ ] Re-evaluation triggers are actionable.
- [ ] Human approval remains explicit.
- [ ] Corrections do not permit retrospective rewriting.
- [ ] Replacement preserves history.
- [ ] Storage requirements account for sensitive information.
