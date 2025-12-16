import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductsHeroSection } from '@/components/products/ProductsHeroSection';
import { ProductsShowcaseSection } from '@/components/products/ProductsShowcaseSection';
import { RevenueStreamSection } from '@/components/products/RevenueStreamSection';
import { ProductsCTASection } from '@/components/products/ProductsCTASection';

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ProductsHeroSection />
        <ProductsShowcaseSection />
        <RevenueStreamSection />
        <ProductsCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
