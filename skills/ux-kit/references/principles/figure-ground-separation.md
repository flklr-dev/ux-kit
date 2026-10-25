---
id: UX-PERCEPT-008
name: Figure–Ground Separation
category: heuristic
source_ids:
- GESTALT-REVIEW
domain: perception-and-grouping
aliases: []
feature_tags:
- settings-privacy
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Figure-ground organization differs from grouping. Make the active surface and its relationship to background content understandable.

**Signals:** A translucent privacy dialog blends into the underlying settings and appears nonmodal.

**Interventions:** Clarify foreground boundaries and background treatment; implement the chosen modal or nonmodal behavior consistently.

**Limits:** Visual layering does not establish keyboard containment, focus restoration or accessible semantics.

**Example:** A privacy review panel clearly separates its content while keyboard behavior follows its actual dialog role.

**Validation:** Inspect rendered layers and independently exercise focus, dismissal and return.

**Counterexample:** A strong shadow around a visually foregrounded panel can still leave keyboard users operating behind it.

**Conflicts:** Resolve aesthetics against focus visibility, contrast and interaction truth.

**Evidence boundary:** Review sections on figure-ground inspected; the dialog treatment is original application, not a conformance result.

**Useful when:** Distinguish foreground dialogs and background content.

Sources: [GESTALT-REVIEW](https://pmc.ncbi.nlm.nih.gov/articles/PMC3482144/)
