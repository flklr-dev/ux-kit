---
id: UX-MOBILE-002
name: Safe Areas and Keyboard Insets
category: platform
source_ids:
- ANDROID-INSETS
- APPLE-LAYOUT
domain: native-mobile-and-resilience
aliases: []
feature_tags:
- forms-editing
platforms:
- ios
- android
related_ids: []
---
**Explanation:** Layout must account for relevant system areas, window changes and the software keyboard without hiding task controls.

**Signals:** Save is behind the keyboard or a bottom action lies under system gesture/navigation space.

**Interventions:** Use the chosen platform/framework's supported inset and safe-area handling; keep focused content/action reachable across window and keyboard states.

**Limits:** Do not blindly add all insets twice or treat a responsive browser as a native check; API details differ.

**Example:** A native note editor can scroll the focused field and Save above the actual keyboard while preserving content.

**Validation:** Exercise keyboard show/hide, rotation/window change and device safe areas on each target OS.

**Counterexample:** Adding fixed bottom padding can still fail a floating keyboard or larger text layout.

**Conflicts:** Content continuity and system interaction take precedence over fixed-position visual symmetry.

**Evidence boundary:** Android inset definitions and Apple safe-area/layout guidance inspected; actual native behavior remains untested until exercised.

**Useful when:** Keep task controls visible around system and keyboard surfaces.

Sources: [ANDROID-INSETS](https://developer.android.com/develop/ui/compose/system/insets), [APPLE-LAYOUT](https://developer.apple.com/design/human-interface-guidelines/layout)
