# QARA OS v0.1 Scenario Pack

This directory defines the 10 representative scenarios required by `TEST_PLAN_v0.1.md`.

## Directory Contents

- `SCN-001.md` ... `SCN-010.md`

## Scenario Authoring Rules

Each scenario file must contain:

1. Scenario ID and title
2. Scenario class mapping (from test plan)
3. Objective
4. Fixed input package
5. Expected governing authorities
6. Expected decision bounds (not exact wording)
7. Pass/fail observations section

## Execution Notes

- Keep scenario inputs frozen across repeat runs.
- Do not alter governing authorities mid-series.
- Record every run in `../RUN_LOG.md`.
- Record repeatability judgments in `../EQUIVALENCE_MATRIX.md`.
