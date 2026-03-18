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
    { label: 'Ons verhaal', section: 'intro' },
    { label: 'Restaurant', section: 'restaurant' },
    { 
      label: 'Programma', 
      section: 'programma',
      children: [
        { label: 'Bekijk sectie', section: 'programma', isSection: true },
        { label: 'Alle evenementen', path: '/programma' }
      ]
    },
    { 
      label: 'Events & Verhuur', 
      section: 'events',
      children: [
        { label: 'Bekijk sectie', section: 'events', isSection: true },
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
            className="lg:hidden flex flex-col gap-[5px] w-6 h-6 justify-center"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span 
              className={`h-[2px] w-6 rounded transition-all duration-300 ${hamburgerColor} ${
                isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span 
              className={`h-[2px] w-6 rounded transition-all duration-300 ${hamburgerColor} ${
                isMenuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span 
              className={`h-[2px] w-6 rounded transition-all duration-300 ${hamburgerColor} ${
                isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-[#3d7183]/18 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Slide-in Panel */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-[#f6f4db] z-40 lg:hidden transition-transform duration-300 ease-in-out flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ fontFamily: 'Museo, sans-serif' }}
      >
        {/* Panel Header */}
        <div className="h-16 px-6 flex items-center justify-between border-b border-[#9fbaae]/30">
          <JunoLogo variant="default" className="h-8 w-auto" />
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-[#3d7183] hover:text-[#cc6435] transition-colors"
            aria-label="Menu sluiten"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav Items */}
        <div className="flex-1 overflow-y-auto">
          {navItems.map((item, index) => (
            <div key={item.label}>
              {index > 0 && <div className="h-[1px] bg-[#9fbaae]/20" />}
              
              <div>
                <button
                  onClick={() => {
                    if (item.children) {
                      toggleExpanded(item.label);
                    } else {
                      handleMobileNavClick(item.section!);
                    }
                  }}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#9fbaae]/5 transition-colors"
                >
                  <span 
                    className="text-[#3d7183]"
                    style={{ 
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '1.35rem',
                      letterSpacing: '0.06em',
                      lineHeight: '1.2'
                    }}
                  >
                    {item.label}
                  </span>
                  {item.children && (
                    <ChevronDown 
                      className={`w-5 h-5 text-[#cc6435] transition-transform duration-300 ${
                        expandedItems.includes(item.label) ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Sub-menu */}
                {item.children && (
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedItems.includes(item.label) ? 'max-h-48' : 'max-h-0'
                    }`}
                  >
                    <div className="border-l-2 border-[#9fbaae]/40 ml-6 pl-4 py-2">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => {
                            if (child.isSection) {
                              handleMobileNavClick(child.section!);
                            } else {
                              handleMobilePageNavigation(child.path!);
                            }
                          }}
                          className={`w-full text-left py-2 transition-colors ${
                            child.isSection 
                              ? 'text-sm text-[#3d7183]/70 hover:text-[#3d7183]' 
                              : 'text-sm font-medium text-[#cc6435] hover:text-[#b55730]'
                          }`}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Panel Footer */}
        <div className="border-t border-[#9fbaae]/30 px-6 py-6">
          <button 
            onClick={() => handleMobileNavClick('contact')}
            className="w-full bg-[#cc6435] text-white rounded-lg py-3.5 hover:bg-[#b55730] transition-colors"
          >
            Reserveren
          </button>
          <p className="text-xs text-[#3d7183]/50 text-center mt-4">
            Beachclub Juno · Kijkduin, Den Haag
          </p>
        </div>
      </div>
    </>
  );
}