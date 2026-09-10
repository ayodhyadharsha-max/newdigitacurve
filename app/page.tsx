import HeroSection from '@/components/HeroSection';
import MarqueeBanner from '@/components/MarqueeBanner';
import RosterPulse from '@/components/RosterPulse';
import ServicesGrid from '@/components/ServicesGrid';
import FreeReportFeature from '@/components/FreeReportFeature';
import LivingStudio from '@/components/LivingStudio';
import ManifestoSection from '@/components/ManifestoSection';
import ProcessSystem from '@/components/ProcessSystem';
import BrandUniverse from '@/components/BrandUniverse';
import IndiaCoverage from '@/components/IndiaCoverage';
import WorkingStandards from '@/components/WorkingStandards';
import FaqSection from '@/components/FaqSection';

export default function Home() {
  return (
    <div className="bg-[#030712] text-white">
      <HeroSection />
      <MarqueeBanner />
      <RosterPulse />
      <ServicesGrid />
      <FreeReportFeature />
      <LivingStudio />
      <ManifestoSection />
      <ProcessSystem />
      <BrandUniverse />
      <IndiaCoverage />
      <WorkingStandards />
      <FaqSection />
    </div>
  );
}
