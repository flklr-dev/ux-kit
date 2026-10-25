---
name: ux-kit
description: "Use when designing, auditing, implementing, or validating user-facing flows, forms, navigation, permissions, accessibility, or error recovery in websites, web apps, and native mobile apps."
license: MIT
---
# UX Kit

Make the smallest defensible improvement to how a person completes a task.

## Start with the task

Identify the user, goal, platform, constraints, and available evidence. Use supplied context; ask only about gaps that change the work. For unrelated programming or an exact cosmetic edit without a UX question, finish that request directly.

Choose the requested mode. A request for advice or an audit alone does not authorize product edits.

Use the user's requested outcome to select the mode: a release/acceptance check against supplied rules or a proposed fix is Validate, even when it returns a prioritized issue list. Audit diagnoses an existing experience without that acceptance decision. For substantial work, read the selected mode's workflow; compatible feature guides supplement it rather than change the mode. If intent remains ambiguous, state a scoped assumption and preserve the requested edit boundary.

| Mode | Substantial task | Deliverable |
|---|---|---|
| Design | [Flow](references/workflows/design.md) | Proposed journey, states, tradeoff, checks |
| Audit | [Review](references/workflows/audit.md) | Few prioritized, evidenced findings |
| Implement | [Change](references/workflows/implement.md) | Authorized changes and verification |
| Validate | [Check](references/workflows/validate.md) | Original problem versus observed result |

For a small question, answer directly; no mandatory interview, report, or reference read.

For a whole-screen audit, redesign, or visual handoff, use the [screen review](references/workflows/screen-review.md) to account for every applicable area, including navigation at the edges and overlapping layers. Preserve useful behavior deliberately; an existing layout is evidence to inspect, not automatic approval to copy every control. For an explicitly narrow edit, check the affected area and its dependencies instead.

## Make the decision

Connect **goal → evidence → difficulty → principle → intervention → tradeoff → validation**. Present the conclusion and useful rationale, not a lengthy reasoning transcript.

Inspect relevant code when supplied. Exercise relevant interactions when tools permit. Distinguish supplied reports, inspected source, runtime observations, and hypotheses. A still image cannot establish keyboard, loading, network, or recovery behavior. An automated scan cannot establish full accessibility conformance.

Prefer verified platform/standard requirements within their scope; use heuristics as conditional guidance. Preserve useful expert complexity and working patterns. A good interface may need no change. Avoid a universal UX score or a quota of findings.

For consequential recommendations identify a location, user consequence, evidence, intervention, and check. Keep severity (impact and recovery) separate from confidence (evidence quality). State what remains unknown. Reject deceptive consent, fake urgency, hidden charges, or obstructed cancellation.

## Read only what changes the decision

For substantial work, choose the fitting feature guide below, then open only the entries that can change the decision. For a narrow principle question use the domain routes. Start with one workflow and one or two relevant references; extend for an unresolved decision. Do not read the whole library, index or source registry by default.

| Feature or task phrase | Guide |
|---|---|
| Sign up, sign in, account recovery | [Accounts](references/features/signup-auth.md) |
| First use, permission denied | [Onboarding and permissions](references/features/onboarding-permissions.md) |
| Save draft, edit, correct, submit | [Forms and editing](references/features/forms-editing.md) |
| Price comparison, pay, receipt | [Checkout and payments](references/features/checkout-payments.md) |
| Renewal, subscription cancellation | [Subscriptions](references/features/subscriptions-cancellation.md) |
| Search and filters, no results | [Retrieval](references/features/search-filtering.md) |
| Menus, Back, direct links | [Navigation](references/features/navigation-menus.md) |
| Dense expert table, charts, bulk selection | [Data tools](references/features/dashboards-tables.md) |
| Upload, pending work, stop/retry | [Background work](references/features/uploads-background.md) |
| Offline, interrupted work, sync conflict | [Resilience](references/features/offline-sync.md) |
| AI suggestions, Apply selected, uncertain results | [AI review and bulk actions](references/features/ai-review-bulk.md) |
| Preferences, privacy, automation scope | [Settings](references/features/settings-privacy.md) |

| Principle question | Domain |
|---|---|
| Memory, decision demands, Hick/Miller | [Cognition and choice](references/topics/cognition-and-choice.md) |
| Gestalt, relationships, emphasis | [Perception and grouping](references/topics/perception-and-grouping.md) |
| Fitts, actual hit regions, action cues | [Targeting and interaction](references/topics/targeting-and-interaction.md) |
| Learning, recall, help, disclosure | [Learning and memory](references/topics/learning-and-memory.md) |
| Progress, simplicity, popular-law claims | [Motivation and complexity](references/topics/motivation-and-complexity.md) |
| Jakob, consistency, modes, action guards | [Usability and control](references/topics/usability-and-control.md) |
| Findability, categories, wayfinding | [Information architecture](references/topics/information-architecture-and-navigation.md) |
| Labels, validation, authentication | [Forms and accounts](references/topics/forms-onboarding-and-accounts.md) |
| Costs, recurrence, truthful commitments | [Commerce and trust](references/topics/commerce-and-trust.md) |
| Units, precision, uncertainty, comparison | [Data and expert tools](references/topics/data-and-expert-tools.md) |
| Wording, translation, plural/RTL behavior | [Content and localization](references/topics/content-and-localization.md) |
| Keyboard, focus, semantics, contrast, media | [Accessibility](references/topics/accessibility-and-inclusion.md) |
| OS conventions, lifecycle, offline | [Native and resilience](references/topics/native-mobile-and-resilience.md) |
| AI limits, correction, provenance, agency | [Human–AI interaction](references/topics/human-ai-and-agency.md) |
| Task studies, claims, experiments | [Research and evaluation](references/topics/research-and-evaluation.md) |

Use a named principle only when its conditions fit. A qualified entry may explain why a popular claim is unreliable; it is not a measured benefit. Consult [misconceptions](references/misconceptions.md) for shortcuts and the [metadata index](references/knowledge-index.json) only when a specific entry/alias remains unresolved. Identify coverage gaps. Respect the existing stack, visual system, product facts, and host authorization boundaries.
