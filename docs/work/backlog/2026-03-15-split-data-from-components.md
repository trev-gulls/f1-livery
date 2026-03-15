---
status: pending
created: 2026-03-15
updated: 2026-03-15
blocked-by: []
---

# Split Team Data from Components

## Goal

Separate team data (colors, legends, direction text, finish, metadata) from renderer components to support GitHub Pages deployment and cleaner data editing.

## Approach

- Extract team data into `src/teams.json` (or `teams.js` if renderer references need to stay inline)
- Keep a renderer lookup map in the component file that maps team names to swatch/accent components
- JSON holds: name, subtitle, country, direction, colors, legend, finish, removed, special
- Component file holds: renderer map, swatch components, accent components, layout

## Acceptance Criteria

- [ ] Team data lives in a separate file from components
- [ ] Adding/editing team data doesn't require touching component code
- [ ] Renderer and topAccents associations maintained via lookup map
- [ ] `bun run build` passes
- [ ] No visual regressions on any of the 11 cards
- [ ] Deployable to GitHub Pages

## Notes

Motivated by GitHub Pages deployment goal. JSON preferred for pure data editability; JS module fallback if serialization becomes an issue.
