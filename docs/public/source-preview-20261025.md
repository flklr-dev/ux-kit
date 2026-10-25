# Public source preview — 25 October 2026

Repository: [flklr-dev/ux-kit](https://github.com/flklr-dev/ux-kit). Owner and public visibility verified through the authenticated creation page and public GitHub API. No release tag, stable version or website was created.

## Source and installation

- Initial curated source: `a53db646cf94b2f10b2b39b834ac49f5376c07f1`.
- Portable-checkout source: `931a694e754d35ecbe7454fec63dae6a9e3e8266`. Added `.gitattributes` so public text files consistently check out with LF; guidance content is unchanged.
- Fresh remote Codex and Claude Code project installs used `npx --offline skills@1.7.4 add flklr-dev/ux-kit --skill ux-kit -a <agent> --copy -y`, followed by list with `--json`. The cached CLI still fetched the GitHub repository. Both add/list pairs exited 0.
- All 176installed files in each agent's copy match a fresh public source clone byte for byte. Expanded/routing validation passed in both copies. No existing/global skill was replaced; no lifecycle removal ran.
- Source/public tests:11 package/documentation checks and6 demo model tests passed locally. Development checkout suite:71 tests passed using its existing tokenizer dependency. Public checks deliberately omit internal evaluation fixtures/traces.
- [GitHub Actions run 40166919616](https://github.com/flklr-dev/ux-kit/actions/runs/40166919616): Windows/Ubuntu source workflow completed successfully. Native agent use and Unix installation are outside that workflow.

The documented unpinned branch installation follows current main. To audit an exact source, inspect the commit above rather than assuming a later checkout is identical. Future updates must record their own payload identity.

## Review and package

One fresh reviewer inspected the clean 208-file initial export: no Critical/Important blocker. They found a Minor ZIP reproducibility issue: host-dependent origin metadata. The regression failed before correction, then passed with fixed origin metadata. The final snapshot additionally includes `.gitattributes` and this source record.

The archive builder uses sorted paths, fixed timestamps, stable permission/origin metadata and a SHA256 content manifest. A locally built skill-only ZIP from public source 931a694 contains 176files, SHA256 `99433031a1e1895166f48923f9352bdde97c5dd0bb142d0fa2b4009c77ea8a8a`. It was generated with Python 3.11.9; this records that artifact, not an uploaded GitHub Release asset or a guarantee across different compression libraries. Ordinary installation uses the repository.

Build a new archive without overwriting an existing file:

```sh
python -m scripts.release_package archive --source skills/ux-kit --output dist/ux-kit-experimental.zip
```

The initial public history contains only curated source. Private work logs, raw agent traces, grading answers, sibling-product snapshots and caches remain outside it. Linked external source material retains its original rights.

## Remaining work

Experimental preview, not beta/stable approval. Lifecycle/global/Unix installer checks, broad trigger/behavior evidence, native/assistive and independent human validation remain open. Website work is deliberately deferred by the owner; GitHub Pages can be considered after repository preparation.
