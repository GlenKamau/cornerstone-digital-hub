import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Flame, 
  Package, 
  Wrench, 
  Droplets, 
  Settings, 
  Building, 
  GraduationCap, 
  Users 
} from 'lucide-react';

const revenueStreams = [
  {
    icon: Flame,
    title: 'Improved Cookstoves',
    description: 'Income from household stoves (Jiko Kisasa, Rocket Jikos, Uhai Jikos, KCJ) and institutional cookstoves. Primary and highest-volume revenue stream.',
    highlight: true,
  },
  {
    icon: Package,
    title: 'Ceramic Liners & Inserts',
    description: 'High-quality ceramic liners sold to artisans, women groups, youth groups, and small-scale stove assemblers. Fast-moving with strong monthly demand.',
    highlight: false,
  },
  {
    icon: Wrench,
    title: 'Metal Cladding',
    description: 'Fabricated stove casings sold to local manufacturers and individual stove producers. Consistent monthly revenue.',
    highlight: false,
  },
  {
    icon: Droplets,
    title: 'Briquette Sales',
    description: 'Eco-friendly biomass briquettes sold to households, small businesses, and institutions. Long-term recurring income.',
    highlight: true,
  },
  {
    icon: Settings,
    title: 'Installation Services',
    description: 'Professional installation of institutional stoves for schools, NGOs, churches, and community kitchens. High-margin revenue.',
    highlight: false,
  },
  {
    icon: Building,
    title: 'Kiln Construction',
    description: 'Revenue from building kilns for ceramic production—supporting artisans, cooperatives, and community groups.',
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: 'Training Programs',
    description: 'Fees from structured training programs for women, youth, NGOs, and local artisans in stove production and installation.',
    highlight: true,
  },
  {
    icon: Users,
    title: 'Wholesale Distribution',
    description: 'Revenue from women agents, youth distributors, and retailers who purchase products in bulk at wholesale prices.',
    highlight: false,
  },
];

export const RevenueStreamSection = () => {
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
            Revenue Streams
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Diversified & <span className="text-gradient">Sustainable</span> Revenue
          </h2>
          <p className="text-muted-foreground text-lg">
            Multiple clean-energy and eco-friendly product lines ensuring financial stability while supporting women, youth, and environmental conservation.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={stream.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08 }}
              className={`p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                stream.highlight
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-background border border-border hover:shadow-lg'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  stream.highlight
                    ? 'bg-primary-foreground/20'
                    : 'bg-primary/10'
                }`}
              >
                <stream.icon
                  className={`w-6 h-6 ${
                    stream.highlight ? 'text-primary-foreground' : 'text-primary'
                  }`}
                />
              </div>
              <h3
                className={`font-heading font-semibold text-lg mb-3 ${
                  stream.highlight ? 'text-primary-foreground' : 'text-foreground'
                }`}
              >
                {stream.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  stream.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'
                }`}
              >
                {stream.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
