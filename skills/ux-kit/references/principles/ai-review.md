---
id: UX-AI-001
name: Consequential AI Review
category: heuristic
source_ids:
- MS-HAI
- GOV-CHECK
domain: human-ai-and-agency
aliases: []
feature_tags:
- ai-review-bulk
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Human–AI guidance considers normal use and inevitable errors; check-answers patterns support reviewing information before commitment. This entry applies those ideas to agent actions.

**Useful when:** Sending, changing, purchasing, deleting or bulk-processing on someone's behalf.

**Signals:** The agent obscures targets or turns uncertain results into a success/failure claim.

**Interventions:** Show actual intended action, targets and consequences; follow existing authorization, allow correction and report each outcome accurately.

**Limits:** Not every reversible low-impact action needs a new confirmation. A review screen cannot grant missing authority or implement rollback.

**Example:** Review the selected archive targets, then distinguish completed, rejected and unknown results.

**Validation:** Try correction, denial, interruption and partial completion against actual tool behavior.

**Evidence boundary:** Only the Microsoft project summary was inspected, not its full CHI evaluation. The check-answers pattern is a separate service pattern; agent review is original synthesis.

**Counterexample:** Reconfirming every harmless reversible formatting suggestion can obstruct an already authorized task.

**Conflicts:** Follow host authority and consequence, preserve edits, and distinguish reviewability from an unnecessary approval ceremony.

Sources: [MS-HAI](https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/), [GOV-CHECK](https://design-system.service.gov.uk/patterns/check-answers/)
