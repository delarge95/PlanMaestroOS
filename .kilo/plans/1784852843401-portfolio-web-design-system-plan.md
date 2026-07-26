# Portfolio Web Design System & Implementation Plan

## Executive Summary

This plan outlines the design system, architecture, and implementation roadmap for Alexander Woodcock Salomón's public portfolio website. The portfolio positions him as a **Real-Time 3D Developer / Unity Technical Artist** focused on interactive technical visualization, CAD-to-realtime optimization, and Unity WebGL deployment, with **TwinSight X500** as the flagship case study.

**Key differentiator from AI-generated portfolios**: Technical depth over visual flair, measured evaluation data, honest scope framing (academic prototype, not industrial product), and a design system rooted in technical visualization aesthetics (CAD lines, wireframes, inspection UI) rather than generic "creative" tropes.

---

## 1. Current State Assessment

### Existing Foundation (Astro + React + TypeScript)
- **Stack**: Astro 5.15, React 19, TypeScript 5.9, Three.js, GSAP, Lenis
- **Styling**: CSS custom properties, global.css with design tokens
- **Structure**: Component-based with `src/components`, `src/pages`, `src/data`, `src/layouts`
- **Pages**: Home, Work, TwinSight case study, ARA, Human Pipeline, About, Contact
- **Design tokens**: Dark theme, cyan/green/warm accents, Space Grotesk/Chakra Petch/Azeret Mono typography

### Gaps vs. Benchmark Requirements
| Requirement | Current Status | Gap |
|-------------|----------------|-----|
| TwinSight as hero signal in first viewport | ✅ Partial | Needs stronger visual hierarchy |
| Case study structure per benchmark | ✅ Partial | Missing: demo video embed, before/after comparison, architecture diagram |
| Metrics presentation (SUS, NASA-TLX, triangle reduction) | ✅ Data exists | Needs metric cards with verification badges |
| Visual modes grid with technical framing | ✅ Component exists | Needs real captures / stronger placeholder system |
| CAD-to-realtime pipeline diagram | ❌ Missing | Critical for developer credibility |
| Mobile-first WebGL interaction proof | ❌ Missing | Required for WebGL roles |
| AI disclosure & scope limitations | ✅ Exists | Needs prominent placement |
| Recruiter scan (<60s comprehension) | ⚠️ Partial | Home hero copy needs tightening |
| Asset placeholder system | ✅ Exists | Needs clear "replace me" workflow |

---

## 2. Design System Specification

### 2.1 Design Philosophy: "Technical Visualization Aesthetic"

**Core concept**: The portfolio itself should feel like a technical inspection tool — precise, scannable, layered with data, using visual language from CAD viewers, inspection UIs, and real-time 3D debug overlays.

**Differentiation from AI portfolios**:
- No gradient hero blobs, no floating 3D orbs, no "creative technologist" word salad
- Wireframe overlays, measurement callouts, technical readouts as decorative elements
- Every visual flourish has a technical justification (e.g., scanlines = frame buffer readout)
- Content density honors technical reviewer scanning behavior

### 2.2 Color System (Extended from Current)

```css
:root {
  /* Base - keep existing dark foundation */
  --bg: #040606;
  --bg-soft: #080b0d;
  --surface: rgba(12, 16, 18, 0.78);
  --surface-strong: rgba(18, 23, 26, 0.9);
  
  /* Glass - technical inspection glass */
  --glass: rgba(174, 255, 224, 0.06);
  --glass-strong: rgba(174, 255, 224, 0.11);
  --glass-border: rgba(174, 255, 224, 0.15);
  
  /* Accents - semantic, not decorative */
  --cyan: #77e7ff;      /* Primary: inspection, selection, active state */
  --green: #81f6b0;     /* Success: optimization, verified metrics */
  --warm: #ffbd75;      /* Warning: placeholders, unverified data */
  --amber: #f5c04c;     /* Caution: limitations, disclaimers */
  --coral: #fb6f62;     /* Error: broken links, missing assets */
  
  /* Semantic aliases */
  --accent-primary: var(--cyan);
  --accent-success: var(--green);
  --accent-warning: var(--warm);
  --accent-caution: var(--amber);
  --accent-danger: var(--coral);
  
  /* Text hierarchy */
  --text: #effff6;
  --text-dim: #c6d7d0;
  --muted: #a8b9b2;
  --subtle: #65756f;
  --inverse: #070707;
  
  /* Technical visualization specific */
  --wireframe: rgba(119, 231, 255, 0.35);
  --wireframe-strong: rgba(119, 231, 255, 0.6);
  --selection: rgba(119, 231, 255, 0.25);
  --measurement: rgba(255, 189, 117, 0.9);
  --grid-line: rgba(174, 255, 224, 0.08);
}
```

