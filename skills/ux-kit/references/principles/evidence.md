---
id: UX-EVIDENCE-001
name: Bound Conclusions to Evidence
category: heuristic
source_ids:
- WAI-TOOLS
domain: research-and-evaluation
aliases: []
feature_tags:
- dashboards-tables
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Different artifacts support different conclusions; automated checks assist evaluation but cannot settle every accessibility question.

**Useful when:** Reviewing stills, partial code, test reports, or scans.

**Signals:** Claims of full compliance from one scan; unobserved behavior described as tested.

**Interventions:** Name what was supplied or inspected, identify unknowns, and choose the next check.

**Limits:** Missing evidence is not proof of a defect. This evidence discipline is an original review method, not itself a WCAG requirement.

**Example:** A screenshot shows labels but cannot establish keyboard focus or error announcements.

**Validation:** Reproduce the claimed interaction and record environment and result.

**Evidence boundary:** An automated scan can establish its executed checks but cannot settle the full interaction or human task. Original evidence discipline extends the WAI tool limitation.

**Counterexample:** A screenshot of a hidden menu is not evidence that keyboard access fails; inspect the interaction before reporting a defect.

**Conflicts:** Resolve pressure for a verdict by stating what can and cannot be concluded.

Sources: [WAI-TOOLS](https://www.w3.org/WAI/test-evaluate/tools/selecting/)
