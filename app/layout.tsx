import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MeetAiWidget from '@/components/MeetAiWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.digitacurve.com'),
  title: {
    default: 'Digitacurve: Next.js Web Development Agency | SEO & GEO Company',
    template: '%s | Digitacurve',
  },
  description:
    'Digitacurve stands at the forefront of digital transformation, offering custom Next.js web applications, digital marketing, SEO, PPC, and 360° lead generation systems based in Noida, serving clients across India.',
  keywords: [
    'Digitacurve',
    'Next.js Web Development Agency',
    'SEO & GEO Company',
    'Digital Marketing Agency Noida',
    'Website Design Company India',
    'Real Estate Lead Generation',
    'Healthcare Website Development',
    'PPC Google Ads Agency',
  ],
  alternates: {
    canonical: 'https://www.digitacurve.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=3' },
      { url: '/icon.png?v=3', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=3',
    apple: '/apple-icon.png?v=3',
  },
  verification: {
    google: [
      'googlee0f549c8d1a8a1cd',
      'WbnglHYC1zWfihaNiEeyOMTupfOh3iHF8h8tKPa07II',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.digitacurve.com',
    siteName: 'Digitacurve',
    title: 'Digitacurve: Next.js Web Development Agency | SEO & GEO Company',
    description:
      'Digitacurve offers custom Next.js web applications, SEO, PPC, and 360° lead generation systems based in Noida, serving clients across India.',
    images: [
      {
        url: '/media/logo-v2.png',
        width: 1200,
        height: 630,
        alt: 'Digitacurve Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digitacurve: Next.js Web Development Agency | SEO & GEO Company',
    description: 'Custom Next.js web development, SEO, PPC & digital growth systems.',
    images: ['/media/logo-v2.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.digitacurve.com/#organization',
      name: 'Digitacurve',
      url: 'https://www.digitacurve.com',
      logo: 'https://www.digitacurve.com/media/logo-v2.png',
      founder: {
        '@type': 'Person',
        name: 'Rishabh Jaiswal',
        jobTitle: 'Founder & Strategy Lead',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-7572094201',
        contactType: 'customer service',
        email: 'contact@digitacurve.com',
      },
      sameAs: ['https://www.instagram.com/digitacurve/'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.digitacurve.com/#website',
      url: 'https://www.digitacurve.com',
      name: 'Digitacurve',
      description: 'Next.js Web Development Agency & Digital Growth Studio',
      publisher: {
        '@id': 'https://www.digitacurve.com/#organization',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.digitacurve.com/#service',
      name: 'Digitacurve Digital Agency',
      image: 'https://www.digitacurve.com/media/logo-v2.png',
      priceRange: '₹₹',
      telephone: '+917572094201',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.5355,
        longitude: 77.3910,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '58',
        bestRating: '5',
        worstRating: '1',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '20:00',
        },
      ],
      areaServed: [
        'India',
        'United States',
        'United Kingdom',
        'Canada',
        'UAE',
        'Australia',
        'Ireland',
      ],
      founder: {
        '@type': 'Person',
        name: 'Rishabh Jaiswal',
        jobTitle: 'Founder & CEO',
        telephone: '+917572094201',
      },
      knowsAbout: [
        'Next.js 15 Web Development',
        'Next.js 15 Partial Prerendering (PPR)',
        'Autonomous Vibe Coding & Agentic Swarms',
        'Test-Time Compute Architecture & Sub-500ms Edge Performance',
        'Search Engine Optimization (SEO)',
        'Generative Engine Optimization (GEO)',
        'SearchGPT & GEO Citation Engineering',
        'Answer Engine Optimization (AEO)',
        'Conversational Voice Search & AEO',
        'Multi-Modal Voice & Visual Search (MSO)',
        'Programmatic SEO Architecture',
        'PPC & Meta Lead Generation',
        'Server-Side Meta CAPI & Zero-Party Data Infrastructure',
        'Agentic WhatsApp Commerce Protocols',
        'Autonomous WhatsApp Inbound Lead Qualification',
        'Agent-Ready UX for Autonomous Web Browsers',
        'Quick Commerce Headless Logistics Architecture',
        'DPDP Act India Enterprise Compliance',
        'SEBI SM REIT & Fractional PropTech Portals',
        'Real Estate Digital Systems',
        'Healthcare Software Solutions',
        'CleanTech & Solar EPC Lead Generation',
        'Multi-Location Franchise Local SEO',
        'B2B FinTech & SaaS Lead Generation',
        'Omnichannel Headless E-Commerce',
        'Autonomous AI Agent Workflows',
        'Hospitality Direct Booking Engine Architecture',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Growth Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Development',
              description: 'Custom Next.js 14 and React Web Application Development',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile App Development',
              description: 'iOS, Android, React Native & Flutter Mobile Apps',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SEO & Performance Marketing',
              description: 'Technical SEO, Google Ads, Meta Ads, and Lead Funnels',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.digitacurve.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where is Digitacurve based?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Digitacurve and its core leadership team led by Rishabh Jaiswal are based in Noida, serving businesses across India with zero location friction.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I get direct access to the founder?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Rishabh Jaiswal oversees strategy and execution directly on every project. No junior account manager pass-offs.',
          },
        },
        {
          '@type': 'Question',
          name: 'What services does Digitacurve provide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Digitacurve provides Next.js web development, mobile app development, technical SEO, Google Ads, Meta Ads, and real estate/healthcare industry solutions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast does Digitacurve build and deploy Next.js web applications?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Through spec-driven autonomous agentic engineering and modern Next.js 15 Partial Prerendering architecture, Digitacurve delivers production-grade enterprise web applications in days to weeks instead of traditional multi-month agency delays.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Generative Engine Optimization (GEO) and why is it essential in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generative Engine Optimization (GEO) ensures your brand is directly cited and recommended by AI answer engines such as ChatGPT Search, Perplexity Pro, and Google AI Overviews by structuring high factual density content, JSON-LD entity graphs, and conversational question-answering schemas.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Digitacurve optimize websites for autonomous AI agent browsers (Computer Use)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Digitacurve builds Agent-Ready UX platforms with pristine semantic HTML5 hierarchy, comprehensive ARIA accessibility roles, machine-readable JSON-LD pricing catalogs, and frictionless native forms so autonomous AI agents (Claude Computer Use, OpenAI Operator) can effortlessly navigate, evaluate, and purchase.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is server-side Meta Conversions API (CAPI) superior to traditional browser pixels in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'With the complete phaseout of third-party cookies and aggressive browser ad blockers, client-side pixels lose over 50% of conversion signals. Server-Side Meta CAPI sends cryptographically hashed conversion events directly from the Next.js runtime to ad servers, restoring 100% event fidelity and cutting CAC by up to 60%.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white`}>
        <SmoothScroll>
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
          <MeetAiWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
