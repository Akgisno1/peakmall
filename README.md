# PeakMall — Interactive Sales Deck

A cinematic, non-linear browser sales deck for **American Dream Mall** (East Rutherford, NJ): a luxury, scroll-driven presentation for retail tenants, sponsors, and event partners.

**Live demo:** Deploy to [Vercel](https://vercel.com) and add your URL here.

---

## Tech stack

| Layer | Technology |
|--------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI primitives | Radix UI / shadcn-style components |
| Animation | GSAP 3 + ScrollTrigger, `@gsap/react` |
| Smooth scroll | [Lenis](https://github.com/darkroomengineering/lenis) |
| Fonts | Cormorant Garamond (display), Inter (body) via `next/font` |
| Deployment | Vercel (recommended) |

---

## Getting started

### Prerequisites

- Node.js 20+ (22 LTS recommended)
- npm 10+

### Install & run

```bash
git clone <your-repo-url>
cd peakmall
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
npm run generate-logos   # Regenerate tenant monogram PNGs in public/images/logos/
```

### Environment

No required env vars for local development. Add `.env.local` only if you extend the project (analytics, CMS, etc.).

---

## Project structure

```
peakmall/
├── app/                    # Next.js App Router (layout, page, globals)
├── components/
│   ├── layout/             # Navbar, SideProgress, SmoothScroll, SectionWrapper
│   ├── sections/           # Hero, Why, Retail, Luxury, Dining, Attractions, Events, CTA
│   └── ui/                 # Buttons, cards, BrandLogo, VideoBackground
├── lib/
│   ├── data/               # Content: stats, tenants, events, sections
│   ├── gsap/               # Animation helpers & easings
│   ├── scroll/             # Active section detection (scroll spy)
│   └── context/            # Navigation + Lenis scroll-to-section
├── public/
│   ├── images/             # Section photography & retail backgrounds
│   ├── images/logos/       # Tenant logo PNGs
│   └── videos/             # Hero background video
├── scripts/
│   └── generate-logos.mjs  # Batch logo generator (sharp)
└── steps/                  # Build guide (assignment reference)
```

---

## Design decisions

### Visual language

- **Palette:** Near-black (`#0A0A0A`), champagne gold (`#C9A96E`), warm cream text — aligned with luxury retail decks (Hermès / Apple keynote tone).
- **Typography:** Editorial serif headlines (Cormorant Garamond) + clean sans body (Inter) for data and UI.
- **Layout:** Full-viewport sections, generous spacing, glass cards, gold accents on CTAs.

### Interaction model

- **Non-linear navigation:** Desktop nav, tablet chapter strip, mobile drawer, and right-side progress dots all jump to sections via smooth Lenis scroll.
- **Scroll spy:** Active section is derived from scroll position (not fragile per-section IntersectionObservers), so the navbar indicator stays correct during fast scrolling.
- **Motion:** GSAP entrance reveals and scrubbed parallax on key hero/luxury visuals; restrained easing (`power3`) for a premium feel.

### Responsive breakpoints

| Range | Behavior |
|--------|----------|
| **Mobile** (`< 768px`) | Hamburger → side drawer (~85vw max 320px) with chapter titles; Partner CTA in drawer |
| **Tablet** (`768px – 1023px`) | Same hamburger drawer at **60% width**; side progress dots; wider container padding |
| **Desktop** (`≥ 1024px`) | Full horizontal nav with animated gold underline; full chapter labels |

### Content architecture

- Section copy and stats live in `lib/data/*` for easy updates without touching UI.
- Retail **tenant mix** uses per-category background images and logo slots wired to `public/images/logos/{slug}.png`.

---

## AI tools used

| Tool | How it was used |
|------|------------------|
| **Cursor (Claude / Composer)** | Architecture, components, GSAP patterns, bug fixes, README |
| **Adobe Express** (user workflow) | Hero, section backgrounds, venue/attraction photography per `ASSET_GENERATION.md` |
| **Script: `generate-logos.mjs`** | Programmatic gold monogram PNGs for tenant grid (initials on dark — placeholders until official brand assets) |

We did **not** use AI to reproduce trademark logos; deck uses monograms or your uploaded assets.

---

## Assets

See **[ASSET_GENERATION.md](./ASSET_GENERATION.md)** for filenames, resolutions, and Adobe Express prompts.

After adding images:

```bash
public/images/           # .png backgrounds
public/images/logos/     # .png per tenant slug
public/videos/hero-bg.mp4
```

---

## Deployment (Vercel)

1. Push the repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (default).
4. Deploy — no extra build settings required.

---

## Design rationale & future improvements

### Rationale (short write-up)

This deck treats American Dream as a **destination platform**, not a traditional mall site. The narrative order mirrors a sales conversation: emotional hook (hero) → proof of scale (why) → category depth (retail, luxury, dining, attractions, events) → partnership CTA.

**Video and motion** establish scale within seconds; **data blocks** (40M visitors, 3M sq ft) anchor credibility; **tenant and venue visuals** make the opportunity tangible for leasing, sponsorship, and events audiences.

Navigation is intentionally **multi-modal** (nav bar, side dots, in-section CTAs) because decision-makers skim non-linearly — similar to Digideck-style decks, implemented as a single performant URL.

### What we would improve with more time

1. **Real brand assets** — Replace monogram logos with licensed SVGs from press kits; add WebP/AVIF variants and `next/image` priority for LCP.
2. **Phase 2 modules** — Dedicated `/modules/events`, `/modules/leasing`, `/modules/sponsorship` routes with deeper forms and CMS-backed content.
3. **Performance pass** — Lighthouse 90+ audit: lazy video, reduced GSAP on mobile, `prefers-reduced-motion` fallbacks.
4. **Analytics** — Section-level engagement tracking to see which story beats convert in live sales meetings.
5. **Accessibility** — Focus traps in mobile menu (partially addressed), skip links, reduced-motion, contrast audit on gold-on-black text.
6. **Content admin** — Sanity or Contentful so non-developers can update tenants and stats without redeploying.

---

## Assignment reference

Built for the PeakMall / Liat interactive sales deck assignment. See `ASSIGNMENT.md` and `steps/` for the original brief and section checklist.

---

## License

Private / assignment submission — update license as required by your institution or client.
