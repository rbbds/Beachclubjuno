import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router';
import { JunoLogo } from './JunoLogo';
import { scrollToSection as scrollToSectionUtil, scrollToTop } from '../utils/scroll';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // If not on homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSectionUtil(id);
      }, 100);
    } else {
      // Already on homepage, just scroll
      scrollToSectionUtil(id);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToTop();
    }
  };

  return (
    <footer id="contact" className="bg-primary text-background py-16 px-6 font-body">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <JunoLogo variant="special" className="h-24 w-auto mb-4" onClick={handleLogoClick} />
            <p className="text-background/80">
              Zon. Strand. Cultuur.
              <br />
              Waar de Noordzee en cultuur elkaar ontmoeten.
            </p>
          </div>

          {/* Navigatie */}
          <div>
            <h4 
              className="mb-4 tracking-wide font-display"
              style={{ 
                fontSize: '1.25rem'
              }}
            >
              Navigatie
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('restaurant')} className="text-background/80 hover:text-accent transition-colors">
                  Restaurant
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('programma')} className="text-background/80 hover:text-accent transition-colors">
                  Programma
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('events')} className="text-background/80 hover:text-accent transition-colors">
                  Events & Verhuur
                </button>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-background/80 hover:text-accent transition-colors">
                  Veelgestelde vragen
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="mb-4 tracking-wide font-display"
              style={{ 
                fontSize: '1.25rem'
              }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-background/80">
                  Strand Zuid 18<br />
                  2554 ZZ Den Haag
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                <span className="text-background/80">06 2473 4660</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                <span className="text-background/80">info@clubjuno.nl</span>
              </li>
            </ul>
          </div>

          {/* Openingstijden & Nieuwsbrief */}
          <div>
            <h4 
              className="mb-4 tracking-wide font-display"
              style={{ 
                fontSize: '1.25rem'
              }}
            >
              Openingstijden
            </h4>
            <p className="text-background/80">
              Ma - Do: 10:00 - 22:00<br />
              Vr - Za: 10:00 - 01:00<br />
              Zo: 10:00 - 22:00
            </p>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2026 Beachclub Juno. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-background/60 hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}