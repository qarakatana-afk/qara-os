KERNEL DECISION RECORD

RECORD ID: KDR-2026-004
DATE: 2026-08-13
VERSION: 2

WORK
TITLE: Bridge Legacy module scoping — establish as independently governed Bridge module
CLASSIFICATION: System Specification
STATUS: ACTIVE — FOUNDER APPROVED

RESPONSIBILITY
RESPONSIBLE HUMAN STEWARD: qarakatana-afk
CONTRIBUTING PEOPLE OR AGENTS: Copilot Coding Agent

PURPOSE
PERSON OR GROUP SERVED: Bridge Legacy owners (people preserving their stories and wisdom); Qara OS governance stewards
HUMAN OUTCOME: Establish Bridge Legacy as a correctly governed, independently scoped module within Bridge — with a documented canonical scope, a recognized historical implementation record, and clear authority for future controlled development decisions
FRICTION OR NOISE ADDRESSED: Bridge Legacy has been informally referenced in governance records and developed externally (Milestone 1, Replit project) without a Legacy-specific Kernel Decision or module specification. This creates a governance gap: the module exists in fact, but not in governed record. Subsequent work (Milestone 2 authorization) cannot proceed without this foundation.

AUTHORITY
CONTROLLING SPECIFICATIONS:
- source/FOUNDERS_CHARTER.md
- docs/kernel/07-Kernel.md (v0.2)
- docs/kernel/08-Kernel_Execution_Protocol.md
- docs/kernel/09-Kernel_Decision_Record.md
- QS-003_Art_of_Presence_v0.1.md
HIGHEST CONTROLLING AUTHORITY: source/FOUNDERS_CHARTER.md
LOWER-LEVEL SPECIFICATIONS REVIEWED:
- products/bridge/01-product-brief.md (Legacy listed as companion capability, status "In development")
- products/bridge/05-functional-requirements.md (section 5.4: Legacy placeholder requiring Kernel Decision)
- records/kernel-decisions/2026-08-09_kdr-2026-002_bridge-build-authorization-hold.md (Bridge-wide HOLD)
- records/operational-outcomes/2026-08-09_bridge-build-auth-outcome.md (Phase 1 governed-learning baseline)
- records/operational-outcomes/2026-08-13_oor-2026-002_legacy-m1-reconciliation.md (M1 historical evidence)

ANALYSIS
FACTS:
- products/bridge/05-functional-requirements.md section 5.4 explicitly requires a Kernel Decision before Legacy requirements may be written: "Pre-requisite: Kernel Decision for module scoping."
- Bridge Legacy Milestone 1 was implemented in the Replit project and passed 10/10 acceptance tests. This occurred before any Legacy-specific Kernel Decision existed. The implementation is real; the governance record was absent.
- Bridge Legacy Milestone 2 implementation has begun but is not complete.
- No Bridge Legacy module specification, architecture, or requirements document existed in this repository before this governance reconciliation.
- KDR-2026-002 places Bridge build authorization on HOLD pending Phase 1 governed-learning closure. Phase 1 is now closed per KDR-2026-003.
- KDR-2026-002 was issued to govern Bridge Translation's build authorization gate. Its scope is the Bridge build process generally, not specifically Legacy's internal controlled development.
ASSUMPTIONS:
- Bridge Legacy's purpose, scope, and exclusions as stated in products/bridge/legacy/01-module-scope.md represent the Founder's approved intent.
- M1 validation evidence (10/10 pass) is accurate as reported; the Replit project constitutes the implementation artifact. No independent verification exists in this repository.
- Bridge Legacy does not require Bridge Translation to function and does not share Bridge Translation's architecture dependencies unless explicitly cited.
UNCERTAINTIES:
- Whether Clerk, the actual database provider, the AI provider, and the hosting runtime have been confirmed or have applicable DPAs. These are marked UNKNOWN in products/bridge/legacy/02-milestone-2-scope.md section 4.
- Whether KDR-2026-002's HOLD was intended to block internal controlled development of independently scoped Bridge modules (not yet production-authorized) or only to block Bridge Translation's build-to-production path. This ambiguity is evaluated under the Applicability section below.
CONFLICTS:
- KDR-2026-002 places a HOLD on "Bridge build authorization." The scope of that HOLD as applied to independently governed Bridge modules that were not yet scoped at the time of KDR-2026-002 requires interpretation. See conflict analysis below.

