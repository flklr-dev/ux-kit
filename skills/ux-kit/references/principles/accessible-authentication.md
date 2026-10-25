---
id: UX-FORM-006
name: Accessible Authentication
category: standard
source_ids:
- WCAG-AUTH
domain: forms-onboarding-and-accounts
aliases: []
feature_tags:
- signup-auth
platforms:
- web
related_ids: []
---
**Explanation:** WCAG3.3.8 AA addresses cognitive-function tests during authentication through specified alternatives or assistance.

**Signals:** Login blocks paste and password managers while requiring memorized credentials or transcribed codes.

**Interventions:** Support an appropriate assisting mechanism or allowed alternative; test the real login and recovery path without removing security controls.

**Limits:** The criterion lists alternative/mechanism, object-recognition and personal-content conditions; its described scope is existing-user authentication, not a blanket no-password rule.

**Example:** A sign-in allows a password manager and paste so a user need not memorize and manually retype a code.

**Validation:** Complete login and recovery with supported managers/input methods, checking every step and actual criterion alternatives.

**Counterexample:** A custom secure-looking segmented code control can defeat paste and require transcription.

**Conflicts:** Meet accessibility within the authentication model; convenience must not bypass identity checks.

**Evidence boundary:** Actual criterion and informative explanation inspected; this entry cannot certify full service security or accessibility.

**Useful when:** Support authentication without unnecessary memory or transcription barriers.

Sources: [WCAG-AUTH](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html)
