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
| `src/teams.json` | Team data — colors, legends, finishes, direction text (pure data, no component refs) |
| `src/f1-livery-designs.jsx` | Main component — swatch renderers, card layout, renderer lookup maps |
| `src/App.jsx` | Root component, renders `<F1LiveryDesigns />` |
| `index.html` | Entry point |

## Architecture

Team data lives in `teams.json`; components and renderer logic in `f1-livery-designs.jsx`:

- **Team data** (`teams.json`) — 11 team objects with colors, legend, finish, direction text, country
- **Renderer lookup** — `RENDERERS` and `TOP_ACCENTS` maps in the component file join data to components
- **Flag renderers** — External SVG flag images in `public/` with `FLAGS` lookup map using `import.meta.env.BASE_URL` for path resolution
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

## Deployment

- **Live URL:** https://trev-gulls.github.io/f1-livery/
- **Workflow:** `.github/workflows/deploy.yml` — push to `main` triggers build + deploy
- **Base path:** `base: '/f1-livery/'` in `vite.config.js` — all public asset paths must use `import.meta.env.BASE_URL`
- **Guide:** `docs/DEPLOY.md`

## Known Issues

See `docs/reviews/2026-03-15-livery-system-a11y.md` for accessibility audit (contrast ratios, font sizes, semantic markup).
