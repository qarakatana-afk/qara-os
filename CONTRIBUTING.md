# Contributing to Qara OS

Thank you for your interest in contributing to Qara OS.

This document explains how to contribute, how decisions are made, and what standards apply to all contributions.

---

## Before You Contribute

All contributors should read the foundational documents before proposing changes:

1. [START_HERE.md](START_HERE.md) — entry point and overview
2. [docs/philosophy/01-QARA_Identity.md](docs/philosophy/01-QARA_Identity.md) — organizational identity
3. [docs/philosophy/02-Founders_Charter.md](docs/philosophy/02-Founders_Charter.md) — governing authority

Contributions that conflict with the Founder's Charter or Core Principles will not be accepted.

---

## Types of Contributions

### Documentation Improvements

Improvements to clarity, formatting, cross-references, and discoverability are welcome.

- Fix typos and grammatical errors
- Improve document structure and navigation
- Add cross-references between related documents
- Improve the docs/ organization and index

### New Specifications

New system specifications must follow the specification format used in existing QS-### documents:

- Include a metadata header (Specification, Title, Version, Status, Owner, Depends On)
- Identify which higher-level documents govern the new specification
- Include a Ratification Checklist
- Classify as: Source, System Specification, Product Specification, Experiment, or Implementation

See [docs/philosophy/06-Start_Here_Specification.md](docs/philosophy/06-Start_Here_Specification.md) for the Work Classification guide.

### Kernel Amendments

Changes to Kernel documents (QS-007 through QS-010) follow the amendment process defined in the Founder's Charter.

### Issue Reports

Report issues, inconsistencies, or conflicts between documents through GitHub Issues.

---

## Contribution Process

### Step 1 — Open an Issue First

For any change beyond a minor fix, open a GitHub Issue before submitting a pull request.

Describe:
- What you want to change and why
- Which existing documents govern or relate to the proposed change
- Whether the change is additive, corrective, or structural

### Step 2 — Complete a Work Statement

For substantive changes, include a brief work statement in your issue or PR:

- **Work title**: What is this change called?
- **Human outcome**: What becomes better for readers or contributors?
- **Friction addressed**: What problem does this solve?
- **Relevant specifications**: Which QS-### documents apply?
- **Assumptions**: What are you assuming to be true?

This is the Qara OS Boot Sequence applied to repository contributions.

### Step 3 — Fork and Branch

1. Fork the repository
2. Create a branch with a descriptive name: `docs/improve-navigation`, `spec/add-privacy-framework`
3. Make your changes

### Step 4 — Submit a Pull Request

When submitting a pull request:

- Reference the issue number
- Describe what changed and why
- Confirm that your change does not conflict with higher-level specifications
- Confirm that existing content is preserved (no unintended deletions)

---

## Pull Request Standards

All pull requests must:

- Maintain all existing content (restructuring and additions are welcome; deletions require justification)
- Use consistent markdown formatting matching the style of surrounding documents
- Include accurate cross-references
- Not introduce external dependencies or software code unless explicitly discussed

---

## Amendment Process for Core Documents

Changes to Source-level documents (QS-001 through QS-006) and the Founder's Charter require:

1. A GitHub Issue explaining the proposed amendment and rationale
2. Reference to the controlling authority and why the amendment is consistent with it
3. Review by the repository steward
4. A Kernel Decision (PROCEED, REVISE, HOLD, or REJECT) documented in the PR

Amendments shall not be merged without a Kernel Decision on record.

See [docs/kernel/09-Kernel_Decision_Record.md](docs/kernel/09-Kernel_Decision_Record.md) for the decision record format.

---

## Reporting Issues

Use GitHub Issues to report:

- Conflicts between documents
- Broken links or cross-references
- Unclear or ambiguous language
- Missing definitions in the Glossary
- Structural or navigation problems

Label issues clearly: `conflict`, `broken-link`, `clarity`, `navigation`, `amendment`.

---

## Community Standards

All contributors are expected to:

- Engage honestly and respectfully
- State assumptions explicitly
- Welcome contrary evidence
- Protect the dignity and autonomy of all participants
- Prioritize the quality of human outcomes over speed or volume

These standards derive directly from the Qara OS Core Principles. Contributions that violate these standards will not be accepted.

---

## Questions

If you have questions before contributing, open a GitHub Discussion or Issue.

The goal is to make contributing clear and low-friction. If anything in this guide is confusing, that itself is a contribution opportunity.

---

← [Back to README](README.md) | [START_HERE.md](START_HERE.md)
