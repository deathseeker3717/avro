import React from 'react'
import { Sparkles } from 'lucide-react'

export const BrandStory: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.08] bg-[#0A0A0E]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/80 tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
          <span>ORIGIN & PURPOSE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight uppercase">
          BUILT FOR PEOPLE WHO <br className="hidden sm:inline" />
          DON'T WANT TO BREAK THEIR FLOW.
        </h2>

        <div className="mt-8 space-y-5 text-base sm:text-lg text-white/70 leading-relaxed font-normal text-left sm:text-center max-w-2xl mx-auto">
          <p>
            AVRO started with a simple observation: the moments when people need to stay sharp aren't always the moments when a beverage or coffee shop is convenient.
          </p>
          <p>
            Whether you are sitting in a three-hour coding sprint, studying late in a quiet hall, or navigating airport gates, carrying liquids and seeking cafes interrupts your momentum.
          </p>
          <p className="text-white font-medium">
            We are building a pocket-sized functional strip platform designed around portability, discretion, and instant sublingual delivery.
          </p>
        </div>

        {/* Minimal Signature Mark */}
        <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-center gap-4">
          <img
            src="/assets/avro-logo-white.png"
            alt="AVRO Mark"
            className="h-6 w-auto object-contain opacity-90"
          />
          <span className="text-xs font-mono text-white/40 tracking-wider">
            AVRO LABS · INDIA
          </span>
        </div>
      </div>
    </section>
  )
}
