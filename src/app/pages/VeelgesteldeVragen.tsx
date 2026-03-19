import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { WaveDecoration } from '../components/WaveDecoration';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../components/ui/accordion';
import { images } from '../data/images';

const faqGroups = [
  {
    key: 'beachclub',
    label: 'Beachclub Juno',
    items: [
      {
        q: 'Waar is Beachclub Juno precies gevestigd?',
        a: 'Juno ligt op het strand van Kijkduin in Den Haag, op het adres Deltaplein 200, 2554 EJ. Je vindt ons op de plek waar vroeger Boca Grandi zat — direct aan het strand met uitzicht op de Noordzee.',
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
        a: 'Stuur ons een e-mail via info@beachclubjuno.nl of bel ons op 070 123 4567. We plannen graag een kennismakingsgesprek om je wensen te bespreken.',
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
        a: 'Ja, dat waarderen we! Stuur een e-mail naar info@beachclubjuno.nl met een korte omschrijving, links naar je werk en gewenste datum. Onze programmeur neemt zo snel mogelijk contact op.',
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
  return (
    <div className="min-h-screen bg-[#f6f4db]">
      <Navigation />

      {/* Photo Hero */}
      <section
        className="relative h-[50vh] min-h-[320px] w-full overflow-hidden flex items-center justify-center"
        style={{ fontFamily: 'Museo, sans-serif' }}
      >
        <img
          src={images.hero.main}
          alt="Beachclub Juno"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-6">
          <h1
            className="text-[#f6f4db] mb-4"
            style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.8rem, 6vw, 5rem)', letterSpacing: '0.04em' }}
          >
            VEELGESTELDE VRAGEN
          </h1>
          <WaveDecoration variant="inverted" className="w-24 h-3 mx-auto mb-5" />
          <p className="text-[#f6f4db]/80 max-w-md mx-auto">
            Alles wat je wilt weten over Juno
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section
        className="py-16 px-6"
        style={{ fontFamily: 'Museo, sans-serif' }}
      >
        <div className="max-w-[900px] mx-auto space-y-16">
          {faqGroups.map((group) => (
            <div key={group.key}>
              {/* Group header */}
              <div className="mb-6">
                <h2
                  className="text-[#3d7183] mb-3"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.5rem', letterSpacing: '0.06em' }}
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
                    className="border-b border-[#9fbaae]/30 last:border-b-0"
                  >
                    <AccordionTrigger
                      className="text-[#3d7183] hover:text-[#cc6435] hover:no-underline transition-colors py-4 text-left"
                      style={{ fontWeight: 700 }}
                    >
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-[#3d7183]/80 leading-relaxed pb-2">
                        {item.a}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Block */}
      <section
        className="bg-[#3d7183] py-20 px-6 text-center"
        style={{ fontFamily: 'Museo, sans-serif' }}
      >
        <h2
          className="text-[#f6f4db] mb-4"
          style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '0.04em' }}
        >
          Nog een vraag?
        </h2>
        <WaveDecoration variant="inverted" className="w-24 h-3 mx-auto mb-6" />
        <p className="text-[#f6f4db]/80 mb-10 max-w-md mx-auto">
          Staat jouw vraag er niet bij? We helpen je graag persoonlijk verder.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:info@beachclubjuno.nl"
            className="bg-[#cc6435] text-[#f6f4db] px-8 py-3 rounded-lg hover:bg-[#b55730] transition-colors"
          >
            Stuur een e-mail
          </a>
          <a
            href="tel:0701234567"
            className="border border-[#f6f4db] text-[#f6f4db] px-8 py-3 rounded-lg hover:bg-[#f6f4db]/10 transition-colors"
          >
            Bel ons
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}