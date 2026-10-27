# Website

The public website is [flklr-dev.github.io/ux-kit](https://flklr-dev.github.io/ux-kit/).

It contains the installation guide, a searchable library generated from the canonical skill files, and an interactive illustrative booking example. The example makes no reservations, sends no messages, and processes no payments. It is an authored demonstration, not a recorded agent run or a user study.

## Build locally

Requires Python 3.11 or newer:

```sh
python -m pip install PyYAML==6.0.3
python website/build.py
python -m http.server 4174 --bind 127.0.0.1 --directory dist/site
```

Open `http://127.0.0.1:4174/`. Generated files go to `dist/site/`; existing directories are never deleted by the builder.

```sh
python -m unittest discover -s tests -p "test_website.py"
```

The optional browser checks in `website/browser-check.mjs` and `website/travel-check.mjs` require Playwright and Microsoft Edge. Set `UXKIT_PLAYWRIGHT` to an importable Playwright module URL if it is not installed in the project. Set `UXKIT_SITE_URL` to check another deployment.

## Publication

The Website workflow validates public source, builds the static site and deploys only `dist/site/` to GitHub Pages after changes reach `main`. Pull requests run the build checks without deploying. No runtime backend, analytics or external scripts are included.

## Search and automated readers

The generated pages contain descriptive titles, descriptions, canonical links and normal HTML text. The sitemap is at [sitemap.xml](https://flklr-dev.github.io/ux-kit/sitemap.xml); submit that URL in a verified Google Search Console property to inspect indexing and search performance. A short [llms.txt](https://flklr-dev.github.io/ux-kit/llms.txt) points automated readers to the site's public resources; support for that convention varies and it does not guarantee discovery or inclusion.

GitHub Pages serves this project beneath `/ux-kit/`. The generated `/ux-kit/robots.txt` is not the host-root robots file, so crawlers do not use it for the host's rules or sitemap discovery. A host-root robots file would require control of `flklr-dev.github.io/robots.txt` and could affect other sites on that hostname; do not create or overwrite it without inspecting the other sites and their existing policy. A missing root robots file does not itself block crawling. Automated access and indexing also depend on each service and on GitHub Pages' infrastructure.

## Asset credits

- Bricolage Grotesque is self-hosted under its bundled SIL Open Font License in `website/assets/fonts/OFL.txt`.
- Principle icons use Lucide geometry, with the full license in `website/assets/LUCIDE-LICENSE.txt`.
- The UX Kit mark is original SVG artwork; the standalone logo lettering is outlined from Bricolage Grotesque.
- Roam product mockups and Kyoto photography are original AI-generated illustrative assets. They do not represent a real travel business, booking offer or customer result.

UX principles and research attribution are documented in [Foundations](foundations.md).
