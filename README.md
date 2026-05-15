# PeakMall — Interactive Sales Deck

**American Dream Mall** · East Rutherford, NJ  
**Live site:** _add your Vercel URL here after deploy_

This is my submission for the PeakMall / Liat assignment: a single-page, scroll-based sales deck (not a full marketing site). The idea is that someone leasing space, sponsoring an activation, or booking a venue can land on one URL and move through the story in whatever order they want—similar in spirit to Digideck, but built with Next.js so I could control motion, layout, and performance.

---

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** for styling and responsive layout
- **GSAP 3** + ScrollTrigger for scroll animations and section reveals
- **Lenis** for smooth scrolling (works with ScrollTrigger)
- **next/font** — Cormorant Garamond (headlines) and Inter (body)
- Small UI pieces from the **shadcn / Radix** setup in the repo
- **Vercel** for deployment

---

## How to run it locally

You need Node.js 20+ and npm.

```bash
git clone <your-repo-url>
cd peakmall
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other commands I used while building:

```bash
npm run build          # check production build
npm run start          # run build locally
npm run lint
npm run generate-logos   # rebuilds placeholder logos in public/images/logos/
```

I didn’t need any `.env` variables for the version I’m submitting.

---

## Repo layout (quick map)

- `app/` — layout, main page, global styles  
- `components/sections/` — Hero, Why, Retail, Luxury, Dining, Attractions, Events, CTA  
- `components/layout/` — Navbar, side progress dots, smooth scroll wrapper  
- `lib/data/` — copy, stats, tenants, events (easier to edit than hard-coding in JSX)  
- `public/images/` and `public/videos/` — photography and hero video  
- `public/images/logos/` — one PNG per tenant name (slug-based filenames)  
- `steps/` and `ASSIGNMENT.md` — original brief I followed  
- `ASSET_GENERATION.md` — notes I kept for image sizes and Adobe Express prompts  

---

## Design choices

I wanted the deck to feel **premium and calm**, not like a busy e-commerce site. Most of the UI sits on near-black (`#0A0A0A`) with gold accents (`#C9A96E`) and cream text, which matches the luxury-mall direction from the assignment.

**Typography:** Cormorant for big headlines (editorial feel) and Inter for stats, nav, and body text.

**Sections:** Each major beat is basically a full viewport height so it reads like a presentation. The hero uses a background video; other sections use stills I generated or placed under `public/images/`.

**Navigation:**  
- **Desktop (1024px+):** horizontal nav with a gold underline that follows the active section.  
- **Mobile and tablet (below 1024px):** hamburger that opens a side drawer (60% width on tablet). All chapter names are listed there so you can jump to any section.  
- **Right side:** progress dots from tablet size upward so you can still scan where you are in the deck.

Scrolling uses Lenis; clicking a nav item scrolls to that section. I fixed an issue where the active indicator would get “stuck” if you scrolled quickly through multiple sections—now it tracks scroll position on every frame instead of relying only on Intersection Observer thresholds.

**Retail tenant mix:** Switching categories (Luxury, Premium, etc.) swaps the background image and shows a grid of brands with logo slots. Filenames are based on a slug of the tenant name (see `lib/assets.ts`).

---

## Responsive behavior

| Screen | What you get |
|--------|----------------|
| Phone | Hamburger menu + drawer, partner CTA inside the drawer |
| Tablet | Same drawer (60% width) + side dots |
| Desktop | Full top nav + partner button in the header |

---

## AI tools (how I actually used them)

**Adobe Express — text-to-image**  
I used this for most of the photography-style assets (hero still, map, luxury interior, retail category backgrounds, venues, attractions, dining strips). I kept a list of prompts and filenames in `ASSET_GENERATION.md` because Express generates one image at a time, not a whole folder in one go.

**AI-assisted coding (Cursor)**  
I used Cursor while building and debugging—especially for GSAP/Lenis integration, the navbar drawer, and Tailwind v4 theme setup. I still reviewed and edited the code myself; it’s not a copy-paste-only project.

**Logo placeholders**  
For tenant logos I wrote a small Node script (`scripts/generate-logos.mjs`) that exports simple gold monogram PNGs (initials on dark). These are **not** real trademark logos—I’d replace them with official brand assets in a production version.

I did **not** use AI to fake recognizable brand logos.

---

## Deploying to Vercel

1. Push the repo to GitHub.  
2. Import it on [vercel.com](https://vercel.com) as a Next.js project.  
3. Deploy with default settings.  
4. Paste the live URL at the top of this README and in your submission email.

---

## Write-up: rationale, AI, and what I’d do next

### Why I built it this way

The brief asked for something that feels like Apple / luxury retail—not a generic mall homepage. I structured the page as a **sales narrative**: hook with scale (hero + video), prove the market (why / stats), then walk through retail, luxury, dining, attractions, and events before asking for contact.

I cared a lot about **non-linear navigation** because the assignment compares this to Digideck. In a real pitch, people jump around. So every section is reachable from the nav, the drawer, and the side dots without breaking scroll position.

Motion is there to hold attention (hero text reveal, cards fading in on scroll, parallax on the luxury header on desktop), but I tried not to overdo it—fast easing everywhere feels cheap for this audience.

### What I’d improve with more time

- Swap monogram logos for real press-kit SVGs/PNGs and optimize images (WebP, proper `sizes` on `next/image`).  
- Hit a proper Lighthouse pass (lazy-load video, less JS on mobile, `prefers-reduced-motion`).  
- Build the Phase 2 sub-pages from the brief (events module, leasing paths, sponsorship tiers) instead of only teasing them in the CTA section.  
- Hook up a simple CMS so marketing could change tenant lists without redeploying.  
- Add basic analytics (which sections people actually scroll to) if this were used in live sales meetings.

---

## Submission notes

- Assignment details: `ASSIGNMENT.md`  
- Build checklist I referenced: `steps/`  

If anything doesn’t run, start with `npm install` and `npm run build`—that’s what I used to verify before submit.
