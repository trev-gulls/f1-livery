# Swatch Styling Review

**Date:** 2026-03-15
**Status:** Backlog

---

## Context

The Aston Martin chrome gradient highlight looks good but breaks the current standard where most teams use flat-color highlight bars. Before adding more stylized treatments, review the swatch system holistically.

## Scope

- Evaluate whether every team should get a more stylized/realistic swatch treatment
- Consider chrome/metallic gradients for AM, Mercedes (anodized aluminum), Duracell (metallic copper)
- Consider texture or pattern fills where direction text implies it (e.g., matte vs gloss finishes)
- Define a consistent standard: either all teams get stylized swatches or none do

## Current Stylized Swatches

| Team | Treatment | Status |
|------|-----------|--------|
| Audi | Sunset gradient (full swatch) | Shipped |
| Aston Martin | Chrome gradient (highlight bar) | Shipped |
| All others | Flat color fills | Shipped |

## Acceptance Criteria

- Decision documented: stylize all, revert to flat, or define clear criteria for when gradients are appropriate
- If stylizing: update all applicable teams in one pass for consistency
- Update SwatchLegend to handle any new special hex values
