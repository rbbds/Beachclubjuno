Feature: drawer openen bij "Meer informatie" knoppen op Bedrijfsfeesten en ParticuliereEvents pagina's
Voeg een informatiedrawer toe aan de event cards op beide pagina's. Gebruik het bestaande BaseDrawer component exact zoals het gebruikt wordt in Watersport.tsx — zelfde structuur, zelfde animaties, zelfde sluitknop patroon.

STAP 1 — Data definiëren
Voeg in beide pagina's een drawerInfo array toe met details per card. Elke card krijgt een bijbehorend object met: title, image, description, bullets (de bestaande checkmarks), en cta (label + actie).
Bedrijfsfeesten drawerInfo:
[
  {
    title: "BEDRIJFSFESTIVAL",
    image: images.bedrijfsfeesten.hero,
    description: "Een volledig verzorgde dag voor jouw team, relaties of klanten — direct aan het strand van Kijkduin. Wij regelen alles van A tot Z, zodat jij én je gasten kunnen genieten.",
    bullets: ["Exclusief gebruik van locatie", "Combinatie van activiteiten naar keuze", "Catering en drankenpakketten op maat", "20 – 300 personen"],
    cta: "Offerte aanvragen"
  },
  {
    title: "VERGADEREN AAN ZEE",
    image: images.bedrijfsfeesten.team,
    description: "Vergaderen met de Noordzee als inspiratiebron. Onze vergaderruimte is volledig uitgerust met AV-faciliteiten en biedt een verfrissende omgeving buiten het kantoor.",
    bullets: ["Halve of hele dag arrangementen", "Afsluitbare ruimte met beamer, scherm en microfoon", "Verzorgde lunch inbegrepen", "15 – 100 personen"],
    cta: "Offerte aanvragen"
  },
  {
    title: "TEAMUITJE",
    image: images.watersport.kiten,
    description: "Geef je team een onvergetelijke dag met watersport, een privé stranddeel en een verzorgde BBQ of diner. In samenwerking met Kiteboardschool.nl.",
    bullets: ["Privé strand met eigen bar", "Kiten, surfen, SUP of wingfoilen", "Combineer met diner of borrel", "15 – 200 personen"],
    cta: "Offerte aanvragen"
  }
]
ParticuliereEvents drawerInfo:
[
  {
    title: "STRANDFEEST",
    image: images.events.bruiloften,
    description: "Vier jouw verjaardag, jubileum of familiefeest op een unieke locatie direct aan het strand. Wij zorgen voor de perfecte sfeer, catering en een privé stranddeel.",
    bullets: ["Exclusief stranddeel & privé bar", "Catering en drankenpakketten op maat", "DJ of live muziek mogelijk", "20 – 300 personen"],
    cta: "Offerte aanvragen"
  },
  {
    title: "DINER & BORREL",
    image: images.restaurant.main,
    description: "Een lunch, borrel of diner met jouw groep in een sfeervolle setting aan het strand. Formeel of informeel — wij passen het aan jouw wensen aan.",
    bullets: ["Lunch, borrel of diner", "Formeel of informeel", "Menusamenstelling op maat", "15 – 200 personen"],
    cta: "Offerte aanvragen"
  },
  {
    title: "ACTIEVE DAG",
    image: images.watersport.surfen,
    description: "Combineer een actieve dag op het water met een heerlijk diner of borrel achteraf. In samenwerking met Kiteboardschool.nl voor kiten, surfen, SUP en meer.",
    bullets: ["Kiten, surfen of SUP via Kiteboardschool.nl", "Begeleiding door gecertificeerde instructeurs", "Combineer met diner of borrel", "10 – 100 personen"],
    cta: "Offerte aanvragen"
  }
]

STAP 2 — State toevoegen
Voeg bovenaan de component toe:
tsxconst [selectedCard, setSelectedCard] = useState<typeof drawerInfo[0] | null>(null);

STAP 3 — BaseDrawer toevoegen
Importeer BaseDrawer en WaveDecoration bovenaan het bestand. Voeg onderaan de return, vóór de sluitende </div>, de drawer toe — exact dezelfde structuur als in Watersport.tsx:
tsx{selectedCard && (
  <BaseDrawer isOpen={!!selectedCard} onClose={() => setSelectedCard(null)}>
    <div className="font-body">
      {/* Photo */}
      <div className="relative w-full aspect-video">
        <img
          src={selectedCard.image}
          alt={selectedCard.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setSelectedCard(null)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background text-primary flex items-center justify-center hover:bg-background/90 transition-all"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-8">
        <h2 className="text-primary mb-4 tracking-wide font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1' }}>
          {selectedCard.title}
        </h2>
        <WaveDecoration variant="special" className="w-20 h-3 mb-6" />
        <p className="text-primary text-lg leading-relaxed mb-6">
          {selectedCard.description}
        </p>
        <ul className="space-y-3 mb-8">
          {selectedCard.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 items-start text-primary">
              <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <button className="w-full bg-accent text-background py-4 rounded-lg hover:bg-accent/85 transition-colors font-display tracking-wide" style={{ fontSize: '18px' }}>
          {selectedCard.cta}
        </button>
      </div>
    </div>
  </BaseDrawer>
)}

STAP 4 — "Meer informatie" knop koppelen
Op elke card, zoek de bestaande "Meer informatie" JunoButton en vervang die door een button met onClick:
tsx<button
  onClick={() => setSelectedCard(drawerInfo[index])}
  className="border-2 border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-background transition-colors font-body text-base"
>
  Meer informatie
</button>
Gebruik de index van de .map() loop om het juiste drawerInfo object te selecteren.

Imports toevoegen aan beide bestanden:
tsximport { useState } from 'react';
import { BaseDrawer } from '../components/BaseDrawer';
import { WaveDecoration } from '../components/WaveDecoration';
import { X } from 'lucide-react';
Do not change anything else — geen andere styling, data of logica.