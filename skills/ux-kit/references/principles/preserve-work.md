---
id: UX-FORM-001
name: Preserve Usable Work During Correction
category: standard
source_ids:
- WCAG-REDUNDANT
domain: forms-onboarding-and-accounts
aliases: []
feature_tags:
- forms-editing
platforms:
- web
related_ids: []
---
**Explanation:** WCAG 2.2 SC 3.3.7 addresses information re-entry within the same process, with essential, security and invalid-information exceptions.

**Useful when:** Forms, checkout, and interrupted multi-step work.

**Signals:** An error clears valid values or a later step asks for the same information again.

**Interventions:** Retain valid current-flow state or make previous answers selectable; distinguish field correction from unknown submission outcome. For asynchronous forms, preserve the latest editable draft separately from the submitted snapshot. Completion must not restore or clear newer edits; reset only a confirmed submitted version that is still current, or deliberately prevent editing during the operation when appropriate.

**Limits:** The criterion does not mandate localStorage or cross-session retention. Review sensitive data handling separately.

**Example:** Correct an invalid delivery field without retyping the valid contact details.

**Validation:** Submit an invalid value, correct it and retry; inspect retained values and the actual submission state. Delay success and failure, edit a field while sending, and verify the submitted snapshot and latest draft separately. A disabled submit control does not establish that the fields are protected.

**Evidence boundary:** The same-process criterion is inspected normative-scope guidance through an informative explanation; broader interruption recovery and asynchronous draft-version handling are original engineering applications, not additional requirements attributed to this criterion.

**Counterexample:** Explicit discard should remove the intended draft; retaining it against a deliberate privacy choice is harmful.

**Conflicts:** Balance preservation against sensitive-data retention and explicit discard; use the actual storage contract.

Sources: [WCAG-REDUNDANT](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html)
