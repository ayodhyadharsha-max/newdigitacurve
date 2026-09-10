'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Plus } from 'lucide-react';
import NavigationMenu from './NavigationMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#000B29]/90 backdrop-blur-md border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo - DIGITACURVE */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-black text-white shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform tracking-tighter">
              DC
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white flex items-center gap-1">
                DIGITA<span className="text-blue-500 font-light italic">CURVE</span>
              </span>
              <span className="text-[9px] font-mono text-slate-400 tracking-widest uppercase">
                Creative Growth Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider text-slate-300">
            <Link href="#free-report" className="hover:text-blue-400 transition-colors">
              FREE AUDIT &amp; PLAN
            </Link>
            <Link href="#services" className="hover:text-blue-400 transition-colors">
              SERVICES
            </Link>
            <Link href="#work" className="hover:text-blue-400 transition-colors">
              WORK
            </Link>
            <Link href="#founder" className="hover:text-blue-400 transition-colors">
              FOUNDER
            </Link>
            <Link href="#about" className="hover:text-blue-400 transition-colors">
              ABOUT
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="#free-report"
              className="hidden sm:flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
            >
              FREE AUDIT &amp; PLAN <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-1.5 bg-slate-900 border border-blue-900/60 hover:border-blue-500 text-slate-200 text-xs font-mono font-bold px-4 py-2.5 rounded-full transition-all"
            >
              MENU <Plus className="w-3.5 h-3.5 text-blue-400" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-over Fullscreen Navigation Menu */}
      <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
