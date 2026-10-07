import React from 'react'
import { Users, FileText, CheckCircle, BarChart3, GraduationCap, Zap, Award, Globe, ShieldCheck, Check } from 'lucide-react'

export const ValidationSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.08] bg-[#09090C]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/80 tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>PHARMACEUTICAL PURITY & STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            FORMULATION STANDARDS.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60 font-normal leading-relaxed">
            Formulated with patented ThinSol™ oral delivery technology—delivering cleanroom precision, pharmaceutical-grade purity, and rapid sublingual uptake.
          </p>
        </div>

        {/* 4 High-Impact Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {/* Stat 1: Sub-30s Melt */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#121218] border border-white/10 shadow-xl">
            <Zap className="w-5 h-5 text-[#FF5722] mb-3" />
            <div className="text-3xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
              &lt; 30s
            </div>
            <h4 className="text-sm font-bold text-white mt-1">Rapid Melt Velocity</h4>
            <p className="text-xs text-white/50 mt-1 leading-relaxed">
              Instant sublingual oral dissolution without a single drop of water.
            </p>
          </div>

          {/* Stat 2: 0g Sugar */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#121218] border border-white/10 shadow-xl">
            <Award className="w-5 h-5 text-[#FF5722] mb-3" />
            <div className="text-3xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
              0g
            </div>
            <h4 className="text-sm font-bold text-white mt-1">Sugar & Fillers</h4>
            <p className="text-xs text-white/50 mt-1 leading-relaxed">
              100% plant-based dissolving polymers, 0 calories, zero sugar crash.
            </p>
          </div>

          {/* Stat 3: 40+ Countries */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#121218] border border-white/10 shadow-xl">
            <Globe className="w-5 h-5 text-[#FF5722] mb-3" />
            <div className="text-3xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
              40+
            </div>
            <h4 className="text-sm font-bold text-white mt-1">Global Markets</h4>
            <p className="text-xs text-white/50 mt-1 leading-relaxed">
              Regulatory compliance across North America, Europe, and Asia.
            </p>
          </div>

          {/* Stat 4: 4 Granted Patents */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#121218] border border-[#FF5722]/30 shadow-xl">
            <ShieldCheck className="w-5 h-5 text-[#FF5722] mb-3" />
            <div className="text-3xl sm:text-5xl font-extrabold font-mono text-[#FF5722] tracking-tight">
              4
            </div>
            <h4 className="text-sm font-bold text-white mt-1">Granted Patents</h4>
            <p className="text-xs text-white/50 mt-1 leading-relaxed">
              ThinSol™ proprietary mucosal delivery and bitter-masking science.
            </p>
          </div>
        </div>

        {/* Detailed Verification Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left: Pharmaceutical Quality Standard */}
          <div className="rounded-3xl p-6 sm:p-10 bg-[#121218] border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono tracking-widest text-[#FF5722] font-bold uppercase">
                  PHARMACEUTICAL CLEANROOM STANDARDS
                </span>
                <ShieldCheck className="w-5 h-5 text-[#FF5722]" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                ThinSol™ Patented Technology
              </h3>

              <p className="mt-3 text-sm text-white/60 leading-relaxed font-normal">
                Formulated under certified pharmaceutical cleanroom protocols. Powered by 4 granted patents, proprietary micro-encapsulation, and clinical-grade quality controls.
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#FF5722]" />
                  <span>Certified automated cleanroom formulation</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#FF5722]" />
                  <span>WHO-GMP & FSSAI dietary safety benchmarks</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#FF5722]" />
                  <span>Complete analytical batch testing & micro-stability</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/8 flex items-center justify-between text-xs font-mono text-white/40">
              <span>WHO-GMP Cleanroom Grade</span>
              <span>Global Purity Standards</span>
            </div>
          </div>

          {/* Right: Consumer Behavior & Student Research */}
          <div className="rounded-3xl p-6 sm:p-10 bg-[#121218] border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono tracking-widest text-[#FF5722] font-bold uppercase">
                  INDIAN MARKET STUDY
                </span>
                <GraduationCap className="w-5 h-5 text-[#FF5722]" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                92%+ Student Daily Habit
              </h3>

              <p className="mt-3 text-sm text-white/60 leading-relaxed font-normal">
                Published Indian academic research confirms over 92% of medical and engineering students rely on daily caffeine for alertness, exam prep, and late-night coding—yet struggle with stomach acid, spilled cups, and caffeine crashes.
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#FF5722]" />
                  <span>Eliminates late-night hot beverage brewing in dorms</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#FF5722]" />
                  <span>Permitted in exam halls where drinks & food are banned</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#FF5722]" />
                  <span>Zero sugar, zero dental stains, zero mid-afternoon crash</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/8 flex items-center justify-between text-xs font-mono text-white/40">
              <span>Academic Reference Study</span>
              <span>High Indian Adoption Potential</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
