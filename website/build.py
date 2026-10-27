"""Build the public site from templates and the canonical UX Kit library.

Usage: python website/build.py --output dist/site
Only generated files are updated. Never deletes a directory or copies internal docs.
"""
import argparse
import html
import json
from pathlib import Path
import re
import shutil
import sys
import yaml

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from scripts.release_package import build_skill_archive

SITE = ROOT / 'website'
REPO = 'https://github.com/flklr-dev/ux-kit'
BASE = 'https://flklr-dev.github.io/ux-kit/'
TOPICS = {
    'cognition-and-choice': 'Cognition & choice',
    'perception-and-grouping': 'Perception & grouping',
    'targeting-and-interaction': 'Targets & interaction',
    'learning-and-memory': 'Learning & memory',
    'motivation-and-complexity': 'Motivation & complexity',
    'usability-and-control': 'Usability & control',
    'information-architecture-and-navigation': 'Information & navigation',
    'forms-onboarding-and-accounts': 'Forms & accounts',
    'commerce-and-trust': 'Commerce & trust',
    'data-and-expert-tools': 'Data & expert tools',
    'content-and-localization': 'Content & language',
    'accessibility-and-inclusion': 'Accessibility & inclusion',
    'native-mobile-and-resilience': 'Native & resilience',
    'human-ai-and-agency': 'Human–AI interaction',
    'research-and-evaluation': 'Research & evaluation',
}

def esc(value):
    return html.escape(str(value), quote=True)

def entries():
    index = json.loads((ROOT / 'skills/ux-kit/references/knowledge-index.json').read_text(encoding='utf-8'))
    registry = json.loads((ROOT / 'skills/ux-kit/references/source-registry.json').read_text(encoding='utf-8'))
    sources = {s['id']: s for s in registry['sources']}
    result = []
    for item in index['entries']:
        text = (ROOT / 'skills/ux-kit' / item['path']).read_text(encoding='utf-8')
        _, front, body = text.split('---', 2)
        meta = yaml.safe_load(front)
        fields = dict(re.findall(r'\*\*([^*]+):\*\*\s*(.*?)(?=\n\n|\Z)', body, re.S))
        result.append({**item, **meta, 'fields': fields,
                       'sources': [sources[s] for s in meta['source_ids']]})
    return sorted(result, key=lambda e: e['name'].casefold())

def domain_icon(domain):
    return {
        'targeting-and-interaction': 'target', 'learning-and-memory': 'recognition',
        'perception-and-grouping': 'group', 'accessibility-and-inclusion': 'access',
        'native-mobile-and-resilience': 'recovery', 'forms-onboarding-and-accounts': 'recovery',
        'information-architecture-and-navigation': 'path', 'research-and-evaluation': 'research',
        'usability-and-control': 'control', 'human-ai-and-agency': 'control',
        'commerce-and-trust': 'choice', 'cognition-and-choice': 'choice',
    }.get(domain, 'group')

def library_markup(data):
    parts = []
    for entry in data:
        fields = entry['fields']
        source_links = ' · '.join(f'<a href="{esc(s["url"])}">{esc(s["title"])}</a>' for s in entry['sources'])
        more = ''.join(f'<div><h3>{esc(label)}</h3><p>{esc(fields[label])}</p></div>'
                       for label in ['Useful when', 'Signals', 'Interventions', 'Limits', 'Example', 'Validation', 'Counterexample', 'Conflicts', 'Evidence boundary'] if label in fields)
        search = ' '.join([entry['name'], entry['domain'], *entry.get('aliases', []), *entry.get('feature_tags', []), fields.get('Explanation', '')])
        parts.append(f'''<details class="principle" id="{esc(entry['id'])}" data-topic="{esc(entry['domain'])}" data-search="{esc(search.lower())}">
<summary><span class="principle-title-block"><svg class="entry-icon" viewBox="0 0 48 48" aria-hidden="true"><use href="assets/principles.svg#{domain_icon(entry['domain'])}"/></svg><span><strong>{esc(entry['name'])}</strong><span class="principle-summary">{esc(fields.get('Explanation', ''))}</span></span></span><span class="entry-kind">{esc(entry['category'])}</span><span class="expand-icon" aria-hidden="true">+</span></summary>
<div class="principle-body"><p class="topic-name">{esc(TOPICS.get(entry['domain'], entry['domain']))}</p>{more}<div><h3>Sources</h3><p>{source_links}</p><a href="{REPO}/blob/main/skills/ux-kit/{esc(entry['path'])}">Read the full entry on GitHub</a></div></div></details>''')
    return '\n'.join(parts)

def nav(active):
    links = [('index.html', 'Home'), ('library.html', 'Principles'), ('guide.html', 'Guide')]
    items = ''
    for href, name in links:
        current = ' aria-current="page"' if href == active else ''
        items += f'<a href="{href}"{current}>{name}</a>'
    return f'''<a class="skip" href="#main">Skip to content</a><div class="header-shell"><header class="site-header"><a class="wordmark" href="index.html" aria-label="UX Kit home"><img class="brand-mark" src="assets/ux-kit-mark.svg" width="36" height="36" alt="">UX Kit</a><nav aria-label="Main navigation">{items}<a class="github-link" href="{REPO}">GitHub <span aria-hidden="true">↗</span></a><a class="button nav-install" href="index.html#install">Install UX Kit</a></nav></header></div>'''

def footer():
    return f'''<footer class="site-footer"><div class="footer-top"><p>Better decisions.<br>Better interfaces.</p><div><a href="guide.html">Get started</a><a href="{REPO}">Source on GitHub</a><a href="{REPO}/issues/new/choose">Suggest an improvement</a></div></div><div class="footer-wordmark" aria-hidden="true">UX Kit<span>↗</span></div><div class="footer-bottom"><span>Made by <a href="https://github.com/flklr-dev">flklr-dev</a></span><span>Open source. <a href="{REPO}/blob/main/LICENSE">MIT licensed.</a></span><a href="guide.html#credits">Sources & credits</a></div></footer>'''

