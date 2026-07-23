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

# Incident Response Process

When a failure condition or operational incident occurs:

1. **Immediate Actions:**
   - Suspend all in-progress work immediately.
   - Issue and record a HOLD according to QS-007 and QS-009.
   - Document the incident with timestamp, observed symptoms, and affected artifacts.

2. **Assessment:**
   - Determine the scope of impact (single run, multiple scenarios, repository integrity).
   - Identify whether the issue requires escalation per QS-010 criteria.
   - Check if rollback or disable procedures are needed (see below).

3. **Resolution:**
   - For authority conflicts or missing authority: Follow QS-010 escalation process.
   - For Kernel execution failures: Review trace logs, verify governing document availability, retry if transient.
   - For repository integrity issues: Verify synchronization, check for uncommitted changes, restore from known-good state if needed.

4. **Recovery:**
   - Once resolved, document the resolution in the HOLD record.
   - Verify all preconditions before resuming operations.
   - Resume work only after confirming the root cause has been addressed.

---

# Escalation Contacts and Ownership

## Primary Owner
- **Repository Owner:** qarakatana-afk (GitHub: @qarakatana-afk)
- **Responsibility:** Authority resolution, governance decisions, HOLD disposition

## Escalation Triggers
Per QS-010, escalate immediately when:
- Authority conflict cannot be resolved within single-executor scope
- Required authority is missing or ambiguous
- Kernel execution produces unexpected HOLD or unresolvable outcome
- Repository integrity is compromised

## Escalation Procedure
1. Issue HOLD record according to QS-009.
2. Notify repository owner via GitHub issue tagged with `HOLD` label.
3. Include: HOLD record link, failure summary, attempted resolution steps.
4. Suspend all operations until owner provides disposition.

## Response Expectations
- **Acknowledgment:** Within 24 hours of escalation.
- **Disposition:** Within 72 hours for Critical severity, 7 days for High severity.
- **Follow-up:** Owner updates HOLD record with resolution path and timeline.

---

# Rollback and Disable Procedures

## Rollback Trigger Conditions
Initiate rollback when:
- A committed change introduces authority conflict discovered post-commit.
- Evidence artifacts are found to be inconsistent or invalid after publication.
- A production decision must be reversed due to governance review outcome.

## Rollback Procedure
1. **Identify Scope:**
   - Determine which commits, artifacts, or decisions require rollback.
   - Document the rollback justification in a new Decision Record or HOLD record.

2. **Execute Rollback:**
   - For repository changes: Use `git revert <commit-hash>` to reverse the commit.
   - For decision artifacts: Mark the original Decision Record as SUPERSEDED and issue a correcting Decision Record.
   - For published documentation: Update with a clear deprecation notice and pointer to corrected version.

3. **Verify Rollback:**
   - Confirm repository is in a consistent state.
   - Re-run affected scenarios to validate that the rollback resolved the issue.
   - Update RUN_LOG, EQUIVALENCE_MATRIX, and PRODUCTION_READINESS_CHECKLIST as needed.

4. **Communicate Rollback:**
   - Update all stakeholders via GitHub issue or commit message.
   - Document the rollback event in CHANGELOG.md with justification.

## Disable Procedure (Production Suspension)
If QARA OS operations must be suspended entirely:

1. **Issue Suspension Notice:**
   - Create a `SUSPENSION_NOTICE.md` file in the repository root.
   - Include: suspension reason, effective date, expected resolution timeline, contact for inquiries.

2. **Mark Repository Status:**
   - Update README.md with a prominent suspension banner.
   - Add a `suspended` label to the repository topics.

3. **Halt All Operations:**
   - No new runs, decisions, or scenario executions.
   - No commits except for hotfixes addressing the suspension root cause.

4. **Resolution and Re-enabling:**
   - Address the root cause per QS-010 escalation outcome.
   - Issue a resolution Decision Record.
   - Remove suspension notice and update README.md.
   - Resume operations per standard startup procedure.

---

# Shutdown

Before ending operations:

- Save all artifacts.
- Verify repository consistency.
- Commit completed work.
- Record outstanding HOLD items.
