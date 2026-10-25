"""Validate skill packaging and traceability, not recommendation correctness."""
import argparse
from datetime import date
import json
from pathlib import Path
import re

import yaml
from scripts.principles_schema import (
    DOMAINS, FEATURES, PLATFORMS, EXPANDED_METADATA, EXPANDED_FIELDS, alias_key,
)


CATEGORIES = {'standard', 'platform', 'research', 'heuristic', 'hypothesis'}
FIELDS = ('Explanation', 'Useful when', 'Signals', 'Interventions', 'Limits', 'Example', 'Validation')


def frontmatter(path: Path) -> tuple[dict, str]:
    text = path.read_text(encoding='utf-8')
    lines = text.splitlines()
    if not lines or lines[0] != '---':
        raise ValueError(f'{path.name}: missing frontmatter')
    end = lines.index('---', 1)
    data = yaml.safe_load('\n'.join(lines[1:end]))
    if not isinstance(data, dict):
        raise ValueError(f'{path.name}: metadata must be a mapping')
    return data, text


def inside(payload: Path, relative: str) -> Path:
    if not isinstance(relative, str) or not relative or Path(relative).is_absolute():
        raise ValueError('invalid or absolute path')
    target = (payload / relative).resolve()
    if not target.is_relative_to(payload.resolve()):
        raise ValueError('path outside payload')
    return target


def has_field(text: str, field: str) -> bool:
    match = re.search(r'^\*\*'+re.escape(field)+r':\*\*([^\r\n]*)', text, flags=re.M)
    return bool(match and match[1].strip() and not match[1].strip().startswith('**'))


def validate_expanded_entry(meta: dict, text: str, *, known_ids: set[str]) -> list[str]:
    errors = []
    if not isinstance(meta.get('domain'), str) or meta['domain'] not in DOMAINS:
        errors.append('invalid or missing domain')
    for key, allowed, required in (
        ('aliases', None, False), ('feature_tags', FEATURES, True),
        ('platforms', PLATFORMS, True), ('related_ids', known_ids, False),
    ):
        value = meta.get(key)
        if (not isinstance(value, list) or (required and not value)
            or any(not isinstance(v,str) or not v.strip()
                   or (allowed is not None and v not in allowed) for v in value)):
            errors.append(f'invalid or missing {key}')
        elif key == 'aliases' and any(not alias_key(v) for v in value):
            errors.append('invalid empty normalized aliases')
    for field in (*FIELDS, *EXPANDED_FIELDS):
        if not has_field(text, field):
            errors.append(f'missing {field}')
    return errors


def validate_skill(payload: Path, *, expanded: bool = False) -> list[str]:
    payload = payload.resolve()
    errors = []
    try:
        meta, core = frontmatter(payload/'SKILL.md')
        if meta.get('name') != 'ux-kit' or payload.name != 'ux-kit':
            errors.append('name must be ux-kit and match directory')
        if meta.get('license') != 'MIT' or not (payload/'LICENSE.txt').is_file():
            errors.append('MIT license must be declared and bundled in LICENSE.txt')
        description = meta.get('description')
        if not isinstance(description, str) or not 1 <= len(description) <= 1024:
            errors.append('invalid description')
        if len(core.splitlines()) > 250:
            errors.append('entrypoint exceeds 250-line project ceiling')
        registry = json.loads((payload/'references/source-registry.json').read_text(encoding='utf-8'))
        index = json.loads((payload/'references/knowledge-index.json').read_text(encoding='utf-8'))
        sources, entries = registry['sources'], index['entries']
        if not isinstance(sources, list) or not isinstance(entries, list) or not sources or not entries:
            raise ValueError('source and entry collections must be nonempty lists')
        ids = set()
        for source in sources:
            required = {'id','title','url','author','category','supports','verified_on','access_notes','reuse_notes'}
            if not isinstance(source, dict) or not required.issubset(source):
                raise ValueError('source missing required fields')
            source_id = source['id']
            if not isinstance(source_id, str) or not source_id:
                raise ValueError('invalid source ID')
            if source_id in ids:
                errors.append(f'duplicate source: {source_id}')
            ids.add(source_id)
            if not isinstance(source['url'], str) or not source['url'].startswith('https://'):
                errors.append(f'{source_id}: invalid source URL')
            if source['category'] not in CATEGORIES or not str(source['supports']).strip():
                errors.append(f'{source_id}: invalid source category or claim')
            try:
                date.fromisoformat(source['verified_on'])
            except (ValueError, TypeError):
                errors.append(f'{source_id}: invalid verification date')
        seen = set()
        indexed_paths = set()
        known_ids = {entry['id'] for entry in entries}
        aliases = {}
        for entry in entries:
            entry_id = entry['id']
            if not isinstance(entry_id, str) or not re.fullmatch(r'UX-[A-Z]+-\d{3}', entry_id):
                raise ValueError('invalid entry ID')
            if entry_id in seen:
                errors.append(f'duplicate entry: {entry_id}')
            seen.add(entry_id)
            refs = entry['source_ids']
            if not isinstance(refs, list) or not refs or any(ref not in ids for ref in refs):
                errors.append(f'{entry_id}: unknown source')
            try:
                path = inside(payload, entry['path'])
            except ValueError as error:
                errors.append(f'{entry_id}: {error}')
                continue
            if path in indexed_paths:
                errors.append(f'{entry_id}: canonical file listed more than once')
            indexed_paths.add(path)
            if not path.is_file():
                errors.append(f'{entry_id}: missing file')
                continue
            data, text = frontmatter(path)
            if data.get('id') != entry_id:
                errors.append(f'{entry_id}: canonical ID mismatch')
            if data.get('source_ids') != refs:
                errors.append(f'{entry_id}: source IDs differ from canonical entry')
            if data.get('category') not in CATEGORIES or not data.get('name'):
                errors.append(f'{entry_id}: invalid canonical metadata')
            for field in FIELDS:
                if not has_field(text, field):
                    errors.append(f'{entry_id}: missing {field}')
            if expanded:
                errors.extend(f'{entry_id}: {e}' for e in validate_expanded_entry(data, text, known_ids=known_ids))
                for key in EXPANDED_METADATA:
                    if entry.get(key) != data.get(key):
                        errors.append(f'{entry_id}: expanded metadata mismatch: {key}')
                names = data.get('aliases', [])
                if isinstance(names, list):
                    for name in [data.get('name'), *names]:
                        if not isinstance(name, str) or not alias_key(name):
                            continue
                        key = alias_key(name)
                        if key in aliases and aliases[key] != entry_id:
                            errors.append(f'{entry_id}: alias collision with {aliases[key]}: {name}')
                        aliases[key] = entry_id
        for path in payload.rglob('*.md'):
            text = path.read_text(encoding='utf-8')
            canonical = path.is_relative_to(payload/'references/principles')
            if text.splitlines()[:1] == ['---']:
                data, _ = frontmatter(path)
                canonical = canonical or 'id' in data
            if canonical and path.resolve() not in indexed_paths:
                errors.append(f'{path.relative_to(payload)}: unindexed canonical entry')
            prose = re.sub(r'```.*?```', '', text, flags=re.S)
            for link in re.findall(r'\[[^\]]+\]\(([^)]+)\)', prose):
                target = link.split('#',1)[0]
                if not target or re.match(r'[a-zA-Z][\w+.-]*:', target):
                    continue
                resolved = (path.parent/target).resolve()
                if not resolved.is_relative_to(payload) or not resolved.is_file():
                    errors.append(f'{path.relative_to(payload)}: broken link {link}')
    except (OSError, UnicodeError, ValueError, KeyError, TypeError, yaml.YAMLError) as error:
        errors.append(f'invalid repository data: {error}')
    return errors


