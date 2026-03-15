# F1 Livery Design System — Accessibility Audit

**Date:** 2026-03-15
**Status:** Open
**Component:** `src/f1-livery-designs.jsx`
**Standard:** WCAG 2.1 AA

---

## Major Issues

### MAJOR-1 — SVG swatches have no accessible label

**WCAG:** 1.1.1 Non-text Content (Level A)
**Location:** Lines 332–352 (`LiverySwatch`)

SVG swatch elements have no `role`, `aria-label`, or `<title>`. Screen readers announce them as anonymous unlabeled graphics.

**Fix:** Mark as decorative since the legend and team name already convey meaning:

```jsx
<svg aria-hidden="true" focusable="false" ...>
```

Or, to make them meaningful:

```jsx
<svg role="img" aria-labelledby={`swatch-title-${id}`} ...>
  <title id={`swatch-title-${id}`}>{team.name} livery color swatch</title>
</svg>
```

---

### MAJOR-2 — Legend color dots invisible to assistive tech

**WCAG:** 1.4.1 Use of Color (Level A)
**Location:** Lines 360–381 (`SwatchLegend`)

The 10x10px colored `<div>` squares have no role or label. The adjacent color name text provides the semantic meaning, so the dots should be hidden from AT.

**Fix:**

```jsx
<div aria-hidden="true" style={{ width: 10, height: 10, ... }} />
```

---

### MAJOR-3 — Multiple text/background pairs fail AA contrast

**WCAG:** 1.4.3 Contrast Minimum (Level AA) — 4.5:1 normal text, 3:1 large text

| Text | Background | Ratio | Location | Used for |
|------|------------|-------|----------|----------|
| `#555` | `#1e1e22` | 2.22:1 | Line 384 | Hex values in legend |
| `#666` | `#1e1e22` | 2.89:1 | Line 445, 475 | Subtitle, removed value |
| `#ccc` | `#1e1e22` | 2.86:1 | Line 383 | Color name in legend |
| `#555` | `#111113` | 2.52:1 | Line 506 | Header eyebrow |
| `#444` | `#111113` | 1.93:1 | Lines 541, 544 | Footer text |

**Fix:** Minimum replacement colors to reach 4.5:1:

| Current | Replacement | New ratio |
|---------|-------------|-----------|
| `#555` on `#1e1e22` | `#8a8a8a` | ~5.3:1 |
| `#666` on `#1e1e22` | `#8a8a8a` | ~5.3:1 |
| `#ccc` on `#1e1e22` | `#e8e8e8` | ~10:1 |
| `#444` on `#111113` | `#8a8a8a` | ~5.3:1 |
| `#555` on `#111113` | `#8a8a8a` | ~5.3:1 |

---

### MAJOR-4 — Font sizes as small as 8px in fixed px units

**WCAG:** 1.4.4 Resize Text (Level AA)
**Location:** Lines 414, 456, 472, 382, 445, 482, 506, 541, 544

Text at 8–10px in `px` units cannot be scaled by browser font-size settings. At 200% zoom, 8px becomes 16px (the normal default) — meaning it starts out inaccessible.

Affected sizes:
- `fontSize: 8` — "Finish" and "Removed" labels
- `fontSize: 9` — "Pending" badge
- `fontSize: 10` — Legend text, subtitle, footer

**Fix:** Use `rem` units with a 0.75rem (12px) minimum:

```jsx
fontSize: 8   // -> "0.75rem"
fontSize: 9   // -> "0.75rem"
fontSize: 10  // -> "0.75rem"
fontSize: 11  // -> "0.75rem"
```

---

## Minor Issues

### MINOR-1 — No landmark regions

**WCAG:** 1.3.1 Info and Relationships (A), 2.4.1 Bypass Blocks (A)
**Location:** Lines 503, 530, 539

The header, grid, and footer are all `<div>` elements. Screen reader landmark navigation is unavailable.

**Fix:** Replace with semantic elements:

