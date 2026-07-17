# 09 — Compliance and Risk

**Company name:** Bridge  
**Date:** 2026-07-17  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review  
**Status:** Draft — AWAITING FOUNDER REVIEW AND APPROVAL

---

## Purpose of This Document

This document identifies Bridge's company-level compliance obligations and risks. It complements the product-level risk document (products/bridge/07-risk-privacy-and-safety.md) by addressing company formation, regulatory, financial, and governance risks.

---

## 1. Risk Classification

| Severity | Definition |
|---|---|
| Critical | Could cause the company to harm users, violate law, or become inoperable |
| High | Could significantly damage trust, reputation, or financial stability |
| Medium | Could create meaningful operational difficulty or compliance exposure |
| Low | Manageable risk with clear mitigation path |

---

## 2. Legal and Regulatory Compliance

| Obligation | Applicability | Status | Owner | Timeline |
|---|---|---|---|---|
| GDPR (General Data Protection Regulation) | Applies to EU residents; Bridge's user base likely includes EU residents from day one (diaspora communities maintain connections with European family) | Not yet compliant — assessment required | Founder (legal counsel required) | Before launch |
| CCPA (California Consumer Privacy Act) | Applies to California residents; likely from day one | Not yet compliant — assessment required | Founder (legal counsel required) | Before launch |
| COPPA (Children's Online Privacy Protection Act) | Bridge is not designed for under-13 users but cannot technically prevent it | Age gate or explicit exclusion policy required | Founder (legal counsel required) | Before launch |
| Telecom / OTT regulations | Bridge may be classified as an Over-the-Top communication service in some jurisdictions | Requires legal assessment; potentially limiting for certain markets | Founder (legal counsel required) | Before launch in non-English markets |
| App Store terms of service (Apple / Google) | Applies to any mobile app | In-app purchase and subscription terms must comply; privacy nutrition labels required | Engineering + Founder | Before App Store submission |
| Terms of Service and Privacy Policy | Required for any user-facing product | Must be drafted in plain language; reviewed by legal counsel; published before first user | Founder (legal counsel required) | Before any user data is processed |
| Data Processing Agreements (translation and STT APIs) | Required under GDPR when sharing personal data with processors | Must be executed with all third-party APIs that receive user content | Founder (legal counsel required) | Before launch |

---

## 3. Company Formation and Governance Risks

| ID | Risk Description | Severity | Likelihood | Mitigation |
|---|---|---|---|---|
| CR-01 | Company is not formally incorporated before taking payment | High | Medium (if timeline is rushed) | Incorporate before accepting any subscriber payment; establish correct jurisdiction for tax and liability |
| CR-02 | Intellectual property is not clearly owned by the company | High | Low | Ensure all work product created by contractors or AI agents is explicitly assigned to the company in agreements |
| CR-03 | Qara OS governance documents conflict with legal obligations | Medium | Low | Qara OS governance is internal operating framework; legal obligations supersede governance in cases of conflict; document and escalate conflicts as they are identified |
| CR-04 | AI agent takes a material action that creates legal liability without human authorization | High | Low | AGENT_RUNTIME_POLICY.md enforcement; human approval required for all external communications and financial commitments |

---

## 4. Financial and Business Risks

| ID | Risk Description | Severity | Likelihood | Mitigation |
|---|---|---|---|---|
| FR-01 | API vendor changes pricing, terms, or service availability in a way that makes the current model unviable | High | Medium | Evaluate alternative translation API providers; maintain awareness of self-hosted model options; financial red lines in 08-financial-plan.md apply |
| FR-02 | Subscription revenue is insufficient to cover costs and the company faces closure | High | Medium | Conservative financial model in 08-financial-plan.md; wind-down process is documented; users are protected (90 days notice, data export) |
| FR-03 | An investor or acquirer attempts to impose conditions that violate Qara OS governance | High | Low | Investment constraints in 08-financial-plan.md; no obligation to accept investment; wind-down is preferable to governance violation |
| FR-04 | Tax or accounting errors create liability | Medium | Low | Engage an accountant before Year 1 revenue; use bookkeeping software; annual review |

---

## 5. Reputational Risks

| ID | Risk Description | Severity | Likelihood | Mitigation |
|---|---|---|---|---|
| RR-01 | A translation error in a sensitive context causes public harm and draws media attention | Critical | Low | Product-level risk HR-01 and HR-02 mitigations; proactive communication about Bridge's scope (not for medical or legal interpretation); rapid incident response |
| RR-02 | Bridge is perceived as surveilling or recording conversations without user knowledge | Critical | Low | Privacy-by-default architecture; plain-language privacy communication; no storage without explicit consent; this must be true AND legible to users |
| RR-03 | A competitor or critic misrepresents Bridge's privacy practices | Medium | Low | Accurate and plain-language public privacy documentation; proactive transparency about what is and is not collected |
| RR-04 | Bridge fails to deliver on its core promise for a specific language pair | High | Medium | Quality audit before launch on each pair; honest communication about supported pairs; clear path for users to report quality issues |

---

## 6. Pre-Launch Compliance Checklist

```
Legal formation:
- [ ] Company is incorporated in the appropriate jurisdiction
- [ ] Bank account is established for business operations
- [ ] Accountant or bookkeeping service is engaged

Documentation:
- [ ] Terms of Service drafted in plain language and reviewed by legal counsel
- [ ] Privacy Policy drafted in plain language and reviewed by legal counsel
- [ ] Data Processing Agreements signed with all API vendors (translation, STT)
- [ ] Age gate or explicit under-13 exclusion policy in place

App Store:
- [ ] Privacy nutrition label (Apple) is accurate and complete
- [ ] Data safety section (Google Play) is accurate and complete
- [ ] Subscription terms and auto-renewal are clearly disclosed

Regulatory:
- [ ] GDPR compliance assessment complete
- [ ] CCPA compliance assessment complete
- [ ] COPPA assessment complete (age gate or explicit exclusion)

Governance:
- [ ] Product-level pre-launch safeguards (products/bridge/07-risk-privacy-and-safety.md) 
      all checked
- [ ] Kernel Decision for build authorization issued and recorded
- [ ] Incident response process tested and documented
```

---

## 7. Ongoing Compliance Rhythm

| Review | Frequency | What Is Reviewed | Output |
|---|---|---|---|
| Privacy policy and data practices review | Annually or when practices change | Is the privacy policy still accurate? Have any new data practices been introduced? | Updated policy if needed; Kernel Decision if scope changes |
| API vendor terms review | Annually or at renewal | Have any vendor terms changed that affect user privacy or Bridge's compliance obligations? | Updated DPA if needed; vendor change evaluation if terms are unacceptable |
| Regulatory environment monitoring | Quarterly | Are there new or proposed regulations in launch markets that affect Bridge? | Brief monitoring record; legal escalation if significant |
| Incident response readiness | Annually | Is the incident response process in 07-risk-privacy-and-safety.md still accurate? Has the team changed? | Updated process document |

---

## Checklist

- [x] All legal obligations are identified with status and owner
- [x] Company formation risks are documented
- [x] Financial and reputational risks are identified
- [x] Pre-launch compliance checklist is complete
- [x] Ongoing compliance rhythm is defined
- [x] This document is consistent with 01–08 and with products/bridge/07-risk-privacy-and-safety.md
