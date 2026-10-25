---
id: UX-TARGET-001
name: 'Target Size: Scope and Units'
category: standard
source_ids:
- WCAG-TARGET
domain: accessibility-and-inclusion
aliases: []
feature_tags:
- forms-editing
platforms:
- web
related_ids: []
---
**Explanation:** WCAG 2.2 AA SC 2.5.8 uses 24 by 24 CSS pixels with spacing, equivalent, inline, user-agent and essential exceptions.

**Useful when:** Assessing web pointer targets or comparing platform guidance.

**Signals:** A universal 44-pixel rule is called WCAG AA; visual icon size is treated as the hit area.

**Interventions:** Inspect the actual target bounds and applicable exception. For spacing, assess the specified 24-CSS-pixel circles and neighboring targets.

**Limits:** Native points/dp are different units. Meeting this criterion does not establish ideal ergonomics or whole-page conformance.

**Example:** Small separated toolbar targets may meet the spacing exception.

**Validation:** Measure effective hit bounds and spacing; separately exercise realistic pointer/touch use.

**Evidence boundary:** The entry summarizes the inspected scoped AA criterion and exceptions through its informative Understanding page; ergonomics is a separate task question.

**Counterexample:** A text link in a sentence can meet the inline exception without being enlarged into an isolated button.

**Conflicts:** Apply actual exceptions and units before a Fitts-based improvement; do not break useful layout without a task reason.

Sources: [WCAG-TARGET](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
