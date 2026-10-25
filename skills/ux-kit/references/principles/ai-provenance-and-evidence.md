---
id: UX-AI-003
name: AI Provenance and Evidence
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
**Explanation:** Evidence should help a person inspect a consequential AI-generated claim and distinguish source material from generated inference.

**Signals:** A broad citation is shown beside a paragraph containing unsupported conclusions.

**Interventions:** Link relevant claims to inspectable support and state missing provenance; keep actual tool evidence distinct from model narration.

**Limits:** A citation is not proof that the source supports the claim; private evidence must remain access-controlled.

**Example:** A draft maintenance recommendation points to the exact supplied observation and labels its suggested next action as inference.

**Validation:** Trace sampled claims to actual source passages/tool results and inspect scope, contradictions and access.

**Counterexample:** A real source link can lend false credibility to an unrelated generated number.

**Conflicts:** Evidence integrity and privacy govern how much detail is surfaced and who can open it.

**Evidence boundary:** HAI explanation framework informs this original provenance practice; modern citation correctness was not validated by that study.

**Useful when:** Make source and generation provenance useful to inspect.

Sources: [MS-HAI-PAPER](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf)
