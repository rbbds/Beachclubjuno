import { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SectionHeader } from '../components/SectionHeader';
import { JunoButton } from '../components/JunoButton';
import { WaveDecoration } from '../components/WaveDecoration';
import { WaveTransition } from '../components/WaveTransition';
import { EventManagerContact } from '../components/EventManagerContact';
import { EventFaqSection } from '../components/EventFaqSection';
import { Heart, Users, Sparkles } from 'lucide-react';
import { images } from '../data/images';

export function Bruiloften() {
  useEffect(() => {
    document.title = 'Trouwen aan zee | Beachclub Juno Kijkduin';
    return () => { document.title = 'Beachclub Juno — Zon. Strand. Cultuur. | Kijkduin'; };
  }, []);

  const regelingCards = [
    {
      icon: Heart,
      title: 'PERSOONLIJKE BEGELEIDING',
      description: 'Jouw eigen weddingcoördinator begeleidt jullie van de eerste kennismaking tot de laatste dans. Altijd bereikbaar, altijd betrokken.'
    },
    {
      icon: Users,
      title: 'CATERING OP MAAT',
      description: 'Van welkomstdrankjes tot het dessert — onze chef creëert een culinaire ervaring die past bij jullie smaak en budget.'
    },
    {
      icon: Sparkles,
      title: 'DE PERFECTE SETTING',
      description: 'Strandceremonie, overdekt diner of een mix — we passen de locatie volledig aan jullie wensen aan.'
    }
  ];

  const momentenCards = [
    {
      image: images.bruiloften.hero,
      title: 'DE CEREMONIE',
      subtitle: 'Jullie ja-woord aan de vloedlijn'
    },
    {
      image: images.bruiloften.sfeer[0],
      title: 'WELKOMSTDRANKJE',
      subtitle: 'Proostend met uitzicht op zee'
    },
    {
      image: images.bruiloften.sfeer[1],
      title: 'HET DINER',
      subtitle: 'Culinair genieten met jullie gasten'
    },
    {
      image: images.bruiloften.sfeer[2],
      title: 'DE EERSTE DANS',
      subtitle: 'Met golven als decor'
    },
    {
      image: images.bruiloften.sfeer[3],
      title: 'HET FEEST',
      subtitle: 'Tot laat dansen aan het strand'
    }
  ];

  const faqItems = [
    { 
      question: 'Is Juno een officiële trouwlocatie?', 
      answer: 'Ja, Juno is een erkende trouwlocatie. Jullie kunnen hier officieel in het huwelijk treden, met de Noordzee als decor.' 
    },
    { 
      question: 'Hoeveel gasten kunnen we uitnodigen?', 
      answer: 'We ontvangen bruiloften van 20 tot 200 personen. Zowel intieme ceremonies als grote feesten zijn mogelijk.' 
    },
    { 
      question: 'Wanneer is Juno beschikbaar voor bruiloften?', 
      answer: 'We organiseren bruiloften het hele jaar door. Het hoogseizoen (mei t/m september) is snel volgeboekt — reserveer op tijd.' 
    },
    { 
      question: 'Kunnen we ook buiten trouwen?', 
      answer: 'Absoluut. Een strandceremonie aan de vloedlijn is een van onze mooiste opties. We hebben ook overdekte alternatieven voor onzeker weer.' 
    },
    { 
      question: 'Wat is er inbegrepen in een bruiloftarrangement?', 
      answer: 'Elk arrangement is maatwerk. Basisarrangementen bevatten locatiehuur, catering en een persoonlijke coördinator. Neem contact op voor een offerte op maat.' 
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* SECTION 1 — SPLIT HERO */}
      <section className="relative min-h-screen grid md:grid-cols-2 font-body">
        {/* Left column */}
        <div className="bg-background flex flex-col justify-center px-12 py-32 md:py-0">
          <div className="font-display text-accent text-xl tracking-wide mb-4">
            VIER DE LIEFDE
          </div>
          <h1 
            className="font-display text-primary mb-6"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1' }}
          >
            TROUWEN OP HET STRAND
          </h1>
          <WaveDecoration variant="special" className="w-24 h-3 mb-6" />
          <p className="text-primary text-lg leading-relaxed mb-6">
            Een zonovergoten dag, de Noordzee als getuige en een locatie die ademt. Bij Juno in Kijkduin wordt jouw bruiloft een dag om nooit te vergeten.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 items-start text-primary text-lg">
              <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
              <span>Officiële trouwlocatie aan het strand</span>
            </li>
            <li className="flex gap-3 items-start text-primary text-lg">
              <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
              <span>Persoonlijke weddingcoördinator</span>
            </li>
            <li className="flex gap-3 items-start text-primary text-lg">
              <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
              <span>Catering en open bar op maat</span>
            </li>
            <li className="flex gap-3 items-start text-primary text-lg">
              <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
              <span>20 tot 200 personen</span>
            </li>
          </ul>
          <div className="flex gap-4">
            <JunoButton variant="primary" size="lg">Vraag een offerte aan</JunoButton>
            <JunoButton variant="outline-dark" size="lg">Download brochure</JunoButton>
          </div>
        </div>

        {/* Right column */}
        <div className="relative overflow-hidden h-[50vh] md:h-auto">
          <img 
            src={images.bruiloften.hero}
            alt="Trouwen op het strand bij Beachclub Juno"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        <WaveTransition fillColor="#e8f0f3" />
      </section>

      {/* SECTION 2 — HOE WIJ HET REGELEN */}
      <section className="relative py-28 px-6 font-body bg-navy-soft text-primary">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            title="HOE WIJ HET REGELEN"
            subtitle="Van eerste kennismaking tot laatste dans — wij ontzorgen jullie volledig"
            waveVariant="special"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {regelingCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div 
                  key={index}
                  className="bg-background p-8 rounded-xl border-2 border-secondary/30 hover:border-secondary transition-all hover:shadow-lg text-left"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 
                    className="text-primary mb-3 tracking-wide font-display" 
                    style={{ fontSize: '1.5rem', lineHeight: '1.2' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-primary leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        
        <WaveTransition fillColor="#faf0ea" />
      </section>

      {/* SECTION 3 — EVENT MANAGER CONTACT */}
      <EventManagerContact
        name="Sarah"
        role="Wedding Coördinator bij Juno"
        photo={images.bruiloften.intro}
        intro="Ik ben Sarah, Wedding Coördinator bij Juno. Ik luister naar jullie verhaal en zorg ervoor dat jullie dag precies wordt zoals jullie het gedroomd hebben."
        phone="+31624734660"
        email="info@clubjuno.nl"
        bgColor="terracotta"
      />

      {/* SECTION 4 — SFEER FOTO STRIP */}
      <section className="relative overflow-hidden h-[500px]">
        <img 
          src={images.bruiloften.hero}
          alt="De Noordzee als getuige"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 
            className="font-display text-background text-center px-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1' }}
          >
            DE NOORDZEE ALS GETUIGE
          </h2>
          <WaveDecoration variant="inverted" className="w-24 h-3 mx-auto mt-4" />
        </div>
      </section>

      {/* SECTION 5 — MOMENTEN (horizontal scroll) */}
      <section className="py-28 px-6 font-body bg-background">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            title="VAN CEREMONIE TOT FEEST"
            subtitle="Elk moment van jullie dag, zorgvuldig verzorgd"
            waveVariant="special"
          />

          <div 
            className="mt-8 -mx-6 px-6 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            {momentenCards.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-72 snap-start">
                <div className="relative h-96 rounded-xl overflow-hidden mb-4">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 
                      className="text-background font-display tracking-wide" 
                      style={{ fontSize: '1.5rem' }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-background/80 text-sm mt-1">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <div className="relative">
        <EventFaqSection
          items={faqItems}
          image={images.bruiloften.intro}
          imageAlt="Bruiloft bij Beachclub Juno Kijkduin"
          bgColor="sage"
        />
        <WaveTransition fillColor="#faf0ea" />
      </div>

      {/* SECTION 7 — EVENT MANAGER CONTACT (sage background) */}
      <div className="relative">
        <EventManagerContact
          name="Sarah"
          role="Wedding Coördinator bij Juno"
          photo={images.bruiloften.intro}
          intro="Ik ben Sarah, Wedding Coördinator bij Juno. Ik luister naar jullie verhaal en zorg ervoor dat jullie dag precies wordt zoals jullie het gedroomd hebben."
          phone="+31624734660"
          email="info@clubjuno.nl"
          bgColor="terracotta"
        />
        <WaveTransition fillColor="#3d7183" />
      </div>

      <Footer />
    </div>
  );
}