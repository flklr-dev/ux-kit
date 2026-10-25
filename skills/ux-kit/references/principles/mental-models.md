---
id: UX-COG-005
name: Mental Models
category: heuristic
source_ids:
- LUX-MENTAL-MODEL
domain: cognition-and-choice
aliases: []
feature_tags:
- settings-privacy
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Investigate the user's explanation of ownership, state and cause before deciding how a feature should behave.

**Signals:** People expect deleting a shared calendar event to affect only their copy, while the service deletes it for everyone.

**Interventions:** Make scope and ownership visible; explain a consequential difference before commitment.

**Limits:** A metaphor is incomplete; do not imitate a familiar object where behavior differs materially.

**Example:** A shared schedule says who owns an event and whether Remove hides it locally or deletes it for the team.

**Validation:** Ask users to predict the outcome before activation, then compare their explanation with the actual result.

**Counterexample:** A trash icon that silently cancels an entire shared booking encourages the wrong prediction.

**Conflicts:** Use familiar conventions only when they communicate the real service model.

**Evidence boundary:** This is conceptual synthesis, not a measured mental model or proof about this audience; expectations require research.

**Useful when:** Make a scheduling feature match users’ expectations of time and ownership.

Sources: [LUX-MENTAL-MODEL](https://lawsofux.com/mental-model/)
