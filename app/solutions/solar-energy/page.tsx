import Link from 'next/link';
import { ArrowUpRight, Sun, Calculator, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Solar Energy Digital Solutions | Digitacurve',
  description: 'Solar company websites, ROI calculator widgets, high-converting solar lead generation landing pages, and PPC campaigns.',
};

export default function SolarEnergySolutionPage() {
  const features = [
    {
      icon: Calculator,
      title: 'Interactive Solar ROI Calculator',
      desc: 'Embeddable rooftop solar savings calculators that allow homeowners and businesses to calculate immediate electricity bill savings.',
    },
    {
      icon: Zap,
      title: 'Commercial & Residential Lead Funnels',
      desc: 'Optimized landing pages engineered specifically for rooftop solar installation inquiries and site survey requests.',
    },
    {
      icon: Sun,
      title: 'Government Subsidy Info Hub',
      desc: 'Educational landing pages outlining PM Surya Ghar solar subsidies and net-metering guidelines to build immediate consumer trust.',
    },
    {
      icon: TrendingUp,
      title: 'Hyper-Local Google & Meta Ads',
      desc: 'Geo-targeted ad campaigns focusing on high-electricity consumers and industrial rooftop solar decision makers.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-600 selection:text-white">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/80 border border-amber-800/60 text-amber-400 font-mono text-xs font-semibold">
              <Sun className="w-3.5 h-3.5" />
              <span>INDUSTRY SOLUTION / SOLAR ENERGY</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase">
              SOLAR ENERGY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400">
                LEAD PLATFORM.
              </span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed">
              Capture high-volume residential and commercial solar inquiries with interactive calculators and high-converting marketing funnels.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-amber-600/30 transition-all hover:scale-105"
              >
                BUILD SOLAR WEBPAGE <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-blue-900/30">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono text-amber-400 tracking-widest uppercase">SOLAR TOOLS &amp; MARKETING</p>
          <h2 className="text-4xl font-black tracking-tight uppercase">SCALE YOUR SOLAR INSTALLATION BUSINESS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl bg-[#050B14] border border-blue-900/40 hover:border-amber-500/60 transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-800/50 flex items-center justify-center text-amber-400">
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
          <h2 className="text-4xl font-black uppercase">START GENERATING SOLAR LEADS</h2>
          <p className="text-slate-300 text-sm">Empower your sales reps with qualified rooftop solar inquiries.</p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm px-9 py-4 rounded-full shadow-lg shadow-amber-600/30 transition-all hover:scale-105"
          >
            TALK TO SOLAR DIGITAL EXPERTS <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
