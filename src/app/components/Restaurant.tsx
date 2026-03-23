import { WaveDecoration } from './WaveDecoration'
import { SectionWaveTop } from './SectionWaveTop'

const MENU_PDF_URL = '#'

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=900&q=80', alt: 'Verse zeevruchten bij Juno' },
  { id: 2, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Sfeer restaurant Juno' },
  { id: 3, src: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=500&q=80', alt: 'Wijnkaart en details' },
  { id: 4, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80', alt: 'Seizoensgerechten Juno' },
]

const photoStyles = [
  { width: '62%', height: '68%', top: 0, left: 0, transform: 'rotate(-1.5deg)', zIndex: 2, hoverTransform: 'rotate(-0.5deg) scale(1.04) translateY(-6px)' },
  { width: '42%', height: '58%', top: '12%', right: 0, transform: 'rotate(1.2deg)', zIndex: 3, hoverTransform: 'rotate(2.2deg) scale(1.05) translateY(-8px)', boxShadow: '0 8px 32px rgba(61,113,131,0.10)' },
  { width: '34%', height: '30%', bottom: 0, left: '4%', transform: 'rotate(2deg)', zIndex: 4, hoverTransform: 'rotate(3.5deg) scale(1.06) translateY(-6px)', boxShadow: '0 6px 20px rgba(61,113,131,0.12)' },
  { width: '38%', height: '32%', bottom: '2%', left: '32%', transform: 'rotate(-1deg)', zIndex: 5, hoverTransform: 'rotate(-2.5deg) scale(1.05) translateY(-8px)', boxShadow: '0 8px 24px rgba(61,113,131,0.10)' },
]

export function Restaurant() {
  return (
    <section id="restaurant" className="relative py-20 px-6 bg-terracotta-soft font-body overflow-hidden">
      <SectionWaveTop fillColor="#faf0ea" />

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* ── FOTO BLOK ── */}
        <div>

          {/* MOBIEL: 2x2 grid met hover */}
          <div className="grid grid-cols-2 gap-2 md:hidden">
            {photos.map(photo => (
              <div key={photo.id} className="overflow-hidden rounded-xl">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full aspect-square object-cover transition-transform duration-500 ease-out hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* DESKTOP: speelse collage met hover per foto */}
          <div className="relative h-[540px] hidden md:block">
            {photos.map((photo, i) => {
              const s = photoStyles[i]
              return (
                <img
                  key={photo.id}
                  src={photo.src}
                  alt={photo.alt}
                  className="absolute object-cover rounded-xl cursor-pointer"
                  style={{
                    width: s.width,
                    height: s.height,
                    top: s.top,
                    bottom: s.bottom,
                    left: s.left,
                    right: s.right,
                    zIndex: s.zIndex,
                    boxShadow: s.boxShadow,
                    transform: s.transform,
                    transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease, z-index 0s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.transform = s.hoverTransform
                    el.style.boxShadow = '0 20px 48px rgba(61,113,131,0.22)'
                    el.style.zIndex = '10'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.transform = s.transform
                    el.style.boxShadow = s.boxShadow ?? ''
                    el.style.zIndex = String(s.zIndex)
                  }}
                />
              )
            })}

            {/* Decoratieve stempel */}
            <div
              className="absolute bg-accent rounded-full z-[20] flex items-center justify-center"
              style={{ width: 88, height: 88, top: '56%', right: '2%', transform: 'rotate(12deg)' }}
            >
              <span className="text-background text-center leading-tight tracking-wide font-display" style={{ fontSize: 13 }}>
                VERS &<br />LOKAAL
              </span>
            </div>
          </div>
        </div>

        {/* ── TEKST BLOK ── */}
        <div>

          <h2
            className="text-primary font-display uppercase leading-none mb-0 w-full"
            style={{ fontSize: 'clamp(52px, 6vw, 80px)' }}
          >
            Restaurant
          </h2>

          <WaveDecoration variant="special" className="w-24 h-3 mt-4 mb-6" />

          <p className="text-primary text-lg leading-relaxed mb-8 w-full">
            Onze keuken combineert verse lokale ingrediënten met internationale
            invloeden. Geniet van seizoensgebonden gerechten, verse vis uit de
            Noordzee en een zorgvuldig samengestelde wijnkaart.
          </p>

          <div className="flex gap-3 mb-8">
            <div className="flex-1 bg-white/70 rounded-xl px-4 py-3">
              <span className="block font-display text-accent tracking-widest text-xs uppercase mb-1">Open</span>
              <span className="block text-primary font-body text-sm font-semibold">Dagelijks</span>
            </div>
            <div className="flex-1 bg-white/70 rounded-xl px-4 py-3">
              <span className="block font-display text-accent tracking-widest text-xs uppercase mb-1">Keuken</span>
              <span className="block text-primary font-body text-sm font-semibold">12:00 – 22:00</span>
            </div>
            <div className="flex-1 bg-white/70 rounded-xl px-4 py-3">
              <span className="block font-display text-accent tracking-widest text-xs uppercase mb-1">Reserveren</span>
              <span className="block text-primary font-body text-sm font-semibold">Aanbevolen</span>
            </div>
          </div>

          <a
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