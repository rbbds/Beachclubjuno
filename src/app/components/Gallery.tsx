import { useState } from 'react';
import { Camera } from 'lucide-react';
import { Lightbox } from './Lightbox';
import { WaveTransition } from './WaveTransition';

const galleryImages = [
  'https://images.unsplash.com/photo-1766393524464-e5eb1b05e4c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc3RhdXJhbnQlMjBlbGVnYW50JTIwZGluaW5nfGVufDF8fHx8MTc3MzgzNjg5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1750943082012-efe6d2fd9e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwcGxhdGluZyUyMGdvdXJtZXQlMjBmb29kfGVufDF8fHx8MTc3MzgzNjg5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1677166475617-0ac52090362a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMGdvbGRlbiUyMGhvdXIlMjBhdG1vc3BoZXJpY3xlbnwxfHx8fDE3NzM4MzY4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1767667995308-639861440ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGNsdWIlMjB0ZXJyYWNlJTIwb2NlYW4lMjB2aWV3fGVufDF8fHx8MTc3MzgzNjg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1765100479761-2359e22fbe16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwc2VhZm9vZCUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzczODM2ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
];

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
      <section className="relative py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img 
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Cream overlay on hover */}
              <div className="absolute inset-0 bg-[#f6f4db]/0 group-hover:bg-[#f6f4db]/10 transition-colors duration-300" />
              {/* Camera icon centered */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-8 h-8 text-[#f6f4db] drop-shadow-lg" />
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