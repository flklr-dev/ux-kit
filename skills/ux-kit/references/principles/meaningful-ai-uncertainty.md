---
id: UX-AI-002
name: Meaningful AI Uncertainty
category: heuristic
source_ids:
- MS-HAI-PAPER
domain: human-ai-and-agency
aliases: []
feature_tags:
- ai-review-bulk
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Communicate limitations in terms useful to the decision instead of attaching unsupported confidence numbers.

**Signals:** An assistant shows99.9% certainty without a validated method or hides unknown tool outcomes.

**Interventions:** Explain what is known, what may be wrong and what evidence/review is useful; omit uncalibrated precision.

**Limits:** A generic disclaimer does not make a wrong consequential action safe; model likelihood is not automatically task correctness.

**Example:** A suggested report amount identifies missing source evidence and stays editable before authorized application.

**Validation:** Test plausible errors, missing context and unknown outcomes; inspect whether reviewers can make an informed correction.

**Counterexample:** Hedging every harmless formatting suggestion can add noise without improving the decision.

**Conflicts:** Match disclosure and review effort to consequence while preserving useful agency.

**Evidence boundary:** Original HAI capability/error/scoping framework inspected; no confidence calibration or causal reliance improvement established.

**Useful when:** Explain uncertainty in terms relevant to the user’s decision.

Sources: [MS-HAI-PAPER](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf)
