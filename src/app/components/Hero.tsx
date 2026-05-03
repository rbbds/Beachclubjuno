import { useState, useEffect } from 'react';
import { WaveDecoration } from './WaveDecoration';
import { WaveTransition } from './WaveTransition';
import { JunoButton } from './JunoButton';
import { scrollToSection } from '../utils/scroll';
import { images } from '../data/images';
import { sanityClient } from '../../lib/sanity';

export function Hero() {
  const [headline, setHeadline] = useState('ZON. STRAND.\nCULTUUR.');
  const [subtitle, setSubtitle] = useState('Waar de Noordzee, culinaire verfijning en culturele beleving samenkomen. Welkom bij Beachclub Juno, Kijkduin.');
  const [ctaLabel, setCtaLabel] = useState('Ontdek ons verhaal');

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "homePage"][0]{ hero }`)
      .then(data => {
        if (data?.hero?.headline) setHeadline(data.hero.headline);
        if (data?.hero?.subtitle) setSubtitle(data.hero.subtitle);
        if (data?.hero?.ctaLabel) setCtaLabel(data.hero.ctaLabel);
      })
      .catch(() => {});
  }, []);

  const headlineLines = headline.split('\n');

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img 
        src={images.hero.main}
        alt="Beachclub Juno aan het strand van Kijkduin bij zonsondergang"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 
          className="text-background mb-6 tracking-wider font-display"
          style={{ 
            fontSize: 'clamp(3.5rem, 12vw, 10rem)',
            lineHeight: '0.9'
          }}
        >
          {headlineLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < headlineLines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        
        <WaveDecoration variant="inverted" className="w-32 h-4 mb-8" />
        
        <p className="text-background max-w-2xl mb-10 text-lg md:text-xl font-body">
          {subtitle}
        </p>
        
        <JunoButton variant="primary" size="lg" onClick={() => scrollToSection('verhaal')}>
          {ctaLabel}
        </JunoButton>
      </div>

      <WaveTransition fillColor="#f6f4db" />
    </div>
  );
}