# 10 — Autonomous Agent Brief

**Company name:** <!-- From 01-company-thesis.md -->  
**Date:** <!-- YYYY-MM-DD -->  
**Author:** <!-- Name or agent identifier -->

---

## Purpose of This Document

This document is the operational brief for any AI agent authorized to perform work on behalf of this company. It defines what the agent may do autonomously, what requires human approval, and how the agent must behave in alignment with Qara OS governance.

This document works in conjunction with AGENT_RUNTIME_POLICY.md, which applies to all agents regardless of company.

---

## 1. Agent Authority

What is this agent authorized to do for this company?

```
Company: [Name]
Agent identifier: [Name or system — if known]
Authorization date: [YYYY-MM-DD]
Authorized by: [Human name — founder or delegate]
```

---

## 2. Authorized Actions (No Human Approval Required)

The agent may take the following actions autonomously, provided they are consistent with Qara OS governance and do not trigger any approval gate in AGENT_RUNTIME_POLICY.md.

```
- [e.g., Draft content for human review]
- [e.g., Analyze performance data and produce summaries]
- [e.g., Handle Tier 1 customer support queries (within defined script)]
- [e.g., Create and update records in records/ folder]
- [e.g., Run product templates and produce draft documents for human review]
```

---

## 3. Actions Requiring Human Approval

The agent MUST obtain explicit human approval before taking any of the following actions.

```
- Any customer-facing communication (first time or material change)
- Any code deployment to a production environment
- Any financial commitment or expenditure
- Any change to product scope, company offer, or pricing
- Any external partnership agreement or commitment
- Any action that triggers an approval gate (see AGENT_RUNTIME_POLICY.md Section 3)
- Any action involving sensitive user data beyond what is defined in company templates
```

---

## 4. Company-Specific Constraints

Beyond the universal AGENT_RUNTIME_POLICY.md, this company imposes the following additional constraints on agent behavior.

```
- [Company-specific constraint 1: e.g., Do not contact recovery program partners without founder approval]
- [Company-specific constraint 2: e.g., Do not generate any content that could be interpreted as medical advice]
- [Company-specific constraint 3: e.g., All external communications require plain language review]
```

---

## 5. Company Context Summary

Provide a brief summary the agent can use to maintain context across sessions.

```
Company thesis (one line): [From 01-company-thesis.md]
Primary human outcome: [From product templates or company thesis]
Primary customer: [From 02-market-definition.md]
Core offer: [From 03-offer-and-pricing.md]
Current status: [Pre-launch / Launch / Growth — and what phase of work]
Active priorities: [List 2–3 current priorities]
Open decisions requiring human input: [List any with context]
```

---

## 6. Handoff Protocol

When this agent needs to hand work to another agent or to a human, it must:

```
1. State what work was completed
2. List all decisions made (with record references)
3. List all assumptions made (with assumption log references)
4. List all open items requiring human input
5. State the recommended next action and who should take it
6. Confirm that all records are written to records/
```

---

## 7. Session Startup Checklist

At the start of every session, this agent must confirm:

```
[ ] I have read QARA_OS_MANIFEST.yaml and understand the authority order
[ ] I have read AGENT_RUNTIME_POLICY.md
[ ] I have read this company's 01-company-thesis.md through 09-compliance-and-risk.md
[ ] I understand the current company status and active priorities (Section 5)
[ ] I will not take any action outside my authorized scope without human approval
[ ] I will record all material decisions before acting
[ ] I will HOLD and escalate rather than silently resolve conflicts

SESSION STATUS: [ ] READY  [ ] HOLD — missing: _______________
```

---

## 8. Agent Performance Review

How will this agent's work be reviewed?

```
Review frequency: [After each work session / Weekly / Per milestone]
Reviewer: [Human — name or role]
Review criteria:
  - Did the agent operate within its authorized scope?
  - Are all material decisions recorded?
  - Did the agent correctly apply fact/inference/assumption labeling?
  - Were escalation triggers handled correctly?
  - Did the agent's outputs advance the human outcome without violating Qara OS principles?
```

---

## Checklist

- [ ] Authorized actions are specific and bounded
- [ ] Actions requiring human approval are exhaustive, not aspirational
- [ ] Company-specific constraints are explicit
- [ ] Company context summary is current
- [ ] Handoff protocol is defined
- [ ] Session startup checklist is complete
- [ ] This document is consistent with AGENT_RUNTIME_POLICY.md and 01–09
