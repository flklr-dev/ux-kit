---
id: UX-RESEARCH-008
name: Metrics and Guardrails
category: heuristic
source_ids:
- MS-EXPERIMENT
domain: research-and-evaluation
aliases: []
feature_tags:
- dashboards-tables
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Success measurement should cover the task and material regressions, including whether the measurement itself is trustworthy.

**Signals:** More Apply clicks are called success while duplicate effects and correction effort rise.

**Interventions:** Define meaningful task outcomes, fitting guardrails and data-quality checks before comparison; keep resource use secondary to effectiveness when that is the objective.

**Limits:** A metric is a proxy and can be gamed; a larger number is not automatically better.

**Example:** An assistant comparison records correct accepted effects, preserved edits, false findings and safe recovery alongside task completion.

**Validation:** Inspect raw traces and effects, missing data and regressions by mode/audience, not only an aggregate preference.

**Counterexample:** A faster completion metric can reward skipping needed review.

**Conflicts:** Task success, consequence and evidence quality govern the metric set.

**Evidence boundary:** First-party experimentation metric guidance inspected; the assistant measure set is original application, with no business outcome claim.

**Useful when:** Measure task success alongside regressions and harmful tradeoffs.

Sources: [MS-EXPERIMENT](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/)
