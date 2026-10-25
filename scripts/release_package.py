"""Curate public source and build a reproducible skill archive. Never overwrites."""
import argparse
import hashlib
import json
from pathlib import Path, PurePosixPath
import shutil
import zipfile


def safe_relative(name):
    path = PurePosixPath(name)
    if not name or '\\' in name or ':' in name or path.is_absolute() or '..' in path.parts:
        raise ValueError(f'Unsafe public path: {name}')
    forbidden = {'.git', '.scratch', '.tools', '.superpowers', '__pycache__', 'node_modules', 'work-log', 'memories', 'raw', 'results'}
    if any(part in forbidden or part.startswith('.env') for part in path.parts):
        raise ValueError(f'Private/development path: {name}')
    if path.suffix.lower() in {'.pem', '.key', '.p12', '.pfx', '.db', '.sqlite', '.log', '.jsonl'}:
        raise ValueError(f'Sensitive/unexpected file type: {name}')
    return path


def checked_file(root, file):
    if file.is_symlink() or any(parent.is_symlink() for parent in file.parents if parent != root and parent.is_relative_to(root)):
        raise ValueError(f'Symlink is not permitted: {file.name}')
    if not file.resolve().is_relative_to(root.resolve()):
        raise ValueError('File escapes source root')
    relative = file.relative_to(root).as_posix()
    safe_relative(relative)
    if not file.is_file(): raise ValueError(f'Missing source file: {relative}')
    return relative


def export_repository(root, target):
    root, target = Path(root).resolve(), Path(target).absolute()
    if target.exists(): raise FileExistsError(f'Export target already exists: {target}')
    manifest = json.loads((root / 'release/public-manifest.json').read_text(encoding='utf-8'))
    selected = set()
    for name in manifest['files']:
        safe_relative(name)
        file = root / name
        checked_file(root, file); selected.add(file)
    for name in manifest['directories']:
        safe_relative(name)
        directory = root / name
        if directory.is_symlink() or not directory.is_dir(): raise ValueError(f'Invalid directory: {name}')
        for file in directory.rglob('*'):
            if file.is_symlink(): raise ValueError(f'Symlink is not permitted: {file.name}')
            if file.is_file(): checked_file(root, file); selected.add(file)
    # Complete validation occurs before the target is created.
    hashes = {}
    for file in sorted(selected, key=lambda item: item.relative_to(root).as_posix()):
        relative = file.relative_to(root)
        dest = target / relative
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(file, dest)
        hashes[relative.as_posix()] = hashlib.sha256(dest.read_bytes()).hexdigest()
    return {'file_count': len(hashes), 'files': hashes}


def build_skill_archive(payload, archive):
    payload, archive = Path(payload).resolve(), Path(archive).absolute()
    if archive.exists(): raise FileExistsError(f'Archive already exists: {archive}')
    if payload.name != 'ux-kit' or not all((payload / name).is_file() for name in ['SKILL.md', 'LICENSE.txt']):
        raise ValueError('Complete ux-kit payload and license required')
    files = []
    for file in sorted(payload.rglob('*'), key=lambda item: item.relative_to(payload).as_posix()):
        if file.is_symlink(): raise ValueError('Symlinks are not permitted in skill archive')
        if file.is_file(): checked_file(payload, file); files.append(file)
    hashes = {}
    archive.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(archive, 'x', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as output:
        for file in files:
            name = f'ux-kit/{file.relative_to(payload).as_posix()}'
            data = file.read_bytes()
            info = zipfile.ZipInfo(name, date_time=(2026, 1, 1, 0, 0, 0))
            info.create_system = 3  # Stable Unix-origin metadata on every build host.
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            output.writestr(info, data, compresslevel=9)
            hashes[name] = hashlib.sha256(data).hexdigest()
    return {'sha256': hashlib.sha256(archive.read_bytes()).hexdigest(), 'file_count': len(files), 'files': hashes}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('mode', choices=['export', 'archive'])
    parser.add_argument('--source', type=Path, required=True)
    parser.add_argument('--output', type=Path, required=True)
    args = parser.parse_args()
    result = export_repository(args.source, args.output) if args.mode == 'export' else build_skill_archive(args.source, args.output)
    print(json.dumps(result, indent=2))


if __name__ == '__main__': main()
