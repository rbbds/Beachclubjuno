import { useEffect, useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { WaveDecoration } from '../components/WaveDecoration';
import { WaveTransition } from '../components/WaveTransition';
import { JunoLogo } from '../components/JunoLogo';
import { setPageMeta } from '../utils/seo';
import { sanityClient } from '../../lib/sanity';

interface Dish {
  name: string;
  price: string;
  description?: string;
  isFavorite?: boolean;
  isVegan?: boolean;
}

interface MenuCategory {
  title: string;
  timeLabel?: string;
  dishes: Dish[];
}

const staticEten: MenuCategory[] = [
  {
    title: 'OM TE DELEN',
    timeLabel: 'all day',
    dishes: [
      { name: 'Juno Plank', price: '€35', description: 'Brood, aïoli, olijven, amandelen, manchego en parmaham. Optie vega: €29,5' },
      { name: 'Albondigas', price: '€14', description: 'Spaanse gehaktballetjes in rijke tomatensaus. Vega mogelijk.' },
      { name: 'Chips, Parmaham & Pepers', price: '€12', description: 'Knapperig, zout en precies goed bij je eerste drankje.' },
    ],
  },
  {
    title: "BOCADILLO'S",
    timeLabel: '11.00 – 16.00',
    dishes: [
      { name: 'Parma & Manchego', price: '€11', description: 'Parmaham, manchego, rucola en olijfolie op vers brood.' },
      { name: 'Manchego', price: '€10', description: 'Manchego met honing en olijfolie. Vega.', isVegan: true },
    ],
  },
  {
    title: 'SALADES',
    timeLabel: '11.00 – 21.00',
    dishes: [
      { name: 'Watermeloen & Chorizo', price: '€14', description: 'Veldsla, feta kaas, frisse watermeloen en krakante chorizo. Vega zonder chorizo: €12', isFavorite: true },
      { name: 'Caesar Salad', price: '€14', description: 'Klassieke Caesar, knapperige croutons, parmezaan en romige dressing.' },
    ],
  },
  {
    title: 'PIZZA',
    timeLabel: '12.00 – 21.00',
    dishes: [
      { name: 'Margherita', price: '€14', description: 'Tomaat, mozzarella en basilicum.' },
      { name: 'Spicy Salami', price: '€18', description: 'Pittige salami, mozzarella en chili-olie. Doet het altijd goed.', isFavorite: true },
      { name: 'Quattro Formaggi', price: '€18', description: 'Mozzarella, gorgonzola, pecorino en taleggio.' },
      { name: 'Napoli', price: '€16', description: 'Ansjovis, kappertjes, olijven en tomatensaus.' },
      { name: 'Bambino', price: '€11', description: 'Kleine Margherita voor kids.' },
    ],
  },
  {
    title: 'PASTA',
    timeLabel: '12.00 – 21.00',
    dishes: [
      { name: 'Alla Norma', price: '€18', description: 'Tomaat, gegrilde aubergine, ricotta en basilicum.' },
      { name: 'Kids Meatballs', price: '€9', description: 'Pasta met tomatensaus en zachte balletjes.' },
    ],
  },
  {
    title: 'DESSERT',
    dishes: [
      { name: 'Tiramisu', price: '€9', description: 'Klassiek, romig en altijd goed.', isFavorite: true },
      { name: 'Affogato', price: '€8', description: 'Vanille-ijs met warme espresso.' },
    ],
  },
];

const staticBites: MenuCategory[] = [
  {
    title: 'BITES',
    timeLabel: 'van 12.00',
    dishes: [
      { name: 'Borrelbrood', price: '€8,9' },
      { name: 'Haagsche Bitterballen', price: '€10' },
      { name: 'Cas&Kas Veganballen', price: '€11', isVegan: true },
      { name: 'Crispy Chicken', price: '€16,3' },
      { name: 'Kaasstengels', price: '€9,5' },
      { name: 'Mozzarella Sticks', price: '€4,7' },
      { name: 'Frites Vegan Rendang', price: '€8,4', isVegan: true },
    ],
  },
  {
    title: 'JUNO SPECIALS',
    dishes: [
      { name: 'JUNO Plateau', price: '€35' },
      { name: 'JUNO VEGA Plateau', price: '€29,5', isVegan: true },
    ],
  },
  {
    title: 'COCKTAILS',
    dishes: [
      { name: 'Tropical Caipi Mule', price: '€11,6' },
      { name: 'Pornstar Martini', price: '€13,1' },
      { name: 'Juno Spritz', price: '€9,5' },
      { name: 'Aperol Spritz', price: '€10,5' },
    ],
  },
  {
    title: 'DRANKEN',
    dishes: [
      { name: 'Sangria (glas)', price: '€9' },
      { name: 'Sangria (kar)', price: '€29,50' },
      { name: 'Raspberry Barrel', price: '€4,7' },
      { name: 'The Lemon Elderflower', price: '€4,7' },
      { name: 'Ginger Lemongrass', price: '€4,7' },
      { name: 'Juno Fresh Ice Tea', price: '€4,7' },
      { name: 'Smooth Pasqua', price: '€7,9' },
      { name: 'Smooth Berry', price: '€7,9' },
      { name: 'Koffie', price: '€3,7' },
      { name: 'Espresso', price: '€3,7' },
      { name: 'Cappuccino', price: '€4,0' },
      { name: 'Flat White', price: '€4,2' },
      { name: 'Latte Macchiato', price: '€4,2' },
      { name: 'Cortado', price: '€4,0' },
      { name: 'Special Coffees', price: '€10,0' },
      { name: 'Chai Latte', price: '€4,2' },
      { name: 'Thee', price: '€3,4' },
      { name: 'Verse Muntthee', price: '€4,0' },
      { name: 'Warme Choco', price: '€4,0' },
      { name: 'Ice Latte', price: '€5,8' },
      { name: 'Babycino', price: '€1,6' },
    ],
  },
  {
    title: 'BIEREN & WIJNEN',
    dishes: [
      { name: 'Estaminet (25cl/40cl)', price: '€4,3 / €6,3' },
      { name: 'Juno Tropical Ale', price: '€6,8' },
      { name: 'Weihenstephaner (25cl/40cl)', price: '€6,3 / €8,3' },
      { name: 'Urige Blond', price: '€6,8' },
      { name: 'Urige Bird of Prey', price: '€6,8' },
      { name: 'Huiswijn wit: Macabeo', price: '€6' },
      { name: 'Pinot Grigio', price: '€7' },
      { name: 'Chardonnay', price: '€7,9' },
      { name: 'Huiswijn rosé', price: '€6' },
      { name: 'Huiswijn rood: Merlot', price: '€6' },
      { name: 'Sol', price: '€6,3' },
      { name: 'Desperados', price: '€6,3' },
      { name: 'La Trappe Blond', price: '€6,3' },
      { name: 'La Trappe Tripel', price: '€6,8' },
      { name: 'Urige Juicy Lucy', price: '€7,6' },
      { name: 'Amstel Rodler', price: '€5,3' },
      { name: 'Estaminet 0.0', price: '€4,2' },
    ],
  },
];

const staticFooterText = 'JUNO staat voor een nieuw begin en voor het vieren van het leven. Van intieme diners tot volle dansvloeren en bruiloften op het strand.';
const staticFooterTag = 'If you know, JUNO.';

function WaveSvg() {
  return (
    <svg width="64" height="10" viewBox="0 0 64 10" fill="none" className="block my-3">
      <path d="M0 5 Q8 0 16 5 Q24 10 32 5 Q40 0 48 5 Q56 10 64 5" stroke="#3d7183" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function WaveSvgAccent() {
  return (
    <svg width="64" height="10" viewBox="0 0 64 10" fill="none" className="block my-3">
      <path d="M0 5 Q8 0 16 5 Q24 10 32 5 Q40 0 48 5 Q56 10 64 5" stroke="#cc6435" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function CategoryBlock({ cat }: { cat: MenuCategory }) {
  return (
    <div className="mb-8 break-inside-avoid">
      <div className="flex items-baseline gap-3 mb-1">
        <h3 className="font-display text-accent tracking-wide" style={{ fontSize: '1.75rem' }}>
          {cat.title}
        </h3>
        {cat.timeLabel && (
          <span className="text-xs text-secondary font-body">{cat.timeLabel}</span>
        )}
      </div>
      <WaveSvg />
      <div className="space-y-3">
        {cat.dishes.map((dish, i) => (
          <div key={i} className="border-b border-primary/10 pb-3 last:border-0">
            <div className="flex justify-between items-baseline gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-body font-semibold text-primary text-base">{dish.name}</span>
                {dish.isFavorite && (
                  <span className="text-[10px] font-semibold bg-accent text-background px-2 py-0.5 rounded uppercase tracking-wide">
                    Favoriet
                  </span>
                )}
                {dish.isVegan && (
                  <span className="text-[10px] font-semibold bg-sage text-background px-2 py-0.5 rounded uppercase tracking-wide">
                    Vegan
                  </span>
                )}
              </div>
              <span className="font-body font-semibold text-primary text-base whitespace-nowrap">{dish.price}</span>
            </div>
            {dish.description && (
              <p className="text-sm text-primary/60 mt-1 leading-relaxed">{dish.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Menu() {
  const [activeTab, setActiveTab] = useState<'eten' | 'drinken'>('eten');
  const [etenCategories, setEtenCategories] = useState<MenuCategory[]>(staticEten);
  const [bitesCategories, setBitesCategories] = useState<MenuCategory[]>(staticBites);
  const [footerText, setFooterText] = useState(staticFooterText);
  const [footerTag, setFooterTag] = useState(staticFooterTag);

  useEffect(() => {
    setPageMeta(
      'Menukaart | Beachclub Juno Kijkduin',
      'Bekijk de menukaart van Beachclub Juno in Kijkduin. Verse gerechten, pizza, pasta, cocktails en meer — direct aan het strand van Den Haag.'
    );
    return () => { document.title = 'Beachclub Juno — Zon. Strand. Cultuur. | Kijkduin'; };
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "menuPage"][0]`)
      .then(data => {
        if (!data) return;
        if (data.etenCategories?.length) setEtenCategories(data.etenCategories);
        if (data.bitesCategories?.length) setBitesCategories(data.bitesCategories);
        if (data.footerText) setFooterText(data.footerText);
        if (data.footerTag) setFooterTag(data.footerTag);
      })
      .catch(() => {});
  }, []);

  const activeCategories = activeTab === 'eten' ? etenCategories : bitesCategories;

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />

      {/* HERO */}
      <section className="relative bg-primary pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="relative z-10 max-w-xl mx-auto">
          <JunoLogo variant="inverted" className="h-12 mx-auto mb-6" />
          <h1
            className="font-display text-background uppercase tracking-wide"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1 }}
          >
            Menukaart
          </h1>
          <WaveDecoration variant="inverted" className="w-20 h-3 mx-auto mt-4 mb-0" />
        </div>
        <WaveTransition fillColor="#f6f4db" />
      </section>

      {/* TAB NAV */}
      <div className="sticky top-0 z-40 bg-background border-b border-primary/10 px-6 py-3">
        <div className="max-w-3xl mx-auto flex gap-3">
          {(['eten', 'drinken'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-display tracking-wide text-base uppercase px-6 py-3 rounded-lg transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-accent text-background'
                  : 'text-primary border border-primary/30 hover:border-accent hover:text-accent'
              }`}
            >
              {tab === 'eten' ? 'Menukaart' : 'Bites & Dranken'}
            </button>
          ))}
        </div>
      </div>

      {/* MENU CONTENT */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div
            key={activeTab}
            className="menu-columns"
            style={{ animation: 'fadeIn 0.3s ease' }}
          >
            {activeCategories.map((cat, i) => (
              <CategoryBlock key={i} cat={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* JUNO TIP */}
      <section className="px-6 pb-16 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="bg-terracotta-soft rounded-xl p-6 border-l-4 border-accent">
            <div className="font-display text-accent tracking-wide mb-2" style={{ fontSize: '1.25rem' }}>
              JUNO TIP
            </div>
            <WaveSvgAccent />
            <p className="text-primary text-sm leading-relaxed">
              Probeer onze Juno Tropical Ale of één van onze heerlijke homemade lemonades.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <section className="relative bg-primary py-16 px-6 text-center overflow-hidden">
        <div className="max-w-xl mx-auto relative z-10">
          <p className="text-background/80 text-base leading-relaxed mb-4">{footerText}</p>
          <WaveDecoration variant="inverted" className="w-20 h-3 mx-auto mb-4" />
          <p className="font-display text-accent tracking-widest uppercase" style={{ fontSize: '1.25rem' }}>
            {footerTag}
          </p>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .menu-columns {
          columns: 1;
          column-gap: 3rem;
        }
        @media (min-width: 640px) {
          .menu-columns {
            columns: 2;
          }
        }
      `}</style>
    </div>
  );
}
