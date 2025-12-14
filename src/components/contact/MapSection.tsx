import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

export const MapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="section-padding bg-muted" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Location
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Visit Our <span className="text-primary">Factory</span>
          </h2>
          <p className="text-muted-foreground">
            Located in Juja Town, Kiambu County, Kenya. We welcome visitors to our production facility.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-elevated"
        >
          {/* Map Container */}
          <div className="relative h-[400px] md:h-[500px] bg-accent">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.05661051555!2d37.01180569240693!3d-1.1003729839626726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f472e8e9ee5c3%3A0x5c0e23e2f8ae9b0c!2sJuja!5e0!3m2!1sen!2ske!4v1702548920000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Leenbenx Location Map"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Location Card Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm"
          >
            <div className="bg-background/95 backdrop-blur-md rounded-xl p-6 shadow-elevated border border-border">
              <div className="flex items-start gap-4">
                <div className="icon-container flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">
                    Leenbenx Cornerstone Investments
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Juja Town, Kiambu County<br />
                    Kenya
                  </p>
                  <a
                    href="https://maps.google.com/?q=Juja,Kenya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
