---
id: UX-NAV-009
name: Back Navigation and State Retention
category: heuristic
source_ids:
- GOV-BACK
- GOV-QUESTIONS
domain: information-architecture-and-navigation
aliases: []
feature_tags:
- search-filtering
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Returning from a detail or correction should retain useful previous context when the task expects continuation.

**Signals:** Back drops filters and scroll position, forcing a repeated search.

**Interventions:** Restore the relevant query, selection and position, while checking stale or already-committed state.

**Limits:** Never replay a purchase or privileged operation merely to restore a view.

**Example:** After reviewing one dispatch job, Back returns to the prior filtered job list and useful position.

**Validation:** Filter, open, return and repeat through browser/app Back; verify state and no repeated service effect.

**Counterexample:** After payment, returning to an editable checkout must not trigger another charge.

**Conflicts:** Balance continuity with fresh authoritative data and commitment safety.

**Evidence boundary:** Official Back/state guidance inspected; list-position restoration is original application, not a browser implementation guarantee.

**Useful when:** Return to the previous list without losing its useful state.

Sources: [GOV-BACK](https://design-system.service.gov.uk/components/back-link/), [GOV-QUESTIONS](https://design-system.service.gov.uk/patterns/question-pages/)
