---
id: UX-USE-006
name: Action-State Guards
category: heuristic
source_ids:
- NNG-SYSTEM-STATUS
- NNG-CONTROL
domain: usability-and-control
aliases: []
feature_tags:
- ai-review-bulk
platforms:
- platform-agnostic
related_ids:
- UX-STATE-001
- UX-AI-001
- UX-CONTROL-001
---
**Explanation:** An action needs a state contract: what is eligible, what is in flight, what actually completed and what can safely be retried.

**Signals:** An empty Apply calls the service or claims success; a second activation creates overlapping effects.

**Interventions:** Guard eligibility before dispatch. For the same consequential scope, atomically reject/coalesce overlap; snapshot selected editable values, show pending and release the guard on every settled path. Reconcile confirmed successes separately from failed/unknown items. Do not resend accepted work merely because another item failed.

**Limits:** A disabled button alone does not guard programmatic calls or backend duplicates. Independent scopes may legitimately run concurrently; inspect idempotency and unknown outcomes.

**Example:** An AI report review makes no service call for an empty selection; two rapid Apply activations send one scoped request. After A succeeds and B fails, retry sends B only while preserving edits.

**Validation:** Count service calls/effects for empty, success, rejection, double activation, delayed overlap, mixed completion and unknown timeout. Verify no duplicate accepted effect and that pending always clears; compare outcome messaging to actual state.

**Counterexample:** A global lock can unnecessarily block unrelated reversible actions; define the operation's scope rather than freezing the entire app.

**Conflicts:** Resolve responsiveness and concurrency against duplicate consequences; preserve explicit review, editable work and authoritative reconciliation.

**Evidence boundary:** Status/control sources provide heuristics. This state contract is original engineering guidance motivated by executed synthetic failures, not a claimed source algorithm or proof of real-service idempotency.

**Useful when:** Handle pending, overlapping and empty actions without duplicate effects.

Sources: [NNG-SYSTEM-STATUS](https://www.nngroup.com/articles/visibility-system-status/), [NNG-CONTROL](https://www.nngroup.com/articles/user-control-and-freedom/)
