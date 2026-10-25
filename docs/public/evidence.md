# Evidence and current status

**25 October 2026: experimental source preview. Public beta and stable quality gates have not passed.** The repository can be inspected and installed while those limits remain visible. No formal version/tag or stable release is implied by making source public.

## What has been checked

| Evidence | What it supports | What it leaves open |
|---|---|---|
| Complete source/routing validation | Required metadata, canonical entries and portable references | Recommendation correctness on every task |
| Windows GitHub project-copy install/list and byte checks for Codex/Claude Code |176/176 files match public source commit 931a694 in both new isolated folders; copied references validate | Global/update/removal lifecycle, Unix install and all agent versions |
| GitHub Actions Windows/Ubuntu source checks | Public package tests, documentation/structure/routing checks and demo model workflow passed | Unix installer/native agent execution or full behavior evaluation |
| Prior Codex CLI tasks with observed skill reads | Explicit loading and fitting reference use in tested tasks | General implicit-trigger accuracy |
| Claude Code project copy/list | Files installed and listed | Native execution; attempted task stopped at authentication |
| Disclosed text/code evaluations with strong controls | Some useful targeted outcomes; ties and failures retained | Broad superiority, causal effect size or token savings |
| Focused handoff correction |124/125 original manual judgments and 11/11 new-context judgments passed in disclosed development cases | One full-width omission, an awkward wording defect and other historical failures remain |
| BasketBay simulation |6 model tests / 14 browser checks passed after review corrections | Real payments, native use, independent holdout or human usability results |
| Owner review of BasketBay | Owner reports the example improved | A representative user study or quantified business impact |

The BasketBay browser checks exercised price changes, correction, pending guards, retained values, retries, repeat disclosure, duplicate submission and narrow/enlarged text. A reviewer caught Enter in promo incorrectly committing an order; that case failed before correction and passed afterward. Layout failures were also retained during development. A checked example is not a guarantee that another agent will produce the same behavior.

## Important limitations

- Strong unassisted controls tied or beat UX Kit on some development tasks. Longer guidance alone has not demonstrated an effectiveness advantage.
- Older outputs include unknown-write recovery failures, incomplete commerce copy, a formatter error, unnecessary changes and preservation omissions. Later focused corrections do not retroactively make those outputs pass.
- The same implementer knew many criteria and performed some grading; model/time/environment equivalence was incomplete. Development cases have been disclosed and need replacement before a new independent holdout claim.
- No full screen-reader, native device, multi-platform lifecycle or representative human acceptance study has been completed for this release.
- A screenshot supports visible findings; it cannot establish network, focus, keyboard, recovery or actual backend effects. Clean structural or automated accessibility checks do not establish full conformance.
- Token counts are maintenance diagnostics. UX Kit makes no token-efficiency, conversion, legal-compliance or universal reliability claim.

## Reproducible checks in this repository

```sh
python -m pip install PyYAML==6.0.3
python -m unittest discover -s tests -p "test_release_package.py" -v
python -m unittest discover -s tests -p "test_public_payload.py" -v
python -m scripts.validate_repository --expanded --routing
node --test examples/interactive-basketbay/model.test.mjs
```

The public export intentionally excludes raw agent traces, private product context, local work logs and grading answer keys. Its runnable tests cover package safety, installed-payload structure, reference portability and the demo model. They do not reproduce the historical paid/native evaluation screen. Historical aggregate findings above are maintainer-reported development evidence, with their limitations disclosed.

## Public-source verification

Source is published at [flklr-dev/ux-kit](https://github.com/flklr-dev/ux-kit). Fresh remote installs at source commit `931a694e754d35ecbe7454fec63dae6a9e3e8266` used Node 24.22.0 and cached Skills CLI 1.7.4 on Windows. Both Codex and Claude Code add/list commands exited 0; all 176copied skill files matched a fresh public clone, and expanded/routing validation passed in each installed copy. Only npm CLI resolution was cached; the installer downloaded the real GitHub source.

[Windows/Ubuntu CI run](https://github.com/flklr-dev/ux-kit/actions/runs/40166919616) completed successfully for that source. CI tests source/package behavior; it does not run native agents, paid model tasks or the GitHub installer. A later docs-only commit can reference these results while the installed skill bytes remain identical. [Source preview record](source-preview-20261025.md) · [Release checklist](release-checklist.md)

## How to contribute useful evidence

Use a small sanitized task, identify the exact skill commit and agent version, and record the original difficulty, proposed change, regression check and observed result. Include preserved behavior and failed attempts. Keep credentials, customer data and confidential source out of public issues. [Contribution guide](../../CONTRIBUTING.md)
