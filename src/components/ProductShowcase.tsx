import React, { useState } from 'react'
import { Eye, ShieldCheck, Check, Sparkles, Layers, Sliders, Box, Ruler } from 'lucide-react'

export const ProductShowcase: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(0)

  const gallery = [
    {
      id: 'cpack-gen',
      title: 'AVRO Pocket Box — 30’s Box',
      category: 'OUTER BOX ARCHITECTURE',
      image: '/assets/Premium AVRO Berry Caffeine Strips.png',
      caption: 'Matte black vertical flip-top box with white die-cut inner collar and thumb notch for smooth dispensing.',
    },
    {
      id: 'sachet-gen',
      title: 'AVRO Sealed Freshness Sachet',
      category: 'INNER FOIL PACKAGING',
      image: '/assets/AVRO Orange Metallic Sachet on Slate.png',
      caption: 'Individual sealed barrier sachet with corner "Pull Here ↗" tear notch for single-strip EDC carry.',
    },
    {
      id: 'lineup',
      title: 'AVRO Colors & Style Lineup',
      category: 'MULTI-FLAVOR SUITE',
      image: '/assets/AVRO Caffeine Strips_ Five Flavours.png',
      caption: 'Authentic 5-flavor design suite: Blood Orange, Mint, Lemon Citrus, Berry, and Tropical pocket packs with translucent colored strips.',
    },
    {
      id: 'strip-macro',
      title: 'Wafer-Thin Translucent Film',
      category: 'THINSOL™ ACTIVE MATRIX',
      image: '/assets/AVRO Caffeine Strip Close-Up.png',
      caption: 'Sub-millimeter dissolving film matrix held between fingertips. Disintegrates water-free on the tongue in < 30 seconds.',
    },
    {
      id: 'desk-flow',
      title: 'Deep Work Palm-Rest Setup',
      category: 'IN THE FLOW MOMENTS',
      image: '/assets/Cinematic AVRO Caffeine Workspace.png',
      caption: 'AVRO resting neatly beside laptop keyboard during a late-night coding sprint. Zero spill risk.',
    },
    {
      id: 'pack-hero',
      title: 'AVRO Pocket Pack & Strip',
      category: 'PRIMARY PRODUCTION SKU',
      image: '/assets/AVRO Caffeine Strips Duo.png',
      caption: 'Side-by-side pocket packs: Caffeine Edition and Caffeine-Free Edition.',
    },
  ]

  const current = gallery[selectedPhoto]

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.08] bg-[#09090C]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/80 tracking-widest uppercase mb-4">
            <Eye className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>AUTHENTIC PHYSICAL HARDWARE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            PRODUCT SHOWCASE.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60 font-normal leading-relaxed">
            Directly showcasing the pocket box architecture, single-dose freshness sachets, and the multi-flavor collection.
          </p>
        </div>

        {/* Jeton-Style Gallery Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Large Visual Display */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl sm:rounded-[2.5rem] p-3 sm:p-4 bg-[#121218] border border-white/10 shadow-2xl">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] bg-[#070709] border border-white/8 group flex items-center justify-center p-2">
                <img
                  src={current.image}
                  alt={current.title}
                  className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-105"
                />

                {/* Ambient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Captions */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 z-10 text-left">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#FF5722] uppercase font-bold">
                      {current.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {current.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-lg leading-relaxed">
                      {current.caption}
                    </p>
                  </div>

                  <span className="text-xs font-mono font-bold text-white/40 self-end">
                    0{selectedPhoto + 1} / 0{gallery.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Thumbnail Selector Grid */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {gallery.map((item, idx) => {
              const isSelected = selectedPhoto === idx
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedPhoto(idx)}
                  className={`p-3 rounded-2xl border transition-all duration-200 text-left flex items-center gap-3.5 cursor-pointer ${
                    isSelected
                      ? 'bg-[#181822] border-[#FF5722] shadow-lg shadow-[#FF5722]/10 scale-[1.02]'
                      : 'bg-white/[0.02] border-white/8 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="w-16 h-12 rounded-xl overflow-hidden bg-black shrink-0 border border-white/10 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-mono tracking-wider uppercase text-white/40 block">
                      {item.category}
                    </span>
                    <h4 className="text-xs font-bold text-white truncate mt-0.5">
                      {item.title}
                    </h4>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
