# The research and principles behind UX Kit

UX Kit combines human–computer interaction research, cognitive psychology, usability heuristics, accessibility standards and native platform guidance. Its purpose is to help an agent make a fitting decision for a specific task, explain the tradeoff and check the result.

The library's **137 entries** include different kinds of knowledge. A memory experiment, a design heuristic, a WCAG requirement and a practical recovery pattern do not have the same authority or scope.

## Psychology and human–computer interaction

| Foundation | Source | How UX Kit applies it | Important boundary |
|---|---|---|---|
| Fitts's law | [I. Scott MacKenzie's analysis of Fitts's research and computer input](https://www.yorku.ca/mack/phd-ch2.html) | Inspect target distance, effective hit regions and important control placement. | A pointing model does not establish one minimum button size for every platform or input method. |
| Hick–Hyman law | [Hick, 1952, *On the rate of gain of information*](https://journals.sagepub.com/doi/pdf/10.1080/17470215208416600) | Investigate difficult choices, meaningful grouping and decision structure. | Choice-response conditions differ from open-ended product decisions; fewer options alone does not prove better UX. |
| Memory, chunking and recoding | [Miller, 1956, *The Magical Number Seven, Plus or Minus Two*](https://psychclassics.yorku.ca/Miller/) | Group information meaningfully, show relevant context and reduce avoidable recall. | The paper does not establish a seven-option menu rule or a five-button navigation rule. |
| Gestalt perception | [Wagemans et al., 2012, *A Century of Gestalt Psychology in Visual Perception I*](https://pmc.ncbi.nlm.nih.gov/articles/PMC3482144/) | Inspect proximity, similarity, continuity, connectedness and figure–ground relationships. | This is a research review; applying a grouping cue does not guarantee the right hierarchy for every task. |

The detailed entries retain their source-specific conditions and counterexamples. Research helps explain a hypothesis about user difficulty; observing the actual task determines whether an intervention helps.

## Usability and interaction design

- **Nielsen's usability heuristics:** [Nielsen Norman Group's original guidance](https://www.nngroup.com/articles/ten-usability-heuristics/) informs status visibility, familiar language, control, consistency, error prevention, recognition, flexibility and recovery. These are evaluative heuristics rather than a certification checklist.
- **Norman's signifiers and affordances:** [*Signifiers, not affordances*](https://jnd.org/signifiers-not-affordances/) informs cues that show what can be done and how an interaction should be understood. UX Kit checks the actual control and outcome instead of assuming an icon explains itself.
- **Laws of UX:** [Jon Yablonski's collection](https://lawsofux.com/) is a named-concept reference for the library. All 30 mapped concepts are covered through entries, qualifications or merged aliases. UX Kit also uses original papers and authoritative sources; it does not copy the site's articles, posters or visual identity.

## Accessibility and platform guidance

| Source | Use in UX Kit |
|---|---|
| [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) and the WAI Understanding/APG references linked in the registry | Keyboard access, names/roles/states, errors, focus, contrast, targets, reflow and other scoped accessibility questions. Understanding/APG material supports interpretation and patterns; it is distinct from the normative standard. |
| [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) | Native layout, navigation, interaction and accessibility questions for Apple platforms. |
| [Android developer guidance](https://developer.android.com/training/permissions/requesting) | Contextual permissions, denial, revocation and graceful fallback on Android. |

A requirement must be applied within its platform, units and exceptions. A web screenshot cannot establish native hit regions or complete accessibility conformance.

## Practical patterns and evaluation methods

The skill also includes original applications for preserving drafts, pending-action guards, truthful costs, interrupted operations, uncertain results, explicit AI review and checks before consequential actions. These patterns combine task facts and the relevant references; they are not presented as newly discovered psychological laws.

Each consequential recommendation follows:

**Task → evidence → difficulty → principle → intervention → tradeoff → validation.**

For example, target-acquisition guidance may suggest a larger quantity control, but the check is whether people can operate it accurately at the relevant size/input method while still comparing the basket. If the compact original already works, keeping it can be the right decision.

## Full bibliography and traceability

- [Source registry](../../skills/ux-kit/references/source-registry.json): author/title, URL, supported claim, authority category, access date and reuse notes for each source.
- [Canonical index](../../skills/ux-kit/references/knowledge-index.json): the principles and their source IDs.
- [Coverage guide](coverage.md): topics, features and operating modes.
- [Common misconceptions](../../skills/ux-kit/references/misconceptions.md): popular shortcuts and why their scope matters.

UX Kit's original explanations and examples use the MIT license. Research papers, standards, external websites and their artwork retain their original licenses and owners. Referencing a source does not imply endorsement or a measured UX Kit effectiveness result.
