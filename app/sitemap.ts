import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.digitacurve.com';

  const routes = [
    '',
    '/web-development',
    '/app-development',
    '/digital-marketing',
    '/solutions/real-estate',
    '/solutions/healthcare',
    '/solutions/travel-tourism',
    '/solutions/solar-energy',
    '/pricing',
    '/portfolio',
    '/blog',
    '/blog/educational-edtech-portal-website-development-2026',
    '/blog/google-ppc-ads-agency-noida-delhi-ncr-2026',
    '/blog/ecommerce-web-development-nextjs-shopify-headless-2026',
    '/blog/b2b-saas-lead-generation-digital-marketing-agency-2026',
    '/blog/solar-energy-cleantech-lead-generation-digital-agency-2026',
    '/blog/travel-tourism-booking-engine-nextjs-seo-2026',
    '/blog/healthcare-hospital-website-development-lead-gen-2026',
    '/blog/generative-ai-search-optimization-chatgpt-gemini-2026',
    '/blog/real-estate-digital-marketing-agency-noida-gurgaon-2026',
    '/blog/nextjs-vs-wordpress-seo-performance-agency-guide-2026',
    '/blog/autonomous-ai-coding-agents-nextjs-web-development-2026',
    '/blog/how-to-go-viral-and-rank-1-on-google-and-chatgpt-2026',
    '/blog/meta-ads-whatsapp-lead-funnels-roi-2026',
    '/blog/schema-markup-jsonld-geo-search-ranking-2026',
    '/blog/ai-agents-nextjs-web-app-integration-2026',
    '/blog/local-seo-geo-noida-delhi-ncr-business-guide-2026',
    '/blog/apple-intelligence-ios-app-development-trends-2026',
    '/blog/best-web-development-digital-agency-noida-india-2026',
    '/blog/360-lead-generation-systems-nextjs-whatsapp-funnels-2026',
    '/blog/nextjs-landing-page-architecture-lead-generation-2026',
    '/blog/generative-engine-optimization-geo-guide-2026',
    '/blog/nextjs-14-speed-optimization',
    '/blog/google-ads-roi-framework',
    '/blog/real-estate-lead-generation-2026',
    '/blog/seo-domain-authority-guide',
    '/company/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