KDR-2026-002 APPLICABILITY ANALYSIS:
KDR-2026-002 was issued to prevent "ungoverned Bridge build execution before required governance conditions are met." The specific conditions were: Qara OS governed-learning Phase 1 completion and closure of pre-build sequencing confusion. KDR-2026-003 confirmed Phase 1 is complete. KDR-2026-002's stated scope does not explicitly enumerate Bridge Legacy controlled development as a prohibited action; its prohibited actions are: "Declaring build authorization complete without Phase 1 closure evidence" (now resolved by KDR-2026-003). The HOLD does not disappear automatically, but its specific conditions have been met. A fresh Bridge build-authorization KDR (this one, for Legacy specifically) is the correct mechanism — not an exemption or bypass.

PRIMARY RISKS:
- Retroactive authorization: Recording M1 as if it were pre-authorized when it was not. Mitigation: OOR-2026-002 explicitly preserves the historical sequence — M1 occurred, was validated, and was not pre-authorized. This KDR recognizes that record without legitimizing the absence of governance.
- Scope inflation: Authorizing a vague module scope that invites M3+ features into M2. Mitigation: products/bridge/legacy/01-module-scope.md contains an explicit out-of-scope list.
- Privacy gap: Proceeding without resolving Clerk/database/AI provider data handling. Mitigation: products/bridge/legacy/02-milestone-2-scope.md section 4 marks these UNKNOWN; LOD-01 through LOD-04 document them as decisions to resolve before real-data deployment.
SIMPLICITY TEST: The smallest responsible action is to issue a scoping decision that recognizes M1 historical evidence, establishes Legacy's module boundary, and routes M2 authorization to a fresh KDR. This is that decision.
TRUST TEST: A fully informed reviewer can trace the evidence: M1 occurred externally without governance; it is recorded as such; a scoping decision now brings Legacy under formal governance; M2 authorization follows through its own KDR.
CAPABILITY EFFECT: Establishes Qara OS governance authority over Bridge Legacy and enables correctly governed M2 controlled development authorization.
EVIDENCE NEEDED:
- Founder confirmation of module scope as stated in products/bridge/legacy/01-module-scope.md
- Founder acknowledgment of M1 historical sequence (implemented externally, not pre-authorized, now reconciled)

PROPOSED ACTION
SMALLEST RESPONSIBLE ACTION: Establish Bridge Legacy as an independently governed Bridge module; recognize M1 historical implementation evidence without retroactive authorization; enable a fresh KDR for M2 controlled development authorization (KDR-2026-005).
SCOPE LIMITS:
- This decision establishes module scope and governance authority only.
- It does NOT authorize M2 controlled development (that is KDR-2026-005).
- It does NOT retroactively authorize M1.
- It does NOT authorize production or public launch.
- It does NOT affect the governance status of Bridge Translation or any other Bridge module.
- It does NOT modify Kernel v0.2 decision rules or the Founder's Charter.
PROHIBITED OR EXCLUDED ACTIONS:
- Treating this record as authorization to implement M2 features.
- Using this record to claim M1 was pre-authorized.
- Expanding Legacy scope beyond products/bridge/legacy/01-module-scope.md section 3 without a new Kernel Decision.

DECISION
KERNEL DECISION: PROCEED (establishing module scope and governance) — ACTIVE
RATIONALE: Bridge Legacy has a demonstrable implementation record (M1, 10/10 pass) and an actively developing Milestone 2. The governance gap is the absence of a module scoping record, not the absence of work. Establishing that record now is the minimum action that makes continued governance possible. The governed-learning loop (KDR-2026-002 → OOR-2026-001 → KDR-2026-003) is complete. The conditions that warranted the Bridge-wide HOLD have been resolved. A Legacy-specific scoping decision is the correct next step.
REQUIRED REVISIONS OR MISSING INFORMATION:
- None at activation. Founder approved module scope and acknowledged M1 historical reconciliation.
RE-EVALUATION TRIGGERS:
- Founder revises module scope
- New evidence changes the M1 historical record
REVIEW DATE OR CONDITION: Review immediately upon Founder approval or revision of module scope.

APPROVAL
HUMAN STEWARD DECISION: APPROVED
APPROVAL DATE: 2026-08-15
NOTES: Founder confirmed Bridge Legacy module scope and acknowledged M1 historical reconciliation as accurately recorded. This activation establishes Bridge Legacy as independently governed and does not retroactively authorize M1 or authorize M2 implementation.
