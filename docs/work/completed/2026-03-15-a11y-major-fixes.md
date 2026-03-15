---
title: A11y Major Fixes
date: 2026-03-15
status: Completed
source: docs/reviews/2026-03-15-livery-system-a11y.md
---

# A11y Major Fixes

Address 4 major WCAG violations in `src/f1-livery-designs.jsx`.

## Acceptance Criteria

- [x] MAJOR-1: SVG swatches marked `aria-hidden="true"`
- [x] MAJOR-2: Legend color dots hidden from assistive tech
- [x] MAJOR-3: All text/background pairs meet WCAG AA 4.5:1 contrast
- [x] MAJOR-4: Font sizes use `rem` units for browser scaling
- [x] `bun run build` succeeds
- [x] `bun run lint` passes (pre-existing `isWhitePrimary` unused var — not from this change)
