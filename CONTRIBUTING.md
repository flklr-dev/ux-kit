# Contributing to UX Kit

Improve a person's ability to complete a real task while preserving what already works. Guidance should connect evidence, user consequence, a proportionate intervention, a tradeoff and a check.

## Report a problem

Include the skill commit, agent/version, requested mode, sanitized task/context, expected behavior and actual result. Name the affected area and whether it was observed in source, browser, native device or a still image. Include failures and retained working behavior. Do not publish customer data, confidential source, credentials or raw private traces.

## Change guidance

- Search the canonical index before adding a principle; prefer a correction over an overlapping entry.
- Use original explanations/examples and an authoritative source supporting the specific claim.
- State conditions, limits, counterexamples and conflicts. Distinguish standards/platform requirements from heuristics and hypotheses.
- Preserve existing permissions, audit boundaries, product facts and stack.
- Avoid universal psychological limits, invented observations, arbitrary UX scores or unmeasured business/token claims.
- Keep detailed task-specific guidance in fitting references. More mandatory reading is not automatically better.

## Check a change

```sh
python -m pip install PyYAML==6.0.3
python -m unittest discover -s tests -p "test_release_package.py" -v
python -m unittest discover -s tests -p "test_public_payload.py" -v
python -m scripts.validate_repository --expanded --routing
node --test examples/interactive-basketbay/model.test.mjs
```

These check packaging, documentation routes, source structure and the demo model. A behavior change also needs an appropriate sanitized task and observed result; structural success alone cannot establish effective guidance. Inspect unchanged tasks as well as the intended improvement. Keep criteria outside the installed skill.

Contributions use the repository's MIT license. Preserve required notices for material actually reused; external links do not grant permission to copy their contents.
