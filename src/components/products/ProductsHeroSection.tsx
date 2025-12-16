import { motion } from 'framer-motion';
import { ArrowRight, Flame, ShieldCheck, Leaf, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import stovesFactory from '@/assets/stoves-factory.jpg';

export const ProductsHeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={stovesFactory}
          alt="Leenbenx Stoves Factory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-primary/30" />
      </div>

      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute top-10 right-10 w-96 h-96 bg-primary rounded-full blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1.5 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[150px]"
      />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-32 right-[15%] hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <Flame className="w-8 h-8 text-orange-400" />
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-40 right-[25%] hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <Leaf className="w-8 h-8 text-green-400" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-5 py-2.5 mb-8"
            >
              <Zap className="w-4 h-4 text-primary-light" />
              <span className="text-white text-sm font-semibold">
                Premium Clean Energy Products
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            >
              Quality{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-secondary">
                Clean Energy
              </span>{' '}
              Products
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl"
            >
              Diverse portfolio of clean-energy products designed to improve health, 
              reduce energy costs, and protect the environment. From household stoves 
              to institutional solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Request Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => {
                  document.getElementById('products-showcase')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Products
              </Button>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { icon: Flame, title: 'Energy Efficient', desc: 'Up to 60% fuel savings', color: 'text-orange-400' },
              { icon: ShieldCheck, title: 'Certified Quality', desc: 'Meets safety standards', color: 'text-blue-400' },
              { icon: Leaf, title: 'Eco-Friendly', desc: 'Reduced emissions', color: 'text-green-400' },
              { icon: Zap, title: 'Fast Cooking', desc: 'Quick heat retention', color: 'text-yellow-400' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <feature.icon className={`w-10 h-10 ${feature.color} mb-4`} />
                <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient for Smooth Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
