import Link from 'next/link';
import { ArrowUpRight, Code, Cpu, Smartphone, Zap, Shield, CheckCircle2, Server, Layout } from 'lucide-react';

export const metadata = {
  title: 'Web Development Company | Custom Next.js & React Apps',
  description: 'Digitacurve is a trusted web development company offering custom Next.js web applications, mobile apps, and enterprise lead systems.',
  alternates: {
    canonical: 'https://www.digitacurve.com/web-development',
  },
};

export default function WebDevelopmentPage() {
  const capabilities = [
    {
      icon: Code,
      title: 'Custom Web Applications',
      desc: 'Bespoke web applications built with Next.js, React, and TypeScript. Optimized for speed, reliability, and enterprise scale.',
    },
    {
      icon: Smartphone,
      title: 'Responsive & Mobile First',
      desc: 'Flawless performance across all device viewports. Custom breakpoints, fluid motion, and crisp touch targets.',
    },
    {
      icon: Zap,
      title: 'Ultra-Fast Performance & CWV',
      desc: 'Optimized Core Web Vitals, dynamic asset compression, sub-second LCP, and top-tier Google PageSpeed scores.',
    },
    {
      icon: Server,
      title: 'API & Backend Integration',
      desc: 'Seamless integrations with CRMs, payment gateways (Razorpay, Stripe), headless CMS, and custom REST/GraphQL APIs.',
    },
    {
      icon: Layout,
      title: 'UI/UX & Design Systems',
      desc: 'Clean, high-converting digital interfaces engineered to turn passive website visitors into qualified inbound leads.',
    },
    {
      icon: Shield,
      title: 'Security & SEO Foundation',
      desc: 'Built-in SSL, DDoS protection, canonical structure, schema markup, and structured data ready for top search rankings.',
    },
  ];

  const techStack = [
    'Next.js 14 / React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js / Express',
    'PostgreSQL / MongoDB',
    'Vercel / AWS Cloud',
    'Framer Motion',
    'REST & GraphQL APIs',
  ];

  const processSteps = [
    { num: '01', title: 'Discovery & Blueprinting', desc: 'We map out your business objectives, target buyer personas, and technical architecture.' },
    { num: '02', title: 'UX & Visual Design', desc: 'Interactive prototypes and dark/modern design themes tailored specifically to your brand identity.' },
    { num: '03', title: 'Engineering & Testing', desc: 'Clean, modular code execution with zero-debt TypeScript architecture and cross-browser testing.' },
    { num: '04', title: 'Launch & Growth Support', desc: 'Seamless server deployment, analytics integration, and continuous post-launch optimization.' },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-blue-900/30">
        <div className="absolute inset-0 bg-radial-at-c from-blue-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 font-mono text-xs font-semibold">
              <Cpu className="w-3.5 h-3.5" />
              <span>CORE SERVICE / ENGINEERING</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase">
              HIGH IMPACT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                WEB DEVELOPMENT.
              </span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed">
              We design and code fast, scalable, modern web applications that project brand authority and drive tangible revenue growth for Indian and international businesses.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
              >
                BUILD YOUR WEBSITE <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-slate-900 border border-blue-900 hover:border-blue-500 text-slate-200 font-bold text-sm px-8 py-4 rounded-full transition-all"
              >
                VIEW PACKAGES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-blue-900/30">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase">TECHNICAL CAPABILITIES</p>
          <h2 className="text-4xl font-black tracking-tight uppercase">EVERYTHING WE BUILD IS ENGINEERED TO SCALE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#050B14] border border-blue-900/40 hover:border-blue-500/60 transition-all hover:-translate-y-1 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800/50 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-20 bg-[#000B29]/60 border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase text-center mb-10">
            MODERN TECHNOLOGY STACK
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#050B14] border border-blue-900/50 flex items-center gap-3 text-sm font-semibold text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-3">
            <p className="text-xs font-mono text-blue-400 tracking-widest uppercase">OUR FRAMEWORK</p>
            <h2 className="text-4xl font-black tracking-tight uppercase">HOW WE DELIVER WEB PROJECTS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#050B14] border border-blue-900/40 space-y-4">
                <span className="text-xs font-mono text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-b from-[#050B14] to-[#030712] border-t border-blue-900/40 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-black tracking-tight uppercase">READY TO UPGRADE YOUR DIGITAL PRESENCE?</h2>
          <p className="text-slate-300 text-sm">
            Let Digitacurve engineer a high-performing web application tailored specifically to your audience and business goals.
          </p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-9 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            GET STARTED NOW <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
