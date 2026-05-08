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
import { sanityClient, urlFor } from '../../lib/sanity';

const staticEventCards = [
  {
    tagline: 'Onvergetelijk vieren',
    title: 'VERJAARDAG AAN ZEE',
    image: images.bedrijfsfeesten.hero,
    bullets: ['Privé stranddeel beschikbaar', 'Catering en open bar op maat', '20 – 200 personen']
  },
  {
    tagline: 'Samen genieten',
    title: 'FAMILIEFEEST',
    image: images.bedrijfsfeesten.team,
    bullets: ['Ruimte voor alle leeftijden', 'Kindvriendelijke opties', '30 – 150 personen']
  },
  {
    tagline: 'Stijlvol afsluiten',
    title: 'AFSCHEIDSFEEST',
    image: images.watersport.kiten,
    bullets: ['Intieme of grote setting', 'Volledig verzorgd arrangement', '15 – 200 personen']
  }
];

const staticDrawerInfo: EventInfoItem[] = [
  {
    title: 'VERJAARDAG AAN ZEE',
    image: images.bedrijfsfeesten.hero,
    description: 'Vier jouw verjaardag met de Noordzee als decor. Wij regelen alles — van de decoratie tot het laatste drankje — zodat jij volledig kunt genieten.',
    bullets: ['Privé stranddeel beschikbaar', 'Catering en open bar op maat', 'Decoratie op aanvraag', '20 – 200 personen'],
    cta: 'Offerte aanvragen',
    ctaAction: () => openMiceWidget('8f1c3d9ed6cc')
  },
  {
    title: 'FAMILIEFEEST',
    image: images.bedrijfsfeesten.team,
    description: 'Een dag of avond samenkomen met de hele familie. Juno biedt ruimte voor alle leeftijden, met opties voor zowel een lunch als een uitgebreid diner.',
    bullets: ['Ruimte voor alle leeftijden', 'Kindvriendelijke menu-opties', 'Binnen én buiten beschikbaar', '30 – 150 personen'],
    cta: 'Offerte aanvragen',
    ctaAction: () => openMiceWidget('8f1c3d9ed6cc')
  },
  {
    title: 'AFSCHEIDSFEEST',
    image: images.watersport.kiten,
    description: 'Een waardige en stijlvolle afsluiting van een hoofdstuk. Of het nu gaat om een pensioen, vertrek of een mijlpaal — wij maken er een moment van.',
    bullets: ['Intieme of grote setting mogelijk', 'Volledig verzorgd arrangement', 'Persoonlijke touch op aanvraag', '15 – 200 personen'],
    cta: 'Offerte aanvragen',
    ctaAction: () => openMiceWidget('8f1c3d9ed6cc')
  }
];

const staticFaqItems = [
  { question: 'Kan ik Juno exclusief huren voor een feest?', answer: 'Ja, exclusieve huur is mogelijk. Neem contact op voor de beschikbaarheid en de mogelijkheden voor jouw datum.' },
  { question: 'Wat als het regent?', answer: 'We zijn volledig ingericht op alle weersomstandigheden. Ons overdekte terras biedt altijd een droge en sfeervolle omgeving.' },
  { question: 'Kunnen jullie de catering verzorgen?', answer: 'Ja, onze chef stelt een menu samen op basis van jouw wensen en budget. Van borrelhapjes tot een uitgebreid diner.' },
  { question: 'Is er een minimum aantal gasten?', answer: 'We ontvangen feesten vanaf 15 personen. Voor kleine, intieme bijeenkomsten bekijken we graag de opties samen.' },
  { question: 'Hoe ver vooruit moet ik boeken?', answer: 'We adviseren minimaal 4–6 weken van tevoren, zeker in het hoogseizoen van mei tot september.' }
];

