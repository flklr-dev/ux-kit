---
id: UX-MOTIVE-010
name: Tesler’s Law
category: heuristic
source_ids:
- LUX-TESLER
domain: motivation-and-complexity
aliases: []
feature_tags:
- forms-editing
platforms:
- platform-agnostic
related_ids:
- UX-CHOICE-001
---
**Explanation:** Decide who handles unavoidable task complexity and which decisions need to stay inspectable.

**Signals:** A simpler screen hides service rules but pushes their interpretation into user guesswork.

**Interventions:** Automate deterministic clerical work while showing assumptions and giving access to consequential choices.

**Limits:** This is an allocation heuristic, not a quantitatively conserved amount of complexity.

**Example:** A travel form computes a total from visible dates and rates, with an explanation of applied rules.

**Validation:** Check calculations, assumptions, corrections and exceptional cases with real tasks.

**Counterexample:** Auto-selecting an irreversible plan from an opaque rule removes controls but not the underlying decision.

**Conflicts:** Preserve useful expert comparison and user agency while absorbing mechanical work.

**Evidence boundary:** Editorial account inspected; distinct from expert-density guidance because it addresses responsibility for computation and assumptions.

**Useful when:** Decide which task complexity the system should handle and which users need visible.

Sources: [LUX-TESLER](https://lawsofux.com/teslers-law/)
