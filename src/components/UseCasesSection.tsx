import React, { useState } from 'react'
import { BookOpen, Terminal, Clock, Plane, Gamepad2, Briefcase, Sparkles, Check } from 'lucide-react'

export const UseCasesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  const cases = [
    {
      id: 'coding',
      title: 'CODING',
      headline: 'Stay in your mental stack.',
      description:
        'When you are debugging distributed systems or pushing commits, stepping away to brew coffee breaks your flow state. AVRO sits discreetly on your palm rest.',
      icon: Terminal,
      image: '/assets/avro-lifestyle-desk.jpg',
      tag: 'DEEP WORK',
    },
    {
      id: 'study',
      title: 'EXAMS',
      headline: 'Silent, permissible alertness.',
      description:
        'Late-night library marathons require quiet, frictionless alertness. Zero paper cups, zero cafeteria lines, and permitted in exam halls where drinks are banned.',
      icon: BookOpen,
      image: '/assets/avro-usecase-study.jpg',
      tag: 'ACADEMIC FOCUS',
    },
    {
      id: 'travel',
      title: 'TRAVEL',
      headline: '100% Airport security & TSA friendly.',
      description:
        'Security lines, long train transits, and early morning flights. AVRO passes through security without liquid restrictions, spills, or tray tables.',
      icon: Plane,
      image: '/assets/avro-usecase-travel.jpg',
      tag: 'EVERYDAY TRANSIT',
    },
    {
      id: 'deadlines',
      title: 'DEADLINES',
      headline: 'Instant focus when midnight strikes.',
      description:
        'When pitch decks or client deliverables are due in an hour, AVRO delivers clean focus support right from your pocket without leaving your desk.',
      icon: Clock,
      image: '/assets/avro-lifestyle-edc.jpg',
      tag: 'HIGH VELOCITY',
    },
    {
      id: 'gaming',
      title: 'GAMING',
      headline: 'Between rounds & tournament sets.',
      description:
        'Zero open cans or sticky condensation near your mechanical keyboard or controller. Fast-dissolving convenience during 30-second respawn timers.',
      icon: Gamepad2,
      image: '/assets/avro-strip-float.jpg',
      tag: 'COMPETITIVE SPRINT',
    },
    {
      id: 'work',
      title: 'WORK',
      headline: 'Built for back-to-back calendar days.',
      description:
        'Client presentations, design reviews, and company all-hands. Stay sharp without juggling a warm paper mug between conference rooms.',
      icon: Briefcase,
      image: '/assets/avro-pack-hero.jpg',
      tag: 'PROFESSIONAL CADENCE',
    },
  ]

  const activeItem = cases[activeTab]
  const Icon = activeItem.icon

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.08] bg-[#0A0A0E]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/80 tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>EVERYDAY CONVENIENCE MOMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            DESIGNED FOR YOUR CADENCE.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60 font-normal leading-relaxed">
            The moments you need focus aren't always the moments when a beverage is convenient.
          </p>
        </div>

        {/* Jeton-Style Tab Switcher Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {cases.map((c, idx) => {
            const isSelected = activeTab === idx
            return (
              <button
                key={c.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer border ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-xl shadow-white/10 scale-105'
                    : 'bg-[#14141C] text-white/60 border-white/8 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {c.title}
              </button>
            )
          })}
        </div>

        {/* Jeton-Style Feature Card */}
        <div className="rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 bg-[#121218] border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] bg-black border border-white/8 group">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/85 border border-white/15 backdrop-blur-md text-xs font-semibold text-white">
                    <Icon className="w-3.5 h-3.5 text-[#FF5722]" />
                    {activeItem.tag}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 text-left">
              <span className="text-xs font-mono text-[#FF5722] font-bold tracking-widest uppercase block mb-1">
                {activeItem.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {activeItem.headline}
              </h3>
              <p className="mt-4 text-sm text-white/60 leading-relaxed font-normal">
                {activeItem.description}
              </p>

              <div className="mt-8 pt-6 border-t border-white/8 space-y-2.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#FF5722]" />
                  <span>Zero liquid volume, zero spill risk</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#FF5722]" />
                  <span>Fast sublingual dissolution in &lt; 30 seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
