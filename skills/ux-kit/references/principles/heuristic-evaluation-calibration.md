---
id: UX-RESEARCH-004
name: Heuristic Evaluation Calibration
category: heuristic
source_ids:
- NNG-SEVERITY
- WAI-TOOLS
domain: research-and-evaluation
aliases: []
feature_tags:
- dashboards-tables
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Prioritize the user consequence and recovery separately from confidence that a problem exists.

**Signals:** A plausible screenshot concern is labeled critical with the certainty of an executed failure.

**Interventions:** Record location, consequence, available evidence, affected context and verification; use severity categories meaningfully, without a finding quota.

**Limits:** A heuristic review is not a usability study or conformance verdict. Missing evidence is not a defect.

**Example:** An observed unrecoverable loss is prioritized above a speculative alignment issue, while uncertainty is explicit.

**Validation:** Reproduce the interaction where possible and calibrate independent ratings against concrete task effects.

**Counterexample:** A severe hypothetical issue should not be reported as observed merely because the consequence would be serious.

**Conflicts:** Balance impact, frequency/persistence and evidence confidence; preserve functioning behavior.

**Evidence boundary:** Severity factors/tool limits inspected; UX Kit's confidence separation is original method, not a universal scoring standard.

**Useful when:** Separate problem impact from evaluator confidence.

Sources: [NNG-SEVERITY](https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/), [WAI-TOOLS](https://www.w3.org/WAI/test-evaluate/tools/selecting/)
