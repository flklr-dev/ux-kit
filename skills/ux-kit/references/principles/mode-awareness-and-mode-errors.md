---
id: UX-USE-008
name: Mode Awareness and Mode Errors
category: heuristic
source_ids:
- NNG-SLIPS
domain: usability-and-control
aliases: []
feature_tags:
- dashboards-tables
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** If the same input means different things in different states, make the current mode understandable and escapable.

**Signals:** A row click silently changes from opening a record to selecting it for deletion.

**Interventions:** Expose the mode, selected scope and exit; keep dangerous effects behind their actual commitment action.

**Limits:** Not every state needs a banner; show information that changes the meaning of an action.

**Example:** Bulk-select mode shows the selected count and an Exit selection control, while Delete names the commitment.

**Validation:** Enter, act in and exit the mode by keyboard and pointer; inspect unintended effects after navigation.

**Counterexample:** Using a full-screen warning for ordinary text selection adds noise without resolving ambiguity.

**Conflicts:** Balance mode visibility with useful density and predictable action semantics.

**Evidence boundary:** Slip/mistake heuristic is the inspected foundation; this mode-review method is original practice, not a verified empirical diagnosis.

**Useful when:** Show whether the same control currently navigates, selects or edits.

Sources: [NNG-SLIPS](https://www.nngroup.com/articles/slips/)
