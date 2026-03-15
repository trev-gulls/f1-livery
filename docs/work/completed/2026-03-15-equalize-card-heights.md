# Equalize Card Heights & Structural Consistency

**Date:** 2026-03-15
**Status:** Completed

## Summary

Made all TeamCard grid items stretch to equal height within each row on desktop (3-per-row layout), with footer sections (Removed, Special) consistently anchored to the bottom.

## Acceptance Criteria

- [x] Cards in the same grid row share equal height
- [x] Footer sections (Removed, Special) align at the bottom across cards in a row
- [x] Direction paragraph absorbs variable height differences
- [x] Mobile single-column layout unaffected
- [x] No content clipped or hidden
- [x] Build passes

## Changes

**File:** `src/f1-livery-designs.jsx`

1. `<li>` wrapper: added `display: "flex"` and changed React key from array index to `team.name`
2. Card root `<div>`: added `flex: 1` so card fills its `<li>` container
3. Direction `<p>`: added `flex: 1` so it grows to absorb remaining space, pushing footer sections down
