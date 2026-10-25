# Signup Auth

Establish why an account is needed, what identity/security model exists and where people can recover. Distinguish new registration from returning-user authentication; do not invent a guest route or security policy.

**Inspect:** Can a person use supported password managers/paste or an appropriate allowed alternative? Are field purpose, account creation versus sign-in and actual required data clear? Does recovery preserve the intended task without exposing private records?

**Exercise:** Exercise new and existing users, wrong/expired credentials, denied access, correction and return from recovery. Verify actual semantics and service results. Unknown authentication outcome must not become permission to bypass access.

**Preserve and resolve:** Account avoidance is useful only if continuity and identity needs still work. A recurring private-record service may require an account; reduce unnecessary profile collection while retaining legitimate authentication.

**Select references:** Start with one or two entries for the unresolved decision; this list is a lookup, not a required reading bundle.

- [Accessible Authentication](../principles/accessible-authentication.md) — Support authentication without unnecessary memory or transcription barriers.
- [Semantic Input and Autofill](../principles/semantic-input-and-autofill.md) — Choose input purpose and autofill behavior that fits the data.
- [Progressive Profiling](../principles/progressive-profiling.md) — Ask for information when it becomes necessary for the service.
- [Preserve Usable Work During Correction](../principles/preserve-work.md) — Keep valid values after a failed form submission.
- [Error Identification and Correction](../principles/errors.md) — Identify the affected field and a useful next correction.
- [Guest Checkout and Account Choice](../principles/guest-checkout-and-account-choice.md) — Match account requirements to the service rather than forced registration.

**Report:** State the observed difficulty, smallest fitting change, tradeoff and actual checks. Separate source inspection, execution, browser/device evidence and human research. Do not invent a finding or claim an unmeasured benefit.
