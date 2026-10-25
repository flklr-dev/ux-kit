---
id: UX-CONTENT-005
name: Translation Expansion and Layout
category: heuristic
source_ids:
- W3C-TEXT-EXPANSION
domain: content-and-localization
aliases: []
feature_tags:
- forms-editing
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Translated strings vary in length and shape; design flexibility must support the actual supported languages.

**Signals:** A fixed-width button clips a translated consequence or overlapping text hides a control.

**Interventions:** Permit appropriate wrapping/growth and test real translations with text scaling; avoid baking critical wording into images.

**Limits:** No universal expansion percentage or one-direction language assumption is safe.

**Example:** A translated Save draft control grows without covering the nearby Delete action or truncating its meaning.

**Validation:** Use real longer/shorter strings, narrow layouts and enlarged text; verify full wording and activation.

**Counterexample:** Shrinking translated text until it fits can defeat readability while hiding the underlying layout issue.

**Conflicts:** Balance consistency against readable localized content; retain semantic/action differences.

**Evidence boundary:** Official variability/layout guidance inspected; numerical expansion tables are not adopted as product guarantees.

**Useful when:** Keep controls usable with longer translated text.

Sources: [W3C-TEXT-EXPANSION](https://www.w3.org/International/articles/article-text-size)
