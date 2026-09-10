import Link from 'next/link';
import { ArrowUpRight, FolderGit2, ExternalLink, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Portfolio & Work Showcase | Digitacurve',
  description: 'Explore Digitacurve client projects, custom web platforms, performance growth case studies, and brand identities.',
};

export default function PortfolioPage() {
  const projects = [
    {
      title: 'Digitacurve Living Studio',
      category: 'Web Platform & Motion Identity',
      metric: 'Sub-second LCP & High Conversion',
      desc: 'Our modern brand showcase platform featuring interactive sector grids, fluid motion video identity, and pan-India coverage maps.',
      tech: ['Next.js 14', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
      link: '/',
    },
    {
      title: 'Noida Luxury Real Estate Portal',
      category: 'Real Estate Solution',
      metric: '+240% Qualified Inbound Inquiries',
      desc: 'High-converting property portal designed for premium residential projects in Noida NCR with automated CRM lead sync.',
      tech: ['Next.js', 'PostgreSQL', 'Tailwind', 'WhatsApp API'],
      link: '/solutions/real-estate',
    },
    {
      title: 'Multi-Specialty Care Hub',
      category: 'Healthcare System',
      metric: '1,200+ Monthly Online Appointments',
      desc: 'Digital patient portal with direct doctor scheduling, tele-consultation booking, and emergency clinic finder.',
      tech: ['React', 'TypeScript', 'Node.js', 'SMS Gateway'],
      link: '/solutions/healthcare',
    },
    {
      title: 'Pan-India Tour & Travel Engine',
      category: 'Travel & Tourism',
      metric: '3.8x Conversion Rate Boost',
      desc: 'Dynamic holiday package booking portal integrated with Razorpay payment processing and custom itinerary builder.',
      tech: ['Next.js', 'Razorpay', 'Tailwind', 'Google Maps'],
      link: '/solutions/travel-tourism',
    },
    {
      title: 'Rooftop Solar Lead Platform',
      category: 'Solar Energy',
      metric: '₹1.2 Cr Pipeline Generated',
      desc: 'Solar ROI savings calculator widget and landing page suite targeting residential and industrial rooftop solar buyers.',
      tech: ['React', 'Tailwind CSS', 'Meta Ads', 'Google Ads'],
      link: '/solutions/solar-energy',
    },
    {
      title: 'E-Commerce Growth & Performance',
      category: 'Digital Marketing & SEO',
      metric: '+410% Organic Traffic Growth',
      desc: 'Full-funnel digital marketing strategy combining high-intent Google PPC, technical SEO, and retargeting ads.',
      tech: ['Google Ads', 'SEO Audit', 'Analytics 4', 'Meta PPC'],
      link: '/digital-marketing',
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-600 selection:text-white">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 font-mono text-xs font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO &amp; CASE STUDIES</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase">
            OUR PROVEN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              WORK ROSTER.
            </span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
            A selection of web platforms, performance campaigns, and industry solutions built by Digitacurve.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#050B14] border border-blue-900/40 hover:border-blue-500/60 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 bg-blue-950 border border-blue-800/50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-bold">{project.metric}</span>
                </div>
                <h2 className="text-2xl font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">{project.desc}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-blue-900/30">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-blue-950">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors pt-2"
                >
                  VIEW PROJECT DETAILS <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-[#000B29]/60 border-t border-blue-900/30">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-black uppercase">WANT YOUR BRAND FEATURED HERE?</h2>
          <p className="text-slate-300 text-sm">Let Digitacurve engineer your next web application or growth campaign.</p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-9 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            START A PROJECT WITH US <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
