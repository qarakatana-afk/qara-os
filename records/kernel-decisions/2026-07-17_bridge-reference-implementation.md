---
Specification: KD-001
Title: Bridge Reference Implementation — Product and Company Templates
Date: 2026-07-17
Author: Copilot Coding Agent (Qara OS AI)
Status: HOLD — HUMAN REVIEW REQUIRED
Decision: DRAFT RECOMMENDATION: PROCEED (subject to founder review and approval)
Steward: Founder, Qara Labs
---

# Kernel Decision: Bridge Reference Implementation

> **HOLD — HUMAN REVIEW REQUIRED**
>
> This decision was drafted by an AI agent. The agent is not authorized to issue a binding PROCEED decision for its own work. This document records the agent's reasoning and recommendation only. The Founder must review the completed Bridge reference implementation, address the open items below, and record explicit approval before this decision is considered PROCEED.

## Work Statement

**Work title:** Complete Bridge reference implementation using Qara OS product and company templates

**Person or group served:** Future AI agents and human contributors operating under Qara OS governance

**Human outcome sought:** AI-operational readiness — a completed reference that future agents can use as a starting point when launching new products or companies under Qara OS, reducing ambiguity and the risk of misaligned work

**Friction or noise addressed:** The absence of a completed reference implementation means future agents face ambiguity about how templates should be filled, increasing the likelihood of incomplete, inconsistent, or ungoverned product and company work

**Relevant Qara OS specifications:** QS-001 through QS-010, AGENT_RUNTIME_POLICY.md, BRIDGE_BIBLE.md, COMPANION_CONSTITUTION.md

**Material assumptions:**

- [ASSUMPTION] Bridge is a communication companion system with multiple capabilities — Translation, Appointment, Hearing/accessibility, older-adult independence, and Bridge Legacy — as stated in the founder's review of the prior draft
- [ASSUMPTION] Real-time spoken translation is an existing capability in Bridge, not a future roadmap item, as stated in the founder's review
- [ASSUMPTION] The reference implementation should faithfully represent Bridge's broader companion scope, not narrow it to a single capability
- [ASSUMPTION] This is a documentation task, not a code-build task — no executable software is being shipped
- [ASSUMPTION] Human approval of the completed templates is required before any build decisions are made

**Primary risks:**

- [Risk] Agent introduces scope that the founder did not authorize — mitigation: founder review required before this decision is PROCEED
- [Risk] Business decisions (pricing, tiers) are treated as authorized rather than as proposals — mitigation: all business decisions are marked PROPOSAL in the documents
- [Risk] AI agent approves its own work — mitigation: this decision is explicitly HOLD pending human review

---

## Pre-Action Protocol

### Facts

- [FACT] The repository contains 9 product templates in `templates/product/` and 10 company templates in `templates/company/`
- [FACT] `products/bridge/` and `companies/bridge/` previously contained a draft reference implementation that was reviewed and found to require changes
- [FACT] The founder's review identified 7 blocking issues, including narrow product scope, AI self-approval, business decisions stated as facts, and unauthorized real-time translation framing
- [FACT] START_HERE_FOR_AI.md explicitly states the goal of completing these templates as a reference implementation
- [FACT] BRIDGE_BIBLE.md defines Bridge as a companion that removes barriers to understanding between people
- [FACT] The approved Bridge core definition (per founder review) is: "Bridge is a communication companion that removes barriers for better connections and understanding"

### Assumptions

- [ASSUMPTION] The five companion capabilities listed in 01-product-brief.md (Translation, Appointment, Hearing, Independence, Legacy) represent the current Bridge scope as understood from the founder's review comment. The exact boundaries of each capability must be confirmed by the Founder.
- [ASSUMPTION] All pricing and business model decisions in the company templates are proposals until explicitly approved by the Founder
- [ASSUMPTION] The reference implementation should use the broader Bridge definition as the organizing scope for all product and company documents

### Uncertainties

- [UNCERTAIN] Whether the companion capability list in 01-product-brief.md matches the founder's intent exactly — the founder's comment named capabilities but did not define their scope
- [UNCERTAIN] The priority ordering of companion modules for build sequencing
- [UNCERTAIN] Whether any of the company documents contain scope or commitments the Founder would not endorse

### Conflicts

- None that cannot be resolved by human review. The primary conflict in the prior draft (AI agent marking its own work as PROCEED) is resolved by this HOLD status.

### Risks

- [Risk] Founder reviews and finds the companion scope description still does not match intent — likelihood: Medium; severity: Medium; mitigation: founder review and explicit approval required
- [Risk] Business decision proposals are treated as approved by a future agent — likelihood: Low; severity: High; mitigation: PROPOSAL notices appear throughout the company documents

---

## Kernel Sequence

### Step 1 — Identify
Person served: Future AI agents and human contributors who need a gold-standard reference.
Human outcome: AI-operational readiness and reduced ambiguity for future governance work.

### Step 2 — Classify
This work is a **System Specification** artifact (completed governance templates) and a reference **Implementation** example.

### Step 3 — Resolve Authority
Highest controlling specification: QS-001 → QS-002 → QS-007/08/09 → BRIDGE_BIBLE.md for product content.

### Step 4 — Test Alignment
✓ Creates infrastructure for human outcomes, not engagement metrics
✓ Reduces unnecessary friction in future governance work
✓ Respects attention: templates are filled, not padded
✓ Consistent with Art of Presence

### Step 5 — Test Risk
No direct user harm risk — this is documentation.
Risk of false certainty in business decisions — mitigated by PROPOSAL labeling throughout.
Risk of scope drift — mitigated by traceability to BRIDGE_BIBLE.md and founder-stated scope.

### Step 6 — Test Simplicity
The smallest responsible action is to fill the existing templates with the correct Bridge scope. This has been done.

### Step 7 — Test Evidence
The belief: completing templates with Bridge content is the right next step.
Evidence for this belief: START_HERE_FOR_AI.md explicitly identifies it as the next step.
Evidence required to continue to build: Founder review of completed templates + separate Kernel Decision for build authorization.

### Step 8 — Decide

**HOLD — HUMAN REVIEW REQUIRED**

Draft recommendation: PROCEED, subject to founder review.

An AI agent may not issue a binding PROCEED for its own work. The Founder must:
1. Review all 9 product documents in `products/bridge/`
2. Review all 10 company documents in `companies/bridge/`
3. Confirm that the companion capability scope in 01-product-brief.md matches intent
4. Confirm or revise the business proposals in 03-offer-and-pricing.md and 04-business-model.md
5. Record explicit approval (signed update to this decision, or a new decision record)

Until the Founder records approval, this decision remains HOLD.

### Step 9 — Record

This document serves as the record. File: `records/kernel-decisions/2026-07-17_bridge-reference-implementation.md`

---

## Open Items for Founder Review

- [ ] Confirm companion capability list (Translation, Appointment, Hearing, Independence, Legacy) matches intent
- [ ] Review and approve or revise 01-product-brief.md one-line statement and scope
- [ ] Review and approve or revise pricing proposals in 03-offer-and-pricing.md
- [ ] Review and approve or revise business model in 04-business-model.md
- [ ] Confirm that the reference implementation may serve as a "gold standard" for future agents
- [ ] Record explicit approval before any build decision is made from these templates

---

*Kernel Decision drafted by: Copilot Coding Agent operating under Qara OS governance*  
*Responsible human steward: Founder, Qara Labs*  
*Status: HOLD — This decision authorizes documentation only. No build authorization exists until the Founder records explicit approval. Build authorization requires a separate Kernel Decision.*
