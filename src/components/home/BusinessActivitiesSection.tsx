import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Factory, Wrench, Settings, Flame, FlowerIcon, Bird, Building, GraduationCap } from 'lucide-react';

const activities = [
  {
    icon: Factory,
    title: 'Stove Liners & Inserts',
    description: 'High-quality ceramic and refractory liners for improved cookstoves.',
    color: 'bg-primary',
  },
  {
    icon: Wrench,
    title: 'Cladding & Fabrication',
    description: 'Durable metal cladding for institutional and household stoves.',
    color: 'bg-secondary',
  },
  {
    icon: Settings,
    title: 'Stove Installation',
    description: 'Professional installation for households, schools, NGOs, and restaurants.',
    color: 'bg-primary',
  },
  {
    icon: Flame,
    title: 'Briquette Production',
    description: 'Clean, affordable biomass briquettes reducing reliance on firewood.',
    color: 'bg-secondary',
  },
  {
    icon: FlowerIcon,
    title: 'Flower & Decorative Pots',
    description: 'Strong, heat-treated clay pots for home and commercial use.',
    color: 'bg-primary',
  },
  {
    icon: Bird,
    title: 'Poultry Rearing Pots',
    description: 'Durable clay pots designed to support small-scale poultry farmers.',
    color: 'bg-secondary',
  },
  {
    icon: Building,
    title: 'Kiln Construction',
    description: 'Building efficient kilns for ceramic production and cooperatives.',
    color: 'bg-primary',
  },
  {
    icon: GraduationCap,
    title: 'Training & Capacity Building',
    description: 'Hands-on training for artisans, youth, and women groups.',
    color: 'bg-secondary',
  },
];

export const BusinessActivitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-muted" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Business{' '}
            <span className="text-gradient">Activities</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We engage in a wide range of clean-energy and eco-friendly manufacturing activities, offering both products and technical services.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-elevated card-hover p-6 group cursor-pointer"
            >
              <motion.div
                className={`w-14 h-14 rounded-xl ${activity.color} flex items-center justify-center mb-5`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <activity.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                {activity.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
