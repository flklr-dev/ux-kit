# Navigation Menus

Map actual tasks, categories, hierarchy and entry points. Separate current location, prior history and the route back to unfinished work.

## Primary mobile navigation

For a phone bottom navigation/tab bar, count and name the destinations before choosing to retain it. Keep peer top-level sections distinct from commands, filters and promotional shortcuts. Evaluate destination priority, labels, current selection, usable spacing, stable placement and return state; preserving working routes does not require preserving every route as a primary tab.

- **Android/Material:** the [official layout/navigation guide](https://developer.android.com/design/ui/mobile/guides/layout-and-content/layout-and-nav-patterns) describes three to five destinations at the same hierarchy level. More than five warrants restructuring or a fitting adaptive pattern; do not merely squeeze icons or silently drop a required destination.
- **Apple:** [HIG tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars) weighs section access against added complexity, recommends labels and avoiding overflow, and describes adaptive sidebars. Apple's [iOS tab-view presentation](https://developer.apple.com/videos/play/meet-with-apple/201/) describes a small number of key sections, typically five or fewer. The HIG's explicit default-five guidance for customizable tabs appears under iPadOS; do not misquote it as a universal iPhone requirement.
- **Scope:** these are platform/component recommendations, not a psychological maximum, Miller's menu limit, or a cap on every category grid, web menu or expert tool. Identify platform and width; if unavailable, state that assumption. A different pattern or an exception needs a concrete task/access rationale and checks, not automatic deletion to hit a number.

Specify the exact proposed tab labels/count and where moved destinations remain available. Example proposal for a shopping app: `Home / Shop / Deals / Wishlist / Account` (five), with `Brands` under `Shop`; this is an example, not a mandatory retail template. Test the changed brand-finding route alongside retained shopping, wishlist and account tasks. An extra step can reduce discoverability; validate priorities instead of claiming a measured benefit.

## Task and return checks

**Inspect:** Can people predict a destination and identify the current context? Do grouping terms fit the audience? Do direct entry and authentication retain the intended target and meaningful return?

**Exercise:** Attempt representative retrieval without coaching, browser/app Back, direct cold/warm entry, denied/missing destination and return after editing. Verify relevant platform history/stack rather than assuming shared behavior.

**Evidence and regression pair:** Include observed failed search phrases alongside failed navigation paths. Without search-code access, specify a feasible alias/content request or direct alternative, and a check of the original query. Pair checks of changed or important infrequent routes with concrete regression checks for already-successful common routes, stable URLs and established positions. Study attempt counts do not establish population task frequency.

**Acceptance checks:** For a navigation proposal, report two compact groups: changed tasks and retained working tasks. Give the starting context, action and observable destination/result for each affected task supplied in the evidence. A promise to preserve labels/positions is not a task check; retrieving a document and finding guidance about it are different tasks. Keep proposed checks distinct from tests actually performed.

**Preserve and resolve:** Breadcrumbs help with genuine hierarchy; an ordered transaction may need a different return control. Familiar conventions help when they express the real task, and should not preserve an inaccessible or misleading behavior.

**Select references:** Start with one or two entries for the unresolved decision; this list is a lookup, not a required reading bundle.

- [Information Scent](../principles/information-scent.md) — Make link labels predict a destination’s usefulness.
- [Wayfinding and Current Location](../principles/wayfinding-and-current-location.md) — Make the current section and route understandable.
- [Task-Oriented Navigation](../principles/task-oriented-navigation.md) — Organize navigation around real user tasks.
- [Classification and User Vocabulary](../principles/classification-and-user-vocabulary.md) — Test category boundaries against how people organize the content.
- [Back Navigation and State Retention](../principles/back-navigation-and-state-retention.md) — Return to the previous list without losing its useful state.
- [Deep Links and Return Paths](../principles/deep-links-and-return-paths.md) — Support entry into a feature without trapping users away from context.
- [Consistency and Standards](../principles/consistency-and-standards.md) — Give the same action predictable meaning across screens.
- [Recognition Rather Than Recall](../principles/recognition-rather-than-recall.md) — Show available actions and previously selected values.
- [Miller’s Law](../principles/millers-law.md) — Assess memory demands without imposing a seven-item menu limit.
- [Good Continuation](../principles/good-continuation.md) — Make a multi-step path or timeline legible.
- [Closure](../principles/closure.md) — Review whether partial shapes obscure icons or boundaries.
- [Terminology Research](../principles/terminology-research.md) — Check whether product terms match user vocabulary.
- [Content Hierarchy and Scanning](../principles/content-hierarchy-and-scanning.md) — Organize a page so users can locate the next useful information.
- [Link Purpose](../principles/link-purpose.md) — Make a link’s destination or action understandable in context.
- [Platform Navigation and Back Behavior](../principles/platform-navigation-and-back-behavior.md) — Use the target OS’s navigation and dismissal expectations.

**Report:** State the observed difficulty, smallest fitting change, tradeoff and actual checks. Separate source inspection, execution, browser/device evidence and human research. Do not invent a finding or claim an unmeasured benefit.
