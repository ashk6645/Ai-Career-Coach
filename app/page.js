import FAQ from '@/components/custom/FAQ';
import Features from '@/components/custom/Features';
import HeroSection from '@/components/custom/HeroSection';
import HowItWorks from '@/components/custom/HowItWorks';
import Stats from '@/components/custom/Stats';

export default function LandingPage() {
  return (
    <div >
      <div className="grid-background" />
      <HeroSection />
      <Features />
      <Stats />
      <HowItWorks />
      <FAQ />
    </div>
  );
}
