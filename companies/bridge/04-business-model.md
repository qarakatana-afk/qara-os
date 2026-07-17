# 04 — Business Model

**Company name:** Bridge  
**Date:** 2026-07-17  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review  
**Status:** Draft — AWAITING FOUNDER REVIEW AND APPROVAL

---

## Purpose of This Document

This document defines how Bridge creates and captures value in a financially sustainable way. The business model must be consistent with the human outcome — a model that requires harming users to be viable is not a valid model under Qara OS.

> **PROPOSAL NOTICE:** All revenue model decisions, unit economics projections, customer segment definitions, and financial assumptions in this document are **proposals** requiring founder review and approval. They have not been validated and must not be used as the basis for resource commitments, investor communications, or pricing decisions without explicit founder authorization.

---

## 1. Revenue Model

```
Primary revenue source: Monthly and annual subscription (Personal and Family tiers)

Secondary revenue source (if any): Annual plan discount creates upfront cash flow 
that improves runway; no other revenue source planned for Year 1

Revenue sources explicitly excluded:
  - Advertising: Excluded permanently — advertising requires treating user attention 
    as inventory, which contradicts Bridge's attention contract
  - Data licensing: Excluded permanently — selling or licensing conversation content 
    or relationship metadata to any third party violates Qara OS governance and 
    destroys the trust on which Bridge depends
  - Transaction fees or marketplace: Not applicable to Bridge's product model
  - Freemium-to-addiction conversion: Free tier exists to demonstrate value and enable 
    access, not to create engagement habits that monetize through habit formation
```

---

## 2. Unit Economics

```
Average revenue per user/customer (ARPU): [ASSUMPTION]
  - Monthly Personal subscribers: $9.99/month
  - Annual Personal subscribers: $89/year ($7.42/month equivalent)
  - Monthly Family subscribers: $17.99/month
  - Blended ARPU (assuming 60% Personal annual, 30% Personal monthly, 10% Family): 
    approximately $8.50/month [ASSUMPTION — highly sensitive to tier mix]

Customer acquisition cost (CAC): [ASSUMPTION] $15–30 per paying customer in Year 1, 
assuming primarily word-of-mouth and community partnership channels; requires validation 
after first 3 months of launch

Customer lifetime value (LTV): [ASSUMPTION] Median subscription length of 18 months 
(language relationships are long-term; churn is lower than social apps but higher than 
utilities); LTV ≈ $8.50 × 18 = $153 at blended ARPU

LTV:CAC ratio target: 4:1 to 5:1 — achievable if CAC stays at $15–30 and LTV holds 
at ~$150; realistic if community acquisition is effective [ASSUMPTION]

Payback period: [ASSUMPTION] 2–4 months at $15–30 CAC and $8.50/month ARPU
```

---

## 3. Cost Structure

[All figures are ASSUMPTION — subject to validation in 08-financial-plan.md]

| Cost Category | Type | Estimated Monthly (Year 1, 500 users) | Variable or Fixed |
|---|---|---|---|
| Hosting / infrastructure (Railway or Fly.io) | COGS | $200–400 | Variable with users |
| Translation API (DeepL or equivalent) | COGS | $300–600 (estimate based on 2,000 requests/day at API rates) | Variable with usage |
| Speech-to-text API or hosting | COGS | $100–300 | Variable with usage |
| Encrypted storage (for consented story archive users) | COGS | $50–150 | Variable with storage |
| Customer support (async, founder-led) | Operating | $0–200 (founder time; tooling only) | Fixed |
| Founder/team labor | Operating | [Not counted in cash costs at launch — founder-funded] | Fixed |
| Legal / compliance | Operating | $500–1,000 one-time (DPA, privacy policy, terms of service); $200/month ongoing | Fixed |
| Marketing / acquisition | Operating | $500–1,500 (community partnerships, content; no paid ads in Year 1) | Variable |
| **Total estimated** | | **$1,650–3,150/month at 500 users** | |

---

## 4. Path to Sustainability

```
Break-even revenue: [ASSUMPTION] Approximately $3,000–3,500/month to cover 
infrastructure, APIs, and minimal operating costs (excluding founder salary)

Break-even customer count: [ASSUMPTION] 350–420 paying subscribers at blended 
ARPU of $8.50/month

Expected timeline to break-even: [ASSUMPTION] Month 10–14 post-launch, assuming 
the Year 1 growth model in 08-financial-plan.md holds and CAC remains manageable

What must be true for this timeline to hold:
  - Word-of-mouth is effective in the Spanish-English US community
  - Translation API costs do not spike above forecast
  - Churn rate stays below 8% per month
  - Founder is not drawing a salary through break-even
```

---

## 5. Funding Requirements

```
Pre-revenue funding needed: [ASSUMPTION] $20,000–40,000 to cover legal setup, 
initial infrastructure, API costs during development, and operating costs through 
Month 6 (validation and early launch phase)

Source of funding: Founder capital preferred; small grant from diaspora or language 
access funding sources possible; angel investment only if terms are consistent with 
Qara OS governance constraints (see below)

Investment constraints under Qara OS:
  - No investment that creates obligation to grow at the expense of human outcomes 
    (e.g., growth targets that require engagement maximization to achieve)
  - No investment that grants control to parties who have not accepted Qara OS 
    governance principles
  - No investment contingent on advertising, data licensing, or engagement-maximizing 
    models
  - Any investment instrument must permit the company to operate below market-rate 
    growth if that is required to maintain mission integrity
```

---

## 6. Model Integrity Statement

Bridge's business model is intentionally slower-growth and lower-margin than a venture-scale business. This is by design. A business model that required user data monetization, engagement maximization, or lock-in tactics to be viable would not be consistent with Qara OS governance. The business model described here is viable at modest scale — a company of 1–3 people serving tens of thousands of relationships well. Growth beyond this is possible, but it is not the primary objective. The primary objective is that Bridge works for the people it serves.

---

## Checklist

- [x] Revenue model is explicit; prohibited sources are stated
- [x] Unit economics are estimated with confidence labels
- [x] Cost structure is itemized
- [x] Path to sustainability is defined with assumptions
- [x] Funding requirements and governance constraints are explicit
- [x] Business model is consistent with human outcome and Qara OS values
- [x] This document is consistent with 01–03
