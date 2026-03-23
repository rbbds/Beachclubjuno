import { useEffect, useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { JunoButton } from '../components/JunoButton';
import { WaveDecoration } from '../components/WaveDecoration';
import { WaveTransition } from '../components/WaveTransition';
import { EventManagerContact } from '../components/EventManagerContact';
import { EventFaqSection } from '../components/EventFaqSection';
import { BaseDrawer } from '../components/BaseDrawer';
import { X } from 'lucide-react';
import { images } from '../data/images';

export function Bedrijfsfeesten() {
  useEffect(() => {
    document.title = 'Zakelijke Events | Beachclub Juno Kijkduin';
    return () => { document.title = 'Beachclub Juno — Zon. Strand. Cultuur. | Kijkduin'; };
  }, []);

  const eventCards = [
    {
      tagline: 'Een onvergetelijke dag',
      title: 'BEDRIJFSFESTIVAL',
      image: images.bedrijfsfeesten.hero,
      bullets: ['Exclusief gebruik van locatie', 'Combinatie van activiteiten', '20 – 300 personen']
    },
    {
      tagline: 'Het leukste kantoor van Nederland',
      title: 'VERGADEREN AAN ZEE',
      image: images.bedrijfsfeesten.team,
      bullets: ['Halve of hele dag arrangementen', 'Afsluitbare ruimte met AV', 'Verzorgde lunch inbegrepen']
    },
    {
      tagline: 'Spectaculaire teamdag',
      title: 'TEAMUITJE',
      image: images.watersport.kiten,
      bullets: ['Privé strand met eigen bar', 'Combineer met watersport', '15 – 200 personen']
    }
  ];

  const faqItems = [
    { 
      question: 'Voor hoeveel personen is Juno geschikt?', 
      answer: 'Juno kan groepen ontvangen van 15 tot 300 personen. We hebben flexibele ruimtes die we kunnen combineren voor elke groepsgrootte.' 
    },
    { 
      question: 'Wat als het slecht weer is?', 
      answer: 'Geen zorgen — we zijn volledig ingericht op alle weersomstandigheden. Ons overdekte terras biedt altijd een droge en sfeervolle omgeving.' 
    },
    { 
      question: 'Kunnen we ook presenteren bij Juno?', 
      answer: 'Ja, we beschikken over AV-faciliteiten inclusief beamer, scherm en microfoons voor zakelijke presentaties.' 
    },
    { 
      question: 'Is catering inbegrepen?', 
      answer: 'Catering wordt op maat samengesteld. Van koffie en lunch tot een uitgebreid diner — alles is bespreekbaar.' 
    },
    { 
      question: 'Hoe ver op voorhand moet ik boeken?', 
      answer: 'We raden aan om minimaal 4-6 weken van tevoren contact op te nemen, zeker in het hoogseizoen (mei–september).' 
    }
  ];

  const drawerInfo = [
    {
      title: "BEDRIJFSFESTIVAL",
      image: images.bedrijfsfeesten.hero,
      description: "Een volledig verzorgde dag voor jouw team, relaties of klanten — direct aan het strand van Kijkduin. Wij regelen alles van A tot Z, zodat jij én je gasten kunnen genieten.",
      bullets: ["Exclusief gebruik van locatie", "Combinatie van activiteiten naar keuze", "Catering en drankenpakketten op maat", "20 – 300 personen"],
      cta: "Offerte aanvragen"
    },
    {
      title: "VERGADEREN AAN ZEE",
      image: images.bedrijfsfeesten.team,
      description: "Vergaderen met de Noordzee als inspiratiebron. Onze vergaderruimte is volledig uitgerust met AV-faciliteiten en biedt een verfrissende omgeving buiten het kantoor.",
      bullets: ["Halve of hele dag arrangementen", "Afsluitbare ruimte met beamer, scherm en microfoon", "Verzorgde lunch inbegrepen", "15 – 100 personen"],
      cta: "Offerte aanvragen"
    },
    {
      title: "TEAMUITJE",
      image: images.watersport.kiten,
      description: "Geef je team een onvergetelijke dag met watersport, een privé stranddeel en een verzorgde BBQ of diner. In samenwerking met Kiteboardschool.nl.",
      bullets: ["Privé strand met eigen bar", "Kiten, surfen, SUP of wingfoilen", "Combineer met diner of borrel", "15 – 200 personen"],
      cta: "Offerte aanvragen"
    }
  ];

  const [selectedCard, setSelectedCard] = useState<typeof drawerInfo[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* SECTION 1 — HERO */}
      <PageHero
        image={images.bedrijfsfeesten.hero}
        title="ZAKELIJKE EVENTS"
        subtitle="Vergaderen, borrel of teambuilding — anders dan anders"
        waveVariant="inverted"
        height="h-screen"
        waveColor="#f6f4db"
      />

      {/* SECTION 2 — AANBOD INTRO */}
      <section className="py-28 px-6 font-body bg-background">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            title="ONS ZAKELIJK AANBOD"
            subtitle="Van teambuilding tot bedrijfsfestival — voor groepen van 15 tot 300 personen"
            waveVariant="special"
          />

          <div className="flex gap-4 justify-center mb-16">
            <JunoButton variant="primary" size="lg">Stel jouw event samen</JunoButton>
            <JunoButton variant="outline-dark" size="lg">Download brochure</JunoButton>
          </div>

          {/* EVENT CARDS GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {eventCards.map((card, index) => (
              <div 
                key={index}
                className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  {/* Tagline above title */}
                  <p className="text-accent text-sm font-body mb-1">{card.tagline}</p>
                  <h3 className="text-primary mb-3 tracking-wide font-display" style={{ fontSize: '1.75rem', lineHeight: '1.2' }}>
                    {card.title}
                  </h3>
                  {/* "Goed om te weten" list */}
                  <ul className="space-y-1 mb-5">
                    {card.bullets.map((b, i) => (
                      <li key={i} className="text-primary text-sm flex gap-2 items-start">
                        <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {/* CTAs */}
                  <div className="flex flex-col gap-3">
                    <JunoButton variant="primary" size="sm" fullWidth>Offerte aanvragen</JunoButton>
                    <button
                      onClick={() => setSelectedCard(drawerInfo[index])}
                      className="w-full border-2 border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-background transition-colors font-body text-base"
                    >
                      Meer informatie
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — SFEER FOTO STRIP */}
      <section className="relative overflow-hidden h-[500px] group">
        <img 
          src={images.bedrijfsfeesten.team} 
          alt="Een locatie die inspireert"
          className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 
            className="font-display text-background text-center px-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1' }}
          >
            EEN LOCATIE DIE INSPIREERT
          </h2>
          <WaveDecoration variant="inverted" className="w-24 h-3 mx-auto mt-4" />
        </div>
      </section>

      {/* SECTION 4 — EVENT MANAGER CONTACT */}
      <div className="relative">
        <EventManagerContact
          name="Sarah"
          role="Event Manager bij Juno"
          photo={images.bruiloften.intro}
          intro="Ik ben Sarah, Event Manager bij Juno. Wil jij een zakelijk event organiseren aan het strand? Ik denk graag met je mee bij het neerzetten van een onvergetelijke dag voor jouw team."
          phone="+31624734660"
          email="info@clubjuno.nl"
          bgColor="terracotta"
        />
        <WaveTransition fillColor="#e8f0f3" />
      </div>

      {/* SECTION 5 — WAAROM JUNO */}
      <section className="relative py-28 px-6 font-body bg-navy-soft text-primary">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <SectionHeader
              title="WAAROM KIEZEN VOOR JUNO EVENTS?"
              align="left"
              waveVariant="special"
            />
            <div className="flex gap-3 items-start text-primary text-lg mb-3">
              <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
              <span>Unieke locatie direct aan het strand van Kijkduin</span>
            </div>
            <div className="flex gap-3 items-start text-primary text-lg mb-3">
              <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
              <span>Persoonlijk contact en maatwerk van A tot Z</span>
            </div>
            <div className="flex gap-3 items-start text-primary text-lg mb-3">
              <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
              <span>Ervaren team met oog voor elk detail</span>
            </div>
            <JunoButton variant="primary" size="lg" className="mt-6">
              Stel jouw event samen
            </JunoButton>
          </div>
          {/* Right */}
          <div className="overflow-hidden rounded-xl shadow-sm group">
            <img 
              src={images.bedrijfsfeesten.hero}
              alt="Waarom kiezen voor Juno Events"
              className="w-full h-[450px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6 — SECOND FOTO STRIP */}
      <section className="relative overflow-hidden h-[500px] group">
        <img 
          src={images.intro.terrace} 
          alt="Kijkduin — waar inspiratie begint"
          className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 
            className="font-display text-background text-center px-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1' }}
          >
            JUNO — WAAR INSPIRATIE BEGINT
          </h2>
          <WaveDecoration variant="inverted" className="w-24 h-3 mx-auto mt-4" />
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <div className="relative">
        <EventFaqSection
          items={faqItems}
          image={images.bedrijfsfeesten.team}
          imageAlt="Zakelijke Events FAQ"
          bgColor="sage"
        />
        <WaveTransition fillColor="#3d7183" />
      </div>

      <Footer />

      {/* DRAWER */}
      {selectedCard && (
        <BaseDrawer isOpen={!!selectedCard} onClose={() => setSelectedCard(null)}>
          <div className="font-body">
            {/* Photo */}
            <div className="relative w-full aspect-video">
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background text-primary flex items-center justify-center hover:bg-background/90 transition-all"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-primary mb-4 tracking-wide font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1' }}>
                {selectedCard.title}
              </h2>
              <WaveDecoration variant="special" className="w-20 h-3 mb-6" />
              <p className="text-primary text-lg leading-relaxed mb-6">
                {selectedCard.description}
              </p>
              <ul className="space-y-3 mb-8">
                {selectedCard.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 items-start text-primary">
                    <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-accent text-background py-4 rounded-lg hover:bg-accent/85 transition-colors font-display tracking-wide" style={{ fontSize: '18px' }}>
                {selectedCard.cta}
              </button>
            </div>
          </div>
        </BaseDrawer>
      )}
    </div>
  );
}