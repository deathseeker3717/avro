import React from 'react'
import { ArrowUpRight, Zap, ShieldCheck, Droplets, Sparkles, Clock, CheckCircle2 } from 'lucide-react'
import { FlavorData } from '../constants/flavors'

interface UnifyFocusSectionProps {
  activeFlavor?: FlavorData
}

export const UnifyFocusSection: React.FC<UnifyFocusSectionProps> = ({ activeFlavor }) => {
  const accentColor = activeFlavor?.color || '#F73B20'

  return (
    <section id="unify-focus" className="relative py-28 sm:py-36 bg-[#F8F9FA] text-[#111116] overflow-hidden">
      {/* Colossal Muted Background Typography (Signature Büro/Jeton Editorial Element) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none text-center">
        <span
          className="text-[12vw] sm:text-[14vw] font-black tracking-[-0.05em] leading-none whitespace-nowrap block transition-colors duration-700"
          style={{ color: `${accentColor}14` }}
        >
          Unify your focus
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-black/[0.08]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-[11px] font-mono tracking-widest uppercase text-black/70 mb-4">
              <span
                className="w-2 h-2 rounded-full transition-colors duration-500"
                style={{ backgroundColor: accentColor }}
              />
              THINSOL™ PHARMA-GRADE BIO-AVAILABILITY
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111116] leading-[1.05]">
              Everything you need for clean focus, minus the liquid baggage.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-black/60 max-w-md font-normal leading-relaxed">
            Formulated with patented ThinSol™ oral technology under pharmaceutical cleanroom standards to replace sugary drinks, synthetic energy shots, and hard-to-swallow pills.
          </p>
        </div>

        {/* 3 Jeton-Style Dynamic Floating Cards with Vibrant Pill Accents */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Emerald Pill Accent */}
          <div className="group relative p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.06] shadow-xl shadow-black/[0.03] hover:shadow-2xl hover:border-black/15 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Vibrant Emerald Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#34C771]/10 text-[#1BA854] text-xs font-mono font-bold tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-[#34C771]" />
                &lt; 30S SUBLINGUAL MELT
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111116] leading-tight">
                Direct Mucosal Permeation
              </h3>

              <p className="mt-4 text-sm sm:text-base text-black/65 leading-relaxed">
                Hydrophilic pullulan matrix hydrates in oral saliva within seconds. Active compounds transfer straight across vascularized sublingual capillaries into venous blood.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-black/50">ROUTE: SUBLINGUAL</span>
              <span className="text-xs font-mono font-bold text-[#1BA854]">0 mL Water</span>
            </div>
          </div>

          {/* Card 2: Cobalt Blue Pill Accent */}
          <div className="group relative p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.06] shadow-xl shadow-black/[0.03] hover:shadow-2xl hover:border-black/15 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Vibrant Cobalt Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#477EE9]/10 text-[#3068DB] text-xs font-mono font-bold tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-[#477EE9]" />
                ZERO FIRST-PASS DEGRADATION
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111116] leading-tight">
                Bypasses Liver Filtering
              </h3>

              <p className="mt-4 text-sm sm:text-base text-black/65 leading-relaxed">
                Swallowed pills lose up to 50% potency to liver hepatic enzymes. AVRO delivers clean bio-active caffeine and L-theanine directly to the brain without stomach acidity.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-black/50">GASTRIC ACIDITY: 0%</span>
              <span className="text-xs font-mono font-bold text-[#3068DB]">pH-Neutral</span>
            </div>
          </div>

          {/* Card 3: Punchy Coral/Pink Pill Accent */}
          <div className="group relative p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.06] shadow-xl shadow-black/[0.03] hover:shadow-2xl hover:border-black/15 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Vibrant Coral Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FB2D54]/10 text-[#E0173F] text-xs font-mono font-bold tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FB2D54]" />
                INDIVIDUALLY SEALED SACHET
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111116] leading-tight">
                Hermetic Pocket Portability
              </h3>

              <p className="mt-4 text-sm sm:text-base text-black/65 leading-relaxed">
                Individually sealed in triple-laminate barrier foil with a precision corner tear notch. Completely immune to moisture, sweat, or UV degradation. Slips into any pocket.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-black/50">PACKAGE: POCKET PACK</span>
              <span className="text-xs font-mono font-bold text-[#E0173F]">30 Strips</span>
            </div>
          </div>
        </div>

        {/* Technical Metric Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-black/[0.06] shadow-sm flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F73B20]/10 flex items-center justify-center text-[#F73B20] font-bold">
              ✓
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-black/50">RAPID BIO-DISSOLUTION</p>
              <p className="text-lg font-bold text-black">Melt In Under 30 Seconds</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#34C771]/10 flex items-center justify-center text-[#34C771] font-bold">
              ✓
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-black/50">CLEANROOM GRADE PURITY</p>
              <p className="text-lg font-bold text-black">WHO-GMP & FSSAI Standard</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#477EE9]/10 flex items-center justify-center text-[#477EE9] font-bold">
              ✓
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-black/50">PATENTED TECHNOLOGY</p>
              <p className="text-lg font-bold text-black">4 Global ThinSol™ Patents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
