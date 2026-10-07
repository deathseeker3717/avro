import React, { useState } from 'react'
import { Box, Layers, Sparkles, Check, ArrowRight, ShieldCheck, Ruler, Cpu, Factory } from 'lucide-react'

export const PackagingArchitecture: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'outer' | 'inner' | 'strip'>('outer')

  const layers = [
    {
      id: 'outer',
      index: '01',
      title: 'OUTER BOX ARCHITECTURE',
      name: 'Pocket Box — 30 Strips',
      format: 'Rigid Pocket Flip-Top Box',
      specs: '30 Individually Wrapped Strips · Pocket Size',
      description:
        'An ergonomic, pocket-sized vertical flip-top box with a precision thumb notch. Protects individual sachets from crushing inside pockets or bags while providing effortless one-handed dispensing.',
      image: '/assets/avro-cpack-generated.jpg',
      badge: 'AVRO 30-STRIP POCKET PACK',
      bulletPoints: [
        'Pocket-sized vertical flip-top lid with secure friction lock',
        'Die-cut inner collar with thumb notch for smooth dispensing',
        'Holds 30 individually sealed single-dose sachets upright',
        'Crush-resistant rigid cardstock architecture',
      ],
      technicalData: [
        { label: 'Capacity', value: '30 Sealed Strips' },
        { label: 'Format', value: 'Pocket Flip-Top' },
        { label: 'Closure', value: 'Friction Lock' },
        { label: 'Protection', value: 'Pocket Crush-Proof' }
      ]
    },
    {
      id: 'inner',
      index: '02',
      title: 'INNER FRESHNESS SEAL',
      name: 'Airtight Freshness Sachet',
      format: 'Multi-Layer Moisture-Barrier Foil',
      specs: 'Single-Strip Pouch · Corner Pull Notch · Zero Humidity',
      description:
        'Every single strip is individually sealed in an ultra-hygienic multi-layer barrier foil sachet with an intuitive corner pull notch. Locks out ambient moisture and lets you slide 2 or 3 loose strips directly into your wallet, phone case, or pocket.',
      image: '/assets/avro-sachet-generated.jpg',
      badge: 'AIRTIGHT FRESHNESS SACHET',
      bulletPoints: [
        'Engineered single-strip pouch for maximum active freshness',
        'Corner pull notch for instant, clean opening on the move',
        '100% moisture and oxygen barrier protection',
        'Discreet everyday carry without having to carry the whole box',
      ],
      technicalData: [
        { label: 'Portability', value: 'Slim Wallet EDC' },
        { label: 'Barrier Grade', value: 'Hermetic Foil' },
        { label: 'Tear Feature', value: 'Corner Pull Notch' },
        { label: 'Protection', value: 'Moisture-Proof' }
      ]
    },
    {
      id: 'strip',
      index: '03',
      title: 'ACTIVE DISSOLVING FILM',
      name: 'ThinSol™ Oral Dissolving Strip',
      format: 'Sublingual / Buccal Polymer Matrix',
      specs: '< 30s Dissolve · 0 mL Water · Zero Sugar',
      description:
        'Powered by patented ThinSol™ oral strip technology. Developed with micro-encapsulation to eliminate caffeine bitterness without bulky excipients. Dissolves cleanly on the tongue in under 30 seconds with zero water, chewing, or swallowing resistance.',
      image: '/assets/avro-strip-macro.jpg',
      badge: 'PATENTED THINSOL™ MATRIX',
      bulletPoints: [
        'Fast dissolution in under 30 seconds on dorsal tongue or sublingual mucosa',
        'Patented micro-encapsulation for clean taste and high compound stability',
        'Zero sugars, zero chewing, zero swallowing resistance',
        'Plant-based food-grade dissolvable polymer matrix',
      ],
      technicalData: [
        { label: 'Melt Speed', value: '< 30 Seconds' },
        { label: 'Water Needed', value: '0.00 mL' },
        { label: 'Sugar Content', value: '0.00 g' },
        { label: 'Patents', value: '4 Granted Patents' }
      ]
    },
  ]

  const current = layers.find((l) => l.id === activeLayer) || layers[0]

  return (
    <section id="packaging-architecture" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 relative bg-[#0D0D12] text-white overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Jeton-Style Editorial Headline with 3-Line Checkmarks */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono text-white/80 tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F73B20]" />
              <span>3-LAYER PACKAGING ARCHITECTURE</span>
            </div>

            {/* Jeton Signature 3-Line Editorial Checkmark Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Pocket form factor? <span className="text-[#34C771]">Sure.</span> <br />
              Under 30s melt? <span className="text-[#34C771]">Check.</span> <br />
              Zero water or crash? <span className="text-[#34C771]">Also check.</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-white/60 max-w-md font-normal leading-relaxed">
            Every layer from the pocket-sized outer box to the individual freshness sachet and ThinSol™ dissolving film is custom-tooled for instant, water-free focus.
          </p>
        </div>

        {/* Jeton-Style Layer Switcher Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          {layers.map((layer) => {
            const isSelected = activeLayer === layer.id
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id as any)}
                className={`p-5 rounded-3xl border text-left transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-black font-bold shadow-2xl scale-[1.02]'
                    : 'bg-white/[0.03] text-white border-white/10 hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold tracking-widest uppercase ${
                      isSelected ? 'text-[#F73B20]' : 'text-white/40'
                    }`}
                  >
                    LAYER {layer.index}
                  </span>
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isSelected ? 'bg-[#F73B20]' : 'bg-white/20'
                    }`}
                  />
                </div>
                <h4 className="text-base font-bold tracking-tight">
                  {layer.name}
                </h4>
                <p className={`text-xs truncate mt-0.5 ${isSelected ? 'text-black/60' : 'text-white/50'}`}>
                  {layer.specs}
                </p>
              </button>
            )
          })}
        </div>

        {/* Stage Container */}
        <div className="rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-12 bg-[#14141C] border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-black aspect-[16/11] border border-white/10 group shadow-2xl">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 border border-white/20 backdrop-blur-md text-xs font-semibold text-white">
                    <span className="w-2 h-2 rounded-full bg-[#F73B20]" />
                    {current.badge}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 text-left">
              <span className="text-xs font-mono text-[#F73B20] font-bold tracking-widest uppercase block mb-1">
                LAYER {current.index} · {current.title}
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {current.name}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-white/50 mt-1 mb-5">
                {current.format}
              </p>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6 font-normal">
                {current.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 mb-8">
                {current.bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                    <span className="w-5 h-5 rounded-full bg-[#34C771]/15 border border-[#34C771]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#34C771]" />
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
                {current.technicalData.map((tech, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                      {tech.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white mt-1 block truncate">
                      {tech.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
