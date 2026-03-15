# F1 Livery Design System

Vibe experiment — a single-page React app rendering F1 2026 livery color direction cards for all 11 teams.

## Toolchain

```sh
bun run dev       # Vite dev server
bun run build     # Production build
bun run lint      # ESLint
bun run preview   # Preview production build
```

## Key Files

| File | Purpose |
|------|---------|
| `src/f1-livery-designs.jsx` | Main component — team data, swatch renderers, card layout |
| `src/App.jsx` | Root component, renders `<F1LiveryDesigns />` |
| `index.html` | Entry point |

## Architecture

Single-component design. Everything lives in `f1-livery-designs.jsx`:

- **Team data array** — 11 team objects with colors, legend, finish, direction text, country
- **Flag renderers** — Inline SVG components for 6 countries (FlagItaly, FlagUK, FlagAustria, FlagGermany, FlagFrance, FlagUSA) with `FLAGS` lookup map
- **Finish overlays** — `FINISH_OVERLAYS` config + `FinishOverlay` component rendering diagonal gradient rect overlays for gloss/high-gloss/satin/metallic finishes; matte and anodized have no overlay
- **Swatch renderers** — SVG components per team (SwatchDefault, SwatchFerrari, SwatchRedBull, SwatchRacingBulls, SwatchDuracell, SwatchHaas, SwatchMercedes, SwatchAudi, SwatchAlpine, SwatchAstonMartin, SwatchCadillac)
- **Card components** — LiverySwatch, LegendSwatch, LegendItem, SwatchLegend, TeamCard
- **Root export** — `F1LiveryDesigns` renders header, grid, footer

## Conventions

- All styles are inline (no CSS modules, no Tailwind)
- Fonts loaded via Google Fonts `<link>` in component body
- Colors defined as `{ name, hex }` objects in team data — legend hex values are always flat (no `"gradient"` or `"chrome"` special values)
- Each team can specify a custom swatch renderer or use `SwatchDefault`
- Material gradients on swatches where color names reference non-flat materials (metallic, chrome, anodized) — legends always use flat hex chips
- Finish overlays applied as diagonal gradient rects for gloss/high-gloss/satin/metallic — matte and anodized use no overlay (flat fill is matte; anodized relies on material gradient)

## Known Issues

See `docs/reviews/2026-03-15-livery-system-a11y.md` for accessibility audit (contrast ratios, font sizes, semantic markup).
