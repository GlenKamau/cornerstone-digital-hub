import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Handshake } from 'lucide-react';
import gizLogo from '@/assets/partners/giz-logo.png';
import mbetLogo from '@/assets/partners/mbet-logo.jpg';
import ministryEnvLogo from '@/assets/partners/ministry-environment-logo.jpg';
import vawocoLogo from '@/assets/partners/vawoco-logo.jpg';

const partners = [
  { 
    name: 'GIZ', 
    subtitle: 'German Cooperation',
    description: 'Deutsche Gesellschaft für Internationale Zusammenarbeit',
    logo: gizLogo 
  },
  { 
    name: 'MBET', 
    subtitle: 'Ministry of Energy & Petroleum',
    description: 'Republic of Kenya',
    logo: mbetLogo 
  },
  { 
    name: 'Ministry of Environment', 
    subtitle: 'Climate Change & Forestry',
    description: 'Republic of Kenya',
    logo: ministryEnvLogo 
  },
  { 
    name: 'VAWOCO', 
    subtitle: 'Partner Organization',
    description: 'Inspire • Innovate • Empower',
    logo: vawocoLogo 
  },
];

export const SponsorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-20 bg-gradient-to-br from-muted via-background to-muted overflow-hidden" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6"
          >
            <Handshake className="w-8 h-8 text-primary" />
          </motion.div>
          <span className="block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Trusted Partners
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Supported By Leading Organizations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are proud to collaborate with government ministries, international development agencies, 
            and community organizations to advance clean energy solutions across Kenya.
          </p>
        </motion.div>

        {/* Partner Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="relative bg-background rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-500 border border-border hover:border-primary/30 h-full flex flex-col items-center text-center">
                {/* Decorative gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Logo Container */}
                <div className="relative w-24 h-24 mb-4 rounded-xl bg-white shadow-sm overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="font-heading font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-primary/80 text-sm font-medium mb-2">
                    {partner.subtitle}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {partner.description}
                  </p>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          Together, we're building a cleaner, healthier future for Kenyan communities.
        </motion.p>
      </div>
    </section>
  );
};
