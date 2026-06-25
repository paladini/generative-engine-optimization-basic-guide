# Agent Instructions

This repository publishes GEO Basics, a static bilingual beginner guide to Generative Engine Optimization.

## Content Rules

- Keep the English guide in `index.html` and the Brazilian Portuguese guide in `lang/pt-br/index.html` aligned for shared content changes.
- When adding or changing a concept that appears in both languages, edit both pages in the same change.
- Write natural Brazilian Portuguese with proper accents and grammar in `lang/pt-br/index.html`.
- Keep claims source-backed, practical, and beginner-friendly.
- Do not promise rankings, traffic, AI citations, or guaranteed generative search visibility.
- Prefer primary sources for platform-specific claims.

## Link and HTML Rules

- Use descriptive link text.
- External links in the guide should include `target="_blank" rel="noopener"`.
- Keep important guide content visible in static HTML.
- Do not add structured data for content that is not visible on the page.
- Keep canonical URLs, hreflang links, and sitemap entries consistent when URL structure changes.

## Validation

- Run `node scripts/validate-site.mjs` before opening a pull request.
- For quick copy-only checks, `node scripts/validate-site.mjs --quick` is acceptable during editing, but the full validation should pass before PR.

## Scope

- Keep changes focused and easy to review.
- Do not add local machine-specific instructions or absolute personal paths to committed agent docs.
