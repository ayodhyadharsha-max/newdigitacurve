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
  title: 'Digitacurve™ | #1 Web Development & SEO Agency Noida (From ₹24,999)',
  description:
    'Sub-second Next.js websites & Google Maps 3-Pack SEO in Noida, Gurugram & Delhi NCR. Fixed transparent packages from ₹24,999, sub-0.8s speed, and direct WhatsApp with Founder RJ.',
  keywords: [
    'Next.js Web Development Agency Noida',
    'Web Development Company Gurugram Cyber City',
    'SEO Agency Delhi NCR',
    'Digital Marketing Agency South Delhi',
    'Website Design Company Gurgaon',
    'Performance Marketing Agency Noida',
    'Web Development Cost Delhi NCR',
    'Website Design Price Noida',
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
