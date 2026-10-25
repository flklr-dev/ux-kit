---
id: UX-DATA-004
name: Progressive Precision
category: heuristic
source_ids:
- AF-TABLES
domain: data-and-expert-tools
aliases: []
feature_tags:
- dashboards-tables
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Choose display precision according to the decision, while retaining access to exact values when needed.

**Signals:** A short summary shows meaningless decimal detail or a financial edit silently rounds stored values.

**Interventions:** Use appropriate summary rounding, identify rounding implications and expose exact values for calculations/checks.

**Limits:** Never confuse display formatting with changing stored precision or imply rounded parts must sum exactly.

**Example:** A utilization summary rounds its headline while an export retains the actual precision for analysis.

**Validation:** Compare stored, displayed and exported values at rounding boundaries and recompute relevant totals.

**Counterexample:** Rounding a tiny but consequential balance to zero can hide an obligation.

**Conflicts:** Readability must not erase distinctions necessary to the decision.

**Evidence boundary:** Official intended-use and rounding guidance inspected; financial storage/rounding policy must come from the product.

**Useful when:** Expose the precision appropriate to the current decision.

Sources: [AF-TABLES](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-tables/)
