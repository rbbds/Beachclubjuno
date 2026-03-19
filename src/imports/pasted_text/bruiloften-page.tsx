Completely rewrite src/app/pages/Bruiloften.tsx with a richer structure.
Route stays /bruiloften.

---

SECTION 1 — SPLIT HERO (no PageHero component — custom layout)
- min-h-screen grid md:grid-cols-2 font-body
- Left column: bg-background flex flex-col justify-center px-12 py-32 md:py-0
  - Small label (font-display, text-accent, text-xl, tracking-wide, mb-4): "VIER DE LIEFDE"
  - h1 (font-display, text-primary, clamp(3rem, 6vw, 5rem), lineHeight 1, mb-6): "TROUWEN OP HET STRAND"
  - WaveDecoration variant="special" className="w-24 h-3 mb-6"
  - p (text-primary, text-lg, leading-relaxed, mb-6): "Een zonovergoten dag, de Noordzee als getuige en een locatie die ademt. Bij Juno in Kijkduin wordt jouw bruiloft een dag om nooit te vergeten."
  - ul (space-y-3 mb-8): 4 list items, each with flex gap-3 items-start, text-primary text-lg:
    ✓ Officiële trouwlocatie aan het strand
    ✓ Persoonlijke weddingcoördinator
    ✓ Catering en open bar op maat
    ✓ 20 tot 200 personen
  - Two buttons (flex gap-4):
    <JunoButton variant="primary" size="lg">Vraag een offerte aan</JunoButton>
    <JunoButton variant="outline-dark" size="lg">Download brochure</JunoButton>
- Right column: relative overflow-hidden h-[50vh] md:h-auto
  - img: images.bruiloften.hero, absolute inset-0 w-full h-full object-cover

SECTION 2 — HOE WIJ HET REGELEN
- py-20 px-6 font-body bg-secondary/10
- max-w-[1200px] mx-auto
- SectionHeader title="HOE WIJ HET REGELEN" subtitle="Van eerste kennismaking tot laatste dans — wij ontzorgen jullie volledig" waveVariant="special"
- grid md:grid-cols-3 gap-8 mt-4
- 3 cards using the SAME card markup as Bedrijfsfeesten.tsx section 2, without image:

  <div className="bg-background p-8 rounded-xl border-2 border-secondary/30 hover:border-secondary transition-all hover:shadow-lg text-left">
    <Icon className="w-10 h-10 text-primary mb-4" />
    <h3 className="text-primary mb-3 tracking-wide font-display" style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>{title}</h3>
    <p className="text-primary leading-relaxed">{description}</p>
  </div>

Cards data (import Heart, Users, Sparkles from lucide-react):
  1. icon: Heart, title: "PERSOONLIJKE BEGELEIDING", description: "Jouw eigen weddingcoördinator begeleidt jullie van de eerste kennismaking tot de laatste dans. Altijd bereikbaar, altijd betrokken."
  2. icon: Users, title: "CATERING OP MAAT", description: "Van welkomstdrankjes tot het dessert — onze chef creëert een culinaire ervaring die past bij jullie smaak en budget."
  3. icon: Sparkles, title: "DE PERFECTE SETTING", description: "Strandceremonie, overdekt diner of een mix — we passen de locatie volledig aan jullie wensen aan."

SECTION 3 — EVENT MANAGER CONTACT
Use new <EventManagerContact> component (from Prompt 1):
- name="Sarah"
- role="Wedding Coördinator bij Juno"
- photo: images.bruiloften.intro
- phone="+31624734660"
- email="info@clubjuno.nl"
- intro: "Ik ben Sarah, Wedding Coördinator bij Juno. Ik luister naar jullie verhaal en zorg ervoor dat jullie dag precies wordt zoals jullie het gedroomd hebben."

SECTION 4 — SFEER FOTO STRIP
- Full width relative overflow-hidden h-[450px]
- img: images.bruiloften.hero, absolute inset-0 w-full h-full object-cover
- Overlay: absolute inset-0 bg-primary/30
- Centered text:
  - font-display text-background clamp(2.5rem, 6vw, 4.5rem): "DE NOORDZEE ALS GETUIGE"
  - WaveDecoration variant="inverted" className="w-24 h-3 mx-auto mt-4"

SECTION 5 — MOMENTEN (horizontal scroll cards)
- py-20 px-6 font-body bg-background
- SectionHeader title="VAN CEREMONIE TOT FEEST" subtitle="Elk moment van jullie dag, zorgvuldig verzorgd" waveVariant="special"
- Horizontal scroll container (mt-8 -mx-6 px-6):
  className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
  style={{ scrollbarWidth: 'none' }}
- 5 scroll cards (each: flex-shrink-0 w-72 snap-start):

  <div className="flex-shrink-0 w-72 snap-start">
    <div className="relative h-96 rounded-xl overflow-hidden mb-4">
      <img src={...} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-background font-display tracking-wide" style={{ fontSize: '1.5rem' }}>{title}</h3>
        <p className="text-background/80 text-sm mt-1">{subtitle}</p>
      </div>
    </div>
  </div>

Scroll cards data:
  1. image: images.bruiloften.hero, title: "DE CEREMONIE", subtitle: "Jullie ja-woord aan de vloedlijn"
  2. image: images.bruiloften.sfeer[0], title: "WELKOMSTDRANKJE", subtitle: "Proostend met uitzicht op zee"
  3. image: images.bruiloften.sfeer[1], title: "HET DINER", subtitle: "Culinair genieten met jullie gasten"
  4. image: images.bruiloften.sfeer[2], title: "DE EERSTE DANS", subtitle: "Met golven als decor"
  5. image: images.bruiloften.sfeer[3], title: "HET FEEST", subtitle: "Tot laat dansen aan het strand"

SECTION 6 — FAQ
Use new <EventFaqSection> component (from Prompt 1):
- image: images.bruiloften.intro
- imageAlt: "Bruiloft bij Beachclub Juno Kijkduin"
- items:
[
  { question: "Is Juno een officiële trouwlocatie?", answer: "Ja, Juno is een erkende trouwlocatie. Jullie kunnen hier officieel in het huwelijk treden, met de Noordzee als decor." },
  { question: "Hoeveel gasten kunnen we uitnodigen?", answer: "We ontvangen bruiloften van 20 tot 200 personen. Zowel intieme ceremonies als grote feesten zijn mogelijk." },
  { question: "Wanneer is Juno beschikbaar voor bruiloften?", answer: "We organiseren bruiloften het hele jaar door. Het hoogseizoen (mei t/m september) is snel volgeboekt — reserveer op tijd." },
  { question: "Kunnen we ook buiten trouwen?", answer: "Absoluut. Een strandceremonie aan de vloedlijn is een van onze mooiste opties. We hebben ook overdekte alternatieven voor onzeker weer." },
  { question: "Wat is er inbegrepen in een bruiloftarrangement?", answer: "Elk arrangement is maatwerk. Basisarrangementen bevatten locatiehuur, catering en een persoonlijke coördinator. Neem contact op voor een offerte op maat." }
]

SECTION 7 — EVENT MANAGER CONTACT (second, bottom)
Same <EventManagerContact> component as Section 3, bgColor="sage"

---

IMPORTS needed:
Navigation, Footer (existing)
SectionHeader, JunoButton, WaveDecoration (existing)
EventManagerContact, EventFaqSection (new from Prompt 1)
Heart, Users, Sparkles from 'lucide-react'
images from '../data/images'
useEffect from 'react'

DESIGN RULES:
- Never use hardcoded hex values
- font-body on section wrappers only
- No custom CSS
- No inline drawer logic