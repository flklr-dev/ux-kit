---
id: UX-CONTENT-004
name: Link Purpose
category: standard
source_ids:
- WCAG-LINK
domain: content-and-localization
aliases: []
feature_tags:
- navigation-menus
platforms:
- web
related_ids: []
---
**Explanation:** SC2.4.4 Level A requires link purpose determinable from text or programmatically determined context, except generally ambiguous purpose.

**Signals:** Repeated Read more links lack a meaningful associated subject.

**Interventions:** Name the destination or action and preserve context that assistive technology can determine.

**Limits:** This criterion allows context; it is not the stricter out-of-context AAA requirement.

**Example:** An invoice list gives each download link an understandable invoice context rather than an unlabeled icon.

**Validation:** Inspect accessible names and relevant programmatic context; predict then follow the link.

**Counterexample:** Expanding every repeated label into a long sentence may be unnecessary where the table context is reliably associated.

**Conflicts:** Balance concise labels with truthful destination and semantic context.

**Evidence boundary:** Actual criterion/exception inspected through informative Understanding guidance; test implementation before claiming satisfaction.

**Useful when:** Make a link’s destination or action understandable in context.

Sources: [WCAG-LINK](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
