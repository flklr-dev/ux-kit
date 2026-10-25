---
id: UX-INTERACT-001
name: Fitts’s Law
category: heuristic
source_ids:
- MACKENZIE-FITTS
- LUX-FITTS
domain: targeting-and-interaction
aliases: []
feature_tags:
- forms-editing
platforms:
- platform-agnostic
related_ids:
- UX-TARGET-001
- UX-INTERACT-010
---
**Explanation:** Aimed target acquisition depends on task geometry and input conditions. Investigate effective target bounds and travel separately from visual icon size.

**Signals:** A frequent Save action has a tiny hit region far from the editing context.

**Interventions:** Increase the usable hit area and choose a sensible location without changing meaning or keyboard behavior; inspect actual bounds.

**Limits:** No universal minimum size or fitted timing follows; CSS px, native points and dp are different contexts.

**Example:** A note editor uses a native button with a larger measured hit region while retaining its keyboard activation and notes.

**Validation:** Measure rendered bounds, activate with pointer and keyboard, and check accidental neighboring activation.

**Counterexample:** Enlarging a destructive control next to Save can increase accidental commitment.

**Conflicts:** Apply scoped target standards as requirements; use acquisition guidance for additional task decisions.

**Evidence boundary:** MacKenzie reanalysis and popular synthesis inspected, not the original Fitts paper. No task-specific speed gain was measured.

**Useful when:** Assess acquisition distance and effective hit area for important actions.

Sources: [MACKENZIE-FITTS](https://www.yorku.ca/mack/phd-ch2.html), [LUX-FITTS](https://lawsofux.com/fittss-law/)
