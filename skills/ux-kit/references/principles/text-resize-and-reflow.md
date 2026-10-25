---
id: UX-ACCESS-005
name: Text Resize and Reflow
category: standard
source_ids:
- WCAG-RESIZE
- WCAG-REFLOW
domain: accessibility-and-inclusion
aliases: []
feature_tags:
- forms-editing
platforms:
- web
related_ids: []
---
**Explanation:** Text resize and reflow are separate AA criteria, with explicit dimensions and exceptions.

**Signals:** Enlarged text clips a field label or narrow layout hides the submission action.

**Interventions:** Support relevant text enlargement and reflow without loss, testing actual task states and necessary2D content separately.

**Limits:** Resize permits captions/images-of-text exceptions; reflow has necessary2D usage/meaning exceptions. A data-table exception does not excuse surrounding form loss.

**Example:** A report form retains labels, errors and Send at enlarged text and a320 CSSpx-equivalent width.

**Validation:** Exercise200% text and relevant reflow/zoom conditions; inspect every action and correction path, documenting exceptions.

**Counterexample:** Hiding columns simply to avoid table scrolling can destroy needed comparison under a legitimate2D exception.

**Conflicts:** Accessibility scope and task completeness govern responsive choices, preserving useful data where possible.

**Evidence boundary:** Actual criteria and exception notes inspected; a single mobile screenshot is insufficient verification.

**Useful when:** Keep content and actions available when text or viewport scales.

Sources: [WCAG-RESIZE](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html), [WCAG-REFLOW](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
