import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { WaveDecoration } from '../components/WaveDecoration';
import { EventDrawer, EventData } from '../components/EventDrawer';
import { Calendar, Clock } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

const allEvents: EventData[] = [
  {
    id: 1,
    date: '15 APR',
    title: 'Comedy Night met Emma Wortelboer',
    category: 'Comedy',
    image: 'https://images.unsplash.com/photo-1762537132884-cc6bbde0667a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBwZXJmb3JtZXIlMjBzdGFnZSUyMHNob3d8ZW58MXx8fHwxNzczODM4MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDate: 'Zaterdag 15 april 2026',
    time: '20:30',
    doors: '19:30',
    price: '€32,50',
    description: 'Emma Wortelboer neemt je mee in een hilarische avond vol herkenbare verhalen over het dagelijks leven. Van awkward dates tot familiedramas — niemand blijft gespaard. Verwacht scherpe observaties, onverwachte wendingen en een avond vol lachen.',
    artist: {
      name: 'Emma Wortelboer',
      photo: 'https://images.unsplash.com/photo-1762537132884-cc6bbde0667a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBwZXJmb3JtZXIlMjBzdGFnZSUyMHNob3d8ZW58MXx8fHwxNzczODM4MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Stand-up comedian en cabaretier. Bekend van haar shows op Comedy Central en vele optredens in theaters door heel Nederland.',
    },
  },
  {
    id: 2,
    date: '22 APR',
    title: 'Jazz aan Zee — The Amsterdam Trio',
    category: 'Jazz',
    image: 'https://images.unsplash.com/photo-1768935434604-2301398d92d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwbGl2ZSUyMG11c2ljJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzczODM2ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDate: 'Zaterdag 22 april 2026',
    time: '21:00',
    doors: '20:00',
    price: '€27,50',
    description: 'Het Amsterdam Trio brengt een mix van klassieke jazz standards en moderne composities. Met hun unieke sound en virtuoze spel toveren ze een intieme sfeer die perfect past bij de zee.',
    artist: {
      name: 'The Amsterdam Trio',
      photo: 'https://images.unsplash.com/photo-1768935434604-2301398d92d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwbGl2ZSUyMG11c2ljJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzczODM2ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Gerenommeerd jazztrio uit Amsterdam. Winnaar van de Dutch Jazz Competition 2024.',
    },
  },
  {
    id: 3,
    date: '29 APR',
    title: 'Theatervoorstelling: Zout & Zilver',
    category: 'Theater',
    image: 'https://images.unsplash.com/photo-1761229660731-891484da5c35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBkcmFtYXRpY3xlbnwxfHx8fDE3NzM4MzgxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDate: 'Zaterdag 29 april 2026',
    time: '20:00',
    doors: '19:30',
    price: '€35,00',
    description: 'Een poëtische voorstelling over de kracht van herinneringen en de zee als metafoor voor het leven. Zout & Zilver combineert theater, live muziek en projecties tot een meeslepende belevenis.',
    artist: {
      name: 'Theatergroep De Kust',
      photo: 'https://images.unsplash.com/photo-1761229660731-891484da5c35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBkcmFtYXRpY3xlbnwxfHx8fDE3NzM4MzgxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Experimenteel theatergezelschap gespecialiseerd in voorstellingen op bijzondere locaties.',
    },
  },
  {
    id: 4,
    date: '6 MEI',
    title: 'Stand-up Avond: De Beste van Nederland',
    category: 'Comedy',
    image: 'https://images.unsplash.com/photo-1762537132884-cc6bbde0667a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBwZXJmb3JtZXIlMjBzdGFnZSUyMHNob3d8ZW58MXx8fHwxNzczODM4MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDate: 'Dinsdag 6 mei 2026',
    time: '20:30',
    doors: '19:30',
    price: '€29,50',
    description: 'Een avond met drie veelbelovende Nederlandse stand-up comedians die je laten zien waarom comedy in Nederland bloeit. Verwacht scherpe observaties en actuele humor.',
    artist: {
      name: 'Various Artists',
      photo: 'https://images.unsplash.com/photo-1762537132884-cc6bbde0667a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBwZXJmb3JtZXIlMjBzdGFnZSUyMHNob3d8ZW58MXx8fHwxNzczODM4MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Een line-up van de beste nieuwe talenten uit de Nederlandse comedyscene.',
    },
  },
  {
    id: 5,
    date: '13 MEI',
    title: 'Drama: Tussen Eb en Vloed',
    category: 'Theater',
    image: 'https://images.unsplash.com/photo-1761229660731-891484da5c35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBkcmFtYXRpY3xlbnwxfHx8fDE3NzM4MzgxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDate: 'Dinsdag 13 mei 2026',
    time: '20:00',
    doors: '19:30',
    price: '€32,00',
    description: 'Een ontroerend verhaal over familie, loyaliteit en de keuzes die we maken. Gespeeld door een getalenteerd ensemble in een intieme setting.',
    artist: {
      name: 'Theatergroep Noord',
      photo: 'https://images.unsplash.com/photo-1761229660731-891484da5c35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBkcmFtYXRpY3xlbnwxfHx8fDE3NzM4MzgxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Bekroond theatergezelschap uit Noord-Holland.',
    },
  },
  {
    id: 6,
    date: '20 MEI',
    title: 'Latin Jazz Night',
    category: 'Jazz',
    image: 'https://images.unsplash.com/photo-1768935434604-2301398d92d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwbGl2ZSUyMG11c2ljJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzczODM2ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDate: 'Dinsdag 20 mei 2026',
    time: '21:00',
    doors: '20:00',
    price: '€28,00',
    description: 'Vurige Latin jazz vol passie en ritme. Laat je meevoeren door de klanken van Cuba en Brazilië met dit gepassioneerde kwartet.',
    artist: {
      name: 'Caliente Quartet',
      photo: 'https://images.unsplash.com/photo-1768935434604-2301398d92d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwbGl2ZSUyMG11c2ljJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzczODM2ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Internationaal befaamd Latin jazz ensemble.',
    },
  },
  {
    id: 7,
    date: '27 MEI',
    title: 'Pop & Soul Avond',
    category: 'Pop & Dans',
    image: 'https://images.unsplash.com/photo-1594182878737-c3e6be99669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3AlMjBjb25jZXJ0JTIwZGFuY2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NzM4MzgxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDate: 'Dinsdag 27 mei 2026',
    time: '21:30',
    doors: '20:30',
    price: '€25,00',
    description: 'Een avond vol uptempo pop en soul classics. Perfect om te dansen of gewoon te genieten van de muziek met een drankje in de hand.',
    artist: {
      name: 'The Soul Collective',
      photo: 'https://images.unsplash.com/photo-1594182878737-c3e6be99669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3AlMjBjb25jZXJ0JTIwZGFuY2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NzM4MzgxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Een energieke band die soul, pop en R&B combineert tot een feest.',
    },
  },
  {
    id: 8,
    date: '3 JUN',
    title: 'Improvisatie Comedy Battle',
    category: 'Comedy',
    image: 'https://images.unsplash.com/photo-1762537132884-cc6bbde0667a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBwZXJmb3JtZXIlMjBzdGFnZSUyMHNob3d8ZW58MXx8fHwxNzczODM4MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDate: 'Woensdag 3 juni 2026',
    time: '20:30',
    doors: '19:30',
    price: '€24,00',
    description: 'Twee teams improviseren op basis van suggesties uit het publiek. Geen script, geen vangnet — alleen pure creativiteit en hilariteit. Elke show is uniek!',
    artist: {
      name: 'Improv Collective',
      photo: 'https://images.unsplash.com/photo-1762537132884-cc6bbde0667a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBwZXJmb3JtZXIlMjBzdGFnZSUyMHNob3d8ZW58MXx8fHwxNzczODM4MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Nederlands beste improvisatietheater met meer dan 10 jaar ervaring.',
    },
  },
  {
    id: 9,
    date: '10 JUN',
    title: 'Zomerfestival Opening Night',
    category: 'Speciaal',
    image: 'https://images.unsplash.com/photo-1761229661411-7bdfab62e05f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsJTIwY3VsdHVyYWwlMjBldmVudCUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MzgzODEyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDate: 'Woensdag 10 juni 2026',
    time: '19:00',
    doors: '18:00',
    price: '€45,00',
    description: 'De opening van ons zomerfestival! Een hele avond vol live muziek, theater, kunst en culinaire verrassingen. Inclusief welkomstdrankje en bites.',
    artist: {
      name: 'Various Artists',
      photo: 'https://images.unsplash.com/photo-1761229661411-7bdfab62e05f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsJTIwY3VsdHVyYWwlMjBldmVudCUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MzgzODEyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Een samenwerking van verschillende artiesten en performers.',
    },
  },
];

