---
id: UX-ACCESS-003
name: Semantic Name, Role and Value
category: standard
source_ids:
- WCAG-NAME-ROLE
domain: accessibility-and-inclusion
aliases: []
feature_tags:
- forms-editing
platforms:
- web
related_ids:
- UX-ERROR-001
- UX-ACCESS-001
---
**Explanation:** SC4.1.2 Level A addresses programmatic name/role and relevant value/state/change information for controls.

**Signals:** A custom toggle looks correct but exposes no state, or invalid status does not match the displayed error.

**Interventions:** Use specified native semantics where possible; for custom controls verify actual accessible names, roles, states and updates.

**Limits:** ARIA attributes have defined value semantics; toggling an attribute's presence does not guarantee the intended state. Source markup alone does not prove assistive behavior.

**Example:** A required-field error exposes its invalid state and associated correction; clearing the error updates both presentation and semantics.

**Validation:** Inspect the accessibility representation before/after activation, error and correction, then use relevant assistive interaction where available.

**Counterexample:** A div styled as a switch with an accessible name can still lack operation and checked state.

**Conflicts:** Semantic and input requirements govern custom-control implementation, alongside visual consistency.

**Evidence boundary:** Actual criterion/intent inspected; broad accessibility conformance and screen-reader operation remain separate evidence claims.

**Useful when:** Expose an interactive control’s meaning and state.

Sources: [WCAG-NAME-ROLE](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
