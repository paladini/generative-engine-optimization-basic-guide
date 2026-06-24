# Stack

## Application Type

Static educational website for GitHub Pages.

## Runtime

- No required server runtime.
- Any static file server can serve the project locally.
- GitHub Pages can serve the repository root directly.

## Languages

- HTML
- CSS
- Vanilla JavaScript
- Mermaid source files for diagrams, rendered to SVG before publication

## Directory Model

- `/index.html`: default English page.
- `/lang/pt-br/index.html`: Brazilian Portuguese page.
- `/lang/en/index.html`: redirect to root English page.
- `/assets/css/site.css`: shared styles.
- `/assets/js/site.js`: shared behavior.
- `/assets/diagrams/*.mmd`: Mermaid source diagrams.
- `/assets/diagrams/*.svg`: rendered diagram assets.
- `/.specs`: TLC project and feature documentation.

## Constraints

- Avoid build-only features; source files must be understandable and editable.
- Avoid heavy JavaScript frameworks for v1.
- Keep generated assets project-local.
