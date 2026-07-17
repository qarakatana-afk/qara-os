# 07 — Operating Model

**Company name:** Bridge  
**Date:** 2026-07-17  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review  
**Status:** Draft — AWAITING FOUNDER REVIEW AND APPROVAL

---

## Purpose of This Document

This document defines how Bridge operates day-to-day: who does what, how decisions are made, how work is organized, and how the company remains accountable to its thesis and Qara OS governance.

---

## 1. Operating Principles

```
1. The human outcome is the primary operating metric. Every decision — product, 
   operational, financial — is evaluated against whether it advances the stated 
   human outcome, not whether it advances growth.

2. Every material decision is recorded. Decisions that cannot be documented cannot 
   be evaluated. Documentation is an act of accountability, not bureaucracy.

3. Speed is not more important than trust. Bridge is a trust product. A decision 
   that moves faster at the cost of trust is the wrong decision.

4. AI agents operate under the same accountability standards as humans. An AI 
   agent that takes an undocumented material action is operating outside its authority.

5. Small and excellent beats large and mediocre. Bridge aims to serve a defined 
   community exceptionally well. Growth that dilutes the quality of the human 
   outcome is not growth.
```

---

## 2. Team and Roles

[Year 1 is primarily Founder-operated with targeted AI agent support]

| Role | Responsibility | Human or AI Agent | Current | Target (Month 12) |
|---|---|---|---|---|
| Founder / CEO | Vision, governance, product decisions, sales (community partnerships), stakeholder decisions, investor communications, human safety decisions | Human | Founder | Human |
| Product | User research, design decisions, feature prioritization, validation plan execution | Human (Founder) + AI Agent support | Founder-led | Founder-led with possible design contractor |
| Engineering | Build, maintain, deploy, security | Human (Founder or engineering contractor) + AI Agent support | Founder or contractor | 1 part-time engineering contractor |
| Customer Support | Tier 1 help content; ticket categorization; escalation to Founder | AI Agent (draft and categorize) + Human (review, approve, handle escalations) | Founder-led | Founder + AI Agent |
| Finance | Bookkeeping, subscription management, cost monitoring | AI Agent (reports and summaries) + Human (decisions) | Founder | Founder |

---

## 3. Decision-Making Authority

| Decision Type | Authority | Escalation Required? |
|---|---|---|
| Product feature change (within existing scope) | Founder | If changes human outcome or scope: Yes — Scope Gate + Kernel Decision |
| Product feature change (outside existing scope) | Cannot be made without Kernel Decision | Always — Kernel Decision + human approval |
| Pricing change | Founder | Yes — Kernel Decision required; 30-day notice to existing subscribers |
| Third-party integration (not touching user data) | Founder + Engineering | No, but record in records/ |
| Third-party integration (touching user data) | Founder | Yes — Privacy Gate; legal review; Kernel Decision |
| Hire or contract new person | Founder | If over $2,000/month: record in records/ |
| External communication (website, press, social media) | Founder only | Yes — no AI agent may publish external communications without Founder review |
| Response to safety or harm incident | Founder only | Always — no AI agent may make final safety decisions |
| Data deletion or retention policy change | Founder | Yes — Kernel Decision + user notification required |
| Investment or fundraising | Founder | Yes — Kernel Decision + governance review for compliance with investment constraints |

---

## 4. AI Agent Operating Rules

```
Authorized AI agent actions (no human approval needed):
  - Draft content (support responses, documentation, product copy) for human review
  - Categorize support tickets and summarize support themes
  - Generate cost and usage reports for Founder review
  - Run Kernel Decision sequences and produce draft decision records for human approval
  - Suggest product requirements or design options based on user feedback — for human evaluation
  - Perform code review, testing, and analysis tasks within an authorized build phase

Actions requiring human approval before execution:
  - Any communication sent to a customer or partner
  - Any code deployment to production
  - Any financial commitment or payment
  - Any data model change that increases data collection
  - Any integration with a third-party service that touches user data
  - Any response to a safety, harm, or legal inquiry
  - Any external publication (blog post, app store update, press release)

Record-keeping: All AI agent material actions are recorded in records/kernel-decisions/ 
with a brief description of the action, the authority it acted under, and whether 
human approval was obtained.
```

---

## 5. Work Management

```
Work tracking system: GitHub Issues (consistent with the repository where Qara OS 
governance documents live; simple; no added tooling required)

Work cycle: 2-week sprints during active build phases; continuous during validation 
and pre-build phases

Prioritization method: Human outcome impact — every work item is ranked by how 
directly and significantly it advances the primary human outcome defined in 
02-human-outcome.md. Items that do not connect to the human outcome require 
explicit justification.

Definition of done for work items:
  - For product features: acceptance criterion from 05-functional-requirements.md is met; 
    no user data is collected beyond what was approved; relevant gate is passed
  - For records: filed in the correct records/ subdirectory; complete per template
  - For support: ticket is resolved and categorized; recurring issues are escalated
```

---

## 6. Communication

```
Primary async communication: GitHub Issues and repository comments for product/technical 
work; email for external and business communication

Meeting cadence: Weekly 30-minute check-in (Founder + any contractors or agents); 
no standing meetings beyond this; ad hoc for decisions that require it

External communication approval: Founder reviews and approves all external statements 
before publication. No AI agent may publish externally without this review.

AI agent output review: All AI agent output that reaches a customer, partner, or 
external audience is reviewed and approved by the Founder before use.
```

---

## 7. Governance Rhythm

| Review | Frequency | What Is Reviewed | Output |
|---|---|---|---|
| Human outcome review | Monthly | Are users experiencing the stated human outcome? What do support issues, opt-in ratings, and cancellation reasons tell us? | Brief written record in records/; if outcome is not being achieved, Founder initiates investigation |
| Kernel Decision audit | Quarterly | Are material decisions being recorded? Are recorded decisions being followed? Are there undocumented material actions? | Audit record in records/; any undocumented material actions are recorded retroactively and investigated |
| Thesis alignment review | Quarterly | Is Bridge still serving its founding belief? Is the offer, market, and operation consistent with the company thesis? | Brief record in records/; escalate to Kernel Decision if drift is identified |
| Risk review | Monthly | Are open risks in records/risk-log/ being actively managed? Are any new risks emerging? | Updated risk log entries |
| Financial review | Monthly | Is the company on track for break-even? Are costs within forecast? Are there surprises in API or infrastructure costs? | Founder review of cost reports; update financial plan if materially off |

---

## 8. Operating Constraints (Qara OS)

```
- All material decisions require a recorded Kernel Decision
- AI agents operate under AGENT_RUNTIME_POLICY.md at all times
- The Founder does not have unilateral authority to override Qara OS governance — 
  even founder decisions must be consistent with the Founders Charter (QS-002)
- Human outcomes are reviewed at least monthly and cannot be deprioritized in favor 
  of growth, cost reduction, or investor pressure
- Records may not be retroactively altered — if a decision was wrong, a new decision 
  supersedes it; the original record stands
- Bridge may not grow in ways that require harming the people it serves to sustain 
  the business model
```

---

## Checklist

- [x] Roles are realistic for current stage
- [x] Decision authority is explicit and includes escalation triggers
- [x] AI agent scope is bounded and includes record-keeping
- [x] Governance rhythm is defined with output artifacts
- [x] Qara OS operating constraints are explicit
- [x] This document is consistent with 01–06
