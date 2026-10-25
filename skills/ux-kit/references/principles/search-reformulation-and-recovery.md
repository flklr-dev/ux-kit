---
id: UX-NAV-007
name: Search Reformulation and Recovery
category: heuristic
source_ids:
- NNG-SEARCH
domain: information-architecture-and-navigation
aliases: []
feature_tags:
- search-filtering
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Let users revise a search when their words or spelling do not match the index, without silently changing consequential meaning.

**Signals:** No-results screens erase the query or offer no correction path.

**Interventions:** Retain an editable query, explain the active scope and offer justified suggestions or filter recovery.

**Limits:** Do not silently rewrite account IDs, serial numbers or other exact terms as ordinary spelling mistakes.

**Example:** A parts search keeps the entered model code and offers a clearly labeled alternative query alongside exact search.

**Validation:** Try common terms, typos, exact IDs and no matches; inspect relevant results and reversible changes.

**Counterexample:** Autocorrecting a valid part number may return a plausible but incompatible item.

**Conflicts:** Balance recall against precision and truthful query scope.

**Evidence boundary:** First-party search guidance inspected; the reformulation choices require evaluation with the actual content and terminology.

**Useful when:** Help users recover from misspellings and empty searches.

Sources: [NNG-SEARCH](https://www.nngroup.com/articles/internal-website-search/)
