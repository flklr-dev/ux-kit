---
id: UX-USE-004
name: Error Prevention
category: heuristic
source_ids:
- NNG-SLIPS
domain: usability-and-control
aliases: []
feature_tags:
- ai-review-bulk
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Inspect how the interface makes a consequential slip or mistaken interpretation possible before blaming the operator.

**Signals:** Test and live actions share nearly identical labels in the same menu.

**Interventions:** Differentiate scope and consequences, constrain invalid states and use review or reversibility proportional to risk.

**Limits:** A generic confirmation can become habitual and cannot fix a misleading model by itself.

**Example:** A bulk archive preview shows selected record IDs and excludes already archived records.

**Validation:** Attempt wrong-target, repeated and empty actions; inspect actual service effects and recovery.

**Counterexample:** Confirming every harmless format change trains people to dismiss dialogs.

**Conflicts:** Balance prevention against efficient authorized work and meaningful control.

**Evidence boundary:** First-party slip/mistake guidance inspected; the application protocol is original engineering practice.

**Useful when:** Prevent a consequential mistake before committing it.

Sources: [NNG-SLIPS](https://www.nngroup.com/articles/slips/)
