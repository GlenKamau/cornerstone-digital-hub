import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Leaf, Wind, Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroJikoSample from '@/assets/hero-jiko-sample.jpg';
import heroFactoryOutput from '@/assets/hero-factory-output.jpg';
import heroCeramicLiners from '@/assets/hero-ceramic-liners.jpg';
import heroTraining from '@/assets/hero-training.jpg';

const heroImages = [
  { src: heroJikoSample, alt: 'Jiko Kisasa / Rocket Jiko' },
  { src: heroFactoryOutput, alt: 'Assembled Cookstoves Factory Output' },
  { src: heroCeramicLiners, alt: 'Ceramic Liners Production' },
  { src: heroTraining, alt: 'Hands-on training for women groups' },
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Carousel Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentIndex].src}
            alt={heroImages[currentIndex].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Carousel Navigation */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors p-3 rounded-full"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors p-3 rounded-full"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8"
          >
            <Leaf className="w-4 h-4 text-primary-light" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Leading Clean Energy Manufacturer in Kenya
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Clean Energy for{' '}
            <span className="text-primary-light">Every Home</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl"
          >
            Efficient Cooking. Healthy Homes. Greener Communities. We manufacture high-quality improved cookstoves and eco-friendly briquettes for households, schools, and institutions across Kenya.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero" asChild>
              <Link to="/products">
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-primary-foreground/20"
          >
            {[
              { icon: Leaf, value: '5+', label: 'Product Lines' },
              { icon: Home, value: '1000+', label: 'Homes Served' },
              { icon: Wind, value: '60%', label: 'Less Emissions' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 text-primary-light mx-auto mb-2" />
                <p className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-primary-foreground rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
