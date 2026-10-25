---
id: UX-DATA-006
name: Sorting Semantics
category: heuristic
source_ids:
- CARBON-TABLE
domain: data-and-expert-tools
aliases: []
feature_tags:
- dashboards-tables
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Sorting needs a defined field, direction and comparison rule that remains understandable as data changes.

**Signals:** A displayed date column sorts by its localized text or missing values move unpredictably.

**Interventions:** Sort semantic values, indicate state, define missing/tie behavior and preserve an understandable selection scope.

**Limits:** A universal sort order for missing values or ties is not established by this guidance.

**Example:** A due-date table sorts timestamps while showing local dates and explicitly places undated work in a known position.

**Validation:** Exercise ascending/descending, equal values, nulls and refreshed rows with selection intact.

**Counterexample:** Lexicographic currency sorting can place a larger amount before a smaller one.

**Conflicts:** Balance stable comparison with new authoritative data; preserve user-controlled sort.

**Evidence boundary:** Table sorting capability inspected; concrete semantic and stability contract is original engineering application.

**Useful when:** Keep ordering understandable across mixed values and changing data.

Sources: [CARBON-TABLE](https://www.carbondesignsystem.com/building-blocks/core/components/data-table/guidelines)
