# Documentation

This folder contains all Qara OS documentation, organized for discoverability.

---

## Structure

```
docs/
├── README.md              ← This file (documentation index)
├── philosophy/            ← Foundational source documents
│   ├── 01-QARA_Identity.md
│   ├── 02-Founders_Charter.md
│   ├── 03-Art_of_Presence.md
│   ├── 04-Core_Principles.md
│   ├── 05-Glossary.md
│   └── 06-Start_Here_Specification.md
└── kernel/                ← Kernel decision system
    ├── 07-Kernel.md
    ├── 08-Kernel_Execution_Protocol.md
    ├── 09-Kernel_Decision_Record.md
    └── 10-Kernel_Escalation_and_Review.md
```

---

## Philosophy Documents

These are the foundational source documents of Qara OS. They establish identity, authority, and the governing principles for all work.

Read them in order:

| File | Original Spec | Description |
|---|---|---|
| [01-QARA_Identity.md](philosophy/01-QARA_Identity.md) | QS-001 | Defines who Qara Labs is — mission, vision, and enduring identity |
| [02-Founders_Charter.md](philosophy/02-Founders_Charter.md) | QS-002 | The constitutional authority governing all Qara Labs work |
| [03-Art_of_Presence.md](philosophy/03-Art_of_Presence.md) | QS-003 | The central product and human philosophy |
| [04-Core_Principles.md](philosophy/04-Core_Principles.md) | QS-004 | Twelve operational decision principles |
| [05-Glossary.md](philosophy/05-Glossary.md) | QS-005 | Controlled definitions for recurring terminology |
| [06-Start_Here_Specification.md](philosophy/06-Start_Here_Specification.md) | QS-006 | Required operating expectations and boot sequence |

---

## Kernel Documents

The Kernel is the minimum decision process that carries Source specifications into work.

| File | Original Spec | Description |
|---|---|---|
| [07-Kernel.md](kernel/07-Kernel.md) | QS-007 | The Qara OS Kernel — decision process and output format |
| [08-Kernel_Execution_Protocol.md](kernel/08-Kernel_Execution_Protocol.md) | QS-008 | How to execute the Kernel process |
| [09-Kernel_Decision_Record.md](kernel/09-Kernel_Decision_Record.md) | QS-009 | Durable record format for Kernel decisions |
| [10-Kernel_Escalation_and_Review.md](kernel/10-Kernel_Escalation_and_Review.md) | QS-010 | Escalation paths and review process |

---

## Other Documentation at Root Level

These documents live at the repository root and complement the docs/ structure:

| File | Description |
|---|---|
| [ARCHITECTURE.md](../ARCHITECTURE.md) | System architecture overview |
| [DESIGN_SYSTEM.md](../DESIGN_SYSTEM.md) | Visual and interaction design system |
| [ENGINEERING_PRINCIPLES.md](../ENGINEERING_PRINCIPLES.md) | Engineering philosophy and standards |
| [UX_PRINCIPLES.md](../UX_PRINCIPLES.md) | User experience principles |
| [BRIDGE_BIBLE.md](../BRIDGE_BIBLE.md) | The Bridge companion product guide |
| [COMPANION_CONSTITUTION.md](../COMPANION_CONSTITUTION.md) | AI companion behavioral constitution |
| [GENESIS_FRAMEWORK.md](../GENESIS_FRAMEWORK.md) | Product discovery framework |
| [MEMORY_PHILOSOPHY.md](../MEMORY_PHILOSOPHY.md) | Philosophy of memory in AI systems |
| [AI_MASTER_PROMPT.md](../AI_MASTER_PROMPT.md) | Master prompt for AI agents |
| [BUILDER_PROMPT.md](../BUILDER_PROMPT.md) | Prompt framework for builders |

---

## Original Specifications

The original specification files are preserved in:

- [`source/`](../source/) — Original QS-### source documents

The files in `docs/philosophy/` are copies with descriptive filenames to improve discoverability. The canonical versions remain in `source/`.

---

## Notes on File Naming

Files in `docs/` use the format `##-Descriptive_Name.md`:

- The number (`01`, `02`, etc.) maps to the original QS-### specification number
- The descriptive name reflects the document's content
- This makes documents easy to find without knowing the QS numbering system

---

← [Back to README](../README.md) | [START_HERE.md](../START_HERE.md)
