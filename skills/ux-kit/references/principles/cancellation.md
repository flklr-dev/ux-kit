---
id: UX-CONTROL-001
name: Closing, Cancellation and Undo
category: heuristic
source_ids:
- NNG-HEURISTICS
domain: usability-and-control
aliases:
- Destructive Gesture Recovery
feature_tags:
- uploads-background
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** A control's promise must match the operation it can affect.

**Useful when:** Background work, dialogs and consequential actions.

**Signals:** A Cancel button only hides progress; undo implies recovery that does not exist.

**Interventions:** Label dismissal Close if work continues. Describe actual cancellation reach and offer undo only when implemented.

**Limits:** Stop requests may race with completion; distinguish requested cancellation from confirmed cancellation. Preserve host authorization requirements.

**Example:** 'Close — upload continues in the background' when server work cannot be stopped.

**Validation:** Close during work, request a supported stop, and inspect authoritative final state separately.

**Evidence boundary:** The source supplies control/undo guidance; cancellation races and service reach are original application boundaries.

**Counterexample:** Closing an upload panel may intentionally leave background transfer running; claiming cancellation would misrepresent the result.

**Conflicts:** Balance recoverability with actual service capability and existing authorization.

Sources: [NNG-HEURISTICS](https://www.nngroup.com/articles/ten-usability-heuristics/)
