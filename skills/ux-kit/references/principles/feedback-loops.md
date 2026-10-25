---
id: UX-INTERACT-008
name: Feedback Loops
category: heuristic
source_ids:
- NNG-HEURISTICS
domain: targeting-and-interaction
aliases: []
feature_tags:
- uploads-background
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** An action needs feedback tied to its actual state so the person can decide what to do next.

**Signals:** Save starts work without acknowledgment, then a stale success message remains after failure.

**Interventions:** Distinguish received, pending, confirmed, failed and unknown states using trustworthy service evidence.

**Limits:** Optimistic feedback must remain reconcilable; a spinner is not proof of completion.

**Example:** An upload acknowledges selection immediately and shows Saved only after confirmation, preserving failed files for retry.

**Validation:** Exercise slow, failed and mixed responses; check whether each message matches actual effects.

**Counterexample:** An instant success toast followed by silent data loss gives fast but false feedback.

**Conflicts:** Prefer truthful state over a responsiveness target or celebratory animation.

**Evidence boundary:** Status heuristic is inspected guidance; this state protocol is original engineering practice, not a source-prescribed algorithm.

**Useful when:** Show a meaningful response after a user action.

Sources: [NNG-HEURISTICS](https://www.nngroup.com/articles/ten-usability-heuristics/)
