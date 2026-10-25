---
id: UX-DATA-001
name: Units, Baselines and Data Context
category: heuristic
source_ids:
- AF-TABLES
- AF-UNCERTAINTY
domain: data-and-expert-tools
aliases:
- Comparable Pricing and Units
feature_tags:
- dashboards-tables
- checkout-payments
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** A value needs enough context to support the comparison: quantity, unit, period, population and a meaningful baseline.

**Signals:** A dashboard ranks offices by raw complaints despite different customer counts or omits the time window.

**Interventions:** Identify what each metric measures; show relevant denominator and comparison basis using actual definitions.

**Limits:** Do not assume raw counts should always become rates; use the decision's actual question.

**Example:** A response dashboard distinguishes tickets per active customer from total tickets and shows the period.

**Validation:** Trace sample values to their definitions and recompute the displayed comparison; test whether readers explain the metric correctly.

**Counterexample:** Equalizing a count into a rate can hide the total workload needed for staffing.

**Conflicts:** Balance comparability, scale and audience needs without inventing data.

**Evidence boundary:** Official statistical presentation/limitations guidance inspected; denominator choice is original analytic judgment, not a universal ranking rule.

**Useful when:** Show what a metric measures and what it is compared with.

Sources: [AF-TABLES](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-tables/), [AF-UNCERTAINTY](https://analysisfunction.civilservice.gov.uk/policy-store/communicating-quality-uncertainty-and-change/)
