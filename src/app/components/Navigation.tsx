import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { JunoLogo } from './JunoLogo';
import { scrollToSection as scrollToSectionUtil } from '../utils/scroll';
import { ChevronDown } from 'lucide-react';
import { openFormitableWidget } from './FormitableWidget';

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
        { label: 'Zakelijke Events', path: '/bedrijfsfeesten' },
        { label: 'Particuliere Events', path: '/particuliere-events' }
      ]
    },
    { label: 'Watersport', section: 'watersport' },
    { label: 'Contact', path: '/contact' }
  ];

  // Determine colors based on scroll state and current page
  // Pages with full-bleed hero images at the top
  const pagesWithHero = ['/', '/bedrijfsfeesten', '/particuliere-events', '/programma', '/faq', '/contact'];
  const hasHero = pagesWithHero.includes(location.pathname);
  const isTransparent = !isScrolled && hasHero;
  
  const navLinkColor = isTransparent ? 'text-background' : 'text-primary';
  const navLinkHoverColor = 'hover:text-accent';
  const logoVariant = isTransparent ? 'inverted' : 'default';
  const hamburgerColor = (isTransparent && !isMenuOpen) ? 'bg-white' : 'bg-primary';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 transition-all duration-300 z-[60] font-body ${
          isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
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
              onClick={() => openFormitableWidget()}
              className="bg-accent text-background px-6 py-2.5 rounded-lg hover:bg-accent/85 transition-colors cursor-pointer"
            >
              Reserveren
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className={`${navLinkColor} ${navLinkHoverColor} transition-colors`}
            >
              Contact
            </button>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none"
            aria-label={isMenuOpen ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <span
                className="block h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out origin-center"
                style={{
                  backgroundColor: isMenuOpen ? 'var(--color-primary)' : (isTransparent ? 'var(--color-primary-foreground)' : 'var(--color-primary)'),
                  transform: isMenuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out"
                style={{
                  backgroundColor: isMenuOpen ? 'var(--color-primary)' : (isTransparent ? 'var(--color-primary-foreground)' : 'var(--color-primary)'),
                  opacity: isMenuOpen ? 0 : 1,
                  transform: isMenuOpen ? 'scaleX(0)' : 'scaleX(1)',
                }}
              />
              <span
                className="block h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out origin-center"
                style={{
                  backgroundColor: isMenuOpen ? 'var(--color-primary)' : (isTransparent ? 'var(--color-primary-foreground)' : 'var(--color-primary)'),
                  transform: isMenuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-primary/20 z-50 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Slide-in Panel */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-full bg-background border-l border-primary/10 z-50 lg:hidden transition-transform duration-300 ease-in-out flex flex-col font-body ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Zone 1: Sluitknop alleen, flush aan top */}
        <div className="flex items-center justify-end px-4 py-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-primary hover:text-accent transition-colors"
            aria-label="Menu sluiten"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Zone 2: Nav List */}
        <div className="flex-1 overflow-y-auto px-6">
          {navItems.map((item, index) => (
            <div key={item.label}>
              {/* Nav Item Row */}
              <div className={`py-4 ${index < navItems.length - 1 ? 'border-b border-primary/8' : ''}`}>
                {!item.children ? (
                  // Simple item - full width button
                  <button
                    onClick={() => item.path ? handleMobilePageNavigation(item.path) : handleMobileNavClick(item.section!)}
                    className="w-full text-left"
                  >
                    <span 
                      className="text-primary font-display"
                      style={{ 
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
                          className="text-primary font-display"
                          style={{ 
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
                          className={`w-4 h-4 text-accent transition-transform duration-200 ${
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
                            className="text-accent"
                            style={{ 
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
            onClick={() => { setIsMenuOpen(false); setTimeout(openFormitableWidget, 300); }}
            className="w-full bg-accent text-white rounded-lg py-4 hover:bg-accent/85 transition-colors cursor-pointer"
            style={{ fontSize: '1rem', fontWeight: 500 }}
          >
            Reserveren
          </button>
        </div>
      </div>
    </>
  );
}