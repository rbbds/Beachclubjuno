import { useEffect, useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SectionHeader } from '../components/SectionHeader';
import { JunoButton } from '../components/JunoButton';
import { WaveDecoration } from '../components/WaveDecoration';
import { WaveTransition } from '../components/WaveTransition';
import { EventManagerContact } from '../components/EventManagerContact';
import { EventFaqSection } from '../components/EventFaqSection';
import { Shield, Users, Clock } from 'lucide-react';
import { images } from '../data/images';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { openVikingWidget } from '../utils/vikingWidget';
import { setPageMeta } from '../utils/seo';
import { sanityClient, urlFor } from '../../lib/sanity';

function MeenemenIcon({ label, className = 'w-7 h-7' }: { label: string; className?: string }) {
  const key = label.toLowerCase();

  if (key.includes('zonnebrand')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className={className}>
        <rect x="8" y="8" width="8" height="13" rx="2" />
        <rect x="9.5" y="4" width="5" height="4" rx="1" />
        <path d="M10.5 12h3M10.5 15h3" />
      </svg>
    );
  }
  if (key.includes('pet') || key.includes('hoed')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className={className}>
        <path d="M5 14a7 7 0 0 1 14 0" />
        <path d="M12 7V5.5" />
        <path d="M5 14h14l3 2H8" />
      </svg>
    );
  }
  if (key.includes('zwemkleding') || key.includes('badkleding') || key.includes('zwembroek') || key.includes('badpak')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M8 4c0 4-1 8-3 11l4 4c2-2 4-2 6 0l4-4c-2-3-3-7-3-11" />
        <path d="M8 4h2M14 4h2" />
      </svg>
    );
  }
  if (key.includes('handdoek')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className={className}>
        <path d="M6 4h9a3 3 0 0 1 3 3v13H9a3 3 0 0 1-3-3Z" />
        <path d="M18 7v13" />
        <path d="M6 4v13a3 3 0 0 0 3 3" />
      </svg>
    );
  }
  if (key.includes('drink') || key.includes('water') || key.includes('fles')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className={className}>
        <path d="M9 3h6v3l1.5 2.5v10a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-10L9 6Z" />
        <path d="M9 11h6" />
      </svg>
    );
  }

  // Fallback voor onbekende items uit Sanity
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5 11 15l4.5-5" />
    </svg>
  );
}

const staticWeekDays = [
  { dayLabel: 'MA', title: 'KENNISMAKEN & ONTDEKKEN', description: 'We leren elkaar kennen, maken samen een teamvlag, bouwen de mooiste zandkastelen en gaan op zoek naar bijzondere schelpen langs de vloedlijn.' },
  { dayLabel: 'DI', title: 'WIND & BEWEGING', description: 'Een actieve dag met windspelletjes, powerkiten met kleine trainerkites, beach games en spannende estafettes op het strand.' },
  { dayLabel: 'WO', title: 'PIZZA & CREATIVITEIT', description: 'De kinderen maken hun eigen pizza\'s voor de lunch! Daarnaast is er een kleurwedstrijd en heerlijk vrij spel in het zand.' },
  { dayLabel: 'DO', title: 'AVONTUUR & KUNST', description: 'We maken een schatkaart, gaan op speurtocht over het strand, creëren strandkunst en werken samen aan een groepsopdracht.' },
  { dayLabel: 'VR', title: 'BEACH OLYMPICS & FEEST', description: 'De week wordt feestelijk afgesloten met de Beach Olympics, eventueel de Mega SUP, een diploma-uitreiking en een groepsfoto als aandenken.' },
];

