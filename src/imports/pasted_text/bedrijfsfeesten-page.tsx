Completely rewrite two existing page files with richer content structure.
Both pages share the same section layout — content differs.

FILES TO REWRITE:
- src/app/pages/Bedrijfsfeesten.tsx  (route stays /bedrijfsfeesten)
- src/app/pages/ParticuliereEvents.tsx (route stays /particuliere-events)

---

SHARED SECTION STRUCTURE (apply to both pages, content differs per page):

SECTION 1 — HERO
Use existing <PageHero> component.
Bedrijfsfeesten: title="ZAKELIJKE EVENTS", subtitle="Een onvergetelijke bedrijfsdag aan het strand van Kijkduin", image=images.bedrijfsfeesten.hero, height="h-screen", waveVariant="inverted"
Particuliere: title="PARTICULIERE EVENTS", subtitle="Verjaardag, jubileum, familiefeest of gewoon omdat het kan", image=images.events.bruiloften, height="h-screen", waveVariant="inverted"

SECTION 2 — AANBOD INTRO
- py-20 px-6 font-body bg-background
- max-w-[1400px] mx-auto
- SectionHeader with title, subtitle, waveVariant="special"
- Below header: flex gap-4 justify-center mb-16
  <JunoButton variant="primary" size="lg">Stel jouw event samen</JunoButton>
  <JunoButton variant="outline-dark" size="lg">Download brochure</JunoButton>

Bedrijfsfeesten SectionHeader: title="ONS ZAKELIJK AANBOD", subtitle="Van teambuilding tot bedrijfsfestival — voor groepen van 15 tot 300 personen"
Particuliere SectionHeader: title="ONS AANBOD", subtitle="Van strandfeest tot actieve dag — voor groepen van 15 tot 300 personen"

EVENT CARDS GRID below the buttons:
- grid md:grid-cols-3 gap-8 (Bedrijfsfeesten has 3 cards, Particuliere has 3 cards)
- Each card structure:

  <div className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
    {/* Image */}
    <div className="relative h-56 overflow-hidden">
      <img src={...} alt={...} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    {/* Content */}
    <div className="p-6">
      {/* Tagline above title */}
      <p className="text-accent text-sm font-body mb-1">{card.tagline}</p>
      <h3 className="text-primary mb-3 tracking-wide font-display" style={{ fontSize: '1.75rem', lineHeight: '1.2' }}>{card.title}</h3>
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

BEDRIJFSFEESTEN cards data (define as local array):
  1. tagline: "Een onvergetelijke dag", title: "BEDRIJFSFESTIVAL", image: images.bedrijfsfeesten.hero,
     bullets: ["Exclusief gebruik van locatie", "Combinatie van activiteiten", "20 – 300 personen"]
  2. tagline: "Het leukste kantoor van Nederland", title: "VERGADEREN AAN ZEE", image: images.bedrijfsfeesten.team,
     bullets: ["Halve of hele dag arrangementen", "Afsluitbare ruimte met AV", "Verzorgde lunch inbegrepen"]
  3. tagline: "Spectaculaire teamdag", title: "TEAMUITJE", image: images.watersport.kiten,
     bullets: ["Privé strand met eigen bar", "Combineer met watersport", "15 – 200 personen"]

PARTICULIERE cards data:
  1. tagline: "Iets speciaals te vieren!", title: "STRANDFEEST", image: images.events.bruiloften,
     bullets: ["Verjaardag, jubileum of familiefeest", "Exclusief stranddeel & privé bar", "20 – 300 personen"]
  2. tagline: "Met de hele groep tafelen", title: "DINER & BORREL", image: images.restaurant.main,
     bullets: ["Lunch, borrel of diner", "Formeel of informeel", "15 – 200 personen"]
  3. tagline: "Never stop playing", title: "ACTIEVE DAG", image: images.watersport.surfen,
     bullets: ["Kiten, surfen of SUP via Kiteboardschool.nl", "Combineer met diner of borrel", "10 – 100 personen"]

SECTION 3 — SFEER FOTO STRIP
- Full width, relative, overflow-hidden, h-[400px]
- Single atmospheric image filling the full width: object-cover
- Dark overlay: absolute inset-0 bg-primary/40
- Centered text overlay:
  - font-display, text-background, clamp(2.5rem, 6vw, 4rem): 
    Bedrijfsfeesten: "EEN LOCATIE DIE INSPIREERT"
    Particuliere: "JOUW FEEST, ONS STRAND"
  - WaveDecoration variant="inverted" className="w-24 h-3 mx-auto mt-4"
- Bedrijfsfeesten image: images.bedrijfsfeesten.team
- Particuliere image: images.events.bruiloften
- Use images already in images.ts — no new imports needed

