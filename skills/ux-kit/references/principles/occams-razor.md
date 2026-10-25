---
id: UX-MOTIVE-005
name: Occam’s Razor
category: heuristic
source_ids:
- LUX-OCCAM
domain: motivation-and-complexity
aliases: []
feature_tags:
- settings-privacy
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Prefer a design explanation with fewer unsupported assumptions when it still accounts for the task evidence.

**Signals:** A team adds a complex personalization flow before checking whether unclear labels explain the problem.

**Interventions:** Test the smallest plausible change addressing the observed difficulty and preserve needed capabilities.

**Limits:** Fewer screens or controls alone does not establish a better explanation or interface.

**Example:** A settings page clarifies three ambiguous labels before introducing a new decision wizard.

**Validation:** Compare the original difficulty and new regressions using the same task.

**Counterexample:** Removing the audit history makes a screen simpler while destroying accountability.

**Conflicts:** Task completeness and evidence outweigh abstract simplicity.

**Evidence boundary:** The source is an explanatory heuristic; this design-selection practice is original application, not a mathematical optimality claim.

**Useful when:** Prefer an explanation or design with fewer unsupported assumptions.

Sources: [LUX-OCCAM](https://lawsofux.com/occams-razor/)
