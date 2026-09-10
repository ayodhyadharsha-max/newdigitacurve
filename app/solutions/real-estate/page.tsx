import Link from 'next/link';
import { ArrowUpRight, Building2, Key, Users, Layers, ShieldCheck, PhoneCall } from 'lucide-react';

export const metadata = {
  title: 'Real Estate Digital Solutions | Digitacurve',
  description: 'High-converting real estate websites, property showcase portals, lead capture systems, and CRM integrations for developers and agencies.',
};

export default function RealEstateSolutionPage() {
  const features = [
    {
      icon: Building2,
      title: 'Property Showcase Portals',
      desc: 'Interactive property listings, floor plan viewers, virtual tour embeds, and high-resolution photo galleries.',
    },
    {
      icon: Key,
      title: 'High-Intent Lead Capture',
      desc: 'Smart lead capture forms, WhatsApp quick connect buttons, and instant brochure downloads.',
    },
    {
      icon: Users,
      title: 'CRM & Lead Distribution',
      desc: 'Automatic routing of site leads straight to Salesforce, HubSpot, Zoho, or Google Sheets for sales follow-ups.',
    },
    {
      icon: Layers,
      title: 'Google & Meta Ads Funnels',
      desc: 'Hyper-targeted ad campaigns targeting property buyers and investors in specific micro-markets and cities.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-600 selection:text-white">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 font-mono text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              <span>INDUSTRY SOLUTION / REAL ESTATE</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase">
              REAL ESTATE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                GROWTH ENGINE.
              </span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed">
              Supercharge your property sales with custom real estate websites, high-converting landing pages, and automated buyer lead capture funnels.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
              >
                REQUEST REAL ESTATE DEMO <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-blue-900/30">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase">TAILORED FEATURES</p>
          <h2 className="text-4xl font-black tracking-tight uppercase">BUILT FOR REAL ESTATE DEVELOPERS & BROKERS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl bg-[#050B14] border border-blue-900/40 hover:border-blue-500/60 transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800/50 flex items-center justify-center text-blue-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 text-center bg-gradient-to-b from-[#050B14] to-[#030712]">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-black uppercase">LAUNCH YOUR REAL ESTATE PORTAL</h2>
          <p className="text-slate-300 text-sm">Partner with Digitacurve to get a property portal that converts site traffic into qualified buyer inquiries.</p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-9 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            CONTACT REAL ESTATE TEAM <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
