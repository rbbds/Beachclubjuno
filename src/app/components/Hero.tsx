import { WaveDecoration } from './WaveDecoration';
import { WaveTransition } from './WaveTransition';
import { scrollToSection } from '../utils/scroll';

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1677166475617-0ac52090362a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMGdvbGRlbiUyMGhvdXIlMjBhdG1vc3BoZXJpY3xlbnwxfHx8fDE3NzM4MzY4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
        
        <WaveDecoration className="w-48 h-8 text-[#cc6435] mb-8" />
        
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