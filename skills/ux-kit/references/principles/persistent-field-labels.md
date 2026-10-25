---
id: UX-FORM-002
name: Persistent Field Labels
category: heuristic
source_ids:
- WAI-LABELS
domain: forms-onboarding-and-accounts
aliases: []
feature_tags:
- forms-editing
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Keep a field's purpose understandable while entering, reviewing and correcting its value.

**Signals:** Placeholder-only Email disappears as soon as an address is entered.

**Interventions:** Use an associated visible label in ordinary forms, with help separate from the entered value.

**Limits:** A suitably clear context can justify a visually hidden label, but the accessible name must remain; do not universalize one layout.

**Example:** A report form keeps Email above its entered value and associates its correction message with that field.

**Validation:** Type, trigger error, correct and inspect visible purpose and programmatic association at narrow widths.

**Counterexample:** Adding repeated visible labels to a clear search control may be redundant, while removing its accessible name is not.

**Conflicts:** Balance visible clarity, semantic naming and compact task context.

**Evidence boundary:** WAI informative tutorial inspected; this persistent-label pattern is not a claim that every control must have identical visible placement.

**Useful when:** Keep a field’s meaning visible while a value is entered.

Sources: [WAI-LABELS](https://www.w3.org/WAI/tutorials/forms/labels/)
