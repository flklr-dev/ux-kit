---
id: UX-CONTENT-006
name: Pluralization and Counts
category: heuristic
source_ids:
- ICU-MESSAGES
domain: content-and-localization
aliases: []
feature_tags:
- dashboards-tables
platforms:
- platform-agnostic
related_ids: []
---
**Explanation:** Format complete count messages using the supported language's plural rules instead of English singular/plural concatenation.

**Signals:** A notification builds a sentence from count plus a fixed English noun fragment.

**Interventions:** Use the project's locale-aware message system and give translators complete messages with context.

**Limits:** Plural categories vary by language and count representation; do not invent translations or assume zero always uses plural.

**Example:** A selected-record message is translated as a full unit and tested with counts relevant to each supported locale.

**Validation:** Exercise locale-defined boundary counts and interpolation, reviewing actual translated messages.

**Counterexample:** Appending s when count is not1 fails languages with different grammatical categories.

**Conflicts:** Balance concise interface text with accurate grammar and reviewable action scope.

**Evidence boundary:** Official ICU whole-message/plural guidance inspected; exact runtime support and translation quality need separate checks.

**Useful when:** Communicate quantity correctly across supported languages.

Sources: [ICU-MESSAGES](https://unicode-org.github.io/icu/userguide/format_parse/messages/)
