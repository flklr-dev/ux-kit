---
id: UX-CONTENT-008
name: Bidirectional and RTL Layout
category: heuristic
source_ids:
- W3C-BIDI
- W3C-RTL
domain: content-and-localization
aliases: []
feature_tags:
- forms-editing
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Base direction, layout flow and mixed-direction text each need fitting treatment; flipping the whole screen is insufficient.

**Signals:** An RTL form reorders an embedded Latin account code or reverses punctuation around it.

**Interventions:** Use target-platform direction support, logical layout where appropriate and isolation for mixed text; preserve meaningful reading/focus order.

**Limits:** Web markup guidance does not establish native APIs; not every icon or numeric sequence should be mirrored.

**Example:** A Hebrew invoice isolates a Latin reference while keeping labels and controls in a coherent RTL layout.

**Validation:** Test real mixed-script names, numbers and punctuation with selection, editing, reading and keyboard order.

**Counterexample:** Blindly reversing an identifier corrupts the value people need to copy.

**Conflicts:** Localization must preserve identity, semantic order and actual action direction.

**Evidence boundary:** Official W3C structural/inline guidance inspected; no visual or native behavior is claimed tested by reading it.

**Useful when:** Support meaningful reading and interaction order in RTL interfaces.

Sources: [W3C-BIDI](https://www.w3.org/International/articles/inline-bidi-markup/), [W3C-RTL](https://www.w3.org/International/questions/qa-html-dir)
