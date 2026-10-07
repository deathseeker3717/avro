import React, { useState, useRef } from 'react'
import { Sparkles, Maximize2, ShieldCheck, Eye, Layers, Box, Ruler } from 'lucide-react'

export const HeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [activeView, setActiveView] = useState<'lineup' | 'cpack' | 'sachet' | 'macro'>('lineup')
  const [isHovered, setIsHovered] = useState(false)

  // Mouse/touch interactive 3D parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setRotate({
      x: -(y / rect.height) * 10,
      y: (x / rect.width) * 14,
    })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const views = [
    {
      id: 'lineup',
      label: 'Design Inspirations',
      image: '/assets/AVRO Caffeine Strips_ Five Flavours.png',
      badge: 'AVRO Flavors & Styles',
      subtitle: 'Mint · Berry · Tropical · Lemon Citrus · Orange',
    },
    {
      id: 'cpack',
      label: 'Pocket Box (30’s)',
      image: '/assets/Premium AVRO Berry Caffeine Strips.png',
      badge: 'AVRO Pocket Box 30’s',
      subtitle: 'Vertical Flip-Top Box with Die-Cut Thumb Notch',
    },
    {
      id: 'sachet',
      label: 'Freshness Foil Sachet',
      image: '/assets/AVRO Orange Metallic Sachet on Slate.png',
      badge: 'Single Sealed Sachet',
      subtitle: 'Hermetic Foil Sachet with Corner Pull Notch',
    },
    {
      id: 'macro',
      label: 'Active Dissolving Strip',
      image: '/assets/AVRO Caffeine Strip Close-Up.png',
      badge: 'Water-Free Oral Film',
      subtitle: 'Sub-Millimeter Fast-Dissolving Matrix',
    },
  ]

  const currentView = views.find((v) => v.id === activeView) || views[0]

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-8 sm:mt-12">
      {/* Outer Glow Halo */}
      <div className="absolute -inset-4 sm:-inset-10 bg-radial from-[#55E6D1]/15 via-transparent to-transparent blur-3xl pointer-events-none opacity-80" />

      {/* Main Double-Bezel Frame */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-3xl sm:rounded-[2.5rem] p-2 sm:p-3 bg-white/[0.04] border border-white/10 backdrop-blur-2xl transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          boxShadow: isHovered
            ? '0 30px 80px -15px rgba(0,0,0,0.8), 0 0 50px -10px rgba(85,230,209,0.25)'
            : '0 25px 60px -20px rgba(0,0,0,0.7), 0 0 30px -15px rgba(85,230,209,0.1)',
        }}
      >
        {/* Inner Content Container */}
        <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden bg-[#0A0A0A] aspect-[16/10] sm:aspect-[16/9] w-full border border-white/8 group flex items-center justify-center">
          {/* Dynamic Caustic / Specular Sheen layer */}
          <div
            className="absolute inset-0 pointer-events-none z-10 opacity-30 mix-blend-screen transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${50 + rotate.y * 3}% ${
                50 + rotate.x * 3
              }%, rgba(85, 230, 209, 0.35) 0%, transparent 60%)`,
            }}
          />

          {/* Product Photography Display */}
          <img
            src={currentView.image}
            alt={currentView.label}
            className="w-full h-full object-contain sm:object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.02]"
          />

          {/* Top Overlays: Live Badge & Technical Specs */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-white/15 backdrop-blur-md text-[11px] font-semibold text-white/90 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55E6D1]"></span>
              {currentView.badge}
            </span>
          </div>

          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 hidden sm:flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[10px] font-mono tracking-wider text-white/70">
              {currentView.subtitle}
            </span>
          </div>

          {/* Interactive Inspection Switcher Pill */}
          <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-20 flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-1 p-1 bg-black/85 border border-white/15 rounded-full backdrop-blur-xl shadow-2xl">
              {views.map((view) => (
                <button
                  key={view.id}
                  onClick={() => setActiveView(view.id as any)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                    activeView === view.id
                      ? 'bg-white text-black shadow-md'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {view.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating 3-Layer Architecture Callouts */}
      <div className="hidden lg:grid grid-cols-3 gap-4 mt-6 text-left">
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/6 backdrop-blur-md">
          <p className="text-[10px] uppercase font-mono tracking-widest text-[#55E6D1] mb-1">
            01 / BOX PACKING
          </p>
          <h4 className="text-sm font-semibold text-white">Pocket Box (30’s)</h4>
          <p className="text-xs text-white/50 mt-1 leading-relaxed">
            Flip-top box with die-cut thumb notch. Crush-proof pocket durability.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/6 backdrop-blur-md">
          <p className="text-[10px] uppercase font-mono tracking-widest text-[#55E6D1] mb-1">
            02 / INNER PACKING
          </p>
          <h4 className="text-sm font-semibold text-white">Sealed Foil Sachet</h4>
          <p className="text-xs text-white/50 mt-1 leading-relaxed">
            Single-dose barrier pouch with corner "Pull Here" tear notch.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/6 backdrop-blur-md">
          <p className="text-[10px] uppercase font-mono tracking-widest text-[#55E6D1] mb-1">
            03 / COLORS & STYLES
          </p>
          <h4 className="text-sm font-semibold text-white">Multi-Flavor Suite</h4>
          <p className="text-xs text-white/50 mt-1 leading-relaxed">
            Blood Orange, Mint Breeze, Lemon Citrus, Wild Berry, and Tropical Sol in slim pocket packs.
          </p>
        </div>
      </div>
    </div>
  )
}
