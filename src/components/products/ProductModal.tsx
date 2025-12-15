import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Flame, Droplets, Package, Zap, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  category: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  icon: typeof Flame;
  features: string[];
  benefits: string[];
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!product) return null;

  const IconComponent = product.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-background rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col lg:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm shadow-soft flex items-center justify-center hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Section */}
            <div className="relative h-64 lg:h-auto lg:w-1/2 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background/80 via-transparent to-transparent" />
              
              {/* Category Badge */}
              <span className="absolute top-4 left-4 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                {product.category}
              </span>

              {/* Icon */}
              <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 w-16 h-16 rounded-2xl bg-background shadow-soft flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-primary" />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 lg:w-1/2 p-6 lg:p-10 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                  {product.title}
                </h2>
                
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {product.fullDescription}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-lg mb-4">Key Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-lg mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="flex-1">
                    <Link to="/contact">Inquire Now</Link>
                  </Button>
                  <Button variant="outline" size="lg" onClick={onClose} className="flex-1">
                    Continue Browsing
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
