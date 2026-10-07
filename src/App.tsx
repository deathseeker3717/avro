import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsTicker } from './components/StatsTicker'
import { UnifyFocusSection } from './components/UnifyFocusSection'
import { StepperRitual } from './components/StepperRitual'
import { PackagingArchitecture } from './components/PackagingArchitecture'
import { FlavorLineup } from './components/FlavorLineup'
import { ProductBenefits } from './components/ProductBenefits'
import { VariantsSection } from './components/VariantsSection'
import { UseCasesSection } from './components/UseCasesSection'
import { ComparisonSection } from './components/ComparisonSection'
import { ValidationSection } from './components/ValidationSection'
import { BrandStory } from './components/BrandStory'
import { FAQSection } from './components/FAQSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'
import { WaitlistModal } from './components/WaitlistModal'
import { FLAVORS, FlavorData } from './constants/flavors'

export default function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)
  const [activeFlavor, setActiveFlavor] = useState<FlavorData>(FLAVORS[0])

  const handleOpenWaitlist = () => setWaitlistOpen(true)
  const handleCloseWaitlist = () => setWaitlistOpen(false)

  return (
    <div
      className="min-h-screen bg-[#08080C] text-[#F5F5F2] selection:bg-[#F73B20]/30 selection:text-[#F73B20] relative font-sans transition-colors duration-700 ease-out"
      style={{
        // Global flavor theme CSS variables
        ['--flavor-color' as any]: activeFlavor.color,
        ['--flavor-glow' as any]: activeFlavor.glowColor,
        ['--flavor-bg-hero' as any]: activeFlavor.bgHero,
        ['--flavor-bg-section' as any]: activeFlavor.bgSection,
      }}
    >
      {/* Floating Sticky Navigation */}
      <Navbar
        onOpenWaitlist={handleOpenWaitlist}
        activeFlavor={activeFlavor}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Full-Bleed Hero with Three.js WebGPU + Real 3D Product Packaging & Floating Strips */}
        <Hero
          onOpenWaitlist={handleOpenWaitlist}
          activeFlavor={activeFlavor}
          onSelectFlavor={setActiveFlavor}
        />

        {/* 2. Product Performance & Purity Ticker */}
        <StatsTicker activeFlavor={activeFlavor} />

        {/* 3. Jeton-Style "Unify your focus" Light Alabaster Section with Vibrant Pill Badges */}
        <UnifyFocusSection activeFlavor={activeFlavor} />

        {/* 4. Jeton-Style 5-Step Numbered Interactive Stepper */}
        <StepperRitual />

        {/* 5. 3-Layer Packaging Architecture */}
        <PackagingArchitecture />

        {/* 6. 5-Flavor Lineup Studio (Mint, Citrus, Blood Orange, Berry, Tropical) */}
        <FlavorLineup
          onOpenWaitlist={handleOpenWaitlist}
          activeFlavor={activeFlavor}
          onSelectFlavor={setActiveFlavor}
        />

        {/* 7. 5 Zeroes™ Architectural Benefits Grid */}
        <ProductBenefits />

        {/* 8. Modular Formulations: Caffeine vs Caffeine-Free Duo */}
        <VariantsSection onOpenWaitlist={handleOpenWaitlist} />

        {/* 9. Everyday Carry (EDC) Lifestyle Contexts */}
        <UseCasesSection />

        {/* 10. Direct Format Comparison: AVRO vs Drinks vs Bulky Pills */}
        <ComparisonSection />

        {/* 11. Clinical & Pharmaceutical Cleanroom Standards */}
        <ValidationSection />

        {/* 12. Brand Origin & Purpose */}
        <BrandStory />

        {/* 13. Numbered Technical FAQ */}
        <FAQSection />

        {/* 14. Conversion Finale */}
        <CTASection
          onOpenWaitlist={handleOpenWaitlist}
          activeFlavor={activeFlavor}
        />
      </main>

      {/* 15. Jeton-Style Massive Footer with Colossal Full-Width AVRO Wordmark */}
      <Footer onOpenWaitlist={handleOpenWaitlist} />

      {/* Interactive Reservation / Waitlist Modal */}
      <WaitlistModal isOpen={waitlistOpen} onClose={handleCloseWaitlist} />
    </div>
  )
}