### 2.3 Typography Scale (Refined)

```css
:root {
  --display: "Chakra Petch", "Space Grotesk", ui-sans-serif, system-ui;
  --body: "Space Grotesk", ui-sans-serif, system-ui;
  --mono: "Azeret Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --ui: "Space Grotesk", ui-sans-serif, system-ui;
  
  /* Fluid type scale */
  --text-xs: clamp(0.68rem, 0.62rem + 0.3vw, 0.78rem);
  --text-sm: clamp(0.82rem, 0.76rem + 0.3vw, 0.92rem);
  --text-base: clamp(0.96rem, 0.9rem + 0.3vw, 1.06rem);
  --text-lg: clamp(1.1rem, 1.02rem + 0.4vw, 1.25rem);
  --text-xl: clamp(1.3rem, 1.2rem + 0.5vw, 1.55rem);
  --text-2xl: clamp(1.6rem, 1.45rem + 0.75vw, 2rem);
  --text-3xl: clamp(2rem, 1.8rem + 1vw, 2.6rem);
  --text-4xl: clamp(2.6rem, 2.3rem + 1.5vw, 3.8rem);
  --text-5xl: clamp(3.4rem, 3rem + 2vw, 5.5rem);
  --text-6xl: clamp(4.4rem, 3.8rem + 3vw, 7.5rem);
  
  /* Line heights */
  --leading-tight: 0.92;
  --leading-snug: 1.05;
  --leading-normal: 1.55;
  --leading-relaxed: 1.7;
}
```

### 2.4 Spacing & Layout System

```css
:root {
  --space-1: 4px;   --space-2: 8px;   --space-3: 12px;
  --space-4: 16px;  --space-5: 20px;  --space-6: 24px;
  --space-8: 32px;  --space-10: 40px; --space-12: 48px;
  --space-16: 64px; --space-20: 80px; --space-24: 96px;
  --space-32: 128px;
  
  /* Container */
  --max-content: 1240px;
  --max-narrow: 880px;
  --max-read: 72ch;
  
  /* Grid */
  --grid-gap: var(--space-6);
  --grid-gap-sm: var(--space-4);
  
  /* Border radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-xl: 20px;
  --radius-pill: 999px;
}
```

### 2.5 Visual Effects Library (Technical Aesthetic)

```css
/* Scanline overlay - use sparingly on media frames */
.scanlines::after {
  content: "";
  position: absolute; inset: 0; pointer-events: none;
  background: repeating-linear-gradient(0deg, transparent 0 2px, rgba(255,255,255,0.015) 2px 3px);
  opacity: 0.4;
}

/* Wireframe edge glow - for interactive elements */
.wireframe-glow {
  box-shadow: 
    0 0 0 1px var(--wireframe),
    0 0 24px rgba(119, 231, 255, 0.08);
}

/* Measurement callout - for dimension annotations */
.measurement-callout {
  position: relative;
}
.measurement-callout::before,
.measurement-callout::after {
  content: "";
  position: absolute;
  width: 12px; height: 1px;
  background: var(--measurement);
}
.measurement-callout::before { left: -16px; top: 50%; }
.measurement-callout::after { right: -16px; top: 50%; }

/* Grid background - subtle technical paper feel */
.tech-grid {
  background-image: 
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px),
    linear-gradient(var(--grid-line) 1px, transparent 1px);
  background-size: 48px 48px;
}

/* Corner brackets - technical drawing reference */
.corner-brackets::before,
.corner-brackets::after {
  content: "";
  position: absolute;
  width: 24px; height: 24px;
  border: 1px solid var(--glass-border);
}
.corner-brackets::before { top: -1px; left: -1px; border-right: none; border-bottom: none; }
.corner-brackets::after { bottom: -1px; right: -1px; border-left: none; border-top: none; }

/* Data readout - monospace technical display */
.data-readout {
  font-family: var(--mono);
  font-size: var(--text-xs);
  letter-spacing: 0.05em;
  color: var(--muted);
}
.data-readout strong { color: var(--text); }
```

### 2.6 Component Design Tokens

