# GEO Basics Guide Specification

## Problem Statement

People are hearing that "GEO" is the new SEO, but most explanations are either too shallow, too technical, or too sales-driven. Beginners need a guide that explains how AI answer systems find, understand, and cite web content, then shows what to do on real pages without promising magic.

## Goals

- [ ] Teach the basics of Generative Engine Optimization in a beginner-friendly way.
- [ ] Provide practical steps for websites, articles, and web content.
- [ ] Publish a bilingual GitHub Pages site with English as default and pt-BR as the second language.
- [ ] Include diagrams, examples, code snippets, and source references.

## Out of Scope

| Feature | Reason |
| --- | --- |
| GEO analytics dashboard | Requires data integrations and accounts. |
| Keyword research tool | Outside a beginner guide. |
| Paid hosting or backend | GitHub Pages must remain free and static. |
| Citation guarantees | AI answer visibility is not guaranteed by any publisher-controlled markup. |

---

## User Stories

### P1: Understand GEO

**User Story:** As a beginner, I want a simple explanation of GEO so that I can understand how it relates to SEO and AI answers.

**Why P1:** This is the guide's core promise.

**Acceptance Criteria:**

1. WHEN a reader opens the default page THEN the system SHALL show "GEO Basics" and define Generative Engine Optimization.
2. WHEN a reader reaches the introductory section THEN the system SHALL explain GEO as discoverability, understanding, trust, and citation readiness.
3. WHEN a reader compares SEO and GEO THEN the system SHALL make clear that GEO builds on SEO rather than replacing it.

**Independent Test:** Open `/index.html` and verify the hero, definition, and SEO-vs-GEO explanation.

---

### P1: Apply GEO to Content

**User Story:** As a content owner, I want a checklist and examples so that I can improve pages, articles, and site content.

**Why P1:** The guide must be practical, not only conceptual.

**Acceptance Criteria:**

1. WHEN a reader views the application section THEN the system SHALL show actions for page structure, article writing, structured data, evidence, and freshness.
2. WHEN a reader views the examples THEN the system SHALL include copyable snippets for HTML metadata, JSON-LD, robots.txt, and article structure.
3. WHEN a reader follows the checklist THEN the system SHALL avoid unsupported claims and explain what each action helps with.

**Independent Test:** Scroll to the practice/checklist sections and verify the snippets and explanations.

---

### P1: Bilingual Static Publication

**User Story:** As a visitor, I want English and Brazilian Portuguese versions so that I can read the guide in my preferred language.

**Why P1:** The reference project is bilingual and the user requested the same language model.

**Acceptance Criteria:**

1. WHEN a reader opens `/index.html` THEN the system SHALL show English content by default.
2. WHEN a reader clicks the Portuguese language link THEN the system SHALL navigate to `/lang/pt-br/index.html`.
3. WHEN crawlers inspect the pages THEN the system SHALL find canonical and hreflang links for both languages.

**Independent Test:** Open both pages and verify language links and metadata.

---

### P2: Visual Learning

**User Story:** As a visual learner, I want diagrams and section layouts so that the flow from prompt to citation is easy to grasp.

**Why P2:** The user requested an illustrated and diagrammed guide.

**Acceptance Criteria:**

1. WHEN a reader reaches the systems section THEN the system SHALL show a diagram of prompt, fan-out, retrieval, synthesis, and citation.
2. WHEN a reader reaches the workflow section THEN the system SHALL show a loop for research, publishing, measurement, and refresh.
3. WHEN a reader views diagrams without images loaded THEN the system SHALL still have meaningful alt text nearby.

**Independent Test:** Verify rendered SVG files load and have descriptive `alt` attributes.

---

### P2: Source-Backed Guidance

**User Story:** As a skeptical reader, I want references so that I can verify what the guide claims.

**Why P2:** GEO is a changing topic and the guide should be trustworthy.

**Acceptance Criteria:**

1. WHEN a reader reaches the sources section THEN the system SHALL list Google, Bing, OpenAI, Schema.org, and the original GEO paper.
2. WHEN the guide mentions unsupported or uncertain tactics THEN the system SHALL label them as optional or not guaranteed.
3. WHEN a reader clicks a source THEN the system SHALL open the original source in a new tab.

**Independent Test:** Check the sources section and links.

---

## Edge Cases

- WHEN JavaScript is disabled THEN core content SHALL remain readable.
- WHEN viewed on a narrow mobile viewport THEN text and code blocks SHALL not overlap their containers.
- WHEN SVG diagrams do not load THEN captions and alt text SHALL still explain the key idea.
- WHEN a reader sees "llms.txt" advice elsewhere THEN the guide SHALL explain that Google Search ignores it and that it is not a required GEO action.

---

## Requirement Traceability

| Requirement ID | Story | Phase | Status |
| --- | --- | --- | --- |
| GEO-01 | P1: Understand GEO | Execute | Verified |
| GEO-02 | P1: Apply GEO to Content | Execute | Verified |
| GEO-03 | P1: Bilingual Static Publication | Execute | Verified |
| GEO-04 | P2: Visual Learning | Execute | Verified |
| GEO-05 | P2: Source-Backed Guidance | Execute | Verified |
| GEO-06 | Edge cases | Execute | Verified |

**Coverage:** 6 total, 6 mapped to tasks, 0 unmapped.

---

## Success Criteria

- [x] Static validation passes.
- [x] English and pt-BR pages render locally.
- [x] Diagrams validate and render to SVG.
- [x] Desktop and mobile smoke checks show readable, non-overlapping layout.
- [x] Sources are present and the guide avoids unsupported GEO promises.
