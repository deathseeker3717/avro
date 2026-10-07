import React from 'react'
import { Check, X, Minus, Sparkles } from 'lucide-react'

export const ComparisonSection: React.FC = () => {
  const comparisonData = [
    {
      dimension: 'Portability & Pocket Carry',
      avro: 'Ultra-thin pocket box / single 50×79mm sachet',
      coffee: 'Bulky cups (spill risk, not pocketable)',
      energyDrinks: 'Heavy 250–500ml aluminum cans',
      tabletsGum: 'Bulky blister packs or plastic bottles',
    },
    {
      dimension: 'Water-Free Consumption',
      avro: '100% Water-free (dissolves on tongue in < 30s)',
      coffee: 'Requires hot water & cup preparation',
      energyDrinks: 'Liquid beverage (requires full stomach drinking)',
      tabletsGum: 'Tablets need water; gum requires continuous chewing',
    },
    {
      dimension: 'Onset & Absorption Route',
      avro: 'Sublingual & buccal mucosa (bypasses stomach acid)',
      coffee: 'Digestive tract absorption (30–45 mins)',
      energyDrinks: 'Stomach absorption with harsh sugar spikes',
      tabletsGum: 'Gastric breakdown subject to liver first-pass',
    },
    {
      dimension: 'Discreetness in Daily Routine',
      avro: 'Silent, instant, clean (ideal for meetings, flights, exams)',
      coffee: 'Low (mug clatter, coffee aromas, frequent refills)',
      energyDrinks: 'Low (loud pop-tab opening, neon can branding)',
      tabletsGum: 'Moderate (chewing motion or visible pill swallowing)',
    },
    {
      dimension: 'Metabolic & Stomach Profile',
      avro: '5 Zeroes™ (0 sugar, 0 calories, 0 gastric distress)',
      coffee: 'High acidity, can irritate sensitive stomachs',
      energyDrinks: '27g+ sugar or heavy artificial sweeteners & carbonation',
      tabletsGum: 'Fillers, binding agents, dental residue',
    },
  ]

  return (
    <section id="comparison" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.08] bg-[#0A0A0E]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/80 tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>FORMAT POSITIONING & ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            DESIGNED AROUND CONVENIENCE.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60 font-normal leading-relaxed">
            Every format has its place. AVRO was engineered specifically for the moments when traditional liquid caffeine breaks your workflow.
          </p>
        </div>

        {/* Jeton-Style Comparison Matrix Table */}
        <div className="rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-6 bg-[#121218] border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono tracking-wider text-white/40 uppercase">
                  <th className="py-5 px-6 font-semibold w-1/4">FORMAT DIMENSION</th>
                  <th className="py-5 px-6 font-bold text-[#FF5722] bg-[#FF5722]/10 rounded-t-2xl w-1/3">
                    AVRO THINSOL™ STRIPS
                  </th>
                  <th className="py-5 px-6 font-semibold w-1/5">BREWED COFFEE</th>
                  <th className="py-5 px-6 font-semibold w-1/5">ENERGY DRINKS</th>
                  <th className="py-5 px-6 font-semibold w-1/5">PILLS / GUM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {comparisonData.map((row) => (
                  <tr key={row.dimension} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-5 px-6 font-semibold text-white/90">
                      {row.dimension}
                    </td>
                    <td className="py-5 px-6 font-bold text-white bg-[#FF5722]/5 border-x border-[#FF5722]/20">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#FF5722] shrink-0" />
                        <span>{row.avro}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-white/50">
                      {row.coffee}
                    </td>
                    <td className="py-5 px-6 text-white/50">
                      {row.energyDrinks}
                    </td>
                    <td className="py-5 px-6 text-white/50">
                      {row.tabletsGum}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
