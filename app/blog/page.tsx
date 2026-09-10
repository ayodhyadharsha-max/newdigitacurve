import Link from 'next/link';
import { ArrowUpRight, BookOpen, Calendar, Clock, Tag } from 'lucide-react';

export const metadata = {
  title: 'Insights & Articles | Digitacurve Blog',
  description: 'Actionable strategies on modern web development, SEO ranking, performance marketing, and digital growth from the Digitacurve team.',
};

const blogPosts = [
  {
    slug: 'nextjs-14-speed-optimization',
    title: 'Why Next.js 14 is the Ultimate Web Framework for High-Converting Business Websites',
    category: 'Engineering',
    date: 'Sep 08, 2026',
    readTime: '5 min read',
    excerpt: 'Discover how server-side rendering, automatic image optimization, and sub-second Core Web Vitals elevate user experience and search rankings.',
  },
  {
    slug: 'google-ads-roi-framework',
    title: 'How to Reduce Google Ads CPA by 40% Without Sacrificing High-Intent Lead Quality',
    category: 'Digital Marketing',
    date: 'Sep 04, 2026',
    readTime: '7 min read',
    excerpt: 'Step-by-step breakdown of negative keyword management, exact-match bid strategies, and high-converting dark landing page layouts.',
  },
  {
    slug: 'real-estate-lead-generation-2026',
    title: 'The 2026 Playbook for Real Estate Digital Lead Generation in Tier-1 & Tier-2 Indian Cities',
    category: 'Industry Solutions',
    date: 'Aug 28, 2026',
    readTime: '6 min read',
    excerpt: 'How real estate developers in Noida, Gurgaon, and Bangalore use interactive property viewports and instant WhatsApp CTAs to double sales leads.',
  },
  {
    slug: 'seo-domain-authority-guide',
    title: 'Technical SEO Audit Checklist: Dominating Local & Pan-India Search Rankings',
    category: 'SEO',
    date: 'Aug 18, 2026',
    readTime: '8 min read',
    excerpt: 'Learn how clean canonical tags, schema markup, and structured metadata boost search engine indexing speed and organic visibility.',
  },
];

export default function BlogListingPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-600 selection:text-white">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 font-mono text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>DIGITACURVE INSIGHTS</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase">
            GROWTH &amp; TECH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              ARTICLES.
            </span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
            Practical insights on web engineering, performance advertising, and digital positioning.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#050B14] border border-blue-900/40 hover:border-blue-500/60 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-blue-400 bg-blue-950 border border-blue-800/50 px-3 py-1 rounded-full flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {post.category}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl font-black tracking-tight text-white group-hover:text-blue-400 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">{post.excerpt}</p>
              </div>

              <div className="pt-4 border-t border-blue-900/30">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  READ ARTICLE <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
