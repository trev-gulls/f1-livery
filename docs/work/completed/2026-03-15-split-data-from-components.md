---
status: completed
created: 2026-03-15
updated: 2026-03-15
---

# Split Team Data from Components

## Goal

Separate team data from renderer components for cleaner data editing and GitHub Pages deployment.

## Solution

- Team data extracted to `src/teams.json` (pure JSON, 11 team objects)
- `RENDERERS` and `TOP_ACCENTS` lookup maps in `f1-livery-designs.jsx` join data to components via `.map()`
- Vite imports JSON natively — no loader config needed

## Acceptance Criteria

- [x] Team data lives in a separate file from components
- [x] Adding/editing team data doesn't require touching component code
- [x] Renderer and topAccents associations maintained via lookup map
- [x] `bun run build` passes
- [x] No visual regressions on any of the 11 cards
- [x] Deployable to GitHub Pages
