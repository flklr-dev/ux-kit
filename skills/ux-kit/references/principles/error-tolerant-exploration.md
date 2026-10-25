---
id: UX-LEARN-009
name: Error-Tolerant Exploration
category: heuristic
source_ids:
- NNG-CONTROL
domain: learning-and-memory
aliases: []
feature_tags:
- forms-editing
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Reversible low-cost actions can let people explore a feature while retaining control of their work.

**Signals:** Trying a formatting option irreversibly changes the document or loses the selection.

**Interventions:** Preview or allow undo for suitable changes, showing what will be affected.

**Limits:** Exploration is inappropriate for irreversible external effects; existing authorization still applies.

**Example:** An editor previews a heading style and lets users revert without rebuilding the document.

**Validation:** Try, reverse and repeat a change; inspect content, selection and undo history.

**Counterexample:** Sending a client invoice cannot be made harmless by calling the interface a playground.

**Conflicts:** Match reversibility to actual service effects, preserving efficient ordinary editing.

**Evidence boundary:** Control heuristic inspected; learning benefits remain a task hypothesis, not a measured causal result.

**Useful when:** Let users learn an editor through low-cost reversible actions.

Sources: [NNG-CONTROL](https://www.nngroup.com/articles/user-control-and-freedom/)
