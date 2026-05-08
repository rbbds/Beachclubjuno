import { useEffect, useState } from 'react';
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
import { useScrollReveal } from '../hooks/useScrollReveal';
import { openMiceWidget } from '../utils/miceWidget';
import { setPageMeta } from '../utils/seo';
import { sanityClient, urlFor } from '../../lib/sanity';

const ICONS = [Heart, Users, Sparkles];

const staticRegelingCards = [
  {
    icon: Heart,
    title: 'PERSOONLIJKE BEGELEIDING',
    description: 'Jouw eigen weddingcoördinator begeleidt jullie van de eerste kennismaking tot de laatste dans. Altijd bereikbaar, altijd betrokken.',
    image: images.bruiloften.sfeer[0]
  },
  {
    icon: Users,
    title: 'CATERING OP MAAT',
    description: 'Van welkomstdrankjes tot het dessert — onze chef creëert een culinaire ervaring die past bij jullie smaak en budget.',
    image: images.bruiloften.sfeer[1]
  },
  {
    icon: Sparkles,
    title: 'DE PERFECTE SETTING',
    description: 'Strandceremonie, overdekt diner of een mix — we passen de locatie volledig aan jullie wensen aan.',
    image: images.bruiloften.hero
  }
];

const staticMomentenCards = [
  { image: images.bruiloften.hero, title: 'DE CEREMONIE', subtitle: 'Jullie ja-woord aan de vloedlijn' },
  { image: images.bruiloften.sfeer[0], title: 'WELKOMSTDRANKJE', subtitle: 'Proostend met uitzicht op zee' },
  { image: images.bruiloften.sfeer[1], title: 'HET DINER', subtitle: 'Culinair genieten met jullie gasten' },
  { image: images.bruiloften.sfeer[2], title: 'DE EERSTE DANS', subtitle: 'Met golven als decor' },
  { image: images.bruiloften.sfeer[3], title: 'HET FEEST', subtitle: 'Tot laat dansen aan het strand' }
];

const staticFaqItems = [
  { question: 'Is Juno een officiële trouwlocatie?', answer: 'Ja, Juno is een erkende trouwlocatie. Jullie kunnen hier officieel in het huwelijk treden, met de Noordzee als decor.' },
  { question: 'Hoeveel gasten kunnen we uitnodigen?', answer: 'We ontvangen bruiloften van 20 tot 200 personen. Zowel intieme ceremonies als grote feesten zijn mogelijk.' },
  { question: 'Wanneer is Juno beschikbaar voor bruiloften?', answer: 'We organiseren bruiloften het hele jaar door. Het hoogseizoen (mei t/m september) is snel volgeboekt — reserveer op tijd.' },
  { question: 'Kunnen we ook buiten trouwen?', answer: 'Absoluut. Een strandceremonie aan de vloedlijn is een van onze mooiste opties. We hebben ook overdekte alternatieven voor onzeker weer.' },
  { question: 'Wat is er inbegrepen in een bruiloftarrangement?', answer: 'Elk arrangement is maatwerk. Basisarrangementen bevatten locatiehuur, catering en een persoonlijke coördinator. Neem contact op voor een offerte op maat.' }
];

