import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface PageHeroProps {
  title: string;
  highlight?: string;
  subtitle: string;
  badge?: string;
  showCta?: boolean;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export const PageHero = ({
  title,
  highlight,
  subtitle,
  badge,
  showCta = false,
  ctaText = 'Contact Us',
  ctaLink = '/contact',
  backgroundImage,
}: PageHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0">
            <img 
              src={backgroundImage} 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
        </>
      )}

      {/* Fallback Background */}
      {!backgroundImage && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
          
          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.08, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="absolute bottom-0 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl"
          />
        </>
      )}

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          {badge && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`inline-block px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wider mb-6 ${
                backgroundImage 
                  ? 'bg-background/20 text-background backdrop-blur-sm' 
                  : 'bg-primary/10 text-primary'
              }`}
            >
              {badge}
            </motion.span>
          )}
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
              backgroundImage ? 'text-background' : ''
            }`}
          >
            {title}{' '}
            {highlight && (
              <span className={backgroundImage ? 'text-primary-foreground' : 'text-primary'}>
                {highlight}
              </span>
            )}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-lg md:text-xl leading-relaxed mb-8 ${
              backgroundImage ? 'text-background/90' : 'text-muted-foreground'
            }`}
          >
            {subtitle}
          </motion.p>

          {showCta && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button asChild size="lg" variant={backgroundImage ? 'secondary' : 'default'}>
                <Link to={ctaLink}>
                  {ctaText}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
