---
id: UX-INTERACT-007
name: Constraints
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
**Explanation:** Constraints can restrict available actions or communicate learned rules. Use them to prevent invalid states while explaining recoverable conditions.

**Signals:** A disabled Submit button gives no reason and no route to completing the missing requirement.

**Interventions:** Expose prerequisites and error locations; distinguish impossible, unauthorized and temporarily unavailable actions.

**Limits:** A constraint must not silently erase entered data or make correction unreachable.

**Example:** A booking retains the entered date and explains that the chosen room is unavailable, offering valid alternatives.

**Validation:** Attempt invalid combinations and verify the reason, retained work and correction path.

**Counterexample:** Silently changing the date creates a valid booking the user did not request.

**Conflicts:** Resolve prevention against control and understandable recovery.

**Evidence boundary:** Norman discusses physical, logical and cultural constraints; booking validation is an explicitly original extension, not a source requirement.

**Useful when:** Prevent impossible combinations without hiding the reason.

Sources: [NORMAN-AFFORDANCE](https://jnd.org/affordances-and-design/)
