# QARA OS Operations Runbook v0.1

## Purpose

This runbook defines the minimum procedure to operate QARA OS in production.
This document is operational only. It does not create or modify authority.
Controlling authority remains in Source and Kernel specifications (QS-001 through QS-010).

---

# Preconditions

Before beginning operations, verify:

- Repository is synchronized.
- Required governing specifications are present and accessible (QS-001 through QS-010).
- Kernel is available.
- Decision Record templates are available.
- Trace Log templates are available.
- Production readiness artifacts are accessible, including `PRODUCTION_READINESS_CHECKLIST_v0.1.md`.

If any prerequisite is missing, suspend operations until restored.

---

# Daily Startup

1. Synchronize repository.
2. Review unresolved HOLD records.
3. Review open Decision Records.
4. Confirm governing documents have not changed.
5. Begin work.

---

# Standard Workflow

For material work, execute Kernel flow according to:
- QS-008 (Kernel Execution Protocol)
- QS-009 (Kernel Decision Record)

Record artifacts in repository locations defined by current standards.
Do not duplicate or reinterpret Kernel steps in this runbook.

---

# Failure Conditions

Suspend work immediately if:

- Authority conflict exists.
- Required authority is missing.
- Kernel execution cannot complete.
- Evidence cannot be produced.
- Repository integrity is uncertain.

Issue and record HOLD according to QS-007 and QS-009 before stopping.

---

# Escalation

Escalation shall follow QS-010 triggers, levels, and outcomes.
This runbook does not define alternate escalation authority or outcomes.

---

# Shutdown

Before ending operations:

- Save all artifacts.
- Verify repository consistency.
- Commit completed work.
- Record outstanding HOLD items.
