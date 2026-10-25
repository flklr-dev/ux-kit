---
id: UX-NAV-006
name: Faceted Filtering
category: heuristic
source_ids:
- NNG-FACETS
domain: information-architecture-and-navigation
aliases:
- Filter-State Visibility
feature_tags:
- search-filtering
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Use meaningful independent attributes to narrow a set while keeping combinations and resulting scope understandable.

**Signals:** Users cannot tell whether two selected categories combine or replace each other.

**Interventions:** Choose facets matching real distinctions; show active restrictions and result feedback, with reversible clearing.

**Limits:** More facets are not inherently better; data quality and combination semantics must support them.

**Example:** A parts search combines compatible model and availability while retaining the query and visible filters.

**Validation:** Exercise combinations, zero matches and individual/reset removal with actual result counts.

**Counterexample:** Two contradictory facets can make an empty set look like the product has no stock at all.

**Conflicts:** Resolve narrowing against comprehension, data integrity and access to the full set.

**Evidence boundary:** First-party definitions inspected; chosen combination behavior and recovery are original pattern applications.

**Useful when:** Support useful combined filters and understandable result changes.

Sources: [NNG-FACETS](https://www.nngroup.com/articles/filters-vs-facets/)
