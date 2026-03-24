import { useEffect, useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { SectionWaveTop } from '../components/SectionWaveTop';
import { JunoButton } from '../components/JunoButton';
import { WaveDecoration } from '../components/WaveDecoration';
import { WaveTransition } from '../components/WaveTransition';
import { EventManagerContact } from '../components/EventManagerContact';
import { EventFaqSection } from '../components/EventFaqSection';
import { EventInfoDrawer, EventInfoItem } from '../components/EventInfoDrawer';
import { images } from '../data/images';
import { openMiceWidget } from '../utils/miceWidget';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { setPageMeta } from '../utils/seo';

export function ParticuliereEvents() {
  useEffect(() => {
    setPageMeta(
      'Particuliere Events | Beachclub Juno Kijkduin',
      'Verjaardag, jubileum of familiefeest op het strand van Kijkduin. Beachclub Juno organiseert strandfeesten en diners voor groepen van 15 tot 300 personen.'
    );
    return () => { document.title = 'Beachclub Juno — Zon. Strand. Cultuur. | Kijkduin'; };
  }, []);

  const scrollRef = useScrollReveal();

  const eventCards = [
    {
      tagline: 'Iets speciaals te vieren!',
      title: 'STRANDFEEST',
      image: images.events.bruiloften,
      bullets: ['Verjaardag, jubileum of familiefeest', 'Exclusief stranddeel & privé bar', '20 – 300 personen']
    },
    {
      tagline: 'Met de hele groep tafelen',
      title: 'DINER & BORREL',
      image: images.restaurant.main,
      bullets: ['Lunch, borrel of diner', 'Formeel of informeel', '15 – 200 personen']
    },
    {
      tagline: 'Never stop playing',
      title: 'ACTIEVE DAG',
      image: images.watersport.surfen,
      bullets: ['Kiten, surfen of SUP via Kiteboardschool.nl', 'Combineer met diner of borrel', '10 – 100 personen']
    }
  ];

  const faqItems = [
    { 
      question: 'Voor hoeveel personen kan ik bij Juno terecht?', 
      answer: 'We ontvangen groepen van 15 tot 300 personen. Voor kleinere of grotere groepen denken we graag creatief mee.' 
    },
    { 
      question: 'Wat als het slecht weer is op de dag van ons feest?', 
      answer: 'Geen zorgen — ons overdekte terras zorgt ervoor dat jouw feest altijd doorgaat, weer of geen weer.' 
    },
    { 
      question: 'Kan ik een DJ of live band meenemen?', 
      answer: 'Absoluut. We beschikken over geluidsfaciliteiten en kunnen ook zelf een DJ of artiest adviseren.' 
    },
    { 
      question: 'Is catering inbegrepen bij een arrangement?', 
      answer: 'Catering wordt volledig op maat samengesteld — van welkomstdrankje tot uitgebreid diner.' 
    },
    { 
      question: 'Hoe neem ik contact op voor een offerte?', 
      answer: 'Stuur een mail naar info@clubjuno.nl of bel ons op 06 2473 4660. We reageren binnen één werkdag.' 
    }
  ];

  const drawerInfo: EventInfoItem[] = [
    {
      title: "STRANDFEEST",
      image: images.events.bruiloften,
      description: "Vier jouw verjaardag, jubileum of familiefeest op een unieke locatie direct aan het strand. Wij zorgen voor de perfecte sfeer, catering en een privé stranddeel.",
      bullets: ["Exclusief stranddeel & privé bar", "Catering en drankenpakketten op maat", "DJ of live muziek mogelijk", "20 – 300 personen"],
      cta: "Offerte aanvragen",
      ctaAction: () => openMiceWidget('83bbfd1669f7')
    },
    {
      title: "DINER & BORREL",
      image: images.restaurant.main,
      description: "Een lunch, borrel of diner met jouw groep in een sfeervolle setting aan het strand. Formeel of informeel — wij passen het aan jouw wensen aan.",
      bullets: ["Lunch, borrel of diner", "Formeel of informeel", "Menusamenstelling op maat", "15 – 200 personen"],
      cta: "Offerte aanvragen",
      ctaAction: () => openMiceWidget('83bbfd1669f7')
    },
    {
      title: "ACTIEVE DAG",
      image: images.watersport.surfen,
      description: "Combineer een actieve dag op het water met een heerlijk diner of borrel achteraf. In samenwerking met Kiteboardschool.nl voor kiten, surfen, SUP en meer.",
      bullets: ["Kiten, surfen of SUP via Kiteboardschool.nl", "Begeleiding door gecertificeerde instructeurs", "Combineer met diner of borrel", "10 – 100 personen"],
      cta: "Offerte aanvragen",
      ctaAction: () => openMiceWidget('83bbfd1669f7')
    }
  ];

  const [selectedCard, setSelectedCard] = useState<EventInfoItem | null>(null);

  return (
    <div className="min-h-screen bg-background" ref={scrollRef}>
      <Navigation />

      {/* SECTION 1 — HERO */}
      <PageHero
        image={images.events.bruiloften}
        title="PARTICULIERE EVENTS"
        subtitle="Verjaardag, jubileum, familiefeest of gewoon omdat het kan"
        waveVariant="inverted"
        height="h-screen"
      />

      {/* SECTION 2 — AANBOD INTRO */}
      <section className="py-28 px-6 font-body bg-background">
        <SectionWaveTop fillColor="#f6f4db" />
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            title="ONS AANBOD"
            subtitle="Van strandfeest tot actieve dag — voor groepen van 15 tot 300 personen"
            waveVariant="special"
          />

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <JunoButton variant="primary" size="lg" onClick={() => openMiceWidget('83bbfd1669f7')}>Stel jouw event samen</JunoButton>
            <JunoButton variant="outline-dark" size="lg">Download brochure</JunoButton>
          </div>

          {/* EVENT CARDS GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {eventCards.map((card, index) => (
              <div 
                key={index}
                className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white reveal-stagger"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    loading="lazy"
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
                    <JunoButton variant="primary" size="sm" fullWidth onClick={() => openMiceWidget('83bbfd1669f7')}>Offerte aanvragen</JunoButton>
                    <JunoButton
                      variant="outline-dark"
                      size="sm"
                      fullWidth
                      onClick={() => setSelectedCard(drawerInfo[index])}
                    >
                      Meer informatie
                    </JunoButton>
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
          src={images.events.bruiloften} 
          alt="Jouw feest, ons strand"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 
            className="font-display text-background text-center px-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1' }}
          >
            JOUW FEEST, ONS STRAND
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
          intro="Ik ben Sarah, Event Manager bij Juno. Of het nu een verjaardag, jubileum of gewoon een feestje is — ik help je graag bij het plannen van een onvergetelijke dag aan het strand."
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
              title="WAAROM JUNO?"
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
            <JunoButton variant="primary" size="lg" className="mt-6" onClick={() => openMiceWidget('83bbfd1669f7')}>
              Stel jouw event samen
            </JunoButton>
          </div>
          {/* Right */}
          <div className="overflow-hidden rounded-xl shadow-sm group">
            <img 
              src={images.intro.terrace}
              alt="Waarom Juno"
              loading="lazy"
              className="w-full h-[450px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6 — SECOND FOTO STRIP */}
      <section className="relative overflow-hidden h-[500px] group">
        <img 
          src={images.bedrijfsfeesten.team} 
          alt="Maak er een dag om nooit te vergeten"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 
            className="font-display text-background text-center px-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1' }}
          >
            MAAK ER EEN DAG OM NOOIT TE VERGETEN
          </h2>
          <WaveDecoration variant="inverted" className="w-24 h-3 mx-auto mt-4" />
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <div className="relative">
        <EventFaqSection
          items={faqItems}
          image={images.events.bruiloften}
          imageAlt="Particuliere Events FAQ"
          bgColor="sage"
        />
        <WaveTransition fillColor="#3d7183" />
      </div>

      <Footer />

      {/* DRAWER */}
      <EventInfoDrawer item={selectedCard} onClose={() => setSelectedCard(null)} />
    </div>
  );
}