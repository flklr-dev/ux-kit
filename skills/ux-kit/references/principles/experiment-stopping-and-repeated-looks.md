---
id: UX-RESEARCH-007
name: Experiment Stopping and Repeated Looks
category: heuristic
source_ids:
- MAHARAJ-STOPPING
domain: research-and-evaluation
aliases: []
feature_tags:
- dashboards-tables
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Choose a stopping and inference protocol before interpreting repeated looks; fixed-horizon and sequential procedures have different assumptions.

**Signals:** A test stops on the first favorable ordinary p-value or extends only after an unfavorable result.

**Interventions:** Use a prespecified valid fixed-horizon plan or an appropriate sequential procedure; record deviations, safety stops and decision rules.

**Limits:** Monitoring safety is not the same as a valid benefit claim. Bayesian/sequential labels do not remove model/prior/asymptotic assumptions.

**Example:** A checkout test records its planned analysis and reports an early safety halt without claiming a proven conversion win.

**Validation:** Inspect planned versus actual looks, stopping, exclusions and inference method with qualified statistical review.

**Counterexample:** Blindly forbidding any early stop can ignore genuine harm; stop for safety while qualifying inference.

**Conflicts:** Protect users and preserve inference honesty rather than chase a significance threshold.

**Evidence boundary:** Original paper Introduction/Related Work inspected; no formula/proof implementation certified and no universal test recommendation supplied.

**Useful when:** Choose and respect a defensible experiment analysis protocol.

Sources: [MAHARAJ-STOPPING](https://arxiv.org/html/2302.10108v1)
