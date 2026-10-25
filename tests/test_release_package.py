"""Public export must not leak development history or overwrite existing work."""
import hashlib
import json
from pathlib import Path
import tempfile
import unittest
import zipfile

from scripts.release_package import export_repository, build_skill_archive


class ReleasePackageTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.base = Path(self.temp.name)
        self.root = self.base / 'source'
        (self.root / 'release').mkdir(parents=True)
        (self.root / 'skills/ux-kit/references').mkdir(parents=True)
        (self.root / 'skills/ux-kit/SKILL.md').write_text('---\nname: ux-kit\n---\n[ref](references/one.md)')
        (self.root / 'skills/ux-kit/LICENSE.txt').write_text('MIT')
        (self.root / 'skills/ux-kit/references/one.md').write_text('Original explanation')
        (self.root / 'README.md').write_text('Public documentation')
        self.manifest = {'files': ['README.md'], 'directories': ['skills/ux-kit']}
        self.save_manifest()

    def save_manifest(self):
        (self.root / 'release/public-manifest.json').write_text(json.dumps(self.manifest))

    def test_only_allowlisted_files_are_exported(self):
        (self.root / 'private.txt').write_text('DO NOT PUBLISH')
        target = self.base / 'public'
        result = export_repository(self.root, target)
        self.assertFalse((target / 'private.txt').exists())
        self.assertEqual((target / 'skills/ux-kit/references/one.md').read_bytes(), (self.root / 'skills/ux-kit/references/one.md').read_bytes())
        self.assertEqual(result['file_count'], 4)

    def test_existing_export_is_refused_without_mutation(self):
        target = self.base / 'public'
        target.mkdir(); (target / 'user-work.txt').write_text('keep')
        with self.assertRaises(FileExistsError): export_repository(self.root, target)
        self.assertEqual((target / 'user-work.txt').read_text(), 'keep')

    def test_traversal_and_sensitive_names_are_rejected_before_export(self):
        for name in ['../outside', '/outside', '.env', 'docs/work-log/note.md', 'evals/results/raw.json']:
            with self.subTest(name=name):
                self.manifest['files'] = [name]; self.save_manifest()
                target = self.base / 'blocked'
                with self.assertRaises(ValueError): export_repository(self.root, target)
                self.assertFalse(target.exists())

    def test_symlink_escape_is_rejected(self):
        outside = self.base / 'secret.txt'; outside.write_text('not public')
        link = self.root / 'skills/ux-kit/references/leak.txt'
        try: link.symlink_to(outside)
        except OSError: self.skipTest('OS does not permit unprivileged symlinks')
        with self.assertRaises(ValueError): export_repository(self.root, self.base / 'blocked')

    def test_archive_is_deterministic_and_contains_only_complete_payload(self):
        first = self.base / 'a.zip'; second = self.base / 'b.zip'
        a = build_skill_archive(self.root / 'skills/ux-kit', first)
        b = build_skill_archive(self.root / 'skills/ux-kit', second)
        self.assertEqual(first.read_bytes(), second.read_bytes())
        self.assertEqual(a['sha256'], b['sha256'])
        with zipfile.ZipFile(first) as archive:
            self.assertEqual(archive.namelist(), ['ux-kit/LICENSE.txt', 'ux-kit/SKILL.md', 'ux-kit/references/one.md'])
            self.assertEqual(a['files']['ux-kit/references/one.md'], hashlib.sha256(archive.read('ux-kit/references/one.md')).hexdigest())
            self.assertTrue(all(info.create_system == 3 for info in archive.infolist()), 'Archive origin metadata must be platform independent')

    def test_archive_refuses_existing_file(self):
        target = self.base / 'existing.zip'; target.write_bytes(b'user work')
        with self.assertRaises(FileExistsError): build_skill_archive(self.root / 'skills/ux-kit', target)
        self.assertEqual(target.read_bytes(), b'user work')

    def test_unexpected_payload_files_are_rejected(self):
        (self.root / 'skills/ux-kit/.env').write_text('secret')
        with self.assertRaises(ValueError): build_skill_archive(self.root / 'skills/ux-kit', self.base / 'bad.zip')

    def test_missing_license_is_rejected(self):
        incomplete = self.base / 'ux-kit'; incomplete.mkdir()
        (incomplete / 'SKILL.md').write_text('incomplete')
        with self.assertRaises(ValueError): build_skill_archive(incomplete, self.base / 'bad.zip')


if __name__ == '__main__': unittest.main()
