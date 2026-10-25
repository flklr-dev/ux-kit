---
id: UX-FORM-007
name: Check Answers Before Commitment
category: heuristic
source_ids:
- GOV-CHECK
domain: forms-onboarding-and-accounts
aliases: []
feature_tags:
- checkout-payments
platforms:
- platform-agnostic
related_ids:
- UX-AI-001
- UX-CONTROL-001
---
**Explanation:** Before consequential submission, give a useful opportunity to inspect and correct the captured information.

**Signals:** A final Send action follows several screens without showing the assembled details.

**Interventions:** Present the actual captured values and relevant scope, with direct correction and a clear commitment action.

**Limits:** A redundant confirmation for every harmless reversible edit may impede use; review cannot replace authority or correct backend behavior.

**Example:** A booking review displays dates, travelers and actual payable amount; Change returns to the right field with other values retained.

**Validation:** Correct a review value, return, commit once and inspect the resulting transaction.

**Counterexample:** A review summary showing stale values gives false confidence.

**Conflicts:** Balance prevention against flow length and necessary comparison; preserve useful expert shortcuts where appropriate.

**Evidence boundary:** Official check-answers pattern inspected; application outside its service context is original synthesis and no error-rate improvement is measured.

**Useful when:** Allow correction of consequential information before sending it.

Sources: [GOV-CHECK](https://design-system.service.gov.uk/patterns/check-answers/)
