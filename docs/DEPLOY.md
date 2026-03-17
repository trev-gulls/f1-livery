# Deployment Guide

The F1 Livery Design System is deployed to GitHub Pages at:
**https://trev-gulls.github.io/f1-livery/**

## How It Works

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. Checks out the repo
2. Installs Bun and dependencies (`bun install --frozen-lockfile`)
3. Builds the production bundle (`bun run build`)
4. Uploads `dist/` as a Pages artifact
5. Deploys to GitHub Pages

Manual deployments can be triggered from the Actions tab via "Run workflow".

## Local Preview

```sh
bun run build && bun run preview
```

The preview server runs at `http://localhost:4173/f1-livery/`.

## Base Path

Vite is configured with `base: '/f1-livery/'` in `vite.config.js`. All asset paths (JS, CSS, images) are prefixed with this path. Public assets referenced in code must use `import.meta.env.BASE_URL` instead of hardcoded `/` paths.

## OG Preview Image

The social sharing preview image is at `public/og-preview.png`.

To update it, run the capture script with the dev server running:

```sh
bun run dev &
bun scripts/capture-og.mjs
```

## GitHub Pages Settings

- **Source:** GitHub Actions (not branch-based)
- **Repo setting:** Settings > Pages > Build and deployment > GitHub Actions
- **Custom domain:** None (uses default `trev-gulls.github.io/f1-livery/`)
