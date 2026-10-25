---
id: UX-AI-007
name: AI Data Use and Disclosure
category: heuristic
source_ids:
- MS-HAI-PAPER
- FTC-DARK-PATTERNS
domain: human-ai-and-agency
aliases: []
feature_tags:
- settings-privacy
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Explain relevant assistance data use before a consequential choice, using the service's actual policy and controls.

**Signals:** A private draft is sent externally under an unexplained Improve text action.

**Interventions:** Clarify relevant destination/use and available control, minimizing unnecessary disclosure and preserving the user's task.

**Limits:** Do not invent retention, training exclusion or confidentiality promises; legal compliance needs its own verified basis.

**Example:** An editor explains when selected text leaves the device and offers the real supported local/manual alternative.

**Validation:** Trace actual data flows and settings; check that explanation, scope and persisted choices agree.

**Counterexample:** A broad privacy link cannot fix an action label that implies a local edit while sending the whole workspace.

**Conflicts:** Transparency and data minimization govern assistance convenience and defaults.

**Evidence boundary:** HAI global-control and report disclosure framing inspected; specific generative-AI data handling is an original application requiring service evidence.

**Useful when:** Explain relevant data handling before a consequential use of assistance.

Sources: [MS-HAI-PAPER](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf), [FTC-DARK-PATTERNS](https://www.ftc.gov/system/files/ftc_gov/pdf/P214800%20Dark%20Patterns%20Report%209.14.2022%20-%20FINAL.pdf)
