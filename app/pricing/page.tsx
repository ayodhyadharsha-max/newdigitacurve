import Link from 'next/link';
import { ArrowUpRight, Check, Zap, Sparkles, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Transparent Pricing & Packages | Digitacurve',
  description: 'Flexible, value-focused web development and digital marketing pricing packages designed for startups, SMEs, and growing enterprises.',
};

export default function PricingPage() {
  const plans = [
    {
      name: 'STARTER WEB',
      tagline: 'Ideal for small businesses needing a clean, high-speed digital presence.',
      price: '₹24,999',
      billing: 'one-time investment',
      highlighted: false,
      features: [
        '5 High-Converting Pages',
        'Next.js 14 & Tailwind Engine',
        '100% Mobile Responsive Layout',
        'Core Web Vitals Speed Tuning',
        'Google Maps & Contact Integration',
        'SSL Certificate & Security Setup',
        '1 Month Free Support',
      ],
    },
    {
      name: 'GROWTH SUITE',
      tagline: 'Complete custom web app + SEO foundation for ambitious brands.',
      price: '₹54,999',
      billing: 'one-time investment',
      highlighted: true,
      badge: 'MOST POPULAR',
      features: [
        'Up to 12 Custom Pages / Subpages',
        'Bespoke Dark / Modern UI Design',
        'Advanced Technical SEO Framework',
        'CMS Integration (Sanity / Strapi)',
        'CRM & Lead Form Automation',
        'WhatsApp Business Direct Connect',
        'Google Analytics & Event Tracking',
        '3 Months Priority Support',
      ],
    },
    {
      name: 'PERFORMANCE SCALE',
      tagline: 'Web engineering + full-funnel digital marketing & lead generation.',
      price: 'Custom',
      billing: 'monthly retainer / project scope',
      highlighted: false,
      features: [
        'Full Enterprise Web Engineering',
        'PPC Ad Management (Google + Meta)',
        'Comprehensive On-Page & Off-Page SEO',
        'Weekly Ad Copy & Banner Iterations',
        'Conversion Rate Optimization (CRO)',
        'Dedicated Growth Manager in Noida',
        '24/7 Slack / WhatsApp Direct Channel',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-600 selection:text-white">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-blue-900/30 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 font-mono text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase">
            SIMPLE, VALUE-DRIVEN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              PRICING TIERS.
            </span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            No hidden costs. Clear scope, deliverables, and high ROI engineered directly into every tier.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-[#000B29] border-2 border-blue-500 shadow-2xl shadow-blue-600/20 scale-105 z-10'
                  : 'bg-[#050B14] border border-blue-900/40 hover:border-blue-700/60'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-black tracking-widest px-4 py-1.5 rounded-full uppercase shadow-md">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black tracking-tight uppercase">{plan.name}</h3>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">{plan.tagline}</p>
                </div>

                <div className="border-t border-b border-blue-900/40 py-6">
                  <div className="text-4xl font-black text-white">{plan.price}</div>
                  <div className="text-xs font-mono text-blue-400 mt-1 uppercase">{plan.billing}</div>
                </div>

                <ul className="space-y-3 text-xs text-slate-300 font-light">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="/company/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 font-bold text-xs px-6 py-4 rounded-full transition-all ${
                    plan.highlighted
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-slate-900 border border-blue-900 hover:border-blue-500 text-white'
                  }`}
                >
                  SELECT PACKAGE <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Banner */}
      <section className="py-20 bg-[#000B29]/60 border-t border-b border-blue-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <ShieldCheck className="w-10 h-10 text-blue-400 mx-auto" />
          <h2 className="text-3xl font-black uppercase">NEED A CUSTOM TAILORED PROPOSAL?</h2>
          <p className="text-slate-300 text-sm">
            We build bespoke solutions for specialized business requirements, multi-city enterprises, and dynamic web applications.
          </p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-8 py-3.5 rounded-full"
          >
            GET CUSTOM QUOTE
          </Link>
        </div>
      </section>
    </div>
  );
}
