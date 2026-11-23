import Link from 'next/link';
import { ArrowUpRight, Code, Cpu, Smartphone, Zap, Shield, CheckCircle2, Server, Layout, ShoppingBag, Globe, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Website Development Company India | Next.js, Shopify & WordPress Agency',
  description: 'Leading website development company in India. Next.js 15 web applications, Shopify e-commerce, and WordPress web development across Ahmedabad, Surat, Pune, Jaipur, Indore, Lucknow, and Delhi NCR.',
  keywords: [
    'website development company',
    'website development company near me',
    'website development services',
    'web development agency india',
    'website development company india',
    'website design company india',
    'web design agency',
    'website designing company',
    'wordpress website development',
    'shopify website development',
    'shopify development company',
    'ecommerce website development india',
    'ecommerce website development company',
    'website development company ahmedabad',
    'website development company surat',
    'website development company pune',
    'website development company jaipur',
    'website development company indore',
    'website development company lucknow',
    'Next.js 15 Web Development',
    'React Web Applications'
  ],
  alternates: {
    canonical: 'https://www.digitacurve.com/web-development',
  },
};

export default function WebDevelopmentPage() {
  const capabilities = [
    {
      icon: Code,
      title: 'Custom Next.js & React Web Apps',
      desc: 'Bespoke web applications built with Next.js 15 and TypeScript. Engineered for sub-second speeds, zero vulnerability, and enterprise scalability.',
    },
    {
      icon: ShoppingBag,
      title: 'Shopify & E-Commerce Web Development',
      desc: 'Custom Shopify themes, headless e-commerce storefronts, and conversion-optimized payment funnels with Razorpay and Cashfree.',
    },
    {
      icon: Globe,
      title: 'WordPress Modernization & Headless Builds',
      desc: 'Modernize slow legacy WordPress sites to lightning-fast Next.js edge architectures, retaining 100% of your existing search rankings.',
    },
    {
      icon: Zap,
      title: 'Sub-Second Speed & Core Web Vitals',
      desc: 'Sub-0.8s Largest Contentful Paint (LCP), 99+ mobile Google PageSpeed scores, and edge-cached serverless delivery.',
    },
    {
      icon: Server,
      title: 'API & Automated CRM Integration',
      desc: 'Seamless connections with CRMs, payment gateways, machine-readable Agent APIs, and automated WhatsApp lead triggers.',
    },
    {
      icon: Shield,
      title: 'Security & SEO Architecture',
      desc: 'Automated SSL, DDoS defense, canonical indexing, and Schema.org JSON-LD structured data for Google and AI Answer Engines.',
    },
  ];

  const regionalHubs = [
    { city: 'Ahmedabad', tag: 'Gujarat Hub', desc: 'Website development company ahmedabad, shopify website development, custom web applications.' },
    { city: 'Surat', tag: 'Commercial Capital', desc: 'Website development company surat, ecommerce website development company, D2C portals.' },
    { city: 'Pune', tag: 'IT & SaaS Corridor', desc: 'Website development company pune, enterprise React/Next.js systems, web design agency.' },
    { city: 'Jaipur', tag: 'Retail & Hospitality', desc: 'Website development company jaipur, website design company india, wordpress website development.' },
    { city: 'Indore', tag: 'Central India Hub', desc: 'Website development company indore, shopify development company, lead generation web portals.' },
    { city: 'Lucknow', tag: 'UP Capital', desc: 'Website development company lucknow, corporate portals, website designing company.' },
    { city: 'Delhi NCR', tag: 'Headquarters', desc: 'Noida Sector 62 & Gurugram Cyber City enterprise web applications and startup MVPs.' },
    { city: 'Pan-India & Global', tag: 'Worldwide Delivery', desc: 'Web development agency india, website development company india, sub-second global edge CDNs.' },
  ];

  const techStack = [
    'Next.js 15 / React 19',
    'TypeScript',
    'Tailwind CSS',
    'Shopify Liquid / Hydrogen',
    'Node.js / Express',
    'PostgreSQL / Supabase',
    'Vercel Edge Cloud',
    'REST & GraphQL APIs',
  ];

  const processSteps = [
    { num: '01', title: 'Discovery & Blueprinting', desc: 'We map out your business objectives, target buyer personas, and technical architecture.' },
    { num: '02', title: 'UX & Visual Design', desc: 'Interactive prototypes and clean modern design themes tailored specifically to your brand identity.' },
    { num: '03', title: 'Engineering & Testing', desc: 'Clean, modular code execution with zero-debt TypeScript architecture and cross-browser testing.' },
    { num: '04', title: 'Launch & Growth Support', desc: 'Seamless server deployment, analytics integration, and continuous post-launch optimization.' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-mono text-xs font-bold">
              <Cpu className="w-3.5 h-3.5" />
              <span>CORE SERVICE / WEB & E-COMMERCE ENGINEERING</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase text-slate-900">
              HIGH IMPACT <br />
              <span className="text-blue-600 italic">
                WEB DEVELOPMENT.
              </span>
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed">
              We engineer sub-second Next.js web applications, Shopify e-commerce portals, and modern digital platforms that project authority and convert traffic across India.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
              >
                BUILD YOUR WEBSITE <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-900 text-slate-900 font-bold text-sm px-8 py-4 rounded-full transition-all"
              >
                VIEW PACKAGES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">TECHNICAL & PLATFORM CAPABILITIES</p>
          <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">ENGINEERED TO OUTPERFORM COMPETITORS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 transition-all hover:-translate-y-1 space-y-4 group shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Regional Engineering Hubs */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold">
              <MapPin className="w-3.5 h-3.5" />
              <span>REGIONAL ENGINEERING HUBS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-slate-900">
              WEBSITE DEVELOPMENT SERVICES ACROSS INDIA
            </h2>
            <p className="text-slate-600 text-sm">
              Delivering high-converting Next.js, Shopify, and WordPress web development services tailored to local and national business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {regionalHubs.map((hub, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:border-blue-500 transition-all">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">{hub.city}</h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-600 font-semibold">{hub.tag}</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed font-light">{hub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono text-blue-600 tracking-widest uppercase text-center mb-10 font-bold">
            MODERN TECHNOLOGY STACK
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-sm font-semibold text-slate-900 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
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
            <p className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">OUR FRAMEWORK</p>
            <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">HOW WE DELIVER WEB PROJECTS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-md">
                <span className="text-xs font-mono text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 font-bold">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">READY TO UPGRADE YOUR DIGITAL PRESENCE?</h2>
          <p className="text-slate-600 text-sm font-light">
            Let Digitacurve engineer a high-performing web application tailored specifically to your audience and business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/company/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-9 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
            >
              GET STARTED NOW <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919315822996?text=Hi%20Digitacurve%2C%20I%20want%20to%20discuss%20Website%20Development"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
            >
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
