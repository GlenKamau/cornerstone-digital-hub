import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Flame, Droplets, Package, Zap, Circle } from 'lucide-react';
import { ProductModal } from './ProductModal';
import stovesFactory from '@/assets/stoves-factory.jpg';
import rocketJikos from '@/assets/rocket-jikos.jpg';
import uhaiJikos from '@/assets/uhai-jikos.jpg';
import briquettes from '@/assets/briquettes.jpg';
import ceramicLiners from '@/assets/ceramic-liners.jpg';
import assembledStoves from '@/assets/assembled-stoves.jpg';

const products = [
  {
    id: 1,
    category: 'Improved Cookstoves',
    title: 'Jiko Kisasa',
    description: 'Highly efficient, low-smoke stove for household use. Designed for maximum fuel efficiency and reduced emissions.',
    fullDescription: 'The Jiko Kisasa represents the pinnacle of clean cooking technology for Kenyan households. This highly efficient cookstove is engineered with precision ceramic liners that maximize heat retention while minimizing fuel consumption by up to 50%. The innovative design significantly reduces harmful smoke emissions, creating a healthier cooking environment for families. Built with durable materials sourced locally, the Jiko Kisasa withstands daily heavy use while maintaining its efficiency. Its compact design makes it perfect for both indoor and outdoor cooking, adapting to the diverse needs of Kenyan homes.',
    image: stovesFactory,
    icon: Flame,
    features: ['Low Smoke', 'High Efficiency', 'Durable Design', 'Compact Size'],
    benefits: [
      'Reduces fuel consumption by up to 50%, saving money on charcoal and firewood',
      'Significantly lowers indoor air pollution, protecting family health',
      'Faster cooking times mean more time for family and work',
      'Built to last 3-5 years with proper care and maintenance',
      'Supports local artisans and sustainable manufacturing'
    ],
  },
  {
    id: 2,
    category: 'Improved Cookstoves',
    title: 'Rocket Jikos',
    description: 'Fast-cooking, fuel-saving stoves for homes, schools, and small institutions. Built for speed and efficiency.',
    fullDescription: 'Rocket Jikos are engineered for those who need fast, efficient cooking without compromising on fuel economy. The distinctive rocket combustion design creates an intense, focused flame that dramatically reduces cooking time while using minimal fuel. These stoves are incredibly versatile, equally suited for household use or small institutional settings like schools and community centers. The vertical combustion chamber ensures complete burning of fuel, virtually eliminating smoke and maximizing heat output. With their robust metal construction and ceramic insulation, Rocket Jikos deliver professional-grade performance in any kitchen.',
    image: rocketJikos,
    icon: Zap,
    features: ['Fast Cooking', 'Fuel Saving', 'Versatile', 'Clean Burn'],
    benefits: [
      'Cooks up to 40% faster than traditional stoves',
      'Uses small wood pieces or briquettes for fuel flexibility',
      'Near-complete combustion means minimal smoke production',
      'Ideal for both family meals and larger gatherings',
      'Easy to maintain with readily available replacement parts'
    ],
  },
  {
    id: 3,
    category: 'Improved Cookstoves',
    title: 'Uhai Jikos',
    description: 'Ultra-efficient household stoves designed for maximum heat retention and minimal fuel consumption.',
    fullDescription: 'Uhai Jikos represent our commitment to creating stoves that truly make a difference in everyday life. "Uhai" meaning "life" in Swahili, these stoves are designed to enhance quality of life through superior cooking efficiency. The advanced ceramic liner technology provides exceptional heat retention, allowing food to continue cooking even after the fire dies down. This translates to remarkable fuel savings of up to 60% compared to traditional jikos. The ergonomic design considers the cooking habits of Kenyan families, with a stable base and optimized pot support for safe, comfortable cooking.',
    image: uhaiJikos,
    icon: Circle,
    features: ['Ultra Efficient', 'Heat Retention', 'Eco-friendly', 'Safe Design'],
    benefits: [
      'Up to 60% fuel savings compared to traditional stoves',
      'Extended heat retention keeps food warm longer',
      'Reduced carbon footprint contributes to environmental protection',
      'Stable design prevents accidents during cooking',
      'Compatible with various pot sizes for cooking flexibility'
    ],
  },
  {
    id: 4,
    category: 'Clean Fuel',
    title: 'Biomass Briquettes',
    description: 'Affordable, clean-burning briquettes that reduce dependence on firewood and charcoal.',
    fullDescription: 'Our Biomass Briquettes offer a revolutionary alternative to traditional cooking fuels. Made from compressed agricultural waste and biomass materials, these briquettes provide consistent, clean-burning energy at a fraction of the cost of charcoal. Each briquette is manufactured using our proprietary process that ensures optimal density for long, steady burning. By choosing our briquettes, households directly contribute to reducing deforestation and protecting Kenya\'s precious forests. The smoke-free burning makes them perfect for use with our improved cookstoves, creating a complete clean cooking solution for modern Kenyan families.',
    image: briquettes,
    icon: Droplets,
    features: ['Clean Burning', 'Affordable', 'Sustainable', 'Long Lasting'],
    benefits: [
      'Burns cleaner than charcoal with minimal smoke production',
      'Costs up to 40% less than traditional charcoal',
      'Made from renewable agricultural waste materials',
      'Consistent quality ensures reliable cooking performance',
      'Helps protect forests and combat climate change'
    ],
  },
  {
    id: 5,
    category: 'Accessories',
    title: 'Ceramic Liners',
    description: 'Durable, high-quality inserts for stove manufacturers and installers. Fast-moving with strong demand.',
    fullDescription: 'Our Ceramic Liners are the heart of every efficient cookstove. Manufactured using traditional clay techniques combined with modern quality control, each liner is crafted to exacting standards. The high-temperature firing process creates a dense, durable product that withstands the demands of daily cooking while providing superior insulation. These liners are available in various sizes to fit different stove designs, making them essential components for stove manufacturers, artisans, and repair technicians across Kenya. Our consistent quality and reliable supply have made us a trusted partner for the clean cooking industry.',
    image: ceramicLiners,
    icon: Package,
    features: ['High Quality', 'Durable', 'Professional Grade', 'Various Sizes'],
    benefits: [
      'Superior heat retention improves stove efficiency',
      'Handcrafted quality ensures consistent performance',
      'Available in multiple sizes for different stove types',
      'Bulk ordering available for manufacturers and distributors',
      'Technical support provided for proper installation'
    ],
  },
  {
    id: 6,
    category: 'Institutional',
    title: 'Institutional Cookstoves',
    description: 'Large-capacity stoves for schools, NGOs, hospitals, and community kitchens. Built for heavy-duty use.',
    fullDescription: 'Our Institutional Cookstoves are purpose-built for high-volume cooking environments. Designed in collaboration with schools, hospitals, and community organizations, these stoves meet the unique demands of feeding large groups efficiently. The heavy-duty construction features reinforced metal cladding and industrial-grade ceramic liners that withstand continuous use. Multiple burner configurations allow for simultaneous cooking of different dishes, while the fuel-efficient design reduces operating costs significantly. Professional installation and training are included, ensuring your institution gets maximum benefit from this investment in clean cooking technology.',
    image: assembledStoves,
    icon: Package,
    features: ['Large Capacity', 'Heavy Duty', 'Professional', 'Multi-Burner'],
    benefits: [
      'Serves 50-500+ people depending on configuration',
      'Reduces institutional fuel costs by up to 60%',
      'Improves kitchen air quality for staff health',
      'Professional installation and training included',
      'Ongoing maintenance support available'
    ],
  },
];

export const ProductsShowcaseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <>
      <section className="section-padding bg-background" ref={ref}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProduct(product)}
                className="group card-elevated overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    {product.category}
                  </span>

                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Click Hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm text-sm font-medium shadow-soft">
                      Click to view details
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-accent rounded-full text-xs font-medium text-accent-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};
