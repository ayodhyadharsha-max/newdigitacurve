import Link from 'next/link';
import { ArrowUpRight, Plane, Compass, MapPin, Globe, CreditCard } from 'lucide-react';

export const metadata = {
  title: 'Travel & Tourism Digital Marketing & Booking Systems',
  description: 'From luxury domestic holiday packages to international flight booking engines, Digitacurve builds travel booking portals & lead engines.',
  alternates: {
    canonical: 'https://www.digitacurve.com/solutions/travel-tourism',
  },
};

export default function TravelTourismSolutionPage() {
  const features = [
    {
      icon: Compass,
      title: 'Tour Package Catalog',
      desc: 'Dynamic holiday itineraries, package filtering by duration/budget, interactive maps, and photo galleries.',
    },
    {
      icon: CreditCard,
      title: 'Booking & Payment Gateway',
      desc: 'Seamless booking inquiry checkout with online payment gateway integrations (Razorpay, UPI, Credit Cards).',
    },
    {
      icon: MapPin,
      title: 'Destination Landing Pages',
      desc: 'SEO-rich landing pages for top domestic and international travel destinations to capture high-intent searchers.',
    },
    {
      icon: Globe,
      title: 'Global Performance Marketing',
      desc: 'Targeted PPC campaigns designed to capture seasonal holiday bookings, honeymooners, and corporate retreats.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-600 selection:text-white">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 font-mono text-xs font-semibold">
              <Plane className="w-3.5 h-3.5" />
              <span>INDUSTRY SOLUTION / TRAVEL &amp; TOURISM</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase">
              TRAVEL &amp; TOURISM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                BOOKING ENGINES.
              </span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed">
              Transform your travel agency with automated booking workflows, stunning itinerary pages, and targeted traveler lead funnels.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-cyan-600/30 transition-all hover:scale-105"
              >
                BUILD TRAVEL PLATFORM <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-blue-900/30">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase">FEATURES</p>
          <h2 className="text-4xl font-black tracking-tight uppercase">EVERYTHING YOUR TRAVEL AGENCY NEEDS TO SCALE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl bg-[#050B14] border border-blue-900/40 hover:border-cyan-500/60 transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
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
          <h2 className="text-4xl font-black uppercase">READY TO INCREASE TOUR BOOKINGS?</h2>
          <p className="text-slate-300 text-sm">Get in touch with Digitacurve to upgrade your travel portal today.</p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm px-9 py-4 rounded-full shadow-lg shadow-cyan-600/30 transition-all hover:scale-105"
          >
            GET STARTED NOW <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
