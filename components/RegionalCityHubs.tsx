'use client';

import Link from 'next/link';
import { ArrowUpRight, MapPin, CheckCircle2 } from 'lucide-react';

export default function RegionalCityHubs() {
  const cityHubs = [
    {
      city: 'AHMEDABAD',
      state: 'GUJARAT',
      badge: 'COMMERCIAL HUB',
      keywords: [
        'Digital Marketing Agency Ahmedabad',
        'SEO Company Ahmedabad',
        'Social Media Marketing Agency Ahmedabad',
        'Website Development Company Ahmedabad',
        'Digital Marketing Company Ahmedabad',
      ],
      description:
        'Powering high-growth textile, chemical, D2C and manufacturing enterprises across Ahmedabad with sub-second websites, Google Maps 3-pack dominance, and localized digital marketing.',
      guideLink: '/blog/digital-marketing-agency-ahmedabad-surat-vadodara-guide',
      waMessage: 'Hi Rishabh, I need SEO, web development & digital marketing services in Ahmedabad.',
    },
    {
      city: 'SURAT',
      state: 'GUJARAT',
      badge: 'EXPORT & D2C',
      keywords: [
        'Digital Marketing Company Surat',
        'Social Media Marketing Agency Surat',
        'SEO Company Surat',
        'Website Development Company Surat',
        'Digital Marketing Agency Surat',
      ],
      description:
        'Helping Surat’s diamond, textile, jewellery and ecommerce titans scale revenue through performance marketing, custom Shopify website development, and Instagram Reels growth.',
      guideLink: '/blog/digital-marketing-agency-ahmedabad-surat-vadodara-guide',
      waMessage: 'Hi Rishabh, I am looking for digital marketing and web development in Surat.',
    },
    {
      city: 'VADODARA',
      state: 'GUJARAT',
      badge: 'INDUSTRIAL HUB',
      keywords: [
        'SEO Company Vadodara',
        'Digital Marketing Agency Vadodara',
        'B2B Lead Generation Agency',
        'Website Development Services',
      ],
      description:
        'Engineering B2B lead generation engines, technical SEO audits, and modern Next.js portals for engineering, pharma, and industrial leaders across Vadodara.',
      guideLink: '/blog/seo-company-jaipur-vadodara-indore-surat-guide',
      waMessage: 'Hi Rishabh, I need an SEO and digital marketing agency in Vadodara.',
    },
    {
      city: 'PUNE',
      state: 'MAHARASHTRA',
      badge: 'TECH & AUTO',
      keywords: [
        'Social Media Marketing Agency Pune',
        'Digital Marketing Agency Pune',
        'Digital Marketing Company Pune',
        'Website Development Company Pune',
      ],
      description:
        'Empowering Pune’s Hinjewadi IT corridor, automotive innovators, and D2C brands with scalable Next.js web applications, Meta ads agency strategies, and viral social campaigns.',
      guideLink: '/blog/digital-marketing-agency-pune-indore-lucknow-guide',
      waMessage: 'Hi Rishabh, I want to discuss web development and social media marketing in Pune.',
    },
    {
      city: 'JAIPUR',
      state: 'RAJASTHAN',
      badge: 'HERITAGE & EXPORT',
      keywords: [
        'Social Media Marketing Agency Jaipur',
        'SEO Company Jaipur',
        'Digital Marketing Agency Jaipur',
        'Website Development Company Jaipur',
        'Digital Marketing Company Jaipur',
      ],
      description:
        'Accelerating Jaipur’s luxury hospitality, gemstone exporters, apparel brands, and artisans with global SEO, Shopify ecommerce development, and influencer collaborations.',
      guideLink: '/blog/seo-company-jaipur-vadodara-indore-surat-guide',
      waMessage: 'Hi Rishabh, I need an SEO and social media agency in Jaipur.',
    },
    {
      city: 'INDORE',
      state: 'MADHYA PRADESH',
      badge: 'STARTUP & COMMERCE',
      keywords: [
        'SEO Company Indore',
        'Digital Marketing Agency Indore',
        'Digital Marketing Company Indore',
        'Website Development Company Indore',
      ],
      description:
        'Accelerating Indore’s Super Corridor startups, FMCG distributors, and food tech brands with high-conversion landing pages, local SEO 3-pack rankings, and certified Google Ads.',
      guideLink: '/blog/digital-marketing-agency-pune-indore-lucknow-guide',
      waMessage: 'Hi Rishabh, I need digital marketing and SEO services in Indore.',
    },
    {
      city: 'LUCKNOW',
      state: 'UTTAR PRADESH',
      badge: 'CAPITAL REGION',
      keywords: [
        'Digital Marketing Agency Lucknow',
        'Website Development Company Lucknow',
        'Digital Marketing Company Lucknow',
        'Lead Generation Company',
      ],
      description:
        'Empowering Lucknow healthcare providers, education institutions, real estate developments, and retail businesses with verified Google Ads management and modern web design.',
      guideLink: '/blog/digital-marketing-agency-pune-indore-lucknow-guide',
      waMessage: 'Hi Rishabh, I need a website development and digital marketing agency in Lucknow.',
    },
    {
      city: 'DELHI NCR & PAN-INDIA',
      state: 'NATIONAL & "NEAR ME"',
      badge: 'TOP NATIONAL AGENCY',
      keywords: [
        'Digital Marketing Agency Near Me',
        'SEO Company Near Me',
        'Google Ads Agency Near Me',
        'Website Development Company Near Me',
        'Influencer Marketing Agency Near Me',
      ],
      description:
        'Headquartered in Noida and operating across Delhi NCR, Gurugram, Mumbai, Bengaluru, and pan-India with sub-second speed, transparent pricing, and direct access to Founder RJ.',
      guideLink: '/blog/seo-company-digital-marketing-agency-near-me-2026-guide',
      waMessage: 'Hi Rishabh, I am searching for the best digital marketing & SEO agency near me.',
    },
  ];

  return (
    <section id="regional-hubs" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200 relative overflow-hidden">
      {/* Background glow */}
      <div className="liquid-blob w-80 h-80 bg-blue-500/15 top-1/3 -right-20 animate-liquid-float" />
      <div className="liquid-blob w-80 h-80 bg-emerald-400/10 bottom-10 -left-20 animate-liquid-float-slow" />

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-12 lg:mb-16 relative z-10">
        <div className="lg:col-span-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            02 / REGIONAL CITY HUBS & EXPANSION
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] text-slate-950 uppercase">
            COMMERCIAL CITY HUBS.<br />
            <span className="text-blue-600">PAN-INDIA DOMINANCE.</span>
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
            Dedicated digital growth, SEO, web development & influencer networks deployed specifically for India&apos;s fastest growing economic powerhouses.
          </p>
        </div>
      </div>

      {/* Regional Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
        {cityHubs.map((hub, idx) => (
          <div
            key={idx}
            className="liquid-glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group"
          >
            <div>
              {/* City Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-mono text-[9px] font-bold tracking-wide uppercase border border-blue-200">
                  {hub.badge}
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                  {hub.state}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors uppercase mb-2">
                {hub.city}
              </h3>

              <p className="text-slate-600 text-xs leading-relaxed font-light mb-4 line-clamp-3">
                {hub.description}
              </p>

              {/* Keyword Badges */}
              <div className="space-y-1.5 mb-5 border-t border-slate-100 pt-3">
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider block">
                  TARGETED CAPABILITIES:
                </span>
                {hub.keywords.slice(0, 3).map((kw, kidx) => (
                  <div key={kidx} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="truncate">{kw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <Link
                href={hub.guideLink}
                className="flex items-center justify-between text-xs font-mono font-bold text-blue-600 group-hover:text-blue-700"
              >
                <span>READ CITY BLUEPRINT</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href={`https://wa.me/919315822996?text=${encodeURIComponent(hub.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block text-[10px] font-mono font-bold bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 py-1.5 rounded-lg transition-colors"
              >
                TALK WITH RJ (+91 93158 22996)
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
