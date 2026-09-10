import Link from 'next/link';
import { ArrowUpRight, Smartphone, Cpu, Shield, Zap, CheckCircle2, Layers, Code2, Globe } from 'lucide-react';

export const metadata = {
  title: 'Mobile App Development Company | iOS & Android Apps',
  description: 'Digitacurve is a premier mobile app development company offering custom iOS, Android, React Native, and Flutter mobile application development.',
  alternates: {
    canonical: 'https://www.digitacurve.com/app-development',
  },
};

export default function AppDevelopmentPage() {
  const appCapabilities = [
    {
      icon: Smartphone,
      title: 'iOS & Android Native Apps',
      desc: 'High-performance mobile applications for Apple iOS (Swift/SwiftUI) and Android (Kotlin), engineered for speed and hardware-level precision.',
    },
    {
      icon: Code2,
      title: 'Cross-Platform React Native & Flutter',
      desc: 'Single codebase deployment to iOS and Android without sacrificing 60fps UI performance or native UX feel.',
    },
    {
      icon: Zap,
      title: 'Real-Time Sync & Offline First',
      desc: 'Seamless data synchronization, offline local caching, push notifications, and background job handling.',
    },
    {
      icon: Shield,
      title: 'Secure API & Payment Gateways',
      desc: 'Bank-grade encryption, JWT authentication, OAuth2 login, and integrated Razorpay / Stripe / Apple Pay checkout.',
    },
    {
      icon: Layers,
      title: 'App Store & Play Store Deployment',
      desc: 'Complete end-to-end management of App Store Connect and Google Play Console publishing, compliance, and guidelines approval.',
    },
    {
      icon: Globe,
      title: 'Enterprise Backend & Admin Panels',
      desc: 'Custom Web Admin Dashboards for real-time app analytics, user management, order processing, and dynamic content updates.',
    },
  ];

  return (
    <div className="bg-[#030712] text-white min-h-screen">
      {/* Hero Header */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-blue-900/30">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
            <Smartphone className="w-4 h-4" /> MOBILE APP DEVELOPMENT
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[0.95] text-white">
            MOBILE APPS BUILT FOR<br />
            <span className="text-blue-500 italic font-light">RETENTION &amp; SCALE.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            From consumer iOS &amp; Android apps to internal business field engines. We build sleek mobile products with intuitive UI, sub-second responses, and solid API architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link
              href="/company/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-4 rounded-full shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
            >
              START AN APP PROJECT <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/917572094201"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-blue-900/60 font-bold text-sm px-7 py-4 rounded-full transition-all"
            >
              DISCUSS APP ARCHITECTURE
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-blue-900/30">
        <div className="space-y-4 mb-12">
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase">
            MOBILE ENGINEERING STACK
          </p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            FULL-STACK MOBILE SOLUTIONS.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appCapabilities.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#050B14] border border-blue-900/50 hover:border-blue-500/80 rounded-2xl p-6 space-y-4 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-600/10"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800/60 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process / Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-blue-900/30">
        <div className="bg-[#050B14] border border-blue-900/60 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              OUR TECH &amp; FRAMEWORKS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase">
              MODERN TECH STACK
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 bg-slate-950 border border-blue-900/40 rounded-xl space-y-1">
              <div className="text-blue-400 font-bold">iOS DEVELOPMENT</div>
              <div className="text-slate-300">Swift, SwiftUI, XCode</div>
            </div>
            <div className="p-4 bg-slate-950 border border-blue-900/40 rounded-xl space-y-1">
              <div className="text-blue-400 font-bold">ANDROID</div>
              <div className="text-slate-300">Kotlin, Jetpack Compose</div>
            </div>
            <div className="p-4 bg-slate-950 border border-blue-900/40 rounded-xl space-y-1">
              <div className="text-blue-400 font-bold">CROSS PLATFORM</div>
              <div className="text-slate-300">React Native, Flutter</div>
            </div>
            <div className="p-4 bg-slate-950 border border-blue-900/40 rounded-xl space-y-1">
              <div className="text-blue-400 font-bold">BACKEND &amp; CLOUD</div>
              <div className="text-slate-300">Node.js, Firebase, AWS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-white">
          HAVE AN APP IDEA IN MIND?
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto font-light">
          Talk directly with Rishabh Jaiswal to plan your app features, tech stack, and launch roadmap.
        </p>
        <div>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-full shadow-xl shadow-blue-600/40 transition-all hover:scale-105"
          >
            BOOK A FREE APP CONSULTATION <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
