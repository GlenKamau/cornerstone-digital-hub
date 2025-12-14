import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Users, TreePine, Award } from 'lucide-react';
import trainingImage from '@/assets/training-women.jpg';
import ceramicLiners from '@/assets/ceramic-liners.jpg';

const features = [
  {
    icon: Flame,
    title: 'Clean Cooking Solutions',
    description: 'Reduce smoke and harmful emissions with our improved cookstoves',
  },
  {
    icon: Users,
    title: 'Community Empowerment',
    description: 'Training programs for women, youth, and local artisans',
  },
  {
    icon: TreePine,
    title: 'Environmental Impact',
    description: 'Every stove sold helps reduce deforestation and carbon emissions',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Durable, efficient products trusted across Kenya',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-background overflow-hidden" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={trainingImage}
                  alt="Hands-on training for women groups"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              </div>

              {/* Secondary Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-elevated border-4 border-background"
              >
                <img
                  src={ceramicLiners}
                  alt="Ceramic liners production"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative blob */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 blob blob-animate -z-10" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Pioneering Clean Energy{' '}
              <span className="text-primary">Solutions in Kenya</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Leenbenx Cornerstone Investments is a leading clean-energy manufacturer based in Juja, Kenya, producing high-quality improved cookstoves for households, schools, community institutions, and NGOs across the country.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Our stoves are designed to reduce smoke, soot, and harmful emissions, greatly lowering indoor air pollution and improving health outcomes. Beyond clean air, our Jikos are built for maximum energy efficiency, helping users reduce fuel consumption and cut daily cooking costs.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="icon-container flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
