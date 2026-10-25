---
id: UX-ACCESS-001
name: Keyboard Operation and No Traps
category: standard
source_ids:
- WCAG-KEYBOARD
- WCAG-NO-TRAP
domain: accessibility-and-inclusion
aliases: []
feature_tags:
- forms-editing
platforms:
- web
related_ids: []
---
**Explanation:** SC2.1.1/2.1.2 Level A address keyboard operation and leaving components, with their stated timing/path/exit scope.

**Signals:** A Save span works only on click or a custom picker has no keyboard exit.

**Interventions:** Prefer appropriate native controls; exercise the complete task and available exit without a pointer.

**Limits:** Keyboard focus alone is not operation; modal containment can be valid when a keyboard exit exists. Path-dependent underlying functions have a scoped exception.

**Example:** A web editor's Save is a real button activated with keyboard; its dialog can be entered and exited predictably.

**Validation:** Complete all relevant actions with Tab/Shift+Tab, activation and fitting component keys, including correction and exit.

**Counterexample:** An attractive pointer-only redesign blocks access despite clearer visual hierarchy.

**Conflicts:** Keyboard requirements take precedence over a visual styling preference, preserving other input methods.

**Evidence boundary:** Actual criteria, exceptions and exit guidance inspected. A still image or source assertion cannot establish tested keyboard access.

**Useful when:** Complete relevant tasks with the keyboard.

Sources: [WCAG-KEYBOARD](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html), [WCAG-NO-TRAP](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
