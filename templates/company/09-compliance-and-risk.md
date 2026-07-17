# 09 — Compliance and Risk

**Company name:** <!-- From 01-company-thesis.md -->  
**Date:** <!-- YYYY-MM-DD -->  
**Author:** <!-- Name or agent identifier -->

---

## Purpose of This Document

This document identifies the regulatory, legal, and operational risks this company must manage. It is not a substitute for legal counsel. It is a map of what the company must understand and address before operating.

---

## 1. Regulatory Requirements

List every regulation that applies to this company's operations, by jurisdiction.

| Regulation | Jurisdiction | Applicability | Status | Owner |
|---|---|---|---|---|
| [e.g., GDPR] | EU | [Applies if any EU users] | [Assessed / In Progress / Compliant] | [Person] |
| [e.g., CCPA] | California, USA | [Applies if California users] | [...] | [...] |
| [e.g., HIPAA] | USA | [Applies if any health data] | [...] | [...] |
| [e.g., COPPA] | USA | [Applies if under-13 users possible] | [...] | [...] |
| [e.g., Local business registration] | [Jurisdiction] | [Required before operating] | [...] | [...] |

---

## 2. Legal Structure

```
Current legal entity: [Incorporated / LLC / Sole proprietor / Not yet formed]
Jurisdiction of incorporation: [Country / State]
Required before launch: [e.g., Incorporation, terms of service, privacy policy]
Legal counsel engaged: [Yes / No / In progress]
```

---

## 3. Required Legal Documents

| Document | Status | Date Required By | Owner |
|---|---|---|---|
| Terms of Service | [Draft / Review / Published] | [Before user signup] | [Person] |
| Privacy Policy | [Draft / Review / Published] | [Before data collection] | [Person] |
| Cookie Policy | [Draft / Review / Published / N/A] | [Before web launch if applicable] | [Person] |
| Data Processing Agreement | [N/A / Required / In progress] | [Before enterprise customers] | [Person] |
| Refund / Cancellation Policy | [Draft / Published] | [Before payment accepted] | [Person] |

---

## 4. Data Governance

```
Personal data collected: [List all categories — see 06-technical-architecture.md]
Data storage jurisdiction: [Country — compliance implications]
Data retention policy: [How long, what triggers deletion]
Data breach response plan: [Who is notified, within what timeframe, by what process]
User data rights fulfillment: [How users exercise access, correction, deletion rights]
```

---

## 5. Intellectual Property

```
Original IP created: [Product, content, brand assets — what is ours]
IP ownership documented: [Yes / No — what remains to be resolved]
Third-party IP used: [Licenses, open-source libraries — confirm compliance]
Brand protection: [Trademark filed / Pending / Not yet — jurisdiction]
```

---

## 6. Company-Level Risk Register

| ID | Risk | Severity | Likelihood | Mitigation | Owner | Review Date |
|---|---|---|---|---|---|---|
| CR-01 | [e.g., Key person dependency — founder only] | [High] | [High] | [Document processes, bus factor plan] | [Founder] | [Date] |
| CR-02 | [e.g., Third-party platform dependency] | [High] | [Medium] | [Describe] | [Engineering] | [Date] |
| CR-03 | [e.g., Regulatory change in key market] | [Medium] | [Low] | [Monitor, legal counsel] | [Founder] | [Date] |

---

## 7. Insurance and Liability

```
Professional liability insurance: [Required / Not yet assessed / In place]
Product liability: [Required / Not yet assessed / In place]
Cyber / data breach insurance: [Required / Not yet assessed / In place]
```

---

## 8. Compliance Review Cadence

How will the company stay current on compliance requirements?

```
Regulatory review frequency: [Quarterly]
Trigger for immediate review: [Any new jurisdiction, new data type, new offer category, or applicable regulation change]
Legal counsel review trigger: [Any customer complaint alleging legal violation, any data breach, any regulatory inquiry]
```

---

## 9. Qara OS Compliance

This company must remain compliant with Qara OS governance in addition to external regulations.

```
- [ ] All material decisions are recorded in records/kernel-decisions/
- [ ] AI agents operating for this company are operating under AGENT_RUNTIME_POLICY.md
- [ ] No product or company scope changes have occurred without a recorded Kernel Decision
- [ ] Human outcome reviews are conducted at least monthly (see 07-operating-model.md)
- [ ] Governance rhythm is active (see 07-operating-model.md)
```

---

## Checklist

- [ ] All applicable regulations are identified and assessed
- [ ] Required legal documents are listed with owners and dates
- [ ] Data governance plan is consistent with 06 (technical architecture)
- [ ] Company risk register is populated and owned
- [ ] Qara OS compliance checklist is complete
- [ ] This document is consistent with 01–08
