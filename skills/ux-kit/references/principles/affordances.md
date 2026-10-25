---
id: UX-INTERACT-004
name: Affordances
category: heuristic
source_ids:
- NORMAN-AFFORDANCE
domain: targeting-and-interaction
aliases: []
feature_tags:
- forms-editing
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Separate the action actually available to this actor from the cue suggesting it. A visual affordance claim does not prove functional access.

**Signals:** An edit-looking amount cannot be changed by keyboard or by a user lacking permission.

**Interventions:** Choose controls that support the real interaction and expose relevant availability; verify each input method.

**Limits:** An action possibility depends on actor, device and permission; appearance alone is insufficient.

**Example:** An invoice amount uses a real editable control when authorized and clearly labeled read-only text otherwise.

**Validation:** Exercise editing by keyboard and pointer under relevant permissions, then inspect the persisted result.

**Counterexample:** A drag handle drawn on an immovable row advertises an unavailable operation.

**Conflicts:** Pair actual capability with truthful signifiers and semantics.

**Evidence boundary:** Norman's own conceptual account inspected; the control implementation is an original application, not an empirical guarantee.

**Useful when:** Choose controls whose available interaction fits the task.

Sources: [NORMAN-AFFORDANCE](https://jnd.org/affordances-and-design/)
