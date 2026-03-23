import { WaveDecoration } from './WaveDecoration'
import { SectionWaveTop } from './SectionWaveTop'

const MENU_PDF_URL = '#'

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?w=900&q=80', alt: 'Verse zeevruchten bij Juno' },
  { id: 2, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Sfeer restaurant Juno' },
  { id: 3, src: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=500&q=80', alt: 'Wijnkaart en details' },
  { id: 4, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80', alt: 'Seizoensgerechten Juno' },
]

export function Restaurant() {
  return (
    <section id="restaurant" className="relative py-20 px-6 bg-terracotta-soft font-body overflow-hidden">
      <SectionWaveTop fillColor="#faf0ea" />

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* ── FOTO BLOK ── */}
        <div>

          {/* MOBIEL: simpele 2x2 grid */}
          <div className="grid grid-cols-2 gap-2 md:hidden">
            {photos.map(photo => (
              <img
                key={photo.id}
                src={photo.src}
                alt={photo.alt}
                className="w-full aspect-square object-cover rounded-xl"
              />
            ))}
          </div>

          {/* DESKTOP: speelse collage met absolute positionering */}
          <div className="relative h-[540px] hidden md:block">

            <img
              src={photos[0].src}
              alt={photos[0].alt}
              className="absolute object-cover rounded-xl z-[2]"
              style={{ width: '62%', height: '68%', top: 0, left: 0, transform: 'rotate(-1.5deg)' }}
            />

            <img
              src={photos[1].src}
              alt={photos[1].alt}
              className="absolute object-cover rounded-xl z-[3]"
              style={{ width: '42%', height: '58%', top: '12%', right: 0, transform: 'rotate(1.2deg)', boxShadow: '0 8px 32px rgba(61,113,131,0.10)' }}
            />

            <img
              src={photos[2].src}
              alt={photos[2].alt}
              className="absolute object-cover rounded-xl z-[4]"
              style={{ width: '34%', height: '30%', bottom: 0, left: '4%', transform: 'rotate(2deg)', boxShadow: '0 6px 20px rgba(61,113,131,0.12)' }}
            />

            <img
              src={photos[3].src}
              alt={photos[3].alt}
              className="absolute object-cover rounded-xl z-[5]"
              style={{ width: '38%', height: '32%', bottom: '2%', left: '32%', transform: 'rotate(-1deg)', boxShadow: '0 8px 24px rgba(61,113,131,0.10)' }}
            />

            {/* Decoratieve stempel */}
            <div
              className="absolute bg-accent rounded-full z-[6] flex items-center justify-center"
              style={{ width: 88, height: 88, top: '56%', right: '2%', transform: 'rotate(12deg)' }}
            >
              <span className="text-background text-center leading-tight tracking-wide font-display" style={{ fontSize: 13 }}>
                VERS &<br />LOKAAL
              </span>
            </div>

          </div>
        </div>

        {/* ── TEKST BLOK ── */}
        <div className="md:pl-4">

          <p className="text-accent font-display tracking-widest text-sm uppercase mb-3">
            Kijkduin · Den Haag
          </p>

          <h2
            className="text-primary font-display uppercase leading-none mb-0"
            style={{ fontSize: 'clamp(52px, 6vw, 80px)' }}
          >
            Restau<br />rant
          </h2>

          <WaveDecoration variant="special" className="w-24 h-3 mt-4 mb-6" />

          <p className="text-primary text-lg leading-relaxed mb-5 max-w-[400px]">
            Onze keuken combineert verse lokale ingrediënten met internationale
            invloeden. Geniet van seizoensgebonden gerechten, verse vis uit de
            Noordzee en een zorgvuldig samengestelde wijnkaart.
          </p>

          <div className="flex gap-6 mb-8">
            <div>
              <span className="block font-display text-secondary tracking-widest text-xs uppercase">Open</span>
              <span className="block text-primary text-sm mt-1">Dagelijks</span>
            </div>
            <div>
              <span className="block font-display text-secondary tracking-widest text-xs uppercase">Keuken</span>
              <span className="block text-primary text-sm mt-1">12:00 – 22:00</span>
            </div>
            <div>
              <span className="block font-display text-secondary tracking-widest text-xs uppercase">Reserveren</span>
              <span className="block text-primary text-sm mt-1">Aanbevolen</span>
            </div>
          </div>

          <div className="w-12 h-px bg-secondary mb-8" />

          
            href={MENU_PDF_URL}
            className={`inline-flex items-center gap-3 bg-accent text-background px-7 py-3.5 rounded-lg hover:bg-accent/85 transition-colors font-body font-semibold text-base ${MENU_PDF_URL === '#' ? 'pointer-events-none opacity-50' : ''}`}
          >
            Bekijk de kaart →
          </a>
        </div>

      </div>
    </section>
  )
}