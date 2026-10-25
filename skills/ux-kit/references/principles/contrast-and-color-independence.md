---
id: UX-ACCESS-004
name: Contrast and Color Independence
category: standard
source_ids:
- WCAG-TEXT-CONTRAST
- WCAG-NON-TEXT-CONTRAST
- WCAG-COLOR
domain: accessibility-and-inclusion
aliases: []
feature_tags:
- dashboards-tables
platforms:
- web
related_ids: []
---
**Explanation:** Text contrast, required non-text contrast and color-independent information are separate scoped requirements.

**Signals:** Status uses red/green alone or a visible control boundary disappears against its background.

**Interventions:** Measure relevant adjacent colors under actual states and provide an additional meaningful visual cue when color carries information.

**Limits:** Text AA4.5:1/large3:1 and non-text AA3:1 have different exceptions; color-use is Level A. Logos, inactive and essential cases need their own scope checks.

**Example:** A results table includes readable status text as well as color and has distinguishable required control states.

**Validation:** Measure rendered state colors and inspect meaning with color differences unavailable; test focus/disabled/error states separately.

**Counterexample:** Changing a red label to darker red can fix contrast while still leaving color as the only status distinction.

**Conflicts:** Preserve brand where possible while meeting applicable perceivability requirements.

**Evidence boundary:** Actual criteria/exceptions inspected; source palette values alone do not certify every rendered state or full conformance.

**Useful when:** Make information perceivable without relying on color alone.

Sources: [WCAG-TEXT-CONTRAST](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [WCAG-NON-TEXT-CONTRAST](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), [WCAG-COLOR](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
