import { WaveDecoration } from './WaveDecoration';
import { WaveTransition } from './WaveTransition';
import { JunoButton } from './JunoButton';
import { scrollToSection } from '../utils/scroll';
import { images } from '../data/images';

export function Hero() {
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
          ZON. STRAND.<br />CULTUUR.
        </h1>
        
        <WaveDecoration variant="inverted" className="w-32 h-4 mb-8" />
        
        <p 
          className="text-background max-w-2xl mb-10 text-lg md:text-xl font-body"
        >
          Waar de Noordzee, culinaire verfijning en culturele beleving samenkomen. 
          Welkom bij Beachclub Juno, Kijkduin.
        </p>
        
        <JunoButton variant="primary" size="lg" onClick={() => scrollToSection('verhaal')}>
          Ontdek ons verhaal
        </JunoButton>
      </div>

      {/* Wave transition to Intro section */}
      <WaveTransition fillColor="#f6f4db" />
    </div>
  );
}