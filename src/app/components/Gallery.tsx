import { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';
import { WaveTransition } from './WaveTransition';
import { Lightbox } from './Lightbox';
import { images } from '../data/images';
import { sanityClient, urlFor } from '../../lib/sanity';

export function Gallery() {
  const [galleryImages, setGalleryImages] = useState<string[]>(images.gallery);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "homePage"][0]{ gallery }`)
      .then(data => {
        if (data?.gallery?.length) {
          setGalleryImages(
            data.gallery.map((img: any) => urlFor(img).width(1080).url())
          );
        }
      })
      .catch(() => {});
  }, []);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  const previousImage = () => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <>
      <section id="gallery" className="relative py-20 pb-32">
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
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-8 h-8 text-background drop-shadow-lg" />
              </div>
            </button>
          ))}
        </div>

        <WaveTransition fillColor="#e8f0f3" />
      </section>

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