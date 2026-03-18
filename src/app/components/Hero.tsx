import { WaveDecoration } from './WaveDecoration';
import { WaveTransition } from './WaveTransition';
import { scrollToSection } from '../utils/scroll';
import { images } from '../data/images';

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img 
        src={images.hero.main}
        alt="Beach sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 
          className="text-[#f6f4db] mb-6 tracking-wider"
          style={{ 
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(3.5rem, 12vw, 10rem)',
            lineHeight: '0.9'
          }}
        >
          ZON. STRAND.<br />CULTUUR.
        </h1>
        
        <WaveDecoration variant="special" className="w-32 h-4 mb-8" />
        
        <p 
          className="text-[#f6f4db] max-w-2xl mb-10 text-lg md:text-xl"
          style={{ fontFamily: 'Museo, sans-serif' }}
        >
          Waar de Noordzee, culinaire verfijning en culturele beleving samenkomen. 
          Welkom bij Beachclub Juno, Kijkduin.
        </p>
        
        <button 
          onClick={() => scrollToSection('verhaal')}
          className="bg-[#cc6435] text-[#f6f4db] px-8 py-4 text-lg rounded-lg hover:bg-[#b55730] transition-colors"
          style={{ fontFamily: 'Museo, sans-serif' }}
        >
          Ontdek ons verhaal
        </button>
      </div>

      {/* Wave transition to Intro section */}
      <WaveTransition fillColor="#f6f4db" />
    </div>
  );
}