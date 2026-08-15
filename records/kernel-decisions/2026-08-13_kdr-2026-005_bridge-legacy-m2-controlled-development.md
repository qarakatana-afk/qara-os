KERNEL DECISION RECORD

RECORD ID: KDR-2026-005
DATE: 2026-08-13
VERSION: 2

WORK
TITLE: Bridge Legacy Milestone 2 controlled development authorization
CLASSIFICATION: Implementation
STATUS: ACTIVE — FOUNDER APPROVED

RESPONSIBILITY
RESPONSIBLE HUMAN STEWARD: qarakatana-afk
CONTRIBUTING PEOPLE OR AGENTS: Copilot Coding Agent

PURPOSE
PERSON OR GROUP SERVED: Bridge Legacy owners (people preserving their stories and wisdom)
HUMAN OUTCOME: Bridge Legacy owners can engage in AI-assisted conversational deepening of their stories — grounded, one-question-at-a-time exploration that helps them say more of what they know and feel, without the technology intruding
FRICTION OR NOISE ADDRESSED: The M1 foundation (Legacy creation, owner-only persistence, text-first guided conversation) has been validated. The next barrier for the owner is that the conversation has no depth mechanism — there is no way for the system to help them explore further. M2 removes that barrier by introducing server-side AI follow-up questions that are grounded in the owner's own content.

AUTHORITY
CONTROLLING SPECIFICATIONS:
- source/FOUNDERS_CHARTER.md
- docs/kernel/07-Kernel.md (v0.2)
- docs/kernel/08-Kernel_Execution_Protocol.md
- docs/kernel/09-Kernel_Decision_Record.md
- QS-003_Art_of_Presence_v0.1.md
HIGHEST CONTROLLING AUTHORITY: source/FOUNDERS_CHARTER.md
LOWER-LEVEL SPECIFICATIONS REVIEWED:
- products/bridge/legacy/01-module-scope.md (Legacy module scope — requires Founder approval under KDR-2026-004)
- products/bridge/legacy/02-milestone-2-scope.md (M2 requirements LM2-01 through LM2-09)
- records/operational-outcomes/2026-08-13_oor-2026-002_legacy-m1-reconciliation.md (M1 historical evidence)
- records/kernel-decisions/2026-08-13_kdr-2026-004_bridge-legacy-module-scoping.md (prerequisite — Legacy module governance establishment)
- records/kernel-decisions/2026-08-09_kdr-2026-002_bridge-build-authorization-hold.md (Bridge-wide HOLD — applicability analyzed below)

ANALYSIS
FACTS:
- M1 validation: 10/10 PASS (authentication, Legacy creation, persistence, conversation entry, response submission, response persistence, cross-user privacy isolation, leave and return, product positioning, scope control) — as reported and recorded in OOR-2026-002.
- M2 implementation has begun but is not complete.
- Bridge Legacy is independently scoped and does not require Bridge Translation to function (KDR-2026-004, products/bridge/legacy/01-module-scope.md).
- M2 requirements are enumerated and testable in products/bridge/legacy/02-milestone-2-scope.md (LM2-01 through LM2-09).
- Controlled development means development in an isolated environment. It does NOT mean production deployment, public launch, or use with real user data beyond the developer/Founder.
- KDR-2026-002 placed a HOLD on Bridge build authorization pending Phase 1 governed-learning closure. Phase 1 is complete per KDR-2026-003 (APPROVED 2026-08-09).
- The conditions stated in KDR-2026-002 that warranted the HOLD have been met: governed-learning Phase 1 artifacts are merged; a closed-loop example is complete.
- KDR-2026-002 did not enumerate Bridge Legacy controlled development (a separately scoped module with no implementation at the time) as a specifically prohibited action. Its prohibited action was: "Declaring build authorization complete without Phase 1 closure evidence."

ASSUMPTIONS:
- Founder approval of KDR-2026-004 (Legacy module scoping) is a prerequisite for this decision. This prerequisite has been met.
- M1 validation evidence (10/10 pass) is accurate as reported. No independent repository artifact exists; the Replit project is the implementation source.
- M2 controlled development proceeds in an environment where no real user personal data is processed until LOD-01 through LOD-03 (AI provider DPA, Clerk DPA, database encryption confirmation) are resolved.
- The Founder's definition of "controlled development" is: development activity by the authorized builder (Founder and/or designated agent), in a non-production environment, with no deployment to public users, no real personal data beyond developer testing.

UNCERTAINTIES:
- Exact identity of AI provider, database provider, and hosting runtime (marked UNKNOWN in products/bridge/legacy/02-milestone-2-scope.md section 4). These are not required for controlled development in an isolated environment but must be resolved before any real-data deployment.
- Clerk DPA status for Legacy use.
- Whether M2 implementation already underway is consistent with LM2-01 through LM2-09 as stated. Engineering review required.

CONFLICTS:
- KDR-2026-002 HOLD applicability: analyzed above under FACTS. The HOLD conditions have been met; a fresh Legacy-specific authorization KDR is the correct mechanism. This is that KDR. Proceeding is not a bypass — it is the exact mechanism KDR-2026-002 required: "Fresh decision after Phase 1 closure."