export function Bruiloften() {
  const scrollRef = useScrollReveal();

  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [heroVideoUrl, setHeroVideoUrl] = useState<string | null>(null);

  const [introLabel, setIntroLabel] = useState('VIER DE LIEFDE');
  const [introTitle, setIntroTitle] = useState('TROUWEN OP HET STRAND');
  const [introParagraph, setIntroParagraph] = useState('Een zonovergoten dag, de Noordzee als getuige en een locatie die ademt. Bij Juno in Kijkduin wordt jouw bruiloft een dag om nooit te vergeten.');
  const [introUsps, setIntroUsps] = useState([
    'Officiële trouwlocatie aan het strand',
    'Persoonlijke weddingcoördinator',
    'Catering en open bar op maat',
    '20 tot 200 personen'
  ]);
  const [introCtaPrimary, setIntroCtaPrimary] = useState('Vraag een offerte aan');
  const [introCtaSecondary, setIntroCtaSecondary] = useState('Download brochure');
  const [brochureUrl, setBrochureUrl] = useState('');

  const [momentenTitle, setMomentenTitle] = useState('VAN CEREMONIE TOT FEEST');
  const [momentenSubtitle, setMomentenSubtitle] = useState('Elk moment van jullie dag, zorgvuldig verzorgd');
  const [momentenCards, setMomentenCards] = useState(staticMomentenCards);

  const [regelingenTitle, setRegelingenTitle] = useState('HOE WIJ HET REGELEN');
  const [regelingenSubtitle, setRegelingenSubtitle] = useState('Van eerste kennismaking tot laatste dans — wij ontzorgen jullie volledig');
  const [regelingCards, setRegelingCards] = useState(staticRegelingCards);

  const [contactName, setContactName] = useState('Sarah');
  const [contactRole, setContactRole] = useState('Wedding Coördinator bij Juno');
  const [contactIntro, setContactIntro] = useState('Ik ben Sarah, Wedding Coördinator bij Juno. Ik luister naar jullie verhaal en zorg ervoor dat jullie dag precies wordt zoals jullie het gedroomd hebben.');
  const [contactPhoto, setContactPhoto] = useState(images.bruiloften.intro);

  const [fotostripImage, setFotostripImage] = useState(images.bruiloften.hero);
  const [fotostripText, setFotostripText] = useState('DE NOORDZEE ALS GETUIGE');

  const [faqImage, setFaqImage] = useState(images.bruiloften.intro);
  const [faqItems, setFaqItems] = useState(staticFaqItems);

  useEffect(() => {
    setPageMeta(
      'Trouwen aan zee | Beachclub Juno Kijkduin',
      'Organiseer uw strandbruiloft bij Beachclub Juno in Kijkduin. Officiële trouwlocatie aan de Noordzee voor 20 tot 200 personen. Persoonlijke weddingcoördinator en catering op maat.'
    );
    return () => { document.title = 'Beachclub Juno — Zon. Strand. Cultuur. | Kijkduin'; };
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "bruiloftenPage"][0]`)
      .then(data => {
        if (!data) return;

        if (data.hero?.videoUrl) setHeroVideoUrl(data.hero.videoUrl);
        if (data.hero?.image) setHeroImage(urlFor(data.hero.image).width(1800).url());

        if (data.intro?.label) setIntroLabel(data.intro.label);
        if (data.intro?.title) setIntroTitle(data.intro.title);
        if (data.intro?.paragraph) setIntroParagraph(data.intro.paragraph);
        if (data.intro?.usps?.length) setIntroUsps(data.intro.usps);
        if (data.intro?.ctaPrimary) setIntroCtaPrimary(data.intro.ctaPrimary);
        if (data.intro?.ctaSecondary) setIntroCtaSecondary(data.intro.ctaSecondary);
        if (data.intro?.brochureUrl) setBrochureUrl(data.intro.brochureUrl);

        if (data.momenten?.title) setMomentenTitle(data.momenten.title);
        if (data.momenten?.subtitle) setMomentenSubtitle(data.momenten.subtitle);
        if (data.momenten?.cards?.length) {
          setMomentenCards(data.momenten.cards.map((c: any, i: number) => ({
            image: c.image ? urlFor(c.image).width(800).url() : staticMomentenCards[i]?.image ?? images.bruiloften.hero,
            title: c.title || staticMomentenCards[i]?.title || '',
            subtitle: c.subtitle || staticMomentenCards[i]?.subtitle || '',
          })));
        }

        if (data.regelingen?.title) setRegelingenTitle(data.regelingen.title);
        if (data.regelingen?.subtitle) setRegelingenSubtitle(data.regelingen.subtitle);
        if (data.regelingen?.cards?.length) {
          setRegelingCards(data.regelingen.cards.map((c: any, i: number) => ({
            icon: ICONS[i] ?? Heart,
            title: c.title || staticRegelingCards[i]?.title || '',
            description: c.description || staticRegelingCards[i]?.description || '',
            image: c.image ? urlFor(c.image).width(800).url() : staticRegelingCards[i]?.image ?? images.bruiloften.sfeer[0],
          })));
        }

        if (data.contact?.name) setContactName(data.contact.name);
        if (data.contact?.role) setContactRole(data.contact.role);
        if (data.contact?.intro) setContactIntro(data.contact.intro);
        if (data.contact?.photo) setContactPhoto(urlFor(data.contact.photo).width(800).url());

        if (data.fotostrip?.image) setFotostripImage(urlFor(data.fotostrip.image).width(1800).url());
        if (data.fotostrip?.text) setFotostripText(data.fotostrip.text);

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

  const showHeroVideo = !!heroVideoUrl;
  const heroImageSrc = heroImage ?? images.bruiloften.hero;

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
            {introTitle}
          </h1>
          <WaveDecoration variant="special" className="w-24 h-3 mb-6" />
          <p className="text-primary text-lg leading-relaxed mb-6">
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
            <JunoButton variant="primary" size="lg" onClick={() => openMiceWidget('8f1c3d9ed6cc')}>
              {introCtaPrimary}
            </JunoButton>
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
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={heroVideoUrl!} type="video/mp4" />
            </video>
          ) : (
            <img
              src={heroImageSrc}
              alt="Trouwen op het strand bij Beachclub Juno"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )}
        </div>

        <WaveTransition fillColor="#e8f0f3" />
      </section>

      {/* SECTION 2 — MOMENTEN */}
      <section className="py-28 px-6 font-body bg-navy-soft">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            title={momentenTitle}
            subtitle={momentenSubtitle}
            waveVariant="special"
          />
          <div
            className="mt-8 -mx-6 px-6 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            {momentenCards.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-72 snap-start group">
                <div className="relative h-96 rounded-xl overflow-hidden mb-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-background font-display tracking-wide" style={{ fontSize: '1.5rem' }}>
                      {card.title}
                    </h3>
                    <p className="text-background/80 text-sm mt-1">{card.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOE WIJ HET REGELEN */}
      <div className="relative">
        <section className="py-28 px-6 font-body bg-background">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader
              title={regelingenTitle}
              subtitle={regelingenSubtitle}
              waveVariant="special"
            />
            <div className="grid md:grid-cols-3 gap-8 mt-4">
              {regelingCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group reveal-stagger"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    </div>
                    <div className="p-6">
                      <Icon className="w-8 h-8 text-accent mb-3" />
                      <h3 className="text-primary mb-3 tracking-wide font-display" style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>
                        {card.title}
                      </h3>
                      <p className="text-primary leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <WaveTransition fillColor="#faf0ea" />
      </div>

      {/* SECTION 4 — EVENT MANAGER CONTACT */}
      <EventManagerContact
        name={contactName}
        role={contactRole}
        photo={contactPhoto}
        intro={contactIntro}
        phone="+31624734660"
        email="info@beachclubjuno.nl"
        bgColor="terracotta"
      />

      {/* SECTION 5 — SFEER FOTO STRIP */}
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

      {/* SECTION 6 — FAQ */}
      <div className="relative">
        <EventFaqSection
          items={faqItems}
          image={faqImage}
          imageAlt="Bruiloft bij Beachclub Juno Kijkduin"
          bgColor="sage"
        />
        <WaveTransition fillColor="#3d7183" />
      </div>

      <Footer />
    </div>
  );
}
