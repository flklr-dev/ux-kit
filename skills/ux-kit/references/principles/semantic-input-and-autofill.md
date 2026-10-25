---
id: UX-FORM-003
name: Semantic Input and Autofill
category: standard
source_ids:
- WCAG-INPUT-PURPOSE
- WAI-VALIDATE
domain: forms-onboarding-and-accounts
aliases: []
feature_tags:
- signup-auth
platforms:
- web
related_ids: []
---
**Explanation:** Choose semantics matching the value: input purpose, expected syntax and convenient keyboard are separate concerns.

**Signals:** A personal email field has no purpose metadata; a numeric-looking identifier drops leading zeros.

**Interventions:** Use fitting native controls and supported autocomplete tokens; preserve meaningful characters and validate actual data on the server.

**Limits:** SC1.3.5 AA covers listed personal-data purposes with technology support, not every input. Keyboard hints do not validate or authorize values.

**Example:** An account form identifies the personal email purpose while an asset code remains text so leading zeros survive.

**Validation:** Inspect metadata, autofill and persisted values; test expected input methods and server rejection separately.

**Counterexample:** Using a number field for a card or serial identifier can corrupt the value.

**Conflicts:** Balance convenience with precise data semantics and privacy on shared devices.

**Evidence boundary:** Criterion scope and WAI validation guidance inspected; actual autofill support remains environment-specific.

**Useful when:** Choose input purpose and autofill behavior that fits the data.

Sources: [WCAG-INPUT-PURPOSE](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), [WAI-VALIDATE](https://www.w3.org/WAI/tutorials/forms/validation/)