```jsx
<header style={{ ... }}>   // line 503
<main style={{ ... }}>     // line 530
<footer style={{ ... }}>   // line 539
```

---

### MINOR-2 — Card grid not marked up as a list

**WCAG:** 1.3.1 Info and Relationships (A)
**Location:** Lines 531–535

Screen readers cannot convey the number of cards or allow list-item navigation.

**Fix:**

```jsx
<ul style={{ display: "grid", ..., listStyle: "none", padding: 0, margin: 0 }}>
  {allTeams.map((team) => (
    <li key={team.name}><TeamCard team={team} /></li>
  ))}
</ul>
```

---

### MINOR-3 — Heading hierarchy skips h2

**WCAG:** 1.3.1 Info and Relationships (A)
**Location:** Lines 430 (`<h3>`), 509 (`<h1>`)

Jumps from `<h1>` directly to `<h3>` for team names.

**Fix:** Change team name headings to `<h2>`:

```jsx
<h2 style={{ fontSize: 17, fontWeight: 800, ... }}>{team.name}</h2>
```

---

### MINOR-4 — Decorative character announced by screen readers

**WCAG:** 1.3.1 Info and Relationships (A)
**Location:** Line 483

The `✦` character is read aloud as "black four pointed star".

**Fix:**

```jsx
<span aria-hidden="true">✦</span> {team.special}
```

---

### MINOR-5 — "Pending" badge has no semantic role

**WCAG:** 1.3.1 Info and Relationships (A)
**Location:** Lines 408–427

**Fix:**

```jsx
<div role="status" aria-label="Status: Pending" style={{ ... }}>Pending</div>
```

---

### MINOR-6 — Hex values add screen reader noise

**WCAG:** 1.3.1 Info and Relationships (A)
**Location:** Line 384

Technical hex strings like `#DC0000` are announced but add no semantic value beyond the color name.

**Fix:**

```jsx
{c.hex !== "gradient" && (
  <span aria-hidden="true" style={{ ... }}>{c.hex}</span>
)}
```

---

### MINOR-7 — Generic page title

**WCAG:** 2.4.2 Page Titled (A)
**Location:** `index.html` line 7

Currently `<title>f1-livery</title>`.

**Fix:**

```html
<title>F1 2026 Livery Design System</title>
```

---

### MINOR-8 — Google Fonts link rendered inside component body

**Location:** Line 497

The `<link>` for Google Fonts is rendered in the React component instead of `<head>` in `index.html`. Can cause FOUC.

**Fix:** Move to `index.html` `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700;800;900&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

---

## Summary

| ID | Severity | Issue | WCAG |
|----|----------|-------|------|
| MAJOR-1 | Major | SVG swatches unlabeled | 1.1.1 (A) |
| MAJOR-2 | Major | Legend dots invisible to AT | 1.4.1 (A) |
| MAJOR-3 | Major | 5 text/bg pairs fail contrast | 1.4.3 (AA) |
| MAJOR-4 | Major | 8–10px font sizes in fixed px | 1.4.4 (AA) |
| MINOR-1 | Minor | No landmark regions | 1.3.1 (A) |
| MINOR-2 | Minor | Cards not in a list | 1.3.1 (A) |
| MINOR-3 | Minor | Heading hierarchy skip | 1.3.1 (A) |
| MINOR-4 | Minor | Decorative char announced | 1.3.1 (A) |
| MINOR-5 | Minor | Pending badge no role | 1.3.1 (A) |
| MINOR-6 | Minor | Hex values as SR noise | 1.3.1 (A) |
| MINOR-7 | Minor | Generic page title | 2.4.2 (A) |
| MINOR-8 | Minor | Font link in component body | — |

## Priority

1. Contrast ratios (MAJOR-3) and font sizes (MAJOR-4) — broadest user impact
2. SVG labeling (MAJOR-1) and landmarks (MINOR-1) — screen reader access
3. Remaining minor issues
