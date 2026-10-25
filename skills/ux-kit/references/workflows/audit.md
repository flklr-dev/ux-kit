# Audit

Inspect the supplied artifact and goal before selecting principles. Distinguish reported behavior, inspected implementation, observed interaction, and unknowns. Cite an actual screen region, route, component, or verified source line; never invent a location.

For whole-screen reviews, complete the [screen coverage record](screen-review.md) before prioritizing findings. Include navigation and persistent/floating layers even when the hero or main content draws attention. A reviewed area may justify keeping it; unknown behavior needs a check rather than a fabricated defect. When the audit becomes a redesign/image handoff, carry its decisions and preserved routes into the deliverable specification.

For substantial findings use:

`Location | Evidence | User consequence | Severity | Recommendation | Rationale | Confidence | Validation`

Severity: critical = core task blocked or serious unintended consequence; major = substantial difficulty/access barrier; minor = usable workaround; opportunity = unproven enhancement. Assess consequence, frequency, affected users and recovery.

Confidence: high = directly supported; medium = incomplete context; low = hypothesis needing evidence. High confidence in a principle does not prove a particular runtime defect.

Prioritize consequential findings; preserve working patterns. State when no change is justified. Separate unknowns from defects. Audit alone makes no product edits. Avoid scores, generic redesigns and invented findings to fill a template.

For a consequential redesign recommendation, state what to keep and why this intervention is proportionate using the [decision record](screen-review.md#choose-a-proportionate-change). Distinguish the actual difficulty from a preference for a quieter style. Useful marketing, familiar copy or compact controls may need a placement/state correction rather than removal or replacement; a proposed new step or feature needs its own rationale and evidence boundary.

When recommending behavior changes, include a compact `Preserve | Planned check` handoff for the already-working tasks those changes could affect. Name a starting context, user action and observable result for each; retaining a label or URL alone is not a regression test. Keep this alongside checks for changed tasks, and label unexecuted checks as planned rather than validated.

Use a concrete row shape: `Working task | Start | Action | Expected result`. For example: `Export existing records | Filtered list with two selected rows | Activate Export selected | File contains those two rows; filters and selection remain`. Populate equivalent rows for the relevant working tasks in the supplied evidence; a destination name followed by “regression-test it” leaves the action/result unspecified. This describes planned checks unless actually exercised.
