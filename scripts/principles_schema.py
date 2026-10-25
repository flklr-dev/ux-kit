"""Shared editorial/routing vocabulary; it does not certify UX correctness."""
import unicodedata

DOMAINS = frozenset((
    'cognition-and-choice', 'perception-and-grouping', 'targeting-and-interaction',
    'learning-and-memory', 'motivation-and-complexity', 'usability-and-control',
    'information-architecture-and-navigation', 'forms-onboarding-and-accounts',
    'commerce-and-trust', 'data-and-expert-tools', 'content-and-localization',
    'accessibility-and-inclusion', 'native-mobile-and-resilience',
    'human-ai-and-agency', 'research-and-evaluation',
))
FEATURES = frozenset((
    'signup-auth', 'onboarding-permissions', 'forms-editing', 'checkout-payments',
    'subscriptions-cancellation', 'search-filtering', 'navigation-menus',
    'dashboards-tables', 'uploads-background', 'offline-sync', 'ai-review-bulk', 'settings-privacy',
))
PLATFORMS = frozenset(('platform-agnostic', 'web', 'ios', 'android'))
EXPANDED_METADATA = ('domain', 'aliases', 'feature_tags', 'platforms', 'related_ids')
EXPANDED_FIELDS = ('Evidence boundary', 'Counterexample', 'Conflicts')


def alias_key(value: str) -> str:
    return ''.join(c for c in unicodedata.normalize('NFKD', value).casefold() if c.isalnum())
