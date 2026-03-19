Create a new page for Beachclub Juno: ParticuliereEvents.tsx at src/app/pages/ParticuliereEvents.tsx, and wire it into the existing routing and navigation.

---

DESIGN SYSTEM — follow exactly, no exceptions:
- Colors: only bg-primary, text-primary, bg-accent, text-accent, bg-background, bg-secondary etc. (NEVER hardcoded hex)
- Fonts: font-display (Bebas Neue) for all headings, font-body (Museo) for all body text
- Declare font-body on section wrapper level only, not on individual child elements
- Components to reuse: Navigation, Footer, PageHero, SectionHeader, JunoButton, WaveDecoration, WaveTransition
- No custom CSS, no inline drawer logic, no new animation classes

---

PAGE STRUCTURE:

1. DOCUMENT TITLE
useEffect to set: 'Particuliere Events | Beachclub Juno Kijkduin'
Restore to default on unmount.

2. HERO
Use existing <PageHero> component with:
- image: images.events.bruiloften (reuse existing Unsplash image from images.ts)
- title: "JOUW FEEST OP HET STRAND"
- subtitle: "Verjaardag, jubileum, familiefeest of gewoon omdat het kan — Juno maakt er een onvergetelijke dag van."
- waveVariant: "inverted"
- height: "h-screen"

3. INTRO SECTION
Mirrors the layout of Bruiloften.tsx intro section exactly:
- py-20 px-6 font-body
- max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center
- Left column: two paragraphs of text (text-primary text-lg leading-relaxed)
  Para 1: "Ben je op zoek naar een bijzondere strandlocatie voor een verjaardag, jubileum, BBQ, familiefeest of borrel? Bij Juno vind je de perfecte setting aan het strand van Kijkduin."
  Para 2: "Of je nu komt met een groep van 15 of 300 mensen — wij denken met je mee en regelen alles van catering tot sfeer. Jij geniet, wij zorgen."
- Right column: img using images.events.bedrijfsfeesten, same classes as Bruiloften.tsx intro image: w-full h-[500px] object-cover rounded-xl shadow-sm

4. AANBOD SECTION
Mirrors the "Wat wij bieden" section from Bruiloften.tsx exactly — same card structure, same classes:
- py-20 px-6 bg-secondary/10 font-body
- <SectionHeader title="ONS AANBOD" subtitle="Van intiem feestje tot groot strandfeest — wij hebben een arrangement voor elke gelegenheid" waveVariant="special" />
- grid md:grid-cols-3 gap-8

Define a local aanbod array with 3 items, each with: icon (from lucide-react), title, description.
Render using the EXACT same card markup as features in Bruiloften.tsx:
  <button className="bg-background p-8 rounded-xl border-2 border-secondary/30 hover:border-secondary transition-all hover:shadow-lg cursor-pointer text-left w-full">
    <Icon className="w-10 h-10 text-primary mb-4" />
    <h3 className="text-primary mb-3 tracking-wide font-display" style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>
      {item.title}
    </h3>
    <p className="text-primary leading-relaxed">{item.description}</p>
  </button>

The 3 aanbod items:
  1. icon: PartyPopper, title: "STRANDFEEST", description: "Verjaardag, jubileum of familiebijeenkomst — exclusief stranddeel, privé bar en catering op maat. Voor 20 tot 300 personen."
  2. icon: UtensilsCrossed, title: "DINER & BORREL", description: "Lunch, borrel of diner — formeel of informeel. Jouw ideale setting aan het strand. Voor 15 tot 200 personen."
  3. icon: Waves, title: "ACTIEVE DAG", description: "Combineer een strandactiviteit met Kiteboardschool.nl met een verzorgde BBQ of diner. Voor 10 tot 100 personen."

5. PRAKTISCH SECTION
Mirrors the "Praktische informatie" section from Bedrijfsfeesten.tsx exactly — same grid with two white cards:
- py-20 px-6 font-body
- <SectionHeader title="PRAKTISCHE INFORMATIE" waveVariant="special" />
- grid md:grid-cols-2 gap-8

Card 1 — "CAPACITEIT & BESCHIKBAARHEID":
  bg-white p-8 rounded-xl shadow-sm, h3 font-display text-primary (1.75rem), ul space-y-3 text-primary text-lg
  Items: Capaciteit: 15 tot 300 personen / Beschikbaar: Het hele jaar door / Locatie: Direct aan het strand Kijkduin / Flexibele opstellingen mogelijk

Card 2 — "INBEGREPEN":
  Same card styling
  Items: ✓ Persoonlijk adviesgesprek / ✓ Catering en drankenpakketten op maat / ✓ Sfeervolle locatie met strandzicht / ✓ Activiteiten via Kiteboardschool.nl mogelijk

6. CTA BLOCK
Mirrors the CTA block at the bottom of Bruiloften.tsx exactly — bg-primary section with centered content:
- py-20 px-6 bg-primary font-body
- max-w-[1000px] mx-auto text-center
- h2 font-display text-background clamp(2.5rem, 8vw, 5rem) lineHeight 1: "JOUW FEEST,\nONS STRAND"
- <WaveDecoration variant="inverted" className="w-32 h-4 mx-auto mb-8" />
- p text-background text-xl mb-10 max-w-2xl mx-auto: "Klaar om jouw event bij Juno te plannen? We horen graag van je."
- Two buttons using <JunoButton> (same as Bruiloften.tsx CTA):
  <JunoButton variant="primary" size="lg">Vraag offerte aan</JunoButton>
  <JunoButton variant="outline-light" size="lg">Neem contact op</JunoButton>

---

ROUTING — src/app/routes.tsx:
- Import ParticuliereEvents
- Add route: { path: "/particuliere-events", Component: ParticuliereEvents }

NAVIGATION — src/app/components/Navigation.tsx:
In the navItems array, find the "Events & Verhuur" item and add a third child:
  { label: 'Particuliere Events', path: '/particuliere-events' }

Also add '/particuliere-events' to the pagesWithHero array so the transparent navbar works correctly.

FOOTER — src/app/components/Footer.tsx:
In the Navigatie column, add after the "Events & Verhuur" button:
  <li>
    <Link to="/particuliere-events" className="text-background/80 hover:text-accent transition-colors">
      Particuliere Events
    </Link>
  </li>

---

IMPORTS TO USE:
- Navigation, Footer from existing components
- PageHero, SectionHeader, JunoButton, WaveDecoration from existing components
- images from '../data/images'
- PartyPopper, UtensilsCrossed, Waves from 'lucide-react'
- useEffect from 'react'

Do NOT create new components, do NOT introduce new CSS classes, do NOT use hardcoded hex values anywhere.