# 08 — Financial Plan

**Company name:** Bridge  
**Date:** 2026-07-17  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review

> All financial projections in this document are [ASSUMPTION] unless labeled otherwise. They are planning tools, not commitments. They require validation after the first 3 months of real operation.

---

## Purpose of This Document

This document defines how Bridge plans to use resources and reach financial sustainability. Financial plans must be honest about uncertainty — every number is labeled with its confidence level.

---

## 1. Financial Principles

```
1. Revenue model does not rely on selling user data or harvesting attention — 
   subscriptions only; all excluded sources are enumerated in 04-business-model.md

2. Growth projections are labeled by confidence level — [ASSUMPTION] for all 
   forward projections; [INFERENCE] where based on comparable market evidence; 
   [FACT] only where confirmed by actual data

3. The plan accounts for operating under Qara OS constraints — slower trust-first 
   growth, higher ethical cost of customer acquisition, lower willingness to use 
   engagement manipulation; projections reflect this, not a growth-hacked baseline

4. Sustainability is defined as covering costs with revenue — not requiring 
   continuous investment; break-even on operating costs (excluding founder salary) 
   is the Year 1 financial target
```

---

## 2. Revenue Projections

[All figures are ASSUMPTION]

| Month | Paying Customers | MRR | ARR | Confidence |
|---|---|---|---|---|
| Month 1 | 10 | $100 | $1,200 | ASSUMPTION — soft launch, invite-only |
| Month 3 | 75 | $637 | $7,650 | ASSUMPTION — community launch active |
| Month 6 | 300 | $2,550 | $30,600 | ASSUMPTION — word-of-mouth active |
| Month 9 | 650 | $5,525 | $66,300 | ASSUMPTION — second community targeted |
| Month 12 | 1,200 | $10,200 | $122,400 | ASSUMPTION — modest growth curve |

**Basis for projections:**

```
Conversion rate assumed: [ASSUMPTION] 20% of free trial users convert to paid within 14 days

Churn rate assumed: [ASSUMPTION] 5% monthly churn — lower than general consumer apps 
because Bridge serves ongoing personal relationships, not casual use

Average contract value: [ASSUMPTION] $8.50/month blended (from 03-offer-and-pricing.md) — 
60% annual Personal plan, 30% monthly Personal plan, 10% Family plan

Key assumption that most affects this model: The community acquisition channel converts 
at sufficient volume to reach 75 paying customers by Month 3 without paid advertising. 
If this assumption fails, Month 3 target is not reachable without additional investment 
in acquisition.

What would cause these projections to be materially wrong:
  - Translation quality does not meet user expectations → high churn after first billing
  - Community partnerships take longer to establish than forecast → slower Month 1–3 growth
  - The secondary user (the family member on the other end) has a poor experience → 
    primary user churns because the product only works for them, not for the relationship
  - Competitive product launches in the same space → faster acquisition cost pressure
```

---

## 3. Cost Projections

[All figures are ASSUMPTION]

| Category | Month 1 | Month 6 | Month 12 | Notes |
|---|---|---|---|---|
| Infrastructure / hosting | $200 | $400 | $700 | Variable with users; EU-region hosting |
| Translation API | $100 | $600 | $1,500 | Scales with message volume; major cost driver |
| Speech-to-text | $50 | $250 | $500 | Scales with voice usage |
| Encrypted storage (story archive) | $25 | $100 | $250 | Only for consented users |
| Customer support tooling | $50 | $100 | $150 | Helpdesk software + AI agent tooling |
| Founder/team labor | $0 | $0 | $0 | Founder not drawing salary until break-even |
| Engineering contractor | $0 | $1,500 | $2,000 | Part-time; starts when validation is complete |
| Legal / compliance | $2,000 | $200 | $300 | One-time setup costs in Month 1; recurring for reviews |
| Marketing / acquisition | $500 | $800 | $1,000 | Community partnerships; no paid ads |
| **Total** | **$2,925** | **$3,950** | **$6,400** | |

---

## 4. Cash Flow Summary

