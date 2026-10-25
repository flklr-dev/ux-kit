---
id: UX-USE-002
name: Match Between System and Real World
category: heuristic
source_ids:
- NNG-REALWORLD
domain: usability-and-control
aliases: []
feature_tags:
- settings-privacy
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Use the audience's task terms and meaningful sequence instead of implementation vocabulary.

**Signals:** A customer-facing export uses queue IDs and shard codes as its only explanation.

**Interventions:** Translate technical state into an accurate task explanation and preserve technical details when useful.

**Limits:** Familiar wording must not conceal materially different service behavior.

**Example:** A scheduled backup shows the user's time zone and next run, with technical logs available separately.

**Validation:** Ask users to explain what happens and when; compare with actual service behavior.

**Counterexample:** Calling an irreversible deletion Archive uses a familiar word with the wrong outcome.

**Conflicts:** Resolve familiarity against truthful scope and audience-specific vocabulary.

**Evidence boundary:** First-party language/order heuristic inspected; no verified vocabulary match for this audience is assumed.

**Useful when:** Use concepts and ordering users recognize from their task.

Sources: [NNG-REALWORLD](https://www.nngroup.com/articles/match-system-real-world/)
