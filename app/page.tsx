import HeroSection from '@/components/HeroSection';
import MarqueeBanner from '@/components/MarqueeBanner';
import RosterPulse from '@/components/RosterPulse';
import FreeReportFeature from '@/components/FreeReportFeature';
import ServicesGrid from '@/components/ServicesGrid';
import LivingStudio from '@/components/LivingStudio';
import ManifestoSection from '@/components/ManifestoSection';
import ProcessSystem from '@/components/ProcessSystem';
import BrandUniverse from '@/components/BrandUniverse';
import GlobalPresence from '@/components/GlobalPresence';
import WorkingStandards from '@/components/WorkingStandards';
import FaqSection from '@/components/FaqSection';

export default function Home() {
  return (
    <div className="bg-[#030712] text-white">
      <HeroSection />
      <MarqueeBanner />
      <RosterPulse />
      <FreeReportFeature />
      <ServicesGrid />
      <LivingStudio />
      <ManifestoSection />
      <ProcessSystem />
      <BrandUniverse />
      <GlobalPresence />
      <WorkingStandards />
      <FaqSection />
    </div>
  );
}
