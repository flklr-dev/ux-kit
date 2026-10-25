---
id: UX-DATA-008
name: Empty, Unavailable and Zero Data
category: heuristic
source_ids:
- NNG-SYSTEM-STATUS
- AF-UNCERTAINTY
domain: data-and-expert-tools
aliases: []
feature_tags:
- dashboards-tables
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** No records, a measured zero and unavailable information communicate different facts.

**Signals:** A chart substitutes zero when the service returned no measurement.

**Interventions:** Represent each relevant state with a truthful explanation and recovery or next step; keep missingness in calculations explicit.

**Limits:** A dash is ambiguous unless its meaning is clear; absence is not proof of zero.

**Example:** An asset sensor shows No reading received instead of0°C while a confirmed0°C remains a real measurement.

**Validation:** Inject zero, null, empty-set, loading and error states; check labels, aggregates and charts.

**Counterexample:** A zero-filled outage can create an apparent improvement in an incident chart.

**Conflicts:** Truthful state and analytic meaning override a visually complete chart.

**Evidence boundary:** Status/limitations guidance inspected; these data-state distinctions are original product practice requiring contract checks.

**Useful when:** Distinguish no records, zero values and unavailable information.

Sources: [NNG-SYSTEM-STATUS](https://www.nngroup.com/articles/visibility-system-status/), [AF-UNCERTAINTY](https://analysisfunction.civilservice.gov.uk/policy-store/communicating-quality-uncertainty-and-change/)
