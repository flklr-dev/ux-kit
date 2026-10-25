"""Validate the actual published payload and public documentation links."""
from pathlib import Path
import re
import unittest
from scripts.validate_repository import validate_skill, validate_routing

ROOT = Path(__file__).resolve().parents[1]


class PublicPayloadTests(unittest.TestCase):
    def test_expanded_skill_is_complete(self):
        self.assertEqual(validate_skill(ROOT / 'skills/ux-kit', expanded=True), [])

    def test_routing_is_portable(self):
        self.assertEqual(validate_routing(ROOT / 'skills/ux-kit'), [])

    def test_public_markdown_links_resolve(self):
        files = [ROOT / name for name in ['README.md', 'CONTRIBUTING.md', 'CHANGELOG.md', 'examples/interactive-basketbay/README.md']]
        files += list((ROOT / 'docs/public').glob('*.md'))
        for file in files:
            for link in re.findall(r'\]\(([^)\s]+)\)', file.read_text(encoding='utf-8')):
                if link.startswith(('https:', 'http:', '#', 'mailto:')): continue
                with self.subTest(file=file.name, link=link):
                    self.assertTrue((file.parent / link.split('#')[0]).is_file(), link)


if __name__ == '__main__': unittest.main()
