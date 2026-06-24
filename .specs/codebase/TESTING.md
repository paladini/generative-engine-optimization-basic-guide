# Testing

## Test Coverage Matrix

| Layer | Required Test Type | Parallel-Safe | Notes |
| --- | --- | --- | --- |
| HTML pages | static validation | Yes | Check required files, anchors, language links, and metadata. |
| CSS | static validation | Yes | Check file presence and simple forbidden-pattern checks. |
| JavaScript | static validation | Yes | Check syntax with Node. |
| Diagrams | render validation | Yes | Validate Mermaid syntax and render SVG assets. |
| Browser layout | manual/visual smoke | No | Verify desktop and mobile viewports through a local static server. |

## Gate Check Commands

| Gate | Command | Expected Result |
| --- | --- | --- |
| quick | `node scripts/validate-site.mjs --quick` | Required files and JS syntax pass. |
| diagrams | `node C:/Users/Fernando Paladini/.codex/skills/mermaid-studio/scripts/validate.mjs assets/diagrams/*.mmd` | Mermaid source files validate. |
| build | `node scripts/validate-site.mjs` | Full static validation passes. |
| visual | Browser smoke through a local static server | Desktop and mobile layouts are readable and non-overflowing. |

## Notes

- There is no production build step.
- Browser smoke may use Playwright if available; otherwise manual static-server inspection is acceptable.
