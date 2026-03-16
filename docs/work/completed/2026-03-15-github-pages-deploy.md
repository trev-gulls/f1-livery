# GitHub Pages Deployment

**Date:** 2026-03-15
**Status:** Completed

---

## Context

Deploy the F1 Livery Design System as a static site on GitHub Pages with proper metadata for sharing (OG tags, favicon, preview image).

## Tasks

### Build Configuration
- [ ] Set Vite `base: "/f1-livery/"` for correct asset paths on GitHub Pages
- [ ] Verify `bun run build` produces a working `dist/` with correct paths

### GitHub Actions Workflow
- [ ] Add `.github/workflows/deploy.yml` — build with Bun, deploy to GitHub Pages on push to `main`
- [ ] Use `actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`

### HTML Metadata
- [ ] Custom `<title>` (already set, verify it's what you want)
- [ ] Meta description
- [ ] Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- [ ] Twitter card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

### Favicon
- [ ] Replace default Vite favicon with a checkered racing flag SVG
- [ ] Add `.png` fallback for older browsers / social previews
- [ ] Add `apple-touch-icon` for iOS home screen

### Preview Image
- [ ] Take a screenshot of the rendered page (1200x630 recommended)
- [ ] Add to `public/og-preview.png`
- [ ] Reference in OG meta tags

## Decisions

- **Repo name:** `f1-livery` — Vite base path `/f1-livery/`
- **Domain:** `trev-gulls.github.io/f1-livery` (GitHub Pages default)
- **Favicon:** Checkered racing flag SVG
- **Preview image:** Screenshot of the rendered app

## Acceptance Criteria

- Site builds and deploys automatically on push to `main`
- All assets load correctly (no broken paths, fonts, SVGs)
- Link previews show correct title, description, and image when shared on social/Slack/Discord
- Custom favicon displays in browser tabs (not the Vite default)
