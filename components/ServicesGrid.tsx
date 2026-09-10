'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      number: '01',
      tagline: 'STRATEGY · UX · DESIGN · DEVELOPMENT',
      title: 'WEBSITE DESIGN + DEVELOPMENT',
      desc: 'Responsive websites and landing pages that explain the offer, build confidence and make the next action obvious.',
      link: '/web-development',
    },
    {
      number: '02',
      tagline: 'TECHNICAL · ON-PAGE · LOCAL · CONTENT',
      title: 'SEO + LOCAL SEO',
      desc: 'Technical foundations, useful service pages and local visibility work designed for people and search engines.',
      link: '/digital-marketing',
    },
    {
      number: '03',
      tagline: 'GOOGLE SEARCH · META · TESTING · OPTIMISATION',
      title: 'GOOGLE ADS + META ADS',
      desc: 'Search and social campaigns with clear platform strategy, creative testing and ongoing optimisation around useful business actions.',
      isAdService: true,
      link: '/digital-marketing',
    },
    {
      number: '04',
      tagline: 'JOURNEY · LANDING · HANDOFF · MEASUREMENT',
      title: 'LEAD GENERATION',
      desc: 'Connect the ad, landing experience, WhatsApp handoff and follow-up into one clearer enquiry path.',
      link: '/digital-marketing',
    },
    {
      number: '05',
      tagline: 'POSITIONING · CONTENT · CHANNEL PLANNING',
      title: 'SOCIAL MEDIA + CONTENT',
      desc: 'Build a recognisable voice, visual direction and content rhythm instead of another disconnected feed.',
      link: '/digital-marketing',
    },
    {
      number: '06',
      tagline: 'POSITIONING · MESSAGE · VISUAL DIRECTION',
      title: 'BRAND STRATEGY',
      desc: 'Clarify the offer, message and visual direction so the business becomes easier to recognise and choose.',
      link: '/digital-marketing',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-blue-900/30">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-12 lg:mb-16">
        <div className="lg:col-span-8 space-y-3">
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase">
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

      {/* Services Grid (2 Columns on Mobile, 2 Columns on Desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-2.5 sm:gap-6">
        {services.map((svc, idx) => (
          <Link
            key={idx}
            href={svc.link}
            className="group bg-[#050B14] border border-blue-900/50 hover:border-blue-500/80 rounded-2xl p-3.5 sm:p-8 flex flex-col justify-between min-h-[230px] sm:min-h-[320px] transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 relative"
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-1">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="w-7 h-7 sm:w-10 sm:h-10 rounded-full border border-blue-800/60 bg-blue-950/40 flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold text-blue-400">
                  {svc.number}
                </span>
                {svc.isAdService && (
                  <div className="hidden sm:flex items-center gap-1.5 bg-blue-950/80 border border-blue-800/50 px-2.5 py-1 rounded-full text-[9px] font-mono text-blue-300">
                    <span>ADS</span>
                  </div>
                )}
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-blue-900 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all shrink-0">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>

            {/* Content */}
            <div className="my-2 sm:my-6 space-y-1 sm:space-y-3">
              <p className="text-[8px] sm:text-[10px] font-mono text-blue-400 tracking-wider uppercase truncate">
                {svc.tagline}
              </p>
              <h3 className="text-xs sm:text-2xl lg:text-3xl font-black tracking-tight text-white uppercase group-hover:text-blue-400 transition-colors leading-snug">
                {svc.title}
              </h3>
              <p className="text-slate-300 text-[10px] sm:text-sm leading-snug sm:leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                {svc.desc}
              </p>
            </div>

            {/* Bottom link */}
            <div className="border-t border-blue-900/40 pt-2 sm:pt-4 flex items-center justify-between text-[9px] sm:text-xs font-mono text-slate-400 group-hover:text-blue-400">
              <span className="truncate">VIEW DETAILS</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            </div>
          </Link>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-12 sm:mt-16 bg-[#000B29]/60 border border-blue-900/50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <span className="text-xs font-mono text-slate-300 tracking-wider uppercase">
          NOT SURE WHERE TO START?
        </span>
        <Link
          href="/company/contact"
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all active:scale-95"
        >
          BUILD A 60-SECOND BRIEF <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
