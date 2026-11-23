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
    'influencer marketing agency',
    'influencer marketing agency india',
    'social media marketing agency',
    'social media agency india',
    'social media marketing company india',
    'digital marketing company',
    'digital marketing agency near me',
    'digital marketing company india',
    'digital marketing agency india',
    'digital marketing services',
    'seo company india',
    'seo services india',
    'seo company near me',
    'google ads agency',
    'google ads agency near me',
    'google ads agency india',
    'google ads management services',
    'hire google ads expert',
    'meta ads agency',
    'facebook ads agency',
    'facebook marketing agency',
    'instagram marketing agency',
    'instagram marketing services',
    'website development company',
    'website development company near me',
    'website development services',
    'web development agency india',
    'website development company india',
    'website design company india',
    'shopify website development',
    'shopify development company',
    'wordpress website development',
    'ecommerce website development india',
    'lead generation agency',
    'lead generation company',
    'lead generation agency india',
    'performance marketing company',
    'performance marketing agency',
    'digital marketing agency ahmedabad',
    'digital marketing company surat',
    'digital marketing agency vadodara',
    'digital marketing agency jaipur',
    'digital marketing agency pune',
    'digital marketing agency indore',
    'digital marketing agency lucknow',
    'social media marketing agency ahmedabad',
    'social media marketing agency surat',
    'social media marketing agency jaipur',
    'social media marketing agency pune',
    'website development company ahmedabad',
    'website development company surat',
    'website development company pune',
    'website development company jaipur',
    'website development company indore',
    'website development company lucknow',
    'seo company ahmedabad',
    'seo company surat',
    'seo company vadodara',
    'seo company jaipur',
    'seo company indore'
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
