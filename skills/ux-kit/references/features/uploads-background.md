# Uploads Background

Inspect operation identity, persistence and what the service can actually stop, query or safely retry. Separate dismissing progress from canceling work.

**Inspect:** Is accepted/pending/confirmed/failed/unknown state accurate for each item? Are eligible retries scoped? Does repeated activation create duplicate effects? Are meaningful updates available without stealing focus?

**Exercise:** Exercise empty/no-op, overlap, delayed response, rejection, mixed completion, timeout after acceptance, dismissal and stop races. Count real effects and check that pending clears. Test with reduced motion and suitable status tools.

**Preserve and resolve:** Independent operations can legitimately run concurrently; guard the relevant scope rather than freezing the app. Do not offer undo or cancellation that the service cannot implement.

**Select references:** Start with one or two entries for the unresolved decision; this list is a lookup, not a required reading bundle.

- [Action-State Guards](../principles/action-state-guards.md) — Handle pending, overlapping and empty actions without duplicate effects.
- [Feedback Loops](../principles/feedback-loops.md) — Show a meaningful response after a user action.
- [Completed, Failed and Unknown Outcomes](../principles/partial-outcomes.md) — Reconcile partial outcomes before retrying consequential work.
- [Closing, Cancellation and Undo](../principles/cancellation.md) — Communicate whether work stops or merely becomes hidden.
- [Meaningful Status Announcements](../principles/status.md) — Expose important updates without needless interruption.
- [Reduced Motion and Pause Controls](../principles/reduced-motion-and-pause-controls.md) — Respect relevant motion preferences and user control of moving content.
- [Selective Attention](../principles/selective-attention.md) — Make task-relevant changes detectable without flooding the screen.
- [Common Fate](../principles/common-fate.md) — Use coordinated motion to communicate a genuine relationship.
- [Doherty Threshold](../principles/doherty-threshold.md) — Investigate responsiveness and feedback without a universal timing promise.
- [Visibility of System Status](../principles/visibility-of-system-status.md) — Make saves and background work understandable.

**Report:** State the observed difficulty, smallest fitting change, tradeoff and actual checks. Separate source inspection, execution, browser/device evidence and human research. Do not invent a finding or claim an unmeasured benefit.
