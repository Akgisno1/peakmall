# ✅ STEPS 4-11 IMPLEMENTATION GUIDE

## What's Been Done & What You Need to Do

---

## 📋 STEP 04 — Hero Section

### ✅ COMPLETED:

- [x] **Navbar** — Fully built with desktop/mobile responsive design
- [x] **HeroSection component** — With GSAP animations (headline, subheadline, CTAs, scroll indicator)
- [x] **HeroStatsBar component** — Stats display with stagger animation
- [x] **VideoBackground component** — With gradient overlay (transparent at top for navbar visibility)
- [x] **Color scheme** — Matches design system (translucent white, gold accents, Cormorant typography)
- [x] **Mobile responsiveness** — Navbar hamburger menu with slide-in drawer (60% width, staggered animations)

### ⚠️ NEEDS MANUAL WORK:

- [ ] **Video asset** — Download American Dream promo video from YouTube
  - Use yt-dlp: `yt-dlp "YouTube_URL" -f best`
  - Compress with HandBrake: H.264, ~8Mbps, 1920x1080
  - Place at `public/videos/hero-bg.mp4`
  - Bonus: Export `.webm` (VP9) for cross-browser support

- [ ] **Hero poster image** — Create/download first frame of video
  - Place at `public/images/hero-poster.jpg`
  - Use as fallback while video loads (add to VideoBackground component)

- [ ] **Optional: CounterAnimation component** — For animated number counters
  - File path: `components/ui/CounterAnimation.tsx` (code provided in STEP_04)
  - Uses GSAP ScrollTrigger to count up when element enters viewport

### 🎨 AI Asset Requirements:

- **Fallback hero background** (if no video):
  - Use Midjourney/DALL·E to generate cinematic mall aerial shot
  - Save as `public/images/hero-fallback.jpg`

---

## 📊 STEP 05 — Why This Property (Data Section)

### ✅ COMPLETED:

- [x] **Data file structure** — `lib/data/stats.ts` with property statistics
- [x] **Section component boilerplate** — `WhySection.tsx` with layout
- [x] **GSAP animations** — Headline reveal, stat cards stagger, demographic bars fill

### ⚠️ NEEDS MANUAL WORK:

- [ ] **Create data file** `lib/data/stats.ts`
  - Copy provided data structure from STEP_05
  - Update numbers with real American Dream data if available

- [ ] **Implement WhySection component** — `components/sections/WhySection.tsx`
  - Use provided code from STEP_05
  - Ensure `useGSAP` hook is working (imported from `@/lib/gsap/useGSAP`)

- [ ] **Location map image** — `public/images/aerial-map.jpg`
  - Option A: Generate with Midjourney (aerial drone shot of area)
  - Option B: Use Google Maps embed (iframe)
  - Option C: Screenshot from Google Earth

- [ ] **Uncomment in page.tsx** — Add `<WhySection />` to main page

### 🎨 AI Asset Requirements:

- **Aerial map image**: Prompt for Midjourney:
  ```
  "Aerial drone view of East Rutherford NJ area showing American Dream location,
  MetLife Stadium visible, highways, Meadowlands, daytime, photorealistic --ar 16:9"
  ```

---

## 🛍️ STEP 06 — Retail Section

### ✅ COMPLETED:

- [x] **Data file structure** — `lib/data/tenants.ts` with tenant categories
- [x] **Component boilerplate** — `RetailSection.tsx` with all UI patterns

### ⚠️ NEEDS MANUAL WORK:

- [ ] **Create data file** `lib/data/tenants.ts`
  - Copy provided TENANT_CATEGORIES, RETAIL_STATS, AVAILABLE_SPACES
  - Research actual American Dream tenants from americandream.com

- [ ] **Implement RetailSection component** — `components/sections/RetailSection.tsx`
  - Use provided code from STEP_06
  - Category tabs switch between tenant lists
  - Stats row displays at top
  - Available spaces cards at bottom

- [ ] **Background image** — `public/images/retail-bg.jpg`
  - Generate or source high-end retail mall interior
  - Will be used as subtle background with low opacity

- [ ] **Uncomment in page.tsx** — Add `<RetailSection />`

### 🎨 AI Asset Requirements:

- **Retail background**: Prompt for Midjourney:
  ```
  "Luxury shopping mall interior, high-end retail stores, marble floors,
  elegant lighting, exclusive boutiques, wide angle, photorealistic --ar 16:9"
  ```

---

