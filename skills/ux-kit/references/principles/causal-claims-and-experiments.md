---
id: UX-RESEARCH-006
name: Causal Claims and Experiments
category: heuristic
source_ids:
- MS-EXPERIMENT
- MAHARAJ-STOPPING
domain: research-and-evaluation
aliases: []
feature_tags:
- dashboards-tables
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** A plausible improvement, before/after change and randomized controlled effect are different claims.

**Signals:** A team attributes higher sales to a redesign introduced alongside a campaign.

**Interventions:** State the causal question, use an appropriate comparison/randomization design and inspect data quality, exposure and uncertainty.

**Limits:** Randomization alone does not fix logging, interference, selection or stopping errors. A usability rationale is not a measured business lift.

**Example:** A form experiment defines successful valid requests and recovery errors before comparing eligible randomized groups.

**Validation:** Check assignment/exposure, balance, outcome definitions and a predeclared analysis appropriate to the design.

**Counterexample:** A favorable aggregate trend can be caused by changing audience mix.

**Conflicts:** Evidence discipline and guardrails govern causal language, not confidence in a named principle.

**Evidence boundary:** First-party experimentation guidance and original paper framing inspected; no statistical implementation or causal result for UX Kit established.

**Useful when:** Distinguish a plausible design improvement from a proven causal outcome.

Sources: [MS-EXPERIMENT](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/), [MAHARAJ-STOPPING](https://arxiv.org/html/2302.10108v1)
