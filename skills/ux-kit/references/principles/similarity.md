---
id: UX-PERCEPT-004
name: Similarity
category: heuristic
source_ids:
- LUX-SIMILARITY
domain: perception-and-grouping
aliases: []
feature_tags:
- dashboards-tables
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Shared treatments can imply shared meaning or behavior. Match visual sameness to the actual role.

**Signals:** Read-only amounts look like editable amount controls.

**Interventions:** Use stable styling for equivalent roles; distinguish interactive and informational content with more than color.

**Limits:** Similar appearance does not establish equivalent semantics or operation.

**Example:** An inventory table uses the same labeled edit treatment only for fields the user can change.

**Validation:** Ask users to identify editable values; test keyboard and assistive semantics separately.

**Counterexample:** Making Delete and Save equally prominent because both are buttons hides their different consequences.

**Conflicts:** Maintain consistency while distinguishing dangerous or secondary roles.

**Evidence boundary:** Editorial similarity guidance; the proposed role styling is an original application requiring verification.

**Useful when:** Use consistent treatments for controls with the same role.

Sources: [LUX-SIMILARITY](https://lawsofux.com/law-of-similarity/)
