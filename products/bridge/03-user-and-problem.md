# 03 — User and Problem

**Product name:** Bridge  
**Date:** 2026-07-17  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review

---

## Purpose of This Document

This document defines who Bridge is built for and the specific problem it solves in their life. It must be precise enough to drive design decisions and reject scope that does not serve this user.

---

## 1. Primary User

```
Who they are: An adult (25–60) living outside their country of origin, or the adult child of 
immigrants, who has regular emotional relationships with family members who speak a different 
primary language. They are fluent enough in their new language to navigate daily life but not 
fluent enough in their family's language — or vice versa — to have easy, deep conversations. 
They own a smartphone and use it frequently.

What they are trying to do: Maintain a real relationship — not just functional check-ins — 
with a parent, grandparent, sibling, or child who does not share their dominant language. 
They want to understand and be understood: to ask about health, share feelings, hear stories, 
offer comfort.

What they currently use to address this: Google Translate (copy-paste or camera), phone-based 
voice translation features, bilingual family members as informal interpreters, simplified English 
or simplified native language ("just the important parts"), or avoidance (calling less often 
because the friction is too high).

What is inadequate about what they currently use: Current tools translate isolated sentences 
without relationship context. They create awkward pauses and interrupt the flow of conversation. 
They have no memory of who these people are to each other or what has been discussed before. 
They cannot handle the emotional texture of a real conversation — irony, tenderness, hesitation, 
things left unsaid. And they offer no way to preserve what is said.
```

---

## 2. Secondary Users

```
Secondary user: The person on the other side of the conversation — the family member in another 
country or household who also needs to communicate across the language gap. They may be older 
and less technically comfortable.

Their relationship to the primary user: They are the other participant in the conversations 
Bridge enables. Bridge must be usable for them with minimal setup and no requirement to 
understand the technology.

Needs that must not be met at the expense of the primary user: The secondary user's comfort 
with the interface must not create surveillance or recording of the primary user without consent. 
The secondary user must not be able to access the primary user's stored preferences, memories, 
or relationship context without explicit permission.
```

---

## 3. Who This Product Is NOT For

```
- Not for: Businesses and professional translators — Bridge is built for personal relationships, 
  not professional or commercial translation. Adding enterprise features would dilute the 
  product's identity and introduce incentive conflicts.

- Not for: Language learners who want to improve fluency — Bridge is not a study tool. 
  Its goal is understanding right now, not building capability over time. A language learning 
  product would optimize for productive struggle; Bridge optimizes for frictionless connection.

- Not for: People who want a general-purpose AI assistant — Bridge is a companion for 
  specific relationships, not a tool for tasks. Adding assistant features (reminders, 
  calendar, general Q&A) would undermine the clarity of what Bridge is.

- Not for: Anonymous or casual interactions with strangers — Bridge holds relationship memory 
  and context. It is designed for people who have ongoing relationships, not one-time encounters.
```

---

## 4. The Problem — Specific and Observable

### 4.1 Problem Statement

```
There are millions of people who love someone they cannot fully speak to. The language barrier 
is not a technical problem for them — it is an emotional one. They can get a word translated. 
What they cannot do is have a real conversation: one that carries feeling, history, and 
continuity. The tools available today treat language as a data-transfer problem. They do not 
understand that the point of the conversation is the relationship.
```

### 4.2 Evidence

```
[FACT] Machine translation has achieved near-human accuracy on many language pairs for 
literal meaning (source: academic benchmarks on BLEU scores, WMT competitions).

[FACT] Immigrant populations are among the fastest-growing demographic groups in many 
Western countries, with tens of millions of people maintaining cross-border family relationships 
(source: UN International Migration Report — general demographic trends; specific numbers 
subject to verification).

[INFERENCE] High-quality literal translation exists but has not solved the communication gap 
for personal relationships, as evidenced by the continued widespread use of bilingual family 
intermediaries ("can you call grandma for me?"). If existing tools were sufficient, this 
workaround would not persist.

[ASSUMPTION] People who experience language barriers in personal relationships feel this as 
an emotional loss, not merely a practical inconvenience. This assumption is central to Bridge's 
founding belief; it requires validation with real users before build authorization.

[UNCERTAIN] The precise size of the population who would pay for a product specifically 
designed to solve this problem — as opposed to using free translation tools. Market size 
estimates require dedicated research.
```

### 4.3 Frequency and Severity

```
How often does this problem occur: At every conversation between the primary user and their 
non-shared-language family member — typically weekly for close family, daily for households 
sharing a home.

Severity when it occurs: Significant friction for routine check-ins; prevents goal entirely 
for deep emotional conversations (e.g., discussing a health diagnosis, sharing grief, 
resolving a conflict, capturing a life story before someone passes away).

Whether the person is currently aware they have this problem: Yes — they describe it as 
"the language thing" — but they may not believe a product can solve it. Skepticism about 
technology's ability to address this emotional dimension is a real barrier.
```

---

## 5. Root Cause

```
Root cause: Translation tools are built to convert text, not to support relationships. 
They optimize for linguistic accuracy in isolation — they have no model of who is speaking, 
what has been said before, or what this conversation means to the people in it. The result is 
technically correct output that feels cold, fragmented, and foreign to the emotional experience 
of a real conversation between people who love each other.
```

---

## 6. Context of Use

```
Where: On a mobile device, usually at home, often in a kitchen or living room — the same 
physical space where phone calls with family happen. Occasionally on a commute. Rarely at work.

When: Evenings and weekends when people call family. During family visits. During significant 
life events (illness, celebration, grief) when the need to communicate is most acute and the 
cost of failure is highest.

Emotional state: Often a mix of warmth and mild anxiety — wanting the call to go well, 
aware of the limitation, hoping the technology won't get in the way. Sometimes distressed 
(if the context is difficult news). Occasionally joyful (celebrations, births).

Constraints: Must work on a standard mobile phone. Must work across different operating systems 
(the family member may have a different device). Must work at varying connectivity levels — 
international calls may have latency. Must be simple enough for the older family member on the 
other end who may not be technically comfortable.
```

---

## 7. Success from the User's Perspective

```
"I would know this is working if: I finish a call with my mom and I feel like we actually 
talked — like I told her something real and she understood it, and she told me something 
and I understood her. Not just 'how are you, fine.' Something that matters. And I didn't 
spend the whole call fiddling with a translation app."
```

---

## Checklist

- [x] Primary user is described with specific context, not abstract persona
- [x] Problem is stated from the user's perspective, not the solution's
- [x] Evidence is labeled (fact, inference, assumption, uncertain)
- [x] Root cause identified
- [x] Context of use is specific enough to inform design
- [x] Non-users are explicitly excluded
- [x] This document is consistent with 01 and 02
