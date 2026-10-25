---
id: UX-ACCESS-006
name: Reduced Motion and Pause Controls
category: standard
source_ids:
- WCAG-PAUSE
- WCAG-MOTION
domain: accessibility-and-inclusion
aliases: []
feature_tags:
- uploads-background
platforms:
- web
related_ids: []
---
**Explanation:** Automatically moving/updating content and interaction-triggered motion have different control requirements and levels.

**Signals:** A decorative animation cannot be paused or an interaction triggers nonessential motion despite a request to reduce it.

**Interventions:** Provide appropriate pause/stop/hide or frequency controls where required; support disabling relevant nonessential interaction motion without losing information.

**Limits:** SC2.2.2 A has specific auto-start/parallel/duration conditions and essential exceptions;2.3.3 AAA is distinct. Respecting reduced motion is also a practical design choice, not a blanket AA equation.

**Example:** An upload list retains readable item status without decorative travel animation when motion is reduced.

**Validation:** Check auto and user-triggered motion, pause controls and reduced-motion states with the same task information available.

**Counterexample:** Removing every progress cue can make a long operation harder to understand; use a stable alternative.

**Conflicts:** Resolve motion styling against user control and equivalent status information.

**Evidence boundary:** Actual criteria and differing scopes inspected; no seizure-safety verdict or full motion conformance is established by this entry.

**Useful when:** Respect relevant motion preferences and user control of moving content.

Sources: [WCAG-PAUSE](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html), [WCAG-MOTION](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)
