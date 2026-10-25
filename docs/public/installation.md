# Install UX Kit

UX Kit is a portable folder of Markdown guidance and reference metadata. Ordinary use requires no UX Kit runtime, API key, paid service or server. Your coding agent supplies any tools used to inspect or change your product.

## Recommended: project copy

Run inside the project where you want UX Kit available. The pinned installer route uses Node.js/npm and Skills CLI 1.7.4:

```sh
npx skills@1.7.4 add flklr-dev/ux-kit --skill ux-kit -a codex --copy
npx skills@1.7.4 list -a codex
```

For a Claude Code project, replace `-a codex` with `-a claude-code`. This changes the installation target; see the runtime limitations below. Check the installer destination and confirm before replacing an existing copy. A copy is a snapshot and does not automatically follow future upstream edits.

The public repository is [flklr-dev/ux-kit](https://github.com/flklr-dev/ux-kit). This remote command was verified in new Windows projects for Codex and Claude Code: add/list succeeded and all 176 skill files matched public source commit 931a694. [Exact verification and limits](evidence.md)

## Manual copy

Download the repository from GitHub's **Code → Download ZIP**, extract it, and copy the entire `skills/ux-kit` folder into your agent's supported project skill directory. Keep `LICENSE.txt`, `agents/`, all references and metadata together. Copying only `SKILL.md` breaks the detailed workflows.

Verified project-copy destinations on Windows were:

| Agent | Returned installer path | Native behavior evidence |
|---|---|---|
| Codex | `.agents/skills/ux-kit` | Explicit loading/discovery observed in prior local CLI tasks; broad automatic triggering remains unverified |
| Claude Code | `.claude/skills/ux-kit` | Copy/listing verified; task execution stopped at authentication, so native behavior is unverified |

Paths returned by your installer are authoritative. No claim is made that every agent/version uses the same path. Compatibility with other agents is not yet verified.

## First use

Refresh/restart the agent if its skill discovery requires it. Ask it to find UX Kit and run a small read-only task:

> Use UX Kit to audit this form. Identify the most important evidenced problems, preserve what works, and give concrete recommendations and checks. Do not edit files.

In Codex you can explicitly name `$ux-kit`. Confirm the entrypoint and fitting reference were read when traces are available. Listing an installed folder proves the installer result; it does not prove the agent used the guidance correctly.

## Update and removal

Record which upstream commit your copy came from. Review changes and back up any local modifications before replacing it. Global installation, updating and removal have not completed UX Kit's lifecycle validation, so this release provides no tested automatic update/uninstall command. Follow your agent/installer's current documentation and your project's approval rules. Do not overwrite shared or customized skills silently.

## Troubleshooting

- **Skill not found:** check the returned installation path and listing, refresh discovery, and explicitly request UX Kit. A project-scoped install belongs to that project.
- **Missing references:** copy the complete skill folder rather than individual files.
- **Installer cannot download:** check access to GitHub/npm, or use the manual-copy route. Installing requires network access; the installed guidance itself does not.
- **Agent edits during an audit:** stop/review the diff. Audit is advice only; report the request, agent version and loaded skill files in an issue without private source or credentials.
- **Native compatibility:** a successful browser preview does not verify native focus, keyboard, sheets, text scaling or lifecycle behavior. Validate on the target platform.

UX Kit is currently experimental. Installation success does not establish beta/stable quality or full accessibility conformance.
