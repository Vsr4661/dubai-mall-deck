# Dubai Mall — Interactive Sales Deck

> A cinematic, browser-based sales presentation for the world's most visited retail destination. Built as a fully interactive pitch tool for prospective retail tenants, brand sponsors, and event partners.

![Dubai Mall Sales Deck](https://images.unsplash.com/photo-1546412414-8035e1776c9a?w=1200&q=80&auto=format&fit=crop)

---

## 🔗 Live Demo

**[View Live →](https://dubai-mall-deck.vercel.app)**

---

## 📋 Overview

This project replaces the traditional fragmented sales process (PDFs, YouTube videos, spreadsheets) with a single, self-contained interactive sales deck. It is designed to be:

- **Screen-shared** on live sales calls
- **Sent as a standalone link** for prospects to explore independently
- **Non-linear** — the viewer controls their own journey through the content

The deck targets three primary audiences:
1. **Retail Tenants** — Luxury flagships, mid-tier brands, F&B operators, pop-up activations
2. **Brand Sponsors** — Looking for high-reach partnership and activation opportunities
3. **Event Partners** — Concert promoters, corporate event planners, brand launchers

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/dubai-mall-deck.git
cd dubai-mall-deck

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Production Build

```bash
npm run build
npm run preview
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

---

## 🛠 Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| **Framework** | React 18 + Vite | Fast HMR, ESM-native, minimal config |
| **Styling** | Tailwind CSS v4 | Utility-first with JIT — zero unused CSS |
| **Animations** | Framer Motion | Production-grade `whileInView` scroll triggers, `AnimatePresence` transitions |
| **Routing** | React Router v6 | Extensible for future sub-module pages |
| **Icons/Assets** | Unsplash CDN + local video | High-quality imagery without licensing cost |
| **Deployment** | Vercel | Zero-config, global CDN, instant preview URLs |

---

## 📁 Project Structure

```
dubai-mall-deck/
├── public/
│   └── hero.mp4              # Hero background video (replace with licensed footage)
├── src/
│   ├── components/
│   │   ├── Card/
│   │   │   ├── AttractionCard.jsx
│   │   │   ├── BrandCard.jsx
│   │   │   └── EventCard.jsx
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Modal/
│   │   │   └── EnquiryModal.jsx   # Global contact/booking modal
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx         # Active section indicator, smooth scroll
│   │   ├── SectionWrapper/
│   │   │   └── SectionWrapper.jsx # Standardised layout container
│   │   ├── Stats/
│   │   │   └── StatsGrid.jsx      # RAF-based animated number counters
│   │   └── VideoSection/
│   │       └── VideoSection.jsx   # Reusable video strip component
│   ├── data/
│   │   └── mallData.js            # All content data (brands, events, venues, tiers)
│   ├── pages/
│   │   └── Home.jsx               # Page assembly + modal state
│   ├── sections/
│   │   ├── OpeningHero.jsx        # Cinematic video hero
│   │   ├── WhyThisProperty.jsx    # Location, demographics, key stats
│   │   ├── Retail.jsx             # Brand grid with category filters
│   │   ├── Luxury.jsx             # Fashion Avenue showcase
│   │   ├── DiningLifestyle.jsx    # F&B masonry grid
│   │   ├── AttractionsEntertainment.jsx
│   │   ├── EventsPlatform.jsx
│   │   ├── VenueCapabilities.jsx  # Performing arts, expo, outdoor venues
│   │   ├── Sponsorship.jsx        # 3-tier partnership packages
│   │   └── Leasing.jsx            # Segmented leasing paths
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── README.md
```

---

## 🎨 Design Decisions

### 1. Minimalist Luxury Aesthetic
Inspired by Apple, Tesla, and LVMH — dark `#0A0A0A` base with `#C9A84C` gold accents. Every design element signals premium positioning without decoration for its own sake.

### 2. Non-Linear Navigation
A persistent sticky navbar with `IntersectionObserver`-powered active section highlighting lets viewers jump directly to the section most relevant to them — Retail, Sponsorship, or Events — without being forced through a linear flow.

### 3. Video-First Hero
The hero section uses a self-hosted HTML5 `<video>` element with `autoPlay muted loop playsInline` — the most reliable cross-browser approach for silent background video. A high-quality Unsplash image is always present beneath it as an instant fallback.

### 4. Modular Data Layer
All content lives in `src/data/mallData.js` — brands, dining venues, events, sponsorship tiers, and leasing categories. Updating content requires zero component changes, and new sections can be added by simply adding data entries.

### 5. Global Enquiry Modal
A single `EnquiryModal` component at the App level accepts pre-filled interest context from any CTA. Clicking "Enquire About Title Partner" or "Book a Venue" opens the same modal with the appropriate option pre-selected — reducing friction to action.

### 6. Animated Demographics
Visitor demographic bars (International/GCC/Local split) use Framer Motion's `whileInView` to animate from 0% to their actual values only when scrolled into view — data storytelling that feels alive rather than static.

### 7. Fail-Safe Image Handling
Every card component has an `onError` handler that hides broken images gracefully, preventing white boxes or broken layouts when external image URLs fail.

---

## 🤖 AI Tools Used

| Tool | Usage |
|---|---|
| **Gemini (Antigravity)** | Primary development assistant — architecture decisions, component generation, bug resolution, data structuring |
| **Unsplash** | High-quality placeholder imagery for brands, dining, attractions, and events |
| **ChatGPT** | Copywriting — section headlines, brand descriptions, demographic narrative |

### How AI Accelerated Development

- **Component scaffolding**: Full section components (Sponsorship, Leasing, VenueCapabilities) generated in minutes with correct data bindings
- **Bug diagnosis**: Identified Tailwind v4 opacity class non-generation (`border-white/15`), CJS/ESM interop issue with `react-countup`, and YouTube iframe autoplay policy conflicts
- **Data generation**: Realistic sponsorship pricing tiers, leasing statistics, and audience demographics created contextually

---

## 📦 Sections Delivered

| Section | Description |
|---|---|
| **Opening Hero** | Full-screen video background, animated title entry, dual CTA |
| **Why Dubai Mall** | Key stats, animated demographic bars, HNI visitor data, location map |
| **Retail** | Filterable brand grid (All / Luxury / Fashion / Lifestyle) |
| **Luxury** | Cinematic Fashion Avenue showcase with brand cards |
| **Dining & Lifestyle** | Masonry-style restaurant grid with F&B leasing CTA |
| **Attractions & Entertainment** | 6-card grid: Aquarium, Ice Rink, VR Park, KidZania, Fountain, Cinema |
| **Events Platform** | Event cards + leasing/booking CTA |
| **Venue Capabilities** | Grand Atrium, Theatre, Fountain Terrace — capacity + features |
| **Sponsorship** | 3-tier partnership packages with animated hover cards |
| **Leasing** | 4-category tabbed paths: Luxury / Retail / F&B / Pop-Up |

---

## 🔮 What I Would Improve With More Time

1. **Real video assets** — Replace the placeholder `hero.mp4` with licensed Dubai Mall official footage from their press kit
2. **Backend CRM integration** — Wire the Enquiry Modal to HubSpot or Salesforce via API so submissions flow directly to the commercial team
3. **Sub-module routing** — Expand Sponsorship and Leasing into full `/sponsorship` and `/leasing` routes with deeper content pages
4. **Lighthouse optimisation** — Implement proper lazy loading with `<Suspense>`, image `srcset`, and video preloading strategy to hit 90+ score
5. **Tenant search** — Add a real-time searchable brand directory for the Retail section
6. **Analytics** — Track which sections prospects spend the most time on (heat mapping for the sales team)

---

## 📧 Submission

Built for the Liat.ai Interactive Sales Deck interview assignment.

**Email**: vsr4661@gmail.com | **GitHub**: [github.com/vsr4661](https://github.com/vsr4661) | **Repo**: [github.com/vsr4661/dubai-mall-deck](https://github.com/vsr4661/dubai-mall-deck) | **Live URL**: *(add after Vercel deploy)*
