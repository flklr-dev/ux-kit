---
id: UX-TRUST-003
name: Transaction Confirmation and Receipts
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
**Explanation:** A confirmed transaction needs an understandable outcome and next step, supported by the real service result.

**Signals:** A generic success screen gives no indication what was purchased or what happens next.

**Interventions:** Show the confirmed transaction and available reference/receipt, relevant timing and recovery/contact route.

**Limits:** Do not fabricate reference IDs, delivery promises or a confirmed payment from an unresolved timeout.

**Example:** A successful equipment order shows its actual order reference and a route to its saved details.

**Validation:** Complete, refresh and return to confirmation; verify the record and avoid repeat submission.

**Counterexample:** A success receipt after a timeout can conceal an unknown payment outcome.

**Conflicts:** Reconcile actual state before celebrating completion; preserve accessible return paths.

**Evidence boundary:** Official confirmation pattern inspected, including its known wider-task research gap. Commerce details are original service applications.

**Useful when:** Explain a confirmed transaction and its immediate next steps.

Sources: [GOV-CONFIRM](https://design-system.service.gov.uk/patterns/confirmation-pages/)
