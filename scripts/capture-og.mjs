#!/usr/bin/env bun
/**
 * Capture the OG preview image for social sharing.
 *
 * Renders the header at mobile width with 3x device scale factor
 * to produce a 1200x~800 PNG suitable for og:image meta tags.
 *
 * @file capture-og
 * @version 0.1.0
 * @since 2026-03-15
 * @author tgulls
 *
 * @requires module:playwright
 *
 * @example
 * # Dev server must be running first (bun run dev)
 * bun scripts/capture-og.mjs
 * bun scripts/capture-og.mjs http://localhost:5174/f1-livery/
 */

import { chromium } from "playwright";

const DEFAULT_URL = "http://localhost:5173/f1-livery/";
const url = Bun.argv[2] || DEFAULT_URL;

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 400, height: 360 },
  deviceScaleFactor: 3,
});
await page.goto(url);
await page.waitForTimeout(1000);
await page.screenshot({ path: "public/og-preview.png" });
await browser.close();

console.log("Saved public/og-preview.png");
