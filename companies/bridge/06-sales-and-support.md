# 06 — Sales and Support

**Company name:** Bridge  
**Date:** 2026-07-17  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review

---

## Purpose of This Document

This document defines how Bridge converts interested people into customers and then supports them. Sales and support must reflect Qara OS values — people must feel respected, not pressured.

---

## 1. Sales Model

```
Sales model: Self-serve primarily; Founder-led for community partnerships

Why this model: Bridge's target user is an individual making a personal decision about 
a personal communication tool. High-touch sales would feel invasive and inconsistent 
with Bridge's companion identity. The product must sell itself through the first 
conversation experience. Community partnerships (with organizations and programs) 
require direct relationship-building — these are handled by the Founder personally.

Human involvement required: On-request only for individual customers; direct for 
partnership conversations.
```

---

## 2. Sales Process

| Step | Description | Human or Automated | Time Expected | Success Indicator |
|---|---|---|---|---|
| Discovery | Person hears about Bridge from a contact or finds it via search | Organic | N/A | Person arrives at Bridge website or App Store page |
| First impression | Person reads what Bridge does; recognizes their situation | Automated (website/listing) | < 2 minutes | Person understands what Bridge is and what to do next |
| Free trial | Person creates an account and has their first conversation | Automated | < 5 minutes to first conversation | Person completes a conversation with their connection during the trial |
| Decision point | Person experiences the first conversation; decides whether to subscribe | Self-serve | Up to 14 days | Person upgrades or does not; no pressure either way |
| Subscription | Person selects Personal or Family tier; provides payment | Automated | < 2 minutes | Subscription active; welcome message sent |

---

## 3. Conversion Constraints (Qara OS)

```
Must not use:
- High-pressure closing techniques or countdown timers
- Artificial urgency ("Your trial expires in 3 hours — subscribe now")
- Withholding information that is material to the decision (e.g., what the free tier 
  actually includes vs. what requires payment — must be stated clearly before trial)
- Exploiting anxiety or loneliness as sales levers 
  ("Don't let language keep you from your family" is a manipulation, not a value proposition)
- Unclear auto-renewal terms — subscription terms and renewal dates must be visible 
  before purchase and in the account settings at all times
- Paywalls that appear mid-conversation — the free tier limits apply before a conversation 
  begins, not partway through
```

---

## 4. Customer Onboarding

```
First 24 hours: User receives a brief welcome message (in-app or email depending on 
preference) that confirms their account is active and reminds them of the one thing 
to do: have a conversation with someone they care about. No features tour. No tutorial. 
No tasks to complete before the value is available.

First 7 days: Bridge monitors whether the user has completed a conversation with a 
connection. If not (and only if they have opted in to in-app nudges), one gentle prompt: 
"Ready to try a conversation with [the name they gave their connection]?" Nothing more.

First 30 days: A user who has completed at least 3 conversations is considered 
successfully onboarded. The measure of onboarding success is conversations completed, 
not settings configured.

Failure signal: A user who creates an account, creates a connection, but never completes 
a conversation within 14 days. This is the most likely onboarding failure mode — the 
other person couldn't figure out how to respond.

Failure response: One outreach (email or in-app, user preference) offering to help: 
"Did you have trouble getting [connection name] set up? Here's how to make it simple 
for them." If no response, no further outreach.
```

---

## 5. Support Model

```
Primary support channel: In-app help (FAQ and guided troubleshooting for common issues); 
email for anything not resolved by in-app help

Response time commitment: < 48 hours for all email support tickets during Year 1; 
Founder-led support

Escalation path: For simple questions, in-app help resolves; for account, billing, 
or technical issues, email ticket to Founder; for safety or distress signals, 
immediate human response required (see 07-risk-privacy-and-safety.md incident response)

Support availability: Async; best effort on weekdays; Year 1 is Founder-only support
```

---

## 6. AI Agent Use in Support

```
What AI agents may do: 
  - Draft FAQ responses and help documentation for human review
  - Categorize support tickets by type and severity
  - Generate suggested responses to common issues for Founder review and approval 
    before sending to users

What AI agents may NOT do:
  - Send any communication directly to a customer without human review
  - Make promises about billing, refunds, or account changes
  - Handle any ticket involving a safety concern, distress signal, or complaint 
    about the product causing harm — these go directly to the Founder

Disclosure requirement: If an AI-drafted response is sent to a user, the user is 
not required to be told it was AI-drafted (since a human reviewed and approved it); 
however, if a user asks directly whether they are talking to a person or an AI, 
they must receive an honest answer.

Human handoff trigger: Any expression of distress, any safety concern, any complaint 
about the product harming a relationship, any explicit request to speak with a person.
```

---

## 7. Feedback Loop

```
How support issues are categorized: By type (translation quality, technical issue, 
billing, account access, other) and severity (blocking use / degraded experience / 
question or confusion)

How recurring issues reach the product team: Weekly review by Founder of support 
ticket categories; any issue appearing 3+ times in a month is escalated to the 
product roadmap for investigation

How support quality is measured: Opt-in satisfaction prompt after ticket resolution 
("Did this help?") — reviewed monthly; no formal CSAT score required in Year 1
```

---

## 8. Cancellation and Offboarding

```
Cancellation process: 
  - One-click cancellation in account settings — no confirmation dialogs that 
    require explaining why, no guilt-trip screens ("Are you sure? You'll lose 
    all your conversations"), no multi-step flow
  - Access continues until the end of the paid period; no proration refunds 
    for monthly plans; annual plans may offer pro-rated refund within 30 days 
    of purchase (evaluated case by case)
  - After cancellation, account and data are retained for 90 days in case of 
    re-subscription; then deleted unless the user has opted in to permanent storage

Data after cancellation: 
  - If storage was consented: data retained for 90 days post-cancellation, 
    then deleted; user can request immediate deletion at any time
  - If no storage consent: no conversation content was retained; account 
    metadata deleted within 90 days

Re-engagement (if any): One email at the 90-day deletion threshold informing 
the user their data will be deleted and offering them the option to export first. 
No promotional re-engagement emails. No "we miss you" campaigns.
```

---

## Checklist

- [x] Sales model is justified by customer type and offer
- [x] Sales conversion constraints are explicit
- [x] Onboarding has a failure signal and response
- [x] AI agent use in support is bounded and includes disclosure
- [x] Cancellation process is simple and respects user agency
- [x] This document is consistent with 01–05