const categories = ['Alles', 'Comedy', 'Theater', 'Live Muziek', 'Jazz', 'Pop & Dans', 'Speciaal'];

export function VolledigProgramma() {
  const [selectedCategory, setSelectedCategory] = useState('Alles');
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filteredEvents = selectedCategory === 'Alles' 
    ? allEvents 
    : allEvents.filter(event => event.category === selectedCategory);

  const handleEventClick = (event: EventData) => {
    setSelectedEvent(event);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  return (
    <div className="min-h-screen bg-[#f6f4db]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6" style={{ fontFamily: 'Museo, sans-serif' }}>
        <div className="max-w-[1200px] mx-auto text-center">
          <WaveDecoration className="w-24 h-4 text-[#cc6435] mx-auto mb-6" />
          <h1 
            className="text-[#3d7183] mb-4 tracking-wider"
            style={{ 
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              lineHeight: '1'
            }}
          >
            VOLLEDIG PROGRAMMA
          </h1>
          <p className="text-[#3d7183] text-xl max-w-3xl mx-auto">
            Van comedyavond tot jazzsessie — altijd iets te beleven bij Juno
          </p>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="pb-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-[#cc6435] text-[#f6f4db]'
                    : 'bg-[#f6f4db] border-2 border-[#3d7183] text-[#3d7183] hover:border-[#cc6435] hover:text-[#cc6435]'
                }`}
                style={{ fontFamily: 'Museo, sans-serif', fontWeight: 500, fontSize: '14px' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Event Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div 
                key={event.id}
                onClick={() => handleEventClick(event)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#cc6435] text-[#f6f4db] px-4 py-1.5 rounded-full"
                    style={{ fontFamily: 'Museo, sans-serif', fontWeight: 700, fontSize: '14px' }}
                  >
                    {event.date}
                  </div>
                </div>
                
                <div className="p-5">
                  <span className="inline-block bg-[#9fbaae] text-[#f6f4db] px-3 py-1 rounded-full text-xs font-medium mb-2"
                    style={{ fontFamily: 'Museo, sans-serif' }}
                  >
                    {event.category}
                  </span>
                  
                  <h3 
                    className="text-[#3d7183] mb-2 tracking-wide"
                    style={{ 
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '1.5rem',
                      lineHeight: '1.2'
                    }}
                  >
                    {event.title}
                  </h3>
                  
                  <p className="text-[#3d7183] text-sm mb-4 line-clamp-2" style={{ fontFamily: 'Museo, sans-serif' }}>
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#3d7183] text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
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
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="border-2 border-[#3d7183] text-[#3d7183] px-8 py-3 rounded-lg hover:bg-[#3d7183] hover:text-[#f6f4db] transition-colors"
              style={{ fontFamily: 'Museo, sans-serif' }}
            >
              Laad meer evenementen
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6 bg-[#3d7183]">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 
            className="text-[#f6f4db] mb-4 tracking-wider"
            style={{ 
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              lineHeight: '1'
            }}
          >
            EEN EVENEMENT ORGANISEREN<br />BIJ JUNO?
          </h2>
          
          <WaveDecoration className="w-32 h-5 text-[#9fbaae] mx-auto mb-8" />
          
          <Link 
            to="/#events"
            className="inline-block bg-[#cc6435] text-[#f6f4db] px-8 py-4 text-lg rounded-lg hover:bg-[#b55730] transition-colors"
            style={{ fontFamily: 'Museo, sans-serif' }}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/#events';
            }}
          >
            Bekijk Events & Verhuur
          </Link>
        </div>
      </section>

      <Footer />

      <EventDrawer 
        event={selectedEvent}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </div>
  );
}