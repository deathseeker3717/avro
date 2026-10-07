import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

interface AnnouncementBarProps {
  onOpenWaitlist: () => void
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenWaitlist }) => {
  return (
    <div className="relative z-50 bg-[#0F0F12] border-b border-white/[0.08] text-white py-2.5 px-4 text-center">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-xs">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5722] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5722]" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-white/70">
            BATCH 01 PRODUCTION ALLOCATION
          </span>
        </div>

        <span className="hidden sm:inline text-white/30">|</span>

        <p className="text-white/80 font-medium">
          Patented ThinSol™ Technology · Fast-Dissolving Pocket Oral Strips
        </p>

        <button
          onClick={onOpenWaitlist}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.08] hover:bg-white text-white hover:text-black font-semibold text-[11px] tracking-wider uppercase transition-all duration-200 border border-white/10 cursor-pointer ml-1"
        >
          <span>Reserve Access</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  )
}
