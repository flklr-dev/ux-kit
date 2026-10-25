---
id: UX-TRUST-010
name: Accountability and Transaction History
category: heuristic
source_ids:
- GOV-CONFIRM
domain: commerce-and-trust
aliases: []
feature_tags:
- checkout-payments
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** People may need to return later to understand a prior transaction and who is responsible for its next step.

**Signals:** A receipt disappears after dismissal and support cannot identify the earlier action.

**Interventions:** Provide an appropriate authorized history/record with actual references, status and correction/help routes.

**Limits:** Protect sensitive records and use the real retention/access policy; history is not permission to expose other users' data.

**Example:** A purchaser can reopen a saved order record and see its current fulfillment state rather than relying on a transient toast.

**Validation:** Return through bookmark/account routes, check ownership and inspect completed, pending and changed records.

**Counterexample:** A confirmation page that blindly replays payment on revisit creates a new effect instead of traceability.

**Conflicts:** Balance continuity with privacy, authoritative updates and replay prevention.

**Evidence boundary:** Official confirmation/bookmark guidance inspected; later transaction traceability is an original extension distinct from immediate acknowledgment.

**Useful when:** Make earlier service actions and ownership traceable.

Sources: [GOV-CONFIRM](https://design-system.service.gov.uk/patterns/confirmation-pages/)
