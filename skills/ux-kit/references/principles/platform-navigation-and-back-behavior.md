---
id: UX-MOBILE-001
name: Platform Navigation and Back Behavior
category: platform
source_ids:
- ANDROID-NAV
domain: native-mobile-and-resilience
aliases: []
feature_tags:
- navigation-menus
platforms:
- android
related_ids: []
---
**Explanation:** Use target-platform navigation semantics deliberately; Back, hierarchical movement and dismissal need not be interchangeable.

**Signals:** Back reopens onboarding or exits before returning from a detail the user just opened.

**Interventions:** Inspect the actual stack and entry conditions, preserving meaningful previous state and expected dismissal.

**Limits:** This Android source does not prescribe iOS Back, web history or every navigation library implementation.

**Example:** A field-note editor returns to the note list after saving rather than reopening one-time setup.

**Validation:** Test cold launch, normal entry, modal dismissal and repeated Back on the actual target OS.

**Counterexample:** Replacing every back action with Navigate Home loses context and may create duplicate destinations.

**Conflicts:** Platform behavior and task continuity govern changes, with clear recovery for unsaved work.

**Evidence boundary:** Official Android guidance inspected; no device or navigation-library verification claimed from text review.

**Useful when:** Use the target OS’s navigation and dismissal expectations.

Sources: [ANDROID-NAV](https://developer.android.com/guide/navigation/principles)
