# Contributing to GEO Basics

Thank you for helping improve **GEO Basics**, an open-source beginner guide to
Generative Engine Optimization.

This project has a simple goal: teach GEO clearly, responsibly, and in a way
that stays useful as search and AI answer systems change. Contributions are
welcome from writers, translators, SEO professionals, developers, designers,
researchers, and curious readers.

## Ways to contribute

You can contribute by:

- Fixing unclear explanations, typos, broken links, or formatting issues.
- Improving the English guide in `index.html`.
- Improving the Brazilian Portuguese guide in `lang/pt-br/index.html`.
- Adding source-backed examples for real publishing scenarios.
- Updating guidance when Google, Bing, OpenAI, Schema.org, or other primary
  sources change their documentation.
- Improving metadata, canonical URLs, hreflang tags, JSON-LD, accessibility,
  or validation.
- Improving Mermaid diagrams in `assets/diagrams/*.mmd` and their rendered
  SVG versions.
- Opening issues for sections that are confusing, incomplete, or too advanced
  for beginners.

## Contribution principles

GEO Basics should be:

- **Beginner-friendly:** define terms before using them heavily.
- **Source-backed:** prefer primary sources over secondhand summaries.
- **Practical:** show what a writer, developer, or site owner can actually do.
- **Honest:** avoid guarantees about AI citations, rankings, or traffic.
- **Crawlable:** keep important content visible in static HTML.
- **Citable:** write compact, clear blocks that can stand alone.
- **Bilingual-aware:** keep English and Brazilian Portuguese aligned when a
  concept appears in both versions.
- **Accessible:** preserve semantic HTML, alt text, readable labels, and
  useful link text.

## Before you start

1. Check the
   [open issues](https://github.com/paladini/generative-engine-optimization-basic-guide/issues)
   to see whether someone is already working on the idea.
2. Open a new issue for large content changes, new sections, or structural
   changes.
3. For small fixes, you can open a pull request directly.
4. Keep pull requests focused. One topic per pull request is easier to review.

## Local development

Clone the repository:

```bash
git clone https://github.com/paladini/generative-engine-optimization-basic-guide.git
cd generative-engine-optimization-basic-guide
```

Serve the static site locally:

```bash
python -m http.server 8123 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:8123/
```

You can also open `index.html` directly in a browser.

## Validate your changes

Run the validation script before submitting a pull request:

```bash
node scripts/validate-site.mjs
```

For a faster check while editing copy:

```bash
node scripts/validate-site.mjs --quick
```

Validation checks required files, page metadata, canonical and hreflang links,
JSON-LD, anchors, diagram references, sitemap configuration, and JavaScript
syntax.

## Writing guidelines

Write for a global beginner audience:

- Use clear, direct sentences.
- Put the answer before the nuance.
- Explain acronyms the first time they appear.
- Prefer examples over abstract claims.
- Use descriptive headings.
- Keep paragraphs short.
- Link to primary sources when making platform-specific claims.
- Mark dates clearly when a statement is time-sensitive.
- Avoid hype, fear, ranking promises, and unsupported predictions.

Good GEO Basics content sounds like this:

```text
GEO does not replace SEO. It extends SEO by asking whether a page is clear,
credible, and useful enough to be selected as a source in an AI-generated
answer.
```

Avoid content like this:

```text
Use this secret GEO strategy to dominate AI search and guarantee citations
from every LLM.
```

## SEO and LLM discoverability standards

When you add or edit content, make it easier for both people and machines to
understand:

- Use one clear main topic per section.
- Include natural terms people search for, such as "Generative Engine
  Optimization," "AI search," "AI answer engines," "structured data," and
  "technical SEO," only where they fit.
- Add concise summaries for complex ideas.
- Use lists or tables when they make comparison easier.
- Keep links descriptive. Avoid generic text such as "click here."
- Do not add keywords that do not match the visible content.
- Do not add structured data for content that is not visible on the page.
- Keep important content in HTML so crawlers and readers can access it.

## Source policy

Prefer primary and durable references:

- Google Search Central documentation for Google Search behavior.
- Bing Webmaster documentation or blog posts for Bing and Microsoft surfaces.
- OpenAI documentation for OpenAI crawler behavior.
- Schema.org for structured data vocabulary.
- Academic papers for research claims.
- Official project documentation for named tools and standards.

When a source changes, update both the statement and any related dates, links,
or examples.

## Translation guidelines

The project currently includes English and Brazilian Portuguese.

When editing translations:

- Preserve the meaning, not word-for-word structure.
- Use natural Brazilian Portuguese in `lang/pt-br/index.html`.
- Keep technical terms consistent across both versions.
- Keep links, source references, diagrams, and examples aligned.
- Update `sitemap.xml` and `hreflang` links if a new language is added.

## Diagram guidelines

Diagram sources live in `assets/diagrams/*.mmd`. Rendered SVG files are
committed so GitHub Pages can publish the site without a build step.

When changing a diagram:

1. Edit the matching `.mmd` source.
2. Regenerate the `.svg` file.
3. Check that the image still has meaningful alt text in the HTML.
4. Run `node scripts/validate-site.mjs`.

## Pull request checklist

Before opening a pull request, confirm that:

- [ ] The change is focused and easy to review.
- [ ] Beginner readers can understand the new or edited section.
- [ ] Platform-specific claims link to primary sources.
- [ ] The English and pt-BR versions stay aligned when needed.
- [ ] Links are descriptive and still work.
- [ ] Metadata, canonical URLs, and hreflang tags remain correct.
- [ ] Diagrams are updated in both source and rendered form when needed.
- [ ] `node scripts/validate-site.mjs` passes.

## Review process

Maintainers review for:

- Accuracy.
- Clarity.
- Source quality.
- Beginner usefulness.
- Search and LLM discoverability.
- Accessibility.
- Scope control.

Feedback is part of the work. If a reviewer asks for a change, treat it as a
collaboration toward a stronger public guide.

## Community expectations

Be kind, specific, and constructive. GEO is an emerging field, so disagreement
is expected. Claims should improve when better evidence appears.

Do not use issues or pull requests for spam, personal attacks, harassment,
unsupported promotional claims, or low-quality link building.

## License

By contributing, you agree that your contribution will be released under the
same [MIT License](LICENSE) as the project.

## Author

GEO Basics was created with love by
[Fernando Paladini](https://github.com/paladini).

For questions, suggestions, or corrections, open a
[GitHub issue](https://github.com/paladini/generative-engine-optimization-basic-guide/issues).
You can also find Fernando on
[LinkedIn](https://www.linkedin.com/in/fernandopaladini/) and
[Medium](https://medium.com/@fernandopaladini).
