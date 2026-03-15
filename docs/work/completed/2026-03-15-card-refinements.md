# Card Refinements: Flags, Racing Bulls Legend, Alpine Swatch, AM Chrome

**Date:** 2026-03-15
**Status:** Completed

---

## Changes

1. **Constructor country flags** — Added `country` field to all 11 team objects; inline SVG flag components for 6 countries (IT, GB, AT, DE, FR, US); rendered right-aligned in card header with `role="img"` and `aria-label`
2. **Racing Bulls legend** — 2-column grid layout (2x2) for the 4-item legend, keeping all individual color entries
3. **Alpine swatch** — Created `SwatchAlpine` with ~70/30 pink/blue split (was ~55/45 via SwatchDefault)
4. **Aston Martin chrome** — Created `SwatchAstonMartin` with chrome gradient highlight bar; legend swatch matches
5. **SwatchLegend refactor** — Extracted `LegendSwatch` and `LegendItem` components; 2-column grid for 4+ items

## Backlog Created

- `docs/work/backlog/2026-03-15-a11y-revisit.md` — flag a11y, legend grid screen reader order
- `docs/work/backlog/2026-03-15-swatch-styling-review.md` — chrome/stylized swatch consistency

## Files Modified

- `src/f1-livery-designs.jsx` — all changes
- `.claude/CLAUDE.md` — updated swatch renderer list
