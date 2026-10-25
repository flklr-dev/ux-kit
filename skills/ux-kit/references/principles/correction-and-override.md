---
id: UX-AI-004
name: Correction and Override
category: heuristic
source_ids:
- MS-HAI-PAPER
domain: human-ai-and-agency
aliases: []
feature_tags:
- ai-review-bulk
platforms:
- platform-agnostic
related_ids:
- UX-AI-001
- UX-STATE-001
- UX-USE-006
---
**Explanation:** Let people correct undesired assistance and preserve their own work throughout the correction path.

**Signals:** Regenerating suggestions overwrites an edited proposal or the original note.

**Interventions:** Keep originals and edits distinct, allow appropriate dismissal/override and make the applied version clear.

**Limits:** Correction UI cannot guarantee the next model output is correct or grant missing service authority.

**Example:** An inspector edits a generated line, chooses it explicitly and sees that edited text applied while the original observation remains intact.

**Validation:** Edit before and during pending work, dismiss/regenerate and inspect the actual applied snapshot and preserved original.

**Counterexample:** A Regenerate button that silently replaces reviewed text reduces control despite promising improvement.

**Conflicts:** Balance assistance speed against preserved intent and actual action state.

**Evidence boundary:** Original HAI correction/dismissal guidance inspected; concurrency/version handling is original engineering application.

**Useful when:** Let people correct the system without losing their own work.

Sources: [MS-HAI-PAPER](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf)
