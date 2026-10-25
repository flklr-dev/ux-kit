# Whole-screen review and visual handoff

Use for a whole-screen audit, design, redesign or acceptance check, including a screenshot-to-image request that follows an audit. Keep the selected mode's permissions. For an explicitly narrow change, apply only the affected areas and dependencies; do not expand the assignment into a full audit.

## Account for the screen

Start with the user's task, target platform/window and evidence available. Scan the main content, top and bottom edges, persistent controls, and floating/modal layers. For each area below, keep a compact working record:

`Area | Evidence/location | Disposition | Keep/change or next check`

Use **reviewed** with an evidenced keep/change decision, **unknown** with the missing evidence/check, or **outside scope** with a reason. A control's presence or attractive appearance alone does not establish that it works. Group related unknowns in the final answer; the working record need not become a long user-facing checklist. Report the most consequential findings, not one invented problem per area.

| Area | Questions that can change the decision | Relevant route |
|---|---|---|
| Task and action | Is the next useful action clear? Are prerequisites and consequences visible before commitment? Does the primary action have a complete path to its result? | Selected mode; [checkout](../features/checkout-payments.md) or [forms](../features/forms-editing.md) when relevant |
| Navigation and retrieval | Count and name primary destinations; distinguish sections, actions, categories and filters. Check current location, labels, search, Back and return to unfinished work. Check platform conventions before retaining the original structure. | [Navigation](../features/navigation-menus.md), [search](../features/search-filtering.md) |
| Hierarchy and grouping | What competes with the task? Are related items grouped, priorities clear, and useful comparison information retained? Density alone is not a defect. | [Perception](../topics/perception-and-grouping.md), [information architecture](../topics/information-architecture-and-navigation.md) |
| Content and trust | Do labels predict outcomes? Are costs, eligibility, discount stacking, time limits, permissions or AI uncertainty accurate and visible where needed? Keep unknown product facts unresolved. | [Content](../topics/content-and-localization.md), [commerce](../topics/commerce-and-trust.md), [AI](../topics/human-ai-and-agency.md) |
| Controls and feedback | Are interactive elements recognizable, appropriately placed and sufficiently separated? Check selected/disabled/pending states, action feedback and repeated activation where relevant. | [Interaction](../topics/targeting-and-interaction.md), [action guards](../principles/action-state-guards.md) |
| Accessibility and readability | Review text, color reliance, labels, contrast, focus/reading order, keyboard and assistive access appropriate to the platform. Separate visible concerns from measured or exercised checks. | [Accessibility](../topics/accessibility-and-inclusion.md) |
| Layout and adaptation | Check clipping, wrapping, scrolling, safe areas, sticky controls, text enlargement and relevant viewport/orientation/locale changes. A screenshot cannot establish adaptive behavior or actual hit regions. | [Native/resilience](../topics/native-mobile-and-resilience.md), [content](../topics/content-and-localization.md) |
| States and recovery | Account for relevant loading, empty/no-results, validation, error, retry, offline, interruption, partial completion, success and return states. Test actual effects when available; one still image leaves these unknown. | Selected feature guide; [resilience](../features/offline-sync.md), [background work](../features/uploads-background.md) when relevant |
| Overlays and attention | Do promotions, consent, help, chat, badges, dialogs or motion obscure content/actions or compete with the task? Review dismissal, focus and reappearance without assuming their runtime behavior. | [Usability/control](../topics/usability-and-control.md), [accessibility](../topics/accessibility-and-inclusion.md) |

Read only the routes needed to resolve a decision. This coverage map does not require loading the entire principle library or applying every named law. Check source scope: a component recommendation is not a universal psychological limit.

## Choose a proportionate change

For consequential redesign decisions, record:

`Region | Keep | Proposed change | Evidence/user benefit | Tradeoff | Check`

Group related decisions. This is working material, not a required row for every icon or a long report for a small request. An evidenced keep decision is a useful result. Preserve task behavior, useful information and visual identity separately: retaining a brand does not require copying a misleading control, and correcting that control does not justify restyling its working neighbors.

