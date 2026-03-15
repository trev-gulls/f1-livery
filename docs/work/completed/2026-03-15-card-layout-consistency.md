# Card Layout Consistency: Callout Reorder + Inline Subtitle

**Date:** 2026-03-15
**Status:** Completed
**Author:** Claude + tgulls

---

## Summary

Fixed two remaining card layout inconsistencies after the card height equalization work.

## Changes

1. **Reordered special callout above Removed section** — `✦ special` now renders before the Removed block, making Removed the consistent bottom anchor across all cards.
2. **Inlined subtitles next to team name** — Red Bull ("2026 THROWBACK"), Duracell ("FKA WILLIAMS"), and Audi ("LANDSCAPE LIVERY") subtitles now render on the same line as the team name via flex row, eliminating the extra vertical gap that shifted content down.
3. **Moved `paddingRight` for pending badge** — Shifted from `<h2>` to the flex wrapper to maintain proper spacing with the absolute-positioned "Pending" badge.

## File

`src/f1-livery-designs.jsx`
