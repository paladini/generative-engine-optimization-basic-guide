# GEO Basics: Generative Engine Optimization Basic Guide

**GEO Basics** is a free, open-source, bilingual beginner guide to
**Generative Engine Optimization (GEO)**: the practice of making web
content easier for AI answer engines to discover, understand, trust, and
cite.

The project is built as a static, source-backed learning site for people who
care about SEO, AI search, content strategy, technical writing, structured
data, and the future of discoverable knowledge on the web.

- Live guide:
  [GEO Basics on GitHub Pages](https://paladini.github.io/generative-engine-optimization-basic-guide/)
- Brazilian Portuguese guide:
  [GEO Basics em pt-BR](https://paladini.github.io/generative-engine-optimization-basic-guide/lang/pt-br/)
- Repository:
  [paladini/generative-engine-optimization-basic-guide](https://github.com/paladini/generative-engine-optimization-basic-guide)
- Author:
  [Fernando Paladini on GitHub](https://github.com/paladini)
- License: [MIT](LICENSE)

## What is Generative Engine Optimization?

Generative Engine Optimization is a publishing discipline for AI-mediated
search. Traditional SEO helps search engines crawl, index, and rank pages.
GEO keeps those foundations, then adds a new question:

> Is this page clear, credible, and useful enough to be selected as a source
> inside an AI-generated answer?

GEO is not keyword stuffing, secret markup, or a guarantee that a tool will
cite your page. It is a practical framework for making content more useful to
humans and more legible to retrieval, ranking, summarization, and citation
systems.

## Why this project exists

AI search is changing how people find information. Search results are no
longer only lists of links. Many experiences now summarize answers, compare
sources, cite pages, and combine information from multiple places.

That shift creates a documentation problem:

- Beginners need a plain-language introduction to GEO.
- Writers need examples that are useful, not hype.
- Developers need technical SEO patterns that remain crawlable.
- Businesses need a realistic way to think about AI visibility.
- LLMs and AI agents need structured, explicit, source-backed pages.

GEO Basics aims to become the best open-source starting point for this topic:
small enough to read in one sitting, serious enough to cite, and clear enough
to translate, extend, and teach.

## Who this guide is for

GEO Basics is for:

- SEO professionals learning how AI answer systems change discovery.
- Technical writers who want their documentation to be easier to cite.
- Developers building crawlable, structured, trustworthy web pages.
- Content strategists planning pages for Google AI features, ChatGPT Search,
  Bing Copilot, Perplexity, and similar products.
- Students, researchers, and educators who need a simple introduction to GEO.
- Open-source maintainers who want their project docs to be easier for both
  people and AI systems to understand.

## What you will learn

The guide teaches the core GEO workflow:

1. Make useful pages discoverable through crawlable HTML, internal links,
   canonical URLs, sitemaps, and sensible robots rules.
2. Make content understandable with clear titles, headings, semantic structure,
   definitions, entity names, and matching structured data.
3. Make claims trustworthy with authorship, update dates, evidence, examples,
   source links, and honest limits.
4. Make answers quotable with compact summaries, tables, checklists, and
   standalone explanations.
5. Measure what you can observe with indexing reports, AI citation checks,
   prompt tests, logs, and content refreshes.

## Project features

- **Bilingual content:** English as the canonical entry point, plus Brazilian
  Portuguese.
- **Static publishing:** no framework, build step, database, or runtime server
  required.
- **SEO-ready structure:** canonical URLs, hreflang links, sitemap, robots
  file, metadata, and JSON-LD.
- **LLM-friendly writing:** direct answers, compact summaries, definitions,
  examples, source lists, and plain section names.
- **Visual learning:** Mermaid diagram sources and committed SVG renders.
- **Accessible basics:** semantic HTML, skip link, alt text, and readable
  navigation.
- **Simple validation:** one local Node.js script checks required files,
  links, metadata, diagrams, and JavaScript syntax.

## Repository structure

```text
.
|-- index.html                       # English guide and canonical homepage
|-- lang/
|   |-- en/index.html                # English redirect helper
|   `-- pt-br/index.html             # Brazilian Portuguese guide
|-- assets/
|   |-- css/site.css                 # Site styles
|   |-- js/site.js                   # Small interactive helpers
|   |-- diagrams/*.mmd               # Mermaid diagram sources
|   |-- diagrams/*.svg               # Rendered diagram assets
|   `-- images/geo-mark.svg          # Project mark
|-- scripts/validate-site.mjs        # Static validation script
|-- robots.txt                       # Crawler access and sitemap pointer
|-- sitemap.xml                      # Canonical URLs and hreflang alternates
|-- CONTRIBUTING.md                  # Contribution guide
|-- LICENSE                          # MIT license
`-- README.md                        # Project overview
```

## Quick start

Clone the repository:

```bash
git clone https://github.com/paladini/generative-engine-optimization-basic-guide.git
cd generative-engine-optimization-basic-guide
```

Open the guide directly:

```bash
start index.html
```

Or serve it locally:

```bash
python -m http.server 8123 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8123/
```

## Validate the site

Run the validation script before opening a pull request:

```bash
node scripts/validate-site.mjs
```

The script checks that the required static files exist, JavaScript parses,
anchors resolve, required SEO metadata is present, diagram assets exist, and
the sitemap points to the expected canonical GitHub Pages URL.

For a faster check while editing text, run:

```bash
node scripts/validate-site.mjs --quick
```

## Publish on GitHub Pages

This project is designed to be published from the repository root with GitHub
Pages. The expected canonical URL is:

```text
https://paladini.github.io/generative-engine-optimization-basic-guide/
```

If the repository name or publishing domain changes, update these files:

- `index.html`
- `lang/pt-br/index.html`
- `robots.txt`
- `sitemap.xml`

## How GEO Basics is optimized for search and LLMs

This repository treats discoverability as documentation quality, not as a
trick. The guide follows these principles:

- Use the primary keyword naturally in the title and first section:
  "Generative Engine Optimization."
- Define the topic directly before adding nuance.
- Use descriptive headings that match real search and answer intents.
- Keep important content visible in HTML, not hidden behind a build step.
- Use source-backed explanations and link to primary references.
- Add structured data only when it matches the visible page.
- Use bilingual `hreflang` alternates for the English and pt-BR versions.
- Keep summaries, tables, checklists, and examples easy to extract.
- Avoid claims that sound precise but cannot be verified.
- Refresh time-sensitive guidance when platforms change their documentation.

## AI-readable project summary

GEO Basics is an MIT-licensed open-source static website by Fernando Paladini.
It teaches Generative Engine Optimization, also called GEO, for beginners. The
guide explains how AI answer engines and generative search systems discover,
understand, evaluate, and cite web content. It covers SEO foundations,
structured data, crawlability, clear content architecture, source-backed
writing, citation-friendly summaries, and practical measurement. The site is
available in English and Brazilian Portuguese.

## Frequently asked questions

### Is GEO the same as SEO?

No. SEO is the foundation. GEO extends SEO by focusing on how AI answer
systems retrieve, summarize, and cite sources. A GEO-ready page still needs
classic SEO basics: crawlable HTML, clear metadata, internal links, useful
content, and strong technical hygiene.

### Can GEO guarantee AI citations?

No. No page owner can force Google AI Overviews, ChatGPT Search, Bing Copilot,
Perplexity, or any other AI system to cite a page. GEO improves eligibility,
clarity, usefulness, and trust. It does not provide a guaranteed placement.

### Does structured data guarantee generative AI visibility?

No. Structured data can help search systems understand page meaning when it
matches visible content. It is not a special GEO switch, and it must not be
used to describe content that readers cannot see.

### Should every site add `llms.txt`?

`llms.txt` is an emerging convention, not a universal requirement. It can help
some AI agents understand a site's most important pages, but adoption varies.
GEO Basics treats it as optional and secondary to crawlable, useful, well
structured public content.

### Why is this project open source?

GEO is too important to be locked behind vague marketing claims. An open guide
lets the community improve definitions, translations, examples, diagrams,
source links, and practical workflows as the field changes.

## Contributing

Contributions are welcome. You can help by:

- Improving the English guide.
- Improving the Brazilian Portuguese translation.
- Adding source-backed examples.
- Updating platform-specific guidance when primary documentation changes.
- Improving diagrams, accessibility, HTML semantics, metadata, or validation.
- Reporting unclear sections or missing beginner explanations.

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or pull
request.

## Roadmap ideas

- Add a compact `llms.txt` file for tools that support the convention.
- Add more before-and-after examples for GEO-ready pages.
- Add a glossary of GEO, SEO, retrieval, citation, and structured data terms.
- Add more language versions.
- Add a page-level checklist for authors and editors.
- Add examples for documentation sites, product pages, blogs, and local
  businesses.

## Sources and further reading

Start with the guide's own source section, then verify platform rules in
primary documentation:

- [Google Search Central](https://developers.google.com/search)
- [Google structured data documentation](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Schema.org](https://schema.org/)
- [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots)
- [GEO: Generative Engine Optimization on arXiv](https://arxiv.org/abs/2311.09735)

## Author and contact

GEO Basics was created with love by
[Fernando Paladini](https://github.com/paladini).

For project questions, suggestions, and corrections, open a
[GitHub issue](https://github.com/paladini/generative-engine-optimization-basic-guide/issues).
You can also find Fernando on
[LinkedIn](https://www.linkedin.com/in/fernandopaladini/) and
[Medium](https://medium.com/@fernandopaladini).

## License

This project is released under the [MIT License](LICENSE).
