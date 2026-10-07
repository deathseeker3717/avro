import React from 'react'
import { ArrowUpRight, ShieldCheck, Factory, Award, CheckCircle2 } from 'lucide-react'

interface FooterProps {
  onOpenWaitlist: () => void
}

export const Footer: React.FC<FooterProps> = ({ onOpenWaitlist }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#08080C] text-white/70 pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Jeton-Style Callout Section */}
        <div className="mb-20 p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#F73B20] to-[#E02D15] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
          <div>
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-mono tracking-widest uppercase font-bold text-white mb-3 inline-block">
              BATCH 01 ALLOCATION OPEN
            </span>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Ready to leave liquid energy behind?
            </h3>
            <p className="mt-2 text-white/80 text-sm sm:text-base max-w-lg">
              Reserve your 30-strip pocket pack with patented ThinSol™ rapid melt technology.
            </p>
          </div>

          <button
            onClick={onOpenWaitlist}
            className="px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 shadow-2xl shrink-0 cursor-pointer active:scale-95"
          >
            Claim Priority Access →
          </button>
        </div>

        {/* Multi-column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#" className="inline-block focus:outline-none mb-4">
                <img
                  src="/assets/avro-logo-white.png"
                  alt="AVRO Logo"
                  className="h-8 w-auto object-contain"
                />
              </a>
              <p className="text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed mt-2">
                Pocket-sized functional oral strips engineered for water-free, instant focus. Powered by patented ThinSol™ sublingual technology and produced in certified pharmaceutical cleanrooms.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#34C771] animate-pulse" />
              <span className="text-xs font-mono tracking-wider text-white/80 uppercase">
                PHARMA CLEANROOM · 2B ANNUAL CAPACITY
              </span>
            </div>
          </div>

          {/* Quick Links Column 1: Technology */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
              TECHNOLOGY
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('unify-focus')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sublingual Pathway
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('how-it-works')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  30s Melt Ritual
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('packaging-architecture')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  3-Layer Packaging
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('flavors')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  5-Flavor Suite
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('benefits')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  5 Zeroes™ Guarantee
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Validation */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
              VALIDATION
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('comparison')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Format Comparison
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('validation')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cleanroom Metrics
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('faq')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Technical FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('packaging-architecture')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Pocket Pack Specs
                </button>
              </li>
            </ul>
          </div>

          {/* Action Column */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
                PRIORITY ALLOCATION
              </h4>
              <p className="text-xs text-white/50 leading-relaxed mb-4">
                Batch 01 production is limited to verified early access members.
              </p>
              <button
                onClick={onOpenWaitlist}
                className="w-full py-3 px-4 rounded-full bg-white/[0.08] hover:bg-white text-white hover:text-black text-xs font-bold uppercase tracking-wider transition-all duration-200 border border-white/10 cursor-pointer"
              >
                Join Waitlist Queue
              </button>
            </div>
          </div>
        </div>

        {/* Cleanroom Certifications Bar */}
        <div className="py-8 border-b border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-white/60">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#F73B20]" />
            <span>WHO-GMP Certified Facility</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#34C771]" />
            <span>ISO 9001:2015 Quality Management</span>
          </div>
          <div className="flex items-center gap-2">
            <Factory className="w-4 h-4 text-[#477EE9]" />
            <span>US-FDA Registered Cleanroom</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FB2D54]" />
            <span>FSSAI Compliant Food-Grade</span>
          </div>
        </div>

        {/* Regulatory Disclaimers */}
        <div className="pt-6 pb-6 border-b border-white/5 text-[11px] text-white/40 leading-relaxed font-mono space-y-2">
          <p>
            *DEMO CONCEPT NOTICE: All packaging graphics, 3D product visuals, renders, and interface mockups displayed on this website are conceptual prototypes created for demonstration purposes and are not final production units.
          </p>
          <p>
            *DIETARY SUPPLEMENT DISCLAIMER: AVRO is a functional dietary supplement platform formulated with food-grade oral dissolving polymers. This product is not intended to diagnose, treat, cure, or prevent any medical condition. Formulated for healthy adults aged 18 and older.
          </p>
        </div>

        {/* Colossal Full-Width AVRO Wordmark (Signature Jeton/Büro Studio Finale) */}
        <div className="w-full overflow-hidden select-none pointer-events-none pt-12 pb-4">
          <span className="text-[24vw] font-black tracking-[-0.06em] leading-none text-white/[0.07] block text-center uppercase whitespace-nowrap">
            AVRO
          </span>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} AVRO Labs India. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px] font-mono">
            <span>Cleanroom Scale</span>
            <span>·</span>
            <span>Patented ThinSol™</span>
            <span>·</span>
            <span>Zero Water</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
