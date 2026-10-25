---
id: UX-FORM-009
name: Multi-Step Progress and Branching
category: heuristic
source_ids:
- GOV-QUESTIONS
domain: forms-onboarding-and-accounts
aliases: []
feature_tags:
- forms-editing
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Progress should describe the actual conditional path and preserve answers when people move between steps.

**Signals:** The form always says Step2 of3 although a branch adds several required questions.

**Interventions:** Use a reliable total only when known; otherwise communicate the current section and meaningful remaining tasks, with correction paths.

**Limits:** One-question-per-page and a particular progress style are scoped pattern choices, not universal requirements.

**Example:** A permit form explains which section comes next after a branch instead of showing a false fixed percentage.

**Validation:** Traverse each branch, move Back, change a branching answer and verify retained relevant values and progress.

**Counterexample:** A beautiful progress bar can hide an expanding path or count optional tasks as required.

**Conflicts:** Truthful state, useful comparison and navigation outweigh an assumed motivation benefit.

**Evidence boundary:** Official reliable-total and conditional-section limitations inspected; the branch-state contract needs implementation checks.

**Useful when:** Communicate meaningful progress through conditional form paths.

Sources: [GOV-QUESTIONS](https://design-system.service.gov.uk/patterns/question-pages/)
