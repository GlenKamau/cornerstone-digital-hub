import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Droplets, Package, Zap, Circle } from 'lucide-react';
import stoveProduct from '@/assets/stove-product.jpg';
import briquettes from '@/assets/briquettes.jpg';
import assembledStoves from '@/assets/assembled-stoves.jpg';
import jikoKisasa from '@/assets/jiko-kisasa.jpg';
import ceramicLiners from '@/assets/ceramic-liners.jpg';

const products = [
  {
    id: 1,
    category: 'Improved Cookstoves',
    title: 'Jiko Kisasa',
    description: 'Highly efficient, low-smoke stove for household use. Designed for maximum fuel efficiency and reduced emissions.',
    image: jikoKisasa,
    icon: Flame,
    features: ['Low Smoke', 'High Efficiency', 'Durable Design'],
  },
  {
    id: 2,
    category: 'Improved Cookstoves',
    title: 'Rocket Jikos',
    description: 'Fast-cooking, fuel-saving stoves for homes, schools, and small institutions. Built for speed and efficiency.',
    image: stoveProduct,
    icon: Zap,
    features: ['Fast Cooking', 'Fuel Saving', 'Versatile'],
  },
  {
    id: 3,
    category: 'Improved Cookstoves',
    title: 'Uhai Jikos',
    description: 'Ultra-efficient household stoves designed for maximum heat retention and minimal fuel consumption.',
    image: assembledStoves,
    icon: Circle,
    features: ['Ultra Efficient', 'Heat Retention', 'Eco-friendly'],
  },
  {
    id: 4,
    category: 'Clean Fuel',
    title: 'Biomass Briquettes',
    description: 'Affordable, clean-burning briquettes that reduce dependence on firewood and charcoal.',
    image: briquettes,
    icon: Droplets,
    features: ['Clean Burning', 'Affordable', 'Sustainable'],
  },
  {
    id: 5,
    category: 'Accessories',
    title: 'Ceramic Liners',
    description: 'Durable, high-quality inserts for stove manufacturers and installers. Fast-moving with strong demand.',
    image: ceramicLiners,
    icon: Package,
    features: ['High Quality', 'Durable', 'Professional Grade'],
  },
  {
    id: 6,
    category: 'Institutional',
    title: 'Institutional Cookstoves',
    description: 'Large-capacity stoves for schools, NGOs, hospitals, and community kitchens. Built for heavy-duty use.',
    image: assembledStoves,
    icon: Package,
    features: ['Large Capacity', 'Heavy Duty', 'Professional'],
  },
];

export const ProductsShowcaseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group card-elevated overflow-hidden"
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
                  {product.features.map((feature) => (
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
  );
};
