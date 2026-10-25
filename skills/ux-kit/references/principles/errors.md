---
id: UX-ERROR-001
name: Error Identification and Correction
category: standard
source_ids:
- WCAG-ERROR
- WAI-NOTIFY
- ARIA-INVALID
domain: forms-onboarding-and-accounts
aliases: []
feature_tags:
- forms-editing
platforms:
- web
related_ids: []
---
**Explanation:** SC 3.3.1 requires detected input errors to identify the item and describe the error in text. WAI guidance connects feedback to form correction.

**Useful when:** Required fields, invalid input and rejected submissions.

**Signals:** A red border without explanation; a generic failure unrelated to the affected control.

**Interventions:** Associate a clear message with the field, retain valid work and give an actionable correction. Use an appropriate summary for a longer form. For a detected web input error set `aria-invalid="true"`; remove it or set `"false"` after correction. ARIA tokens are not HTML boolean attributes: an empty `aria-invalid` means false, so toggling presence alone can contradict the visible error.

**Limits:** Error identification and correction suggestions are distinct requirements; service/network errors may need different recovery.

**Example:** 'Enter an email address in name@example.com format' beside Email.

**Validation:** Trigger each error and inspect text association, focus, announcements, correction and retry. Check the actual invalid token before and after correction; verify the accessibility representation rather than only a red border or attribute presence.

**Evidence boundary:** SC 3.3.1 identifies detected errors in text; suggested correction and service recovery require their own evidence and applicable requirements.

**Counterexample:** A server outage is not an invalid email; blaming a valid field sends people toward an ineffective correction.

**Conflicts:** Distinguish input errors from operation failures and preserve valid work while explaining the relevant recovery.

Sources: [WCAG-ERROR](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html), [WAI-NOTIFY](https://www.w3.org/WAI/tutorials/forms/notifications/), [ARIA-INVALID](https://www.w3.org/TR/wai-aria-1.2/#aria-invalid)
