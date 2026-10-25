---
id: UX-ACCESS-002
name: Visible and Unobscured Focus
category: standard
source_ids:
- WCAG-FOCUS-VISIBLE
- WCAG-FOCUS-OBSCURED
domain: accessibility-and-inclusion
aliases: []
feature_tags:
- forms-editing
platforms:
- web
related_ids: []
---
**Explanation:** Focus visibility and not-entirely-obscured focus are separate AA requirements with distinct scope.

**Signals:** A sticky footer covers the focused input or author CSS removes its indicator.

**Interventions:** Keep a meaningful keyboard indicator and reveal the focused component; check author-created overlays and user-configured exceptions.

**Limits:** AA2.4.11 is not the stricter AAA no-obscuration rule;2.4.7 does not prescribe AAA focus geometry.

**Example:** A checkout scrolls the focused correction field into a visible region above a sticky action bar.

**Validation:** Tab through every state at narrow/enlarged layouts and inspect actual indicator/component visibility.

**Counterexample:** Adding an outline does not help if the entire focused control remains behind an overlay.

**Conflicts:** Visual restraint cannot remove necessary focus information; meet the applicable scope accurately.

**Evidence boundary:** Actual AA criterion text and notes inspected; meaningful visibility requires rendered interaction checks.

**Useful when:** Keep the currently focused control identifiable.

Sources: [WCAG-FOCUS-VISIBLE](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html), [WCAG-FOCUS-OBSCURED](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
