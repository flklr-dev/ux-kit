# Evidence and current status

**25 October 2026: experimental source preview. Public beta and stable quality gates have not passed.** The repository can be inspected and installed while those limits remain visible. No formal version/tag or stable release is implied by making source public.

## What has been checked

| Evidence | What it supports | What it leaves open |
|---|---|---|
| Complete source/routing validation | Required metadata, canonical entries and portable references | Recommendation correctness on every task |
| Local Windows project-copy install/list and byte checks | Complete payload installation in new isolated folders | Global/update/removal lifecycle, Unix install and all agent versions |
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

Pending initial source publication and clean remote install at the time this page was drafted. The release-preparation record will be updated from actual results. [Release checklist](release-checklist.md)

## How to contribute useful evidence

Use a small sanitized task, identify the exact skill commit and agent version, and record the original difficulty, proposed change, regression check and observed result. Include preserved behavior and failed attempts. Keep credentials, customer data and confidential source out of public issues. [Contribution guide](../../CONTRIBUTING.md)
