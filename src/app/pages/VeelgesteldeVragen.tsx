import { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { WaveDecoration } from '../components/WaveDecoration';
import { WaveTransition } from '../components/WaveTransition';
import { SectionWaveTop } from '../components/SectionWaveTop';
import { PageHero } from '../components/PageHero';
import { JunoButton } from '../components/JunoButton';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../components/ui/accordion';
import { images } from '../data/images';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { setPageMeta } from '../utils/seo';

const faqGroups = [
  {
    key: 'beachclub',
    label: 'Beachclub Juno',
    items: [
      {
        q: 'Waar is Beachclub Juno precies gevestigd?',
        a: 'Juno ligt op het strand van Kijkduin in Den Haag, op het adres Strand Zuid 18, 2554 ZZ Den Haag. Direct aan het strand met uitzicht op de Noordzee.',
      },
      {
        q: 'Wat zijn de openingstijden?',
        a: 'We zijn het hele jaar geopend. Maandag t/m donderdag van 10:00 tot 22:00, vrijdag en zaterdag van 10:00 tot 01:00, en zondag van 10:00 tot 22:00. Op evenementdagen kunnen de tijden afwijken.',
      },
      {
        q: 'Is er parkeergelegenheid bij Juno?',
        a: 'Ja, er is voldoende parkeerruimte beschikbaar bij het strandgebied van Kijkduin. In het hoogseizoen raden we aan om vroeg te komen of te kiezen voor openbaar vervoer.',
      },
      {
        q: 'Is Juno geschikt voor mensen met een beperking?',
        a: 'Ja, de beachclub is zo veel als mogelijk toegankelijk ingericht. Mocht je specifieke wensen of vragen hebben, neem dan van tevoren contact met ons op.',
      },
    ],
  },
  {
    key: 'events',
    label: 'Events & Verhuur',
    items: [
      {
        q: 'Kan ik een bruiloft of bedrijfsfeest organiseren bij Juno?',
        a: 'Absoluut. Juno biedt een unieke locatie voor zowel bruiloften als zakelijke evenementen. We bieden arrangementen voor 10 tot 200 personen. Neem contact op voor een vrijblijvende offerte.',
      },
      {
        q: 'Hoe boek ik een evenement of verhuur?',
        a: 'Stuur ons een e-mail via info@clubjuno.nl of bel ons op 06 2473 4660. We plannen graag een kennismakingsgesprek om je wensen te bespreken.',
      },
      {
        q: 'Zijn er cateringopties beschikbaar voor evenementen?',
        a: 'Ja, onze chef verzorgt volledig op maat gemaakte cateringarrangementen. Van welkomstdrankjes en bitterballen tot een uitgebreid diner — alles is mogelijk.',
      },
      {
        q: 'Kunnen we ook buiten een evenement houden?',
        a: 'Dat kan zeker, mits het weer het toelaat. We hebben zowel overdekte ruimtes als een ruim buiten terras. Voor grotere outdoor evenementen werken we met een tent/overkapping.',
      },
    ],
  },
  {
    key: 'cultuur',
    label: 'Kunst & Cultuur',
    items: [
      {
        q: 'Wat voor culturele evenementen organiseert Juno?',
        a: 'Ons programma omvat comedy, theater, jazz, pop en bijzondere culturele avonden. We programmeren het hele seizoen door, met een focus op kwaliteit en toegankelijkheid voor een publiek van 35–65 jaar.',
      },
      {
        q: 'Hoe kom ik aan tickets voor een voorstelling?',
        a: 'Tickets zijn te koop via onze website op de evenementenpagina. Je kunt ook bellen of mailen. We adviseren om op tijd te boeken, want onze avonden zijn populair en de zaal heeft beperkte capaciteit.',
      },
      {
        q: 'Kan ik mijn eigen band of artiest voorstellen voor het programma?',
        a: 'Ja, dat waarderen we! Stuur een e-mail naar info@clubjuno.nl met een korte omschrijving, links naar je werk en gewenste datum. Onze programmeur neemt zo snel mogelijk contact op.',
      },
      {
        q: 'Zijn de culturele avonden geschikt voor kinderen?',
        a: 'Dat verschilt per voorstelling. De meeste avonden zijn bedoeld voor volwassenen. Kijk per evenement of er een leeftijdsadvies vermeld staat, of neem contact met ons op.',
      },
    ],
  },
  {
    key: 'watersport',
    label: 'Kitesurfschool',
    items: [
      {
        q: 'Met welke kitesurfschool werkt Juno samen?',
        a: 'Wij werken samen met Kiteboardschool.nl, een begrip in de Nederlandse kitesurfwereld. Ze bieden lessen aan voor alle leeftijden en niveaus, direct vanuit onze locatie in Kijkduin.',
      },
      {
        q: 'Welke watersportactiviteiten kan ik bij Juno boeken?',
        a: 'Via onze partner kun je terecht voor kitesurf lessen, surflessen, wingfoilen, SUPpen en kids & camps. Meer informatie en boekingen via kiteboardschool.nl.',
      },
      {
        q: 'Heb ik eigen materiaal nodig voor een les?',
        a: 'Nee, al het benodigde materiaal wordt door Kiteboardschool.nl verzorgd. Je hoeft alleen sportkleding en een goede dosis avontuur mee te nemen.',
      },
      {
        q: 'Zijn de lessen ook geschikt voor complete beginners?',
        a: 'Zeker! Alle instructeurs zijn gecertificeerd (IKO voor kiten, ISA voor surfen) en gespecialiseerd in het lesgeven aan beginners. Je staat gegarandeerd op het board op dag één.',
      },
    ],
  },
];

export function VeelgesteldeVragen() {
  useEffect(() => {
    setPageMeta(
      'Veelgestelde vragen | Beachclub Juno Kijkduin',
      'Alles wat u wilt weten over Beachclub Juno in Kijkduin. Openingstijden, parkeren, evenementen, bruiloften, zakelijke events en watersport — uw vragen beantwoord.'
    );
    return () => { document.title = 'Beachclub Juno — Zon. Strand. Cultuur. | Kijkduin'; };
  }, []);

  const scrollRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-background" ref={scrollRef}>
      <Navigation />

      {/* Photo Hero */}
      <PageHero
        image={images.hero.main}
        title="VEELGESTELDE VRAGEN"
        subtitle="Alles wat je wilt weten over Juno"
        waveColor="#f6f4db"
      />

      {/* FAQ Content */}
      <section
        className="relative py-16 px-6 pb-32 font-body bg-background"
      >
        <SectionWaveTop fillColor="#f6f4db" />
        <div className="max-w-[900px] mx-auto space-y-16">
          {faqGroups.map((group) => (
            <div key={group.key}>
              {/* Group header */}
              <div className="mb-6">
                <h2
                  className="text-primary mb-3 font-display"
                  style={{ fontSize: '2rem', letterSpacing: '0.06em' }}
                >
                  {group.label}
                </h2>
                <WaveDecoration variant="default" className="w-16 h-2" />
              </div>

              {/* Accordion */}
              <Accordion type="multiple" className="w-full">
                {group.items.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`${group.key}-${idx}`}
                    className="border-b border-secondary/30 last:border-b-0"
                  >
                    <AccordionTrigger
                      className="text-primary hover:text-accent hover:no-underline transition-colors py-6 text-left text-lg"
                      style={{ fontWeight: 700 }}
                    >
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-primary/80 leading-relaxed pb-4 text-base">
                        {item.a}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
        
        <WaveTransition fillColor="#e8f0f3" />
      </section>

      {/* CTA Block */}
      <section
        className="relative bg-navy-soft py-20 px-6 pb-32 text-center font-body"
      >
        <h2
          className="text-primary mb-4 font-display"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '0.04em' }}
        >
          Nog een vraag?
        </h2>
        <WaveDecoration variant="special" className="w-24 h-3 mx-auto mb-6" />
        <p className="text-primary/80 mb-10 max-w-md mx-auto">
          Staat jouw vraag er niet bij? We helpen je graag persoonlijk verder.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <JunoButton variant="primary" href="mailto:info@clubjuno.nl">
            Stuur een e-mail
          </JunoButton>
          <JunoButton variant="outline-dark" href="tel:+31624734660">
            Bel ons
          </JunoButton>
        </div>
        
        <WaveTransition fillColor="#3d7183" />
      </section>
      
      <Footer />
    </div>
  );
}