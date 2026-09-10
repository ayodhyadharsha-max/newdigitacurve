'use client';

import { ArrowUpRight } from 'lucide-react';

export default function RosterPulse() {
  const brandTiles = [
    {
      name: 'Blinkit / Grofers',
      logoImg: '/brand-roster/blinkit.svg',
    },
    {
      name: 'Starbucks',
      logoImg: '/brand-roster/starbucks.svg',
    },
    {
      name: 'Burger King',
      logoImg: '/brand-roster/burger-king.svg',
    },
    {
      name: 'Ola Electric',
      logoImg: '/brand-roster/ola.png',
    },
    {
      name: 'Bajaj Finserv',
      logoImg: '/brand-roster/bajaj.png',
    },
    {
      name: 'Tata Capital',
      logoImg: '/brand-roster/tata-capital.svg',
    },
    {
      name: 'Bewakoof',
      logoImg: '/brand-roster/bewakoof.svg',
    },
    {
      name: 'SHEIN India',
      logoImg: '/brand-roster/shein.png',
    },
    {
      name: 'Glenary’s',
      logoImg: '/brand-roster/glenarys.svg',
    },
    {
      name: 'Glen’s Bakehouse',
      logoImg: '/brand-roster/glens-bakehouse.svg',
    },
  ];

  return (
    <section className="py-16 bg-[#000B29]/60 border-b border-blue-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-blue-400 bg-blue-950 border border-blue-800/50 px-3 py-1 rounded-full">
            44 IDENTITIES
          </span>
          <h2 className="text-xs font-mono text-slate-400 tracking-wider uppercase mt-2">
            HOSPITALITY · BEAUTY · REAL ESTATE · HEALTHCARE
          </h2>
        </div>
        <div className="text-xs font-mono text-slate-500">
          MD—BRAND ROSTER TICKER
        </div>
      </div>

      {/* Auto-sliding Marquee with Image Logo Cards */}
      <div className="flex w-max animate-marquee space-x-6 py-4">
        {[...brandTiles, ...brandTiles, ...brandTiles].map((brand, idx) => (
          <div
            key={idx}
            className="w-64 h-40 bg-white rounded-2xl p-4 flex flex-col justify-between shadow-2xl hover:scale-105 transition-transform duration-300 group cursor-pointer border border-slate-200 shrink-0"
          >
            {/* Top Real Image Logo Display */}
            <div className="flex-1 flex items-center justify-center p-2 bg-slate-900 rounded-xl overflow-hidden">
              <img
                src={brand.logoImg}
                alt={brand.name}
                className="max-h-16 max-w-full object-contain"
              />
            </div>

            {/* Bottom Title & Arrow */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold text-slate-900 font-sans">
              <span>{brand.name}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
