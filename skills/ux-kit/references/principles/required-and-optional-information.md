---
id: UX-FORM-005
name: Required and Optional Information
category: heuristic
source_ids:
- GOV-QUESTIONS
- WAI-VALIDATE
domain: forms-onboarding-and-accounts
aliases: []
feature_tags:
- forms-editing
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Make requested effort and optionality clear before people invest in an answer.

**Signals:** A submission unexpectedly rejects a blank field marked optional, or an unexplained asterisk is the only requirement cue.

**Interventions:** Ask only justified information; make optional and required meaning consistent in labels, semantics and service validation.

**Limits:** Do not treat one design system's exact marker wording as a universal standard.

**Example:** A delivery form clearly marks an optional access note and allows successful submission without it.

**Validation:** Submit with optional fields empty and each required field absent; compare messages, semantics and service rules.

**Counterexample:** Collecting an optional phone number and then blocking without it is contradictory.

**Conflicts:** Balance data minimization and service needs; do not invent a requirement to improve completion statistics.

**Evidence boundary:** Official question and WAI validation guidance inspected; the product must supply its actual requirements.

**Useful when:** Make required effort and optional inputs clear.

Sources: [GOV-QUESTIONS](https://design-system.service.gov.uk/patterns/question-pages/), [WAI-VALIDATE](https://www.w3.org/WAI/tutorials/forms/validation/)
