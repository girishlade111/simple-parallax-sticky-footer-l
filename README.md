# Simple Parallax Sticky Footer

A single-page landing site demo showcasing **scroll-driven animations**: a parallax hero, smooth scrolling, and a "sticky footer" that gets revealed from behind the page content as you scroll to the bottom. Fully static, no backend. Built with Next.js, framer-motion, and Lenis; originally scaffolded with v0.app.

> Built by Girish Lade — https://ladestack.in

**Live demo:** https://girishlade111.github.io/simple-parallax-sticky-footer-l/

## What it does

One scrolling page composed of four sections:

- **Hero** (`components/hero.tsx`) — full-screen parallax headline; background layers move at different speeds via framer-motion's `useScroll` + `useTransform` as you scroll.
- **Featured** (`components/featured.tsx`) — featured content section.
- **Promo** (`components/promo.tsx`) — promo band with its own subtle scroll parallax (`-10vh → 10vh`).
- **Sticky footer** (`components/footer.tsx`) — the signature effect: the footer is `position: sticky` inside a tall clipped container, so content scrolls *over* it and the footer appears to "stick" while being revealed. Responsive heights: 400px (mobile) / 600px (sm) / 800px (lg).
- **Lenis smooth scrolling** — `@studio-freight/lenis` wired into a `requestAnimationFrame` loop on the home page for buttery scroll inertia.
- Header/nav component (`components/header.tsx`) and dark theme via `next-themes`.

The effect is pure CSS + client-side JS — no server components, no data fetching.

## Tech stack

| Layer      | Technology |
|-----------|------------|
| Framework | Next.js 15 (App Router, static export) |
| Animation | framer-motion (scroll-linked transforms) |
| Scrolling | Lenis (`@studio-freight/lenis`) smooth scroll |
| UI        | React 19, Tailwind CSS 3.4, shadcn/ui (Radix) |
| Icons     | lucide-react |
| Fonts     | Geist (bundled `geist` package) |

## Quick start

```bash
# install dependencies (pnpm preferred; npm works too)
pnpm install

# run the dev server
pnpm dev        # http://localhost:3000

# build a static production bundle
pnpm build     # output goes to ./out

# preview the static bundle
npx serve out
```

### npm alternative

```bash
npm install --legacy-peer-deps
npm run build
```

## Project structure

```
app/
  page.tsx            # Page composition + Lenis smooth-scroll loop
  layout.tsx          # Root layout, theme provider, fonts
  globals.css         # Tailwind base styles
components/
  hero.tsx            # Parallax hero (framer-motion useScroll/useTransform)
  featured.tsx        # Featured section
  promo.tsx           # Promo band with scroll parallax
  footer.tsx          # Sticky parallax footer
  header.tsx          # Site header/nav
  theme-provider.tsx  # next-themes wrapper
lib/
  utils.ts            # cn() class-name helper
public/               # Static assets
next.config.mjs       # Static export config (output: 'export')
```

## How the sticky footer works

1. An outer wrapper with `clip-path: polygon(...)` creates a clipping box as tall as the footer (400–800px depending on breakpoint).
2. Inside it, a spacer `div` of `100vh + footerHeight` is offset by `-100vh`.
3. The footer content itself is `position: sticky` with `top: calc(100vh - footerHeight)` — so it "sticks" at the bottom of the viewport while the page above it keeps scrolling away, creating the reveal effect.

## Environment variables

None required — the site is fully static and needs no secrets.

## Deployment

The site is a static export, so it can be hosted anywhere that serves static files:

- **GitHub Pages** (current): the `gh-pages` branch is deployed automatically and served at `https://girishlade111.github.io/simple-parallax-sticky-footer-l/`. Because the site lives under a sub-path, `next.config.mjs` sets `basePath: '/simple-parallax-sticky-footer-l'`. **If you deploy to a root domain or Vercel, remove the `basePath` setting** before building.
- **Vercel / Netlify / Cloudflare Pages**: connect the repo and build with `pnpm build` (publish directory `out/` for Pages).

## Security note

Next.js is pinned to 15.2.8 (patched for CVE-2025-55182 React2Shell and related 15.2.x advisories).
