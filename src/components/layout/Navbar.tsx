import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/leenbenx-logo-new.png';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'glass py-3 shadow-card' : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={cn(
              "w-12 h-12 rounded-xl overflow-hidden shadow-soft group-hover:shadow-glow transition-all duration-300 flex items-center justify-center",
              scrolled ? "bg-background" : "bg-white/90"
            )}>
              <img 
                src={logo} 
                alt="Leenbenx Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-heading font-bold text-lg leading-tight transition-colors duration-300",
                scrolled ? "text-foreground" : "text-white drop-shadow-lg"
              )}>
                Leenbenx
              </span>
              <span className={cn(
                "text-xs leading-tight transition-colors duration-300",
                scrolled ? "text-muted-foreground" : "text-white/90 drop-shadow-lg"
              )}>
                Cornerstone Investments
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'link-underline font-medium transition-colors duration-300',
                  scrolled
                    ? (location.pathname === link.href ? 'text-primary' : 'text-foreground hover:text-primary')
                    : (location.pathname === link.href ? 'text-white drop-shadow-lg' : 'text-white/90 hover:text-white drop-shadow-lg')
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant={scrolled ? "default" : "outline"} size="lg" className={cn(
              !scrolled && "border-white text-white hover:bg-white hover:text-primary drop-shadow-lg"
            )}>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              scrolled ? "hover:bg-accent" : "hover:bg-white/20"
            )}
          >
            {isOpen ? <X className={cn("w-6 h-6", !scrolled && "text-white drop-shadow-lg")} /> : <Menu className={cn("w-6 h-6", !scrolled && "text-white drop-shadow-lg")} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className={cn(
                "py-6 space-y-4 rounded-lg mt-2",
                !scrolled && "bg-black/50 backdrop-blur-md px-4"
              )}>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'block py-2 font-medium transition-colors',
                        scrolled 
                          ? (location.pathname === link.href ? 'text-primary' : 'text-foreground hover:text-primary')
                          : (location.pathname === link.href ? 'text-white' : 'text-white/90 hover:text-white')
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button asChild className="w-full mt-4">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