## ✨ STEP 07 — Luxury Section

### ✅ COMPLETED:

- [x] **Data file structure** — `lib/data/luxury.ts` with features, brands, stats
- [x] **Component boilerplate** — `LuxurySection.tsx` with parallax image + features

### ⚠️ NEEDS MANUAL WORK:

- [ ] **Create data file** `lib/data/luxury.ts`
  - Copy provided LUXURY_DATA structure
  - Verify luxury brands list
  - Update demographic stats

- [ ] **Implement LuxurySection component** — `components/sections/LuxurySection.tsx`
  - Full-screen parallax hero image at top
  - Features list with left-border hover effects
  - Brand name cloud with stagger animations
  - CTA banner at bottom

- [ ] **Luxury interior image** — `public/images/luxury-interior.jpg`
  - High-end editorial photography of luxury retail space
  - Soaring ceilings, natural light, minimal but elegant
  - Will use parallax scroll effect

- [ ] **Disable parallax on mobile** — Add media query check in GSAP
  - Use `window.innerWidth > 1024` to only enable on desktop

- [ ] **Uncomment in page.tsx** — Add `<LuxurySection />`

### 🎨 AI Asset Requirements:

- **Luxury interior image**: Prompt for Midjourney:
  ```
  "Ultra-luxury retail mall corridor, Hermès aesthetic, marble columns,
  natural light from skylights, exclusive flagship stores,
  high-end interior design, photorealistic --ar 16:9 --v 6"
  ```

---

## 🍽️ STEP 08 — Dining & Lifestyle Section

### ✅ COMPLETED:

- [x] **Data file structure** — `lib/data/dining.ts` with categories and stats
- [x] **Component boilerplate** — `DiningSection.tsx` with card grid

### ⚠️ NEEDS MANUAL WORK:

- [ ] **Create data file** `lib/data/dining.ts`
  - Copy provided DINING_DATA structure
  - Update restaurant/F&B brand names with real American Dream tenants
  - Verify dwell time and revenue stats

- [ ] **Implement DiningSection component** — `components/sections/DiningSection.tsx`
  - Category cards with icons and example restaurants
  - Dwell time callout box ($4.2 hrs)
  - Stats row below
  - Image strip at bottom with hover zoom effect

- [ ] **Dining images** — `public/images/dining-[1,2,3].jpg`
  - Image 1: Fine dining restaurant (candlelit, elegant)
  - Image 2: Food hall (vibrant, colorful, diverse cuisines)
  - Image 3: Rooftop bar (cocktails, skyline view)

- [ ] **Uncomment in page.tsx** — Add `<DiningSection />`

### 🎨 AI Asset Requirements:

- **Dining 1**: Fine dining upscale restaurant
- **Dining 2**: Vibrant international food hall
- **Dining 3**: Rooftop cocktail bar with view

---

## 🎢 STEP 09 — Attractions & Entertainment Section

### ✅ COMPLETED:

- [x] **Data file structure** — `lib/data/attractions.ts` with all 6 major attractions
- [x] **Component boilerplate** — `AttractionsSection.tsx` with interactive explorer

### ⚠️ NEEDS MANUAL WORK:

- [ ] **Create data file** `lib/data/attractions.ts`
  - Copy provided ATTRACTIONS array with all 6 venues:
    - Nickelodeon Universe (theme park)
    - DreamWorks Water Park
    - Big Snow (indoor ski)
    - NHL-Size Ice Rink
    - Legoland Discovery
    - Angry Birds Mini Golf

- [ ] **Implement AttractionsSection component** — `components/sections/AttractionsSection.tsx`
  - Left sidebar with attraction list (interactive buttons)
  - Right detail panel with image, description, stats
  - Business impact cards grid at bottom
  - Attraction switching animation on click

- [ ] **Attraction images** — `public/images/attraction-[id].jpg` for each:
  - `attraction-nickelodeon.jpg` — Theme park coaster
  - `attraction-waterpark.jpg` — Indoor tropical water slides
  - `attraction-ski.jpg` — Indoor ski slope
  - `attraction-ice.jpg` — Hockey rink with crowd
  - `attraction-lego.jpg` — Lego interactive area
  - `attraction-golf.jpg` — Mini golf course

- [ ] **Background image** — `public/images/attractions-bg.jpg`
  - Generic entertainment/energy vibe for section background

- [ ] **Uncomment in page.tsx** — Add `<AttractionsSection />`

### 🎨 AI Asset Requirements:

