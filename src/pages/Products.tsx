import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { ProductsShowcaseSection } from '@/components/products/ProductsShowcaseSection';
import { RevenueStreamSection } from '@/components/products/RevenueStreamSection';
import { ProductsCTASection } from '@/components/products/ProductsCTASection';

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHero
          badge="Our Products"
          title="Quality Clean Energy"
          highlight="Products"
          subtitle="Diverse portfolio of clean-energy products designed to improve health, reduce energy costs, and protect the environment. From household stoves to institutional solutions."
        />
        <ProductsShowcaseSection />
        <RevenueStreamSection />
        <ProductsCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
