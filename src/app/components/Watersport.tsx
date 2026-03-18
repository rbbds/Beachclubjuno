import { useState } from 'react';
import { WaveDecoration } from './WaveDecoration';
import { WaveTransition } from './WaveTransition';
import { X } from 'lucide-react';

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

const activities: WatersportActivity[] = [
  {
    id: 'kiten',
    title: 'KITE SURFEN',
    cardTitle: 'Kiten',
    image: 'https://images.unsplash.com/photo-1684082750351-26e3fa5afc89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRlc3VyZmluZyUyMGFjdGlvbiUyMG9jZWFufGVufDF8fHx8MTc3Mzg0MjYwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Net als Juno is onze kitesurfschool voor iedereen en alle leeftijden. Met trots en plezier leren wij jou kitesurfen. Kiteboardschool.nl is een begrip in de kitesurfwereld en naast een van de beste vlak water kitesurflocaties van Nederland, de Zandmotor, hebben wij nu een Beachclub met alle faciliteiten die je maar kan wensen! Onze instructeurs zijn IKO gecertificeerd en echte professionals.',
    extraLine: 'Onze kitesurflessen worden verzorgd door Kiteboardschool.nl',
    buttonText: 'DIRECT BOEKEN',
    buttonLink: 'https://kiteboardschool.nl'
  },
  {
    id: 'surfen',
    title: 'SURFEN',
    cardTitle: 'Surfen',
    image: 'https://images.unsplash.com/photo-1664860792203-80345685f214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJmZXIlMjB3b29kZW4lMjBmZW5jZSUyMGJlYWNoJTIwYm9hcmR8ZW58MXx8fHwxNzczODQyNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Er is niks zoals je eerste keer surfen op een golf. Jou leren surfen zodat je die eerste golf kan pakken is dus ook het beste gevoel voor onze surf pro\'s. Alle surf instructeurs zijn ISA en lifeguard gecertificeerd zodat je bij onze spot in Kijkduin veilig kan leren surfen. Ervaar de unieke fun van het surfen terwijl je begeleiding krijgt van mensen die oog hebben voor al je sterktes en zwaktes.',
    extraLine: 'Surflessen worden verzorgd door onze eigen Juno Boardriders.',
    buttonText: 'LEES MEER EN BOEK',
    buttonLink: 'https://kiteboardschool.nl'
  },
  {
    id: 'wingfoilen',
    title: 'WINGFOILEN',
    cardTitle: 'Wingfoilen',
    image: 'https://images.unsplash.com/photo-1666175497804-e28c2d800ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5nZm9pbCUyMHdhdGVyJTIwc3BvcnR8ZW58MXx8fHwxNzczODQyNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Een van de snelst groeiende watersporten in Nederland! Onze kitesurfschool geeft nu ook Wingfoil lessen. Met ervaren instructeurs leer je alle tips en trucs om deze opwindende sport onder de knie te krijgen. Vanaf dag één sta je al op het board, een unieke ervaring vergeleken met traditioneel kitesurfen.',
    extraLine: 'Onze Wingfoil lessen worden verzorgd door Kiteboardschool.nl',
    buttonText: 'DIRECT BOEKEN',
    buttonLink: 'https://kiteboardschool.nl'
  },
  {
    id: 'suppen',
    title: 'SUPPEN',
    cardTitle: 'SUPpen',
    image: 'https://images.unsplash.com/photo-1758672707216-9b7f14c8d766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBTVVAlMjBwYWRkbGVib2FyZCUyMHR1cnF1b2lzZXxlbnwxfHx8fDE3NzM4NDI2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Van alle watersporten in de wereld is SUPpen (Stand Up Paddle boarding) één van de snelst groeiende. Het gave aan SUPpen is dat ook sportief en minder sportief, beginner en gevorderde, en ook zowel jong als oud er de tijd van zijn leven er mee kan ervaren. SUPpen is gegarandeerd plezier!',
    buttonText: 'LEES MEER EN BOEK',
    buttonLink: 'https://kiteboardschool.nl'
  },
  {
    id: 'kids',
    title: 'KIDS & CAMPS',
    cardTitle: 'Kids & Camps',
    image: 'https://images.unsplash.com/photo-1640860044746-0c3efdf859f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJmJTIwaW5zdHJ1Y3RvciUyMGtpZHMlMjBiZWFjaHxlbnwxfHx8fDE3NzM4NDI2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Juno is een nieuwe Beachclub, maar wij hebben gecombineerd al ruim 40 jaar ervaring in het geven van watersportlessen en kamps. Wij hebben een te gek kitesurf kamp wat wij samen organiseren met Kiteboardschool.nl en een surfcamp wat wij samen organiseren met SurfBlend. Onze instructeurs hebben een speciale opleiding doorlopen om kids op een veilige, maar vooral ook leuke manier te leren surfen. De week wordt traditiegetrouw afgesloten met een bbq waarbij de ouders ook welkom zijn.',
    buttonText: 'LEES MEER EN BOEK',
    buttonLink: 'https://kiteboardschool.nl'
  }
];

