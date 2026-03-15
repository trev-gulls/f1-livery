---
status: completed
created: 2026-03-15
updated: 2026-03-15
---

# Cadillac High Gloss Treatment

## Goal

Find a High Gloss overlay for Cadillac's gold (#F5C518) that reads as distinctly more intense than regular Gloss.

## Acceptance Criteria

- [x] Cadillac High Gloss visually distinct from regular Gloss
- [x] No regressions on other 10 teams
- [x] `bun run build` passes
- [x] Only pre-existing lint errors remain

## Solution

**Radial specular highlight** — `radialGradient` with bright hotspot upper-left, dark edges. Focal point at (0.35, 0.3), opacity 0.35. Simulates light hitting a glossy curved surface.

## Rejected Approaches

| Idea | Approach | Why Rejected |
|------|----------|--------------|
| Wider dual-tone | Dark edges + white center, 0.28 opacity, 15%/85% spread | Looked terrible |
| Double diagonal stripes | Two parallel white bands at ~30%/~60%, 0.18 opacity | Looked worse |
| Vertical shimmer | Top-to-bottom highlight/shadow, vertical axis, up to 0.35 opacity | Direction felt wrong |
