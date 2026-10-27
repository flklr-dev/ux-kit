"""Check the generated site's public search and agent-discovery surface."""
import importlib.util
from html.parser import HTMLParser
from pathlib import Path
import unittest
import uuid
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('seo_website', ROOT / 'website/build.py')
site = importlib.util.module_from_spec(spec)
spec.loader.exec_module(site)


class Head(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.meta, self.links, self.title, self.in_title = {}, {}, '', False
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'title': self.in_title = True
        if tag == 'meta': self.meta[attrs.get('name', attrs.get('property', ''))] = attrs.get('content', '')
        if tag == 'link': self.links[attrs.get('rel', '')] = attrs.get('href', '')

    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False

    def handle_data(self, data):
        if self.in_title: self.title += data


class SearchDiscoveryTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.output = site.build(ROOT / 'dist' / ('seo-check-' + uuid.uuid4().hex[:10]))

    def test_pages_have_unique_descriptive_metadata_and_canonical_urls(self):
        titles, descriptions = set(), set()
        for page in ('index.html', 'library.html', 'guide.html'):
            head = Head((self.output / page).read_text(encoding='utf-8'))
            with self.subTest(page=page):
                self.assertIn('UX Kit', head.title)
                self.assertTrue(head.meta.get('description'))
                self.assertNotIn('noindex', head.meta.get('robots', '').lower())
                self.assertEqual(head.links.get('canonical'), site.BASE + ('' if page == 'index.html' else page))
                self.assertEqual(head.meta.get('og:url'), head.links['canonical'])
                self.assertTrue(head.meta.get('og:image', '').startswith(site.BASE))
                titles.add(head.title); descriptions.add(head.meta['description'])
        self.assertEqual(len(titles), 3)
        self.assertEqual(len(descriptions), 3)
        self.assertIn('Codex', Head((self.output / 'index.html').read_text(encoding='utf-8')).title)

    def test_sitemap_lists_real_canonical_pages(self):
        tree = ET.parse(self.output / 'sitemap.xml')
        locations = {e.text for e in tree.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')}
        self.assertEqual(locations, {site.BASE, site.BASE + 'library.html', site.BASE + 'guide.html'})

    def test_agent_overview_links_to_truthful_public_sources(self):
        overview = (self.output / 'llms.txt').read_text(encoding='utf-8')
        for value in ('UX Kit', 'Codex', 'Claude Code', site.BASE, site.REPO, 'illustrative'):
            self.assertIn(value, overview)
        self.assertNotIn('noindex', overview.lower())


if __name__ == '__main__': unittest.main()
