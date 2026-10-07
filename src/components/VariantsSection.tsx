import React from 'react'
import { Check, Clock, ArrowRight, Zap, Moon, Sparkles } from 'lucide-react'

interface VariantsSectionProps {
  onOpenWaitlist: () => void
}

export const VariantsSection: React.FC<VariantsSectionProps> = ({ onOpenWaitlist }) => {
  return (
    <section id="variants" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.08] bg-[#09090C]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/80 tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>MODULAR FORMULATION PLATFORM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            CAFFEINE. <br />
            AND CAFFEINE-FREE.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60 font-normal leading-relaxed">
            A unified oral-strip delivery architecture built for every hour of your day.
          </p>
        </div>

        {/* Hero Duo Imagery Spotlight */}
        <div className="mb-12 rounded-3xl sm:rounded-[2.5rem] p-2.5 sm:p-3 bg-[#121218] border border-white/10 shadow-2xl">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/9] max-h-[480px] w-full bg-[#070709] border border-white/8">
            <img
              src="/assets/AVRO Caffeine Strips Duo.png"
              alt="AVRO Caffeine and AVRO Caffeine-Free Packs"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#FF5722] uppercase font-bold">
                  SIDE-BY-SIDE ARCHITECTURE · DEMO PROTOTYPE
                </span>
                <p className="text-lg sm:text-xl font-bold text-white mt-1">
                  Same pocket-sized format. Tailored for your daily rhythm.
                </p>
                <p className="text-xs font-mono text-white/50 mt-1">
                  * Note: Visual packaging prototypes shown are for demonstration and not final production artwork.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-black/80 border border-white/15 backdrop-blur-md text-xs font-mono text-white/80">
                  MATTE BLACK / CHALK WHITE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Jeton-Style Split Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT: AVRO CAFFEINE */}
          <div className="rounded-3xl p-6 sm:p-10 bg-[#121218] border border-[#FF5722]/40 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF5722]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-[#FF5722]/15 text-[#FF5722] text-[10px] font-mono font-bold tracking-widest uppercase border border-[#FF5722]/30">
                  AVAILABLE AT LAUNCH · BATCH 01
                </span>
                <Zap className="w-5 h-5 text-[#FF5722]" />
              </div>

              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                AVRO / CAFFEINE
              </h3>
              <p className="text-xs font-bold tracking-wider text-[#FF5722] mt-1 uppercase">
                "WHEN YOU WANT CAFFEINE."
              </p>

              <p className="text-sm text-white/60 mt-4 leading-relaxed font-normal">
                Engineered for daytime intensity, morning commutes, exams, coding sprints, and demanding deadlines. Delivers fast-acting functional caffeine in a water-free strip.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <span className="w-5 h-5 rounded-full bg-[#FF5722]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#FF5722]" />
                  </span>
                  <span><strong>50mg Micro-Encapsulated Caffeine:</strong> Clean active release</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <span className="w-5 h-5 rounded-full bg-[#FF5722]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#FF5722]" />
                  </span>
                  <span><strong>L-Theanine Synergy:</strong> Smooth alertness without jitter spikes</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <span className="w-5 h-5 rounded-full bg-[#FF5722]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#FF5722]" />
                  </span>
                  <span><strong>100% Water-Free:</strong> Sublingual mucosal delivery in &lt; 30 seconds</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/8">
              <button
                onClick={onOpenWaitlist}
                className="w-full py-3.5 rounded-full bg-[#FF5722] hover:bg-white text-white hover:text-black font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#FF5722]/20"
              >
                <span>Reserve Caffeine Strips</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT: AVRO CAFFEINE-FREE */}
          <div className="rounded-3xl p-6 sm:p-10 bg-[#121218] border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-white/10 text-white/80 text-[10px] font-mono font-bold tracking-widest uppercase border border-white/15">
                  PLANNED VARIANT · IN FORMULATION
                </span>
                <Moon className="w-5 h-5 text-white/60" />
              </div>

              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                AVRO / CAFFEINE-FREE
              </h3>
              <p className="text-xs font-bold tracking-wider text-white/50 mt-1 uppercase">
                "WHEN YOU DON’T."
              </p>

              <p className="text-sm text-white/60 mt-4 leading-relaxed font-normal">
                Designed for late-night coding, evening reading, post-dinner focus, and stimulant-sensitive users. Delivers calm mental clarity with zero caffeine or sleep disruption.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white/80" />
                  </span>
                  <span><strong>100% Stimulant-Free:</strong> Zero caffeine, zero heart rate elevation</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white/80" />
                  </span>
                  <span><strong>L-Theanine & Herbal Adaptogens:</strong> Cognitive flow and mental calm</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white/80" />
                  </span>
                  <span><strong>Evening Friendly:</strong> Dissolves before bed without delaying REM sleep</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/8">
              <button
                onClick={onOpenWaitlist}
                className="w-full py-3.5 rounded-full bg-white/[0.06] hover:bg-white text-white hover:text-black font-bold text-xs uppercase tracking-widest transition-all duration-300 border border-white/15 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Notify On Availability</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