export function ParticuliereEvents() {
  useEffect(() => {
    setPageMeta(
      'Particuliere Events | Beachclub Juno Kijkduin',
      'Vier jouw verjaardag, familiefeest of bijzonder moment aan het strand van Kijkduin. Juno verzorgt particuliere feesten voor 15 tot 200 personen aan de Noordzee.'
    );
    return () => { document.title = 'Beachclub Juno — Zon. Strand. Cultuur. | Kijkduin'; };
  }, []);

  const scrollRef = useScrollReveal();

  const [heroImage, setHeroImage] = useState(images.bedrijfsfeesten.hero);
  const [heroVideoUrl, setHeroVideoUrl] = useState<string | null>(null);
  const [heroTitle, setHeroTitle] = useState('PARTICULIERE EVENTS');
  const [heroSubtitle, setHeroSubtitle] = useState('Verjaardag, familiefeest of bijzonder moment — wij maken het onvergetelijk');

  const [aanbodTitle, setAanbodTitle] = useState('ONS PARTICULIER AANBOD');
  const [aanbodSubtitle, setAanbodSubtitle] = useState('Van intiem feestje tot groot familiefeest — voor groepen van 15 tot 200 personen');
  const [brochureUrl, setBrochureUrl] = useState('');
  const [fotostrip1Text, setFotostrip1Text] = useState('FEESTEN MET UITZICHT OP ZEE');
  const [fotostrip1Image, setFotostrip1Image] = useState(images.bedrijfsfeesten.team);
  const [fotostrip2Text, setFotostrip2Text] = useState('JUNO — VOOR JOUW BIJZONDERE MOMENT');
  const [fotostrip2Image, setFotostrip2Image] = useState(images.intro.terrace);
  const [eventCards, setEventCards] = useState(staticEventCards);
  const [drawerInfo, setDrawerInfo] = useState<EventInfoItem[]>(staticDrawerInfo);

  const [contactName, setContactName] = useState('Sarah');
  const [contactRole, setContactRole] = useState('Event Manager bij Juno');
  const [contactIntro, setContactIntro] = useState('Ik ben Sarah, Event Manager bij Juno. Wil jij een bijzonder moment vieren aan het strand? Ik denk graag met je mee om er een onvergetelijk feest van te maken.');
  const [contactPhoto, setContactPhoto] = useState(images.bruiloften.intro);

  const [waaromTitle, setWaaromTitle] = useState('WAAROM JOUW FEEST BIJ JUNO?');
  const [waaromUsps, setWaaromUsps] = useState([
    'Unieke locatie direct aan het strand van Kijkduin',
    'Volledig maatwerk — van catering tot decoratie',
    'Persoonlijk contact van begin tot eind'
  ]);
  const [waaromImage, setWaaromImage] = useState(images.bedrijfsfeesten.hero);

  const [faqImage, setFaqImage] = useState(images.bedrijfsfeesten.team);
  const [faqItems, setFaqItems] = useState(staticFaqItems);

  const [selectedCard, setSelectedCard] = useState<EventInfoItem | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "particuliereEventsPage"][0]`)
      .then(data => {
        if (!data) return;

        if (data.hero?.videoUrl) setHeroVideoUrl(data.hero.videoUrl);
        if (data.hero?.image) setHeroImage(urlFor(data.hero.image).width(1800).url());
        if (data.hero?.title) setHeroTitle(data.hero.title);
        if (data.hero?.subtitle) setHeroSubtitle(data.hero.subtitle);

        if (data.aanbod?.title) setAanbodTitle(data.aanbod.title);
        if (data.aanbod?.subtitle) setAanbodSubtitle(data.aanbod.subtitle);
        if (data.aanbod?.brochureUrl) setBrochureUrl(data.aanbod.brochureUrl);
        if (data.fotostrip1?.text) setFotostrip1Text(data.fotostrip1.text);
        if (data.fotostrip1?.image) setFotostrip1Image(urlFor(data.fotostrip1.image).width(1800).url());
        if (data.fotostrip2?.text) setFotostrip2Text(data.fotostrip2.text);
        if (data.fotostrip2?.image) setFotostrip2Image(urlFor(data.fotostrip2.image).width(1800).url());
        if (data.aanbod?.cards?.length) {
          const cards = data.aanbod.cards.map((c: any, i: number) => ({
            tagline: c.tagline || staticEventCards[i]?.tagline || '',
            title: c.title || staticEventCards[i]?.title || '',
            image: c.image ? urlFor(c.image).width(800).url() : staticEventCards[i]?.image ?? images.bedrijfsfeesten.hero,
            bullets: c.bullets?.length ? c.bullets : staticEventCards[i]?.bullets ?? [],
          }));
          setEventCards(cards);

          const drawers: EventInfoItem[] = data.aanbod.cards.map((c: any, i: number) => ({
            title: c.drawerTitle || c.title || staticDrawerInfo[i]?.title || '',
            image: c.image ? urlFor(c.image).width(800).url() : staticDrawerInfo[i]?.image ?? images.bedrijfsfeesten.hero,
            description: c.drawerDescription || staticDrawerInfo[i]?.description || '',
            bullets: c.drawerBullets?.length ? c.drawerBullets : staticDrawerInfo[i]?.bullets ?? [],
            cta: 'Offerte aanvragen',
            ctaAction: () => openMiceWidget('8f1c3d9ed6cc'),
          }));
          setDrawerInfo(drawers);
        }

        if (data.contact?.name) setContactName(data.contact.name);
        if (data.contact?.role) setContactRole(data.contact.role);
        if (data.contact?.intro) setContactIntro(data.contact.intro);
        if (data.contact?.photo) setContactPhoto(urlFor(data.contact.photo).width(800).url());

        if (data.waarom?.title) setWaaromTitle(data.waarom.title);
        if (data.waarom?.usps?.length) setWaaromUsps(data.waarom.usps);
        if (data.waarom?.image) setWaaromImage(urlFor(data.waarom.image).width(800).url());

        if (data.faqImage) setFaqImage(urlFor(data.faqImage).width(800).url());
        if (data.faq?.length) {
          setFaqItems(data.faq.map((f: any) => ({
            question: f.question,
            answer: f.answer,
          })));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-background" ref={scrollRef}>
      <Navigation />

      {/* SECTION 1 — HERO */}
      <PageHero
        image={heroImage}
        videoUrl={heroVideoUrl ?? undefined}
        title={heroTitle}
        subtitle={heroSubtitle}
        waveVariant="inverted"
        height="h-screen"
      />

      {/* SECTION 2 — AANBOD */}
      <section className="py-28 px-6 font-body bg-background">
        <SectionWaveTop fillColor="#f6f4db" />
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            title={aanbodTitle}
            subtitle={aanbodSubtitle}
            waveVariant="special"
          />

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <JunoButton variant="primary" size="lg" onClick={() => openMiceWidget('8f1c3d9ed6cc')}>Stel jouw feest samen</JunoButton>
            {brochureUrl ? (
              <JunoButton variant="outline-dark" size="lg" href={brochureUrl} target="_blank">Download brochure</JunoButton>
            ) : (
              <JunoButton variant="outline-dark" size="lg" className="opacity-50 pointer-events-none">Download brochure</JunoButton>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {eventCards.map((card, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white reveal-stagger"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-accent text-sm font-body mb-1">{card.tagline}</p>
                  <h3 className="text-primary mb-3 tracking-wide font-display" style={{ fontSize: '1.75rem', lineHeight: '1.2' }}>
                    {card.title}
                  </h3>
                  <ul className="space-y-1 mb-5">
                    {card.bullets.map((b, i) => (
                      <li key={i} className="text-primary text-sm flex gap-2 items-start">
                        <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3">
                    <JunoButton variant="primary" size="sm" fullWidth onClick={() => openMiceWidget('8f1c3d9ed6cc')}>Offerte aanvragen</JunoButton>
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
          src={fotostrip1Image}
          alt={fotostrip1Text}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2
            className="font-display text-background text-center px-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1' }}
          >
            {fotostrip1Text}
          </h2>
          <WaveDecoration variant="inverted" className="w-24 h-3 mx-auto mt-4" />
        </div>
      </section>

      {/* SECTION 4 — EVENT MANAGER CONTACT */}
      <div className="relative">
        <EventManagerContact
          name={contactName}
          role={contactRole}
          photo={contactPhoto}
          intro={contactIntro}
          phone="+31624734660"
          email="info@beachclubjuno.nl"
          bgColor="terracotta"
        />
        <WaveTransition fillColor="#e8f0f3" />
      </div>

      {/* SECTION 5 — WAAROM JUNO */}
      <section className="relative py-28 px-6 font-body bg-navy-soft text-primary">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title={waaromTitle}
              align="left"
              waveVariant="special"
            />
            {waaromUsps.map((usp, i) => (
              <div key={i} className="flex gap-3 items-start text-primary text-lg mb-3">
                <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                <span>{usp}</span>
              </div>
            ))}
            <JunoButton variant="primary" size="lg" className="mt-6" onClick={() => openMiceWidget('8f1c3d9ed6cc')}>
              Stel jouw feest samen
            </JunoButton>
          </div>
          <div className="overflow-hidden rounded-xl shadow-sm group">
            <img
              src={waaromImage}
              alt={waaromTitle}
              loading="lazy"
              className="w-full h-[450px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6 — SECOND FOTO STRIP */}
      <section className="relative overflow-hidden h-[500px] group">
        <img
          src={fotostrip2Image}
          alt={fotostrip2Text}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2
            className="font-display text-background text-center px-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1' }}
          >
            {fotostrip2Text}
          </h2>
          <WaveDecoration variant="inverted" className="w-24 h-3 mx-auto mt-4" />
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <div className="relative">
        <EventFaqSection
          items={faqItems}
          image={faqImage}
          imageAlt="Particuliere Events FAQ"
          bgColor="sage"
        />
        <WaveTransition fillColor="#3d7183" />
      </div>

      <Footer />

      <EventInfoDrawer item={selectedCard} onClose={() => setSelectedCard(null)} />
    </div>
  );
}
