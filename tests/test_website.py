"""Validate the generated public artifact, its real sources and its boundaries."""
import importlib.util
from html.parser import HTMLParser
from pathlib import Path
import unittest
from urllib.parse import unquote, urlsplit
import uuid
import zipfile

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('uxkit_website', ROOT / 'website/build.py')
site = importlib.util.module_from_spec(spec)
spec.loader.exec_module(site)

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.links=[]; self.ids=[]; self.feed(text)
    def handle_starttag(self, tag, attrs):
        attrs=dict(attrs)
        if 'id' in attrs: self.ids.append(attrs['id'])
        for key in ['href','src']:
            if key in attrs: self.links.append(attrs[key])

class WebsiteTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        # Retain generated test builds; never remove a user's existing files.
        cls.output=site.build(ROOT / 'dist' / ('website-check-'+uuid.uuid4().hex[:10]))
    def test_all_entries_and_domains_are_present(self):
        data=site.entries(); self.assertEqual(len(data),137)
        self.assertEqual({e['domain'] for e in data},set(site.TOPICS))
        markup=Page((self.output/'library.html').read_text(encoding='utf-8'))
        self.assertTrue(all(e['id'] in markup.ids for e in data))
    def test_local_links_assets_anchors_and_unique_ids(self):
        for name in ['index.html','library.html','guide.html']:
            text=(self.output/name).read_text(encoding='utf-8')
            self.assertNotIn('{{',text); parsed=Page(text)
            self.assertEqual(len(parsed.ids),len(set(parsed.ids)))
            for link in parsed.links:
                parts=urlsplit(link)
                if parts.scheme or parts.netloc: continue
                path=self.output/(unquote(parts.path) or name)
                with self.subTest(page=name,link=link):
                    self.assertTrue(path.is_file(),str(path))
                    if parts.fragment and path.suffix=='.html':
                        self.assertIn(parts.fragment,Page(path.read_text(encoding='utf-8')).ids)
    def test_download_is_complete_and_matches_canonical_bytes(self):
        archive=next(self.output.glob('ux-kit-*.zip'))
        files=[p for p in (ROOT/'skills/ux-kit').rglob('*') if p.is_file()]
        with zipfile.ZipFile(archive) as z:
            self.assertEqual(len(z.namelist()),len(files))
            for file in files:
                self.assertEqual(z.read('ux-kit/'+file.relative_to(ROOT/'skills/ux-kit').as_posix()),file.read_bytes())
    def test_build_rejects_source_or_arbitrary_destinations(self):
        for path in [ROOT,ROOT/'website',ROOT/'dist',ROOT.parent/'outside-ux-kit']:
            with self.subTest(path=path),self.assertRaises(ValueError): site.build(path)
    def test_only_public_site_assets_are_bundled(self):
        for file in self.output.rglob('*'):
            parts = file.relative_to(self.output).parts
            self.assertNotIn('.scratch',parts)
            self.assertNotIn('work-log',parts)
            self.assertNotIn('evals',parts)
        self.assertTrue((self.output/'assets/fonts/OFL.txt').is_file())
        self.assertFalse((self.output/'demo').exists())
        self.assertFalse((self.output/'assets/basketbay-demo.png').exists())

if __name__=='__main__': unittest.main()
