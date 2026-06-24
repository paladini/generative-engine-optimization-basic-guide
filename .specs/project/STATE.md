# State

## Current Focus

v1 of GEO Basics is implemented as a bilingual static GitHub Pages guide.

## Decisions

- Use static HTML/CSS/vanilla JS so the site is free and simple to host on GitHub Pages.
- Use English as the root/default language and pt-BR at `/lang/pt-br/index.html`.
- Pre-render Mermaid diagrams to SVG so the published site does not depend on client-side Mermaid.
- Keep the guide educational, source-backed, and honest: GEO improves eligibility and clarity, but it cannot guarantee AI citations.
- Treat Google Search guidance as the conservative baseline: AI visibility builds on foundational SEO, crawlability, helpful content, and technical clarity.

## Research Notes

- Google Search Central states that SEO best practices remain relevant for AI Overviews and AI Mode, and that there are no additional special requirements for inclusion in those features.
- Google describes retrieval-augmented generation and query fan-out as mechanisms used by generative AI search features.
- Google explicitly says publishers do not need special AI files like `llms.txt` for Google Search, and warns against rewriting content only for AI systems.
- Bing Webmaster Tools introduced AI Performance in 2026 to show citations, cited pages, grounding queries, and URL-level citation activity across Microsoft AI experiences.
- OpenAI documents separate crawler controls for OAI-SearchBot and GPTBot; a site can allow search indexing while disallowing training use.
- Schema.org and structured data remain useful for explicit entity clues and rich-result eligibility, but are not magic GEO markup.
- The original GEO paper frames GEO as optimizing visibility in generative engine responses and reports up to 40% visibility gains in experiments, with domain-specific variation.

## Sources Used

- Google Search Central, "AI features and your website": https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central, "Optimizing your website for generative AI features on Google Search": https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google Search Central, "Introduction to structured data markup in Google Search": https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Bing Webmaster Blog, "Introducing AI Performance in Bing Webmaster Tools Public Preview": https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview
- OpenAI Developers, "Overview of OpenAI Crawlers": https://developers.openai.com/api/docs/bots
- Schema.org home and vocabulary overview: https://schema.org/
- arXiv, "GEO: Generative Engine Optimization": https://arxiv.org/abs/2311.09735

## Deferred Ideas

- Add CI with HTML validation and link checks after initial publication.
- Add a small `llms.txt` only if the project later chooses to support tools that actually consume it, while clearly stating it is not used by Google Search.

## Verification Log

- `node scripts/validate-site.mjs` passed.
- Mermaid Studio validation passed for all `.mmd` diagrams.
- SVG diagrams were rendered with `mmdc` from Mermaid CLI.
- Browser smoke test via `http://127.0.0.1:8123/` passed for desktop English and mobile pt-BR.
- Browser checks confirmed no horizontal overflow, no broken images, visible next-section preview, language links, JSON-LD, and working copy-to-clipboard behavior.
