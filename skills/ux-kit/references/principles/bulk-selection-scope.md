---
id: UX-DATA-007
name: Bulk-Selection Scope
category: heuristic
source_ids:
- CARBON-TABLE
domain: data-and-expert-tools
aliases:
- Granular Application Scope
feature_tags:
- ai-review-bulk
platforms:
- platform-agnostic
related_ids:
- UX-USE-006
- UX-STATE-001
---
**Explanation:** Selection must communicate which objects a subsequent action will affect, including pagination and filtering.

**Signals:** Select all ambiguously means visible rows or every matching record.

**Interventions:** Show the selected count and precise scope; make extending/clearing selection explicit and reconcile scope before consequential dispatch.

**Limits:** A count alone does not define membership; backend authorization and action guards remain necessary.

**Example:** A results table distinguishes Select20 visible from Select126 matching and previews the actual archive set.

**Validation:** Select across pages, change filters, retry partial actions and inspect the actual affected IDs.

**Counterexample:** Changing the query while retaining hidden selections can apply changes outside the intended set.

**Conflicts:** Resolve efficiency against reviewable scope and per-item outcomes.

**Evidence boundary:** Selection/batch pattern inspected; cross-page scope protocol is original application, not a source-prescribed implementation.

**Useful when:** Explain whether selection covers visible rows or every matching result.

Sources: [CARBON-TABLE](https://www.carbondesignsystem.com/building-blocks/core/components/data-table/guidelines)
