---
id: UX-DATA-002
name: Comparison Alignment
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
**Explanation:** Align related quantities and use a consistent display precision so comparison does not depend on decoding inconsistent layouts.

**Signals:** Prices, units and decimals shift unpredictably between rows.

**Interventions:** Place comparable attributes in stable columns with appropriate numeric alignment and locale formatting; keep labels attached.

**Limits:** Do not apply English punctuation or right alignment mechanically to every value or writing direction.

**Example:** A procurement table aligns comparable unit costs and quantities rather than repeating mixed-order cards.

**Validation:** Compare values at actual widths, with localization and keyboard/table semantics intact.

**Counterexample:** A nicely aligned column mixing monthly and annual prices remains misleading.

**Conflicts:** Comparability depends on correct context before visual alignment.

**Evidence boundary:** Official table guidance inspected; interactive product layout is original application and no error reduction was measured.

**Useful when:** Align related values so people can compare them accurately.

Sources: [AF-TABLES](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-tables/)
