'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function FreeReportFeature() {
  return (
    <section id="free-report" className="hidden lg:block py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-blue-900/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Copy Column */}
        <div className="lg:col-span-6 space-y-6">
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase">
            FREE / PERSONALISED / 5–7 MINUTES
          </p>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[0.95] text-white uppercase">
            KNOW WHAT YOUR<br />
            BUSINESS NEEDS<br />
            <span className="text-blue-500 italic font-light">NEXT.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg font-light">
            Answer focused questions and receive a private Digitacurve growth diagnostic—your readiness score, priority gaps, channel plan and a practical 30-day roadmap.
          </p>

          <div className="pt-2">
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-full shadow-xl shadow-blue-600/40 transition-all active:scale-95"
            >
              GET FREE AUDIT &amp; PICK PLAN <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-[10px] sm:text-xs font-mono text-slate-500">
            Saved securely to your account · sent to your verified email
          </p>
        </div>

        {/* Right Column - Diagnostic Report Graphic Card */}
        <div className="lg:col-span-6">
          <div className="bg-[#050B14] border border-blue-900/70 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-blue-500/80 transition-all duration-500">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-blue-900/50 pb-4 text-[10px] font-mono text-slate-400">
              <span className="text-blue-400 truncate">DIGITACURVE / BUSINESS DIAGNOSTIC</span>
              <span className="flex items-center gap-1 text-slate-300 shrink-0">
                PRIVATE REPORT <ArrowUpRight className="w-3 h-3 text-blue-400" />
              </span>
            </div>

            {/* Score Display */}
            <div className="my-6 sm:my-8 flex items-baseline gap-3">
              <span className="text-6xl sm:text-7xl font-black text-white tracking-tighter">68</span>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-blue-400">/100</span>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  DIGITAL READINESS
                </span>
              </div>
            </div>

            {/* Headline */}
            <h3 className="text-xl sm:text-3xl font-black text-white leading-tight uppercase mb-6 sm:mb-8">
              SOLID BASE.<br />
              <span className="text-blue-400">DISCONNECTED EXECUTION.</span>
            </h3>

            {/* Diagnostic Progress Bars */}
            <div className="space-y-4 font-mono text-xs mb-6 sm:mb-8">
              <div>
                <div className="flex justify-between mb-1.5 text-slate-300 text-[11px]">
                  <span>POSITIONING</span>
                  <span className="text-blue-400">74%</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full w-[74%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1.5 text-slate-300 text-[11px]">
                  <span>CONVERSION</span>
                  <span className="text-blue-400">48%</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full w-[48%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1.5 text-slate-300 text-[11px]">
                  <span>SEARCH</span>
                  <span className="text-blue-400">57%</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full w-[57%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1.5 text-slate-300 text-[11px]">
                  <span>DEMAND</span>
                  <span className="text-blue-400">62%</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full w-[62%]" />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-blue-900/50 pt-4 flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400">01 / PRIORITY</span>
              <span className="text-blue-400 font-bold flex items-center gap-1">
                REBUILD CONVERSION PATH <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
