import React from 'react'
import { Maximize, DropletOff, Clock, Shuffle, CheckCircle2 } from 'lucide-react'

export const ProductBenefits: React.FC = () => {
  const benefits = [
    {
      num: '01',
      title: 'POCKET-SIZED',
      lead: 'Fits into any EDC wallet or jeans pocket.',
      detail:
        'Slimmer than a credit card holder. Individual freshness foil sachets or the 30-strip pocket box slide into your daily carry with zero volume or heavy liquid weight.',
      icon: Maximize,
      tag: 'ULTRA-COMPACT CARRY',
    },
    {
      num: '02',
      title: '100% WATER-FREE',
      lead: 'No bottle. No cup. Zero prep.',
      detail:
        'Complete independence from liquids, heavy cans, shakers, and cafe queues. Rapid sublingual focus anywhere—during board meetings, red-eye flights, or traffic.',
      icon: DropletOff,
      tag: 'ZERO FLUID DEPENDENCY',
    },
    {
      num: '03',
      title: 'FAST-DISSOLVING',
      lead: 'Under 30 seconds on the tongue.',
      detail:
        'Patented ThinSol™ micro-encapsulated matrix dissociates smoothly upon contact with oral moisture. No chalky residue, zero bitter bite, and zero water required.',
      icon: Clock,
      tag: 'INSTANT ORAL MELT',
    },
    {
      num: '04',
      title: 'DUAL FORMULATION',
      lead: 'Caffeine when you need it. Caffeine-free when you don’t.',
      detail:
        'A modular functional oral platform. Choose fast-acting caffeine for daytime productivity or stimulant-free L-Theanine + Rhodiola for evening deep work.',
      icon: Shuffle,
      tag: 'MODULAR FOCUS ENGINE',
    },
  ]

  return (
    <section id="benefits" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.08] bg-[#0A0A0E]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/80 tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
            <span>FOUNDATIONAL ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            WHY AVRO STRIPS.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60 font-normal leading-relaxed">
            Four engineering principles that separate AVRO from antiquated drinks and bulky capsules.
          </p>
        </div>

        {/* Jeton-Style Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.num}
                className="rounded-3xl p-6 sm:p-10 bg-[#121218] border border-white/10 hover:border-[#FF5722]/50 transition-all duration-300 flex flex-col justify-between shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#FF5722] uppercase">
                      {item.tag}
                    </span>
                    <span className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 font-mono font-bold text-xs text-white/40 flex items-center justify-center group-hover:text-white group-hover:border-white/20 transition-colors">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base font-semibold text-white/90">
                    {item.lead}
                  </p>

                  <p className="mt-3 text-sm text-white/60 leading-relaxed font-normal">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/8 flex items-center gap-2 text-xs font-mono text-white/50">
                  <Icon className="w-4 h-4 text-[#FF5722]" />
                  <span>ThinSol™ Engineered Standard</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
