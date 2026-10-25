---
id: UX-STATUS-001
name: Meaningful Status Announcements
category: standard
source_ids:
- WCAG-STATUS
domain: accessibility-and-inclusion
aliases: []
feature_tags:
- uploads-background
platforms:
- web
related_ids: []
---
**Explanation:** SC 4.1.3 concerns status messages programmatically exposed to assistive technology without receiving focus.

**Useful when:** Save confirmations, results counts and operation progress in markup-based interfaces.

**Signals:** A visual success message is silent to assistive technology, or every update moves focus.

**Interventions:** Use a suitable status/live-region pattern and meaningful complete messages. Reserve interruption for circumstances that warrant it.

**Limits:** Not every content update is a status message; page/context changes have different behavior. Do not announce high-frequency noise.

**Example:** Announce 'Profile updated' while leaving focus on the user's current control.

**Validation:** Exercise actual updates with appropriate assistive tools and inspect timing, context and repetition.

**Evidence boundary:** The criterion concerns qualifying markup status messages; tested announcement behavior needs an actual browser/assistive environment.

**Counterexample:** Announcing every percentage tick can drown out a meaningful failure notification.

**Conflicts:** Balance timely state information against interruption and excessive repetition; preserve editing focus.

Sources: [WCAG-STATUS](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
