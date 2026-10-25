# Security and sensitive information

UX Kit's installed payload contains guidance and reference metadata. It has no telemetry service, account system or network runtime. The host agent's tools and permissions determine what an agent can access or change; review those permissions for your project.

## Commit review

On 25 October 2026, the public history through `3523cefe944cfadcf3b2927cb2a6bfbd464eba29` was scanned with **Gitleaks 8.30.1**, default rules and full output redaction. All three reachable public commits were scanned; the tool reported **zero secret findings**. A separate path/content review found no credential files, local work logs, raw model traces or sibling-project snapshots in those public trees. The included practice PNG had no EXIF/text metadata.

The working copy of this documentation update was scanned separately and also produced zero findings. This is a dated secret/sensitive-content check, not proof of the absence of every vulnerability, malicious dependency or future exposure.

## Repository utilities

- The example server binds to loopback and is for local practice.
- Package/export helpers refuse existing output targets and check selected paths and symlinks.
- CI has read-only repository-content permissions; external checkout/setup actions are pinned to commit hashes.
- The installed skill contains no benchmark answer keys or raw evaluation traces.

## Reporting a problem

Include the affected commit, relevant file and a sanitized reproduction. Use GitHub private vulnerability reporting if available for sensitive findings. Never paste a live key, password, customer record or confidential source into a public issue. If a credential is exposed, revoke/rotate it through its provider; removing a file in a later commit does not remove the earlier exposure.
