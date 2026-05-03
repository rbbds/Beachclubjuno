import { useState, useEffect } from 'react';
import { WaveDecoration } from './WaveDecoration';
import { SectionHeader } from './SectionHeader';
import { SectionWaveTop } from './SectionWaveTop';
import { WaveTransition } from './WaveTransition';
import { BaseDrawer } from './BaseDrawer';
import { X } from 'lucide-react';
import { images } from '../data/images';
import { getWatersportActivities, urlFor } from '../../lib/queries';
import { sanityClient } from '../../lib/sanity';

interface WatersportActivity {
  id: string;
  title: string;
  cardTitle: string;
  image: string;
  description: string;
  extraLine?: string;
  buttonText: string;
  buttonLink: string;
}

const staticActivities: WatersportActivity[] = [
  {
    id: 'kiten',
    title: 'KITE SURFEN',
    cardTitle: 'Kiten',
    image: images.watersport.kiten,
    description: 'Net als Juno is onze kitesurfschool voor iedereen en alle leeftijden. Met trots en plezier leren wij jou kitesurfen. Kiteboardschool.nl is een begrip in de kitesurfwereld en naast een van de beste vlak water kitesurflocaties van Nederland, de Zandmotor, hebben wij nu een Beachclub met alle faciliteiten die je maar kan wensen! Onze instructeurs zijn IKO gecertificeerd en echte professionals.',
    extraLine: 'Onze kitesurflessen worden verzorgd door Kiteboardschool.nl',
    buttonText: 'DIRECT BOEKEN',
    buttonLink: 'https://kiteboardschool.nl'
  },
  {
    id: 'surfen',
    title: 'SURFEN',
    cardTitle: 'Surfen',
    image: images.watersport.surfen,
    description: 'Er is niks zoals je eerste keer surfen op een golf. Jou leren surfen zodat je die eerste golf kan pakken is dus ook het beste gevoel voor onze surf pro\'s. Alle surf instructeurs zijn ISA en lifeguard gecertificeerd zodat je bij onze spot in Kijkduin veilig kan leren surfen. Ervaar de unieke fun van het surfen terwijl je begeleiding krijgt van mensen die oog hebben voor al je sterktes en zwaktes.',
    extraLine: 'Surflessen worden verzorgd door onze eigen Juno Boardriders.',
    buttonText: 'LEES MEER EN BOEK',
    buttonLink: 'https://kiteboardschool.nl'
  },
  {
    id: 'wingfoilen',
    title: 'WINGFOILEN',
    cardTitle: 'Wingfoilen',
    image: images.watersport.wingfoilen,
    description: 'Een van de snelst groeiende watersporten in Nederland! Onze kitesurfschool geeft nu ook Wingfoil lessen. Met ervaren instructeurs leer je alle tips en trucs om deze opwindende sport onder de knie te krijgen. Vanaf dag één sta je al op het board, een unieke ervaring vergeleken met traditioneel kitesurfen.',
    extraLine: 'Onze Wingfoil lessen worden verzorgd door Kiteboardschool.nl',
    buttonText: 'DIRECT BOEKEN',
    buttonLink: 'https://kiteboardschool.nl'
  },
  {
    id: 'suppen',
    title: 'SUPPEN',
    cardTitle: 'SUPpen',
    image: images.watersport.suppen,
    description: 'Van alle watersporten in de wereld is SUPpen (Stand Up Paddle boarding) één van de snelst groeiende. Het gave aan SUPpen is dat ook sportief en minder sportief, beginner en gevorderde, en ook zowel jong als oud er de tijd van zijn leven er mee kan ervaren. SUPpen is gegarandeerd plezier!',
    buttonText: 'LEES MEER EN BOEK',
    buttonLink: 'https://kiteboardschool.nl'
  },
  {
    id: 'kids',
    title: 'KIDS & CAMPS',
    cardTitle: 'Kids & Camps',
    image: images.watersport.kids,
    description: 'Juno is een nieuwe Beachclub, maar wij hebben gecombineerd al ruim 40 jaar ervaring in het geven van watersportlessen en kamps. Wij hebben een te gek kitesurf kamp wat wij samen organiseren met Kiteboardschool.nl en een surfcamp wat wij samen organiseren met SurfBlend. Onze instructeurs hebben een speciale opleiding doorlopen om kids op een veilige, maar vooral ook leuke manier te leren surfen. De week wordt traditiegetrouw afgesloten met een bbq waarbij de ouders ook welkom zijn.',
    buttonText: 'LEES MEER EN BOEK',
    buttonLink: 'https://kiteboardschool.nl'
  }
];

