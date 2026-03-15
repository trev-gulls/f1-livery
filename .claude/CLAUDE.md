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

- **Team data array** — 11 team objects with colors, legend, finish, direction text
- **Swatch renderers** — SVG components per team (SwatchDefault, SwatchFerrari, SwatchRedBull, etc.)
- **Card components** — LiverySwatch, SwatchLegend, TeamCard
- **Root export** — `F1LiveryDesigns` renders header, grid, footer

## Conventions

- All styles are inline (no CSS modules, no Tailwind)
- Fonts loaded via Google Fonts `<link>` in component body
- Colors defined as `{ name, hex }` objects in team data
- Each team can specify a custom swatch renderer or use `SwatchDefault`

## Known Issues

See `docs/reviews/2026-03-15-livery-system-a11y.md` for accessibility audit (contrast ratios, font sizes, semantic markup).
