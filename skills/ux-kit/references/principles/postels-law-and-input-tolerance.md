---
id: UX-USE-007
name: Postel’s Law and Input Tolerance
category: heuristic
source_ids:
- LUX-POSTEL
- NNG-SLIPS
domain: usability-and-control
aliases: []
feature_tags:
- forms-editing
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Accept clearly equivalent harmless formatting when the intended value remains unambiguous; reject unsafe or uncertain interpretation.

**Signals:** A phone field rejects harmless spaces, while a date field silently guesses between two possible dates.

**Interventions:** Normalize only well-defined variations, preserve meaningful characters and explain ambiguous input for correction.

**Limits:** Never relax authorization, protocol validation or security-sensitive parsing because of an input-tolerance slogan.

**Example:** A contact number can retain a leading plus and accept spacing; an ambiguous date asks for explicit confirmation.

**Validation:** Test accepted variants, locale ambiguity, invalid values and exact persisted meaning.

**Counterexample:** Silently changing an account identifier's case may address the wrong account.

**Conflicts:** Balance forgiveness with data integrity, locale semantics and clear correction.

**Evidence boundary:** Popular networking-origin principle and first-party forgiving-formatting guidance inspected; no blanket liberal parsing rule adopted.

**Useful when:** Accept harmless formatting variation while rejecting ambiguous or unsafe values.

Sources: [LUX-POSTEL](https://lawsofux.com/postels-law/), [NNG-SLIPS](https://www.nngroup.com/articles/slips/)
