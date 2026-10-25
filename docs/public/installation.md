# Install UX Kit

Use a Codex or Claude Code version that supports local Agent Skills. The Node.js/npm route below uses Skills CLI 1.7.4. UX Kit itself is a folder of guidance and references; it has no executable runtime or API key requirement.

## Codex — project installation

From your project directory:

```sh
npx skills@1.7.4 add flklr-dev/ux-kit --skill ux-kit -a codex --copy
npx skills@1.7.4 list -a codex
```

The verified project destination is `.agents/skills/ux-kit/`. In Codex CLI/IDE, type `$` to select the skill or use `/skills`. You can invoke it directly:

```text
$ux-kit Audit this checkout. Prioritize evidenced problems, preserve working behavior, and give checks. Do not edit files.
```

In a graphical client, use its skill picker or explicitly ask it to use UX Kit. If discovery does not refresh, start a new session.

## Claude Code — project installation

From your project directory:

```sh
npx skills@1.7.4 add flklr-dev/ux-kit --skill ux-kit -a claude-code --copy
npx skills@1.7.4 list -a claude-code
```

The verified project destination is `.claude/skills/ux-kit/`. Invoke the skill in Claude Code:

```text
/ux-kit Audit this checkout. Prioritize evidenced problems, preserve working behavior, and give checks. Do not edit files.
```

You can also ask Claude to use UX Kit by name. Open a new session if the command is missing, and check that you launched Claude Code in the project containing the installation.

## Make it available across projects

For a manual user-level installation, copy the **complete** `skills/ux-kit/` folder from this repository into the directory for your agent:

| Agent | User-level destination | Windows default |
|---|---|---|
| Codex | `~/.agents/skills/ux-kit/` | `%USERPROFILE%\.agents\skills\ux-kit\` |
| Claude Code | `~/.claude/skills/ux-kit/` | `%USERPROFILE%\.claude\skills\ux-kit\` |

The `~` in these paths means your user home folder. Keep `SKILL.md`, `LICENSE.txt`, `agents/` and every reference/metadata file together. Check for an existing customized copy before writing there. A personal copy can affect which same-named skill your agent loads, so keep one intended version and check its location.

Codex also provides the built-in skill installer. Ask it:

```text
Use skill-installer to install UX Kit from flklr-dev/ux-kit, path skills/ux-kit, for my user account. Preserve any existing customized copy.
```

The installer reports its actual destination; it may use the Codex-specific skill directory configured for that installation. Do not assume a particular directory solely from an example.

## Manual project installation

Download the repository with **Code → Download ZIP**, extract it, and copy the entire `skills/ux-kit/` folder to the project directory shown above for your agent. Copying only `SKILL.md` leaves its references unavailable.

## Choose the right task

- **Audit:** diagnose an existing feature without editing it.
- **Design:** propose a journey and its states before implementation.
- **Implement:** make the specifically authorized change using existing components.
- **Validate:** compare a proposed fix with its acceptance checks.

Include the screen, repository files or task context you want reviewed. State any areas that must remain unchanged.

## Updating

A copied skill is a snapshot. Review upstream changes and back up local modifications before replacing your copy. Record the installed commit when you need reproducible results. Follow your agent's current instructions for removal; avoid deleting a shared/customized copy inadvertently.

## Troubleshooting

| Problem | Check |
|---|---|
| Skill not found | Confirm the installed path and installer listing, refresh the session, then invoke it explicitly. |
| Missing reference | Re-copy the entire folder. |
| Wrong version is used | Look for both project and personal copies with the same name. |
| Download fails | Check access to GitHub/npm or use manual installation. |
| Claude slash command is absent | Use a version with local skills support and launch from the correct project. |

Project installation/listing and payload integrity have been checked for both agents on Windows. Codex has prior explicit-loading evidence; Claude task behavior was not exercised because its local authentication was unavailable. [Verification details](evidence.md)

Directory and invocation guidance follows [OpenAI's skill documentation](https://learn.chatgpt.com/docs/build-skills) and [Claude Code's skills documentation](https://code.claude.com/docs/en/skills). Their client-specific discovery and cloud behavior can differ.