| Component | Variants | Key Tokens |
|-----------|----------|------------|
| **Button** | primary, secondary, ghost, danger | `--cta-*`, `--radius-pill`, `--space-4/6` padding |
| **Tag/Chip** | cyan, warm, green, neutral | `--tag-*`, `--radius-pill`, mono font |
| **Card** | default, featured, focus, media-viewer | `--surface*`, `--glass*`, `--shadow`, 3D transform |
| **Metric Block** | verify, safe, placeholder | accent color by status, mono value |
| **Media Frame** | wide, square, portrait | aspect-ratio, scanlines, corner brackets |
| **Disclosure** | warning, positive, neutral | border-left accent, background tint |
| **Section** | default, sticky-copy, split | grid layout, sticky positioning |

### 2.7 Motion & Interaction Principles

```css
:root {
  /* Easing - product feel, not bounce */
  --ease-product: cubic-bezier(0.19, 1, 0.22, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
  
  /* Durations */
  --dur-fast: 160ms;
  --dur-base: 240ms;
  --dur-slow: 360ms;
  --dur-slower: 520ms;
  
  /* Reduced motion */
  --dur-fast-reduced: 1ms;
  --dur-base-reduced: 1ms;
}
```

**Rules**:
- No decorative parallax or scroll-jacking
- Lenis smooth scroll only for anchor navigation
- Hover/focus: transform + border + shadow (max 3 properties)
- Sticky sections: border color shift + subtle shadow increase
- Card focus layer: scale(1.006) + rotateX(0.6deg) + Z-depth

---

## 3. Information Architecture & Page Structure

### 3.1 Site Map (MVP)

```
/                           → Home (Hero + Proof Strip + Spherical Gallery + Focus Variants)
/work                       → Work index (3 project cards)
/twinsight-x500             → TwinSight case study (15 sections per benchmark)
/human-character-pipeline   → Human pipeline case study
/ara-framework              → ARA case study
/about                      → About (identity + stack + availability)
/contact                    → Contact (email, LinkedIn, GitHub, CV)
```

### 3.2 Home Page - Critical Path (60-Second Recruiter Scan)

| Viewport Zone | Content | Purpose |
|---------------|---------|---------|
| **Hero (0-100vh)** | Role headline, one-sentence value prop, TwinSight hero media, Primary CTA "View TwinSight X500" | Immediate positioning |
| **Proof Strip** | 4 evidence cards: TwinSight, Human, ARA, Focus Variants | Scannable proof without scroll |
| **Spherical Gallery** | Interactive 3D gallery (Three.js) or fallback grid | Technical depth signal |
| **Sticky Proof Sections** | TwinSight + Human (side-by-side), ARA (single) | Role-specific evidence |
| **Focus Variant Switcher** | 4 routes: Technical Viz, Unity WebGL, Technical Art, 3D Pipeline | Application-ready storytelling |

### 3.3 TwinSight Case Study - 15 Section Order (per Benchmark)

1. **Hero** - Title, value prop, demo video, CTAs, metadata
2. **Problem** - 2D documentation fails spatial reasoning
3. **Solution** - Interactive technical visualization in browser
4. **Demo Video** - 60-120s embedded player
5. **Key Features** - 6 feature cards (user-facing workflows)
6. **Technical Pipeline** - Architecture diagram + timeline
7. **CAD-to-Realtime Optimization** - Before/after, triangle counts, Blender workflow
8. **Interaction Systems** - Selection, exploded, clipping, modes, UI
9. **Visual Modes** - Grid with technical framing + thermal disclaimer
10. **Evaluation Results** - SUS, NASA-TLX, Think-Aloud metric cards
11. **Role & Ownership** - Contribution breakdown
12. **AI-Assisted Workflow Disclosure** - Transparency block
13. **Constraints & Limitations** - Explicit "not a digital twin" disclaimer
14. **Next Steps** - Guided assembly, WebGPU, digital twin extension
15. **Links** - Demo, GitHub, Video, Thesis, Contact

---

## 4. Technical Architecture

### 4.1 Stack Decisions (Locked)

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Framework** | Astro 5 (static output) | Fast, island hydration for React components, great SEO |
| **UI Components** | React 19 (client:visible/load) | Complex interactions: SphericalGallery, FocusVariantSwitcher |
| **Styling** | CSS Custom Properties + global.css | Zero-runtime, design token source of truth |
| **Animation** | GSAP + Lenis (scroll) | Production-grade, lightweight |
| **3D** | Three.js (r184) | Spherical gallery, potential WebGL embed |
| **Type Safety** | TypeScript strict | Component props, data contracts |
| **Deployment** | GitHub Pages / Cloudflare Pages | Free, fast, custom domain ready |

