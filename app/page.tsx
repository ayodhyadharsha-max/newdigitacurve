import HeroSection from '@/components/HeroSection';
import MarqueeBanner from '@/components/MarqueeBanner';
import RosterPulse from '@/components/RosterPulse';
import FreeReportFeature from '@/components/FreeReportFeature';
import ServicesGrid from '@/components/ServicesGrid';
import LivingStudio from '@/components/LivingStudio';
import ManifestoSection from '@/components/ManifestoSection';
import ProcessSystem from '@/components/ProcessSystem';
import BrandUniverse from '@/components/BrandUniverse';
import WorkingStandards from '@/components/WorkingStandards';
import FaqSection from '@/components/FaqSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digitacurve: Top Web Development & SEO Agency in Noida, Gurugram & Delhi NCR',
  description:
    'Digitacurve is the premier Next.js web development, SEO, and performance marketing agency serving high-growth brands across Noida, Gurugram (Gurgaon), South Delhi, Greater Noida, and nationwide. Engineering sub-second web applications, AI automation, and 360° lead generation systems.',
  keywords: [
    'Next.js Web Development Agency Noida',
    'Web Development Company Gurugram Cyber City',
    'SEO Agency Delhi NCR',
    'Digital Marketing Agency South Delhi',
    'Website Design Company Gurgaon',
    'Performance Marketing Agency Noida',
    'Generative Engine Optimization GEO Company India',
    'Best Web Development Company Delhi NCR',
    'Real Estate Lead Generation Noida Gurgaon',
    'Healthcare Website Development Delhi NCR',
  ],
  alternates: {
    canonical: 'https://www.digitacurve.com',
  },
};

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      <HeroSection />
      <MarqueeBanner />
      <RosterPulse />
      <FreeReportFeature />
      <ServicesGrid />
      <LivingStudio />
      <ManifestoSection />
      <ProcessSystem />
      <BrandUniverse />
      <WorkingStandards />
      <FaqSection />
    </div>
  );
}
