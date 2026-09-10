import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Tag, User } from 'lucide-react';
import { notFound } from 'next/navigation';

const postsMap: Record<string, { title: string; category: string; date: string; readTime: string; content: string[] }> = {
  'nextjs-14-speed-optimization': {
    title: 'Why Next.js 14 is the Ultimate Web Framework for High-Converting Business Websites',
    category: 'Engineering',
    date: 'Sep 08, 2026',
    readTime: '5 min read',
    content: [
      'In the competitive digital landscape of 2026, web speed is not just a technical metric — it directly dictates your conversion rate and ad acquisition efficiency. Traditional monolithic CMS platforms often suffer from bloat, slow time-to-first-byte (TTFB), and unstable layout shifts.',
      'At Digitacurve, we build custom web applications on Next.js 14 and React. Here is why this modern tech stack outclasses traditional website builders:',
      '1. Server-Side Rendering & Streaming: Pages load HTML instantly on the server side, ensuring users see main hero content in under 0.8 seconds regardless of connection quality.',
      '2. Zero-CLS Layout Architecture: Layout stability prevents annoying content shifts, creating a silky smooth user browsing experience.',
      '3. Native Image & Font Optimization: Assets are compressed and served in next-gen WebP/AVIF formats automatically.',
      'Investing in a Next.js web application gives your business a multi-year performance advantage over competitors.',
    ],
  },
  'google-ads-roi-framework': {
    title: 'How to Reduce Google Ads CPA by 40% Without Sacrificing High-Intent Lead Quality',
    category: 'Digital Marketing',
    date: 'Sep 04, 2026',
    readTime: '7 min read',
    content: [
      'Running Google PPC ads without strict intent filtering can drain your marketing budget rapidly. Many brands waste up to 40% of their ad spend on irrelevant broad-match queries.',
      'To build profitable lead generation campaigns, Digitacurve follows a disciplined 3-step optimization framework:',
      '1. Aggressive Negative Keyword Lists: We filter out non-buying search terms continuously.',
      '2. Dedicated Dark High-Converting Landing Pages: Directing traffic to custom-engineered landing pages instead of generic homepages increases lead conversion by up to 3x.',
      '3. Smart Conversion Tracking: Tracking real form submissions and WhatsApp clicks ensures Google AI bids exclusively on high-value lead profiles.',
    ],
  },
  'real-estate-lead-generation-2026': {
    title: 'The 2026 Playbook for Real Estate Digital Lead Generation in Tier-1 & Tier-2 Indian Cities',
    category: 'Industry Solutions',
    date: 'Aug 28, 2026',
    readTime: '6 min read',
    content: [
      'Real estate buyers in markets like Noida NCR, Gurgaon, and Bangalore demand instant access to floor plans, pricing tiers, and site location highlights before talking to a sales agent.',
      'Our specialized Real Estate Digital Suite equips property developers with interactive project portals, direct PDF brochure downloads, and integrated CRM routing.',
    ],
  },
  'seo-domain-authority-guide': {
    title: 'Technical SEO Audit Checklist: Dominating Local & Pan-India Search Rankings',
    category: 'SEO',
    date: 'Aug 18, 2026',
    readTime: '8 min read',
    content: [
      'Top search engine rankings require a solid technical foundation. From XML sitemaps to structured Organization and LocalBusiness schemas, every detail matters for Google indexing.',
      'Our team in Noida handles end-to-end technical SEO audits to ensure your brand ranks for competitive local and pan-India commercial keywords.',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(postsMap).map((slug) => ({
    slug,
  }));
}

export default function BlogPostDetail({ params }: { params: { slug: string } }) {
  const post = postsMap[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-600 selection:text-white">
      <article className="pt-24 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO ALL ARTICLES
        </Link>

        <div className="space-y-6 border-b border-blue-900/30 pb-12">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
            <span className="text-blue-400 bg-blue-950 border border-blue-800/50 px-3 py-1 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" /> {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <User className="w-3.5 h-3.5 text-blue-400" /> Digitacurve Team
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] uppercase text-white">
            {post.title}
          </h1>
        </div>

        <div className="py-12 space-y-6 text-slate-300 text-base leading-relaxed font-light">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Article Footer CTA */}
        <div className="p-8 rounded-3xl bg-[#050B14] border border-blue-900/50 mt-12 space-y-4 text-center">
          <h3 className="text-2xl font-black uppercase text-white">READY TO IMPLEMENT THESE STRATEGIES?</h3>
          <p className="text-slate-400 text-xs max-w-xl mx-auto">
            Partner with Digitacurve to elevate your web application engineering and digital marketing performance.
          </p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-8 py-3.5 rounded-full shadow-lg shadow-blue-600/30 transition-all"
          >
            WORK WITH DIGITACURVE <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </div>
  );
}
