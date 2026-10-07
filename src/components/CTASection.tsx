import React from 'react'
import { ArrowUpRight, Sparkles, Check } from 'lucide-react'
import { FlavorData } from '../constants/flavors'

interface CTASectionProps {
  onOpenWaitlist: () => void
  activeFlavor?: FlavorData
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenWaitlist, activeFlavor }) => {
  const accentColor = activeFlavor?.color || '#FF5722'
  const glowColor = activeFlavor?.glowColor || 'rgba(255, 87, 34, 0.4)'

  return (
    <section className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/[0.08] bg-[#0A0A0E]">
      {/* Background Atmosphere - Flavor-Responsive Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] blur-[160px] pointer-events-none rounded-full transition-all duration-700 opacity-60"
        style={{
          background: `radial-gradient(circle, ${accentColor}40 0%, ${accentColor}10 50%, transparent 80%)`
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="rounded-3xl sm:rounded-[3rem] p-8 sm:p-16 bg-[#121218] border border-white/12 shadow-2xl text-center relative overflow-hidden">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6">
            <Sparkles className="w-3.5 h-3.5 transition-colors duration-500" style={{ color: accentColor }} />
            <span className="text-[11px] font-mono tracking-[0.2em] text-white/80 uppercase">
              REDEFINING EVERYDAY FOCUS
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] uppercase">
            KEEP YOUR FLOW. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
              NO BREAK REQUIRED.
            </span>
          </h2>

          {/* Supporting Line */}
          <p className="mt-6 text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-normal">
            Discover a more portable way to add function to your day. No cup. No bottle. No prep. Slides into your pocket, dissolves under your tongue.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={onOpenWaitlist}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full hover:bg-white text-black font-bold px-9 py-4 text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-2xl active:scale-98 cursor-pointer"
              style={{
                backgroundColor: accentColor,
                boxShadow: `0 12px 30px -4px ${glowColor}`
              }}
            >
              <span>Join The Priority Waitlist</span>
              <span className="w-6 h-6 rounded-full bg-black/15 group-hover:bg-black/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Value Micro-Points */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-white/50 font-mono">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 transition-colors duration-500" style={{ color: accentColor }} />
              <span>BATCH 01 PRODUCTION ALLOCATION</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 transition-colors duration-500" style={{ color: accentColor }} />
              <span>30 STRIPS PER POCKET BOX</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 transition-colors duration-500" style={{ color: accentColor }} />
              <span>FREE DISPATCH FOR EARLY ACCESS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