def validate_routing(payload: Path) -> list[str]:
    payload = payload.resolve()
    errors = []
    try:
        entries = json.loads((payload/'references/knowledge-index.json').read_text(encoding='utf-8'))['entries']
        features = json.loads((payload/'references/feature-map.json').read_text(encoding='utf-8'))['features']
        if not isinstance(features,list) or not features:
            raise ValueError('nonempty feature routes required')
        known = {e['id'] for e in entries}
        routes = set()
        docs = set()
        for route in features:
            feature = route['id']
            if not isinstance(feature,str) or feature not in FEATURES:
                errors.append('unknown feature route');continue
            if feature in routes:errors.append(f'duplicate feature route: {feature}')
            routes.add(feature)
            target = inside(payload,route['path'])
            if target != inside(payload,f'references/features/{feature}.md') or not target.is_file():
                errors.append(f'{feature}: missing or unexpected recipe path')
            else:docs.add(target)
            ids = route['entry_ids']
            if (not isinstance(ids,list) or not ids
                or any(not isinstance(i,str) or i not in known for i in ids)):
                errors.append(f'{feature}: unknown or missing entry IDs')
        for entry in entries:
            domain = entry.get('domain')
            if not isinstance(domain,str) or domain not in DOMAINS:
                errors.append(f'{entry["id"]}: unknown domain');continue
            topic = inside(payload,f'references/topics/{domain}.md')
            if not topic.is_file():errors.append(f'{domain}: missing topic guide')
            else:docs.add(topic)
            tags = entry.get('feature_tags')
            if not isinstance(tags,list) or any(not isinstance(t,str) or t not in routes for t in tags):
                errors.append(f'{entry["id"]}: feature tag has no recipe')
        for path in docs:
            prose = re.sub(r'```.*?```','',path.read_text(encoding='utf-8'),flags=re.S)
            for link in re.findall(r'\[[^\]]+\]\(([^)]+)\)',prose):
                target = link.split('#',1)[0]
                if not target or re.match(r'[a-zA-Z][\w+.-]*:',target):continue
                resolved = (path.parent/target).resolve()
                if not resolved.is_relative_to(payload) or not resolved.is_file():
                    errors.append(f'{path.relative_to(payload)}: broken link {link}')
    except (OSError,UnicodeError,ValueError,KeyError,TypeError) as error:
        errors.append(f'invalid routing data: {error}')
    return errors


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('payload', type=Path, nargs='?', default=Path('skills/ux-kit'))
    parser.add_argument('--expanded', action='store_true', help='require the richer principles contract')
    parser.add_argument('--routing', action='store_true', help='check topic and feature routing')
    args = parser.parse_args()
    errors = validate_skill(args.payload, expanded=args.expanded)
    if args.routing:errors.extend(validate_routing(args.payload))
    print('\n'.join(errors) if errors else 'Structural checks passed; behavior not evaluated by this command.')
    return 1 if errors else 0


if __name__ == '__main__':
    raise SystemExit(main())
