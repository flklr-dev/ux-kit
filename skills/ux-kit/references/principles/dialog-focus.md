---
id: UX-FOCUS-001
name: Modal Focus Behavior
category: platform
source_ids:
- APG-DIALOG
domain: accessibility-and-inclusion
aliases: []
feature_tags:
- settings-privacy
platforms:
- web
related_ids: []
---
**Explanation:** The web APG modal pattern describes focus entering the dialog, contained Tab navigation, Escape dismissal and appropriate return focus.

**Useful when:** Reviewing or implementing a true web modal.

**Signals:** Focus remains behind an open modal, escapes to inert content, or disappears after closing.

**Interventions:** Prefer a proven accessible control; choose initial focus for the content/task and restore it to a sensible destination.

**Limits:** APG is implementation guidance, not a standalone conformance test. Native sheets and nonmodal popovers use their own conventions.

**Example:** A lengthy dialog initially focuses its heading rather than skipping explanation.

**Validation:** Open, Tab, Shift+Tab, Escape and reopen; check focus return and assistive reading order.

**Evidence boundary:** APG is informative web implementation guidance; source review does not prove the selected dialog library is correctly integrated.

**Counterexample:** A nonmodal help panel may legitimately allow focus elsewhere; imposing a modal trap would block the task.

**Conflicts:** Choose the actual interaction model before applying containment, and keep the focused explanation visible.

Sources: [APG-DIALOG](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