const staticVeiligheidPunten = [
  { title: 'GEEN ACTIVITEITEN IN ZEE', description: 'We organiseren bewust geen activiteiten in de zee. Het strand biedt meer dan genoeg ruimte voor avontuur, zonder de risico\'s van het water.' },
  { title: 'INTENSIEVE, PROFESSIONELE BEGELEIDING', description: 'Met maximaal 20 kinderen werken we met een vast team van vier medewerkers: twee ervaren begeleiders, één gespecialiseerde instructeur en een runner met EHBO-kennis.' },
  { title: 'EHBO ALTIJD AANWEZIG', description: 'Er is altijd minimaal één teamlid met EHBO-kennis aanwezig. We zijn voorbereid op kleine ongelukjes en weten hoe te handelen in noodsituaties.' },
  { title: 'VAST DAGRITME', description: 'Kinderen van deze leeftijd gedijen bij structuur. Ons vaste dagprogramma met herkenbare momenten voor eten, rusten en spelen biedt geborgenheid.' },
];

const staticStats = [
  { number: '4', label: 'BEGELEIDERS' },
  { number: '20', label: 'MAX. KINDEREN' },
  { number: '1:5', label: 'RATIO' },
  { number: '7', label: 'UUR PER DAG' },
];

const staticIncludedItems = [
  'Professionele begeleiding van 08:30 tot 15:30 uur',
  'Volledige lunch elke dag',
  'Vers fruit, gezonde snacks en drinken',
  'Alle materialen en activiteiten',
  'Powerkiten, pizza maken, speurtochten',
  'Diploma en groepsfoto',
];

const staticMeenemenItems = ['Zonnebrand (ingesmeerd)', 'Een petje of hoedje', 'Zwemkleding', 'Een handdoek'];

const staticFaqItems = [
  { question: 'Voor welke leeftijd is het Mini Beach Camp geschikt?', answer: 'Het kamp is bedoeld voor kinderen van 4 tot 6 jaar. Alle activiteiten zijn afgestemd op deze leeftijdsgroep.' },
  { question: 'Wat als mijn kind allergieën of dieetwensen heeft?', answer: 'Laat het ons weten bij aanmelding, dan houden we daar rekening mee bij de lunch en snacks.' },
  { question: 'Wat gebeurt er bij slecht weer?', answer: 'Bij onverwacht slecht weer hebben we altijd een alternatief programma klaar. De beachclub biedt voldoende overdekte ruimte voor creatieve en actieve binnenactiviteiten.' },
  { question: 'Gaan de kinderen het water in?', answer: 'We organiseren bewust geen activiteiten in zee. Op vrijdag is er, alleen bij perfecte omstandigheden, de mogelijkheid om met de Mega SUP het water op te gaan, met zwemvesten en intensieve één-op-één begeleiding.' },
  { question: 'Kan ik zelf werken terwijl mijn kind bij het kamp is?', answer: 'Zeker. Terwijl je kind geniet van het kamp, kun je ongestoord werken in onze beachclub. Snelle wifi, goede koffie en uitzicht op zee. Vraag naar de mogelijkheden bij aanmelding.' },
];

