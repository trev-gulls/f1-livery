---
status: active
created: 2026-03-15
updated: 2026-03-15
blocked-by: []
---

# Cadillac High Gloss Treatment

## Goal

Find a High Gloss overlay for Cadillac's gold (#F5C518) that reads as distinctly more intense than regular Gloss. Previous iterations (dark stripe, dual-tone, shadow darkening) were rejected.

## Acceptance Criteria

- [ ] Cadillac High Gloss visually distinct from regular Gloss
- [ ] No regressions on other 10 teams
- [ ] `bun run build` passes
- [ ] Only pre-existing lint errors remain

## Iterations

### Idea 1: Wider dual-tone at higher opacity
- Reuse dual-tone gradient shape (dark edges + white center)
- Opacity bumped to 0.28 (vs 0.13 for Gloss)
- Wider spread: dark edges at 15%/85% instead of 20%/80%
- **Status:** rejected — looked terrible

### Idea 2: Double diagonal stripes
- Two parallel white highlight bands at ~30% and ~60%
- Dark gaps between and around them
- Opacity 0.18
- **Status:** rejected — looked worse

### Idea 3: Vertical shimmer gradient
- Top-to-bottom: white highlight at top fading to dark shadow at bottom
- Opacity 0.15
- Vertical axis (x1=0,y1=0 → x2=0,y2=1) — distinct from all diagonal overlays
- Cranked to 0.35 opacity with sharper contrast — visible but felt "off"
- **Status:** rejected — direction felt wrong

### Idea 4: Radial specular highlight
- radialGradient instead of linearGradient — bright hotspot upper-left, dark edges
- Focal point at (0.35, 0.3), simulates light hitting a glossy curved surface
- Opacity 0.35
- **Status:** testing

## Notes
