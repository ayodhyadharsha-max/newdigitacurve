import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Target, Search, BarChart3, Share2, Megaphone, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Digital Marketing Agency & SEO Company | Google & Meta Ads',
  description: 'Digitacurve is a premier digital marketing agency and SEO company providing technical SEO, Google Ads, Meta Ads, and performance lead generation.',
  alternates: {
    canonical: 'https://www.digitacurve.com/digital-marketing',
  },
};

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      desc: 'Technical SEO audits, high-intent keyword strategies, quality backlink building, and local SEO to dominate Google search results.',
    },
    {
      icon: Target,
      title: 'Pay-Per-Click (PPC) Advertising',
      desc: 'Google Ads & Meta Ads management structured to minimize cost-per-acquisition (CPA) and maximize ROAS.',
    },
    {
      icon: Share2,
      title: 'Social Media Management & Growth',
      desc: 'Content creation, graphic design, motion visual assets, and community management across Instagram, LinkedIn, and Facebook.',
    },
    {
      icon: BarChart3,
      title: 'Conversion Rate Optimization (CRO)',
      desc: 'Data-driven landing page optimization, heatmaps analysis, A/B copy testing, and user-flow friction reduction.',
    },
    {
      icon: Megaphone,
      title: 'Brand Positioning & Strategy',
      desc: 'Crafting compelling brand identities, taglines, positioning frameworks, and go-to-market strategies.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics & Reporting',
      desc: 'Transparent monthly reporting, real-time lead tracking, and clear ROI metrics delivered directly to your inbox.',
    },
  ];

  const highlights = [
    '3x Average Organic Traffic Growth',
    'Targeted Local & Pan-India Campaigns',
    'Data-Driven Lead Generation Funnels',
    'Custom Dashboards & Transparent ROI',
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-blue-900/30">
        <div className="absolute inset-0 bg-radial-at-c from-indigo-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 font-mono text-xs font-semibold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>CORE SERVICE / PERFORMANCE MARKETING</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase">
              GROWTH DRIVEN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                DIGITAL MARKETING.
              </span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed">
              We replace guesswork with high-converting marketing campaigns that capture high-intent leads, build brand dominance, and drive repeatable revenue.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
              >
                REQUEST AUDIT <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-slate-900 border border-blue-900 hover:border-blue-500 text-slate-200 font-bold text-sm px-8 py-4 rounded-full transition-all"
              >
                VIEW PACKAGES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-blue-900/30">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase">MARKETING CAPABILITIES</p>
          <h2 className="text-4xl font-black tracking-tight uppercase">SCALE YOUR BRAND WITH PRECISION</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#050B14] border border-blue-900/40 hover:border-blue-500/60 transition-all hover:-translate-y-1 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800/50 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Digitacurve Marketing */}
      <section className="py-20 bg-[#000B29]/60 border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xs font-mono text-blue-400 tracking-widest uppercase">THE DIGITACURVE ADVANTAGE</p>
              <h2 className="text-4xl font-black tracking-tight uppercase">NO WASTED AD SPEND. ONLY MEASURABLE RESULTS.</h2>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Many agencies focus on vanity metrics like impressions and clicks. At Digitacurve, we align every campaign with your bottom line — tracking cost per lead (CPL), conversion rate, and revenue generation.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#050B14] border border-blue-900/50 space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-blue-400" />
                  <div className="font-bold text-white text-sm">{h}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#050B14] to-[#030712] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-black tracking-tight uppercase">WANT TO DOMINATE YOUR MARKET SEARCH & ADS?</h2>
          <p className="text-slate-300 text-sm">
            Contact our Noida growth team today for a comprehensive audit of your digital marketing setup.
          </p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-9 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            TALK TO A GROWTH STRATEGIST <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
