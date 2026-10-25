# Checkout Payments

Trace actual cost components, selected items and the commitment action. Use product-supplied payment, tax, refund and fulfillment facts; unknown facts need resolution.

**Inspect:** Can users explain what is charged now and later? Are units/periods comparable? Do discounts or evidence claims have an actual basis? Does a guest/account route support later access?

**Exercise:** Test quantity/option changes, invalid payment, pending/double activation, timeout after acceptance, confirmed receipt and revisit. Inspect authoritative results before retry; never infer payment failure from a timeout alone.

**Preserve and resolve:** Keep necessary comparison and review visible even when a shorter funnel is desirable. A receipt after commitment cannot repair hidden charges beforehand. No legal-compliance or refund-rights claim follows from this guide.

**Commitment specification:** For each payment entry point, including an existing wallet, specify the facts visible before authorization: exact payable amount, selected fulfillment choice and its timing consequence, authorization versus capture, and material supplied policy terms/exceptions. If tax or another component is unresolved, label the partial amount and define how every payment path waits for the exact total. Keep availability, dispatch and transit copy consistent with the selected ship-together or split option; an in-stock item can still wait for another item. Show a concise supplied returns window/conditions/costs/exception summary with a support route; link longer details. Unknown policy facts remain unresolved, not invented. Trace wireframe buttons and prose through the same prerequisites.

**Selected-state copy:** Specify item-level dispatch text for the selected fulfillment state, and what that text becomes if the option changes. Separate stock availability from permission/readiness to dispatch; an unconditional fast-dispatch promise can contradict a ship-together summary elsewhere. Read item rows, delivery summary and commitment copy together for each available option. Do not add uncertain dispatch/transit estimates into a guaranteed arrival date.

**Amount handoff:** Compute and show the sum of all known selected charges even while other fees are unresolved. For example, items30plus a selected6delivery upgrade gives a known subtotal36; name the still-missing base delivery/service fees alongside it. Neither items30alone nor an unevaluated “30+6” replaces the subtotal. When the remaining fees resolve, compute the complete total and use the familiar final-total label. Expose that total before authorization using the supplied review/commitment path; collecting payment details is not itself permission to charge an unknown amount.

**Select references:** Start with one or two entries for the unresolved decision; this list is a lookup, not a required reading bundle.

- [Total-Cost Transparency](../principles/total-cost-transparency.md) — Reveal the actual total before a purchase commitment.
- [Units, Baselines and Data Context](../principles/units-baselines-and-data-context.md) — Show what a metric measures and what it is compared with.
- [Check Answers Before Commitment](../principles/check-answers-before-commitment.md) — Allow correction of consequential information before sending it.
- [Transaction Confirmation and Receipts](../principles/transaction-confirmation-and-receipts.md) — Explain a confirmed transaction and its immediate next steps.
- [Guest Checkout and Account Choice](../principles/guest-checkout-and-account-choice.md) — Match account requirements to the service rather than forced registration.
- [Trust and Claim Verifiability](../principles/trust-and-claim-verifiability.md) — Support consequential claims with inspectable evidence.
- [Truthful Scarcity and Social Proof](../principles/truthful-scarcity-and-social-proof.md) — Avoid manufactured pressure and unverifiable endorsements.
- [Completed, Failed and Unknown Outcomes](../principles/partial-outcomes.md) — Reconcile partial outcomes before retrying consequential work.
- [Action-State Guards](../principles/action-state-guards.md) — Handle pending, overlapping and empty actions without duplicate effects.
- [Hick–Hyman Law](../principles/hick-hyman-law.md) — Structure a genuinely difficult plan-selection decision.
- [Choice Overload](../principles/choice-overload.md) — Investigate overwhelming unfamiliar options without deleting useful expert choices.
- [Visual Hierarchy](../principles/visual-hierarchy.md) — Prioritize decisions, supporting details and secondary actions.
- [Peak–End Rule](../principles/peak-end-rule.md) — Improve important moments and endings without neglecting intervening failures.
- [Accountability and Transaction History](../principles/accountability-and-transaction-history.md) — Make earlier service actions and ownership traceable.

**Report:** State the observed difficulty, smallest fitting change, tradeoff and actual checks. Separate source inspection, execution, browser/device evidence and human research. Do not invent a finding or claim an unmeasured benefit.