export function KidsCamps() {
  const scrollRef = useScrollReveal();

  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [heroVideoUrl, setHeroVideoUrl] = useState<string | null>(null);
  const [heroTitle, setHeroTitle] = useState('MINI BEACH CAMP');
  const [heroSubtitle, setHeroSubtitle] = useState('Een onbezorgde strandweek voor kinderen van 4-6 jaar');

  const [introLabel, setIntroLabel] = useState('KIDS & CAMPS');
  const [introTitle, setIntroTitle] = useState('EEN ZOMER OM NOOIT TE VERGETEN');
  const [introParagraph, setIntroParagraph] = useState('Juno is een nieuwe Beachclub, maar wij hebben gecombineerd al ruim 40 jaar ervaring in het geven van watersportlessen en kamps. Een veilige, actieve en inspirerende strandweek vol plezier, structuur en persoonlijke aandacht.');
  const [introUsps, setIntroUsps] = useState([
    'Voor kinderen van 4 tot 6 jaar',
    '08:30 – 15:30 uur, vast dagritme',
    'Alles inclusief, geen verborgen kosten',
    'In samenwerking met Kiteboardschool.nl en SurfBlend',
  ]);
  const [introCtaPrimary, setIntroCtaPrimary] = useState('Bekijk data en boek');
  const [introCtaSecondary, setIntroCtaSecondary] = useState('Download brochure');
  const [brochureUrl, setBrochureUrl] = useState('');
  const [bookingWidgetId, setBookingWidgetId] = useState('');

  const [weekTitle, setWeekTitle] = useState('HET WEEKPROGRAMMA');
  const [weekSubtitle, setWeekSubtitle] = useState('Elke dag heeft een eigen thema. Van creatief knutselen tot actieve strandspellen — er is voor elk kind iets leuks bij.');
  const [weekDays, setWeekDays] = useState(staticWeekDays);

  const [veiligheidTitle, setVeiligheidTitle] = useState('VEILIG & VERTROUWD');
  const [veiligheidSubtitle, setVeiligheidSubtitle] = useState('We begrijpen dat je je kind niet zomaar overal achterlaat. Daarom staat veiligheid bij het JUNO Mini Beach Camp altijd op de eerste plaats.');
  const [veiligheidPunten, setVeiligheidPunten] = useState(staticVeiligheidPunten);
  const [stats, setStats] = useState(staticStats);

  const [price, setPrice] = useState('€375');
  const [priceUnit, setPriceUnit] = useState('per kind per week');
  const [priceNote, setPriceNote] = useState('Alles inclusief. Geen verborgen kosten.');
  const [includedItems, setIncludedItems] = useState(staticIncludedItems);

  const [meenemenTitle, setMeenemenTitle] = useState('WAT NEEM JE MEE?');
  const [meenemenItems, setMeenemenItems] = useState(staticMeenemenItems);

  const [contactName, setContactName] = useState('Sarah');
  const [contactRole, setContactRole] = useState('Kids & Camps Coördinator bij Juno');
  const [contactIntro, setContactIntro] = useState('Heb je vragen over het Mini Beach Camp, allergieën die je wilt doorgeven, of wil je meer weten voordat je aanmeldt? Ik help je graag verder.');
  const [contactPhoto, setContactPhoto] = useState(images.bruiloften.intro);

  const [fotostripImage, setFotostripImage] = useState(images.watersport.kids);
  const [fotostripText, setFotostripText] = useState('VEILIG. VERZORGD. VOL PLEZIER.');

  const [faqImage, setFaqImage] = useState(images.watersport.kids);
  const [faqItems, setFaqItems] = useState(staticFaqItems);

  useEffect(() => {
    setPageMeta(
      'Kids & Camps | Beachclub Juno Kijkduin',
      'Meld je kind aan voor het JUNO Mini Beach Camp: een veilige, actieve strandweek voor kinderen van 4 tot 6 jaar bij Beachclub Juno in Kijkduin.'
    );
    return () => { document.title = 'Beachclub Juno — Zon. Strand. Cultuur. | Kijkduin'; };
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "kidsCampsPage"][0]`)
      .then(data => {
        if (!data) return;

        if (data.hero?.videoUrl) setHeroVideoUrl(data.hero.videoUrl);
        if (data.hero?.image) setHeroImage(urlFor(data.hero.image).width(1800).url());
        if (data.hero?.title) setHeroTitle(data.hero.title);
        if (data.hero?.subtitle) setHeroSubtitle(data.hero.subtitle);

        if (data.intro?.label) setIntroLabel(data.intro.label);
        if (data.intro?.title) setIntroTitle(data.intro.title);
        if (data.intro?.paragraph) setIntroParagraph(data.intro.paragraph);
        if (data.intro?.usps?.length) setIntroUsps(data.intro.usps);
        if (data.intro?.ctaPrimary) setIntroCtaPrimary(data.intro.ctaPrimary);
        if (data.intro?.ctaSecondary) setIntroCtaSecondary(data.intro.ctaSecondary);
        if (data.intro?.brochureUrl) setBrochureUrl(data.intro.brochureUrl);
        if (data.intro?.bookingWidgetId) setBookingWidgetId(data.intro.bookingWidgetId);

        if (data.weekprogramma?.title) setWeekTitle(data.weekprogramma.title);
        if (data.weekprogramma?.subtitle) setWeekSubtitle(data.weekprogramma.subtitle);
        if (data.weekprogramma?.days?.length) setWeekDays(data.weekprogramma.days);

        if (data.veiligheid?.title) setVeiligheidTitle(data.veiligheid.title);
        if (data.veiligheid?.subtitle) setVeiligheidSubtitle(data.veiligheid.subtitle);
        if (data.veiligheid?.punten?.length) setVeiligheidPunten(data.veiligheid.punten);
        if (data.veiligheid?.stats?.length) setStats(data.veiligheid.stats);

        if (data.pricing?.price) setPrice(data.pricing.price);
        if (data.pricing?.priceUnit) setPriceUnit(data.pricing.priceUnit);
        if (data.pricing?.priceNote) setPriceNote(data.pricing.priceNote);
        if (data.pricing?.includedItems?.length) setIncludedItems(data.pricing.includedItems);

        if (data.meenemen?.title) setMeenemenTitle(data.meenemen.title);
        if (data.meenemen?.items?.length) setMeenemenItems(data.meenemen.items);

        if (data.contact?.name) setContactName(data.contact.name);
        if (data.contact?.role) setContactRole(data.contact.role);
        if (data.contact?.intro) setContactIntro(data.contact.intro);
        if (data.contact?.photo) setContactPhoto(urlFor(data.contact.photo).width(800).url());

        if (data.fotostrip?.image) setFotostripImage(urlFor(data.fotostrip.image).width(1800).url());
        if (data.fotostrip?.text) setFotostripText(data.fotostrip.text);

        if (data.faqImage) setFaqImage(urlFor(data.faqImage).width(800).url());
        if (data.faq?.length) setFaqItems(data.faq);
      })
      .catch(() => {});
  }, []);

  const showHeroVideo = !!heroVideoUrl;
  const heroImageSrc = heroImage ?? images.watersport.kids;
  const hasBookingWidget = !!bookingWidgetId;

  const handleBooking = () => {
    if (hasBookingWidget) openVikingWidget(bookingWidgetId);
  };

  return (
    <div className="min-h-screen bg-background" ref={scrollRef}>
      <Navigation />

      {/* SECTION 1 — SPLIT HERO */}
      <section className="relative min-h-screen grid md:grid-cols-2 font-body">
        <div className="bg-background flex flex-col justify-center px-12 py-32 md:py-0">
          <div className="font-display text-accent text-xl tracking-wide mb-4">
            {introLabel}
          </div>
          <h1
            className="font-display text-primary mb-6"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1' }}
          >
            {heroTitle}
          </h1>
          <p className="text-primary text-lg leading-relaxed mb-6 opacity-80">
            {introParagraph}
          </p>
          <ul className="space-y-3 mb-8">
            {introUsps.map((usp, i) => (
              <li key={i} className="flex gap-3 items-start text-primary text-lg">
                <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                <span>{usp}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            {hasBookingWidget ? (
              <JunoButton variant="primary" size="lg" onClick={handleBooking}>
                {introCtaPrimary}
              </JunoButton>
            ) : (
              <JunoButton variant="primary" size="lg" className="opacity-50 pointer-events-none">
                {introCtaPrimary}
              </JunoButton>
            )}
            {brochureUrl ? (
              <JunoButton variant="outline-dark" size="lg" href={brochureUrl} target="_blank">
                {introCtaSecondary}
              </JunoButton>
            ) : (
              <JunoButton variant="outline-dark" size="lg" className="opacity-50 pointer-events-none">
                {introCtaSecondary}
              </JunoButton>
            )}
          </div>
        </div>

        <div className="relative overflow-hidden h-[50vh] md:h-auto group">
          {showHeroVideo ? (
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src={heroVideoUrl!} type="video/mp4" />
            </video>
          ) : (
            <img
              src={heroImageSrc}
              alt="Kids & Camps bij Beachclub Juno"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )}
        </div>

        <WaveTransition fillColor="#e8f0f3" />
      </section>

      {/* SECTION 2 — WEEKPROGRAMMA */}
      <section className="py-28 px-6 font-body bg-navy-soft">
        <div className="max-w-[900px] mx-auto">
          <SectionHeader title={weekTitle} subtitle={weekSubtitle} waveVariant="special" />
          <div className="space-y-0 mt-8">
            {weekDays.map((day, index) => (
              <div
                key={index}
                className={`flex gap-6 py-6 reveal-stagger ${index < weekDays.length - 1 ? 'border-b border-primary/10' : ''}`}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent text-background flex items-center justify-center font-display" style={{ fontSize: '1rem' }}>
                  {day.dayLabel}
                </div>
                <div>
                  <h3 className="text-primary mb-1 tracking-wide font-display" style={{ fontSize: '1.25rem' }}>
                    {day.title}
                  </h3>
                  <p className="text-primary/80 leading-relaxed">{day.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — VEILIGHEID */}
      <div className="relative">
        <section className="py-28 px-6 font-body bg-background">
          <div className="max-w-[1000px] mx-auto">
            <SectionHeader title={veiligheidTitle} subtitle={veiligheidSubtitle} waveVariant="special" />
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-8">
              {veiligheidPunten.map((punt, index) => (
                <div key={index} className="reveal-stagger">
                  <h3 className="text-primary mb-2 tracking-wide font-display" style={{ fontSize: '1.25rem' }}>
                    {punt.title}
                  </h3>
                  <p className="text-primary/80 leading-relaxed">{punt.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-accent font-display" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
                    {stat.number}
                  </div>
                  <div className="text-primary/70 text-sm tracking-wide mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <WaveTransition fillColor="#faf0ea" />
      </div>

      {/* SECTION 4 — PRIJS & WAT NEEM JE MEE */}
      <section className="py-28 px-6 font-body bg-terracotta-soft">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="font-display text-accent" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', lineHeight: '1' }}>
            {price} <span style={{ fontSize: '0.5em' }}>{priceUnit}</span>
          </div>
          <p className="text-primary text-lg mt-3 mb-10">{priceNote}</p>

          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-left max-w-lg mx-auto mb-12">
            {includedItems.map((item, i) => (
              <li key={i} className="flex gap-3 items-start text-primary">
                <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-background rounded-xl p-8 mb-10">
            <h3 className="text-primary mb-6 tracking-wide font-display" style={{ fontSize: '1.25rem' }}>
              {meenemenTitle}
            </h3>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
              {meenemenItems.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 w-20">
                  <MeenemenIcon label={item} className="w-7 h-7 text-primary" />
                  <span className="text-primary/80 text-sm text-center leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {hasBookingWidget ? (
            <JunoButton variant="primary" size="lg" onClick={handleBooking}>
              Meld je kind nu aan
            </JunoButton>
          ) : (
            <JunoButton variant="primary" size="lg" className="opacity-50 pointer-events-none">
              Meld je kind nu aan
            </JunoButton>
          )}
        </div>
      </section>

      {/* SECTION 5 — EVENT MANAGER CONTACT */}
      <EventManagerContact
        name={contactName}
        role={contactRole}
        photo={contactPhoto}
        intro={contactIntro}
        phone="+31624734660"
        email="info@beachclubjuno.nl"
        bgColor="cream"
      />

      {/* SECTION 6 — SFEER FOTO STRIP */}
      <section className="relative overflow-hidden h-[500px] group">
        <img
          src={fotostripImage}
          alt={fotostripText}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2
            className="font-display text-background text-center px-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1' }}
          >
            {fotostripText}
          </h2>
          <WaveDecoration variant="inverted" className="w-24 h-3 mx-auto mt-4" />
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <div className="relative">
        <EventFaqSection
          items={faqItems}
          image={faqImage}
          imageAlt="Kids & Camps bij Beachclub Juno Kijkduin"
          bgColor="sage"
        />
        <WaveTransition fillColor="#3d7183" />
      </div>

      <Footer />
    </div>
  );
}
