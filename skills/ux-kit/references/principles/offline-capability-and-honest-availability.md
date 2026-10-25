---
id: UX-MOBILE-007
name: Offline Capability and Honest Availability
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
**Explanation:** Offline availability should reflect which reads/writes the app truly supports and where data is currently safe.

**Signals:** A note app blocks all local editing without network or says Synced when changes exist only locally.

**Interventions:** Expose supported local capabilities, stale/network-dependent limits and queued/confirmed states; preserve critical work using the approved data layer.

**Limits:** Offline-first does not mean every operation is writable offline or that a queue has synchronized.

**Example:** A field note remains editable locally and distinguishes Saved on device from confirmed shared synchronization.

**Validation:** Disconnect, read/edit, restart and reconnect on the actual app; inspect durable content and sync outcomes.

**Counterexample:** Allowing an offline payment to look confirmed misrepresents a network-dependent commitment.

**Conflicts:** Honest state and recovery outweigh blanket availability or instant-success claims.

**Evidence boundary:** Official Android read/write/source strategy inspected; implementation, cross-OS behavior and durability require separate testing.

**Useful when:** Explain which operations remain possible without a connection.

Sources: [ANDROID-OFFLINE](https://developer.android.com/topic/architecture/data-layer/offline-first)
