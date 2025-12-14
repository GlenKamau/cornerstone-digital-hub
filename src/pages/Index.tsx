import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { BusinessActivitiesSection } from '@/components/home/BusinessActivitiesSection';
import { ProductsPreviewSection } from '@/components/home/ProductsPreviewSection';
import { SponsorsSection } from '@/components/home/SponsorsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <BusinessActivitiesSection />
        <ProductsPreviewSection />
        <SponsorsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
