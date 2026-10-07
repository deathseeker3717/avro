import React from 'react'
import { ShieldCheck, Award, Droplets, Sparkles, Zap } from 'lucide-react'
import { FlavorData } from '../constants/flavors'

interface StatsTickerProps {
  activeFlavor?: FlavorData
}

export const StatsTicker: React.FC<StatsTickerProps> = ({ activeFlavor }) => {
  const accentColor = activeFlavor?.color || '#FF5722'

  const stats = [
    {
      value: '< 30s',
      label: 'Rapid Dissolution',
      sub: 'Sublingual oral bio-uptake',
      icon: Zap
    },
    {
      value: '0.0 mL',
      label: '100% Water-Free',
      sub: 'Zero bottles or preparation',
      icon: Droplets
    },
    {
      value: '4 Patents',
      label: 'ThinSol™ Technology',
      sub: 'Proprietary fast-melt engine',
      icon: Award
    },
    {
      value: '0 Sugar',
      label: 'Clean Cognition',
      sub: 'Zero jitter or energy crash',
      icon: Sparkles
    },
    {
      value: 'WHO-GMP',
      label: 'Cleanroom Certified',
      sub: 'Pharmaceutical purity standard',
      icon: ShieldCheck
    }
  ]

  return (
    <section className="relative py-12 border-y border-white/[0.08] bg-[#0C0C10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
          {stats.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="flex flex-col items-center lg:items-start text-center lg:text-left p-3 rounded-2xl bg-white/[0.02] border border-white/5 transition-all hover:bg-white/[0.04]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 transition-colors duration-500" style={{ color: accentColor }} />
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                    {item.value}
                  </span>
                </div>
                <span className="text-xs font-bold text-white/90 tracking-wide uppercase">
                  {item.label}
                </span>
                <span className="text-[11px] text-white/50 mt-0.5">
                  {item.sub}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
