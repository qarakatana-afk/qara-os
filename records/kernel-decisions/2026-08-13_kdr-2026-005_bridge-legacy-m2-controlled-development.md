KERNEL DECISION RECORD

RECORD ID: KDR-2026-005
DATE: 2026-08-13
VERSION: 1

WORK
TITLE: Authorize Bridge Legacy Milestone 2 controlled development
CLASSIFICATION: Implementation
STATUS: DRAFT — AWAITING FOUNDER APPROVAL

RESPONSIBILITY
RESPONSIBLE HUMAN STEWARD: qarakatana-afk
CONTRIBUTING PEOPLE OR AGENTS: Copilot Coding Agent

PURPOSE
PERSON OR GROUP SERVED: Bridge Legacy owners and Qara OS governance stewards
HUMAN OUTCOME: Permit tightly bounded development of Bridge Legacy M2 so private story content can
be explored through AI-assisted conversational deepening without prematurely authorizing production
or unrelated Bridge capabilities
FRICTION OR NOISE ADDRESSED: Legacy M2 needs a module-specific decision because historical Bridge
Translation build blockers do not map cleanly to a text-first, owner-only, controlled-development
milestone

AUTHORITY
CONTROLLING SPECIFICATIONS:
- source/FOUNDERS_CHARTER.md
- docs/kernel/07-Kernel.md
- docs/kernel/08-Kernel_Execution_Protocol.md
- docs/kernel/09-Kernel_Decision_Record.md
- docs/kernel/10-Kernel_Escalation_and_Review.md
- products/bridge/02-human-outcome.md
- products/bridge/05-functional-requirements.md
- products/bridge/07-risk-privacy-and-safety.md
- products/bridge/09-build-handoff.md
- records/kernel-decisions/2026-08-09_kdr-2026-002_bridge-build-authorization-hold.md
- records/kernel-decisions/2026-08-09_kdr-2026-003_phase1-learning-outcome.md
- records/governance-changes/2026-08-13_bridge-legacy-od-01-od-08-applicability.md
HIGHEST CONTROLLING AUTHORITY: source/FOUNDERS_CHARTER.md
LOWER-LEVEL SPECIFICATIONS REVIEWED:
- products/bridge/03-user-and-problem.md
- products/bridge/04-experience-specification.md
- products/bridge/06-technical-architecture.md

ANALYSIS
FACTS:
- Bridge Legacy is named in current Bridge documentation as a distinct module with separate
  Kernel-decision requirements before implementation scope is defined
  (`products/bridge/05-functional-requirements.md:8`, `products/bridge/05-functional-requirements.md:103`).
- Bridge's current story feature is a later-phase capability and already requires separate
  authorization before implementation or release
  (`products/bridge/09-build-handoff.md:96`, `products/bridge/09-build-handoff.md:100`).
- Bridge requires encryption at rest, explicit consent for storage, and privacy review for stored
  sensitive content (`products/bridge/05-functional-requirements.md:151`,
  `products/bridge/06-technical-architecture.md:179`,
  `products/bridge/07-risk-privacy-and-safety.md:44`).
- KDR-2026-002 kept Bridge build authorization on HOLD until governed-learning Phase 1 was
  complete and a fresh decision was recorded; KDR-2026-003 records that Phase 1 closure was
  approved (`records/kernel-decisions/2026-08-09_kdr-2026-002_bridge-build-authorization-hold.md:46`,
  `records/kernel-decisions/2026-08-09_kdr-2026-003_phase1-learning-outcome.md:38`).
- The Legacy applicability record concludes that historical OD-01 through OD-04 are not
  applicable to Legacy M2, while OD-05 through OD-08 apply only as Legacy-specific deployment,
  security, process, and legal controls.
ASSUMPTIONS:
- Legacy M2 controlled development is text-first and owner-only, with server-side AI processing of
  private story content for conversational deepening.
