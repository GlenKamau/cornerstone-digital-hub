import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import kenyaCooking from '@/assets/kenya-cooking.jpg';

const reasons = [
  'Proven Quality: Durable, efficient products trusted across Kenya',
  'Energy & Cost Savings: Reduce fuel consumption significantly',
  'Cleaner, Healthier Cooking: Significantly reduces smoke and pollution',
  'Wide Product Range: Complete clean-cooking solutions',
  'Community Empowerment: Income opportunities for women and youth',
  'Environmental Impact: Reduce deforestation and carbon emissions',
  'Reliable Supply Chain: Consistent production and delivery',
];

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={kenyaCooking}
          alt="Climate-friendly cooking in Kenya"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/90 to-foreground/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : {}}
          className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.08 } : {}}
          transition={{ delay: 0.2 }}
          className="absolute bottom-20 right-40 w-48 h-48 bg-secondary rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
              The Smart Choice for{' '}
              <span className="text-primary">Clean Energy</span>
            </h2>
            <p className="text-background/70 text-lg mb-8">
              Join thousands of households and institutions that have already switched to cleaner, more efficient cooking solutions.
            </p>

            <ul className="space-y-4 mb-10">
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-start gap-3 cursor-default group"
                >
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:text-secondary transition-colors" />
                  </motion.div>
                  <span className="text-background/80 group-hover:text-background transition-colors">{reason}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="cta" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/products">Explore Products</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: '8+', label: 'Business Activities', color: 'primary' },
              { value: '5+', label: 'Product Lines', color: 'secondary' },
              { value: '1000+', label: 'Happy Customers', color: 'primary' },
              { value: '100%', label: 'Eco-Friendly', color: 'secondary' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-2xl backdrop-blur-sm border border-background/10 cursor-default ${
                  stat.color === 'primary' ? 'bg-primary/20 hover:bg-primary/30' : 'bg-secondary/20 hover:bg-secondary/30'
                } transition-colors duration-300`}
              >
                <motion.p 
                  className="font-heading font-bold text-4xl md:text-5xl text-background mb-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-background/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
