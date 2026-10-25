---
id: UX-PERCEPT-005
name: Uniform Connectedness
category: heuristic
source_ids:
- LUX-CONNECTED
domain: perception-and-grouping
aliases: []
feature_tags:
- onboarding-permissions
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** A connecting line can imply a relationship or sequence. Ensure that relationship is true.

**Signals:** A line joins optional notification setup to required account verification.

**Interventions:** Connect only genuinely dependent steps and label optional branches explicitly.

**Limits:** A connector is not a substitute for text or accessible sequence; chronology and dependency differ.

**Example:** A setup diagram separates optional reminders from the required identity path so denial does not appear to block progress.

**Validation:** Ask users to explain which steps are required and test the actual denial path.

**Counterexample:** Connecting independent tasks implies that all must finish before use.

**Conflicts:** Resolve visual grouping against task independence and honest permission choice.

**Evidence boundary:** The inspected editorial synthesis supports a qualified grouping question; it does not prove comprehension in this diagram.

**Useful when:** Connect related steps without implying a false dependency.

Sources: [LUX-CONNECTED](https://lawsofux.com/law-of-uniform-connectedness/)
