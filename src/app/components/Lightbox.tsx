import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function Lightbox({ images, currentIndex, onClose, onNext, onPrevious }: LightboxProps) {
  useEffect(() => {
    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrevious();
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyDown);

    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrevious]);

  // Touch/swipe support
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      if (touchStartX - touchEndX > 50) {
        // Swipe left - next image
        onNext();
      }
      if (touchEndX - touchStartX > 50) {
        // Swipe right - previous image
        onPrevious();
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onNext, onPrevious]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
      onClick={onClose}
    >
      {/* Main content */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {/* Photo */}
        <img
          src={images[currentIndex]}
          alt={`Beachclub Juno — foto ${currentIndex + 1}`}
          className="max-h-[85vh] max-w-[80vw] object-contain rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Close button - top right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-background hover:text-accent transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Previous button - left */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-background hover:bg-accent transition-colors shadow-lg cursor-pointer"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next button - right */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-background hover:bg-accent transition-colors shadow-lg cursor-pointer"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Photo counter - bottom center */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-background text-lg px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm font-body"
        >
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}