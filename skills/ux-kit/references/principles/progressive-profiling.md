---
id: UX-FORM-008
name: Progressive Profiling
category: heuristic
source_ids:
- GOV-QUESTIONS
- GOV-ACCOUNTS
domain: forms-onboarding-and-accounts
aliases: []
feature_tags:
- signup-auth
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Request information at the point it is genuinely needed for a chosen service task.

**Signals:** A sample browser requires a full address and phone before the user can inspect its value.

**Interventions:** Separate essential identity/service information from optional profile enrichment; explain later requests in context.

**Limits:** Deferral is inappropriate when the information is truly necessary before a consequential operation.

**Example:** An archive tool permits sample browsing, then requests a delivery address only when a physical copy is ordered.

**Validation:** Complete the early task without optional details; inspect the later request's necessity, skip behavior and data use.

**Counterexample:** Calling a mandatory tax question optional to reduce initial friction simply moves the surprise later.

**Conflicts:** Balance early usefulness against actual prerequisites, truthful optionality and data minimization.

**Evidence boundary:** Official question/account guidance inspected; this timing pattern is an original application with no activation or conversion promise.

**Useful when:** Ask for information when it becomes necessary for the service.

Sources: [GOV-QUESTIONS](https://design-system.service.gov.uk/patterns/question-pages/), [GOV-ACCOUNTS](https://design-system.service.gov.uk/patterns/create-accounts/)
