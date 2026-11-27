import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/thank-you', '/thank-you.html'],
      },
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Applebot-Extended',
          'CCBot',
          'Bytespider',
          'Diffbot',
        ],
        allow: '/',
        disallow: ['/api/', '/thank-you'],
      },
    ],
    sitemap: 'https://www.digitacurve.com/sitemap.xml',
  };
}
