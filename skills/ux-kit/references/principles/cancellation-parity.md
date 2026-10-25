---
id: UX-TRUST-006
name: Cancellation Parity
category: heuristic
source_ids:
- FTC-DARK-PATTERNS
- NNG-CONTROL
domain: commerce-and-trust
aliases: []
feature_tags:
- subscriptions-cancellation
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Ending an ongoing service needs an understandable reachable path and truthful result.

**Signals:** A subscription can be started online but its end path is hidden or repeatedly redirects to retention offers.

**Interventions:** Expose the real management path, distinguish canceling recurrence from deleting data and confirm the actual effective state.

**Limits:** Parity is a UX goal, not a claim that every cancellation must have identical steps or that a refund is owed.

**Example:** A membership page lets the user find End renewal and see the actual service end state without misleading labels.

**Validation:** Attempt the full path, decline optional retention and verify recurrence status and preserved account access as applicable.

**Counterexample:** A button labeled Cancel that only closes a retention dialog misrepresents the outcome.

**Conflicts:** Resolve business retention goals against user control and actual service consequences.

**Evidence boundary:** Report/control guidance inspected; no jurisdiction-specific cancellation rule or right is asserted.

**Useful when:** Make ending a service understandable and reasonably reachable.

Sources: [FTC-DARK-PATTERNS](https://www.ftc.gov/system/files/ftc_gov/pdf/P214800%20Dark%20Patterns%20Report%209.14.2022%20-%20FINAL.pdf), [NNG-CONTROL](https://www.nngroup.com/articles/user-control-and-freedom/)
