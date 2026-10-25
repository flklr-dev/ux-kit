---
id: UX-MOTIVE-004
name: Doherty Threshold
category: heuristic
source_ids:
- LUX-DOHERTY
domain: motivation-and-complexity
aliases: []
feature_tags:
- uploads-background
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Investigate latency at the point it disrupts the task; acknowledge an action without inventing completion.

**Signals:** A design mandates that every server operation finish within one fixed time or show fake progress.

**Interventions:** Provide prompt acknowledgment, meaningful pending state and truthful results; measure actual task latency and recovery.

**Limits:** No universal timing guarantee, inaccurate progress bar or deliberate delay follows from this popular threshold.

**Example:** A save immediately shows Saving and later Saved only after confirmation, retaining edits on failure.

**Validation:** Exercise fast, slow, timeout and repeated actions; compare messages with authoritative effects.

**Counterexample:** A fast false success is worse than an honestly reported pending save.

**Conflicts:** Resolve responsiveness against correctness, status noise and safe retry.

**Evidence boundary:** Popular threshold account inspected, underlying original study not reviewed; no magic number is adopted as a scientific product standard.

**Useful when:** Investigate responsiveness and feedback without a universal timing promise.

Sources: [LUX-DOHERTY](https://lawsofux.com/doherty-threshold/)
