'use client';

import { useEffect, useRef } from 'react';
import { Plane, Building2, Sun, ShoppingBag, GraduationCap, Stethoscope, HeartHandshake } from 'lucide-react';

export default function LivingStudio() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }

    const handleTouchStart = () => {
      if (videoRef.current) {
        videoRef.current.defaultMuted = true;
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('click', handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('click', handleTouchStart);
    };
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-blue-900/30">
      {/* Header section */}
      <div className="space-y-4 mb-16 max-w-3xl">
        <p className="text-xs font-mono text-blue-400 tracking-widest uppercase">
          REAL MOTION · REAL PROCESS · DIGITAL CRAFT
        </p>
        <h2 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.9] text-white uppercase">
          STRATEGY YOU CAN<br />
          <span className="text-blue-500 italic font-light">SEE MOVING.</span>
        </h2>
        <p className="text-slate-300 text-base leading-relaxed font-light">
          Strong digital work is not a stack of disconnected posts and pages. It is a live system—research, ideas, design, media and measurement moving toward one useful business action.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Card 1 (Left) - Sector Focus 1 (Travel, Real Estate, Solar, NGO) */}
        <div className="bg-[#050B14] border border-blue-900/60 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-blue-500/80 transition-all duration-300">
          <div className="p-5 bg-gradient-to-br from-blue-950/60 via-[#050B14] to-slate-950 relative flex-1 flex flex-col justify-between space-y-3">
            <div className="flex justify-between items-center text-[10px] font-mono text-blue-400 z-10">
              <span className="bg-blue-950/80 border border-blue-800/50 px-2.5 py-0.5 rounded text-blue-300 font-bold">01 / SECTOR FOCUS</span>
              <span className="text-slate-400 font-bold">01–04</span>
            </div>

            <div>
              <h3 className="text-base font-black text-white uppercase tracking-tight mb-2.5">
                SECTOR SPECIFIC GROWTH
              </h3>

              <div className="space-y-2">
                <div className="p-2.5 bg-slate-950/80 border border-blue-900/40 hover:border-blue-500/60 rounded-xl flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-950 border border-blue-800/50 flex items-center justify-center shrink-0">
                      <Plane className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white leading-tight">Travel Business</div>
                      <div className="text-[8.5px] font-mono text-slate-400">Direct bookings &amp; tour funnels</div>
                    </div>
                  </div>
                  <span className="text-[7.5px] font-mono bg-blue-950 text-blue-400 border border-blue-800/50 px-1.5 py-0.5 rounded uppercase font-bold">ACTIVE</span>
                </div>

                <div className="p-2.5 bg-slate-950/80 border border-blue-900/40 hover:border-blue-500/60 rounded-xl flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-950 border border-blue-800/50 flex items-center justify-center shrink-0">
                      <Building2 className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white leading-tight">Real Estate</div>
                      <div className="text-[8.5px] font-mono text-slate-400">Buyer lead capture &amp; ads</div>
                    </div>
                  </div>
                  <span className="text-[7.5px] font-mono bg-blue-950 text-blue-400 border border-blue-800/50 px-1.5 py-0.5 rounded uppercase font-bold">ACTIVE</span>
                </div>

                <div className="p-2.5 bg-slate-950/80 border border-blue-900/40 hover:border-blue-500/60 rounded-xl flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-950 border border-blue-800/50 flex items-center justify-center shrink-0">
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white leading-tight">Solar Business</div>
                      <div className="text-[8.5px] font-mono text-slate-400">High-ticket quote generation</div>
                    </div>
                  </div>
                  <span className="text-[7.5px] font-mono bg-blue-950 text-blue-400 border border-blue-800/50 px-1.5 py-0.5 rounded uppercase font-bold">ACTIVE</span>
                </div>

                <div className="p-2.5 bg-slate-950/80 border border-blue-900/40 hover:border-blue-500/60 rounded-xl flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-950 border border-blue-800/50 flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-3.5 h-3.5 text-pink-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white leading-tight">NGOs &amp; Non-Profits</div>
                      <div className="text-[8.5px] font-mono text-slate-400">Donor outreach &amp; impact sites</div>
                    </div>
                  </div>
                  <span className="text-[7.5px] font-mono bg-blue-950 text-blue-400 border border-blue-800/50 px-1.5 py-0.5 rounded uppercase font-bold">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3.5 bg-[#050B14] flex justify-between items-center text-[9.5px] font-mono text-slate-400 border-t border-blue-900/40">
            <span>SECTORS 01–04</span>
            <span className="text-white font-bold">TRAVEL · REAL ESTATE · SOLAR · NGO</span>
          </div>
        </div>

        {/* Card 2 (Center) - Original Motion Video */}
        <div className="bg-[#050B14] border border-blue-900/60 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-blue-500/80 transition-all duration-300">
          <div className="p-3 sm:p-4 relative flex-1 bg-slate-950 flex items-center justify-center min-h-[300px]">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="w-full h-full object-contain rounded-xl max-h-[380px]"
            >
              <source src="/media/digitacurve.mov" type="video/quicktime" />
              <source src="/media/digitacurve.mov" type="video/mp4" />
              <source src="/media/meet-digital-signal-film.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="p-3.5 bg-[#050B14] flex justify-between items-center text-[9.5px] font-mono text-slate-400 border-t border-blue-900/40">
            <span>02 / ORIGINAL MOTION IDENTITY</span>
            <span className="text-white font-bold">NOISE → DIRECTION → SIGNAL</span>
          </div>
        </div>

        {/* Card 3 (Right) - Sector Focus 2 (E-Commerce, Schools & Colleges, Doctors) */}
        <div className="bg-[#050B14] border border-blue-900/60 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-blue-500/80 transition-all duration-300">
          <div className="p-5 bg-gradient-to-bl from-blue-950/60 via-[#050B14] to-slate-950 relative flex-1 flex flex-col justify-between space-y-3">
            <div className="flex justify-between items-center text-[10px] font-mono text-blue-400 z-10">
              <span className="bg-blue-950/80 border border-blue-800/50 px-2.5 py-0.5 rounded text-blue-300 font-bold">03 / SECTOR FOCUS</span>
              <span className="text-slate-400 font-bold">05–07</span>
            </div>

            <div>
              <h3 className="text-base font-black text-white uppercase tracking-tight mb-2.5">
                TAILORED DIGITAL ENGINES
              </h3>

              <div className="space-y-2">
                <div className="p-2.5 bg-slate-950/80 border border-blue-900/40 hover:border-blue-500/60 rounded-xl flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-950 border border-blue-800/50 flex items-center justify-center shrink-0">
                      <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white leading-tight">E-Commerce</div>
                      <div className="text-[8.5px] font-mono text-slate-400">High ROAS ads &amp; storefronts</div>
                    </div>
                  </div>
                  <span className="text-[7.5px] font-mono bg-blue-950 text-blue-400 border border-blue-800/50 px-1.5 py-0.5 rounded uppercase font-bold">ACTIVE</span>
                </div>

                <div className="p-2.5 bg-slate-950/80 border border-blue-900/40 hover:border-blue-500/60 rounded-xl flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-950 border border-blue-800/50 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white leading-tight">Schools &amp; Colleges</div>
                      <div className="text-[8.5px] font-mono text-slate-400">Admissions &amp; campus branding</div>
                    </div>
                  </div>
                  <span className="text-[7.5px] font-mono bg-blue-950 text-blue-400 border border-blue-800/50 px-1.5 py-0.5 rounded uppercase font-bold">ACTIVE</span>
                </div>

                <div className="p-2.5 bg-slate-950/80 border border-blue-900/40 hover:border-blue-500/60 rounded-xl flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-950 border border-blue-800/50 flex items-center justify-center shrink-0">
                      <Stethoscope className="w-3.5 h-3.5 text-rose-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white leading-tight">Doctors &amp; Clinics</div>
                      <div className="text-[8.5px] font-mono text-slate-400">Patient booking &amp; local SEO</div>
                    </div>
                  </div>
                  <span className="text-[7.5px] font-mono bg-blue-950 text-blue-400 border border-blue-800/50 px-1.5 py-0.5 rounded uppercase font-bold">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3.5 bg-[#050B14] flex justify-between items-center text-[9.5px] font-mono text-slate-400 border-t border-blue-900/40">
            <span>SECTORS 05–07</span>
            <span className="text-white font-bold">E-COMMERCE · EDUCATION · DOCTORS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