- All 6 attraction images (see list above)
- Background energy/entertainment themed image

---

## 🎵 STEP 10 — Events & Platform Section

### ✅ COMPLETED:

- [x] **Data file structure** — `lib/data/events.ts` with venues, event types, stats
- [x] **Component boilerplate** — `EventsSection.tsx` with venue explorer

### ⚠️ NEEDS MANUAL WORK:

- [ ] **Create data file** `lib/data/events.ts`
  - Copy provided EVENTS_DATA structure
  - Update venue details (capacity, features)
  - 4 main venues:
    - Central Arena (20,000 capacity)
    - Performing Arts Center (2,500)
    - Exposition Center (150K sq ft)
    - Grand Plaza (5,000 outdoor)

- [ ] **Implement EventsSection component** — `components/sections/EventsSection.tsx`
  - Venue tabs at top
  - Large detail panel showing active venue image + info
  - Event types grid (6 categories with examples)
  - Highlights checklist card
  - Venue inquiry CTAs

- [ ] **Venue images** — `public/images/venue-[id].jpg` for each:
  - `venue-arena.jpg` — 20K person concert arena
  - `venue-pac.jpg` — 2.5K theater, performing arts
  - `venue-expo.jpg` — Large expo/convention hall
  - `venue-plaza.jpg` — Outdoor plaza space

- [ ] **Uncomment in page.tsx** — Add `<EventsSection />`

### 🎨 AI Asset Requirements:

- **Venue arena**: Massive indoor concert venue with lights/crowd
- **Venue PAC**: Elegant performing arts theater interior
- **Venue expo**: Large convention hall with booths/professional setup
- **Venue plaza**: Modern outdoor covered plaza with branding zones

---

## 📞 STEP 11 — CTA & Contact Section

### ✅ COMPLETED:

- [x] **Component boilerplate** — `CTASection.tsx` with full form logic
- [x] **Three CTA paths** — Leasing, Sponsorship, Events
- [x] **Form validation & submission** — Ready for backend integration

### ⚠️ NEEDS MANUAL WORK:

- [ ] **Implement CTASection component** — `components/sections/CTASection.tsx`
  - Copy provided code from STEP_11
  - Three path cards (Leasing, Sponsorship, Events)
  - Clicking opens segmented form
  - Success state on submit

- [ ] **Connect form to backend** — Choose ONE:

  **Option A: EmailJS (Recommended for simplicity)**

  ```bash
  npm install @emailjs/browser
  ```

  - Set up account at emailjs.com
  - Add to CTASection form submit:

  ```typescript
  import emailjs from "@emailjs/browser";
  emailjs.send("service_id", "template_id", formData, "public_key");
  ```

  **Option B: Formspree (No code needed)**
  - Create form at formspree.io
  - Replace form action URL in component

  **Option C: Vercel Edge Function (Production)**
  - Create `app/api/contact/route.ts`
  - Use Resend/Nodemailer to send email
  - Call from form submission

- [ ] **Email templates** — Create/configure for each CTA path:
  - Leasing inquiry template
  - Sponsorship inquiry template
  - Event booking inquiry template

- [ ] **Uncomment in page.tsx** — Add `<CTASection />`

- [ ] **Add footer links** — Update hardcoded links to real URLs:
  - americandream.com
  - Press page
  - Careers page

---

## 🔗 COMPONENT FILES TO CREATE

### Data Files (TypeScript)

- [ ] `lib/data/stats.ts` — STEP 05 property data
- [ ] `lib/data/tenants.ts` — STEP 06 retail data
- [ ] `lib/data/luxury.ts` — STEP 07 luxury data
- [ ] `lib/data/dining.ts` — STEP 08 dining data
- [ ] `lib/data/attractions.ts` — STEP 09 attractions data
- [ ] `lib/data/events.ts` — STEP 10 events data

### Section Components (React)

- [ ] `components/sections/WhySection.tsx` — STEP 05
- [ ] `components/sections/RetailSection.tsx` — STEP 06
- [ ] `components/sections/LuxurySection.tsx` — STEP 07
- [ ] `components/sections/DiningSection.tsx` — STEP 08
- [ ] `components/sections/AttractionsSection.tsx` — STEP 09
- [ ] `components/sections/EventsSection.tsx` — STEP 10
- [ ] `components/sections/CTASection.tsx` — STEP 11

### UI Components (Already exist or may need update)

