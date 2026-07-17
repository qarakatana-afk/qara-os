# 04 — Experience Specification

**Product name:** Bridge  
**Date:** 2026-07-17  
**Author:** Copilot Coding Agent (Qara OS AI) — subject to human review

---

## Purpose of This Document

This document defines the intended human experience of using Bridge. It governs all design decisions. A feature that creates the wrong experience is wrong regardless of technical correctness.

---

## 1. Experience Principles

```
1. Bridge is invisible when not needed, and fully present when invited. 
   Test: A user should be able to have a conversation without consciously thinking about 
   Bridge more than once.

2. Bridge remembers what matters and forgets what does not. 
   Test: Bridge knows the names of the people in this relationship and their languages. 
   Bridge does not know or surface how many times the app has been opened.

3. Bridge never makes either person feel behind, embarrassed, or surveilled. 
   Test: Neither participant should ever feel that their language difficulty is being 
   measured or judged. Translation errors are handled gracefully, not highlighted.

4. Bridge never competes for attention. 
   Test: There are no notifications for non-critical events. There are no streaks, 
   badges, or prompts to "keep going." The app is silent unless spoken to.

5. Bridge never overwhelms. 
   Test: Every screen presents one clear action. A first-time user can complete the 
   core flow in under two minutes without reading any instructions.
```

---

## 2. Entry Experience

```
What the person brings to the product (their state, goal, emotion):
They want to talk to someone they love. They have the language gap in mind. They may be 
slightly nervous that the technology will be complicated or will make the conversation worse. 
They are bringing hope — that this time, it will be easier.

What the product does in response:
Bridge asks one question: "Who would you like to connect with?" It does not show features, 
options, or settings. It does not explain AI. It does not require a profile before beginning.

What the person can do within the first 2 minutes:
Start a conversation with one specific person. That is the only thing Bridge asks them to do.

What the product does NOT do on first encounter:
- Does not ask for a name, email, or profile photo before letting the user begin
- Does not explain how Bridge works ("our AI uses...") — it simply works
- Does not show a features tour or onboarding slideshow
- Does not request notification permissions before the user has experienced value
- Does not ask about language preferences up front — it detects or asks naturally in context
```

---

## 3. Core Flow

```
Step 1: User opens Bridge and selects or creates a connection (a specific person they want 
        to reach).

Step 2: User speaks or types in their language. Bridge listens without interrupting.

Step 3: Bridge translates and delivers the message to the other person — in their language, 
        in a form that preserves the tone and meaning, not just the words.

Step 4: The other person responds in their language. Bridge delivers it back to the first 
        person in their language.

Step 5: The conversation continues naturally. Neither person needs to manage the technology 
        between turns.

Outcome: Both people have had a real exchange. Something was said that mattered. 
The technology was present but not central.
```

---

## 4. Key Moments

```
Moment 1: First successful translation — 
What is happening: The user says something meaningful and hears it come back in the other 
person's language, naturally. This is the trust-building moment. If it feels right, the user 
believes Bridge can do what it promises. If it feels robotic or wrong, the user may not try again.
Why it matters: First impressions of AI translation carry strong emotional weight. The goal 
is that the person thinks "that sounds like what I meant," not "that's close enough."

Moment 2: The other person responding —
What is happening: The other participant (possibly older, less technical) receives the 
translated message and is able to respond without friction. This is the first real test of 
whether Bridge works for both people in the relationship, not just the one who set it up.
Why it matters: If the secondary user finds Bridge confusing or intimidating, the primary user 
carries that burden and may stop using it. The design must be simple enough for someone who 
does not consider themselves a technology user.

Moment 3: A sensitive or emotional moment —
What is happening: The conversation moves into territory that carries emotional weight — 
a health update, an apology, a declaration of love, a shared memory. This is when the 
stakes of translation quality are highest.
Why it matters: A bad translation at this moment breaks trust in a way that may not be 
recoverable. Bridge must handle emotional language with care — preserving tone, tentativeness, 
warmth — not just dictionary accuracy.
```

---

## 5. Friction Map

| Friction Point | Type | Justified? | Resolution |
|---|---|---|---|
| Account creation before first use | Unnecessary | No | Allow guest or minimal entry; defer full account setup until the user has experienced value |
| Language configuration | Necessary | Yes | Ask once, simply, in context — "What language do you speak? What language do they speak?" — remember forever |
| Consent to record or store conversation | Necessary | Yes | Required for relationship memory; must be clear, simple, and freely given — not buried in terms |
| Latency during translation | Necessary | Yes (technical) | Minimize with design: typing indicator, conversational pacing cues, graceful handling of slow connections |
| Onboarding the secondary (less technical) user | Necessary | Yes | A simple, single entry point for the other person — receive and respond, no setup required for basic use |
| Notification permission requests | Unnecessary | No | Never prompt; let users opt in if they want to be notified of messages |

---

## 6. Emotional Tone

```
Intended emotional state after use: Warm. Connected. The sense that something real was said 
and heard. Calm — not stimulated, not incomplete, not compelled to open the app again.

Emotional states this product must not create:
- Anxious (about whether the translation was right, about whether they said the right thing)
- Inadequate (feeling that the language gap is their failure)
- Compelled to return (manufactured by the product rather than by genuine desire to connect)
- Distracted (by notifications, suggested features, or anything other than the conversation)
```

---

## 7. Attention Contract

```
How much of the user's time and attention does this product require to deliver its outcome:
The minimum a conversation requires — which is only the time of the conversation itself. 
Bridge should require no additional attention overhead.

What does this product do to avoid demanding more attention than necessary:
- No push notifications except for incoming messages from a known contact (and only if the 
  user has explicitly opted in)
- No home screen widgets, badges, or persistent status indicators
- No "while you're here" suggestions, related features, or upsells within the conversation flow
- The app closes cleanly — it does not leave a reason to return other than the relationship

Notification policy: Opt-in only. Maximum one notification type: "You have a message from 
[Name]." No promotional notifications. No re-engagement notifications. No "you haven't 
talked to [Name] in a while."
```

---

## 8. Experience Anti-Patterns

```
- No: dark patterns (hidden costs, auto-renewing subscriptions without clear disclosure, 
  false free tiers that capture data)
- No: manufactured urgency or artificial scarcity ("Start your free trial before it's gone")
- No: social comparison (leaderboards, "X people connected today," usage statistics shown 
  to the user)
- No: infinite scroll or passive consumption features — Bridge has no feed
- No: guilt-trip offboarding ("Are you sure? Your conversations will be deleted")
- No: engagement bait notifications ("You haven't called your family in 3 days")
- No: translation confidence scores shown to users in a way that creates anxiety about accuracy
- No: AI character or persona that makes Bridge feel like a person the user is talking to, 
  rather than a tool that helps two real people talk to each other
```

---

## Checklist

- [x] Experience principles are testable
- [x] Core flow ends in a human outcome, not a feature completion
- [x] Friction is classified and unnecessary friction is eliminated
- [x] Attention contract is explicit
- [x] Anti-patterns are listed
- [x] This document is consistent with 01, 02, and 03
