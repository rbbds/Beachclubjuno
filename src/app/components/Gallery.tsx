import { useState } from 'react';
import { Camera } from 'lucide-react';
import { WaveTransition } from './WaveTransition';
import { Lightbox } from './Lightbox';
import { images } from '../data/images';

const galleryImages = images.gallery;

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
      <section id="gallery" className="relative py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img 
                src={image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Cream overlay on hover */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300" />
              {/* Camera icon centered */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-8 h-8 text-background drop-shadow-lg" />
              </div>
            </button>
          ))}
        </div>

        {/* Wave transition to Watersport section */}
        <WaveTransition fillColor="#f6f4db" />
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </>
  );
}