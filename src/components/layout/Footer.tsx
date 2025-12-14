import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-background leading-tight">
                  Leenbenx
                </span>
                <span className="text-xs text-background/60 leading-tight">
                  Cornerstone Investments
                </span>
              </div>
            </Link>
            <p className="text-background/70 mb-6 text-sm leading-relaxed">
              Clean Energy for every Home: Efficient Cooking. Healthy Homes. Greener Communities.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-background/70 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3">
              {['Jiko Kisasa', 'Rocket Jikos', 'Institutional Stoves', 'Biomass Briquettes', 'Ceramic Liners'].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-background/70 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  Juja Town, Kiambu County, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-background/70 text-sm">
                  <p>+254 758 291 007</p>
                  <p>+254 724 216 947</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@leenbenx.org"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  info@leenbenx.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Leenbenx Cornerstone Investments. All rights reserved.
          </p>
          <p className="text-primary text-sm font-medium italic">
            "Upishi Bora, Afya Bora"
          </p>
        </div>
      </div>
    </footer>
  );
};
