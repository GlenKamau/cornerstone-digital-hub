import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Droplets, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import stoveProduct from '@/assets/stove-product.jpg';
import briquettes from '@/assets/briquettes.jpg';
import assembledStoves from '@/assets/assembled-stoves.jpg';

const products = [
  {
    title: 'Improved Cookstoves',
    description: 'Jiko Kisasa, Rocket Jikos, Uhai Jikos, and institutional stoves for maximum efficiency.',
    image: stoveProduct,
    icon: Flame,
    items: ['Jiko Kisasa', 'Rocket Jikos', 'Uhai Jikos', 'KCJ Stoves'],
  },
  {
    title: 'Clean Fuel & Accessories',
    description: 'Ceramic liners, metal cladding, and eco-friendly biomass briquettes.',
    image: briquettes,
    icon: Droplets,
    items: ['Ceramic Liners', 'Metal Cladding', 'Biomass Briquettes'],
  },
  {
    title: 'Institutional Solutions',
    description: 'Large-capacity stoves for schools, NGOs, hospitals, and community kitchens.',
    image: assembledStoves,
    icon: Package,
    items: ['School Stoves', 'Hospital Kitchens', 'Community Centers'],
  },
];

export const ProductsPreviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Products
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Quality Products for{' '}
              <span className="text-primary">Clean Living</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Diverse portfolio of clean-energy products designed to improve health, reduce energy costs, and protect the environment.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="self-start lg:self-auto">
            <Link to="/products">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to="/products" className="block">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden mb-6 aspect-square">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
                  
                  {/* Icon Badge */}
                  <motion.div 
                    className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <product.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>

                  {/* Hover overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-primary/80 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span 
                      className="text-primary-foreground font-semibold flex items-center gap-2"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      View Details <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {product.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 bg-accent rounded-full text-xs font-medium text-accent-foreground cursor-default hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
