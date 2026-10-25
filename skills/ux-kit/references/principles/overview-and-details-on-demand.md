---
id: UX-DATA-003
name: Overview and Details on Demand
category: heuristic
source_ids:
- SHNEIDERMAN-DIRECT
- CARBON-TABLE
domain: data-and-expert-tools
aliases: []
feature_tags:
- dashboards-tables
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Support moving from a useful overview to the evidence for a particular item without losing the broader task.

**Signals:** A summary metric cannot be traced to records, or opening one detail destroys the prior overview.

**Interventions:** Provide suitable drilldown/details and a retained return path; expose the current scope.

**Limits:** Overview is not a mandate to hide comparison fields experts need simultaneously.

**Example:** A dispatch overview opens an individual job while preserving filters and selected comparison context on return.

**Validation:** Follow one summary to its underlying records and return; verify scope and useful state.

**Counterexample:** An overview-only card conceals the outlier that determines the decision.

**Conflicts:** Balance progressive disclosure against expert comparison and evidence inspectability.

**Evidence boundary:** Author overview/details account and table expansion guidance inspected; product drilldown is an original application.

**Useful when:** Support moving from an overview to evidence for a specific item.

Sources: [SHNEIDERMAN-DIRECT](https://www.cs.umd.edu/~ben/about.html), [CARBON-TABLE](https://www.carbondesignsystem.com/building-blocks/core/components/data-table/guidelines)
