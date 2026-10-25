---
id: UX-PERCEPT-002
name: Proximity
category: heuristic
source_ids:
- LUX-PROXIMITY
domain: perception-and-grouping
aliases: []
feature_tags:
- forms-editing
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Relative spacing can suggest which content belongs together. Inspect the actual relationships at every layout size.

**Signals:** Helper text is closer to the next input than to the field it explains.

**Interventions:** Keep labels, controls and help visually associated; preserve programmatic association and reading order.

**Limits:** Spacing alone is inadequate for nonvisual use or ambiguous repeated rows.

**Example:** A delivery-date hint stays directly with its field when a two-column form becomes one column.

**Validation:** Check narrow, wide and enlarged-text layouts; ask which field each hint describes.

**Counterexample:** Equal gutters between every element obscure the distinction between groups.

**Conflicts:** Balance grouping with available space; do not increase whitespace until required context disappears.

**Evidence boundary:** Source is editorial grouping guidance; the form layout and association checks are original applications.

**Useful when:** Associate helper text with the field it explains.

Sources: [LUX-PROXIMITY](https://lawsofux.com/law-of-proximity/)
