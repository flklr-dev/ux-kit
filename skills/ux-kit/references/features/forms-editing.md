# Forms Editing

Inspect the real submission/storage contract, existing design system and editable values. Separate draft save, consequential send and unknown server result.

**Inspect:** Does purpose remain available with values entered? Are required/optional rules real and consistent? Can a person correct one field without redoing valid work? Do input/error semantics agree with the visible state?

**Exercise:** Exercise empty/invalid input, correction, pending/repeated action, server failure, unknown result and successful completion. Delay both success and failure, edit a still-editable field while sending, then inspect the submitted snapshot and the latest draft separately. Verify completion never overwrites or clears the newer edit. Count actual effects, inspect retained values and programmatic error tokens, and check keyboard/focus plus relevant resizing.

**Preserve and resolve:** Preserve useful work while respecting explicit discard and sensitive-data policy. Keep the submitted snapshot separate from the latest editable draft. Neither failed completion nor successful completion may restore stale values over newer edits. Reset only the confirmed submitted version when it is still current; otherwise retain the newer draft and explain what was sent. Deliberately preventing editing during the operation can be appropriate for the task, but a disabled Send button alone does not protect editable fields. Do not add cross-session persistence just because same-process re-entry should be avoided.

**Select references:** Start with one or two entries for the unresolved decision; this list is a lookup, not a required reading bundle.

- [Preserve Usable Work During Correction](../principles/preserve-work.md) — Keep valid values after a failed form submission.
- [Error Identification and Correction](../principles/errors.md) — Identify the affected field and a useful next correction.
- [Persistent Field Labels](../principles/persistent-field-labels.md) — Keep a field’s meaning visible while a value is entered.
- [Semantic Input and Autofill](../principles/semantic-input-and-autofill.md) — Choose input purpose and autofill behavior that fits the data.
- [Validation Timing](../principles/validation-timing.md) — Give corrective feedback when the user can use it.
- [Required and Optional Information](../principles/required-and-optional-information.md) — Make required effort and optional inputs clear.
- [Action-State Guards](../principles/action-state-guards.md) — Handle pending, overlapping and empty actions without duplicate effects.
- [Keyboard Operation and No Traps](../principles/keyboard-operation-and-no-traps.md) — Complete relevant tasks with the keyboard.
- [Semantic Name, Role and Value](../principles/semantic-name-role-and-value.md) — Expose an interactive control’s meaning and state.
- [Chunking](../principles/chunking.md) — Group account details into meaningful sections.
- [Recognition Rather Than Recall](../principles/recognition-rather-than-recall.md) — Show available actions and previously selected values.
- [Proximity](../principles/proximity.md) — Associate helper text with the field it explains.
- [Fitts’s Law](../principles/fittss-law.md) — Assess acquisition distance and effective hit area for important actions.
- [Affordances](../principles/affordances.md) — Choose controls whose available interaction fits the task.
- [Signifiers](../principles/signifiers.md) — Communicate that an element can be edited, dragged or opened.
- [Constraints](../principles/constraints.md) — Prevent impossible combinations without hiding the reason.
- [Direct Manipulation](../principles/direct-manipulation.md) — Support understandable editing with visible objects and reversible changes.
- [Pointer Cancellation](../principles/pointer-cancellation.md) — Let users avoid committing an accidental pointer action.
- [Target Size: Scope and Units](../principles/targets.md) — Assess effective hit bounds under the actual platform or standard.
- [Name the Action’s Real Outcome](../principles/action-labels.md) — Use a label matching what the action will actually do.
- [Error-Tolerant Exploration](../principles/error-tolerant-exploration.md) — Let users learn an editor through low-cost reversible actions.
- [Contextual Help](../principles/contextual-help.md) — Place useful assistance beside the task requiring it.
- [Aesthetic–Usability Effect](../principles/aesthetic-usability-effect.md) — Separate favorable first impressions from observed task success.
- [Flow](../principles/flow.md) — Reduce avoidable interruption during sustained creation work.
- [Parkinson’s Law](../principles/parkinsons-law.md) — Investigate unnecessary workflow overhead without imposing arbitrary deadlines.
- [Tesler’s Law](../principles/teslers-law.md) — Decide which task complexity the system should handle and which users need visible.
- [Postel’s Law and Input Tolerance](../principles/postels-law-and-input-tolerance.md) — Accept harmless formatting variation while rejecting ambiguous or unsafe values.
- [Multi-Step Progress and Branching](../principles/multi-step-progress-and-branching.md) — Communicate meaningful progress through conditional form paths.
- [Plain Language](../principles/plain-language.md) — Make instructions understandable to the intended audience.
- [Translation Expansion and Layout](../principles/translation-expansion-and-layout.md) — Keep controls usable with longer translated text.
- [Locale-Sensitive Formats](../principles/locale-sensitive-formats.md) — Interpret dates, numbers and addresses with explicit locale context.
- [Bidirectional and RTL Layout](../principles/bidirectional-and-rtl-layout.md) — Support meaningful reading and interaction order in RTL interfaces.
- [Tone Matched to Consequences](../principles/tone-matched-to-consequences.md) — Keep serious failure, ordinary guidance and celebration appropriately distinct.
- [Visible and Unobscured Focus](../principles/visible-and-unobscured-focus.md) — Keep the currently focused control identifiable.
- [Text Resize and Reflow](../principles/text-resize-and-reflow.md) — Keep content and actions available when text or viewport scales.
- [Safe Areas and Keyboard Insets](../principles/safe-areas-and-keyboard-insets.md) — Keep task controls visible around system and keyboard surfaces.
- [Native Text Scaling](../principles/native-text-scaling.md) — Keep native layouts useful at supported text sizes.
- [Discoverable Gesture Alternatives](../principles/discoverable-gesture-alternatives.md) — Provide an accessible way to perform gesture-driven actions.
- [Representative Usability Testing](../principles/representative-usability-testing.md) — Observe relevant people attempting realistic tasks.
- [Observed Behavior and Self-Report](../principles/observed-behavior-and-self-report.md) — Keep stated preference distinct from demonstrated task performance.

**Report:** State the observed difficulty, smallest fitting change, tradeoff and actual checks. Separate source inspection, execution, browser/device evidence and human research. Do not invent a finding or claim an unmeasured benefit.
