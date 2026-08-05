# QS-011 — Operational Learning Record (OLR)

## 1. Purpose
This specification defines how outcomes are observed, compared to expectations, and preserved as evidence for governed system improvement.

OLR exists to operationalize learning without weakening authority, accountability, or record integrity.

---

## 2. Authority and Scope
- This spec is subordinate to the Founder's Charter and higher constitutional sources.
- OLR applies to all **material work** executed through Kernel-governed decisions.
- OLR is **evidence**, not decision authority.

---

## 3. Normative Rules
1. Every OLR **shall** reference exactly one prior Kernel Decision Record (KDR).
2. Every material decision that is executed **shall** produce at least one OLR after outcome observation.
3. OLR entries are factual and evaluative records; they **shall not** amend policy by themselves.
4. OLR records are immutable except through explicit superseding records with full history.
5. AI may assist drafting OLR content, but a human steward remains accountable for acceptance.

---

## 4. Required OLR Fields
Each OLR shall include:

- **OLR ID** (unique)
- **Date/Time (UTC)**
- **Linked KDR ID**
- **Work Item / Context**
- **Expected Outcome** (copied or derived from KDR intent)
- **Actual Outcome** (observed result)
- **Deviation / Friction** (difference between expected and actual)
- **Recurrence Signal** (none / possible / observed)
- **Change Required** (Yes/No)
- **If Yes: Proposed Change Target** (doc/spec/process/component)
- **Evidence Attachments** (links, artifacts, measurements)
- **Recorder**
- **Accountable Steward**

---

## 5. OLR Status Model
Allowed OLR statuses:

- **OPEN** — observation captured, not yet reviewed
- **AFFIRMED** — observation reviewed and accepted as valid evidence
- **SUPERSEDED** — replaced by a later OLR with rationale and link

Statuses are mutually exclusive.

---

## 6. Relationship to Kernel Decisions
- OLR does not re-open or overwrite a KDR.
- If OLR evidence suggests the original decision should be changed, route through governed change control (QS-012 + Kernel decision path).
- “Learning noted” is not equivalent to “policy changed.”

---

## 7. Human Accountability
A named human steward shall approve each OLR as valid evidence.  
AI-generated analysis may be included but cannot be the final accountable authority.

---

## 8. Record Integrity
- No destructive edits.
- Corrections occur via superseding entry.
- Full lineage shall be preserved: `KDR -> OLR(s) -> pattern assessment -> change-control reference (if any)`.

---

## 9. Minimum Operational Cadence
At minimum:
- one OLR per executed material KDR
- additional OLRs when delayed effects or downstream outcomes become observable

---

## 10. Output Template (Canonical)

```text
OLR ID:
Date/Time (UTC):
Linked KDR ID:
Work Item / Context:

Expected Outcome:
Actual Outcome:
Deviation / Friction:

Recurrence Signal: [none | possible | observed]
Change Required: [Yes/No]
Proposed Change Target (if Yes):

Evidence Attachments:
Recorder:
Accountable Steward:
Status: [OPEN | AFFIRMED | SUPERSEDED]
Supersedes (optional):
```

---

## 11. Compliance
A work cycle is not learning-complete until its OLR is recorded and steward-affirmed.
