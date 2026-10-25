---
id: UX-PERMISSION-001
name: Contextual Permissions and Denial
category: platform
source_ids:
- ANDROID-PERMISSIONS
domain: native-mobile-and-resilience
aliases: []
feature_tags:
- onboarding-permissions
platforms:
- android
related_ids: []
---
**Explanation:** Android guidance recommends contextual requests and graceful degradation after denial. Apply the user-agency principle with the actual target platform's APIs.

**Useful when:** Location, camera, photos, contacts and optional reminders.

**Signals:** Startup blocks unrelated features until every permission is granted.

**Interventions:** Request only access required by the initiated feature; preserve permission-free tasks and explain denial recovery.

**Limits:** This source establishes Android guidance, not an Apple API requirement. Verify iOS and selected-item picker conventions before specifying access scope.

**Example:** Ask for location on Start recording while leaving trail browsing available.

**Validation:** Check granted, denied, revoked and return-from-settings paths on the target platform.

**Evidence boundary:** Official Android request guidance inspected; iOS APIs and real device denial behavior require separate verification.

**Counterexample:** A camera-only capture action genuinely cannot take a new photo after camera denial; explain alternatives without claiming it still works.

**Conflicts:** Separate optional permissions from true feature dependencies, using the target OS behavior.

Sources: [ANDROID-PERMISSIONS](https://developer.android.com/training/permissions/requesting)