def build(output):
    output = Path(output).resolve()
    # Never permit the build to overwrite source or an arbitrary directory.
    allowed = (ROOT / 'dist').resolve()
    if not output.is_relative_to(allowed) or output == allowed:
        raise ValueError('Output must be a subdirectory of this repository\'s dist/ folder')
    output.mkdir(parents=True, exist_ok=True)
    data = entries()
    if len(data) != 137:
        raise ValueError('Review website coverage copy after changing the canonical entry count')
    shutil.copytree(SITE / 'assets', output / 'assets', dirs_exist_ok=True, ignore=shutil.ignore_patterns('basketbay-demo.png'))
    for file in ['styles.css', 'refinements.css', 'app.js', 'travel-example.css', 'travel-example.js']:
        shutil.copyfile(SITE / file, output / file)
    for page, title, description in [
        ('index.html', 'UX Kit — UX skill for Codex and Claude Code', 'An open-source UX skill for AI coding agents. Audit and improve web and mobile flows with UX principles, practical checks and research.'),
        ('library.html', 'UX principles and usability library — UX Kit', 'Explore UX principles, usability heuristics and accessibility guidance with examples, limitations, validation checks and sources.'),
        ('guide.html', 'Install the UX Kit agent skill — Codex and Claude Code', 'Install UX Kit for Codex or Claude Code. Learn to design, audit, implement and validate user experiences with an AI coding agent.')]:
        body = (SITE / page).read_text(encoding='utf-8')
        for token, value in {'TRAVEL_EXAMPLE': (SITE / 'travel-example.html').read_text(encoding='utf-8'), 'NAV': nav(page), 'FOOTER': footer(), 'COUNT': str(len(data)), 'ENTRIES': library_markup(data) if page == 'library.html' else '',
                             'TOPICS': ''.join(f'<option value="{key}">{label}</option>' for key, label in TOPICS.items())}.items():
            body = body.replace('{{' + token + '}}', value)
        head = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>{esc(title)}</title><meta name="description" content="{esc(description)}"><meta name="theme-color" content="#06525c"><link rel="canonical" href="{BASE}{'' if page == 'index.html' else page}"><link rel="alternate" type="text/plain" title="UX Kit overview for automated readers" href="{BASE}llms.txt"><meta property="og:title" content="{esc(title)}"><meta property="og:description" content="{esc(description)}"><meta property="og:type" content="website"><meta property="og:url" content="{BASE}{'' if page == 'index.html' else page}"><meta property="og:image" content="{BASE}assets/roam-product-screens.png"><meta property="og:image:alt" content="Illustrative Roam travel website and mobile app concepts"><meta name="twitter:card" content="summary_large_image"><link rel="icon" href="assets/favicon.svg" type="image/svg+xml"><link rel="preload" href="assets/fonts/BricolageGrotesque.ttf" as="font" type="font/ttf" crossorigin><link rel="stylesheet" href="styles.css"><link rel="stylesheet" href="refinements.css"><script src="app.js" defer></script>''' + ('<link rel="stylesheet" href="travel-example.css"><script src="travel-example.js" defer></script>' if page == 'index.html' else '') + '''</head><body>'''
        structured = {
            '@context': 'https://schema.org', '@type': 'WebPage',
            'name': title, 'description': description,
            'url': BASE + ('' if page == 'index.html' else page),
            'about': {
                '@type': 'SoftwareSourceCode', 'name': 'UX Kit',
                'description': 'An open-source UX skill for AI coding agents, including Codex and Claude Code.',
                'url': BASE, 'codeRepository': REPO,
                'license': REPO + '/blob/main/LICENSE',
            },
        }
        json_ld = json.dumps(structured, ensure_ascii=True).replace('<', '\\u003c').replace('>', '\\u003e').replace('&', '\\u0026')
        head = head.replace('</head>', '<script type="application/ld+json">' + json_ld + '</script></head>')
        (output / page).write_text(head + body + '</body></html>', encoding='utf-8')
    (output / '.nojekyll').write_text('', encoding='utf-8')
    (output / '404.html').write_text('<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Page not found — UX Kit</title><h1>This page isn’t here.</h1><p><a href="/ux-kit/">Return to UX Kit</a></p></html>', encoding='utf-8')
    (output / 'robots.txt').write_text(f'User-agent: *\nAllow: /\nSitemap: {BASE}sitemap.xml\n', encoding='utf-8')
    (output / 'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + ''.join(f'<url><loc>{BASE}{p}</loc></url>' for p in ['', 'library.html', 'guide.html']) + '</urlset>', encoding='utf-8')
    shutil.copyfile(SITE / 'llms.txt', output / 'llms.txt')
    # Content-addressed archives preserve previous local builds without overwriting.
    import hashlib
    digest = hashlib.sha256(b''.join(p.read_bytes() for p in sorted((ROOT / 'skills/ux-kit').rglob('*')) if p.is_file())).hexdigest()[:12]
    archive = output / f'ux-kit-{digest}.zip'
    if not archive.exists(): build_skill_archive(ROOT / 'skills/ux-kit', archive)
    for page in ['index.html', 'guide.html']:
        path = output / page
        path.write_text(path.read_text(encoding='utf-8').replace('{{ARCHIVE}}', archive.name), encoding='utf-8')
    print(f'Built {output}: {len(data)} entries; skill archive {archive.name}')
    return output

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', default=str(ROOT / 'dist/site'))
    build(parser.parse_args().output)
