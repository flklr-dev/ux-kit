---
id: UX-MOBILE-004
name: Discoverable Gesture Alternatives
category: platform
source_ids:
- APPLE-GESTURES
domain: native-mobile-and-resilience
aliases: []
feature_tags:
- forms-editing
platforms:
- ios
related_ids: []
---
**Explanation:** A gesture shortcut needs a fitting alternative for people who cannot discover or perform it.

**Signals:** An essential row action is available only through a custom swipe or drag.

**Interventions:** Expose an operable labeled alternative and support relevant system accessibility inputs; preserve a useful gesture shortcut if it works.

**Limits:** iOS gesture guidance is separate from scoped web pointer/drag criteria and other platform APIs.

**Example:** An editable list offers a Move command as well as drag, with the same actual result.

**Validation:** Complete the operation using the supported alternative/input modes on the target app and verify state.

**Counterexample:** Replacing a drag-only action with another undiscoverable multi-finger gesture does not solve access.

**Conflicts:** Accessibility and actual action equivalence govern gesture styling and shortcuts.

**Evidence boundary:** Official Apple alternative-input guidance inspected; no assistive/native interaction has been verified by the source review alone.

**Useful when:** Provide an accessible way to perform gesture-driven actions.

Sources: [APPLE-GESTURES](https://developer.apple.com/design/human-interface-guidelines/gestures)
