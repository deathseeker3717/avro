import React from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { ThreeWebGPUScene } from './ThreeWebGPUScene'
import { FLAVORS, FlavorData } from '../constants/flavors'

interface HeroProps {
  onOpenWaitlist: () => void
  activeFlavor?: FlavorData
  onSelectFlavor?: (flavor: FlavorData) => void
}

export const Hero: React.FC<HeroProps> = ({
  onOpenWaitlist,
  activeFlavor = FLAVORS[0],
  onSelectFlavor
}) => {
  const scrollToExplore = () => {
    const el = document.getElementById('unify-focus') || document.getElementById('packaging-architecture')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleFlavorClick = (flavor: FlavorData) => {
    if (onSelectFlavor) {
      onSelectFlavor(flavor)
    }
  }

  return (
    <section
      className="relative min-h-[100dvh] w-full text-white flex flex-col justify-between overflow-hidden pt-24 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-14 selection:bg-white selection:text-black transition-colors duration-700 ease-out"
      style={{ backgroundColor: activeFlavor.bgHero }}
    >
      {/* Real-Time Interactive Three.js WebGPU + TSL 3D Stage with Real Packaging Textures & Floating Strip */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <ThreeWebGPUScene
          activeFlavor={activeFlavor}
          activeFlavorColor={activeFlavor.color}
          activeFlavorName={activeFlavor.name}
        />
      </div>

      {/* Subtle Warm Gradient Overlay (Ensures pristine text contrast) */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-85" />
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-r from-black/35 via-transparent to-black/20" />

      {/* Top Floating Technical Ribbon */}
      <div className="relative z-10 w-full flex items-center justify-between gap-4 pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono tracking-wider text-white">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>BATCH 01 ALLOCATION</span>
          <span className="text-white/40">|</span>
          <span className="text-white/80">DEMO PROTOTYPE · NOT FINAL DESIGN</span>
        </div>

        {/* Dynamic 3D Flavor Material Switcher */}
        <div className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 shadow-lg">
          {FLAVORS.map((f) => {
            const isSelected = activeFlavor.id === f.id
            return (
              <button
                key={f.id}
                onClick={() => handleFlavorClick(f)}
                className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-black font-bold shadow-md scale-102'
                    : 'text-white/80 hover:text-white hover:bg-white/15'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full transition-transform"
                  style={{
                    backgroundColor: f.color,
                    boxShadow: isSelected ? `0 0 8px ${f.color}` : 'none'
                  }}
                />
                <span>{f.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Middle Spacer to let the 3D WebGPU object shine */}
      <div className="relative z-10 flex-1 min-h-[260px] sm:min-h-[340px] pointer-events-none" />

      {/* Bottom Editorial Lockup (Signature Jeton Split Composition) */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-4 sm:pb-8">
        {/* Left Column: Massive Jeton-Grade Headline */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-black tracking-[-0.04em] text-white leading-[0.92] select-none">
            One strip <br />
            for all focus.
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {/* Scroll Indicator Pill */}
            <button
              onClick={scrollToExplore}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-xs font-mono text-white transition-all cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" />
              <span>• Scroll to explore</span>
            </button>

            <span className="text-xs font-mono text-white/60">
              * Concept Demo · 3D visual and packaging models are for demonstration and not final production.
            </span>
          </div>
        </div>

        {/* Right Column: Clean Supporting Copy & Conversion Action */}
        <div className="lg:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-right">
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium leading-snug max-w-md">
            Single sachet for your entire day. Instant sublingual absorption with zero liquids, zero chewing, and zero crash.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenWaitlist}
              className="px-6 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 shadow-xl shadow-black/20 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Reserve 30-Strip Pack</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#packaging-architecture"
              className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-medium text-xs tracking-wider uppercase transition-all"
            >
              Packaging Specs
            </a>
          </div>

          {/* Quick Technical Micro-Badges */}
          <div className="mt-4 flex items-center gap-3 text-[11px] font-mono text-white/75">
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-white" /> 0 mL Water
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-white" /> Sealed Single Sachet
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-white" /> Cleanroom Certified
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