- **Identity and promotion:** Identify the purpose, relevance and interference of an image, banner, offer or upgrade entry. Retain useful imagery, tone and business routes. When a component competes with or obstructs a task, compare reducing emphasis/size, relocating it or offering appropriate dismissal before choosing removal. Removing a deceptive or irrelevant element remains valid. Explain the consequence for discovery; do not assume a revenue or conversion benefit from either keeping or deleting it.
- **Component footprint:** Compare original and proposed height, alignment, scan order, scrolling and distance to the next useful action. Preserve a compact treatment that fits the supplied content. Expand or reflow for a specific readability, localization or operability need; extra whitespace or taller cards alone is not an improvement. Check the actual viewport and larger text when available; compactness does not justify undersized controls.
- **Copy and information:** Preserve accurate familiar names, labels, units and tone. Rewrite a label to fix a specific misunderstanding, not to make every heading more descriptive. Show the current state or value where people compare items; place a concise action beside it. An instruction such as “Review access” does not replace the access information. Put consequence text where it changes a decision rather than repeat the same warning or scope at every level.
- **Flow and facts:** Label the actual next action. Separate supplied behavior from a proposed new review/confirmation stage; explain why a new stage is needed and what it adds to an existing editable summary. Unknown behavior is a question to resolve, not permission to promise “Review” or “Nothing is booked yet.” Do not invent dates, timezones, availability, fees, roles, legal requirements or supporting features to make a mockup coherent. A clearly labelled illustrative assumption is not a verified product fact.
- **Selected states and safeguards:** Inspect existing visual and semantic distinctions before adding another icon or checkmark. Provide appropriate perceivable state cues without a universal tick requirement or color-only assurance. Ground a warning in the actual consequence and keep necessary safeguards; ambiguous filenames alone do not establish a required comparison feature or prove which file is current.

For writing decisions, use the [content guide](../topics/content-and-localization.md). For a working component or truthful label with no evidenced problem, keep it and test the affected task rather than create a visible change to demonstrate effort.

## Carry decisions into the deliverable

Before handing off a proposed layout, code or image prompt, reconcile a compact specification:

`Region | Keep/change | Exact visible content/structure | Destination or action | Verification`

Include the consequential decisions from the review and the working routes they affect. For primary navigation, enumerate the exact labels and count, selected destination, and the new location of any moved route. For the main action, include its required facts and outcome; unknown behavior remains a question, not invented functionality. Specify how optional overlays stay clear of content and controls. Preserve identity separately from flawed structure.

A visual prompt follows these decisions rather than asking only for a cleaner or more premium screen. Keep material copy, selected states, totals, counts and category structure consistent with the recommendations. If a user constraint conflicts with a recommendation, retain the constraint and disclose the unresolved tradeoff; do not silently remove a required route.

Specify the unchanged regions as well as the authorized changes: header/brand treatment, useful imagery/marketing routes, component proportions and terminology when they should remain. State the supplied flow contract and unresolved facts separately from any proposed alternative. This gives a generator or implementer a concrete preservation boundary without requiring pixel-identical copying of a flawed screen.

When an image or implementation is produced and can be inspected, compare the actual result to this specification before delivery. Check every specified destination/label, the main action, information placement, clipping and obstruction. Correct material mismatches within the authorized scope; if correction or inspection is unavailable, disclose the mismatch or unverified result. A written prompt is not evidence that the generated image followed it.

Compare the revision with the original as well: did the original difficulty improve, and did the change introduce unnecessary scrolling, lost identity/routes, awkward copy, redundant information or extra commitment steps? Assess **recommendation quality** separately from **artifact fidelity**. An artifact can accurately implement an excessive recommendation, or drift from a sound one. Neither a cleaner appearance nor fewer components establishes a measured usability improvement.

End with proportionate checks for changed tasks and retained working tasks using `Start | Action | Expected result`. Label visual inspection, code checks, actual interaction and planned user/device/assistive checks separately. A static concept can match the design specification without proving usability, accessibility or conversion.
