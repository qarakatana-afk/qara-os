# 06 — Technical Architecture

**Product name:** <!-- From 01-product-brief.md -->  
**Date:** <!-- YYYY-MM-DD -->  
**Author:** <!-- Name or agent identifier -->

---

## Purpose of This Document

This document defines how the product is built at a level sufficient for autonomous implementation. Architecture decisions must be justified by the product's requirements and constraints — not by novelty or technical preference.

---

## 1. Architecture Principles

List the principles that govern technical decisions for this product. Derived from functional requirements, experience specification, and Qara OS engineering constraints.

```
1. [Principle: e.g., Prefer simple and maintainable over clever and optimal]
2. [Principle: e.g., Collect only data required for the stated human outcome]
3. [Principle: e.g., Human-readable records over proprietary formats]
4. [Principle: e.g., Fail safely — degraded experience over data risk]
```

---

## 2. System Overview

Describe the system at the highest level. What are the major components and how do they relate?

```
[Describe in 3–6 sentences or a simple diagram in text form]

Components:
- [Component 1]: [Role]
- [Component 2]: [Role]
- [Component 3]: [Role]
```

---

## 3. Technology Choices

List every major technology decision and justify each one.

| Layer | Technology | Justification | Alternative Considered |
|---|---|---|---|
| Frontend | [e.g., React Native] | [Why this fits the requirements] | [What else was considered and why not] |
| Backend | [e.g., Node.js / Python] | [Why this fits] | [...] |
| Database | [e.g., PostgreSQL] | [Why this fits] | [...] |
| Auth | [e.g., Supabase Auth] | [Why this fits] | [...] |
| Hosting | [e.g., Fly.io / Vercel] | [Why this fits] | [...] |

---

## 4. Data Model (Key Entities)

List the primary data entities and their essential fields. Do not over-specify — include only what is needed for the Must Have requirements.

```
Entity: [Name]
Fields:
  - [field]: [type] — [purpose]
  - [field]: [type] — [purpose]
Privacy classification: [Public / Private / Sensitive]
Retention policy: [How long stored, when deleted]
```

---

## 5. API / Interface Contract

List the primary interfaces this product exposes or consumes.

| Endpoint / Interface | Method | Purpose | Auth Required |
|---|---|---|---|
| [e.g., /api/user/profile] | GET | [Fetch user profile] | Yes |
| [e.g., /api/messages] | POST | [Send a message] | Yes |

---

## 6. Privacy and Data Minimization

Describe how the architecture minimizes data collection and protects user privacy.

```
Data collected: [List only what is strictly necessary]
Data not collected: [Explicitly list what you are not collecting, especially sensitive types]
Data storage location: [Where and jurisdiction]
Encryption at rest: [Yes / No / Specify]
Encryption in transit: [Yes / No / Specify]
Third-party data sharing: [None / List what and why]
```

---

## 7. Security Considerations

List the primary security risks and mitigations.

| Risk | Mitigation |
|---|---|
| [e.g., Unauthorized data access] | [e.g., Row-level security, auth required on all endpoints] |
| [e.g., Injection attacks] | [e.g., Parameterized queries, input validation] |

---

## 8. Scalability and Constraints

What are the realistic usage expectations, and how does the architecture handle them?

```
Expected initial load: [Users / requests / data volume]
Growth assumption: [Conservative / Moderate / Aggressive — and why]
Known bottlenecks: [Identify and address or defer]
Cost constraint: [Monthly budget target if applicable]
```

---

## 9. Open Decisions

List any architectural decisions that have not yet been made and require resolution before implementation.

| Decision | Options | Blocking? | Owner |
|---|---|---|---|
| [Decision needed] | [Option A / Option B] | Yes / No | [Person or agent] |

---

## Checklist

- [ ] Every technology choice is justified by requirements
- [ ] Data model includes privacy classification and retention policy
- [ ] Privacy and data minimization are explicitly addressed
- [ ] Security risks have mitigations
- [ ] Open decisions are documented with owners
- [ ] This document is consistent with 01–05
