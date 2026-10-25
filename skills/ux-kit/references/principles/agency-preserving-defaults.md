---
id: UX-AI-008
name: Agency-Preserving Defaults
category: heuristic
source_ids:
- MS-HAI-PAPER
- NNG-CONTROL
domain: human-ai-and-agency
aliases: []
feature_tags:
- settings-privacy
platforms:
- platform-agnostic
related_ids:
- UX-AI-007
- UX-CONTROL-001
---
**Explanation:** Defaults and global controls should make the system's scope understandable and allow effective correction.

**Signals:** An assistant reenables a dismissed automation or silently broadens what it monitors.

**Interventions:** Use task-appropriate defaults, visible scope and durable supported controls; explain consequential changes in behavior.

**Limits:** No default is universally best and not every reversible low-impact action needs new confirmation.

**Example:** An optional auto-summary stays off after being disabled and its actual data scope is inspectable before reactivation.

**Validation:** Change settings, restart and encounter new content; inspect actual behavior and any scope expansion.

**Counterexample:** A visible Off toggle that stops suggestions but not monitoring misrepresents control.

**Conflicts:** Host authority, data-use truth and task usefulness govern automation defaults.

**Evidence boundary:** Original HAI controls/change framework inspected; exact settings policy and durability are original implementation decisions.

**Useful when:** Choose defaults that support informed correction and choice.

Sources: [MS-HAI-PAPER](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf), [NNG-CONTROL](https://www.nngroup.com/articles/user-control-and-freedom/)
