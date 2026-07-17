# 07 — Operating Model

**Company name:** <!-- From 01-company-thesis.md -->  
**Date:** <!-- YYYY-MM-DD -->  
**Author:** <!-- Name or agent identifier -->

---

## Purpose of This Document

This document defines how the company operates day-to-day: who does what, how decisions are made, how work is organized, and how the company remains accountable to its thesis and Qara OS governance.

---

## 1. Operating Principles

List 3–5 principles that govern how this company works internally.

```
1. [Principle: e.g., Decisions are made at the lowest level with sufficient context]
2. [Principle: e.g., Every material decision is recorded]
3. [Principle: e.g., Speed is not more important than human outcomes]
4. [Principle: e.g., AI agents operate under the same accountability standards as humans]
```

---

## 2. Team and Roles

Who does what? Be realistic about current state (founder-only) versus future state.

| Role | Responsibility | Human or AI Agent | Current | Target (Month 12) |
|---|---|---|---|---|
| [e.g., Founder / CEO] | [Vision, governance, sales, stakeholder decisions] | Human | [Name] | Human |
| [e.g., Product] | [Product decisions, user research, design] | Human / AI Agent | [Status] | [Target] |
| [e.g., Engineering] | [Build, maintain, deploy] | Human / AI Agent | [Status] | [Target] |
| [e.g., Customer support] | [Onboarding, support, retention] | AI Agent + Human | [Status] | [Target] |

---

## 3. Decision-Making Authority

Who can make what decisions without escalation?

| Decision Type | Authority | Escalation Required? |
|---|---|---|
| [e.g., Product feature change] | [Product lead] | If changes scope or human outcome — Yes, Scope Gate |
| [e.g., Pricing change] | [Founder] | Kernel Decision required — Yes |
| [e.g., Hire or contract new person] | [Founder] | If over $X budget — Yes |
| [e.g., Third-party integration] | [Engineering + Product] | If touches user data — Yes, Privacy Gate |
| [e.g., External communication] | [Founder or designated] | If first public statement — Yes, Publication Gate |

---

## 4. AI Agent Operating Rules

If AI agents participate in operations, define their scope.

```
Authorized AI agent actions (no human approval needed):
  - [e.g., Draft content for human review]
  - [e.g., Handle Tier 1 customer support]
  - [e.g., Generate data analysis and summaries]

Actions requiring human approval before execution:
  - [e.g., Any communication to customers]
  - [e.g., Any code deployment to production]
  - [e.g., Any financial commitment]
  - Any action that triggers an AGENT_RUNTIME_POLICY.md approval gate

Record-keeping: All AI agent material actions recorded in records/kernel-decisions/
```

---

## 5. Work Management

How is work organized, tracked, and prioritized?

```
Work tracking system: [e.g., GitHub Issues / Notion / Linear]
Sprint or work cycle: [e.g., 1-week sprints / Continuous / Monthly themes]
Prioritization method: [e.g., Human outcome impact — ranked by how directly it advances primary human outcome]
Definition of done for work items: [Consistent with 09-build-handoff.md product standard]
```

---

## 6. Communication

How does the team communicate?

```
Primary async communication: [e.g., Slack / Email / GitHub Discussions]
Meeting cadence: [e.g., Weekly 30-min check — no meeting for meetings' sake]
External communication approval: [Who approves external statements — Founder]
AI agent output review: [All AI agent output reviewed by human before external use]
```

---

## 7. Governance Rhythm

How does the company stay accountable to its thesis, its customers, and Qara OS?

| Review | Frequency | What Is Reviewed | Output |
|---|---|---|---|
| Human outcome review | Monthly | Are customers experiencing the stated outcome? | Record in records/ |
| Kernel Decision audit | Quarterly | Are material decisions recorded and followed? | Record in records/ |
| Thesis alignment review | Quarterly | Is the company still serving its founding belief? | Record or escalate |
| Risk review | Monthly | Are open risks in records/risk-log/ being addressed? | Updated risk log |

---

## 8. Operating Constraints (Qara OS)

What governance constraints shape how this company runs?

```
- All material decisions require a recorded Kernel Decision
- AI agents operate under AGENT_RUNTIME_POLICY.md
- The Founder does not have unilateral authority to override Qara OS governance
- Human outcomes are reviewed at least monthly and cannot be deprioritized for growth metrics
- Records may not be retroactively altered
```

---

## Checklist

- [ ] Roles are realistic for current stage
- [ ] Decision authority is explicit and includes escalation triggers
- [ ] AI agent scope is bounded and includes record-keeping
- [ ] Governance rhythm is defined with output artifacts
- [ ] Qara OS operating constraints are explicit
- [ ] This document is consistent with 01–06
