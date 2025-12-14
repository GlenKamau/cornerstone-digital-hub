import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ProductsCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Switch to Clean Energy?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
            Contact us today to learn more about our products, pricing, and bulk orders. We offer competitive wholesale prices for distributors and institutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="heroOutline" asChild>
              <Link to="/contact">
                Get a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              variant="heroOutline"
              onClick={() => window.open('tel:+254758291007')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
