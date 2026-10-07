import React from 'react'
import { Coffee, Flame, CheckCircle, XCircle, ArrowRight, Zap, Check } from 'lucide-react'

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#09090C] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/80 tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
            <span>THE EVERYDAY FRICTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight uppercase">
            YOUR ROUTINE SHOULDN'T <br className="hidden sm:inline" />
            INTERRUPT YOUR FLOW.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed font-normal">
            Coffee and energy drinks are familiar caffeine options, but they break your concentration when you're studying, working, travelling or moving between places.
          </p>
        </div>

        {/* 3-Column Editorial Problem / Solution Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Traditional Coffee */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#121218] border border-white/10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono tracking-widest text-white/40 uppercase">
                  FORMAT 01
                </span>
                <Coffee className="w-5 h-5 text-white/40" />
              </div>
              <h3 className="text-xl font-bold text-white/90">Brewed Coffee</h3>
              <p className="text-xs text-white/40 mt-1">High friction preparation</p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5" />
                  <div>
                    <p className="text-xs font-semibold text-white/80">Preparation Required</p>
                    <p className="text-[11px] text-white/50">Waiting in cafe lines or dealing with coffee machine prep</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5" />
                  <div>
                    <p className="text-xs font-semibold text-white/80">Fragile Paper Cup</p>
                    <p className="text-[11px] text-white/50">Spill hazard near laptops, books, and desk equipment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5" />
                  <div>
                    <p className="text-xs font-semibold text-white/80">Liquid Bulk</p>
                    <p className="text-[11px] text-white/50">350ml fluid volume causing frequent restroom breaks</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/8 text-[11px] text-white/40 font-mono">
              STATUS: INCONVENIENT ON THE MOVE
            </div>
          </div>

          {/* Card 2: Canned Energy Drinks */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#121218] border border-white/10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono tracking-widest text-white/40 uppercase">
                  FORMAT 02
                </span>
                <Flame className="w-5 h-5 text-white/40" />
              </div>
              <h3 className="text-xl font-bold text-white/90">Energy Drinks</h3>
              <p className="text-xs text-white/40 mt-1">Bulky, non-resealable cans</p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5" />
                  <div>
                    <p className="text-xs font-semibold text-white/80">Heavy Aluminum Can</p>
                    <p className="text-[11px] text-white/50">Cannot fit in pockets; cumbersome during transit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5" />
                  <div>
                    <p className="text-xs font-semibold text-white/80">Sugar & Carbonation</p>
                    <p className="text-[11px] text-white/50">Insulin spike followed by harsh crash and stomach acidity</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5" />
                  <div>
                    <p className="text-xs font-semibold text-white/80">Must Finish Immediately</p>
                    <p className="text-[11px] text-white/50">Goes flat and warm once opened</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/8 text-[11px] text-white/40 font-mono">
              STATUS: BULKY & ACIDIC
            </div>
          </div>

          {/* Card 3: AVRO Oral Strips (The Winner) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#14141E] border border-[#FF5722]/50 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5722]/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-[#FF5722]/15 text-[#FF5722] text-[10px] font-mono font-bold tracking-widest uppercase border border-[#FF5722]/30">
                  THE AVRO SOLUTION
                </span>
                <Zap className="w-5 h-5 text-[#FF5722]" />
              </div>
              <h3 className="text-xl font-extrabold text-white">AVRO ThinSol™ Strips</h3>
              <p className="text-xs text-[#FF5722] mt-1 font-semibold">Zero water. Instant melt.</p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FF5722]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#FF5722]" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white">Zero Preparation</p>
                    <p className="text-[11px] text-white/60">Tear open the sealed freshness sachet and place on tongue in 2s</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FF5722]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#FF5722]" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white">Spill-Proof Pocket Architecture</p>
                    <p className="text-[11px] text-white/60">Crush-resistant pocket pack fits seamlessly in any pocket</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FF5722]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#FF5722]" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white">Sublingual Direct Absorption</p>
                    <p className="text-[11px] text-white/60">Bypasses gastric acid; 0 sugar, 0 calories, 0 bloat</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#FF5722]/20 text-[11px] text-[#FF5722] font-mono font-bold">
              STATUS: OPTIMAL EVERYDAY CARRY
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
