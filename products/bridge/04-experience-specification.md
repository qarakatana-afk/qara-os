# 04 — Experience Specification

**Product name:** Bridge  
**Date:** 2026-07-17  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review  
**Status:** Draft — AWAITING FOUNDER REVIEW AND APPROVAL

---

## Purpose of This Document

This document defines the intended human experience of using Bridge. It governs all design decisions. A feature that creates the wrong experience is wrong regardless of technical correctness.

---

## 1. Experience Principles

```
1. Bridge is invisible when not needed, and fully present when invited.
   Test: A user should be able to complete their goal without consciously thinking 
   about Bridge more than once.

2. Bridge remembers what matters and forgets what does not.
   Test: Bridge knows the people, contexts, and preferences that matter to this user. 
   Bridge does not know or surface how many times the app has been opened.

3. Bridge never makes anyone feel that their barrier is their failure.
   Test: No part of the interface creates embarrassment, highlights difficulty, or 
   makes the person feel behind. Errors are handled gracefully, never highlighted.

4. Bridge never competes for attention.
   Test: There are no notifications for non-critical events. There are no streaks, 
   badges, or prompts to "keep going." The app is silent unless spoken to.

5. Bridge never overwhelms.
   Test: Every screen presents one clear action. A first-time user can complete 
   the core flow in under two minutes without reading any instructions.

6. Bridge builds confidence, not dependence.
   Test: After using Bridge, the person feels more capable — not more reliant on 
   a tool to function.
```

---

## 2. Entry Experience

```
What the person brings to the product (their state, goal, emotion):
They want to connect, communicate, or navigate something. They have their barrier in mind. 
They may be slightly nervous that the technology will be complicated or will make the 
situation worse. They are bringing hope — that this time, it will be easier.

What the product does in response:
Bridge asks one clear question relevant to what the person is trying to do. 
It does not show features, options, or settings. It does not explain AI. 
It does not require a profile before beginning.

What the person can do within the first 2 minutes:
Begin the specific thing they came to do. That is the only thing Bridge asks them to do.

What the product does NOT do on first encounter:
- Does not require a profile before letting the user begin
- Does not explain how Bridge works — it simply works
- Does not show a features tour or onboarding slideshow
- Does not request notification permissions before the user has experienced value
- Does not ask for more information than the minimum required for the first action
```

---

## 3. Core Flow (Bridge Translation)

```
Step 1: User opens Bridge and selects or creates a connection (a specific person).

Step 2: User speaks or types in their language. Bridge listens without interrupting.

Step 3: Bridge translates and delivers the message — in the other person's language, 
        in a form that preserves the tone and meaning, not just the words.

Step 4: The other person responds in their language. Bridge delivers it back translated.

Step 5: The conversation continues naturally. Neither person needs to manage the 
        technology between turns.

Outcome: Both people have had a real exchange. Something was said that mattered. 
The technology was present but not central.
```

---

## 4. Key Moments

```
Moment 1: First successful communication —
What is happening: The user's message is delivered and understood as intended. 
This is the trust-building moment. If it feels right, the user believes Bridge 
can do what it promises.
Why it matters: First impressions carry strong emotional weight. The goal is 
that the person thinks "that worked" — not "that was close enough."

Moment 2: The other person responding —
What is happening: The other participant receives the communication and is 
able to respond without friction.
Why it matters: If the secondary user (who may be older or less technical) 
finds Bridge confusing, the primary user carries that burden and may stop using it.

Moment 3: A sensitive or high-stakes moment —
What is happening: The exchange moves into territory that carries emotional weight 
or real consequence — a health update, a legal question, a declaration of feeling, 
a family story.
Why it matters: This is when the stakes of quality are highest. Bridge must 
handle sensitive communication with care — preserving tone and meaning, not 
just words.
```

---

## 5. Friction Map

| Friction Point | Type | Justified? | Resolution |
|---|---|---|---|
| Account creation before first use | Unnecessary | No | Allow guest or minimal entry; defer full account setup until the user has experienced value |
| Initial context setup (language, connection type) | Necessary | Yes | Ask once, simply, in context; remember forever |
| Consent to record or store content | Necessary | Yes | Required for memory features; must be clear, simple, and freely given |
| Latency during processing | Necessary | Yes (technical) | Minimize with design; graceful handling of slow connections |
| Onboarding the secondary (less technical) user | Necessary | Yes | A simple, single entry point; no setup required for basic participation |
| Notification permission requests | Unnecessary | No | Never prompt; let users opt in if they want to be notified |

---

## 6. Emotional Tone

```
Intended emotional state after use: Calm. Connected. The sense that something real 
was said and heard. Not stimulated, not compelled to return.

Emotional states this product must not create:
- Anxious (about whether the communication worked, about whether they said the right thing)
- Inadequate (feeling that their barrier is their failure)
- Compelled to return (manufactured by the product rather than by genuine desire to connect)
- Distracted (by notifications, suggested features, or anything other than the task)
```

---

## 7. Attention Contract

```
How much of the user's time and attention does this product require:
The minimum the task requires — only the time of the conversation, appointment, 
or story capture itself.

What this product does to avoid demanding more attention than necessary:
- No push notifications except for incoming messages from a known contact (opt-in only)
- No home screen widgets, badges, or persistent status indicators
- No "while you're here" suggestions or upsells within the active flow
- The app closes cleanly — it does not leave a reason to return other than the person's need

Notification policy: Opt-in only. Maximum one notification type: "You have a message 
from [Name]." No promotional notifications. No re-engagement notifications.
```

---

## 8. Experience Anti-Patterns

```
- No: dark patterns (hidden costs, false free tiers that capture data)
- No: manufactured urgency ("Start your free trial before it's gone")
- No: social comparison (leaderboards, usage statistics shown to the user)
- No: infinite scroll or passive consumption features
- No: guilt-trip offboarding ("Are you sure? Your data will be deleted")
- No: re-engagement bait ("You haven't called your family in 3 days")
- No: quality scores shown in ways that create anxiety about the communication
- No: AI character or persona that makes Bridge feel like a person the user 
  is talking to, rather than a tool that helps two real people communicate
```

---

## Checklist

- [x] Experience principles are testable
- [x] Core flow ends in a human outcome, not a feature completion
- [x] Friction is classified and unnecessary friction is eliminated
- [x] Attention contract is explicit
- [x] Anti-patterns are listed
- [x] Status clearly marked as awaiting human approval
