# Implement

Confirm the intended outcome and authorized scope from the request. Inspect relevant source, existing controls/tokens, and adjacent states. Make the smallest fitting change using the existing stack and platform conventions; preserve unrelated work.

Use the project's appropriate checks for changed behavior. Exercise the consequential success and recovery paths where available. For web inspect keyboard/focus and relevant resizing; for native verify actual native behavior when possible. A responsive browser view is not native-device evidence.

For actions that write or apply changes, consult [action-state guards](../principles/action-state-guards.md): exercise empty selection, repeated activation, pending overlap, partial results and unknown outcomes against actual effects. Preserve editable work and use the operation's real scope.

Report the change, what was actually tested, and remaining gaps. Follow host permissions for consequential actions. Implementation authority does not automatically authorize a deployment, deletion, or external message.
