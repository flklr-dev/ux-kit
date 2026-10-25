---
id: UX-NAV-003
name: Wayfinding and Current Location
category: heuristic
source_ids:
- NNG-BREADCRUMBS
- GOV-NAV
domain: information-architecture-and-navigation
aliases:
- Breadcrumbs and Hierarchy
feature_tags:
- navigation-menus
platforms:
- platform-agnostic
related_ids:
- UX-NAV-009
---
**Explanation:** Make the current section and its place in a genuine hierarchy understandable, including after direct entry.

**Signals:** Identically titled pages have no active section or parent context.

**Interventions:** Use a clear page title, current navigation state and suitable hierarchy links; do not present history as ancestry.

**Limits:** A shallow single-task flow may need Back rather than breadcrumbs; hierarchy must be real.

**Example:** A nested equipment page identifies its site and asset context so users can reach its actual parent.

**Validation:** Enter directly and navigate to parent/sibling tasks by keyboard; verify current-state semantics.

**Counterexample:** A breadcrumb assembled from visited pages implies false parents after a cross-link.

**Conflicts:** Balance orientation against clutter and distinguish hierarchy from prior-task return.

**Evidence boundary:** First-party breadcrumb/navigation guidance inspected; direct-entry application is original practice, not a measured wayfinding benefit.

**Useful when:** Make the current section and route understandable.

Sources: [NNG-BREADCRUMBS](https://www.nngroup.com/articles/breadcrumbs/), [GOV-NAV](https://design-system.service.gov.uk/patterns/navigate-a-service/)
