import { images } from '../data/images';
import { WaveDecoration } from './WaveDecoration';

export function Intro() {
  return (
    <section id="verhaal" className="py-20 px-6 font-body">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 
            className="text-primary mb-6 tracking-wide font-display"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: '1'
            }}
          >
            MEER DAN EEN<br />BEACHCLUB
          </h2>
          <WaveDecoration variant="special" className="w-20 h-3 mb-6" />
          <div className="space-y-4 text-primary text-lg leading-relaxed">
            <p>
              Beachclub Juno is een ontmoetingsplek voor liefhebbers van goed eten, 
              mooi design en culturele verdieping. Gelegen aan het strand van Kijkduin, 
              bieden wij een unieke combinatie van culinaire excellentie en inspirerende 
              evenementen.
            </p>
            <p>
              Van jazz en theater tot comedy — bij ons komt cultuur tot leven met de 
              Noordzee als decor. En voor de mooiste momenten in uw leven, zoals bruiloften 
              en zakelijke bijeenkomsten, bieden wij een onvergetelijke setting.
            </p>
          </div>
        </div>
        
        <div className="relative overflow-hidden rounded-xl shadow-sm group">
          <img 
            src={images.intro.terrace}
            alt="Terras van Beachclub Juno met uitzicht op de Noordzee"
            className="w-full h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}