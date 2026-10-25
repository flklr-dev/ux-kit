# Native Mobile And Resilience

Verify actual OS, version and framework behavior. Android Back/state/offline guidance does not establish iOS APIs; Apple safe-area/Dynamic Type and gesture guidance has its own scope. Exercise denial, keyboard, interruptions and competing edits on the target app; browser/Node results remain limited evidence.

- [Contextual Permissions and Denial](../principles/permissions.md): Keep permission-free tasks available when optional access is refused.
- [Platform Navigation and Back Behavior](../principles/platform-navigation-and-back-behavior.md): Use the target OS’s navigation and dismissal expectations.
- [Safe Areas and Keyboard Insets](../principles/safe-areas-and-keyboard-insets.md): Keep task controls visible around system and keyboard surfaces.
- [Native Text Scaling](../principles/native-text-scaling.md): Keep native layouts useful at supported text sizes.
- [Discoverable Gesture Alternatives](../principles/discoverable-gesture-alternatives.md): Provide an accessible way to perform gesture-driven actions.
- [Application Interruption and Restoration](../principles/application-interruption-and-restoration.md): Resume an interrupted native task with meaningful context.
- [Offline Capability and Honest Availability](../principles/offline-capability-and-honest-availability.md): Explain which operations remain possible without a connection.
- [Synchronization Conflict Resolution](../principles/synchronization-conflict-resolution.md): Explain conflicting changes and preserve a defensible recovery path.
- [Notification Consent and Control](../principles/notification-consent-and-control.md): Support relevant notifications with understandable controls.

Preserve successful behavior. Prefer scoped accessibility and platform requirements over a conflicting heuristic; report evidence limits.

Merged concepts (count once):
- [Destructive Gesture Recovery](../principles/cancellation.md)
