import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { JunoLogo } from './JunoLogo';
import { scrollToSection as scrollToSectionUtil } from '../utils/scroll';
import { ChevronDown } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setExpandedItems([]);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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

  const handleMobileNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSectionUtil(sectionId), 300);
    } else {
      scrollToSectionUtil(sectionId);
    }
  };

  const handleMobilePageNavigation = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const toggleExpanded = (itemKey: string) => {
    setExpandedItems(prev => 
      prev.includes(itemKey) 
        ? prev.filter(key => key !== itemKey)
        : [...prev, itemKey]
    );
  };

  const navItems = [
    { label: 'Ons verhaal', section: 'verhaal' },
    { label: 'Restaurant', section: 'restaurant' },
    { 
      label: 'Programma', 
      section: 'programma',
      children: [
        { label: 'Alle evenementen', path: '/programma' }
      ]
    },
    { 
      label: 'Events & Verhuur', 
      section: 'events',
      children: [
        { label: 'Bruiloften', path: '/bruiloften' },
        { label: 'Bedrijfsfeesten', path: '/bedrijfsfeesten' }
      ]
    },
    { label: 'Galerij', section: 'gallery' },
    { label: 'Watersport', section: 'watersport' }
  ];

  // Determine colors based on scroll state and current page
  // Pages with full-bleed hero images at the top
  const pagesWithHero = ['/', '/bruiloften', '/bedrijfsfeesten', '/programma'];
  const hasHero = pagesWithHero.includes(location.pathname);
  const isTransparent = !isScrolled && hasHero;
  
  const navLinkColor = isTransparent ? 'text-[#f6f4db]' : 'text-[#3d7183]';
  const navLinkHoverColor = 'hover:text-[#cc6435]';
  const logoVariant = isTransparent ? 'inverted' : 'default';
  const hamburgerColor = (isTransparent && !isMenuOpen) ? 'bg-white' : 'bg-[#3d7183]';

  return (
    <>
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
          
          <div className="hidden lg:flex items-center gap-8">
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

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-0 focus:outline-none"
            aria-label={isMenuOpen ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={isMenuOpen}
          >
            <span
              className="absolute block h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: (isTransparent && !isMenuOpen) ? 'white' : '#3d7183',
                transform: isMenuOpen ? 'translateY(0) rotate(45deg)' : 'translateY(-5px)',
                transformOrigin: 'center',
              }}
            />
            <span
              className="absolute block h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: (isTransparent && !isMenuOpen) ? 'white' : '#3d7183',
                opacity: isMenuOpen ? 0 : 1,
                transformOrigin: 'center',
              }}
            />
            <span
              className="absolute block h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: (isTransparent && !isMenuOpen) ? 'white' : '#3d7183',
                transform: isMenuOpen ? 'translateY(0) rotate(-45deg)' : 'translateY(5px)',
                transformOrigin: 'center',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-[#3d7183]/20 z-50 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Slide-in Panel */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[88vw] max-w-[360px] bg-[#f6f4db] border-l border-[#3d7183]/10 z-50 lg:hidden transition-transform duration-300 ease-in-out flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ fontFamily: 'Museo, sans-serif' }}
      >
        {/* Zone 1: Top Branding Strip */}
        <div className="px-6 flex items-center" style={{ height: '72px' }}>
          <div>
            <JunoLogo variant="default" className="h-10 w-auto mb-1" />
            <p className="text-[#3d7183]/40 text-xs" style={{ fontFamily: 'Museo, sans-serif' }}>
              Kijkduin · Den Haag
            </p>
          </div>
        </div>

        {/* Zone 2: Nav List */}
        <div className="flex-1 overflow-y-auto px-6">
          {navItems.map((item, index) => (
            <div key={item.label}>
              {/* Nav Item Row */}
              <div className={`py-4 ${index < navItems.length - 1 ? 'border-b border-[#3d7183]/8' : ''}`}>
                {!item.children ? (
                  // Simple item - full width button
                  <button
                    onClick={() => handleMobileNavClick(item.section!)}
                    className="w-full text-left"
                  >
                    <span 
                      className="text-[#3d7183]"
                      style={{ 
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '1.5rem',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {item.label}
                    </span>
                  </button>
                ) : (
                  // Item with children - split tap zones
                  <>
                    <div className="flex items-center justify-between">
                      {/* Left zone: label scrolls to section */}
                      <button
                        onClick={() => handleMobileNavClick(item.section!)}
                        className="flex-1 text-left"
                      >
                        <span 
                          className="text-[#3d7183]"
                          style={{ 
                            fontFamily: 'Bebas Neue, sans-serif',
                            fontSize: '1.5rem',
                            letterSpacing: '0.05em'
                          }}
                        >
                          {item.label}
                        </span>
                      </button>
                      
                      {/* Right zone: chevron toggles sub-menu */}
                      <button
                        onClick={() => toggleExpanded(item.label)}
                        className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                        aria-label="Toggle submenu"
                      >
                        <ChevronDown 
                          className={`w-4 h-4 text-[#cc6435] transition-transform duration-200 ${
                            expandedItems.includes(item.label) ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Sub-menu */}
                    <div 
                      className="overflow-hidden transition-all duration-200"
                      style={{ 
                        maxHeight: expandedItems.includes(item.label) 
                          ? `${item.children.length * 44}px` 
                          : '0px' 
                      }}
                    >
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleMobilePageNavigation(child.path!)}
                          className="w-full text-left py-2.5"
                        >
                          <span 
                            className="text-[#cc6435]"
                            style={{ 
                              fontFamily: 'Museo, sans-serif',
                              fontSize: '0.9rem',
                              fontWeight: 600
                            }}
                          >
                            {child.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Zone 3: Footer CTA */}
        <div className="px-6 pb-10 pt-6">
          <button 
            onClick={() => handleMobileNavClick('contact')}
            className="w-full bg-[#cc6435] text-white rounded-lg py-4 hover:bg-[#b55730] transition-colors"
            style={{ fontFamily: 'Museo, sans-serif', fontSize: '1rem', fontWeight: 500 }}
          >
            Reserveren
          </button>
        </div>
      </div>
    </>
  );
}