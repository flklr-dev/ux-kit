---
id: UX-STATE-001
name: Completed, Failed and Unknown Outcomes
category: heuristic
source_ids:
- NNG-HEURISTICS
domain: human-ai-and-agency
aliases: []
feature_tags:
- ai-review-bulk
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Status and recovery should reflect what the system knows. A timeout can leave the outcome unknown.

**Useful when:** Payments, bulk actions, uploads, sync and AI tools.

**Signals:** Retry-all after partial completion; 'failed' used for an unresolved status.

**Interventions:** Track completed, confirmed rejected and unknown items separately from current selection and editable drafts. Retry only confirmed rejected work. Unknown items remain visible and reviewable but ineligible for resend until authoritative status or an existing idempotent operation contract resolves them. Editing or reselecting an item does not resolve an earlier write. Release the pending guard independently from retry eligibility. If the supplied service has no reconciliation capability, retain the unknown state and explain that checking the result is required before retry; do not invent a status API or label an unresolved write failed.

**Version handling:** Confirmed completion belongs to the submitted version. Clear its selection/review state only if the current version is still the submitted one; a newer editable version remains available for review. Test edit-during-pending for confirmed success as well as unknown completion.

**Limits:** This is an original application of status/control heuristics. UI wording alone cannot provide backend reconciliation or rollback.

**Example:** Six archives succeeded, two lack permission and two need a status check.

**Validation:** Simulate partial completion and a missing or thrown response after server acceptance. Retry immediately, edit/reselect and retry again: no unknown effect may be sent again, and newer edits must remain reviewable. Check both actual effects and persistent truthful status. Verify confirmed failures remain retryable and unrelated eligible work can continue under the service's real scope.

**Evidence boundary:** The source supplies status/control heuristics. Per-item reconciliation, idempotency inspection and unknown outcomes are original engineering applications.

**Counterexample:** A timeout after server acceptance cannot be labeled a confirmed failure and retried blindly.

**Conflicts:** Resolve fast retry against duplicate effects using authoritative state; preserve already completed work.

Sources: [NNG-HEURISTICS](https://www.nngroup.com/articles/ten-usability-heuristics/)