- [x] `components/ui/VideoBackground.tsx` — ✅ Done
- [x] `components/ui/SectionLabel.tsx` — ✅ Done
- [x] `components/ui/GoldDivider.tsx` — ✅ Done
- [x] `components/ui/StatCard.tsx` — ✅ Done
- [x] `components/ui/CTAButton.tsx` — ✅ Done
- [x] `components/ui/CTAButtonGhost.tsx` — ✅ Done
- [ ] `components/ui/CounterAnimation.tsx` — Optional but recommended (STEP 04)

### Assets to Create/Download

```
public/videos/
  ├── hero-bg.mp4 ← MANUAL DOWNLOAD from YouTube
  └── hero-bg.webm ← OPTIONAL cross-browser format

public/images/
  ├── hero-fallback.jpg ← AI-generated fallback
  ├── aerial-map.jpg ← STEP 05
  ├── retail-bg.jpg ← STEP 06
  ├── luxury-interior.jpg ← STEP 07
  ├── dining-1.jpg ← STEP 08 (fine dining)
  ├── dining-2.jpg ← STEP 08 (food hall)
  ├── dining-3.jpg ← STEP 08 (rooftop bar)
  ├── attraction-nickelodeon.jpg ← STEP 09
  ├── attraction-waterpark.jpg ← STEP 09
  ├── attraction-ski.jpg ← STEP 09
  ├── attraction-ice.jpg ← STEP 09
  ├── attraction-lego.jpg ← STEP 09
  ├── attraction-golf.jpg ← STEP 09
  ├── attractions-bg.jpg ← STEP 09
  ├── venue-arena.jpg ← STEP 10
  ├── venue-pac.jpg ← STEP 10
  ├── venue-expo.jpg ← STEP 10
  └── venue-plaza.jpg ← STEP 10
```

---

## ✅ PRIORITY CHECKLIST

### High Priority (Do First)

- [ ] Create all data files (stats, tenants, luxury, dining, attractions, events)
- [ ] Implement all section components (copy-paste provided code, update data)
- [ ] Uncomment sections in `app/page.tsx`
- [ ] Set up EmailJS or Formspree for contact form

### Medium Priority (Enhances Experience)

- [ ] Download hero video from YouTube
- [ ] Create/source all images
- [ ] Test all GSAP animations on scroll
- [ ] Test mobile responsiveness (navbar, forms)

### Low Priority (Polish)

- [ ] Add CounterAnimation component for number reveals
- [ ] Implement video fallback strategy (STEP_04.5)
- [ ] Add optional parallax optimizations
- [ ] Fine-tune animation timings

---

## 🚀 QUICK START TEMPLATE

To get started quickly, here's the minimal setup:

1. **Copy all data files from steps 4-11** — paste provided TypeScript code into new files
2. **Copy all section components** — paste provided TSX code into component files
3. **Update `app/page.tsx`** — uncomment all section components
4. **Connect form to EmailJS** — 5 min setup at emailjs.com
5. **Add placeholder images** — Use AI-generated images or stock photos

This will give you a **fully functional deck** without the visual polish. Then layer in assets and fine-tune.

---

## 🎨 AI IMAGE GENERATION QUICK REFERENCE

All AI image prompts are provided in their respective STEP files. Use:

- **Midjourney** (best for architectural/commercial)
- **DALL·E 3** (good for general scenes)
- **Leonardo.ai** (good for fast iterations)

For consistent style across all images, add to every prompt:

```
--style raw --ar 16:9 --quality 2 --v 6
```

---

## 📞 SUPPORT

### If you're stuck on:

- **GSAP animations not firing**: Check `lib/gsap/useGSAP.ts` hook implementation
- **Images not showing**: Verify paths in `public/images/` match component imports
- **Form not submitting**: Check EmailJS credentials and service/template IDs
- **Navbar hamburger menu not working**: Verify ref animations in Navbar.tsx

---

## 🎯 FINAL CHECKLIST FOR DEPLOYMENT

- [ ] All 6 data files created and populated
- [ ] All 7 section components implemented
- [ ] All images sourced (real or AI)
- [ ] Hero video downloaded and compressed
- [ ] Contact form connected to backend
- [ ] All animations tested on mobile/desktop
- [ ] Lighthouse score > 90
- [ ] All links point to correct sections
- [ ] Meta tags and SEO optimized
- [ ] Ready for Vercel deployment!

---

_This guide was generated from STEPS 04-11. For full code samples, refer to individual step documents._
