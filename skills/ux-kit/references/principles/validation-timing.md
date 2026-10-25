---
id: UX-FORM-004
name: Validation Timing
category: heuristic
source_ids:
- WAI-VALIDATE
domain: forms-onboarding-and-accounts
aliases: []
feature_tags:
- forms-editing
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Give corrective feedback when users can act on it, preserving their work and distinguishing input from service failure.

**Signals:** Errors appear while the user is still typing a valid value, or only after losing all fields.

**Interventions:** Choose timing appropriate to the field and submission contract; associate actionable feedback and clear resolved errors.

**Limits:** There is no universally best keystroke/blur/submit rule. Client checks do not replace server validation.

**Example:** A report identifies an invalid email on attempted send, retains the note and permits correction and retry.

**Validation:** Exercise initial entry, incomplete typing, invalid submit, correction and a server failure with valid fields.

**Counterexample:** A network outage labeled Invalid email prompts an irrelevant correction.

**Conflicts:** Balance early prevention against interruption and accurate failure cause.

**Evidence boundary:** WAI tutorial supports validation/correction; exact timing and field behavior are original task decisions requiring runtime checks.

**Useful when:** Give corrective feedback when the user can use it.

Sources: [WAI-VALIDATE](https://www.w3.org/WAI/tutorials/forms/validation/)
