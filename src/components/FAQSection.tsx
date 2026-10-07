import React, { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const faqs = [
    {
      q: 'What is AVRO?',
      a: 'AVRO is a pocket-sized functional oral-strip platform. Our first product is a fast-dissolving caffeine oral strip powered by patented ThinSol™ technology, engineered for convenient, water-free focus support during everyday tasks like studying, coding, exams, and demanding work sessions.',
    },
    {
      q: 'How does the strip work?',
      a: 'You extract an individual sealed foil sachet from the AVRO pocket box, tear at the corner pull notch, and place the ultra-thin strip directly onto your tongue. It dissolves smoothly in under 30 seconds without chewing, swallowing pills, or drinking water.',
    },
    {
      q: 'Does AVRO require water or liquid?',
      a: 'No. AVRO strips are 100% water-free. They dissolve cleanly on your tongue using natural oral moisture, making them completely independent of bottles, mugs, or cafeteria lines.',
    },
    {
      q: 'How much caffeine does one strip contain?',
      a: 'Details on exact caffeine dosage per strip will be clearly printed on the commercial product packaging in accordance with Indian regulatory norms and FSSAI dietary standards (typically 50mg micro-encapsulated caffeine).',
    },
    {
      q: 'Is AVRO safe and certified?',
      a: 'AVRO strips are formulated under pharmaceutical-grade cleanroom standards in certified facilities. Formulations use 100% plant-based dissolving polymers, are completely sugar-free, and follow strict WHO-GMP and international quality benchmarks.',
    },
    {
      q: 'Who is AVRO designed for?',
      a: 'AVRO is designed for adults aged 18 and older—including college students, software engineers, designers, founders, and working professionals—who need convenient, portable focus support without the physical bulk or digestive bloat of liquid beverages.',
    },
    {
      q: 'What is the caffeine-free variant?',
      a: 'The caffeine-free strip is a planned functional variant in our product roadmap. It is formulated for evening deep work, quiet reading, or caffeine-sensitive routines seeking water-free oral strip convenience without stimulant load.',
    },
    {
      q: 'How should AVRO be stored?',
      a: 'Store AVRO in a cool, dry place away from direct heat and excessive humidity. Each strip is individually protected inside a hermetically sealed freshness sachet, maintaining peak potency and crispness even in your pocket or card wallet.',
    },
    {
      q: 'Where can I buy AVRO?',
      a: 'Initial production batches will be released exclusively through our Early Access priority waitlist. You can reserve your spot on this website to receive an early access invite for the Batch 01 release.',
    },
  ]

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.08] bg-[#0A0A0E]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/80 tracking-widest uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            ANSWERS & SPECIFICATIONS.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60 font-normal leading-relaxed">
            Everything you need to know about the format, ThinSol™ technology, packaging, and release roadmap.
          </p>
        </div>

        {/* Jeton-Style Numbered Accordion */}
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx
            const formattedIndex = (idx + 1).toString().padStart(2, '0')
            return (
              <div
                key={item.q}
                className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#14141C] border-[#FF5722]/40 shadow-xl'
                    : 'bg-[#101016]/60 border-white/8 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span className="text-xs font-mono font-bold text-[#FF5722]">
                      {formattedIndex}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {item.q}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#FF5722] text-white rotate-180'
                        : 'bg-white/5 text-white/60 hover:text-white'
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm text-white/70 leading-relaxed pl-14 sm:pl-16 font-normal">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