### 4.2 Data Layer Architecture

```
src/data/
├── projects.ts       # Project definitions, metrics, gallery items
├── links.ts          # All external URLs (placeholders + real)
├── focusVariants.ts  # Role-specific portfolio views
├── siteConfig.ts     # Site metadata, SEO, navigation
└── designTokens.ts   # Exported design tokens for JS access
```

**Projects.ts schema** (already aligned with benchmark):
- Metrics with `status: "verify" | "safe" | "placeholder"`
- `statusNote` for scope limitations
- `interactionNotes` for reviewer guidance
- `accent` color per project (cyan/warm/green)

### 4.3 Component Architecture

```
src/components/
├── layout/
│   ├── BaseLayout.astro          # Root layout, SEO, fonts, scripts
│   ├── SiteHeader.astro          # Sticky nav, brand, actions
│   ├── SiteFooter.astro          # Copyright, social, keywords
│   └── Breadcrumbs.astro         # Mono font, cyan hover
├── primitives/
│   ├── CTAButton.astro           # 3 variants, mono arrow
│   ├── TechTag.astro             # Accent dot, mono label
│   ├── MediaFrame.astro          # Aspect ratios, scanlines, hotspots
│   ├── MetricBlock.astro         # Value + label + detail + status badge
│   ├── DisclosureBlock.astro     # Warning/positive/neutral
│   └── VisualModesGrid.astro     # 3-col mode cards
├── composite/
│   ├── ProjectCard.astro         # Featured/focus states, media viewer
│   ├── CaseStudySection.astro    # Eyebrow, title, body, children slot
│   ├── PipelineTimeline.astro    # Vertical stepper, cyan connectors
│   ├── ScrollStory.astro         # Sticky media + scrolling steps
│   ├── SphericalGallery.tsx      # Three.js interactive or fallback
│   ├── FocusVariantSwitcher.tsx  # Client-side variant tabs
│   └── SectionShell.astro        # Consistent section wrapper
└── technical/
    ├── WireframeOverlay.tsx      # Canvas overlay for hero media
    ├── MeasurementCallout.tsx    # Dimension annotation
    └── DataReadout.tsx           # Mono technical display
```

### 4.4 Asset Pipeline

```
/public/assets/
├── images/
│   ├── twinsight/
│   │   ├── hero.webp              # 1920w, WebGL viewer capture
│   │   ├── inspection-ui.webp
│   │   ├── exploded-view.webp
│   │   ├── clipping.webp
│   │   ├── visual-modes-grid.webp
│   │   ├── cad-to-realtime.webp   # Before/after comparison
│   │   ├── optimization-table.webp
│   │   ├── pipeline-diagram.svg   # Vector architecture diagram
│   │   └── evaluation-results.webp
│   ├── human/
│   │   ├── portrait.webp
│   │   ├── topology.webp
│   │   ├── uv-layout.webp
│   │   ├── materials.webp
│   │   ├── grooming.webp
│   │   └── lighting.webp
│   └── ara/
│       ├── architecture.svg
│       ├── workflow.webp
│       └── output.webp
├── video/
│   └── twinsight-demo.webm        # 60-120s, VP9, <10MB
└── placeholders/
    ├── twinsight-hero.svg
    ├── twinsight-visual-modes.svg
    ├── pipeline-diagram.svg
    ├── human-hero.svg
    ├── human-breakdown.svg
    └── ara-system.svg
```

**Placeholder Convention**: SVG files with visible "PLACEHOLDER — REPLACE WITH FINAL ASSET" text, magenta accent lines, and component slots labeled.

---

## 5. Implementation Phases

### Phase 1: Design System Hardening (Week 1)
- [ ] Extract design tokens to `src/data/designTokens.ts` (JS-accessible)
- [ ] Create `DesignSystemDoc.astro` page for internal reference
- [ ] Audit global.css: remove unused, organize by layer (base, tokens, primitives, composites, utilities)
- [ ] Add reduced-motion media query overrides
- [ ] Verify color contrast ratios (WCAG AA minimum)
- [ ] Document component API props in TypeScript interfaces

### Phase 2: Asset Pipeline & Placeholder System (Week 1-2)
- [ ] Create placeholder SVGs for all required TwinSight visuals (8 assets)
- [ ] Create placeholder SVGs for Human pipeline (5 assets)
- [ ] Create placeholder SVG for ARA (3 assets)
- [ ] Set up image optimization: Astro `<Image />` or sharp config for build-time WebP/AVIF
- [ ] Define asset naming convention and folder structure in README
- [ ] Add `mediaAlt` and `mediaLabel` to all project data

