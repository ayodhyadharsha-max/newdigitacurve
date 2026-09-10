'use client';

import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      number: '01',
      tagline: 'STRATEGY · UX · DESIGN · DEVELOPMENT',
      title: 'WEBSITE DESIGN + DEVELOPMENT',
      desc: 'Responsive websites and landing pages that explain the offer, build confidence and make the next action obvious.',
      link: '#web-experience',
    },
    {
      number: '02',
      tagline: 'TECHNICAL · ON-PAGE · LOCAL · CONTENT',
      title: 'SEO + LOCAL SEO',
      desc: 'Technical foundations, useful service pages and local visibility work designed for people and search engines.',
      link: '#seo-local',
    },
    {
      number: '03',
      tagline: 'GOOGLE SEARCH · META · TESTING · OPTIMISATION',
      title: 'GOOGLE ADS + META ADS',
      desc: 'Search and social campaigns with clear platform strategy, creative testing and ongoing optimisation around useful business actions.',
      isAdService: true,
      link: '#performance',
    },
    {
      number: '04',
      tagline: 'JOURNEY · LANDING · HANDOFF · MEASUREMENT',
      title: 'LEAD GENERATION',
      desc: 'Connect the ad, landing experience, WhatsApp handoff and follow-up into one clearer enquiry path.',
      link: '#lead-systems',
    },
    {
      number: '05',
      tagline: 'POSITIONING · CONTENT · CHANNEL PLANNING',
      title: 'SOCIAL MEDIA + CONTENT',
      desc: 'Build a recognisable voice, visual direction and content rhythm instead of another disconnected feed.',
      link: '#brand-social',
    },
    {
      number: '06',
      tagline: 'POSITIONING · MESSAGE · VISUAL DIRECTION',
      title: 'BRAND STRATEGY',
      desc: 'Clarify the offer, message and visual direction so the business becomes easier to recognise and choose.',
      link: '#brand-strategy',
    },
  ];

  const pricingPlans = [
    {
      tag: 'STARTER GROWTH',
      title: 'ESSENTIALS PLAN',
      price: '₹15,000',
      period: '/ month',
      popular: false,
      features: [
        'High-converting landing page',
        'Google Business & Local SEO',
        'Basic Meta / Social ads setup',
        'Direct founder strategy & support',
      ],
    },
    {
      tag: 'MOST POPULAR',
      title: 'GROWTH ENGINE',
      price: '₹35,000',
      period: '/ month',
      popular: true,
      features: [
        'Custom high-performance web architecture',
        'Google Ads + Meta Ads campaigns',
        'Full technical & local search SEO',
        'WhatsApp lead automation & funnels',
      ],
    },
    {
      tag: 'FULL SCALE',
      title: 'SCALE SYSTEM',
      price: '₹65,000',
      period: '/ month',
      popular: false,
      features: [
        'Multi-page custom identity & motion',
        'Omnichannel search & paid acquisition',
        'Dominant organic SEO & content system',
        'Dedicated senior growth team access',
      ],
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-blue-900/30 space-y-12 sm:space-y-16">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-8 lg:mb-16">
        <div className="lg:col-span-8 space-y-2 sm:space-y-3">
          <p className="text-[10px] sm:text-xs font-mono text-blue-400 tracking-widest uppercase">
            01 / CORE SERVICES
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] text-white uppercase">
            WEBSITES.<br />
            MARKETING.<br />
            <span className="text-blue-500">SEARCH.</span>
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
            Choose a focused service or combine the disciplines needed to make your business clearer, easier to find and easier to contact.
          </p>
        </div>
      </div>

      {/* Services Grid: 2 columns on Mobile (grid-cols-2) */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-2.5 sm:gap-6">
        {services.map((svc, idx) => (
          <div
            key={idx}
            className="group bg-[#050B14] border border-blue-900/50 hover:border-blue-500/80 rounded-xl sm:rounded-2xl p-3 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 relative"
          >
            {/* Top row */}
            <div className="flex items-center justify-between gap-1">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="w-6 h-6 sm:w-10 sm:h-10 rounded-full border border-blue-800/60 bg-blue-950/40 flex items-center justify-center font-mono text-[9px] sm:text-xs font-bold text-blue-400 shrink-0">
                  {svc.number}
                </span>
                {svc.isAdService && (
                  <div className="hidden sm:flex items-center gap-1.5 bg-blue-950/80 border border-blue-800/50 px-2.5 py-1 rounded-full text-[9px] font-mono text-blue-300">
                    <span>GOOGLE ADS</span>
                    <span>•</span>
                    <span>META ADS</span>
                  </div>
                )}
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-blue-900 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all shrink-0">
                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </div>

            {/* Content */}
            <div className="my-2 sm:my-6 space-y-1 sm:space-y-3">
              <p className="text-[7.5px] sm:text-[10px] font-mono text-blue-400 tracking-wider uppercase truncate">
                {svc.tagline}
              </p>
              <h3 className="text-xs sm:text-2xl xl:text-3xl font-black tracking-tight text-white uppercase group-hover:text-blue-400 transition-colors leading-snug">
                {svc.title}
              </h3>
              <p className="text-slate-300 text-[9.5px] sm:text-sm leading-tight sm:leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                {svc.desc}
              </p>
            </div>

            {/* Bottom link */}
            <div className="border-t border-blue-900/40 pt-2 sm:pt-4 flex items-center justify-between text-[8.5px] sm:text-xs font-mono text-slate-400 group-hover:text-blue-400">
              <span>VIEW SERVICE</span>
              <ArrowUpRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
            </div>
          </div>
        ))}
      </div>

      {/* 3 PRICING CARDS SECTION (Replacing Footer CTA) */}
      <div className="pt-8 sm:pt-12 border-t border-blue-900/30 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-blue-900/40 pb-4">
          <div>
            <span className="text-[10px] sm:text-xs font-mono text-blue-400 bg-blue-950 border border-blue-800/50 px-2.5 py-1 rounded font-bold">
              TRANSPARENT PRICING
            </span>
            <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight mt-2">
              SIMPLE, CLEAR PACKAGES FOR EVERY STAGE
            </h3>
          </div>
          <p className="text-[10px] sm:text-xs text-slate-400 font-mono">
            No hidden costs · Fixed monthly retainers · Direct founder accountability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-6 transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-[#000B29] border-2 border-blue-500 shadow-xl shadow-blue-600/20'
                  : 'bg-[#050B14] border border-blue-900/50 hover:border-blue-500/60'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-4 bg-blue-600 text-white text-[9px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  MOST POPULAR
                </span>
              )}

              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono text-blue-400">
                  <span className="bg-blue-950/80 border border-blue-800/40 px-2 py-0.5 rounded font-bold uppercase">
                    {plan.tag}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">
                    {plan.title}
                  </h4>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-3xl sm:text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-xs font-mono text-slate-400">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-blue-900/40 text-xs text-slate-300 font-light">
                  {plan.features.map((ft, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{ft}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="#contact"
                className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-white hover:bg-slate-100 text-slate-950'
                }`}
              >
                CHOOSE THIS PLAN <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
