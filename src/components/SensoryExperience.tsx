import React, { useState } from 'react'
import {
  Sparkles,
  Zap,
  Droplets,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Gauge,
  Activity,
  Layers,
  Flame,
  ArrowRight
} from 'lucide-react'

export const SensoryExperience: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0)
  const [hydrationLevel, setHydrationLevel] = useState<number>(65)

  const phases = [
    {
      step: 'PHASE 01',
      timing: '< 3 SECONDS',
      title: 'Oral Placement & Immediate Hydration',
      tagline: 'Salivary contact initiates micro-porous polymer unbinding',
      description:
        'The sub-millimeter ThinSol™ strip adheres gently to the dorsal tongue or inner buccal mucosa. Micro-porous hydrophilic polymers immediately draw in natural saliva—zero water, zero chewing, and zero gag reflex.',
      metrics: [
        { label: 'Surface Wetting', value: 'Instant (< 1.2s)' },
        { label: 'Water Required', value: '0.00 mL' },
        { label: 'Dental Adhesion', value: 'Zero (Non-Sticky)' },
      ],
      image: '/assets/AVRO Caffeine Strip Close-Up.png',
      visualBadge: 'Phase 1: Hydration Matrix',
      accent: '#55E6D1'
    },
    {
      step: 'PHASE 02',
      timing: '< 15 SECONDS',
      title: 'ThinSol™ Matrix Disintegration',
      tagline: 'Clean flavor burst with proprietary bitter-masking technology',
      description:
        'As the polymer chains dissociate, micro-encapsulated caffeine and L-Theanine particles disperse evenly across oral receptors. Patented ThinSol™ taste-masking eliminates the harsh bitterness common to caffeine pills and cheap energy shots.',
      metrics: [
        { label: 'Disintegration Velocity', value: '14.8 seconds avg' },
        { label: 'Active Release', value: 'Micro-Dispersed' },
        { label: 'Flavor Delivery', value: 'Arctic Menthol Terpenes' },
      ],
      image: '/assets/AVRO Caffeine Strip in Cinematic Teal.png',
      visualBadge: 'Phase 2: Molecular Dissolution',
      accent: '#FACC15'
    },
    {
      step: 'PHASE 03',
      timing: '< 30 SECONDS',
      title: 'Transmucosal Sublingual Bio-Absorption',
      tagline: 'Direct capillary uptake bypassing destructive stomach acid',
      description:
        'Active compounds absorb directly through the thin sublingual and buccal epithelial lining into systemic circulation. By bypassing the acidic gastric environment and hepatic first-pass metabolism, AVRO delivers clean, jitter-free focus.',
      metrics: [
        { label: 'Absorption Route', value: 'Sublingual Mucosa' },
        { label: 'GI Tract Strain', value: '0% Acid Induction' },
        { label: 'Full Disintegration', value: 'Complete (< 30s)' },
      ],
      image: '/assets/AVRO Caffeine Strips Duo.png',
      visualBadge: 'Phase 3: Systemic Bio-Activation',
      accent: '#14B8A6'
    }
  ]

  const current = phases[activePhase]

  return (
    <section
      id="sensory-experience"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] border-t border-white/8 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] blur-[150px] pointer-events-none rounded-full transition-all duration-700 opacity-40"
        style={{
          background: `radial-gradient(circle, ${current.accent} 0%, rgba(10,10,10,0) 70%)`
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Eyebrow & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4 text-[11px] font-mono tracking-widest uppercase text-white/80">
            <Activity className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>SENSORY MECHANISM · THINSOL™ DISINTEGRATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase">
            STEP INTO THE MELT. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
              THE 30-SECOND TRANSFORMATION.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed max-w-2xl mx-auto">
            Traditional canned drinks flood your gut with 250ml of acid and sugar. AVRO dissolves in seconds through patented ThinSol™ sublingual science.
          </p>
        </div>

        {/* PHASE SELECTION CONTROLLER (TABS) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {phases.map((p, idx) => {
            const isActive = idx === activePhase
            return (
              <button
                key={p.step}
                onClick={() => setActivePhase(idx)}
                className={`group p-4 sm:p-5 rounded-2xl sm:rounded-3xl text-left transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'bg-white/[0.08] border-white/30 shadow-xl shadow-black/50 scale-[1.02]'
                    : 'bg-white/[0.02] border-white/8 hover:bg-white/[0.04] hover:border-white/15'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[11px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded-md"
                    style={{
                      backgroundColor: isActive ? `${p.accent}20` : 'rgba(255,255,255,0.05)',
                      color: isActive ? p.accent : 'rgba(255,255,255,0.5)'
                    }}
                  >
                    {p.step}
                  </span>
                  <span className="text-[11px] font-mono text-white/50">{p.timing}</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-white/90">
                  {p.title}
                </h4>
                <p className="text-xs text-white/50 mt-1 line-clamp-1">{p.tagline}</p>
              </button>
            )
          })}
        </div>

        {/* INTERACTIVE PHASE STAGE: DUAL-PANE SENSORY LABORATORY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem] bg-white/[0.03] border border-white/12 backdrop-blur-2xl shadow-2xl">
          {/* Left Column: Visual Asset with Dynamic Micro-Layer */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden bg-black/80 aspect-[16/11] border border-white/10 group shadow-inner">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-white/15 backdrop-blur-md text-xs font-semibold text-white">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: current.accent }} />
                  {current.visualBadge}
                </span>
              </div>

              {/* Floating Bottom Timing Counter */}
              <div className="absolute bottom-4 right-4 z-20">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-black font-mono font-bold text-xs shadow-lg">
                  <Clock className="w-3.5 h-3.5 text-black" />
                  <span>{current.timing}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Deep Sensory Breakdown & Live Parameters */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-xs font-mono tracking-widest text-[#55E6D1] font-bold uppercase">
                {current.step} · SCIENTIFIC MECHANISM
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              {current.title}
            </h3>

            <p className="mt-1 text-sm font-medium text-white/80 italic">
              "{current.tagline}"
            </p>

            <p className="mt-4 text-xs sm:text-sm text-white/60 leading-relaxed">
              {current.description}
            </p>

            {/* Micro Benchmark Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/10">
              {current.metrics.map((m, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/6">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-white/40 block">
                    {m.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Interactive Phase Step Indicator */}
            <div className="mt-8 flex items-center justify-between pt-4 border-t border-white/6">
              <span className="text-xs text-white/40 font-mono">
                Showing Phase 0{activePhase + 1} of 03
              </span>
              <div className="flex items-center gap-2">
                <button
                  disabled={activePhase === 0}
                  onClick={() => setActivePhase((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  Prev Phase
                </button>
                <button
                  disabled={activePhase === phases.length - 1}
                  onClick={() => setActivePhase((prev) => Math.min(phases.length - 1, prev + 1))}
                  className="px-3.5 py-1.5 rounded-full bg-[#55E6D1] text-[#0A0A0A] font-bold text-xs hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
                >
                  <span>Next Phase</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* KUMO SENSORY COMPARISON BENTO: WHY STRIPS BEAT DRINKS & PILLS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/8 backdrop-blur-md text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-rose-400 font-bold uppercase">Legacy Energy Drinks</span>
              <span className="text-xs font-mono text-white/40">250ml Liquid</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">Heavy Cans & Gastric Slosh</h4>
            <p className="text-xs text-white/50 leading-relaxed">
              Takes 30–45 mins to digest through the stomach. Packed with 27g+ sugar or artificial sweeteners that cause insulin spikes and GI distress.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/8 backdrop-blur-md text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase">Caffeine Pills</span>
              <span className="text-xs font-mono text-white/40">Hard Capsule</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">Choking & Delayed Onset</h4>
            <p className="text-xs text-white/50 leading-relaxed">
              Requires a bottle of water to choke down. Degrades in stomach acid, leading to unpredictable release, sudden jitters, and a harsh crash.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.06] border border-[#55E6D1]/30 backdrop-blur-md text-left relative overflow-hidden shadow-xl shadow-[#55E6D1]/5">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#55E6D1] text-[#0A0A0A] text-[10px] font-bold font-mono uppercase tracking-widest rounded-bl-xl">
              AVRO ThinSol™
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#55E6D1] font-bold uppercase">AVRO Oral Strips</span>
              <span className="text-xs font-mono text-white/60">&lt; 30s Melt</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">Instant Sublingual Freedom</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              No cup, no bottle, zero water required. Slides into your pocket, dissolves in under 30 seconds, and delivers pure, jitter-free focus.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