### Phase 3: TwinSight Case Study - Content Completion (Week 2-3)
- [ ] Embed demo video player (native `<video>` with poster, controls)
- [ ] Add CAD-to-realtime pipeline diagram (SVG, interactive hotspots)
- [ ] Implement before/after comparison slider for optimization
- [ ] Build metric cards with verification badges (✓ Verified, ⚠ Pending, ○ Placeholder)
- [ ] Add architecture diagram component (Mermaid or custom SVG)
- [ ] Implement visual modes grid with real captures / strong placeholders
- [ ] Add thermal-style mode disclaimer as prominent disclosure block
- [ ] Write all 15 section copy blocks per benchmark structure
- [ ] Add "Open WebGL Prototype" CTA with external link indicator

### Phase 4: Home Page - Recruiter Scan Optimization (Week 3)
- [ ] Tighten hero copy to <3 lines, role in first 5 words
- [ ] Ensure TwinSight media loads at LCP priority
- [ ] Proof strip: 4 cards, scannable in 5 seconds
- [ ] Spherical gallery: ensure fallback grid works without JS
- [ ] Focus variant switcher: 4 routes, persistent URL state
- [ ] Mobile hero: stacked layout, media below copy

### Phase 5: Supporting Pages (Week 3-4)
- [ ] Work index: 3 project cards, featured styling for top 2
- [ ] Human pipeline: 8-stage breakdown, ArtStation link
- [ ] ARA framework: Architecture diagram, workflow, limitations
- [ ] About: Identity panel, signal board (3 cards), process map
- [ ] Contact: Form (Formspree/Netlify), availability status, links

### Phase 6: Technical Polish & QA (Week 4)
- [ ] Lighthouse audit: Performance >90, Accessibility >95, SEO >95
- [ ] Cross-browser: Chrome, Firefox, Safari (desktop + mobile)
- [ ] Viewport testing: 375px, 768px, 1440px, 1920px
- [ ] Verify all placeholder links replaced or clearly marked
- [ ] Check all external links have `rel="noopener noreferrer"`
- [ ] Validate HTML, CSS, TypeScript (astro check)
- [ ] Generate sitemap.xml, robots.txt
- [ ] Add Open Graph / Twitter cards per page

### Phase 7: Deployment & Handoff (Week 4)
- [ ] Configure GitHub Pages / Cloudflare Pages build
- [ ] Set up custom domain (if available)
- [ ] Document asset replacement workflow in README
- [ ] Document content update process (projects.ts, links.ts)
- [ ] Create deployment checklist

---

## 6. Out-of-the-Box Differentiators

### 6.1 Technical Inspection Mode (Easter Egg / Power User Feature)
- `?inspect=1` URL param activates wireframe overlay on all media frames
- Shows triangle counts, draw calls, shader variants on hover
- Keyboard shortcut: `Shift + I` toggles inspection HUD
- **Why**: Signals technical depth to reviewers who know to look

### 6.2 Role-Specific Portfolio Routes (Focus Variants)
```
/focus/technical-visualization   → Leads with TwinSight, metrics, pipeline
/focus/unity-webgl               → Leads with TwinSight WebGL, optimization
/focus/technical-art             → Leads with Human pipeline, visual modes
/focus/3d-pipeline               → Leads with CAD-to-realtime, Blender workflow
```
- Same evidence, different hierarchy per application
- Persisted in `localStorage`, reflected in nav highlight

### 6.3 Honest Metrics Presentation
- Every metric card shows verification status badge
- "Verify" status = pending thesis defense / final report
- "Placeholder" status = structural slot, no data yet
- No vanity metrics (page views, GitHub stars)

### 6.4 Asset Provenance Panel
- Each case study media frame shows source metadata on hover:
  - "Unity Editor capture — 1920×1080 — URP — 60fps"
  - "Blender 4.2 — Cycles — 256 samples — ACES 1.2"
  - "WebGL build — Chrome 128 — Mac M2 — 14ms/frame"

### 6.5 "Not This" Declarations (Prominent)
Each case study has a dedicated **Limitations** section with explicit negations:
- ❌ Not a production digital twin
- ❌ No live IoT / sensor data
- ❌ No WebAR / VR support (desktop browser only)
- ❌ Thermal mode is qualitative visualization only
- ❌ Assets used under educational/portfolio fair use

---

## 7. Content Checklist (From Benchmark)

