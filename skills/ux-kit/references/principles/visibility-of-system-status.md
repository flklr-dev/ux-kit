---
id: UX-USE-001
name: Visibility of System Status
category: heuristic
source_ids:
- NNG-SYSTEM-STATUS
domain: usability-and-control
aliases: []
feature_tags:
- uploads-background
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Give people enough current-state information to decide whether to wait, continue or recover.

**Signals:** The interface cannot distinguish a local draft from a server-confirmed save.

**Interventions:** Expose relevant state near the work and keep it available after transient feedback disappears.

**Limits:** Not every internal event needs an alert; status must be backed by real state.

**Example:** A report indicates Last saved to this device while an upload is pending.

**Validation:** Inspect state transitions across save, interruption and reconnection; compare claims with stored results.

**Counterexample:** A permanent global spinner gives activity without saying which work is safe.

**Conflicts:** Resolve transparency against noise, preserving control and actual storage meaning.

**Evidence boundary:** First-party status heuristic inspected; storage-state mapping is original practice requiring execution checks.

**Useful when:** Make saves and background work understandable.

Sources: [NNG-SYSTEM-STATUS](https://www.nngroup.com/articles/visibility-system-status/)
