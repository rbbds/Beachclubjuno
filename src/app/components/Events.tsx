import { WaveDecoration } from './WaveDecoration';
import { Link } from 'react-router';

export function Events() {
  return (
    <section id="events" className="py-20 px-6" style={{ fontFamily: 'Museo, sans-serif' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <WaveDecoration className="w-24 h-4 text-[#cc6435] mx-auto mb-4" />
          <h2 
            className="text-[#3d7183] mb-4 tracking-wide"
            style={{ 
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: '1'
            }}
          >
            EVENTS & VERHUUR
          </h2>
          <p className="text-[#3d7183] text-lg max-w-2xl mx-auto">
            De perfecte locatie voor uw bijzondere moment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bruiloften */}
          <div className="group">
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1766735654268-0753b49f7b45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHdlZGRpbmclMjBlbGVnYW50JTIwY2VyZW1vbnl8ZW58MXx8fHwxNzczODM2ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
                src="https://images.unsplash.com/photo-1571645163064-77faa9676a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzczNzk1NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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