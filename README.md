# AVRO — Next-Generation Oral Dissolvable Strips

<p align="center">
  <img src="public/assets/avro-logo.png" alt="AVRO Wordmark" width="220" />
</p>

<p align="center">
  <strong>Fast-acting transmucosal energy & nootropics. Zero sugar, zero liquid, zero crash.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Three.js-0.186-000000?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
</p>

---

## ⚡ Overview

**AVRO** is a direct-to-consumer digital showcase and waitlist experience for pharmaceutical-grade oral dissolvable strips (ODF). Designed to bypass the digestive lag of conventional beverages, pills, and gummies, AVRO strips dissolve on the sublingual mucosa within seconds—delivering precision-dosed caffeine, nootropics, and adaptogens directly into the bloodstream in under 5 minutes.

The web platform features an ultra-premium, interactive 3D product showcase powered by **Three.js**, reactive flavor-switching color engines, bespoke tactile typography, and smooth GSAP/Motion micro-interactions.

---

## ✨ Key Features & Experience

### 🧊 1. Interactive 3D Packaging Explorer
- **6-Face UV Box Mapping**: Accurate multi-texture renders of physical folding cartons (`front`, `back`, `sides`, `topbottom`) for every flavor SKU.
- **Physical Floating Strip**: Interactive sublingual strip rendered alongside the box with natural physics, specular sheen, and dynamic lighting.
- **WebGL / Three.js Scene**: Hardware-accelerated with reactive mouse-tracking parallax, gyroscope tilt support, and auto-rotation.

### 🎨 2. Reactive Flavor Theming Engine
- Global CSS variable switching dynamically shifts background glows, hero gradients, and accent lighting as the user browses flavors:
  - 🍊 **Blood Orange** (`#FF5722`) — Valencia citrus zest & 50mg micro-encapsulated caffeine.
  - 🌿 **Mint Breeze** (`#00E5C0`) — Arctic spearmint & 50mg caffeine + 25mg L-Theanine.
  - 🍋 **Yuzu Citrus** (`#FACC15`) — Amalfi lemon & 50mg fast-release caffeine + B-vitamins.
  - 🍇 **Wild Berry** (`#A855F7`) — Forest blackberries & antioxidant blend.
  - 🥭 **Tropical Mango** (`#FB923C`) — Sun-ripened Alphonso mango & electrolyte complex.

### 🧬 3. The 5 Zeroes™ Architecture
- **0 Sugar**: Pure bioactive delivery without spikes or insulin impact.
- **0 Calories**: Clean metabolic profile.
- **0 Liquid / Water**: Carry anywhere, consume instantly.
- **0 Fillers**: No gelatin, artificial binders, or bulking starches.
- **0 Crash**: Synergistic botanical and nootropic ratios to eliminate caffeine jitters.

### 🛠️ 4. Full AIDA Editorial Narrative
- **Full-Bleed 3D Hero**: First-touch immersive product presentation.
- **Purity & Performance Ticker**: Clinical metrics and certification ticker.
- **5-Step Numbered Stepper**: Step-by-step oral dissolvable ritual.
- **3-Layer Packaging Architecture**: Sachet barrier, cassette housing, outer folding carton.
- **Caffeine vs. Zen Variants**: Dual-track formulation breakdown.
- **EDC Lifestyle Matrix**: Contextual use cases (Deep Work, Transit, Gym, Night Drive).
- **Format Comparison Matrix**: Head-to-head breakdown vs. energy drinks & bulky capsules.
- **Waitlist & Reservation Flow**: Interactive modal complete with animated confetti feedback.

---

## 📂 Project Architecture

```
services/
├── public/
│   └── assets/
│       ├── 3d_images/           # Multi-sided textures for 3D packaging (front, back, sides, topbottom)
│       ├── avro-logo.png        # Brand wordmarks and symbols
│       └── ...                  # High-resolution product & lifestyle photography
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Floating sticky glass navigation
│   │   ├── Hero.tsx             # Hero section orchestration
│   │   ├── ThreeWebGPUScene.tsx # Three.js 3D box & strip rendering canvas
│   │   ├── StatsTicker.tsx      # Performance metrics ticker
│   │   ├── UnifyFocusSection.tsx# Light alabaster focus section with pill badges
│   │   ├── StepperRitual.tsx    # 5-step interactive usage ritual
│   │   ├── PackagingArchitecture.tsx # 3-layer protective engineering breakdown
│   │   ├── FlavorLineup.tsx     # 5-flavor interactive studio & selector
│   │   ├── ProductBenefits.tsx  # 5 Zeroes™ architectural grid
│   │   ├── VariantsSection.tsx  # Energy vs Caffeine-Free comparison
│   │   ├── UseCasesSection.tsx  # Everyday Carry (EDC) scenarios
│   │   ├── ComparisonSection.tsx# AVRO vs Drinks vs Pills comparative table
│   │   ├── ValidationSection.tsx# cGMP & pharmaceutical cleanroom validation
│   │   ├── BrandStory.tsx       # Origin and brand philosophy
│   │   ├── FAQSection.tsx       # Technical & consumer FAQ accordion
│   │   ├── CTASection.tsx       # High-conversion pre-order callout
│   │   ├── WaitlistModal.tsx    # Confetti-enabled reservation modal
│   │   └── Footer.tsx           # Full-bleed architectural wordmark footer
│   ├── constants/
│   │   └── flavors.ts           # Flavor color palettes, notes, and formulation metadata
│   ├── App.tsx                  # Root application & global theme orchestrator
│   ├── main.tsx                 # React DOM root entry
│   └── index.css                # Tailwind CSS v4 setup & custom utilities
├── scripts/                     # Texture analysis and rendering helpers
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/deathseeker3717/avro.git
   cd avro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local Vite dev server with hot module reloading:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

Create an optimized static build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Component framework and UI state management |
| **TypeScript** | Strict typing for formulations, components, and props |
| **Vite 8** | Next-generation frontend build tooling and lightning-fast HMR |
| **Three.js** | 3D Canvas, physical materials, UV mapped product cartons & strip |
| **Tailwind CSS v4** | Modern utility-first styling and dynamic CSS variable theming |
| **GSAP & Motion** | Scroll triggers, tactile entrance animations, and micro-interactions |
| **Canvas Confetti** | Dynamic celebratory feedback on waitlist registration |
| **Lucide React** | Clean, minimalist icon system |

---

## 📄 License

Proprietary © AVRO. All rights reserved.
