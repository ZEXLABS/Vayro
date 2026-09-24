# VAYRO — Premium Mobility, Rentals & Executive Transport

> **Move With Confidence.**  
> *Mobility. Access. Protection.*

VAYRO is a modern, high-end demo website and prototype for a premium mobility, vehicle rental, long-term leasing, executive transportation, maritime yacht charter, and security mobility company.

The platform bridges executive ground transportation, corporate delegation logistics, private maritime charters, and tactical security convoy coordination.

---

## Brand Positioning & Design Philosophy

VAYRO is designed with an aesthetic of **quiet luxury, modern mobility, and executive professionalism**.

* **Palette**:
  * Deep Black (`#0B0F14`) — Primary canvas
  * Dark Secondary (`#151A21`) — Elevation and structural cards
  * Neutral (`#F3F4F6`) — Body typography and clear readable contrast
  * Premium Gold (`#C9A227`) — Reserved strictly for accents, active states, and primary CTAs
* **Typography**:
  * Display: **Syne** — Architectural, high-character headings
  * Body: **Plus Jakarta Sans** — Refined, high-legibility geometric sans
* **Anti-Slop Discipline**:
  * No generic pill badge sandwiches or arbitrary percentage counters
  * Unboxed text metadata with subtle typographic separators (`·`)
  * Tabular figures (`tabular-nums`) for currency pricing and booking references
  * Strict top navigation bar contract (Brand wordmark — 4–6 nav links — Primary action)

---

## Core Capabilities & Features

### 1. Dynamic Quick Search & Dispatch Engine
Interactive module adapting to four mobility service modes:
* **Rent a Vehicle**: Filter by city (Lagos, Abuja, Port Harcourt), category, and travel dates.
* **Lease a Vehicle**: Select term periods (3 to 24+ months), fleet structures, and vehicle types.
* **Book Executive Transport**: Airport meet-and-greets, corporate summits, and passenger counts.
* **Request Security Mobility**: Convoy configurations, deployment durations, and operational territories.

### 2. Available Now (Featured Fleet)
Curated vehicle cards with realistic specifications, passenger capacities, transmissions, drivetrains, and verified availability flags:
* **Mercedes-Benz S-Class** (Executive Sedan · Lagos)
* **Toyota Land Cruiser 300** (Luxury SUV · Abuja)
* **Mercedes-Benz V-Class** (Executive Van · Lagos)
* **Range Rover Autobiography** (Luxury SUV · Lagos)
* **BMW 7-Series 740i** (Executive Sedan · Abuja)
* **Lexus LX 600 VIP** (Luxury SUV · Currently Unavailable status display)

### 3. Security Mobility & Convoy Builder
* **Protection Starts With Movement**: Realistic mobility support for secure movements without unsupported or exaggerated military claims.
* **Convoy Flow Visualization**: `Lead Vehicle → Executive Vehicle → Support Vehicle`.
* **Interactive Convoy Builder**: Configures 2 to 5+ vehicle formations, principal vehicle selection, chase vehicles, and issuance of reference numbers (e.g., `VYR-20481`).

### 4. Marine Charters ("Beyond the Road")
* Private yacht experiences on Lagos waterways with licensed Master Captain, deck crew, and safety certifications included (*Azura 68 Flybridge*, *Oceana 54 Sport Cruiser*).

### 5. Group & Delegation Transportation ("Move More People")
* Full-sized 49-seat touring coaches (*Mercedes-Benz Tourismo*), 32-seat luxury conference coaches, and 15-seat executive *Sprinter* VIP vans.

### 6. Corporate Fleet Leasing & Enterprise Accounts
* Structured **Short-Term Leases** (1–6 months), **Long-Term Leases** (12–24 months), and **Corporate Fleets** with comprehensive maintenance management and rapid replacement guarantees.
* B2B transport solutions for international summits, C-suite travel, and diplomatic delegations.

### 7. Interactive Modal & Shortlist System
* **Vehicle Inspection Modal**: Comprehensive gallery, drivetrain specs, luggage capacities, and service modalities.
* **Shortlist Drawer**: Bookmark vehicles for comparison and one-click dispatch requests.
* **Request Credentials**: Instant simulated reference generation (`VYR-XXXXX`) with one-click copy-to-clipboard.

---

## Project Structure

```text
├── index.html                   # Entry HTML with SEO metadata, OG tags & Google Fonts
├── metadata.json                # Project identity and capabilities configuration
├── package.json                 # Project dependencies and script definitions
├── vite.config.ts               # Vite configuration with Tailwind CSS v4 integration
├── tsconfig.json                # TypeScript compiler configuration
├── src/
│   ├── main.tsx                 # React DOM mount point
│   ├── App.tsx                  # Core state, modal management, and layout orchestration
│   ├── index.css                # Tailwind CSS imports, typography layers & custom scrollbars
│   ├── types/
│   │   └── index.ts             # TypeScript definitions (Vehicle, ServiceType, Requests)
│   ├── data/
│   │   └── mockData.ts          # Realistic vehicle data, pricing, specs & image assets
│   ├── assets/
│   │   └── images/              # High-resolution automotive, yacht, bus & convoy photography
│   └── components/
│       ├── Navbar.tsx           # Sticky top navigation with shortlist badge and mobile menu
│       ├── Hero.tsx             # Cinematic hero section with value proposition
│       ├── QuickSearch.tsx      # Dynamic multi-mode dispatch and search module
│       ├── ServiceCategories.tsx# Asymmetric bento grid for the 4 core services
│       ├── FleetSection.tsx     # Filterable vehicle cards with shortlist toggles
│       ├── VehicleDetailModal.tsx # Full-spec vehicle inspection modal
│       ├── SecurityMobilitySection.tsx # Tactical convoy architecture & configurations
│       ├── ConvoyBuilderModal.tsx   # Interactive convoy formation builder modal
│       ├── YachtSection.tsx     # Maritime yacht charter cards
│       ├── BusSection.tsx       # Executive buses & group transportation
│       ├── HowItWorks.tsx       # 3-step workflow (Choose · Request · Move)
│       ├── WhyVayro.tsx         # The 4 core value pillars
│       ├── LeasingSection.tsx   # Short-term, long-term, and corporate fleet leasing
│       ├── CorporateSection.tsx # Enterprise and diplomatic mobility matrix
│       ├── TestimonialsSection.tsx # Fictional sample feedback for demo context
│       ├── BookingModal.tsx     # Multi-service request modal with reference issuance
│       ├── SavedVehiclesDrawer.tsx # Shortlist drawer for bookmarked vehicles
│       └── Footer.tsx           # Pre-footer CTA banner and navigation directory
```

---

## Getting Started

### Prerequisites
* **Node.js**: v18+ or v20+ recommended
* **npm** or **bun**

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run local development server
npm run dev
```

The application runs on `http://localhost:3000`.

### Production Build

```bash
# Typecheck and compile production bundle
npm run build
```

### Code Quality & Validation

```bash
# Run TypeScript compilation check
npm run lint
```

---

## License

Copyright © 2026 VAYRO. All rights reserved.
