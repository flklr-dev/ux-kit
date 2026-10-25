---
id: UX-MOBILE-003
name: Native Text Scaling
category: platform
source_ids:
- APPLE-ACCESS
- APPLE-LAYOUT
domain: native-mobile-and-resilience
aliases: []
feature_tags:
- forms-editing
platforms:
- ios
related_ids: []
---
**Explanation:** Native text scaling is a user setting the layout must accommodate, including controls and multi-line content.

**Signals:** A custom native label ignores Dynamic Type or clips required information at larger sizes.

**Interventions:** Use fitting scalable type support and adaptable row/stack layouts; keep full task information and actions available.

**Limits:** Apple guidance does not establish Android sp behavior or web CSS requirements; test the actual framework settings.

**Example:** An iOS settings row grows and wraps at larger text instead of covering its toggle.

**Validation:** Change system text sizes and complete the task on the actual target app, checking clipping and reading order.

**Counterexample:** Shrinking the text to preserve a fixed-height row defeats the user's chosen size.

**Conflicts:** Readable content and operability outweigh identical layout geometry.

**Evidence boundary:** Official Apple accessibility/layout Markdown inspected; no universal numeric size or Android/device test inferred.

**Useful when:** Keep native layouts useful at supported text sizes.

Sources: [APPLE-ACCESS](https://developer.apple.com/design/human-interface-guidelines/accessibility), [APPLE-LAYOUT](https://developer.apple.com/design/human-interface-guidelines/layout)
