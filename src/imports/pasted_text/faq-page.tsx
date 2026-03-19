Create a new page: /faq (Veelgestelde Vragen)

Use the existing design system:
- Colors: Navy #3d7183, Terracotta #cc6435, Cream #f6f4db, Sage #9fbaae
- Fonts: Bebas Neue (headings), Museo (body)
- Same Navigation component as other pages (transparent hero navbar → solid on scroll)
- Same Footer component (add "Veelgestelde vragen" link to the footer navigation column)
- 80px section padding, 12px card radius, 8px button radius

---

PAGE STRUCTURE:

1. HERO SECTION
- Full-bleed hero, same height as /programma page hero (not full screen — just a compact header, ~320px)
- Cream background (#f6f4db), no photo — clean editorial style
- Large Bebas Neue headline: "VEELGESTELDE VRAGEN"
- WaveDecoration (special/terracotta) centered below headline
- Subtitle in Museo: "Alles wat je wilt weten over Juno"
- pt-32 to clear the fixed navigation

2. FAQ CONTENT SECTION
- Max-width 900px, centered, px-6
- Organized in 4 topic groups, each with:
  - A section label in Bebas Neue (1.5rem, navy, uppercase, with a WaveDecoration beneath it in sage/inverted color)
  - Accordion-style FAQ items (use Radix UI Accordion — already in project as @radix-ui/react-accordion)
  - Each accordion item: question as trigger (Museo, font-weight 700, navy), answer as content (Museo, 1rem, navy/80%)
  - Subtle border-bottom between items (border-[#9fbaae]/30)
  - Chevron icon rotates on open
  - No harsh shadows

TOPIC GROUPS & QUESTIONS:

--- BEACHCLUB JUNO ---
Q: Waar is Beachclub Juno precies gevestigd?
A: Juno ligt op het strand van Kijkduin in Den Haag, op het adres Deltaplein 200, 2554 EJ. Je vindt ons op de plek waar vroeger Boca Grandi zat — direct aan het strand met uitzicht op de Noordzee.

Q: Wat zijn de openingstijden?
A: We zijn het hele jaar geopend. Maandag t/m donderdag van 10:00 tot 22:00, vrijdag en zaterdag van 10:00 tot 01:00, en zondag van 10:00 tot 22:00. Op evenementdagen kunnen de tijden afwijken.

Q: Is er parkeergelegenheid bij Juno?
A: Ja, er is voldoende parkeerruimte beschikbaar bij het strandgebied van Kijkduin. In het hoogseizoen raden we aan om vroeg te komen of te kiezen voor openbaar vervoer.

Q: Is Juno geschikt voor mensen met een beperking?
A: Ja, de beachclub is zo veel als mogelijk toegankelijk ingericht. Mocht je specifieke wensen of vragen hebben, neem dan van tevoren contact met ons op.

--- EVENTS & VERHUUR ---
Q: Kan ik een bruiloft of bedrijfsfeest organiseren bij Juno?
A: Absoluut. Juno biedt een unieke locatie voor zowel bruiloften als zakelijke evenementen. We bieden arrangementen voor 10 tot 200 personen. Neem contact op voor een vrijblijvende offerte.

Q: Hoe boek ik een evenement of verhuur?
A: Stuur ons een e-mail via info@beachclubjuno.nl of bel ons op 070 123 4567. We plannen graag een kennismakingsgesprek om je wensen te bespreken.

Q: Zijn er cateringopties beschikbaar voor evenementen?
A: Ja, onze chef verzorgt volledig op maat gemaakte cateringarrangementen. Van welkomstdrankjes en bitterballen tot een uitgebreid diner — alles is mogelijk.

Q: Kunnen we ook buiten een evenement houden?
A: Dat kan zeker, mits het weer het toelaat. We hebben zowel overdekte ruimtes als een ruim buiten terras. Voor grotere outdoor evenementen werken we met een tent/overkapping.

--- KUNST & CULTUUR ---
Q: Wat voor culturele evenementen organiseert Juno?
A: Ons programma omvat comedy, theater, jazz, pop en bijzondere culturele avonden. We programmeren het hele seizoen door, met een focus op kwaliteit en toegankelijkheid voor een publiek van 35-65 jaar.

Q: Hoe kom ik aan tickets voor een voorstelling?
A: Tickets zijn te koop via onze website op de evenementenpagina. Je kunt ook bellen of mailen. We adviseren om op tijd te boeken, want onze avonden zijn populair en de zaal heeft beperkte capaciteit.

Q: Kan ik mijn eigen band of artiest voorstellen voor het programma?
A: Ja, dat waarderen we! Stuur een e-mail naar info@beachclubjuno.nl met een korte omschrijving, links naar je werk en gewenste datum. Onze programmeur neemt zo snel mogelijk contact op.

Q: Zijn de culturele avonden geschikt voor kinderen?
A: Dat verschilt per voorstelling. De meeste avonden zijn bedoeld voor volwassenen. Kijk per evenement of er een leeftijdsadvies vermeld staat, of neem contact met ons op.

--- KITESURFSCHOOL ---
Q: Met welke kitesurfschool werkt Juno samen?
A: Wij werken samen met Kiteboardschool.nl, een begrip in de Nederlandse kitesurfwereld. Ze bieden lessen aan voor alle leeftijden en niveaus, direct vanuit onze locatie in Kijkduin.

Q: Welke watersportactiviteiten kan ik bij Juno boeken?
A: Via onze partner kun je terecht voor kitesurf lessen, surflessen, wingfoilen, SUPpen en kids & camps. Meer informatie en boekingen via kiteboardschool.nl.

Q: Heb ik eigen materiaal nodig voor een les?
A: Nee, al het benodigde materiaal wordt door Kiteboardschool.nl verzorgd. Je hoeft alleen sportkleding en een goede dosis avontuur mee te nemen.

Q: Zijn de lessen ook geschikt voor complete beginners?
A: Zeker! Alle instructeurs zijn gecertificeerd (IKO voor kiten, ISA voor surfen) en gespecialiseerd in het lesgeven aan beginners. Je staat gegarandeerd op het board op dag één.

---

3. CONTACT CTA BLOCK
- Background: Navy #3d7183
- Bebas Neue headline: "NOG EEN VRAAG?"
- WaveDecoration variant="inverted" centered below
- Museo body text: "Staat jouw vraag er niet bij? We helpen je graag persoonlijk verder."
- Two buttons: 
  - Primary (terracotta): "Stuur een e-mail" → mailto:info@beachclubjuno.nl
  - Secondary (outlined cream): "Bel ons" → tel:0701234567

---

FOOTER UPDATE:
In Footer.tsx, add "Veelgestelde vragen" as a Link to="/faq" in the Navigatie column, after "Contact".

ROUTES UPDATE:
Add /faq route in routes.tsx pointing to a new VeelgesteldeVragen page component.

FILE TO CREATE:
src/app/pages/VeelgesteldeVragen.tsx

---

ACCORDION IMPLEMENTATION NOTES:
- Import Accordion, AccordionItem, AccordionTrigger, AccordionContent from src/app/components/ui/accordion.tsx (already exists in project)
- Use type="multiple" so multiple items can be open simultaneously
- Style the trigger: text-[#3d7183] font-bold text-left, hover:text-[#cc6435] transition
- Style the content: text-[#3d7183]/80 leading-relaxed pb-4
- Add a thin border-b border-[#9fbaae]/30 between items
- The chevron from AccordionTrigger rotates via the existing [&[data-state=open]>svg]:rotate-180 class

ARCHITECTURE RULES (follow existing project conventions):
- No inline drawer logic — not applicable here
- No custom CSS — use only Tailwind utilities or existing theme.css classes  
- fontFamily declarations on section wrapper level only
- Import scrollToSection from src/app/utils/scroll.ts if needed
- Use WaveDecoration component from src/app/components/WaveDecoration.tsx
- Use Navigation from src/app/components/Navigation.tsx
- Use Footer from src/app/components/Footer.tsx