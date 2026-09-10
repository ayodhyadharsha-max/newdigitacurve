'use client';

import { X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  if (!isOpen) return null;

  const navLinks = [
    { number: '01', label: 'Home', href: '/' },
    { number: 'FR', label: 'Free Report', href: '#free-report' },
    { number: '02', label: 'Work', href: '#work' },
    { number: '03', label: 'Services', href: '#services' },
    { number: '04', label: 'Founder', href: '#founder' },
    { number: '05', label: 'About', href: '#about' },
    { number: '06', label: 'Contact', href: '#contact' },
    { number: '07', label: 'India', href: '#india' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#000B29]/95 backdrop-blur-xl flex flex-col justify-between p-6 md:p-12 text-white animate-in fade-in duration-300">
      {/* Header inside overlay */}
      <div className="flex items-center justify-between border-b border-blue-900/50 pb-6">
        <div className="text-xs tracking-widest text-blue-400 font-mono flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-black text-[10px] text-white">DC</span>
          DC—NAV / NOIDA BASE → INDIA
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-2 bg-blue-600/20 border border-blue-500/40 hover:bg-blue-600 px-4 py-2 rounded-full text-xs font-bold transition-all"
        >
          CLOSE <X className="w-4 h-4" />
        </button>
      </div>

      {/* Navigation Links Grid */}
      <nav className="my-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto w-full">
        {navLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            onClick={onClose}
            className="group flex items-center justify-between p-4 rounded-xl border border-blue-900/30 hover:border-blue-500/60 hover:bg-blue-900/20 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-blue-400 bg-blue-950/80 border border-blue-800/50 px-2 py-1 rounded">
                {link.number}
              </span>
              <span className="text-2xl md:text-3xl font-black tracking-tight group-hover:text-blue-400 transition-colors">
                {link.label}
              </span>
            </div>
            <ArrowUpRight className="w-6 h-6 text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </Link>
        ))}
      </nav>

      {/* Footer Links */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-blue-900/50 pt-6 text-xs text-slate-400 font-mono">
        <div>DIGITACURVE AGENCY © 2026 · NOIDA</div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 flex items-center gap-1 transition-colors"
          >
            INSTAGRAM <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href="https://wa.me/918302569311"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 flex items-center gap-1 transition-colors"
          >
            WHATSAPP <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
