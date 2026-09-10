'use client';

import Link from 'next/link';
import { ArrowUpRight, Mail, Phone, Instagram, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030712] text-white border-t border-blue-900/40 relative overflow-hidden">
      {/* Upper CTA Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-blue-900/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-4">
            <p className="text-xs font-mono text-blue-400 tracking-widest uppercase">
              06 / CONTACT &amp; NEXT STEPS
            </p>
            <h2 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.9] uppercase">
              READY WHEN THE<br />
              <span className="text-blue-500 italic font-light">PROBLEM IS.</span>
            </h2>
            <p className="text-slate-300 text-base max-w-xl font-light leading-relaxed">
              If your current website, search ranking or paid campaigns are not delivering clear business signals, let’s audit your setup.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-9 py-5 rounded-full shadow-2xl shadow-blue-600/40 transition-all hover:scale-105"
            >
              START A PROJECT <ArrowUpRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/918302569311"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3.5 rounded-full transition-all"
            >
              CHAT ON WHATSAPP <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Contact Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1 - Studio Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-black text-white shadow-lg shadow-blue-600/30">
                DC
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-white">
                  DIGITA<span className="text-blue-500 font-light italic">CURVE</span>
                </span>
                <span className="text-[9px] font-mono text-slate-400 tracking-widest uppercase">
                  Creative Growth Studio
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-light">
              Website + Digital Marketing Agency based in Noida, serving brands and businesses across India.
            </p>
            <div className="text-xs font-mono text-blue-400">
              NOIDA BASE → PAN-INDIA COVERAGE
            </div>
          </div>

          {/* Col 2 - Quick Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono text-slate-400 tracking-widest uppercase">
              NAVIGATION
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li>
                <Link href="#services" className="hover:text-blue-400 transition-colors">
                  01 Core Services
                </Link>
              </li>
              <li>
                <Link href="#free-report" className="hover:text-blue-400 transition-colors">
                  02 Free Diagnostic Report
                </Link>
              </li>
              <li>
                <Link href="#work" className="hover:text-blue-400 transition-colors">
                  03 Brand Roster &amp; Work
                </Link>
              </li>
              <li>
                <Link href="#founder" className="hover:text-blue-400 transition-colors">
                  04 Founder &amp; Team
                </Link>
              </li>
              <li>
                <Link href="#india" className="hover:text-blue-400 transition-colors">
                  05 India City Coverage
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 - Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono text-slate-400 tracking-widest uppercase">
              DIRECT CHANNELS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <a
                href="mailto:contact@digitacurve.in"
                className="p-3 bg-[#050B14] border border-blue-900/40 hover:border-blue-500/80 rounded-xl flex items-center gap-3 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">EMAIL</div>
                  <div className="font-bold text-white text-[11px] truncate">contact@digitacurve.in</div>
                </div>
              </a>

              <a
                href="https://wa.me/918302569311"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#050B14] border border-blue-900/40 hover:border-blue-500/80 rounded-xl flex items-center gap-3 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-950 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">WHATSAPP</div>
                  <div className="font-bold text-white text-[11px]">+91 83025 69311</div>
                </div>
              </a>

              <a
                href="tel:+918302569311"
                className="p-3 bg-[#050B14] border border-blue-900/40 hover:border-blue-500/80 rounded-xl flex items-center gap-3 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">DIRECT CALL</div>
                  <div className="font-bold text-white text-[11px]">+91 83025 69311</div>
                </div>
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#050B14] border border-blue-900/40 hover:border-blue-500/80 rounded-xl flex items-center gap-3 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-pink-950 flex items-center justify-center text-pink-400 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">INSTAGRAM</div>
                  <div className="font-bold text-white text-[11px]">@digitacurve</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* GIANT FOOTER WATERMARK - DIGITACURVE */}
        <div className="pt-16 pb-4 overflow-hidden border-b border-blue-900/30">
          <h1 className="text-[15vw] font-black tracking-tighter leading-none text-slate-900/80 hover:text-blue-950 transition-colors uppercase select-none text-center">
            DIGITACURVE
          </h1>
        </div>

        {/* Bottom Copyright Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 DIGITACURVE · FOUNDER-LED STUDIO FROM NOIDA · SERVING ALL INDIA
          </div>
          <div className="flex items-center gap-4">
            <Link href="#privacy" className="hover:text-blue-400 transition-colors">
              PRIVACY POLICY
            </Link>
            <span>·</span>
            <Link href="#terms" className="hover:text-blue-400 transition-colors">
              TERMS OF SERVICE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
