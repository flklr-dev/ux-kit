---
id: UX-MOBILE-009
name: Notification Consent and Control
category: platform
source_ids:
- ANDROID-NOTIFY
- APPLE-NOTIFY
domain: native-mobile-and-resilience
aliases: []
feature_tags:
- onboarding-permissions
platforms:
- ios
- android
related_ids: []
---
**Explanation:** Notification usefulness, OS permission and delivery controls are related but distinct choices.

**Signals:** An optional reminder blocks the core note task or repeated prompts ignore refusal.

**Interventions:** Explain the feature purpose at a suitable moment, respect denial and provide meaningful controls using the actual target OS permission model.

**Limits:** Android target-SDK/pregrant differences and Apple consent behavior are not interchangeable; permission is not delivery certainty.

**Example:** An optional report reminder can be enabled from its task context while ordinary offline writing remains available.

**Validation:** Test granted, denied, changed settings and relevant OS/version states; inspect what the app actually schedules and delivers.

**Counterexample:** Treating permission as consent to every promotional alert overstates the user's choice.

**Conflicts:** Relevance and user control override engagement pressure; preserve permission-free core tasks.

**Evidence boundary:** Official Android timing/version and Apple consent summaries inspected; entitlements and real delivery remain target-specific checks.

**Useful when:** Support relevant notifications with understandable controls.

Sources: [ANDROID-NOTIFY](https://developer.android.com/develop/ui/views/notifications/notification-permission), [APPLE-NOTIFY](https://developer.apple.com/design/human-interface-guidelines/notifications)
