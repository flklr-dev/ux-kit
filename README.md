<p align="center"><img src="assets/readme-banner.svg" alt="UX Kit. Better decisions. Better interfaces. Task, evidence, change, check." width="100%"></p>

<p align="center"><strong>An open-source UX skill for Codex and Claude Code.</strong><br>Design, audit, implement, and validate user experiences with AI coding agents. · MIT licensed</p>

<p align="center"><a href="https://flklr-dev.github.io/ux-kit/">Website</a> · <a href="#install">Install</a> · <a href="#see-the-difference">See an example</a> · <a href="#built-on-ux-research-and-practice">Research & principles</a> · <a href="docs/public/coverage.md">Coverage</a> · <a href="CONTRIBUTING.md">Contribute</a></p>

Design, audit, implement, and validate interfaces using UX principles, psychology research, and concrete checks.

UX Kit helps your agent decide **what needs to change, what should stay, and how to check the result** across web and native mobile interfaces.

It connects the user's task to evidence, a fitting UX principle, a concrete intervention and a regression check. The aim is a more usable product with its identity and useful behavior intact.

## Install

Requires Node.js/npm for these installer commands. Run from your project directory.

### Codex

```sh
npx skills@1.7.4 add flklr-dev/ux-kit --skill ux-kit -a codex --copy
```

Then invoke it in Codex:

```text
$ux-kit Audit this feature. Preserve what works and give concrete recommendations and checks. Do not edit files.
```

### Claude Code

```sh
npx skills@1.7.4 add flklr-dev/ux-kit --skill ux-kit -a claude-code --copy
```

Then invoke it in Claude Code:

```text
/ux-kit Audit this feature. Preserve what works and give concrete recommendations and checks. Do not edit files.
```

Use an agent version with local Agent Skills support. Refresh the session if the new skill does not appear. Both project-copy installation routes have been checked on Windows. [All-project setup, manual installation and troubleshooting](docs/public/installation.md)

Ordinary use needs no UX Kit runtime, API key, account or server. Your agent supplies the tools needed to inspect or change your product.

## See the difference

A checkout shows **$19.00 in items**, a selected **$4.99 Express upgrade**, and two unresolved fees.

| Decision | UX Kit's approach |
|---|---|
| What is the problem? | A person cannot yet know the complete payable amount. |
| What should stay? | Recognizable items, editable quantities, compact delivery choices and familiar copy. |
| What should change? | Show **Subtotal $23.99**, name the missing fees, and reveal the complete total before commitment. |
| What needs checking? | Change delivery/quantity, delay fee loading, retry a failure, and verify the same entered details survive. |

The next button's label follows its actual effect. A review step is proposed only when the flow needs one. More whitespace, fewer controls or a longer label is not automatically a UX improvement.

**Try the [BasketBay demo](examples/interactive-basketbay/README.md)** for quantity changes, promo correction, optional repeat setup and simulated failures. It runs locally and never takes payment.

## Four ways to use it

| Mode | Ask for | Get |
|---|---|---|
| **Design** | “Design a permission request with denial and fallback.” | A proposed journey, states, tradeoffs and checks. |
| **Audit** | “Review this checkout; preserve what works.” | Prioritized findings with evidence and confidence. |
| **Implement** | “Fix this form error using our existing components.” | Authorized changes and verification. |
| **Validate** | “Does this retry fix preserve pending edits?” | The original problem compared with the observed result. |

Audit and design requests do not authorize product edits. UX Kit follows your scope and your agent's permissions.

## Built on UX research and practice

**137 canonical entries · 15 topic guides · 12 feature guides**

UX Kit draws on human–computer interaction research, cognitive psychology, usability practice, accessibility standards and platform guidance:

| Foundation | How it informs the skill |
|---|---|
| **Fitts's law** | Assess target acquisition, distance and effective hit regions. |
| **Hick–Hyman law** | Investigate choice demands and organize difficult decisions. |
| **Miller's memory research and chunking** | Group meaningful information and avoid unnecessary recall. |
| **Gestalt perception** | Make relationships, groups and visual hierarchy easier to interpret. |
| **Nielsen's usability heuristics** | Review feedback, consistency, control, recognition and error recovery. |
| **Norman's signifiers and affordances** | Make actions and their effects understandable. |
| **WCAG and platform guidance** | Ground accessibility and native recommendations in scoped requirements. |

[Laws of UX](https://lawsofux.com/) is one named-concept reference. UX Kit also links original research and authoritative guidance; a popular summary is not treated as a universal rule. For example, memory research does not establish a fixed maximum number of navigation buttons.

Each entry explains **when it helps, when it does not, what conflicts with it, and how to check it**. [Read the foundations and source bibliography](docs/public/foundations.md) · [Browse coverage](docs/public/coverage.md) · [Inspect the source registry](skills/ux-kit/references/source-registry.json)

## Fits your product

- Keep the existing stack, design system, useful imagery, familiar labels and working routes.
- Review empty, loading, error, offline, interrupted and partial-result states where relevant.
- Separate observed behavior from source inspection and hypotheses.
- Give severity and confidence separately; avoid arbitrary overall UX scores.
- Check changed tasks and retained tasks on the target platform.

UX Kit complements art-direction, visual-design and engineering-process skills. Test consequential recommendations against your product: a screenshot cannot establish keyboard, network or recovery behavior. [Verification and scope](docs/public/evidence.md)

## Contribute

A useful issue names the task, evidence, consequence and a reproducible check. A useful principle includes a counterexample and an honest limit.

[Contribution guide](CONTRIBUTING.md) · [Report a problem](https://github.com/flklr-dev/ux-kit/issues/new/choose) · [Security](docs/public/security.md)

Licensed under [MIT](LICENSE). The installed skill includes its own license copy. Linked research, standards and other third-party material retain their original rights.
