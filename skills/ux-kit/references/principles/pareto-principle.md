---
id: UX-MOTIVE-007
name: Pareto Principle
category: heuristic
source_ids:
- LUX-PARETO
domain: motivation-and-complexity
aliases: []
feature_tags:
- dashboards-tables
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Use actual task frequency and impact to prioritize; an uneven distribution is a question for data, not an assumed ratio.

**Signals:** A roadmap drops rare recovery paths because most traffic uses the happy path.

**Interventions:** Rank observed tasks together with failure severity, excluded audiences and unmet needs.

**Limits:** Do not invent an eighty/twenty split or neglect rare consequential failures.

**Example:** Frequent note editing stays efficient while rare conflict recovery remains accessible and tested.

**Validation:** Inspect representative use, incidents and affected audiences; document prioritization tradeoffs.

**Counterexample:** An infrequent cancellation path may matter greatly to the people needing it.

**Conflicts:** Accessibility, severe harm and contractual service behavior cannot be dismissed by frequency alone.

**Evidence boundary:** Popular prioritization account inspected; no empirical ratio is claimed for this product.

**Useful when:** Use observed task frequency rather than assume an 80/20 split.

Sources: [LUX-PARETO](https://lawsofux.com/pareto-principle/)
