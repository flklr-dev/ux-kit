# Offline Sync

Identify the approved source of truth, local durability, network-dependent operations and conflict policy. Distinguish transient screen state from durable user content.

**Inspect:** What remains possible offline? Is saved-on-device distinct from synchronized? What happens after process loss or competing edits? Can a person recover without silently overwriting another version?

**Exercise:** Disconnect during reads/writes, restart, reconnect in different orders, create competing versions and inspect final stored state. Exercise real native lifecycle on target devices when available; label simulation limits.

**Preserve and resolve:** No universal last-write-wins or automatic merge is safe for every record. Preserve defensible recovery and actual ownership rules rather than inventing conflict policy; explicit discard and privacy may limit retention.

**Select references:** Start with one or two entries for the unresolved decision; this list is a lookup, not a required reading bundle.

- [Application Interruption and Restoration](../principles/application-interruption-and-restoration.md) — Resume an interrupted native task with meaningful context.
- [Offline Capability and Honest Availability](../principles/offline-capability-and-honest-availability.md) — Explain which operations remain possible without a connection.
- [Synchronization Conflict Resolution](../principles/synchronization-conflict-resolution.md) — Explain conflicting changes and preserve a defensible recovery path.
- [Preserve Usable Work During Correction](../principles/preserve-work.md) — Keep valid values after a failed form submission.
- [Completed, Failed and Unknown Outcomes](../principles/partial-outcomes.md) — Reconcile partial outcomes before retrying consequential work.
- [Back Navigation and State Retention](../principles/back-navigation-and-state-retention.md) — Return to the previous list without losing its useful state.

**Report:** State the observed difficulty, smallest fitting change, tradeoff and actual checks. Separate source inspection, execution, browser/device evidence and human research. Do not invent a finding or claim an unmeasured benefit.
