# 07 — Risk, Privacy, and Safety

**Product name:** <!-- From 01-product-brief.md -->  
**Date:** <!-- YYYY-MM-DD -->  
**Author:** <!-- Name or agent identifier -->

---

## Purpose of This Document

This document identifies the risks that could cause this product to harm users, erode trust, violate privacy, or fail against its human outcome. Every risk must have a stated mitigation. High-severity risks require a Kernel Decision and human approval before the affected feature may be built.

---

## 1. Risk Classification

| Severity | Definition |
|---|---|
| Critical | Could cause physical, psychological, or financial harm to a user |
| High | Could significantly erode user trust, privacy, or autonomous agency |
| Medium | Could create unnecessary friction or meaningful dissatisfaction |
| Low | Manageable inconvenience with low impact on human outcome |

---

## 2. Human Harm Risks

Risks related to the product causing direct harm to people.

| ID | Risk Description | Severity | Likelihood | Mitigation | Kernel Decision Required? |
|---|---|---|---|---|---|
| HR-01 | [e.g., Vulnerable user receives distressing content] | [Critical] | [Low / Med / High] | [Describe] | Yes |
| HR-02 | [e.g., Product creates unhealthy dependency] | [High] | [...] | [Describe] | Yes |

---

## 3. Privacy Risks

Risks related to personal data, surveillance, or exposure.

| ID | Risk Description | Severity | Likelihood | Mitigation |
|---|---|---|---|---|
| PR-01 | [e.g., User location data inadvertently collected] | [High] | [Low] | [Describe] |
| PR-02 | [e.g., Third-party API receives PII] | [Medium] | [Medium] | [Describe] |

---

## 4. Trust Risks

Risks related to user perception, transparency, and relationship integrity.

| ID | Risk Description | Severity | Likelihood | Mitigation |
|---|---|---|---|---|
| TR-01 | [e.g., AI responses perceived as human] | [High] | [Medium] | [Describe] |
| TR-02 | [e.g., Algorithm changes without user notice] | [Medium] | [Low] | [Describe] |

---

## 5. Operational Risks

Risks related to system failure, third-party dependencies, or service degradation.

| ID | Risk Description | Severity | Likelihood | Mitigation |
|---|---|---|---|---|
| OR-01 | [e.g., Primary dependency outage] | [High] | [Low] | [Describe] |
| OR-02 | [e.g., Unexpected scaling cost spike] | [Medium] | [Medium] | [Describe] |

---

## 6. Safeguards Required Before Launch

List specific safeguards that must be in place before this product is released to users.

```
- [ ] [Safeguard 1: e.g., Content moderation policy documented and implemented]
- [ ] [Safeguard 2: e.g., Crisis/emergency response path tested and live]
- [ ] [Safeguard 3: e.g., Privacy policy published and linked at point of data collection]
- [ ] [Safeguard 4: e.g., Data deletion path tested end-to-end]
```

---

## 7. Regulatory and Compliance Considerations

List relevant regulatory requirements and their status.

| Regulation | Applicability | Status | Owner |
|---|---|---|---|
| [e.g., GDPR] | [If users in EU] | [Assessed / In Progress / Compliant] | [Person or agent] |
| [e.g., COPPA] | [If any under-13 users possible] | [...] | [...] |
| [e.g., HIPAA] | [If health-related data] | [...] | [...] |

---

## 8. Prohibited Design Patterns (Safety)

Explicitly state design patterns that must not be used in this product due to safety or harm risk.

```
- Must not use: [Pattern] — Harm risk: [Description]
- Must not use: [Pattern] — Harm risk: [Description]
```

---

## 9. Incident Response

What is the response process if a user is harmed or a safety issue is discovered?

```
Step 1: [Immediate action — who does what in first hour]
Step 2: [Triage — classify severity]
Step 3: [Communication to affected users — within what timeframe]
Step 4: [Post-incident review — when and who]
Escalation contact: [Who is responsible for human safety decisions]
```

---

## Checklist

- [ ] All Critical and High risks have explicit mitigations
- [ ] Critical and High human harm risks have Kernel Decision references
- [ ] Pre-launch safeguards are listed and owned
- [ ] Regulatory requirements are identified
- [ ] Incident response process is defined
- [ ] This document is consistent with 01–06