SECTION 4 — EVENT MANAGER CONTACT
Use new <EventManagerContact> component:
- name="Sarah" (both pages)
- role="Event Manager bij Juno"
- photo: images.bruiloften.intro (reuse existing portrait-style photo)
- phone="+31624734660"
- email="info@clubjuno.nl"
- Bedrijfsfeesten intro: "Ik ben Sarah, Event Manager bij Juno. Wil jij een zakelijk event organiseren aan het strand? Ik denk graag met je mee bij het neerzetten van een onvergetelijke dag voor jouw team."
- Particuliere intro: "Ik ben Sarah, Event Manager bij Juno. Of het nu een verjaardag, jubileum of gewoon een feestje is — ik help je graag bij het plannen van een onvergetelijke dag aan het strand."

SECTION 5 — WAAROM JUNO
- py-20 px-6 font-body bg-secondary/10
- max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center
- Left: 
  SectionHeader align="left" waveVariant="special"
    Bedrijfsfeesten title: "WAAROM KIEZEN VOOR JUNO EVENTS?"
    Particuliere title: "WAAROM JUNO?"
  Below: 3 bullet points (flex gap-3 items-start, text-primary text-lg mb-3 each):
    ✓ Unieke locatie direct aan het strand van Kijkduin
    ✓ Persoonlijk contact en maatwerk van A tot Z
    ✓ Ervaren team met oog voor elk detail
  Below bullets: <JunoButton variant="primary" size="lg" className="mt-6">Stel jouw event samen</JunoButton>
- Right: img using:
    Bedrijfsfeesten: images.bedrijfsfeesten.hero
    Particuliere: images.intro.terrace
  className="w-full h-[450px] object-cover rounded-xl shadow-sm"

SECTION 6 — SECOND FOTO STRIP (same structure as Section 3)
- Bedrijfsfeesten image: images.intro.terrace, text: "KIJKDUIN — WAAR INSPIRATIE BEGINT"
- Particuliere image: images.bedrijfsfeesten.team, text: "MAAK ER EEN DAG OM NOOIT TE VERGETEN"

SECTION 7 — FAQ
Use new <EventFaqSection> component:
- Bedrijfsfeesten image: images.bedrijfsfeesten.team
- Particuliere image: images.events.bruiloften

BEDRIJFSFEESTEN FAQ items:
[
  { question: "Voor hoeveel personen is Juno geschikt?", answer: "Juno kan groepen ontvangen van 15 tot 300 personen. We hebben flexibele ruimtes die we kunnen combineren voor elke groepsgrootte." },
  { question: "Wat als het slecht weer is?", answer: "Geen zorgen — we zijn volledig ingericht op alle weersomstandigheden. Ons overdekte terras biedt altijd een droge en sfeervolle omgeving." },
  { question: "Kunnen we ook presenteren bij Juno?", answer: "Ja, we beschikken over AV-faciliteiten inclusief beamer, scherm en microfoons voor zakelijke presentaties." },
  { question: "Is catering inbegrepen?", answer: "Catering wordt op maat samengesteld. Van koffie en lunch tot een uitgebreid diner — alles is bespreekbaar." },
  { question: "Hoe ver op voorhand moet ik boeken?", answer: "We raden aan om minimaal 4-6 weken van tevoren contact op te nemen, zeker in het hoogseizoen (mei–september)." }
]

PARTICULIERE FAQ items:
[
  { question: "Voor hoeveel personen kan ik bij Juno terecht?", answer: "We ontvangen groepen van 15 tot 300 personen. Voor kleinere of grotere groepen denken we graag creatief mee." },
  { question: "Wat als het slecht weer is op de dag van ons feest?", answer: "Geen zorgen — ons overdekte terras zorgt ervoor dat jouw feest altijd doorgaat, weer of geen weer." },
  { question: "Kan ik een DJ of live band meenemen?", answer: "Absoluut. We beschikken over geluidsfaciliteiten en kunnen ook zelf een DJ of artiest adviseren." },
  { question: "Is catering inbegrepen bij een arrangement?", answer: "Catering wordt volledig op maat samengesteld — van welkomstdrankje tot uitgebreid diner." },
  { question: "Hoe neem ik contact op voor een offerte?", answer: "Stuur een mail naar info@clubjuno.nl of bel ons op 06 2473 4660. We reageren binnen één werkdag." }
]

SECTION 8 — EVENT MANAGER CONTACT (second contact block at bottom, bgColor="sage")
Same <EventManagerContact> component, same props as Section 4 but bgColor="sage"

---

IMPORTS needed in both files:
Navigation, Footer (existing)
PageHero, SectionHeader, JunoButton, WaveDecoration (existing)
EventManagerContact, EventFaqSection (new from Prompt 1)
images from '../data/images'

DESIGN RULES:
- Never use hardcoded hex values — only Tailwind semantic tokens
- font-body on section wrappers only
- No custom CSS
- No new animation classes