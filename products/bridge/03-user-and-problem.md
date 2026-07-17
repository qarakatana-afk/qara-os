# 03 — User and Problem

**Product name:** Bridge  
**Date:** 2026-07-17  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review  
**Status:** Draft — AWAITING FOUNDER REVIEW AND APPROVAL

---

## Purpose of This Document

This document defines who Bridge is built for and the specific problems it solves in their lives. It must be precise enough to drive design decisions and reject scope that does not serve these users.

---

## 1. Primary Users by Companion Module

> [ASSUMPTION] The user profiles below are informed by the product's companion capabilities as described in 01-product-brief.md. Precise user research has not yet been conducted. These are working hypotheses to be validated before build authorization.

### 1.1 Bridge Translation — Primary User

```
Who they are: An adult living outside their country of origin, or the adult child of 
immigrants, who has regular emotional relationships with family members who speak a 
different primary language. They own a smartphone and use it frequently.

What they are trying to do: Maintain a real relationship — not just functional check-ins — 
with a parent, grandparent, sibling, or child who does not share their dominant language.

What is inadequate about what they currently use: Translation tools translate isolated 
sentences without relationship context. They create awkward pauses. They have no memory 
of who these people are to each other.
```

### 1.2 Bridge Appointment — Primary User

```
Who they are: An adult who needs to attend medical, legal, administrative, or other 
formal appointments where language or system complexity creates a significant barrier 
to participation and understanding.

What they are trying to do: Navigate the appointment with confidence — understand 
what is being said, communicate their own needs clearly, leave with the information 
they came for.

What is inadequate about what they currently use: Professional interpreters are 
expensive and not always available for every appointment type. Bilingual family 
members are not available, or attending with family creates privacy or dependency 
concerns. Existing translation apps require active management during sensitive 
in-person exchanges.
```

### 1.3 Bridge Hearing — Primary User

```
Who they are: A person who is Deaf or has significant hearing loss. They move through 
environments — conversations, workplaces, public settings — where the default mode 
of communication creates barriers.

What they are trying to do: Participate fully in conversations and situations 
without the communication barrier creating a secondary experience of exclusion.

What is inadequate about what they currently use: Real-time captioning solutions 
are often inaccessible, inaccurate, or require specific technical setup. Sign 
language interpretation is not always available. Existing apps were not designed 
for the specific contexts and relationships that matter most to this user.
```

### 1.4 Bridge Independence — Primary User

```
Who they are: An older adult (70+) who faces barriers to daily communication 
or task navigation — whether caused by language shifts in their community, 
technological complexity, or sensory change.

What they are trying to do: Navigate daily life with confidence and without 
requiring a family member to manage communications, appointments, or information 
on their behalf.

What is inadequate about what they currently use: Most technology is designed 
for younger users with high technical literacy. Complexity and cognitive load 
create barriers. The older adult often avoids tasks rather than struggling with 
tools not built for them.
```

### 1.5 Bridge Legacy — Primary User

```
Who they are: A member of a multigenerational family where the older generation 
holds stories, knowledge, and history in a language that younger family members 
do not fully share.

What they are trying to do: Capture and preserve family stories before they are 
lost — either because the elder passes away or because the language gap makes the 
story inaccessible to younger generations.

What is inadequate about what they currently use: There are no tools specifically 
designed to capture oral family history across a language gap with dignity and ease. 
Recording a story in a language a grandchild does not speak does not solve the 
preservation problem.
```

---

## 2. Secondary Users

```
For Bridge Translation: The person on the other side of the conversation — the family 
member in another country or household who also needs to communicate across the language 
gap. They may be older and less technically comfortable. Bridge must work for them with 
minimal setup.

For Bridge Appointment: The appointment provider (doctor, lawyer, caseworker) who needs 
the communication to be accurate for professional or safety reasons. Bridge must not 
introduce barriers or errors that create professional or legal risk.

For Bridge Hearing: The hearing person in a conversation who wants to communicate with 
the Deaf or hard-of-hearing user naturally, without specialized training.

For Bridge Independence and Bridge Legacy: Family members who benefit when their older 
relative can communicate independently, and who are the intended beneficiaries of 
preserved family stories.
```

---

## 3. Who Bridge Is NOT For

```
- Not for: Businesses and professional translators — Bridge is built for personal 
  relationships and daily life navigation, not professional or commercial translation.

- Not for: People who want a general-purpose AI assistant — Bridge is a companion for 
  specific human situations, not a tool for general tasks.

- Not for: Anonymous or casual interactions with strangers — Bridge holds relationship 
  memory and context. It is designed for people who have ongoing relationships or 
  recurring situations, not one-time encounters.

- Not for: Enterprise workflows — though institutional applications may exist 
  (e.g., healthcare settings), they require a separate Kernel Decision and must 
  not compromise the personal product identity.
```

---

## 4. The Problem — Cross-Cutting

### 4.1 Problem Statement

```
There are people who want to connect, communicate, and navigate the world around them — 
and cannot do so fully because something is in the way. The barrier may be language, 
hearing, age, or the complexity of systems. What is common is this: the tools available 
treat the barrier as a data problem. They convert, transcribe, or translate words without 
understanding that the point of communication is the relationship, the appointment, 
the story, or the moment of independence.

Bridge removes the barrier. It does not solve language or hearing or age. 
It removes the wall between a person and the connection or understanding they are 
trying to reach.
```

### 4.2 Evidence

```
[FACT] Machine translation has achieved near-human accuracy on many language pairs for 
literal meaning, yet bilingual family intermediaries remain widespread in immigrant 
communities — suggesting that literal translation does not solve the relationship 
communication problem.

[FACT] Communication barriers in healthcare settings are documented contributors 
to medical errors and patient dissatisfaction.

[INFERENCE] High-quality technical solutions to communication barriers exist but have 
not been designed around the human context in which barriers occur. A product built 
for the human context — the relationship, the appointment, the family story — will be 
experienced differently from a general-purpose tool.

[ASSUMPTION] People who experience communication barriers in personal and daily-life 
contexts feel this as an emotional and dignity issue, not merely a practical inconvenience. 
This assumption is the highest-risk element of Bridge's founding belief; it requires 
validation with real users before build authorization.

[UNCERTAIN] The size and willingness to pay of each user population described above. 
Market size estimates require dedicated research.
```

---

## 5. Root Cause

```
Root cause: Communication tools are built to move information between endpoints. 
They optimize for transmission accuracy in isolation — they have no model of the 
human situation in which the communication is occurring, who is communicating, 
what has been said before, or what this exchange means to the people in it. 
The result is technically correct output that feels cold, fragmented, and foreign 
to the human experience of someone trying to connect with another person.
```

---

## Checklist

- [x] Each primary user is described with specific context, not abstract persona
- [x] Problem is stated from the user's perspective
- [x] Evidence is labeled (fact, inference, assumption, uncertain)
- [x] Root cause identified
- [x] Non-users are explicitly excluded
- [x] Status clearly marked as awaiting human approval