export function Watersport() {
  const [selectedActivity, setSelectedActivity] = useState<WatersportActivity | null>(null);

  return (
    <>
      <section id="watersport" className="relative py-20 px-6 bg-[#f6f4db]" style={{ fontFamily: 'Museo, sans-serif' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <WaveDecoration className="w-24 h-4 text-[#cc6435] mx-auto mb-4" />
            <h2 
              className="text-[#3d7183] mb-4 tracking-wide"
              style={{ 
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                lineHeight: '1'
              }}
            >
              WATERSPORT AAN ZEE
            </h2>
            <p className="text-[#3d7183] text-lg max-w-3xl mx-auto">
              Bij Juno kun je het strand beleven zoals het bedoeld is — actief, vrij en op het water. In samenwerking met Kiteboardschool.nl.
            </p>
          </div>

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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 
                  className="text-[#3d7183] mb-2 tracking-wide"
                  style={{ 
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: '24px',
                    lineHeight: '1.2'
                  }}
                >
                  {activity.cardTitle}
                </h3>
                <div className="inline-flex items-center text-[#cc6435] group-hover:text-[#b55730] transition-all py-2">
                  <span 
                    className="group-hover:underline"
                    style={{ fontFamily: 'Museo, sans-serif', fontWeight: 700, fontSize: '16px' }}
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
        <WaveTransition fillColor="#f6f4db" />
      </section>

      {/* Drawer */}
      {selectedActivity && (
        <>
          {/* Overlay */}
          <div 
            className={`fixed inset-0 bg-[#3d7183]/50 z-[100] transition-opacity ${
              selectedActivity ? 'opacity-100 duration-300' : 'opacity-0 duration-250'
            }`}
            style={{ 
              transitionTimingFunction: selectedActivity ? 'ease-out' : 'ease-in'
            }}
            onClick={() => setSelectedActivity(null)}
          />
          
          {/* Drawer */}
          <div className={`fixed top-0 right-0 h-full w-full md:w-[500px] md:max-w-[33%] bg-[#f6f4db] z-[101] drawer-scroll ${
            selectedActivity ? 'drawer-open' : 'drawer-close'
          }`}>
            {/* Activity Photo */}
            <div className="relative w-full aspect-video">
              <img 
                src={selectedActivity.image}
                alt={selectedActivity.title}
                className="w-full h-full object-cover"
              />
              
              {/* Close button */}
              <button 
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#f6f4db] text-[#3d7183] flex items-center justify-center hover:bg-[#f6f4db]/90 transition-all"
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
                className={`text-[#3d7183] mb-6 tracking-wide ${selectedActivity ? 'drawer-content-2' : ''}`}
                style={{ 
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  lineHeight: '1'
                }}
              >
                {selectedActivity.title}
              </h2>

              {/* Wave divider */}
              <WaveDecoration className={`w-24 h-4 text-[#cc6435] mb-6 ${selectedActivity ? 'drawer-content-3' : ''}`} />

              {/* Description */}
              <p className={`text-[#3d7183] text-lg leading-relaxed mb-4 ${selectedActivity ? 'drawer-content-4' : ''}`}>
                {selectedActivity.description}
              </p>

              {/* Extra line if exists */}
              {selectedActivity.extraLine && (
                <p className={`text-[#3d7183] text-lg leading-relaxed mb-6 ${selectedActivity ? 'drawer-content-5' : ''}`}>
                  {selectedActivity.extraLine}
                </p>
              )}

              {/* Button */}
              <a 
                href={selectedActivity.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full bg-[#cc6435] text-[#f6f4db] text-center px-8 py-4 rounded-lg hover:bg-[#b55730] transition-colors ${selectedActivity ? 'drawer-content-7' : ''}`}
                style={{ 
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '18px',
                  letterSpacing: '0.05em'
                }}
              >
                {selectedActivity.buttonText}
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}