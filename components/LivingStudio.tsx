'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Plane, Building2, Sun, Heart, ShoppingBag, GraduationCap, Stethoscope, Briefcase } from 'lucide-react';

export default function LivingStudio() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    const playVideo = () => {
      if (video) {
        video.defaultMuted = true;
        video.muted = true;
        const promise = video.play();
        if (promise !== undefined) {
          promise.catch(() => {});
        }
      }
    };

    playVideo();

    const handleInteraction = () => {
      playVideo();
    };

    window.addEventListener('touchstart', handleInteraction, { passive: true, capture: true });
    window.addEventListener('click', handleInteraction, { passive: true, capture: true });
    window.addEventListener('scroll', handleInteraction, { passive: true, capture: true });
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        playVideo();
      }
    });

    return () => {
      window.removeEventListener('touchstart', handleInteraction, { capture: true });
      window.removeEventListener('click', handleInteraction, { capture: true });
      window.removeEventListener('scroll', handleInteraction, { capture: true });
    };
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-blue-900/30">
      {/* Header section */}
      <div className="space-y-4 mb-12 sm:mb-16 max-w-3xl">
        <p className="text-xs font-mono text-blue-400 tracking-widest uppercase">
          REAL MOTION · REAL PROCESS · DIGITAL CRAFT
        </p>
        <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-white uppercase">
          STRATEGY YOU CAN<br />
          <span className="text-blue-500 italic font-light">SEE MOVING.</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
          Strong digital work is not a stack of disconnected posts and pages. It is a live system—research, ideas, design, media and measurement moving toward one useful business action.
        </p>
      </div>

      {/* Grid Cards (3 Cards matching the exact layout) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 - Sector Focus 01-04 */}
        <div className="bg-[#050B14] border border-blue-900/60 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-blue-500/80 transition-all duration-300">
          <div className="p-6 space-y-5 flex-1">
            {/* Top Bar */}
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="bg-blue-950/80 text-blue-400 px-2.5 py-1 rounded-md border border-blue-900/60 font-bold">
                01 / SECTOR FOCUS
              </span>
              <span className="text-slate-400">01-04</span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1.5">
              <h3 className="text-xl font-black text-white tracking-tight uppercase">
                TAILORED DIGITAL ENGINES
              </h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                We build dedicated growth setups tuned to how customers buy in each industry.
              </p>
            </div>

            {/* 4 Grid Items */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link href="/solutions/travel-tourism" className="bg-[#000B29]/70 hover:bg-[#000B29] border border-blue-900/40 hover:border-blue-500 rounded-xl p-3 space-y-1.5 relative block transition-all hover:scale-105">
                <div className="flex justify-between items-start">
                  <Plane className="w-4 h-4 text-blue-400" />
                  <span className="text-[9px] font-mono text-slate-500">01</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-snug">Travel &amp; Hospitality</div>
                  <div className="text-[10px] text-slate-400">Direct booking engines</div>
                </div>
              </Link>

              <Link href="/solutions/real-estate" className="bg-[#000B29]/70 hover:bg-[#000B29] border border-blue-900/40 hover:border-blue-500 rounded-xl p-3 space-y-1.5 relative block transition-all hover:scale-105">
                <div className="flex justify-between items-start">
                  <Building2 className="w-4 h-4 text-blue-400" />
                  <span className="text-[9px] font-mono text-slate-500">02</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-snug">Real Estate</div>
                  <div className="text-[10px] text-slate-400">Lead capture systems</div>
                </div>
              </Link>

              <Link href="/solutions/solar-energy" className="bg-[#000B29]/70 hover:bg-[#000B29] border border-blue-900/40 hover:border-blue-500 rounded-xl p-3 space-y-1.5 relative block transition-all hover:scale-105">
                <div className="flex justify-between items-start">
                  <Sun className="w-4 h-4 text-blue-400" />
                  <span className="text-[9px] font-mono text-slate-500">03</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-snug">Solar &amp; Clean Energy</div>
                  <div className="text-[10px] text-slate-400">ROI calculator funnels</div>
                </div>
              </Link>

              <Link href="/web-development" className="bg-[#000B29]/70 hover:bg-[#000B29] border border-blue-900/40 hover:border-blue-500 rounded-xl p-3 space-y-1.5 relative block transition-all hover:scale-105">
                <div className="flex justify-between items-start">
                  <Heart className="w-4 h-4 text-blue-400" />
                  <span className="text-[9px] font-mono text-slate-500">04</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-snug">NGOs &amp; Non-Profits</div>
                  <div className="text-[10px] text-slate-400">Donor outreach &amp; impact sites</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="p-4 bg-[#050B14] flex justify-between items-center text-[10px] font-mono text-slate-400 border-t border-blue-900/40">
            <span>SECTORS 01-04</span>
            <span className="text-white font-bold">TRAVEL · REAL ESTATE · SOLAR · NGO</span>
          </div>
        </div>

        {/* Card 2 - Middle Video Autoplay */}
        <div className="bg-[#050B14] border border-blue-900/60 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-blue-500/80 transition-all duration-300">
          <div className="p-4 relative flex-1 min-h-[300px] pointer-events-none flex items-center justify-center bg-[#000B29]/40">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              preload="auto"
              className="w-full h-full object-contain rounded-xl border border-blue-900/40 pointer-events-none select-none max-h-[360px]"
            >
              <source src="/media/digitacurve.mp4" type="video/mp4" />
              <source src="/media/digitacurve.mov" type="video/quicktime" />
            </video>
          </div>
          <div className="p-4 bg-[#050B14] flex justify-between items-center text-[10px] font-mono text-slate-400 border-t border-blue-900/40">
            <span>02 / ORIGINAL MOTION IDENTITY</span>
            <span className="text-white font-bold">NOISE → DIRECTION → SIGNAL</span>
          </div>
        </div>

        {/* Card 3 - Sector Focus 05-08 */}
        <div className="bg-[#050B14] border border-blue-900/60 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-blue-500/80 transition-all duration-300">
          <div className="p-6 space-y-5 flex-1">
            {/* Top Bar */}
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="bg-blue-950/80 text-blue-400 px-2.5 py-1 rounded-md border border-blue-900/60 font-bold">
                03 / SECTOR FOCUS
              </span>
              <span className="text-slate-400">05-08</span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1.5">
              <h3 className="text-xl font-black text-white tracking-tight uppercase">
                TAILORED DIGITAL ENGINES
              </h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                We build dedicated growth setups tuned to how customers buy in each industry.
              </p>
            </div>

            {/* 4 Grid Items (Matching Card 1's exact 2x2 grid pattern) */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link href="/web-development" className="bg-[#000B29]/70 hover:bg-[#000B29] border border-blue-900/40 hover:border-blue-500 rounded-xl p-3 space-y-1.5 relative block transition-all hover:scale-105">
                <div className="flex justify-between items-start">
                  <ShoppingBag className="w-4 h-4 text-blue-400" />
                  <span className="text-[9px] font-mono text-slate-500">05</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-snug">E-Commerce</div>
                  <div className="text-[10px] text-slate-400">High ROAS ads &amp; storefronts</div>
                </div>
              </Link>

              <Link href="/web-development" className="bg-[#000B29]/70 hover:bg-[#000B29] border border-blue-900/40 hover:border-blue-500 rounded-xl p-3 space-y-1.5 relative block transition-all hover:scale-105">
                <div className="flex justify-between items-start">
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  <span className="text-[9px] font-mono text-slate-500">06</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-snug">Schools &amp; Colleges</div>
                  <div className="text-[10px] text-slate-400">Admissions &amp; campus branding</div>
                </div>
              </Link>

              <Link href="/solutions/healthcare" className="bg-[#000B29]/70 hover:bg-[#000B29] border border-blue-900/40 hover:border-blue-500 rounded-xl p-3 space-y-1.5 relative block transition-all hover:scale-105">
                <div className="flex justify-between items-start">
                  <Stethoscope className="w-4 h-4 text-blue-400" />
                  <span className="text-[9px] font-mono text-slate-500">07</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-snug">Doctors &amp; Clinics</div>
                  <div className="text-[10px] text-slate-400">Patient booking &amp; local SEO</div>
                </div>
              </Link>

              <Link href="/digital-marketing" className="bg-[#000B29]/70 hover:bg-[#000B29] border border-blue-900/40 hover:border-blue-500 rounded-xl p-3 space-y-1.5 relative block transition-all hover:scale-105">
                <div className="flex justify-between items-start">
                  <Briefcase className="w-4 h-4 text-blue-400" />
                  <span className="text-[9px] font-mono text-slate-500">08</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-snug">B2B &amp; Local Services</div>
                  <div className="text-[10px] text-slate-400">High intent lead engines</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="p-4 bg-[#050B14] flex justify-between items-center text-[10px] font-mono text-slate-400 border-t border-blue-900/40">
            <span>SECTORS 05-08</span>
            <span className="text-white font-bold">E-COMMERCE · EDUCATION · DOCTORS · B2B</span>
          </div>
        </div>
      </div>
    </section>
  );
}
