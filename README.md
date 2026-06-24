# GEO Basics

**GEO Basics** is a free, bilingual beginner guide to Generative Engine Optimization: how AI answer systems discover, understand, trust, and cite web content.

The default language is English. The Brazilian Portuguese version is available at `/lang/pt-br/`.

## Local Preview

This project is static. You can open `index.html` directly or serve the folder locally:

```bash
python -m http.server 8123 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8123/`.

## Validate

```bash
node scripts/validate-site.mjs
```

Diagram sources live in `assets/diagrams/*.mmd`; rendered SVGs are committed so GitHub Pages does not need a build step.

## Publish on GitHub Pages

Use GitHub Pages with the repository root as the publishing source. The expected canonical URL is:

```text
https://paladini.github.io/generative-engine-optimization-basic-guide/
```

If the repository name changes, update the canonical URLs in `index.html`, `lang/pt-br/index.html`, `robots.txt`, and `sitemap.xml`.

## Sources

The guide is based on public guidance and research from Google Search Central, Bing Webmaster Tools, OpenAI crawler docs, Schema.org, and the original GEO paper on arXiv.
