import { WaveDecoration } from './WaveDecoration';
import { Link } from 'react-router';
import { images } from '../data/images';

export function Events() {
  return (
    <section id="events" className="py-20 px-6" style={{ fontFamily: 'Museo, sans-serif' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-[#3d7183] mb-2 tracking-wide"
            style={{ 
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: '1'
            }}
          >
            EVENTS & VERHUUR
          </h2>
          <WaveDecoration variant="special" className="w-24 h-3 mx-auto mt-3 mb-4" />
          <p className="text-[#3d7183] text-lg max-w-2xl mx-auto">
            De perfecte locatie voor uw bijzondere moment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bruiloften */}
          <div className="group">
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
              <img 
                src={images.events.bruiloften}
                alt="Beach wedding"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 
                className="absolute bottom-6 left-6 text-[#f6f4db] tracking-wide"
                style={{ 
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: '1'
                }}
              >
                BRUILOFTEN
              </h3>
            </div>
            <p className="text-[#3d7183] text-lg mb-4 leading-relaxed">
              Trouwen met de Noordzee als getuige. Van intieme ceremonies tot grote feesten — 
              wij regelen alles voor uw droombruiloft aan zee.
            </p>
            <Link to="/bruiloften" className="inline-flex items-center text-[#cc6435] hover:text-[#b55730] transition-all py-2">
              <span 
                className="hover:underline"
                style={{ fontFamily: 'Museo, sans-serif', fontWeight: 700, fontSize: '16px' }}
              >
                Meer informatie
              </span>
              <span className="ml-1 hover:translate-x-1 transition-transform" style={{ fontSize: '16px' }}>→</span>
            </Link>
          </div>

          {/* Bedrijfsfeesten */}
          <div className="group">
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
              <img 
                src={images.events.bedrijfsfeesten}
                alt="Corporate event"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 
                className="absolute bottom-6 left-6 text-[#f6f4db] tracking-wide"
                style={{ 
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: '1'
                }}
              >
                BEDRIJFSFEESTEN
              </h3>
            </div>
            <p className="text-[#3d7183] text-lg mb-4 leading-relaxed">
              Inspirerende zakelijke bijeenkomsten, teambuilding en congressen in een 
              unieke strandlocatie. Inclusief catering en technische ondersteuning.
            </p>
            <Link to="/bedrijfsfeesten" className="inline-flex items-center text-[#cc6435] hover:text-[#b55730] transition-all py-2">
              <span 
                className="hover:underline"
                style={{ fontFamily: 'Museo, sans-serif', fontWeight: 700, fontSize: '16px' }}
              >
                Meer informatie
              </span>
              <span className="ml-1 hover:translate-x-1 transition-transform" style={{ fontSize: '16px' }}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}