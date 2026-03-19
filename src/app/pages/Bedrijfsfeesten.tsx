import { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { JunoButton } from '../components/JunoButton';
import { WaveDecoration } from '../components/WaveDecoration';
import { EventManagerContact } from '../components/EventManagerContact';
import { EventFaqSection } from '../components/EventFaqSection';
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* SECTION 1 — HERO */}
      <PageHero
        image={images.bedrijfsfeesten.hero}
        title="ZAKELIJKE EVENTS"
        subtitle="Een onvergetelijke bedrijfsdag aan het strand van Kijkduin"
        waveVariant="inverted"
        height="h-screen"
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
                  <div className="flex gap-3">
                    <JunoButton variant="primary" size="sm">Offerte aanvragen</JunoButton>
                    <JunoButton variant="outline-dark" size="sm">Meer informatie</JunoButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — SFEER FOTO STRIP */}
      <section className="relative overflow-hidden h-[500px]">
        <img 
          src={images.bedrijfsfeesten.team} 
          alt="Een locatie die inspireert"
          className="w-full h-full object-cover"
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
      <EventManagerContact
        name="Sarah"
        role="Event Manager bij Juno"
        photo={images.bruiloften.intro}
        intro="Ik ben Sarah, Event Manager bij Juno. Wil jij een zakelijk event organiseren aan het strand? Ik denk graag met je mee bij het neerzetten van een onvergetelijke dag voor jouw team."
        phone="+31624734660"
        email="info@clubjuno.nl"
        bgColor="cream"
      />

      {/* SECTION 5 — WAAROM JUNO */}
      <section className="py-28 px-6 font-body bg-primary">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <SectionHeader
              title="WAAROM KIEZEN VOOR JUNO EVENTS?"
              align="left"
              waveVariant="inverted"
              className="text-background"
            />
            <div className="flex gap-3 items-start text-background text-lg mb-3">
              <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
              <span>Unieke locatie direct aan het strand van Kijkduin</span>
            </div>
            <div className="flex gap-3 items-start text-background text-lg mb-3">
              <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
              <span>Persoonlijk contact en maatwerk van A tot Z</span>
            </div>
            <div className="flex gap-3 items-start text-background text-lg mb-3">
              <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
              <span>Ervaren team met oog voor elk detail</span>
            </div>
            <JunoButton variant="secondary" size="lg" className="mt-6">
              Stel jouw event samen
            </JunoButton>
          </div>
          {/* Right */}
          <div>
            <img 
              src={images.bedrijfsfeesten.hero}
              alt="Waarom kiezen voor Juno Events"
              className="w-full h-[450px] object-cover rounded-xl shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6 — SECOND FOTO STRIP */}
      <section className="relative overflow-hidden h-[500px]">
        <img 
          src={images.intro.terrace} 
          alt="Kijkduin — waar inspiratie begint"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 
            className="font-display text-background text-center px-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1' }}
          >
            KIJKDUIN — WAAR INSPIRATIE BEGINT
          </h2>
          <WaveDecoration variant="inverted" className="w-24 h-3 mx-auto mt-4" />
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <EventFaqSection
        items={faqItems}
        image={images.bedrijfsfeesten.team}
        imageAlt="Zakelijke Events FAQ"
      />

      {/* SECTION 8 — EVENT MANAGER CONTACT (sage background) */}
      <EventManagerContact
        name="Sarah"
        role="Event Manager bij Juno"
        photo={images.bruiloften.intro}
        intro="Ik ben Sarah, Event Manager bij Juno. Wil jij een zakelijk event organiseren aan het strand? Ik denk graag met je mee bij het neerzetten van een onvergetelijke dag voor jouw team."
        phone="+31624734660"
        email="info@clubjuno.nl"
        bgColor="sage"
      />

      <Footer />
    </div>
  );
}