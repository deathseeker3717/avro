import React, { useState } from 'react'
import { Sparkles, Layers, Droplets, Zap, Shield, Check } from 'lucide-react'

export const ProductReveal: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      id: 'dissolving',
      title: 'Fast-Dissolving Matrix',
      subtitle: 'Disintegrates cleanly in < 30 seconds',
      description:
        'A lightweight food-grade film matrix designed to melt smoothly on the tongue with zero chewing, chalkiness, or residual stickiness.',
      icon: Zap,
      tag: 'TEXTURE & SPEED',
      image: '/assets/avro-strip-float.jpg',
    },
    {
      id: 'waterfree',
      title: '100% Water-Free Format',
      subtitle: 'No liquids, no cups, zero prep',
      description:
        'Engineered for moments when you are deep in flow, commuting, in an exam hall, or in a silent library where carrying or drinking liquids is inconvenient.',
      icon: Droplets,
      tag: 'FRICTIONLESS CONVENIENCE',
      image: '/assets/avro-strip-macro.jpg',
    },
    {
      id: 'pouch',
      title: 'Pocket Box + Freshness Sachets',
      subtitle: '30 single-dose sachets in an ultra-slim profile',
      description:
        'A compact, crush-resistant pocket flip-top box protecting individual freshness foil sachets that slide effortlessly into cardholders or laptop sleeves.',
      icon: Layers,
      tag: 'EVERYDAY CARRY',
      image: '/assets/avro-cpack-generated.jpg',
    },
  ]

  const current = features[activeFeature]

  return (
    <section id="product" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/[0.08] bg-[#0A0A0E]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/80 tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
            <span>THE ARCHITECTURE OF CONVENIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            THE FUNCTIONAL STRIP.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed font-normal">
            We stripped away the cup, the bottle, and the bulk. What remains is a pure, portable oral strip designed to keep you focused without interrupting your work.
          </p>
        </div>

        {/* Jeton-Style Interactive Feature Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Feature Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {features.map((feat, idx) => {
              const isSelected = activeFeature === idx
              const Icon = feat.icon
              return (
                <div
                  key={feat.id}
                  onClick={() => setActiveFeature(idx)}
                  className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#181822] border-[#FF5722] shadow-xl shadow-[#FF5722]/10 scale-[1.02]'
                      : 'bg-white/[0.02] border-white/8 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-mono tracking-widest uppercase font-bold ${
                        isSelected ? 'text-[#FF5722]' : 'text-white/40'
                      }`}
                    >
                      {feat.tag}
                    </span>
                    <span
                      className={`text-xs font-bold font-mono px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-[#FF5722]/20 text-[#FF5722]'
                          : 'text-white/30'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-white/50 mt-1">
                    {feat.subtitle}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Right Column: Visual Stage */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-6 bg-[#121218] border border-white/10 shadow-2xl">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] bg-black border border-white/8 group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 z-10 text-left">
                  <span className="text-[10px] font-mono tracking-widest text-[#FF5722] uppercase font-bold">
                    {current.tag}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {current.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 mt-1.5 max-w-lg leading-relaxed">
                    {current.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
