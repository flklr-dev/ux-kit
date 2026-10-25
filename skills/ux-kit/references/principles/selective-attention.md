---
id: UX-COG-009
name: Selective Attention
category: heuristic
source_ids:
- LUX-ATTENTION
domain: cognition-and-choice
aliases: []
feature_tags:
- uploads-background
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** A change can be present yet outside the current task focus. Decide which updates matter and how people can discover them.

**Signals:** An upload fails in a distant panel while the user edits its description.

**Interventions:** Place relevant state near the affected object and provide an appropriate accessible notification without stealing focus.

**Limits:** No cue guarantees attention; repeated animation and alerts may create competing demands.

**Example:** A failed attachment remains beside its description with a retry action instead of disappearing into a global log.

**Validation:** Exercise failure while attention is elsewhere; check notice, announcement and recovery without losing editing context.

**Counterexample:** Flashing every background success buries the one failure requiring action.

**Conflicts:** Resolve salience against interruption and reduced-motion needs.

**Evidence boundary:** Editorial attention framing only; no detection rate or universal attention mechanism is claimed for this interface.

**Useful when:** Make task-relevant changes detectable without flooding the screen.

Sources: [LUX-ATTENTION](https://lawsofux.com/selective-attention/)
