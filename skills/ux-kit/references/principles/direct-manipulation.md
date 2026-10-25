---
id: UX-INTERACT-009
name: Direct Manipulation
category: heuristic
source_ids:
- SHNEIDERMAN-DIRECT
domain: targeting-and-interaction
aliases: []
feature_tags:
- forms-editing
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Represent the object being changed and make incremental effects understandable and reversible where appropriate.

**Signals:** A board moves tasks through an opaque command with no visible result or recovery.

**Interventions:** Keep the affected object visible, show the result and offer a suitable reversal plus non-drag controls.

**Limits:** Direct manipulation is a framework, not a universal replacement for commands or expert automation.

**Example:** A task board previews a move, supports a labeled Move action and offers undo after a reversible change.

**Validation:** Move the same task with pointer and keyboard; verify location, undo and persistence.

**Counterexample:** Forcing experts to drag hundreds of records removes a useful bulk command.

**Conflicts:** Preserve efficient expert paths and access alternatives alongside direct interaction.

**Evidence boundary:** Author's framework summary inspected; original 1983 paper and comparative performance were not verified.

**Useful when:** Support understandable editing with visible objects and reversible changes.

Sources: [SHNEIDERMAN-DIRECT](https://www.cs.umd.edu/~ben/about.html)