```
Starting capital: [ASSUMPTION] $25,000 — Founder contribution; covers pre-launch, 
development, legal setup, and first 6 months of operations before reaching break-even

Projected monthly burn (Month 1–3): $2,500–3,500/month (pre-revenue or minimal revenue; 
legal and infrastructure setup costs are front-loaded)

Projected runway at current burn: [ASSUMPTION] ~8–10 months from $25,000 starting capital 
if revenue does not grow; revenue growth reduces burn from Month 4 onward

Break-even month: [ASSUMPTION] Month 10–12 at 350–420 paying subscribers — see 
04-business-model.md for break-even analysis

Capital required to reach break-even: [ASSUMPTION] $25,000–35,000 total — within 
Founder funding capacity; no external investment required to reach break-even if 
growth model holds
```

---

## 5. Funding Plan

```
Current funding: [ASSUMPTION] $25,000 Founder capital; no external investment

Funding required before break-even: [ASSUMPTION] Within the $25,000 envelope if 
growth model holds; additional $10,000–15,000 buffer would extend runway to 
Month 14–16 if growth is slower than projected

Preferred funding source: Founder capital; grant funding (diaspora/language access 
grants, social impact grants) as non-dilutive supplement; angel investment only as 
a last resort and only under Qara OS governance constraints

Investment constraints under Qara OS:
  - No investment that creates obligation to grow at the expense of human outcomes
  - No investment that grants control to parties who have not accepted Qara OS governance
  - No investment contingent on advertising, data licensing, or engagement-maximizing models
  - Any investment instrument must permit Bridge to operate below market growth rate 
    if required to maintain mission integrity
  - No investment that would require Bridge to enter the enterprise or business 
    translation market before the personal relationship use case is fully validated
```

---

## 6. Sensitivity Analysis

| Scenario | Assumption Changed | Impact on Break-even | Response |
|---|---|---|---|
| Downside: Low conversion | Trial-to-paid conversion rate is 10% instead of 20% | Break-even delayed to Month 14–16; additional $10,000 in funding needed | Revisit onboarding experience; investigate what prevents conversion during trial |
| Downside: High churn | Monthly churn is 10% instead of 5% | MRR growth stalls; break-even may not be reachable without product improvement | Investigate churn reasons immediately; if translation quality is the cause, this is a product stop condition (see 08-validation-plan.md) |
| Downside: Translation API cost spike | API cost doubles due to provider pricing change | Adds $600–1,500/month to costs at Month 6–12 scale | Evaluate self-hosted translation model; accelerate alternative API evaluation |
| Upside: Faster community growth | 2x customer growth through strong word-of-mouth | Break-even reached by Month 7–8; reduces capital required | Reinvest in translation quality and relationship memory; do not accelerate growth beyond what quality can support |
| Upside: Higher annual plan adoption | 80% annual vs. 60% assumed | Improves upfront cash flow; reduces monthly churn effect | No change needed; monitor and update model |

---

## 7. Financial Red Lines

```
Bridge will not cross these lines regardless of financial pressure:

- Will not introduce advertising revenue even if subscriptions are insufficient 
  to sustain the business — if the subscription model fails, the company is restructured 
  or wound down, not converted to an advertising model

- Will not sell user data or conversation content under any circumstances — 
  not under financial duress, not as part of an acquisition, not for research 
  purposes without individual explicit consent

- Will not raise prices without 30-day notice to existing subscribers and a 
  recorded Kernel Decision explaining the rationale

- Will not accept investment that requires overriding Qara OS governance 
  constraints — even if this means the company does not raise funding

- If financial sustainability cannot be reached without violating any of the above, 
  the company will wind down responsibly: users are notified with 90 days notice, 
  all data is exported and deleted per user preference, and the decision is documented.
```

---

## Checklist

- [x] Financial principles confirm excluded revenue sources
- [x] All projections are labeled ASSUMPTION
- [x] Cost structure is itemized with growth assumptions
- [x] Cash flow and runway are estimated
- [x] Funding plan has governance constraints
- [x] Sensitivity analysis covers downside scenarios
- [x] Financial red lines are explicit
- [x] This document is consistent with 01–07
