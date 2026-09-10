import Link from 'next/link';
import { ArrowUpRight, HeartPulse, Calendar, ShieldCheck, Stethoscope, Activity } from 'lucide-react';

export const metadata = {
  title: 'Healthcare Digital Solutions | Digitacurve',
  description: 'Digital solutions for hospitals, clinics, and medical practitioners including online appointment booking, doctor profiles, and local search visibility.',
};

export default function HealthcareSolutionPage() {
  const features = [
    {
      icon: Calendar,
      title: 'Online Appointment Booking',
      desc: 'Seamless appointment scheduling systems with automated SMS and email confirmation triggers.',
    },
    {
      icon: Stethoscope,
      title: 'Doctor & Department Profiles',
      desc: 'Comprehensive specialist profiles, qualifications, department capabilities, and treatment highlights.',
    },
    {
      icon: ShieldCheck,
      title: 'Patient Trust & Security',
      desc: 'Encrypted patient inquiry forms, HIPAA-conscious architecture, and transparent privacy compliance.',
    },
    {
      icon: Activity,
      title: 'Local SEO for Hospitals & Clinics',
      desc: 'Dominate local healthcare search queries, Google Maps citations, and emergency clinic searches.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-600 selection:text-white">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 font-mono text-xs font-semibold">
              <HeartPulse className="w-3.5 h-3.5" />
              <span>INDUSTRY SOLUTION / HEALTHCARE</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase">
              HEALTHCARE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400">
                DIGITAL ECOSYSTEM.
              </span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed">
              Build patient trust, streamline appointment scheduling, and expand your healthcare facility’s reach across digital channels.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
              >
                DISCUSS HEALTHCARE SYSTEM <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-blue-900/30">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono text-emerald-400 tracking-widest uppercase">SOLUTIONS</p>
          <h2 className="text-4xl font-black tracking-tight uppercase">DESIGNED FOR CLINICS, HOSPITALS & WELLNESS BRANDS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl bg-[#050B14] border border-blue-900/40 hover:border-emerald-500/60 transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
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
          <h2 className="text-4xl font-black uppercase">ELEVATE YOUR HEALTHCARE BRAND</h2>
          <p className="text-slate-300 text-sm">Let Digitacurve build your clinical portal and manage patient acquisition marketing.</p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-9 py-4 rounded-full shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
          >
            TALK TO OUR TEAM <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
