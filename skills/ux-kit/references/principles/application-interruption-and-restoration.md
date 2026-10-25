---
id: UX-MOBILE-006
name: Application Interruption and Restoration
category: platform
source_ids:
- ANDROID-STATE
domain: native-mobile-and-resilience
aliases: []
feature_tags:
- offline-sync
platforms:
- android
related_ids: []
---
**Explanation:** A system recreation or process loss differs from deliberate dismissal; restore the state appropriate to the user's task and persistence policy.

**Signals:** Returning after an interruption loses an unfinished note or resurrects a deliberately discarded one.

**Interventions:** Classify durable content, transient UI state and explicit dismissal; choose fitting saved-state/persistence mechanisms and restore meaningful context.

**Limits:** Do not persist sensitive content automatically or assume a memory-only model survives process death.

**Example:** An Android note restores the saved draft and relevant editing context after system recreation, respecting explicit discard.

**Validation:** Exercise configuration changes, background/process recreation and explicit exit; compare content and state with the intended policy.

**Counterexample:** Restoring a completed payment action as an unsubmitted screen can lead to duplicate commitment.

**Conflicts:** Balance continuity with privacy, storage limits and authoritative operation state.

**Evidence boundary:** Official saved-state/dismissal distinctions inspected; a Node test cannot prove native lifecycle restoration.

**Useful when:** Resume an interrupted native task with meaningful context.

Sources: [ANDROID-STATE](https://developer.android.com/topic/libraries/architecture/saving-states)
