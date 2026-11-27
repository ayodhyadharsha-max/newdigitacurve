'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      number: '01',
      tagline: 'NEXT.JS · WORDPRESS · CUSTOM CODE · WEB DESIGN',
      title: 'WEBSITE DEVELOPMENT COMPANY',
      desc: 'Top-tier web development agency India building sub-0.8s Next.js portals, WordPress website development, enterprise web architecture and high-converting landing pages.',
      link: '/web-development',
      badge: 'SPEED',
    },
    {
      number: '02',
      tagline: 'LOCAL 3-PACK · TECHNICAL AUDITS · GEO & AEO RANKINGS',
      title: 'SEO COMPANY INDIA & NEAR ME',
      desc: 'High-authority SEO services India and local Google Maps 3-Pack domination across Ahmedabad, Surat, Vadodara, Jaipur, Pune, Indore, Lucknow & Delhi NCR for predictable organic buyer traffic.',
      link: '/blog/seo-company-digital-marketing-agency-near-me-2026-guide',
      badge: 'RANK #1',
    },
    {
      number: '03',
      tagline: 'SEARCH PPC · META ADS AGENCY · ROAS SCALING',
      title: 'GOOGLE ADS AGENCY & PPC MANAGEMENT',
      desc: 'Hire Google Ads expert with certified Google Ads management services and high-converting Meta & Facebook ads agency campaigns focused on maximizing qualified inbound pipeline.',
      isAdService: true,
      link: '/blog/google-ads-management-services-meta-ads-agency-guide',
      badge: 'CERTIFIED PPC',
    },
    {
      number: '04',
      tagline: 'CREATOR ROSTER · BRAND COLLABORATIONS · VIRAL CAMPAIGNS',
      title: 'INFLUENCER MARKETING AGENCY INDIA',
      desc: 'India’s premier influencer agency and brand collaboration agency pairing hyper-engaged tier-1 to micro creators with viral performance tracking and creator management.',
      link: '/blog/influencer-marketing-agency-india-guide',
      badge: 'CREATOR NETWORK',
    },
    {
      number: '05',
      tagline: 'INSTAGRAM · REELS · FACEBOOK ADS · VIRAL ENGAGEMENT',
      title: 'SOCIAL MEDIA MARKETING AGENCY',
      desc: 'Full-service social media management company and Instagram marketing agency delivering bespoke content, community handling and high-converting Reels across top Indian commercial hubs.',
      link: '/blog/social-media-marketing-agency-india-guide',
      badge: 'ORGANIC + PAID',
    },
    {
      number: '06',
      tagline: 'PIPELINE ACCELERATION · WHATSAPP FUNNELS · CAC REDUCTION',
      title: 'LEAD GENERATION AGENCY INDIA',
      desc: 'Data-driven lead generation company and performance marketing agency connecting high-intent paid traffic, instant WhatsApp response funnels and automated CRM sales routing.',
      link: '/performance-marketing',
      badge: 'B2B & B2C',
    },
    {
      number: '07',
      tagline: 'SHOPIFY PLUS · WOOCOMMERCE · CHECKOUT UX · ECOMMERCE',
      title: 'SHOPIFY DEVELOPMENT COMPANY',
      desc: 'Full-funnel ecommerce website development company India building ultra-fast Shopify website development, headless storefronts and frictionless buyer checkout journeys.',
      link: '/blog/shopify-wordpress-website-development-india',
      badge: 'HIGH CONVERSION',
    },
    {
      number: '08',
      tagline: 'AHMEDABAD · SURAT · JAIPUR · PUNE · INDORE · LUCKNOW',
      title: 'DIGITAL MARKETING COMPANY INDIA',
      desc: 'Full-suite digital marketing agency near me offering end-to-end multi-channel acquisition, conversion rate optimization and verified regional market penetration across India.',
      link: '/digital-marketing',
      badge: 'PAN-INDIA',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200 relative overflow-hidden">
      {/* Liquid Ambient Background Blobs */}
      <div className="liquid-blob w-72 sm:w-96 h-72 sm:h-96 bg-blue-400/25 top-20 -left-20 animate-liquid-float" />
      <div className="liquid-blob w-72 sm:w-96 h-72 sm:h-96 bg-indigo-300/20 bottom-10 -right-20 animate-liquid-float-slow" />

      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-12 lg:mb-16 relative z-10">
        <div className="lg:col-span-8 space-y-3">
          <p className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">
            01 / COMPREHENSIVE SERVICE SUITE
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] text-slate-950 uppercase">
            WEBSITES.<br />
            MARKETING.<br />
            <span className="text-blue-600">GROWTH.</span>
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
            Targeted service disciplines engineered to make your business visible across search engines, social platforms, and regional Indian buyer markets.
          </p>
        </div>
      </div>

      {/* Services Grid (2 Columns on Mobile, 2 Columns on Desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
        {services.map((svc, idx) => (
          <Link
            key={idx}
            href={svc.link}
            className="group liquid-glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-between min-h-[240px] sm:min-h-[300px] relative overflow-hidden hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full liquid-glass-pill flex items-center justify-center font-mono text-xs font-bold text-blue-600">
                  {svc.number}
                </span>
                {svc.badge && (
                  <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full text-[9px] font-mono text-blue-700 font-bold">
                    <span>{svc.badge}</span>
                  </div>
                )}
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Content */}
            <div className="my-3 sm:my-6 space-y-2 sm:space-y-3">
              <p className="text-[9px] sm:text-[11px] font-mono text-blue-600 font-bold tracking-wider uppercase truncate">
                {svc.tagline}
              </p>
              <h3 className="text-base sm:text-xl lg:text-2xl font-black tracking-tight text-slate-950 uppercase group-hover:text-blue-600 transition-colors leading-snug">
                {svc.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                {svc.desc}
              </p>
            </div>

            {/* Bottom link */}
            <div className="border-t border-slate-100 pt-3 sm:pt-4 flex items-center justify-between text-[10px] sm:text-xs font-mono text-slate-500 group-hover:text-blue-600 font-bold">
              <span>EXPLORE CAPABILITIES</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </div>
          </Link>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-12 sm:mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="text-xs font-mono text-slate-700 tracking-wider uppercase font-bold block">
            NEED A BESPOKE STRATEGY FOR YOUR REGION OR BRAND?
          </span>
          <span className="text-xs text-slate-500 font-light mt-0.5 block">
            Talk directly with Founder Rishabh Jaiswal (RJ) on WhatsApp: +91 93158 22996
          </span>
        </div>
        <Link
          href="https://wa.me/919315822996?text=Hi%20Rishabh%2C%20I%20am%20looking%20for%20digital%20marketing%20and%20web%20development%20growth%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md shadow-blue-500/20"
        >
          START DIRECT WHATSAPP BRIEF <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
