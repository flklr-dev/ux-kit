---
id: UX-INTERACT-010
name: Pointer Cancellation
category: standard
source_ids:
- WCAG-POINTER
domain: targeting-and-interaction
aliases: []
feature_tags:
- forms-editing
platforms:
- web
related_ids: []
---
**Explanation:** WCAG 2.5.2 Level A gives alternatives for single-pointer web functions to avoid unwanted down-event commitment.

**Signals:** A destructive action executes immediately on pointerdown with no applicable exception or reversal.

**Interventions:** Prefer ordinary device-independent click behavior; inspect abort, undo, up-reversal or essential alternatives for custom interactions.

**Limits:** The criterion has multiple alternatives and an essential exception; it does not require confirmation for every click.

**Example:** A row's Remove button lets a pointer press move away before release without deleting the row.

**Validation:** Press, move outside and release; verify no effect. Test normal activation and keyboard operation separately.

**Counterexample:** A musical keyboard may need essential down-event activation; blanket release-only behavior can break its function.

**Conflicts:** Use the actual criterion scope; generic cancellation advice must not erase its alternatives.

**Evidence boundary:** Criterion and informative Understanding guidance inspected; native API behavior and full WCAG conformance are not established by this entry.

**Useful when:** Let users avoid committing an accidental pointer action.

Sources: [WCAG-POINTER](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html)
