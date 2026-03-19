import { WaveDecoration } from './WaveDecoration';
import { WaveTransition } from './WaveTransition';
import { images } from '../data/images';

export function Restaurant() {
  return (
    <section id="restaurant" className="relative py-20 px-6 font-body">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative">
          <img 
            src={images.restaurant.main}
            alt="Seafood platter"
            className="w-full h-[600px] object-cover rounded-xl"
          />
          
          <div className="absolute bottom-0 left-0 right-0 md:relative md:max-w-xl md:-mt-32 md:ml-auto md:mr-12 bg-background p-10 rounded-xl">
            <h2 
              className="text-primary mb-4 tracking-wide font-display"
              style={{ 
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1'
              }}
            >
              RESTAURANT
            </h2>
            
            <WaveDecoration variant="special" className="w-24 h-3 mt-4 mb-6" />
            
            <p className="text-primary text-lg mb-6 leading-relaxed">
              Onze keuken combineert verse lokale ingrediënten met internationale 
              invloeden. Geniet van seizoensgebonden gerechten, verse vis uit de 
              Noordzee en een zorgvuldig samengestelde wijnkaart.
            </p>
            
            <button className="bg-accent text-background px-8 py-3 rounded-lg hover:bg-accent/85 transition-colors">
              Bekijk de kaart
            </button>
          </div>
        </div>
      </div>

      {/* Wave transition to Programma section - Sage green #9fbaae */}
      <WaveTransition key="restaurant-wave" fillColor="#9fbaae" />
    </section>
  );
}