PRIMARY RISKS:
- Scope creep: M2 implementation exceeds the boundaries in products/bridge/legacy/02-milestone-2-scope.md. Mitigation: any capability not in LM2-01 through LM2-09 requires a new Kernel Decision; the out-of-scope list is explicit.
- Privacy risk from premature real-data deployment: M2 uses an AI provider whose data retention terms are unknown. Mitigation: controlled development with real personal data is blocked until LOD-01 through LOD-03 are resolved; developer/Founder test data is permitted.
- Retroactive scope expansion: This record is used to authorize capabilities beyond M2. Mitigation: scope limits below are explicit; M3+ capabilities are specifically prohibited.
- Owner privacy: AI provider receives owner content (text) for follow-up generation. Mitigation: LM2-08 requires owner-only data pathways; LOD-01 requires a DPA prohibiting retention and training use before real-data deployment.

SIMPLICITY TEST: The smallest responsible action is to authorize controlled development of M2 as exactly specified, with LOD-01 through LOD-03 as deployment gates (not controlled-development gates). This is that action.

TRUST TEST: A fully informed reviewer can trace: M1 validated → Legacy module scope established (KDR-2026-004) → M2 requirements defined (02-milestone-2-scope.md) → Phase 1 governed-learning complete (KDR-2026-003) → this decision authorizes M2 controlled development, not production. The sequence is complete and traceable.

CAPABILITY EFFECT: Enables Bridge Legacy M2 controlled development within the explicitly bounded scope. Does not enable production, public launch, or any other Bridge module.

EVIDENCE NEEDED:
- Founder approval of KDR-2026-004 (prerequisite) — SATISFIED
- Founder approval of M2 controlled development scope as stated in products/bridge/legacy/02-milestone-2-scope.md — SATISFIED
- Founder acknowledgment that M2 controlled development is in an isolated environment (no real personal data until LOD-01 through LOD-03 are resolved) — SATISFIED
- Upon M2 completion: Operational Outcome Record (OOR-2026-003) against this KDR

PROPOSED ACTION
SMALLEST RESPONSIBLE ACTION: Authorize Bridge Legacy Milestone 2 controlled development within the scope defined in products/bridge/legacy/02-milestone-2-scope.md, subject to the deployment gates stated.

SCOPE LIMITS:
- Authorizes: M2 controlled development (LM2-01 through LM2-09) in an isolated, non-production environment.
- Does NOT authorize: production deployment; public launch; use with real personal data until LOD-01 through LOD-03 are resolved; Bridge Translation or any other Bridge module; voice/STT; Milestone 3+; any capability outside products/bridge/legacy/02-milestone-2-scope.md section 2.1.
- Does NOT create automatic authorization for M3 or any future milestone.
- Does NOT affect the governance status of Bridge Translation or other Bridge modules.
- Does NOT modify Kernel v0.2 decision rules or the Founder's Charter.

DEPLOYMENT GATES (must be resolved before M2 involves real personal data):
- LOD-01: AI provider selection and DPA (prohibiting retention and training use of owner content)
- LOD-02: Clerk DPA and GDPR data processing terms confirmed for Legacy
- LOD-03: Database hosting region and encryption at rest confirmed

PROHIBITED OR EXCLUDED ACTIONS:
- Implementing any feature not in products/bridge/legacy/02-milestone-2-scope.md section 2.1
- Deploying M2 to public users or processing real personal data before deployment gates are cleared
- Using this record to authorize M3+ capabilities
- Using this record to claim production authorization

DECISION
KERNEL DECISION: PROCEED (controlled development within stated scope and gates) — ACTIVE
RATIONALE:
1. M1 foundation is validated (OOR-2026-002: 10/10 pass).
2. Legacy module scope is established (KDR-2026-004, Founder approved).
3. M2 requirements are defined, bounded, and testable (products/bridge/legacy/02-milestone-2-scope.md).
4. Phase 1 governed-learning is complete (KDR-2026-003); the conditions that warranted KDR-2026-002's HOLD have been met.
5. M2 controlled development is not production launch; it is the correct next governed step.
6. Privacy risks for controlled development (no real personal data) are manageable within the stated scope; deployment gates address the remaining privacy unknowns before any real-data exposure.

REQUIRED REVISIONS OR MISSING INFORMATION:
- None at activation. Founder approved prerequisite module scope and M2 controlled-development scope.

RE-EVALUATION TRIGGERS:
- Founder revision of this record
- M2 completion, triggering OOR-2026-003
- Any discovery during M2 that a requirement changes in purpose, scope, risk, or served group
- Any decision to proceed to real-data deployment (triggers deployment gate review)

REVIEW DATE OR CONDITION: Re-evaluate upon M2 completion or upon any request to expand scope.

APPROVAL
HUMAN STEWARD DECISION: APPROVED
APPROVAL DATE: 2026-08-15
NOTES: Founder approved Bridge Legacy Milestone 2 controlled development within LM2-01 through LM2-09 and the stated deployment gates. This does not authorize production deployment, public launch, real-user deployment before applicable gates are cleared, Bridge Translation, voice/STT, other Bridge modules, or Milestone 3+.
