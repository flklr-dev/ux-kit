# Verification

UX Kit includes structural checks, portable reference validation, installation checks and a runnable checkout example.

| Area | Checked | Scope |
|---|---|---|
| Codex installation | Windows project copy, listing and all 176 payload files matched the public source | Prior local tasks also confirmed explicit skill loading. |
| Codex personal installation | Built-in installer copied all 176 files to the user-level skill directory; byte identity and reference validation passed | Availability begins on the next turn; no new native task was executed during installation. |
| Claude Code installation | Windows project copy, listing and all 176 payload files matched the public source | Native task execution was not exercised because local authentication was unavailable. |
| Public CI | Package/documentation tests, expanded references/routing and demo model tests on Windows and Ubuntu | CI does not exercise native agents or the Unix installer. |
| BasketBay example | Six model tests and 14 browser checks | Simulated prices, error correction, retained inputs, retries, duplicate-action guards and narrow/enlarged layouts; no real payment. |

Historical installation checks were tied to source `931a694e754d35ecbe7454fec63dae6a9e3e8266`; later documentation-only changes retain the same installed skill content. [CI run](https://github.com/flklr-dev/ux-kit/actions/runs/40166919616)

## Run the source checks

```sh
python -m pip install PyYAML==6.0.3
python -m unittest discover -s tests -p "test_release_package.py" -v
python -m unittest discover -s tests -p "test_public_payload.py" -v
python -m scripts.validate_repository --expanded --routing
node --test examples/interactive-basketbay/model.test.mjs
```

These commands validate packaging, metadata, reference links, public documentation and the demo model. The example's README describes the optional browser checks.

## Applying the results

Validate recommendations on the actual product and target platform. A source review, a still image, a browser simulation and a physical-device check provide different evidence. Automated checks do not establish full accessibility conformance. Comparative effectiveness, token savings and business outcomes have not been established by these checks.

The skill can miss a problem or suggest an unnecessary change. Review the proposed change, preserve working tasks and test the outcome. Report a sanitized case when the guidance fails. [Contribute](../../CONTRIBUTING.md) · [Security review](security.md)
