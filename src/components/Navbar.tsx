import React, { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X, Sparkles, Home, Layers, Zap, Shield, ArrowRight } from 'lucide-react'
import { FlavorData } from '../constants/flavors'

interface NavbarProps {
  onOpenWaitlist: () => void
  activeFlavor?: FlavorData
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist, activeFlavor }) => {

  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Technology', href: '#unify-focus' },
    { name: '30s Ritual', href: '#how-it-works' },
    { name: '3-Layer Pack', href: '#packaging-architecture' },
    { name: 'Flavors', href: '#flavors' },
    { name: 'Comparison', href: '#comparison' },
    { name: 'FAQ', href: '#faq' },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const topOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      {/* Top Main Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[#09090C]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Wordmark & Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="AVRO Home"
            >
              <div className="h-7 w-auto flex items-center">
                <img
                  src="/assets/avro-logo-white.png"
                  alt="AVRO Logo"
                  className="h-6 sm:h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border text-[10px] font-mono tracking-widest uppercase text-white/90 transition-colors"
                style={{
                  borderColor: activeFlavor ? `${activeFlavor.color}66` : 'rgba(255,255,255,0.2)'
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: activeFlavor ? activeFlavor.color : '#34C771' }}
                />
                <span>THINSOL™ STRIPS</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 p-1 bg-white/10 border border-white/15 rounded-full backdrop-blur-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-4 py-1.5 rounded-full text-xs font-medium text-white/80 hover:text-white hover:bg-white/15 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Header Action: Jeton-style High-Contrast White Pill */}
            <div className="hidden sm:flex items-center gap-3">
              <span className="text-[11px] font-mono text-white/80 px-2 py-1 rounded-full bg-white/10 hidden xl:inline-block">
                WHO-GMP
              </span>

              <button
                onClick={onOpenWaitlist}
                className="group relative inline-flex items-center gap-2 rounded-full bg-white hover:bg-black text-black hover:text-white px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-xl active:scale-95 cursor-pointer"
                style={{
                  boxShadow: activeFlavor ? `0 4px 20px -2px ${activeFlavor.glowColor}` : undefined
                }}
              >
                <span>Pre-Order Batch 01</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0A0E]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 animate-fade-in text-white">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-white/80 hover:text-white py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenWaitlist()
                }}
                className="mt-4 w-full py-3.5 rounded-full bg-[#F73B20] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#F73B20]/30"
              >
                <span>Pre-Order Batch 01</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Floating Bottom Pill Dock (Signature Jeton Desktop Element) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-2 p-1.5 rounded-full bg-[#111116]/85 border border-white/15 backdrop-blur-2xl shadow-2xl shadow-black/50 text-white text-xs font-medium">
        <a
          href="#"
          className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-all"
          title="Home"
        >
          <Home className="w-4 h-4" />
        </a>

        <div className="w-px h-4 bg-white/15 mx-1" />

        <a
          href="#unify-focus"
          onClick={(e) => handleLinkClick(e, '#unify-focus')}
          className="px-3 py-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-all text-xs"
        >
          Technology
        </a>

        <a
          href="#how-it-works"
          onClick={(e) => handleLinkClick(e, '#how-it-works')}
          className="px-3 py-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-all text-xs"
        >
          Ritual
        </a>

        <a
          href="#packaging-architecture"
          onClick={(e) => handleLinkClick(e, '#packaging-architecture')}
          className="px-3 py-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-all text-xs"
        >
          Packaging
        </a>

        <a
          href="#flavors"
          onClick={(e) => handleLinkClick(e, '#flavors')}
          className="px-3 py-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-all text-xs"
        >
          Flavors
        </a>

        <button
          onClick={onOpenWaitlist}
          className="ml-1 px-4 py-1.5 rounded-full bg-[#F73B20] hover:bg-white text-white hover:text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
        >
          Pre-Order
        </button>
      </div>
    </>
  )
}
