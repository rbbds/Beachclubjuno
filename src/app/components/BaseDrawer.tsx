import { useEffect } from 'react';

interface BaseDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function BaseDrawer({ isOpen, onClose, children }: BaseDrawerProps) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-primary/50 z-[60] transition-opacity ${
          isOpen ? 'opacity-100 duration-300' : 'opacity-0 duration-250 pointer-events-none'
        }`}
        style={{ 
          transitionTimingFunction: isOpen ? 'ease-out' : 'ease-in'
        }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[480px] bg-background z-[70] shadow-2xl drawer-scroll ${
          isOpen ? 'drawer-open' : 'drawer-close'
        }`}
      >
        {children}
      </div>
    </>
  );
}