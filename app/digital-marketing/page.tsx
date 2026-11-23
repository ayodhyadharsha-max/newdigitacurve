import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Search, Target, BarChart3, Megaphone, Share2, CheckCircle2, Users, Sparkles, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Digital Marketing & SEO Agency Noida & India | Influencer, Google Ads & SMM',
  description: 'Top digital marketing agency, SEO company, Google Ads agency, and influencer marketing company in India. Driving qualified leads and measurable ROAS across Ahmedabad, Surat, Pune, Jaipur, Indore, Lucknow, and Delhi NCR.',
  keywords: [
    'influencer marketing agency',
    'influencer agency india',
    'influencer marketing agency india',
    'influencer management agency',
    'influencer marketing agency near me',
    'influencer marketing company',
    'brand collaboration agency',
    'content marketing agency',
    'social media marketing agency',
    'social media marketing agency ahmedabad',
    'social media marketing agency surat',
    'social media marketing agency jaipur',
    'social media marketing agency pune',
    'social media agency india',
    'social media marketing company india',
    'social media management services',
    'social media management company',
    'hire social media manager',
    'instagram marketing services',
    'instagram marketing agency',
    'instagram management services',
    'facebook marketing agency',
    'facebook ads agency',
    'social media marketing services',
    'digital marketing company',
    'digital marketing agency near me',
    'digital marketing services',
    'digital marketing company india',
    'digital marketing agency india',
    'online marketing agency india',
    'digital marketing agency ahmedabad',
    'digital marketing company ahmedabad',
    'digital marketing company surat',
    'digital marketing agency surat',
    'digital marketing agency vadodara',
    'digital marketing agency jaipur',
    'digital marketing company jaipur',
    'digital marketing agency pune',
    'digital marketing company pune',
    'digital marketing agency indore',
    'digital marketing company indore',
    'digital marketing agency lucknow',
    'digital marketing company lucknow',
    'seo services india',
    'seo company india',
    'seo company near me',
    'seo company ahmedabad',
    'seo company surat',
    'seo company vadodara',
    'seo company jaipur',
    'seo company indore',
    'google ads agency',
    'google ads agency near me',
    'google ads agency india',
    'google ads management services',
    'hire google ads expert',
    'meta ads agency',
    'lead generation agency',
    'lead generation company',
    'lead generation agency india',
    'performance marketing company',
    'performance marketing agency'
  ],
  alternates: {
    canonical: 'https://www.digitacurve.com/digital-marketing',
  },
};

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      desc: 'Technical SEO audits, keyword clusters, high-authority editorial backlinks, and local Google Maps 3-Pack optimization to rank #1 across India and targeted regional cities.',
    },
    {
      icon: Target,
      title: 'Google Ads & Certified PPC Management',
      desc: 'High-intent Google Search, Performance Max, and YouTube ad campaigns focused on minimum Cost Per Lead (CPL), strict negative keyword pruning, and high conversion quality.',
    },
    {
      icon: Megaphone,
      title: 'Meta Ads (Instagram & Facebook)',
      desc: 'High-ROAS acquisition funnels, video ad creative testing, custom audience lookalikes, and Server-Side Meta CAPI tracking to bypass iOS privacy restrictions.',
    },
    {
      icon: Users,
      title: 'Influencer Marketing & Brand Collaborations',
      desc: 'Curated creator discovery, micro/macro influencer activations, contract whitelisting, and viral UGC content engineered for verified sales and brand authority.',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing & Management (SMM)',
      desc: 'Bespoke Instagram & Facebook management, high-retention Reels, community moderation, and dedicated social media managers for growth-focused brands.',
    },
    {
      icon: BarChart3,
      title: 'Lead Generation & Performance Marketing',
      desc: 'Accountable customer acquisition systems with sub-second landing pages, conversion rate optimization (CRO), and instant automated WhatsApp CRM routing (<60s response).',
    },
  ];

  const regionalHubs = [
    { city: 'Ahmedabad', tag: 'Gujarat Hub', desc: 'Digital marketing agency ahmedabad, social media marketing agency ahmedabad, seo company ahmedabad.' },
    { city: 'Surat', tag: 'Commercial Capital', desc: 'Digital marketing company surat, social media marketing agency surat, seo company surat.' },
    { city: 'Vadodara', tag: 'Industrial Corridor', desc: 'Digital marketing agency vadodara, seo company vadodara, online marketing agency india.' },
    { city: 'Pune', tag: 'Tech & Manufacturing', desc: 'Digital marketing agency pune, social media marketing agency pune, performance marketing company.' },
    { city: 'Jaipur', tag: 'Tourism & Retail Hub', desc: 'Digital marketing agency jaipur, social media marketing agency jaipur, seo company jaipur.' },
    { city: 'Indore', tag: 'Central India Hub', desc: 'Digital marketing agency indore, digital marketing company indore, seo company indore.' },
    { city: 'Lucknow', tag: 'UP Growth Corridor', desc: 'Digital marketing agency lucknow, digital marketing company lucknow, lead generation company.' },
    { city: 'Delhi NCR', tag: 'Headquarters', desc: 'Noida, Gurugram, and South Delhi full-stack engineering, paid acquisition, and local SEO.' },
  ];

  const highlights = [
    'Zero Vanity Metrics — Focus on Verified Leads & Revenue',
    'Dedicated Senior Campaign & Ad Strategist',
    'Sub-Second High Converting Landing Pages (Next.js 15)',
    '1-Click WhatsApp Lead Routing (<60s Response)',
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-mono text-xs font-bold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>CORE SERVICE / PERFORMANCE & DIGITAL MARKETING</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase text-slate-900">
              GROWTH DRIVEN <br />
              <span className="text-blue-600 italic">
                DIGITAL MARKETING.
              </span>
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed">
              We replace guesswork with high-converting marketing campaigns that capture high-intent leads, build brand dominance, and drive repeatable revenue across India.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
              >
                REQUEST AUDIT <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-900 text-slate-900 font-bold text-sm px-8 py-4 rounded-full transition-all"
              >
                VIEW PACKAGES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">MARKETING & CREATOR CAPABILITIES</p>
          <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">SCALE YOUR BRAND WITH PRECISION</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 transition-all hover:-translate-y-1 space-y-4 group shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Regional Growth Corridors Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold">
              <MapPin className="w-3.5 h-3.5" />
              <span>PAN-INDIA REGIONAL HUBS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-slate-900">
              SERVING CLIENTS ACROSS INDIA’S LEADING COMMERCIAL HUBS
            </h2>
            <p className="text-slate-600 text-sm">
              Tailored local SEO, influencer marketing, Google Ads, and social media campaigns engineered for your specific regional market demographics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {regionalHubs.map((hub, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:border-blue-500 transition-all">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">{hub.city}</h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-600 font-semibold">{hub.tag}</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed font-light">{hub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Digitacurve Marketing */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">THE DIGITACURVE ADVANTAGE</p>
              <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">NO WASTED AD SPEND. ONLY MEASURABLE RESULTS.</h2>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Many agencies focus on vanity metrics like impressions and clicks. At Digitacurve, we align every campaign with your bottom line — tracking cost per lead (CPL), conversion rate, and revenue generation.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  <div className="font-bold text-slate-900 text-sm">{h}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">WANT TO DOMINATE YOUR MARKET SEARCH &amp; ADS?</h2>
          <p className="text-slate-600 text-sm font-light">
            Contact our growth team today for a comprehensive audit of your digital marketing and SEO setup.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/company/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-9 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
            >
              TALK TO A GROWTH STRATEGIST <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919315822996?text=Hi%20Digitacurve%2C%20I%20want%20to%20discuss%20Digital%20Marketing%20and%20SEO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
            >
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
