import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { WaveDecoration } from '../components/WaveDecoration';
import { Heart, Users, Sparkles } from 'lucide-react';
import { images } from '../data/images';

export function Bruiloften() {
  const features = [
    {
      icon: Heart,
      title: 'Eigen ceremonieplek op het strand',
      description: 'Een intieme setting aan de vloedlijn, omringd door het ruisen van de golven en het zachte zand onder uw voeten.',
    },
    {
      icon: Users,
      title: 'Volledig verzorgd diner & drankenpakket',
      description: 'Van welkomstdrankjes tot het dessert: onze chef creëert een culinaire ervaring die uw gasten niet vergeten.',
    },
    {
      icon: Sparkles,
      title: 'Persoonlijke weddingcoördinator',
      description: 'Uw eigen contactpersoon die elk detail behartigt, van de eerste kennismaking tot de laatste dans.',
    },
  ];

  const sfeerPhotos = images.bruiloften.sfeer;

  return (
    <div className="min-h-screen bg-[#f6f4db]">
      <Navigation />

      {/* Hero */}
      <div className="relative h-screen w-full overflow-hidden">
        <img 
          src={images.bruiloften.hero}
          alt="Beach wedding"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 
            className="text-[#f6f4db] mb-6 tracking-wider"
            style={{ 
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(3.5rem, 12vw, 8rem)',
              lineHeight: '0.9'
            }}
          >
            TROUWEN AAN ZEE
          </h1>
          
          <WaveDecoration variant="inverted" className="w-48 h-8 mb-6" />
          
          <p 
            className="text-[#f6f4db] text-xl md:text-2xl"
            style={{ fontFamily: 'Museo, sans-serif' }}
          >
            De Noordzee als getuige. Juno als decor.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 px-6" style={{ fontFamily: 'Museo, sans-serif' }}>
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#3d7183] text-lg leading-relaxed mb-6">
              Bij Juno geloven we dat een bruiloft zo uniek moet zijn als jullie verhaal. 
              Op onze locatie in Kijkduin combineren we het ruige strand met warme gastvrijheid 
              en persoonlijke service.
            </p>
            <p className="text-[#3d7183] text-lg leading-relaxed">
              Of jullie nu dromen van een intieme ceremonie met twintig gasten of een groots 
              feest met tweehonderd man — wij zorgen ervoor dat jullie dag perfect verloopt, 
              van het eerste ja-woord tot de laatste dans.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={images.bruiloften.intro}
              alt="Beach ceremony"
              className="w-full h-[500px] object-cover rounded-xl shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Wat wij bieden */}
      <section className="py-20 px-6 bg-[#9fbaae]/10" style={{ fontFamily: 'Museo, sans-serif' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <WaveDecoration className="w-24 h-4 text-[#cc6435] mx-auto mb-4" />
            <h2 
              className="text-[#3d7183] mb-4 tracking-wide"
              style={{ 
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                lineHeight: '1'
              }}
            >
              WAT WIJ BIEDEN
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <button 
                key={index}
                className="bg-[#f6f4db] p-8 rounded-xl border-2 border-[#9fbaae]/30 hover:border-[#9fbaae] transition-all hover:shadow-lg cursor-pointer text-left w-full"
              >
                <WaveDecoration variant="special" className="w-12 h-3 mb-4" />
                <feature.icon className="w-10 h-10 text-[#3d7183] mb-4" />
                <h3 
                  className="text-[#3d7183] mb-3 tracking-wide"
                  style={{ 
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: '1.5rem',
                    lineHeight: '1.2'
                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-[#3d7183] leading-relaxed">
                  {feature.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sfeer */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 
              className="text-[#3d7183] tracking-wide"
              style={{ 
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                lineHeight: '1'
              }}
            >
              SFEER IMPRESSIE
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {sfeerPhotos.map((photo, index) => (
              <div key={index} className="relative aspect-[3/4] overflow-hidden rounded-xl group">
                <img 
                  src={photo}
                  alt={`Wedding impression ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Praktisch */}
      <section className="py-20 px-6" style={{ fontFamily: 'Museo, sans-serif' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <WaveDecoration variant="special" className="w-24 h-4 mx-auto mb-4" />
            <h2 
              className="text-[#3d7183] tracking-wide"
              style={{ 
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                lineHeight: '1'
              }}
            >
              PRAKTISCHE INFORMATIE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 bg-white p-10 rounded-xl shadow-sm">
            <div>
              <h3 
                className="text-[#3d7183] mb-4 tracking-wide"
                style={{ 
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '1.75rem'
                }}
              >
                DE DETAILS
              </h3>
              <ul className="space-y-3 text-[#3d7183] text-lg">
                <li><strong>Capaciteit:</strong> 20 tot 200 personen</li>
                <li><strong>Beschikbaar:</strong> april t/m oktober</li>
                <li><strong>Locatie:</strong> Kijkduin, Den Haag</li>
                <li><strong>Faciliteiten:</strong> Binnen- en buitenruimte, dansarea, professionele audio</li>
              </ul>
            </div>

            <div>
              <h3 
                className="text-[#3d7183] mb-4 tracking-wide"
                style={{ 
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '1.75rem'
                }}
              >
                ONZE AANPAK
              </h3>
              <p className="text-[#3d7183] text-lg leading-relaxed mb-4">
                Wij ontzorgen u volledig: van de tafelschikking tot de laatste dans. 
                Elke bruiloft krijgt een persoonlijke weddingcoördinator die jullie 
                wensen vertaalt naar een onvergetelijke dag.
              </p>
              <p className="text-[#3d7183] text-lg leading-relaxed">
                Neem vrijblijvend contact op en we denken graag met u mee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-20 px-6 bg-[#3d7183]" style={{ fontFamily: 'Museo, sans-serif' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 
            className="text-[#f6f4db] mb-6 tracking-wider"
            style={{ 
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: '1'
            }}
          >
            JULLIE VERHAAL,<br />ONS PODIUM
          </h2>
          
          <WaveDecoration variant="inverted" className="w-48 h-6 mx-auto mb-8" />
          
          <p className="text-[#f6f4db] text-xl mb-10 max-w-2xl mx-auto">
            Klaar om jullie droombruiloft aan zee werkelijkheid te maken? 
            We horen graag jullie verhaal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#cc6435] text-[#f6f4db] px-8 py-4 text-lg rounded-lg hover:bg-[#b55730] transition-colors">
              Vraag offerte aan
            </button>
            <button className="border-2 border-[#f6f4db] text-[#f6f4db] px-8 py-4 text-lg rounded-lg hover:bg-[#f6f4db] hover:text-[#3d7183] transition-colors">
              Neem contact op
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}