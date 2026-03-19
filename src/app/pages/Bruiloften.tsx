import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { WaveDecoration } from '../components/WaveDecoration';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { JunoButton } from '../components/JunoButton';
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
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <PageHero
        image={images.bruiloften.hero}
        title="TROUWEN AAN ZEE"
        subtitle="De Noordzee als getuige. Juno als decor."
        waveVariant="inverted"
        height="h-screen"
      />

      {/* Intro */}
      <section className="py-20 px-6 font-body">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-lg leading-relaxed mb-6">
              Bij Juno geloven we dat een bruiloft zo uniek moet zijn als jullie verhaal. 
              Op onze locatie in Kijkduin combineren we het ruige strand met warme gastvrijheid 
              en persoonlijke service.
            </p>
            <p className="text-primary text-lg leading-relaxed">
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
      <section className="py-20 px-6 bg-secondary/10 font-body">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader title="WAT WIJ BIEDEN" waveVariant="special" />

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <button 
                key={index}
                className="bg-background p-8 rounded-xl border-2 border-secondary/30 hover:border-secondary transition-all hover:shadow-lg cursor-pointer text-left w-full"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 
                  className="text-primary mb-3 tracking-wide font-display"
                  style={{ 
                    fontSize: '1.5rem',
                    lineHeight: '1.2'
                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-primary leading-relaxed">
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
              className="text-primary tracking-wide font-display"
              style={{ 
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
      <section className="py-20 px-6 font-body">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader title="PRAKTISCHE INFORMATIE" waveVariant="special" />

          <div className="grid md:grid-cols-2 gap-12 bg-white p-10 rounded-xl shadow-sm">
            <div>
              <h3 
                className="text-primary mb-4 tracking-wide font-display"
                style={{ 
                  fontSize: '1.75rem'
                }}
              >
                DE DETAILS
              </h3>
              <ul className="space-y-3 text-primary text-lg">
                <li><strong>Capaciteit:</strong> 20 tot 200 personen</li>
                <li><strong>Beschikbaar:</strong> april t/m oktober</li>
                <li><strong>Locatie:</strong> Kijkduin, Den Haag</li>
                <li><strong>Faciliteiten:</strong> Binnen- en buitenruimte, dansarea, professionele audio</li>
              </ul>
            </div>

            <div>
              <h3 
                className="text-primary mb-4 tracking-wide font-display"
                style={{ 
                  fontSize: '1.75rem'
                }}
              >
                ONZE AANPAK
              </h3>
              <p className="text-primary text-lg leading-relaxed mb-4">
                Wij ontzorgen u volledig: van de tafelschikking tot de laatste dans. 
                Elke bruiloft krijgt een persoonlijke weddingcoördinator die jullie 
                wensen vertaalt naar een onvergetelijke dag.
              </p>
              <p className="text-primary text-lg leading-relaxed">
                Neem vrijblijvend contact op en we denken graag met u mee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-20 px-6 bg-primary font-body">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 
            className="text-background mb-6 tracking-wider font-display"
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: '1'
            }}
          >
            JULLIE VERHAAL,<br />ONS PODIUM
          </h2>
          
          <WaveDecoration variant="inverted" className="w-32 h-4 mx-auto mb-8" />
          
          <p className="text-background text-xl mb-10 max-w-2xl mx-auto">
            Klaar om jullie droombruiloft aan zee werkelijkheid te maken? 
            We horen graag jullie verhaal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <JunoButton variant="primary" size="lg">
              Vraag offerte aan
            </JunoButton>
            <JunoButton variant="outline-light" size="lg">
              Neem contact op
            </JunoButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}