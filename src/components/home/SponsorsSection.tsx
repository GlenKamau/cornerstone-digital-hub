import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const partners = [
  { name: 'GIZ', subtitle: 'German Cooperation' },
  { name: 'Ministry of Energy', subtitle: 'Republic of Kenya' },
  { name: 'MBET', subtitle: 'Ministry of Energy and Petroleum' },
  { name: 'Ministry of Environment', subtitle: 'Climate Change & Forestry' },
  { name: 'VAWOCO', subtitle: 'Partner Organization' },
];

export const SponsorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-16 bg-muted" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Partners
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold">
            Trusted By Leading Organizations
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-background border border-border flex items-center justify-center mb-3 group-hover:border-primary group-hover:shadow-soft transition-all duration-300">
                <span className="font-heading font-bold text-lg md:text-xl text-primary">
                  {partner.name.split(' ')[0][0]}
                  {partner.name.split(' ')[1]?.[0] || ''}
                </span>
              </div>
              <p className="font-medium text-sm">{partner.name}</p>
              <p className="text-xs text-muted-foreground">{partner.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
