import React, { useState } from 'react'
import { X, CheckCircle, ArrowRight, Sparkles, Copy, Check, ShieldCheck } from 'lucide-react'
import confetti from 'canvas-confetti'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('student')
  const [flavor, setFlavor] = useState('mint')
  const [submitted, setSubmitted] = useState(false)
  const [ticketNumber, setTicketNumber] = useState(247)
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    // Randomize realistic queue ticket number
    const num = Math.floor(Math.random() * 50) + 210
    setTicketNumber(num)
    setSubmitted(true)

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF5722', '#FFFFFF', '#0A0A0A'],
      })
    } catch (err) {
      // Fallback
    }
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://avro.in/waitlist?ref=AVRO-${ticketNumber}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div
        className="relative w-full max-w-lg rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 bg-[#121218] border border-white/15 shadow-2xl backdrop-blur-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="text-left mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5722]/15 text-[#FF5722] text-[10px] font-mono tracking-widest uppercase mb-3 border border-[#FF5722]/30">
                <Sparkles className="w-3 h-3" />
                <span>BATCH 01 PRIORITY ALLOCATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                RESERVE YOUR POSITION.
              </h3>
              <p className="text-xs sm:text-sm text-white/60 mt-1.5 font-normal leading-relaxed">
                Join the early tester queue for the initial production run of AVRO functional oral strips.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Aditya Sharma"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FF5722] focus:ring-1 focus:ring-[#FF5722] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="aditya@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FF5722] focus:ring-1 focus:ring-[#FF5722] transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                    Your Profile
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-[#181822] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF5722] transition-all"
                  >
                    <option value="student">College Student</option>
                    <option value="developer">Developer / Engineer</option>
                    <option value="creative">Designer / Creative</option>
                    <option value="founder">Founder / Builder</option>
                    <option value="professional">Working Professional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                    Signature Flavor
                  </label>
                  <select
                    value={flavor}
                    onChange={(e) => setFlavor(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-[#181822] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF5722] transition-all"
                  >
                    <option value="mint">Mint Breeze (Signature)</option>
                    <option value="citrus">Yuzu Lemon Citrus</option>
                    <option value="orange">Blood Orange</option>
                    <option value="berry">Wild Berry (Caffeine-Free)</option>
                    <option value="tropical">Tropical Sol</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#FF5722] hover:bg-white text-white hover:text-black font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#FF5722]/30 active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Confirm Priority Spot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-1 flex items-center justify-center gap-2 text-[11px] text-white/40">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>Zero spam. Direct dispatch notifications only.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#FF5722]/20 border border-[#FF5722]/40 text-[#FF5722] flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest uppercase text-white/60 mb-3">
              ACCESS RESERVED
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              YOU'RE ON THE LIST.
            </h3>

            <p className="text-xs sm:text-sm text-white/60 mt-2 max-w-sm mx-auto leading-relaxed">
              We've allocated your spot for Batch 01. Watch your inbox at <span className="text-white font-medium">{email}</span> for private drop details.
            </p>

            {/* Queue Badge */}
            <div className="my-6 p-4 rounded-2xl bg-white/[0.03] border border-white/8">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-1">
                YOUR PRIORITY TICKET
              </span>
              <span className="text-3xl font-mono font-extrabold text-[#FF5722] tracking-tight">
                #AVRO-{ticketNumber}
              </span>
            </div>

            {/* Referral / Share */}
            <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/6 text-left">
              <input
                type="text"
                readOnly
                value={`https://avro.in/waitlist?ref=AVRO-${ticketNumber}`}
                className="flex-1 bg-transparent px-2 text-xs text-white/60 font-mono focus:outline-none truncate"
              />
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-black text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="mt-6 text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              Close and explore the site
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
