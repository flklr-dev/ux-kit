---
id: UX-NAV-010
name: Deep Links and Return Paths
category: platform
source_ids:
- ANDROID-DEEP
domain: information-architecture-and-navigation
aliases: []
feature_tags:
- navigation-menus
platforms:
- android
related_ids: []
---
**Explanation:** Entry at a specific destination needs fitting authorization and a coherent return path; it cannot assume the ordinary launch sequence ran.

**Signals:** A shared record link bypasses its required sign-in or leaves Back returning to irrelevant setup.

**Interventions:** Inspect target-platform deep-link stack and conditional entry; retain the intended destination through authorized authentication.

**Limits:** Do not invent a single stack policy for every entry type or OS; a deep link never grants access.

**Example:** An Android maintenance link opens the permitted job after sign-in and returns through a meaningful stack.

**Validation:** Exercise cold/warm entry, sign-in, denied/missing record and Back using the actual app.

**Counterexample:** Forcing every link through Welcome can lose the requested record, while bypassing permission is worse.

**Conflicts:** Balance direct access, security and recoverable orientation using platform behavior.

**Evidence boundary:** Official Android stack/conditional guidance inspected; this entry does not establish iOS routing or tested runtime behavior.

**Useful when:** Support entry into a feature without trapping users away from context.

Sources: [ANDROID-DEEP](https://developer.android.com/guide/navigation/design/deep-link)
