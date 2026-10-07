import React from 'react'
import { Sparkles, CheckCircle2, Zap, Clock, Droplets, Ban, Check } from 'lucide-react'

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'OPEN',
      action: 'Extract from Pocket Box.',
      description:
        'Flip open the pocket box lid and slide out an individual sealed freshness foil sachet. Tear effortlessly at the corner pull notch.',
      tip: 'Each strip is individually vacuum-sealed against moisture & oxygen.',
    },
    {
      num: '02',
      title: 'PLACE',
      action: 'Lay flat on tongue or mucosa.',
      description:
        'Place the wafer-thin ThinSol™ strip directly onto your tongue or cheek mucosa. Zero chewing, swallowing pills, or glass of water needed.',
      tip: 'Sublingual and oral contact initiates dissolution in under 2 seconds.',
    },
    {
      num: '03',
      title: 'DISSOLVE',
      action: 'Melt in under 30 seconds.',
      description:
        'Patented micro-encapsulation ensures clean active release without the bitter bite of caffeine pills or the sticky sugar load of energy drinks.',
      tip: 'Direct capillary transmucosal absorption, completely bypassing stomach acid.',
    },
  ]

  const fiveZeros = [
    { label: 'NO CHEWING', desc: 'Melt-in-mouth film' },
    { label: 'NO SWALLOWING', desc: 'Eliminates pill aversion' },
    { label: 'NO WATER', desc: '100% water-free' },
    { label: 'NO SUGAR', desc: 'Clean metabolic profile' },
    { label: 'NO GI DISTRESS', desc: 'Zero gastric acid slosh' },
  ]

  return (
    <section id="how-it-works" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.08] bg-[#0A0A0E]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/80 tracking-widest uppercase mb-4">
            <Zap className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>SEAMLESS DAILY RITUAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            HOW AVRO WORKS.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60 font-normal leading-relaxed">
            Three simple steps powered by patented ThinSol™ oral dissolving film technology.
          </p>
        </div>

        {/* Jeton-Style Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-3xl p-6 sm:p-8 bg-[#121218] border border-white/10 relative group hover:border-[#FF5722]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 font-mono font-bold text-lg text-[#FF5722] flex items-center justify-center">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-white/40">
                    STEP {step.num}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-[#FF5722] mt-1">
                  {step.action}
                </p>

                <p className="mt-4 text-sm text-white/60 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/8 flex items-center gap-2 text-xs text-white/50">
                <CheckCircle2 className="w-4 h-4 text-[#FF5722] shrink-0" />
                <span>{step.tip}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 5 Zeroes Banner (Jeton Pill Bar) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#121218] border border-white/10 text-center">
          <span className="text-[10px] font-mono text-[#FF5722] uppercase tracking-widest font-bold block mb-2">
            PHARMACEUTICAL CLEANROOM STANDARD
          </span>
          <h4 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight mb-6">
            THE 5 ZEROES™ ADVANTAGE
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {fiveZeros.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/6 flex flex-col items-center"
              >
                <div className="w-6 h-6 rounded-full bg-[#FF5722]/15 text-[#FF5722] flex items-center justify-center mb-1.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-white tracking-wide uppercase">
                  {item.label}
                </span>
                <span className="text-[11px] text-white/40 mt-0.5">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
