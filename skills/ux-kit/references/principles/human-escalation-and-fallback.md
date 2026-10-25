---
id: UX-AI-006
name: Human Escalation and Fallback
category: heuristic
source_ids:
- MS-HAI-PAPER
- NNG-CONTROL
domain: human-ai-and-agency
aliases: []
feature_tags:
- ai-review-bulk
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** A person needs a workable path when assistance cannot complete the chosen task.

**Signals:** An assistant repeatedly guesses after failure with no way to continue manually or obtain appropriate help.

**Interventions:** Expose relevant limits and a usable manual or human-support route, retaining context with permission where available.

**Limits:** Do not invent live human support, response times or guaranteed resolution; some tasks require a real owner decision.

**Example:** If automated classification cannot resolve a report, the user can leave it unclassified and continue a supported manual workflow.

**Validation:** Force uncertain/error states and complete the fallback task, verifying retained information and actual handoff availability.

**Counterexample:** A Contact expert button leading nowhere is reassurance without recovery.

**Conflicts:** Control and truthful service capability override a desire to keep every task inside AI.

**Evidence boundary:** HAI uncertain-scope/control guidance inspected; fallback/handoff design is original synthesis, not a source-specified escalation protocol.

**Useful when:** Provide a workable alternative when assistance cannot complete the task.

Sources: [MS-HAI-PAPER](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf), [NNG-CONTROL](https://www.nngroup.com/articles/user-control-and-freedom/)
