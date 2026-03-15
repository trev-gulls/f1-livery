---
title: A11y Semantic HTML & Document Structure
date: 2026-03-15
status: Completed
source: docs/reviews/2026-03-15-livery-system-a11y.md
---

# A11y Semantic HTML & Document Structure

Address 5 minor WCAG violations related to semantic markup and document structure.

## Acceptance Criteria

- [x] MINOR-1: Replace header/grid/footer divs with `<header>`, `<main>`, `<footer>` landmarks
- [x] MINOR-2: Wrap card grid in `<ul>`, each card in `<li>` for list navigation
- [x] MINOR-3: Change team name `<h3>` to `<h2>` to fix heading hierarchy skip
- [x] MINOR-7: Update `<title>` in `index.html` to "F1 2026 Livery Design System"
- [x] MINOR-8: Move Google Fonts `<link>` from component body to `index.html` `<head>`
- [x] `bun run build` succeeds
- [x] `bun run lint` passes (pre-existing `isWhitePrimary` unused var — not from this change)
