# Ai Review Bulk

Separate original user material, editable generated suggestions and actual authorized tool effects. Identify consequence and scope before changing the review flow.

**Inspect:** Are targets, edited version and selected items clear? Can users trace relevant claims to real evidence and correct/dismiss assistance? Is uncertainty useful without fabricated confidence? Does fallback exist?

**Exercise:** Exercise no selection, repeated/pending Apply, edits before/during dispatch, denial, mixed/unknown outcomes and retry. Inspect actual tool effects and preserved originals. Test plausible wrong assistance without equating a law label with an observed bias.

**Preserve and resolve:** Keep useful editable/selectable explicit review for consequential actions, while avoiding new confirmation ceremonies for harmless already-authorized edits. A review screen cannot grant missing authority, provide backend idempotency or prove citations correct.

**Unknown write contract:** Keep outcome state separate from selection. Confirmed successes leave retry scope; confirmed failures may retry; missing, malformed or thrown results remain unknown. Preserve unknown rows and newer edits for review while blocking their resend until the existing service can reconcile the result or safely replay the same idempotent operation. Editing/reselection is not reconciliation. If no such capability exists, state the blocked dependency and retain an actionable status rather than clearing the uncertainty to enable Apply. Exercise acceptance followed by a lost response, then repeated Apply and edit/reselection against actual effects.

**Version-specific completion:** A confirmation applies to the dispatched snapshot, not every later edit with the same item ID. Deselect or mark reviewed only when the current version still matches that snapshot; keep newer edits selected/reviewable and identify which version completed. During a delayed confirmed success, edit one selected item and verify its newer version stays in review. Unknown earlier writes keep their separate reconciliation restriction even when the draft changes.

**Completion feedback:** When newer edits remain, name both outcomes in the visible status: the submitted version completed, while newer changes are still unapplied and available for review. A selected newer draft beside an unqualified success message leaves the result ambiguous. Check status text against actual submitted values and the remaining draft, including mixed completed/rejected/unknown items; state only outcomes the service confirmed.

**Select references:** Start with one or two entries for the unresolved decision; this list is a lookup, not a required reading bundle.

- [Consequential AI Review](../principles/ai-review.md) — Keep intended targets and consequential AI actions reviewable.
- [Meaningful AI Uncertainty](../principles/meaningful-ai-uncertainty.md) — Explain uncertainty in terms relevant to the user’s decision.
- [AI Provenance and Evidence](../principles/ai-provenance-and-evidence.md) — Make source and generation provenance useful to inspect.
- [Correction and Override](../principles/correction-and-override.md) — Let people correct the system without losing their own work.
- [Bulk-Selection Scope](../principles/bulk-selection-scope.md) — Explain whether selection covers visible rows or every matching result.
- [Action-State Guards](../principles/action-state-guards.md) — Handle pending, overlapping and empty actions without duplicate effects.
- [Completed, Failed and Unknown Outcomes](../principles/partial-outcomes.md) — Reconcile partial outcomes before retrying consequential work.
- [Human Escalation and Fallback](../principles/human-escalation-and-fallback.md) — Provide a workable alternative when assistance cannot complete the task.
- [Cognitive Bias Screening](../principles/cognitive-bias-screening.md) — Identify a specific judgment risk instead of diagnosing users from a bias label.
- [Error Prevention](../principles/error-prevention.md) — Prevent a consequential mistake before committing it.

**Report:** State the observed difficulty, smallest fitting change, tradeoff and actual checks. Separate source inspection, execution, browser/device evidence and human research. Do not invent a finding or claim an unmeasured benefit.
