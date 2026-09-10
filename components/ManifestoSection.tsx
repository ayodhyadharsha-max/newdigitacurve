'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ManifestoSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-blue-900/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column - Founder Card */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <div className="bg-[#050B14] border border-blue-900/60 rounded-3xl p-8 shadow-2xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border-2 border-blue-400 flex items-center justify-center font-black text-xl text-white shadow-xl shadow-blue-600/30">
                RJ
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  RISHABH JAISWAL
                </h3>
                <p className="text-xs font-mono text-blue-400 uppercase">
                  FOUNDER &amp; STRATEGY LEAD
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed font-light border-t border-blue-900/40 pt-4">
              Digitacurve is a founder-led digital studio based in Noida. We work directly with business owners to build high-performance websites, search visibility and paid growth campaigns without middleman noise.
            </p>

            <div className="border-t border-blue-900/40 pt-4 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex justify-between">
                <span>LOCATION:</span>
                <span className="text-white font-bold">NOIDA, INDIA</span>
              </div>
              <div className="flex justify-between">
                <span>DIRECT ACCESS:</span>
                <span className="text-blue-400 font-bold">YES</span>
              </div>
            </div>

            <Link
              href="/company/contact"
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3.5 rounded-full transition-all"
            >
              TALK TO RISHABH <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column - 3 Strategy Principles */}
        <div className="lg:col-span-8 space-y-12" id="founder">
          <div className="space-y-4">
            <p className="text-xs font-mono text-blue-400 tracking-widest uppercase">
              OUR APPROACH / DIGITACURVE MANIFESTO
            </p>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[0.95] text-white uppercase">
              CLEARER MESSAGE.<br />
              BETTER VISIBILITY.<br />
              <span className="text-blue-500 italic font-light">MORE USEFUL ACTION.</span>
            </h2>
          </div>

          <div className="space-y-8 font-sans">
            {/* Principle 01 */}
            <div className="bg-[#050B14] border border-blue-900/40 p-8 rounded-2xl space-y-3 hover:border-blue-500/60 transition-all">
              <span className="text-xs font-mono text-blue-400 font-bold">CHAPTER 01</span>
              <h3 className="text-2xl font-black text-white uppercase">
                1. CLARITY BEFORE CREATIVE FLUFF.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Fancy animations and trendy buzzwords mean nothing if a customer cannot figure out what you sell in 3 seconds. We start with positioning and message clarity before writing a line of code.
              </p>
            </div>

            {/* Principle 02 */}
            <div className="bg-[#050B14] border border-blue-900/40 p-8 rounded-2xl space-y-3 hover:border-blue-500/60 transition-all">
              <span className="text-xs font-mono text-blue-400 font-bold">CHAPTER 02</span>
              <h3 className="text-2xl font-black text-white uppercase">
                2. ONE CONNECTED GROWTH SYSTEM.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                SEO without a high-converting website wastes search traffic. Ads without a clear landing page waste budget. Digitacurve connects design, search, paid media and WhatsApp into one clear path.
              </p>
            </div>

            {/* Principle 03 */}
            <div className="bg-[#050B14] border border-blue-900/40 p-8 rounded-2xl space-y-3 hover:border-blue-500/60 transition-all">
              <span className="text-xs font-mono text-blue-400 font-bold">CHAPTER 03</span>
              <h3 className="text-2xl font-black text-white uppercase">
                3. DIRECT FOUNDER RESPONSIBILITY.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                No junior account managers passing messages back and forth. You work directly with Rishabh Jaiswal and senior strategist engineers who understand business outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