export function Watersport() {
  const [selectedActivity, setSelectedActivity] = useState<WatersportActivity | null>(null);
  const [activities, setActivities] = useState(staticActivities);
  const [sectionTitle, setSectionTitle] = useState('WATERSPORT');
  const [sectionSubtitle, setSectionSubtitle] = useState('Bij Juno kun je het strand beleven zoals het bedoeld is — actief, vrij en op het water. In samenwerking met Kiteboardschool.nl.');

  useEffect(() => {
    getWatersportActivities()
      .then(data => {
        if (!data?.length) return;
        setActivities(data.map(a => ({
          id: a._id,
          title: a.title,
          cardTitle: a.cardTitle || a.title,
          image: a.image?._type === 'image'
            ? urlFor(a.image).width(800).url()
            : '',
          description: a.description,
          extraLine: a.extraLine,
          buttonText: a.buttonText,
          buttonLink: a.buttonLink,
        })));
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "homePage"][0]{ watersport }`)
      .then(data => {
        if (data?.watersport?.title) setSectionTitle(data.watersport.title);
        if (data?.watersport?.subtitle) setSectionSubtitle(data.watersport.subtitle);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <section id="watersport" className="relative py-20 px-6 pb-32 bg-navy-soft font-body">
        <SectionWaveTop fillColor="#e8f0f3" />
        
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            title={sectionTitle}
            subtitle={sectionSubtitle}
            waveVariant="special"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {activities.map((activity) => (
              <div 
                key={activity.id}
                onClick={() => setSelectedActivity(activity)}
                className="group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <img 
                    src={activity.image}
                    alt={activity.cardTitle}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 
                  className="text-primary mb-2 tracking-wide font-display"
                  style={{ 
                    fontSize: '24px',
                    lineHeight: '1.2'
                  }}
                >
                  {activity.cardTitle}
                </h3>
                <div className="inline-flex items-center text-accent group-hover:text-accent/85 transition-all py-2">
                  <span 
                    className="group-hover:underline"
                    style={{ fontWeight: 700, fontSize: '16px' }}
                  >
                    Meer info
                  </span>
                  <span className="ml-1 group-hover:translate-x-1 transition-transform" style={{ fontSize: '16px' }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave transition to Footer */}
        <WaveTransition fillColor="#faf0ea" />
      </section>

      {/* Drawer */}
      {selectedActivity && (
        <BaseDrawer isOpen={!!selectedActivity} onClose={() => setSelectedActivity(null)}>
          <div className="font-body">
            {/* Activity Photo */}
            <div className="relative w-full aspect-video">
              <img 
                src={selectedActivity.image}
                alt={selectedActivity.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              
              {/* Close button */}
              <button 
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background text-primary flex items-center justify-center hover:bg-background/90 transition-all cursor-pointer"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Title */}
              <h2 
                className={`text-primary mb-6 tracking-wide font-display ${selectedActivity ? 'drawer-content-2' : ''}`}
                style={{ 
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  lineHeight: '1'
                }}
              >
                {selectedActivity.title}
              </h2>

              {/* Wave divider */}
              <WaveDecoration variant="special" className={`w-20 h-3 mb-6 ${selectedActivity ? 'drawer-content-3' : ''}`} />

              {/* Description */}
              <p className={`text-primary text-lg leading-relaxed mb-4 ${selectedActivity ? 'drawer-content-4' : ''}`}>
                {selectedActivity.description}
              </p>

              {/* Extra line if exists */}
              {selectedActivity.extraLine && (
                <p className={`text-primary text-lg leading-relaxed mb-6 ${selectedActivity ? 'drawer-content-5' : ''}`}>
                  {selectedActivity.extraLine}
                </p>
              )}

              {/* Button */}
              <a 
                href={selectedActivity.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full bg-accent text-background text-center px-8 py-4 rounded-lg hover:bg-accent/85 transition-colors font-display ${selectedActivity ? 'drawer-content-7' : ''}`}
                style={{ 
                  fontSize: '18px',
                  letterSpacing: '0.05em'
                }}
              >
                {selectedActivity.buttonText}
              </a>
            </div>
          </div>
        </BaseDrawer>
      )}
    </>
  );
}