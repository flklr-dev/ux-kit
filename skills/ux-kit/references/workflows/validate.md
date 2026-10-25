# Validate

Compare the proposed or implemented change against the original user difficulty. Identify which acceptance checks can be exercised with available tools and evidence.

Check the main action and relevant error, retry, interruption, partial completion and return paths. Inspect nearby behavior for regression. Separate code inspection, structural tests, runtime interaction, automated accessibility checks, manual assistive checks, and real-user research.

For whole-screen acceptance, use the [screen coverage and handoff checks](screen-review.md). Compare the actual artifact with the specified navigation destinations, information, actions and layers as well as the original difficulty. Mark unresolved mismatches and unavailable evidence explicitly; a better-looking image alone does not close behavioral checks.

Compare original and revised task clarity, component footprint, useful identity/routes, exact copy and factual/action scope. Report an excessive or unsupported recommendation separately from a generator/implementation mismatch. Check for new scrolling, repeated warnings, missing comparison states and extra review steps; keep justified accessibility and commitment safeguards. A request to preserve working styling does not certify its unmeasured accessibility or behavior.

For a concrete executable replacement, include `Replacement | Replacement check | Remaining limits`. The check states whether that exact proposed code ran with realistic inputs, its observed result and runtime. When an authorized local runtime is available, exercise the replacement in memory before calling it checked. When execution is unavailable, mark the replacement untested. Keep original-code checks separate: running the faulty implementation does not verify its proposed fix. Read-only validation keeps supplied files unchanged and does not authorize external effects.

Return addressed / unresolved / untested, with evidence. Do not invent completion or infer a business result from a plausible design. Choose a proportional next method: direct interaction for behavior, representative task testing for comprehension, or an experiment for a causal business claim.