- Controlled development can be bounded to isolated non-production environments and can remain
  separate from Translation, voice/STT, public sharing, and later milestones.
UNCERTAINTIES:
- Exact AI provider, contract terms, and retention behavior for private story processing.
- Exact database provider, region, encryption implementation, and production deployment target.
- Whether any real personal data will be needed before a later deployment/release gate.
CONFLICTS:
- Historical Bridge Translation open decisions were written for a different product path and must
  not be treated as automatic authorization or automatic blockage for Legacy M2.
PRIMARY RISKS:
- Private story content could be processed by an AI provider without explicit retention/training
  limits.
- Stored story responses or memory could be retained insecurely or exposed outside owner-only
  boundaries.
- Controlled development could drift into production, public sharing, Translation, STT/voice, or
  Milestone 3+ without a fresh decision.
SIMPLICITY TEST: The smallest responsible action is to authorize only controlled development of
Legacy M2 with explicit scope boundaries and explicit deployment/release prohibitions.
TRUST TEST: A fully informed reviewer would expect a fresh, Legacy-specific decision rather than an
untested inheritance of Bridge Translation open decisions.
CAPABILITY EFFECT: This decision enables narrow M2 engineering work while preserving historical
governance and keeping all expansion pathways gated.
EVIDENCE NEEDED:
- Founder review of this KDR and the linked applicability record.
- Before any non-isolated deployment or real-user release: resolved Legacy-specific decisions for
  AI processor terms, retention/deletion, storage security, deployment controls, and legal review.

PROPOSED ACTION
SMALLEST RESPONSIBLE ACTION: PROCEED with Bridge Legacy Milestone 2 controlled development only.
SCOPE LIMITS:
- Authorizes controlled development only for text-first, owner-only Legacy M2 work.
- Authorizes server-side AI processing only for private story-content conversational deepening.
- Authorizes non-production, isolated development environments only.
- Does not authorize production deployment.
- Does not authorize voice capture or STT.
- Does not authorize Bridge Translation functionality.
- Does not authorize public sharing, invited external access, or broad user rollout.
- Does not authorize Milestone 3 or later features.
PROHIBITED OR EXCLUDED ACTIONS:
- Any production deployment or production data processing.
- Any public sharing or externally accessible story archive.
- Any speech, voice-recording, or STT pipeline.
- Any Translation flow, translated transcript feature, or Bridge Translation release work under
  this authorization.
- Any deployment or release that relies on unresolved provider-retention, encryption, or legal
  questions.
- Any expansion beyond owner-only controlled development without a fresh Kernel decision.

DECISION
KERNEL DECISION: PROCEED
RATIONALE: The exact action "Authorize Bridge Legacy Milestone 2 controlled development" is
appropriate only as a narrow, non-production authorization. Legacy M2 is sufficiently bounded to
permit controlled development, but not to permit production, voice/STT, Translation, public
sharing, or Milestone 3+.
REQUIRED REVISIONS OR MISSING INFORMATION:
- Resolve LOD-01 through LOD-05 from
  `records/governance-changes/2026-08-13_bridge-legacy-od-01-od-08-applicability.md` before any
  deployment beyond isolated controlled development.
- Record exact provider, retention, encryption, and deletion controls before any real-user or
  public release.
RE-EVALUATION TRIGGERS:
- Request to use real user data outside controlled development.
- Request to add voice, STT, Translation, public sharing, or invited external access.
- Request to deploy beyond isolated non-production environments.
- Request to begin Milestone 3 or later work.
REVIEW DATE OR CONDITION: Re-evaluate immediately before any deployment, public release, or scope
expansion beyond this record's stated limits.

APPROVAL
HUMAN STEWARD DECISION: AWAITING REVIEW
APPROVAL DATE: NOT YET APPROVED
NOTES: This record authorizes controlled development only if approved by the Founder. It does not
authorize production, voice/STT, Translation, public sharing, or Milestone 3+.
