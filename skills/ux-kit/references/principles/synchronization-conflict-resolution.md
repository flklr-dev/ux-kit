---
id: UX-MOBILE-008
name: Synchronization Conflict Resolution
category: platform
source_ids:
- ANDROID-OFFLINE
domain: native-mobile-and-resilience
aliases: []
feature_tags:
- offline-sync
platforms:
- android
related_ids: []
---
**Explanation:** Concurrent local and remote changes need an explicit resolution policy that users can understand for consequential conflicts.

**Signals:** Reconnection silently replaces one person's edited report with another version.

**Interventions:** Inspect version/identity and service rules; preserve defensible recovery copies and expose conflicts when automatic resolution is unjustified.

**Limits:** No universal last-write-wins or merge policy is prescribed. Timestamps alone may not express intent or safe ordering.

**Example:** Two edited inspection notes are retained for review until the approved conflict rule resolves them.

**Validation:** Create competing offline edits, reconnect in different orders and verify final authoritative data and recoverability.

**Counterexample:** Blindly preferring the newest timestamp can erase a more complete earlier edit.

**Conflicts:** Balance simple synchronization against data loss, privacy and actual ownership/approval rules.

**Evidence boundary:** Official synchronization/conflict strategies inspected; the user-facing recovery policy is original application and must match the service.

**Useful when:** Explain conflicting changes and preserve a defensible recovery path.

Sources: [ANDROID-OFFLINE](https://developer.android.com/topic/architecture/data-layer/offline-first)
