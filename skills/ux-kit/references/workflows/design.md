# Design

Use the supplied goal and constraints. Map entry, the main decision/action, and the states that can change the outcome: loading, denial, error, interruption, partial completion, success, return. Include only relevant states.

Propose a flow, information hierarchy, controls, and recovery. Prefer the platform's familiar conventions and the incumbent design system. Explain a material tradeoff and a concrete acceptance check. Mark assumptions and research questions separately. Do not edit product code for a planning-only request.

For consequential removals, relabels, component expansion or new steps, use the [proportionate-change record](screen-review.md#choose-a-proportionate-change). Name what stays, the evidenced benefit and the cost. Keep useful creative/marketing function and compact working components; scope this record to affected decisions for a narrow request. A new review stage is a proposed flow change, not an automatic fix for a vague button: match labels to the supplied action or leave its effect unresolved until confirmed.

If the design teaches unfamiliar tasks, use the [learning guide](../topics/learning-and-memory.md) to distinguish practice, help during ordinary work, capacity/re-entry and delayed assessment. If supplying a wireframe, trace every commitment action through its stated prerequisites and make the layout agree with the prose; alternate payment paths need the same material facts before authorization.

Before handing off consequential design changes, include these affected decision details in the proposal itself; concise prose is sufficient:

- **Amount:** Selected charge components, their computed sum, named missing charges and whether the displayed amount is partial or final. A list of additions without the actual sum leaves the price handoff incomplete. Place the relevant amount/breakdown before its commitment action.
- **Action:** Existing effect and next destination, supporting evidence, and the matching label. If the effect is unknown, keep it explicitly unresolved in the handoff and preserve the existing reference action until confirmed. Give conditional label alternatives without choosing one as the implementation. An optional new flow is a separately named proposal with purpose/tradeoff; “until confirmed, use Review” is not an established next step.
- **Keep and resolve:** Name each supplied must-preserve field, route or component, and each decision-critical missing fact. Examples include an entered reason, an existing search, current access values or absent date/timezone context. Connect these to the actual layout rather than a generic promise to preserve working parts. Keep related required information together, including terms/privacy when relevant; separate optional marketing without inventing requirements.
- **Fit and check:** State the condition for the chosen geometry and a fallback when width, larger text or translated content no longer fits. For example, use a full-width equal-segment control where labels fit; otherwise wrap/reflow or switch to a labelled stacked choice while retaining selection. Pair changed and preserved tasks with a concrete expected result, and distinguish checks run from checks still planned.

Reconcile item copy, selected state, summary and action area against those details. Put decision-critical facts in the visible layout; use linked/expanded content for supporting detail. Resolve contradictory placement or action promises before handing them to a generator or implementer. These details apply only to affected consequential decisions; an exact small-label request still needs only its requested answer.

For a whole-screen proposal or an updated image after an audit, use the [screen review and visual handoff](screen-review.md). Account for all applicable areas; explicitly specify primary navigation labels/count, any relocated routes, and the main action. Reconcile the final artifact with that specification, including the bottom bar and overlays, before calling the redesign addressed. Preserve useful identity and behavior through deliberate choices rather than copying every original control.

For a small request, give the decision and reason in the requested length. A state inventory is useful working material, not a compulsory user-facing document.
