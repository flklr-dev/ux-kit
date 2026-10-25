---
id: UX-CONTENT-007
name: Locale-Sensitive Formats
category: heuristic
source_ids:
- ICU-DATES
- ICU-NUMBERS
- ECMA402-DATETIME
domain: content-and-localization
aliases: []
feature_tags:
- forms-editing
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Display and parse dates/numbers with explicit locale, calendar and time-zone meaning, preserving the underlying value.

**Signals:** A numeric date is ambiguous or an amount is parsed using a different decimal convention than its display.

**Interventions:** Use supported locale formatters with explicit record currency, event time zone and instant; confirm ambiguous input rather than guessing. For JavaScript Intl.DateTimeFormat, choose dateStyle/timeStyle shortcuts or explicit component options. A component such as timeZoneName cannot be combined with those style shortcuts. When a visible zone indicator is needed, use compatible explicit components and exercise that exact constructor in the supported runtime.

**Limits:** Locale, currency and time zone are separate; a formatter does not settle business interpretation or secure parsing.

**Example:** A booking shows the event's time zone and an unambiguous date while storing its actual intended instant/date type.

**Validation:** Round-trip realistic localized inputs and test time-zone/date boundaries and display versus stored meaning. Execute proposed replacement snippets, not only the faulty original. Check both ordinary and transition dates using the real named zone; observe the amount/currency and zone indicator. Exact localized spacing or abbreviations can vary by supported runtime; syntax success alone does not prove correct meaning.

**Counterexample:** A midnight conversion can shift a date-only appointment to the prior day.

**Conflicts:** Balance familiar local display with cross-region clarity and exact data semantics.

**Evidence boundary:** Official ICU date mappings/numeric formatting and ECMA-402 DateTimeFormat option compatibility inspected. Product parsing/scheduling contracts and supported-runtime outputs remain implementation checks; no linguistic, visual or legal approval follows.

**Useful when:** Interpret dates, numbers and addresses with explicit locale context.

Sources: [ICU-DATES](https://unicode-org.github.io/icu/userguide/format_parse/datetime/), [ICU-NUMBERS](https://unicode-org.github.io/icu/userguide/format_parse/numbers/), [ECMA402-DATETIME](https://tc39.es/ecma402/#sec-createdatetimeformat)
