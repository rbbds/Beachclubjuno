import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { JunoLogo } from './JunoLogo';
import { scrollToSection as scrollToSectionUtil } from '../utils/scroll';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const goToHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Determine colors based on scroll state and current page
  // Pages with full-bleed hero images at the top
  const pagesWithHero = ['/', '/bruiloften', '/bedrijfsfeesten', '/programma'];
  const hasHero = pagesWithHero.includes(location.pathname);
  const isTransparent = !isScrolled && hasHero;
  
  const navLinkColor = isTransparent ? 'text-[#f6f4db]' : 'text-[#3d7183]';
  const navLinkHoverColor = 'hover:text-[#cc6435]';
  const logoVariant = isTransparent ? 'inverted' : 'default';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#f6f4db]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
      style={{ fontFamily: 'Museo, sans-serif' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={goToHome}>
          <JunoLogo variant={logoVariant} className="h-10 w-auto" />
        </button>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('restaurant')}
            className={`${navLinkColor} ${navLinkHoverColor} transition-colors`}
          >
            Restaurant
          </button>
          <button 
            onClick={() => scrollToSection('programma')}
            className={`${navLinkColor} ${navLinkHoverColor} transition-colors`}
          >
            Programma
          </button>
          <button 
            onClick={() => scrollToSection('events')}
            className={`${navLinkColor} ${navLinkHoverColor} transition-colors`}
          >
            Events
          </button>
          <button 
            onClick={() => scrollToSection('watersport')}
            className={`${navLinkColor} ${navLinkHoverColor} transition-colors`}
          >
            Watersport
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#cc6435] text-[#f6f4db] px-6 py-2.5 rounded-lg hover:bg-[#b55730] transition-colors"
          >
            Reserveren
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`${navLinkColor} ${navLinkHoverColor} transition-colors`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}