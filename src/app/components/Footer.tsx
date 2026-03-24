import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router';
import { JunoLogo } from './JunoLogo';
import { scrollToSection as scrollToSectionUtil, scrollToTop } from '../utils/scroll';
import { useSiteSettings } from '../../lib/useSiteSettings';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const settings = useSiteSettings();

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
                <button onClick={() => scrollToSection('restaurant')} className="text-background/80 hover:text-accent transition-colors cursor-pointer">
                  Restaurant
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('programma')} className="text-background/80 hover:text-accent transition-colors cursor-pointer">
                  Programma
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('events')} className="text-background/80 hover:text-accent transition-colors cursor-pointer">
                  Events & Verhuur
                </button>
              </li>
              <li>
                <Link to="/bruiloften" className="text-background/80 hover:text-accent transition-colors">
                  Bruiloften
                </Link>
              </li>
              <li>
                <Link to="/bedrijfsfeesten" className="text-background/80 hover:text-accent transition-colors">
                  Zakelijke Events
                </Link>
              </li>
              <li>
                <Link to="/particuliere-events" className="text-background/80 hover:text-accent transition-colors">
                  Particuliere Events
                </Link>
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
                  {settings.address.street}<br />
                  {settings.address.postal} {settings.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                <span className="text-background/80">{settings.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                <span className="text-background/80">{settings.email}</span>
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
            {settings.openingHours.map(h => (
              <p key={h.days} className="text-background/80">
                {h.days}: {h.hours}
              </p>
            ))}
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2026 Beachclub Juno. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-4">
            <a href={settings.instagram} className="text-background/60 hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={settings.facebook} className="text-background/60 hover:text-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}