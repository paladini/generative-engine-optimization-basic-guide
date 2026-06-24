# GEO Basics Guide Tasks

**Design:** `.specs/features/geo-basics-guide/design.md`
**Status:** Done

---

## Execution Plan

### Phase 1: Foundation

T1 -> T2

### Phase 2: Content and Assets

T2 -> T3
T2 -> T4

### Phase 3: Integration and Validation

T3 + T4 -> T5 -> T6

---

## Task Breakdown

### T1: Create TLC project foundation - Done

**What:** Add project, roadmap, state, stack, testing, spec, design, and task docs.
**Where:** `.specs/**`
**Depends on:** None
**Reuses:** TLC Spec Driven templates.
**Requirement:** GEO-01 through GEO-06

**Done when:**

- [ ] Project vision, feature spec, design, and task plan exist.
- [ ] Research sources are recorded.
- [ ] TESTING.md defines static, diagram, build, and visual gates.

**Tests:** static validation
**Gate:** quick

**Verify:** Inspect `.specs` files and run `git status --short`.

---

### T2: Add static site skeleton and shared behavior - Done

**What:** Create shared CSS, JavaScript, robots, sitemap, validation script, and language redirect.
**Where:** `assets/css/site.css`, `assets/js/site.js`, `scripts/validate-site.mjs`, `robots.txt`, `sitemap.xml`, `lang/en/index.html`
**Depends on:** T1
**Reuses:** Static architecture from design.
**Requirement:** GEO-03, GEO-06

**Done when:**

- [ ] Shared assets exist.
- [ ] Language redirect exists.
- [ ] Static validation script can run.
- [ ] robots.txt and sitemap.xml point at the expected GitHub Pages URL.

**Tests:** static validation
**Gate:** quick

**Verify:** `node scripts/validate-site.mjs --quick`

---

### T3: Add English default guide - Done

**What:** Build the default English guide page with metadata, sections, snippets, diagrams, and sources.
**Where:** `index.html`
**Depends on:** T2
**Reuses:** Shared assets and content model.
**Requirement:** GEO-01, GEO-02, GEO-03, GEO-04, GEO-05, GEO-06

**Done when:**

- [ ] English root page includes all guide sections.
- [ ] Metadata includes canonical, hreflang, Open Graph, Twitter, Dublin Core, and JSON-LD.
- [ ] Code snippets and source links are present.
- [ ] Diagrams are referenced with alt text.

**Tests:** static validation
**Gate:** build

**Verify:** `node scripts/validate-site.mjs`

---

### T4: Add Brazilian Portuguese guide - Done

**What:** Build the pt-BR version with equivalent structure and natural Portuguese copy.
**Where:** `lang/pt-br/index.html`
**Depends on:** T2
**Reuses:** Shared assets and English content model.
**Requirement:** GEO-01, GEO-02, GEO-03, GEO-04, GEO-05, GEO-06

**Done when:**

- [ ] Portuguese page includes all guide sections.
- [ ] Metadata includes canonical, hreflang, Open Graph, Twitter, Dublin Core, and JSON-LD.
- [ ] Language links connect EN and PT-BR pages.
- [ ] Portuguese copy is natural pt-BR.

**Tests:** static validation
**Gate:** build

**Verify:** `node scripts/validate-site.mjs`

---

### T5: Create and render diagrams - Done

**What:** Create Mermaid source diagrams and render SVG assets.
**Where:** `assets/diagrams/*.mmd`, `assets/diagrams/*.svg`
**Depends on:** T3, T4
**Reuses:** Mermaid Studio skill.
**Requirement:** GEO-04

**Done when:**

- [ ] Mermaid sources have professional init directives.
- [ ] Mermaid validation passes.
- [ ] SVG files render and are referenced by both localized pages.

**Tests:** render validation
**Gate:** diagrams

**Verify:** `node C:/Users/Fernando Paladini/.codex/skills/mermaid-studio/scripts/validate.mjs assets/diagrams/*.mmd`

---

### T6: Run final static and browser verification - Done

**What:** Run static validation and browser smoke checks for desktop and mobile.
**Where:** Whole project.
**Depends on:** T5
**Reuses:** TESTING.md gates.
**Requirement:** GEO-01 through GEO-06

**Done when:**

- [ ] Static validation passes.
- [ ] English and pt-BR pages render in a browser.
- [ ] Desktop and mobile viewports show readable content without overlap.
- [ ] Requirement traceability is updated to Verified.

**Tests:** static validation and visual smoke
**Gate:** visual

**Verify:** `node scripts/validate-site.mjs` plus browser screenshots.

---

## Validation Tables

### Task Granularity Check

| Task | Scope | Status |
| --- | --- | --- |
| T1 | TLC docs only | OK |
| T2 | Shared static foundation | OK |
| T3 | One localized page | OK |
| T4 | One localized page | OK |
| T5 | Diagram assets | OK |
| T6 | Verification only | OK |

### Diagram-Definition Cross-Check

| Task | Depends On | Diagram Shows | Status |
| --- | --- | --- | --- |
| T1 | None | Foundation start | Match |
| T2 | T1 | T1 -> T2 | Match |
| T3 | T2 | T2 -> T3 | Match |
| T4 | T2 | T2 -> T4 | Match |
| T5 | T3, T4 | T3 + T4 -> T5 | Match |
| T6 | T5 | T5 -> T6 | Match |

### Test Co-location Validation

| Task | Code Layer Created/Modified | Matrix Requires | Task Says | Status |
| --- | --- | --- | --- | --- |
| T1 | Specs/docs | static validation | static validation | OK |
| T2 | CSS, JS, validation, static metadata | static validation | static validation | OK |
| T3 | HTML page | static validation | static validation | OK |
| T4 | HTML page | static validation | static validation | OK |
| T5 | Diagrams | render validation | render validation | OK |
| T6 | Whole project | visual smoke | visual smoke | OK |
