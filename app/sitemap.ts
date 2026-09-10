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
