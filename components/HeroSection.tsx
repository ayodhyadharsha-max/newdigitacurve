'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const playVideos = () => {
      [videoRef.current, mobileVideoRef.current].forEach((v) => {
        if (v) {
          v.defaultMuted = true;
          v.muted = true;
          v.play().catch(() => {});
        }
      });
    };

    playVideos();

    window.addEventListener('touchstart', playVideos, { passive: true });
    window.addEventListener('click', playVideos, { passive: true });

    return () => {
      window.removeEventListener('touchstart', playVideos);
      window.removeEventListener('click', playVideos);
    };
  }, []);

  return (
    <section className="relative bg-[#030712] overflow-hidden pt-2 pb-6 sm:py-8 lg:py-16 flex items-start lg:items-center min-h-0 lg:min-h-[90vh]">
      {/* DESKTOP BACKGROUND VIDEO (lg:block, Right Side 58%, original film) */}
      <div className="hidden lg:flex absolute top-0 right-0 w-[58%] h-full z-0 overflow-hidden items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-full h-full object-cover opacity-100"
        >
          <source src="/media/meet-digital-signal-film.mp4" type="video/mp4" />
        </video>

        {/* Blueprint Radar Gradient Overlay for Desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-transparent to-transparent z-10 pointer-events-none" />

        {/* DESKTOP ONLY System Nodes Overlay on Right Video */}
        <div className="flex absolute inset-0 p-8 flex-col justify-between z-10 pointer-events-none">
          <div className="flex justify-between items-center text-xs font-mono text-blue-400">
            <span className="bg-slate-950/80 px-3 py-1 rounded-full border border-blue-900/60 backdrop-blur-md">
              ONE CONNECTED SYSTEM
            </span>
            <span className="text-slate-400 text-[10px]">DIGITACURVE SIGNAL FILM</span>
          </div>

          {/* 4 Connected System Nodes */}
          <div className="grid grid-cols-2 gap-4 max-w-md ml-auto mr-4 my-auto">
            <div className="bg-[#000B29]/80 border border-blue-500/60 backdrop-blur-md p-4 rounded-xl space-y-1">
              <span className="text-[10px] font-mono text-blue-400">01</span>
              <div className="text-xs xl:text-sm font-black text-white uppercase leading-tight break-words">Website building</div>
              <div className="text-[10px] font-mono text-slate-300">→ CLARITY</div>
            </div>

            <div className="bg-[#000B29]/80 border border-orange-500/60 backdrop-blur-md p-4 rounded-xl space-y-1">
              <span className="text-[10px] font-mono text-orange-400">02</span>
              <div className="text-xs xl:text-sm font-black text-white uppercase leading-tight break-words">Google &amp; Meta ads</div>
              <div className="text-[10px] font-mono text-slate-300">→ MOMENTUM</div>
            </div>

            <div className="bg-[#000B29]/80 border border-blue-500/60 backdrop-blur-md p-4 rounded-xl space-y-1">
              <span className="text-[10px] font-mono text-blue-400">03</span>
              <div className="text-xs xl:text-sm font-black text-white uppercase leading-tight break-words">SEO</div>
              <div className="text-[10px] font-mono text-slate-300">→ INTENT</div>
            </div>

            <div className="bg-[#000B29]/80 border border-blue-500/60 backdrop-blur-md p-4 rounded-xl space-y-1">
              <span className="text-[10px] font-mono text-blue-400">04</span>
              <div className="text-xs xl:text-sm font-black text-white uppercase leading-tight break-words">Social Media</div>
              <div className="text-[10px] font-mono text-slate-300">→ MEMORY</div>
            </div>
          </div>

          <div className="flex justify-end items-center text-[10px] font-mono text-blue-400">
            <span className="flex items-center gap-1.5 bg-slate-950/80 px-3 py-1 rounded-full border border-blue-900/60 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              PLAYING / MUTED LOOP
            </span>
          </div>
        </div>
      </div>

      {/* MOBILE ONLY BACKGROUND VIDEO (lg:hidden, original signal film) */}
      <div className="lg:hidden absolute top-0 right-0 w-full h-full z-0 overflow-hidden opacity-30 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-full h-full object-cover"
        >
          <source src="/media/meet-digital-signal-film.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-[#030712]/40 z-10" />
      </div>

      {/* DESKTOP LAYOUT (lg:block) - Clean Original 2-Column Split */}
      <div className="hidden lg:block max-w-7xl mx-auto px-8 w-full relative z-20">
        <div className="w-[48%] bg-white/95 backdrop-blur-md text-slate-900 rounded-3xl p-10 shadow-2xl space-y-6 border border-slate-200">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 border-b border-slate-100 pb-4">
            <span className="font-bold text-slate-900">DIGITACURVE / CREATIVE GROWTH STUDIO</span>
            <span>NOIDA → INDIA</span>
          </div>

          <h1 className="text-5xl xl:text-6xl font-black tracking-tighter uppercase leading-[0.9] text-slate-950">
            <span className="block text-slate-950">EVERY BUSINESS. EVERY STAGE.</span>
            <span className="block text-blue-600 italic">BUILT TO GROW.</span>
          </h1>

          <p className="text-base text-slate-600 font-light leading-relaxed">
            From local shops, cafes &amp; clinics to rising startups—we build high-converting websites, Google &amp; Meta ads, SEO &amp; social media tailored for every budget.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <Link
              href="#free-report"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-6 py-4 rounded-xl shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all hover:scale-105"
            >
              GET FREE AUDIT &amp; PICK PLAN <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-1.5 pt-4 border-t border-slate-100 text-[8.5px] xl:text-[9.5px] font-mono font-bold text-slate-700 uppercase">
            <div className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-center flex items-center justify-center gap-1 leading-tight break-words">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-xs shrink-0" /> Website building
            </div>
            <div className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-center flex items-center justify-center gap-1 leading-tight break-words">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-xs shrink-0" /> Google &amp; Meta ads
            </div>
            <div className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-center flex items-center justify-center gap-1 leading-tight break-words">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-xs shrink-0" /> SEO
            </div>
            <div className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-center flex items-center justify-center gap-1 leading-tight break-words">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-xs shrink-0" /> Social Media
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE ONLY LAYOUT (< lg) */}
      <div className="lg:hidden max-w-7xl mx-auto px-3 w-full relative z-20 space-y-2 mt-0 pt-0">
        {/* TOP ROW: GREEN AREA (LEFT FULL WHITE CARD) + BLUE AREA (RIGHT 4 SYSTEM NODES) */}
        <div className="grid grid-cols-12 gap-2.5 items-stretch">
          {/* GREEN AREA (Col Span 7): Complete Full White Card */}
          <div className="col-span-7 bg-white/95 backdrop-blur-md text-slate-900 rounded-2xl p-3.5 shadow-2xl flex flex-col justify-between border border-slate-200 space-y-2.5">
            {/* Metadata Top Pill */}
            <div className="flex items-center justify-between gap-1 text-[8px] font-mono text-slate-500 border-b border-slate-100 pb-1.5">
              <span className="font-bold text-slate-900 truncate">DIGITACURVE</span>
              <span className="text-[7px]">NOIDA → INDIA</span>
            </div>

            {/* Headline */}
            <h1 className="my-1 text-[11px] sm:text-[13px] font-black tracking-tight uppercase leading-tight text-slate-950">
              <span className="block text-slate-950 whitespace-nowrap">EVERY BUSINESS. EVERY STAGE.</span>
              <span className="block text-blue-600 italic whitespace-nowrap">BUILT TO GROW.</span>
            </h1>

            {/* Subheading Intro */}
            <p className="text-[9px] text-slate-600 font-light leading-tight">
              Websites, Google &amp; Meta ads, SEO &amp; social media for local shops, cafes &amp; startups of all budgets.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col gap-1.5 pt-1">
              <Link
                href="#free-report"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-[9.5px] px-3 py-2.5 rounded-lg shadow-md flex items-center justify-center gap-1 transition-all active:scale-95"
              >
                GET FREE AUDIT &amp; PICK PLAN <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Proofline Grid Box */}
            <div className="grid grid-cols-2 gap-1 pt-1.5 border-t border-slate-100 text-[6.5px] xs:text-[7.5px] font-mono font-bold text-slate-700 uppercase leading-none">
              <div className="p-1 bg-slate-50 border border-slate-200 rounded text-center flex items-center justify-center gap-0.5">
                <span className="w-1 h-1 bg-blue-600 rounded-xs shrink-0" /> Website building
              </div>
              <div className="p-1 bg-slate-50 border border-slate-200 rounded text-center flex items-center justify-center gap-0.5">
                <span className="w-1 h-1 bg-blue-600 rounded-xs shrink-0" /> Google &amp; Meta ads
              </div>
              <div className="p-1 bg-slate-50 border border-slate-200 rounded text-center flex items-center justify-center gap-0.5">
                <span className="w-1 h-1 bg-blue-600 rounded-xs shrink-0" /> SEO
              </div>
              <div className="p-1 bg-slate-50 border border-slate-200 rounded text-center flex items-center justify-center gap-0.5">
                <span className="w-1 h-1 bg-blue-600 rounded-xs shrink-0" /> Social Media
              </div>
            </div>
          </div>

          {/* BLUE AREA (Col Span 5): Right 4 System Nodes */}
          <div className="col-span-5 flex flex-col justify-between space-y-1.5">
            <div className="flex justify-between items-center text-[8px] font-mono text-blue-400">
              <span className="bg-slate-950/85 px-2 py-0.5 rounded-full border border-blue-900/60 backdrop-blur-md font-bold truncate">
                SYSTEM
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1 my-auto">
              <div className="bg-[#000B29]/90 border border-blue-500/60 backdrop-blur-md p-1.5 rounded-lg space-y-0.5">
                <span className="text-[7.5px] font-mono text-blue-400">01</span>
                <div className="text-[7.5px] xs:text-[8.5px] font-black text-white uppercase leading-tight break-words">Website building</div>
                <div className="text-[6px] font-mono text-slate-300">→ CLARITY</div>
              </div>

              <div className="bg-[#000B29]/90 border border-orange-500/60 backdrop-blur-md p-1.5 rounded-lg space-y-0.5">
                <span className="text-[7.5px] font-mono text-orange-400">02</span>
                <div className="text-[7.5px] xs:text-[8.5px] font-black text-white uppercase leading-tight break-words">Google &amp; Meta ads</div>
                <div className="text-[6px] font-mono text-slate-300">→ MOMENTUM</div>
              </div>

              <div className="bg-[#000B29]/90 border border-blue-500/60 backdrop-blur-md p-1.5 rounded-lg space-y-0.5">
                <span className="text-[7.5px] font-mono text-blue-400">03</span>
                <div className="text-[7.5px] xs:text-[8.5px] font-black text-white uppercase leading-tight break-words">SEO</div>
                <div className="text-[6px] font-mono text-slate-300">→ INTENT</div>
              </div>

              <div className="bg-[#000B29]/90 border border-blue-500/60 backdrop-blur-md p-1.5 rounded-lg space-y-0.5">
                <span className="text-[7.5px] font-mono text-blue-400">04</span>
                <div className="text-[7.5px] xs:text-[8.5px] font-black text-white uppercase leading-tight break-words">Social Media</div>
                <div className="text-[6px] font-mono text-slate-300">→ MEMORY</div>
              </div>
            </div>

            <div className="flex justify-end items-center text-[8px] font-mono text-blue-400">
              <span className="flex items-center gap-1 bg-slate-950/80 px-2 py-0.5 rounded-full border border-blue-900/60 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                SIGNAL
              </span>
            </div>
          </div>
        </div>

        {/* RED AREA (BELOW THE CARDS ROW): Dedicated Video Player Card for h.mp4 */}
        <div className="w-full rounded-2xl overflow-hidden border border-blue-900/60 bg-[#050B14] shadow-2xl relative mt-2">
          <video
            ref={mobileVideoRef}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="w-full h-auto object-contain rounded-2xl max-h-[360px]"
          >
            <source src="/media/h.mp4" type="video/mp4" />
          </video>
          <div className="p-2 bg-[#050B14] flex justify-between items-center text-[9px] font-mono text-slate-400 border-t border-blue-900/40">
            <span className="text-blue-400 font-bold">DIGITACURVE / MOTION IDENTITY</span>
            <span className="flex items-center gap-1 text-white font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              NEW FILM (H.MP4)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