### TwinSight Required Visuals
- [ ] Hero drone viewer shot (1920w WebP)
- [ ] 60-120s demo video (WebM, <10MB)
- [ ] Component selection screenshot
- [ ] Exploded view screenshot
- [ ] Cross-section/clipping screenshot
- [ ] Visual modes grid (7 modes)
- [ ] CAD-to-realtime before/after comparison
- [ ] Optimization metrics table
- [ ] Technical UI screenshot
- [ ] Evaluation summary (SUS/NASA-TLX table)
- [ ] Mobile/WebGL viewport proof
- [ ] Architecture/pipeline diagram (SVG)

### Human Pipeline Required Visuals
- [ ] Final render (portrait)
- [ ] Topology wireframe overlay
- [ ] UV layout
- [ ] Material/lighting breakdown
- [ ] Grooming close-up
- [ ] Progression sequence (4-6 frames)

### ARA Framework Required Visuals
- [ ] Architecture diagram (SVG)
- [ ] Workflow screenshot
- [ ] Sample output/report screenshot
- [ ] README/terminal screenshot

---

## 8. Risk Assessment & Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| TwinSight WebGL demo not deployable in time | Medium | High | Prioritize demo video; use "Prototype - Demo Video Available" badge; deploy WebGL later |
| Final thesis metrics not verified | High | Medium | Ship with "Verify" badges; update post-defense; never ship unverified as "Safe" |
| Asset creation bottleneck (screenshots, video) | High | High | Build placeholder system first; parallelize capture; use Unity Recorder for video |
| Mobile WebGL interaction broken | Medium | Medium | Design mobile-first interaction spec; test early; fallback to video on mobile |
| Scope creep (adding blog, more projects) | Medium | Low | Freeze MVP scope per `20_portfolio_copy_and_site_structure.md` §21 |
| Design system inconsistency across pages | Low | Medium | Component library approach; design token single source; visual regression tests |

---

## 9. Success Criteria (MVP Acceptance)

Per `20_portfolio_copy_and_site_structure.md` §21:

- [ ] Homepage clearly states role in first 5 seconds
- [ ] TwinSight appears first in hero and Work page
- [ ] TwinSight case study is readable and complete (15 sections)
- [ ] At least 6 TwinSight screenshots/media exist
- [ ] GitHub and LinkedIn links work
- [ ] Contact email works (Formspree/mailto)
- [ ] No false claims (digital twin, IoT, WebAR, enterprise deployment)
- [ ] No outdated thesis status ("pending defense" only)
- [ ] Mobile layout acceptable (no horizontal scroll, touch targets 44px)
- [ ] Page loads reasonably fast (LCP < 2.5s on 3G)
- [ ] CV link works if included

---

## 10. Open Decisions (Requiring User Input)

1. **Deployment target**: GitHub Pages vs Cloudflare Pages vs Netlify vs Vercel?
2. **Custom domain**: Available? (e.g., `alexanderwoodcock.dev`, `alexwoodcock.dev`)
3. **Contact form**: Formspree, Netlify Forms, or simple mailto with prefilled subject?
4. **Analytics**: Plausible, Umami, or none (privacy-first)?
5. **WebGL prototype hosting**: GitHub Pages subpath, itch.io, or separate domain?
6. **Bilingual (EN/ES)**: MVP English only, or prepare i18n structure now?
7. **Demo video**: Record from Unity Editor + WebGL build, or hire editor?
8. **Asset capture**: Who captures screenshots/video — you or assistant?

---

## 11. Next Immediate Actions

1. **Confirm deployment target & domain** → enables build config
2. **Capture TwinSight demo video** (60-120s) → blocks hero media
3. **Export 8 TwinSight screenshots** → blocks case study visual completion
4. **Finalize links.ts** with real URLs or explicit placeholders
5. **Decide on contact form provider** → implement Contact page

---

## Appendix: Design Token Reference (For Implementation)

```typescript
// src/data/designTokens.ts
export const designTokens = {
  colors: { /* ... from §2.2 */ },
  typography: { /* ... from §2.3 */ },
  spacing: { /* ... from §2.4 */ },
  borderRadius: { /* ... */ },
  shadows: { /* ... */ },
  transitions: { /* ... */ },
  zIndex: {
    header: 80,
    modal: 120,
    mediaViewer: 132,
    toast: 140,
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;
```

---

*Plan generated from benchmark analysis (29_portfolio_case_study_benchmark.md), portfolio structure (20_portfolio_copy_and_site_structure.md), and current codebase audit. Ready for implementation upon open decision resolution.*