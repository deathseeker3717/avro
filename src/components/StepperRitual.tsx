import React, { useState } from 'react'
import { ArrowRight, Check, Sparkles, Clock, ShieldCheck, Zap } from 'lucide-react'

export const StepperRitual: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      num: '01',
      title: 'Peel Sachet',
      time: '0s',
      subtitle: 'Corner Pull Notch',
      desc: 'Retrieve an individually sealed freshness foil sachet from your pocket pack. Tear cleanly at the corner notch.',
      badge: 'FRESHNESS FOIL SACHET',
      image: '/assets/AVRO Orange Metallic Sachet on Slate.png',
      stat: 'Airtight Moisture Barrier',
      detail: 'Moisture-proof, light-proof barrier preserves delicate active compounds at 100% potency.'
    },
    {
      num: '02',
      title: 'Place on Tongue',
      time: '5s',
      subtitle: 'Sublingual Contact',
      desc: 'Extract the ultra-thin 50µm polymer strip and place it directly on or beneath your tongue. No chewing, no glass of water, no bulky capsule to swallow.',
      badge: 'LAYER 03: THINSOL™ MATRIX',
      image: '/assets/AVRO Caffeine Strip Close-Up.png',
      stat: '50µm Pullulan Film',
      detail: 'Instantly adheres to moist oral mucosal tissue without sticking to fingers.'
    },
    {
      num: '03',
      title: 'Dissolve in Saliva',
      time: '18s',
      subtitle: 'Hydrophilic Hydration',
      desc: 'Salivary enzymes naturally activate the hydrophilic pullulan polymer matrix. The strip dissolves entirely in less than 30 seconds without leaving any residue.',
      badge: 'RAPID MELT ENGINE',
      image: '/assets/AVRO Caffeine Strip in Cinematic Teal.png',
      stat: '< 30 Seconds Total Melt',
      detail: 'pH-neutral dissolution prevents enamel erosion and eliminates bitter drug aftertaste.'
    },
    {
      num: '04',
      title: 'Capillary Absorption',
      time: '25s',
      subtitle: 'Direct Venous Pathway',
      desc: 'Active caffeine, L-theanine, and micronutrients diffuse straight through thin sublingual epithelium directly into the superior vena cava circulation.',
      badge: 'FIRST-PASS BYPASS',
      image: '/assets/Cinematic AVRO Caffeine Workspace.png',
      stat: 'Immediate Bio-Availability',
      detail: 'Skips stomach gastric acid breakdown and liver hepatic enzymatic degradation completely.'
    },
    {
      num: '05',
      title: 'Sustained Flow',
      time: '30s+',
      subtitle: 'Clean Cognitive Energy',
      desc: 'Experience pure, calm alertness without caffeine jitters, racing heart rate, or the harsh 2-hour crash associated with carbonated energy drinks.',
      badge: 'CLEAN COGNITION',
      image: '/assets/Cinematic Late-Night Coding Study Desk.png',
      stat: '4+ Hours Smooth Alertness',
      detail: 'L-theanine balances caffeine alpha-wave brain activity for laser focus.'
    }
  ]

  const current = steps[activeStep]

  return (
    <section id="how-it-works" className="relative py-28 sm:py-36 bg-[#111116] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#F73B20]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono tracking-widest uppercase text-white/80 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F73B20]" />
              THE 30-SECOND RITUAL
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
              How ThinSol™ transforms fast focus.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/60 max-w-sm font-normal">
            Five synchronized steps from pocket to bloodstream. Click each step to inspect the oral dissolution pathway.
          </p>
        </div>

        {/* Jeton-Style Numbered Interactive Stepper Bar */}
        <div className="mt-12 w-full overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center min-w-[650px] border-b border-white/10 pb-6 gap-2">
            {steps.map((step, idx) => (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`flex-1 text-left px-4 py-3 rounded-2xl transition-all cursor-pointer group ${
                  activeStep === idx
                    ? 'bg-white text-black font-bold shadow-xl'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className={activeStep === idx ? 'text-[#F73B20] font-black' : 'text-white/40'}>
                    {step.num}
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeStep === idx ? 'bg-black/10 text-black' : 'bg-white/10 text-white/60'
                  }`}>
                    {step.time}
                  </span>
                </div>
                <div className="text-sm font-bold truncate">
                  {step.title}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Showcase Stage */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Step Details & Data Points */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F73B20]/15 text-[#FF7043] border border-[#F73B20]/30 text-xs font-mono font-bold tracking-wider mb-4 w-fit">
              {current.badge}
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {current.title}
            </h3>
            <p className="text-lg text-white/50 font-medium mt-1">
              {current.subtitle}
            </p>

            <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              {current.desc}
            </p>

            {/* Technical Detail Card */}
            <div className="mt-8 p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-white/50 uppercase tracking-wider">MEASURED SPEC</span>
                <span className="text-sm font-mono font-bold text-[#F73B20]">{current.stat}</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-white/70 leading-normal">
                {current.detail}
              </p>
            </div>

            {/* Step navigation controls */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono tracking-wider transition-all cursor-pointer"
              >
                ← PREV STEP
              </button>

              <button
                onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                className="px-6 py-2.5 rounded-full bg-[#F73B20] hover:bg-white hover:text-black text-white text-xs font-mono font-bold tracking-wider transition-all cursor-pointer flex items-center gap-2"
              >
                <span>NEXT STEP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs font-mono text-white/40">
                Step {activeStep + 1} of {steps.length}
              </span>
            </div>
          </div>

          {/* Right: High-Resolution Photographic Display */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-black border border-white/15 shadow-2xl group">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Image Spec Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white/90">
                <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                  {current.badge}
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#F73B20]/80 backdrop-blur-md text-white font-bold">
                  {current.time}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
