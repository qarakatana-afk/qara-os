# Trace Logs Conventions (v0.1)

This directory stores Kernel execution traces for all pilot runs.

## Purpose

Trace logs provide evidence for:

- Outcome 1 (complete stage execution)
- Outcome 2 (repeatability diagnostics)
- Outcome 3 (auditability linkage)

## Directory Structure

Recommended layout:

- `SCN-001/`
- `SCN-002/`
- ...
- `SCN-010/`

## File Naming

Use one trace file per run:

`TRACE-<ScenarioID>-<RunID>.<ext>`

Examples:

- `TRACE-SCN-001-RUN-001.json`
- `TRACE-SCN-005-RUN-023.md`

## Required Trace Metadata

Each trace should include or be linkable to:

- Scenario ID
- Run ID
- Timestamp (UTC)
- Kernel stage sequence
- Governing authorities referenced per stage
- Escalation markers (if triggered)
- Final recommendation pointer

## Integrity Rules

- Do not overwrite prior trace files.
- If rerun is required, create a new Run ID.
- Keep trace format consistent within a scenario.
- Link each trace in `../RUN_LOG.md` and corresponding Decision Record.
