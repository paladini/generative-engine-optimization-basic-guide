# GEO Basics

**Vision:** GEO Basics is a free, bilingual beginner guide that explains Generative Engine Optimization in plain language and shows how to apply it to websites, articles, and web content.
**For:** Marketers, writers, developers, founders, and website owners who already know the basics of SEO but need a practical introduction to AI answer visibility.
**Solves:** GEO advice is noisy, vendor-driven, and often framed as magic. This project gives readers a calm, sourced, beginner-friendly guide they can host for free on GitHub Pages.

## Goals

- Publish a GitHub Pages-ready static guide with English as the default language and Brazilian Portuguese as a translated version.
- Explain GEO with simple definitions, diagrams, examples, and checklists without promising guaranteed AI citations.
- Keep the tone close to Dublin Core Basics: short sections, direct explanations, practical snippets, and approachable beginner language.
- Cite primary or highly reputable sources for current AI search guidance.

## Tech Stack

**Core:**

- Framework: None, static HTML
- Language: HTML, CSS, vanilla JavaScript
- Database: None

**Key dependencies:**

- Mermaid Studio, used at build time to validate and render diagrams into SVG assets.
- Node.js scripts for static validation.
- Playwright or a temporary static server for visual/browser verification when available.

## Scope

**v1 includes:**

- Default English guide at `/index.html`.
- Brazilian Portuguese guide at `/lang/pt-br/index.html`.
- Optional `/lang/en/index.html` redirect for symmetry with the bilingual structure.
- Shared CSS and JavaScript under `/assets`.
- Rendered SVG diagrams and source `.mmd` files.
- Source notes and references embedded in the guide.
- Basic SEO, Open Graph, Dublin Core, canonical, hreflang, robots, and sitemap metadata.

**Explicitly out of scope:**

- Paid hosting, server-side rendering, databases, analytics backends, or CMS integration.
- A full SEO/GEO tool, crawler, keyword tracker, or AI visibility dashboard.
- Claims that GEO can guarantee ranking, citations, traffic, or conversions.
- Platform-specific black-box hacks that are not supported by sources.

## Constraints

- Hosting must work for free on GitHub Pages.
- The guide must work as static files without a build step.
- English remains the default language.
- Portuguese text should be natural pt-BR, not literal machine translation.
- The page should stay beginner-friendly and visually illustrated without becoming a dense marketing landing page.
