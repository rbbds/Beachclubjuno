import { WaveDecoration } from './WaveDecoration';
import { Calendar } from 'lucide-react';
import { useState } from 'react';
import { EventDrawer, EventData } from './EventDrawer';
import { Link } from 'react-router';

const events: EventData[] = [
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
    category: 'Live Muziek',
    image: 'https://images.unsplash.com/photo-1768935434604-2301398d92d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwbGl2ZSUyMG11c2ljJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzczODM2ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDate: 'Zaterdag 22 april 2026',
    time: '21:00',
    doors: '20:00',
    price: '€27,50',
    description: 'Het Amsterdam Trio brengt een mix van klassieke jazz standards en moderne composities. Met hun unieke sound en virtuoze spel toveren ze een intieme sfeer die perfect past bij de zee. Een avond voor echte jazzliefhebbers en nieuwsgierigen.',
    artist: {
      name: 'The Amsterdam Trio',
      photo: 'https://images.unsplash.com/photo-1768935434604-2301398d92d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwbGl2ZSUyMG11c2ljJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzczODM2ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Gerenommeerd jazztrio uit Amsterdam. Winnaar van de Dutch Jazz Competition 2024 en vaste gast op het North Sea Jazz Festival.',
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
    description: 'Een poëtische voorstelling over de kracht van herinneringen en de zee als metafoor voor het leven. Zout & Zilver combineert theater, live muziek en projecties tot een meeslepende belevenis die je niet snel vergeet.',
    artist: {
      name: 'Theatergroep De Kust',
      photo: 'https://images.unsplash.com/photo-1761229660731-891484da5c35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBkcmFtYXRpY3xlbnwxfHx8fDE3NzM4MzgxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Experimenteel theatergezelschap gespecialiseerd in voorstellingen op bijzondere locaties. Eerder genomineerd voor de Zilveren Krekel.',
    },
  },
];

export function Programma() {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleEventClick = (event: EventData) => {
    setSelectedEvent(event);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  return (
    <>
      <section id="programma" className="relative py-20 px-6 bg-[#E6E8D4]" style={{ fontFamily: 'Museo, sans-serif' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <WaveDecoration className="w-24 h-4 text-[#cc6435] mx-auto mb-4" />
            <h2 
              className="text-[#3d7183] mb-4 tracking-wide"
              style={{ 
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                lineHeight: '1'
              }}
            >
              CULTUREEL PROGRAMMA
            </h2>
            <p className="text-[#3d7183] text-lg max-w-2xl mx-auto">
              Van intieme jazz tot hilarische comedy — ontdek ons gevarieerde aanbod
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event) => (
              <div 
                key={event.id}
                onClick={() => handleEventClick(event)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#cc6435] text-[#f6f4db] px-4 py-2 rounded-lg flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span style={{ fontFamily: 'Bebas Neue, sans-serif' }} className="tracking-wide">
                      {event.date}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="inline-block bg-[#9fbaae] text-[#f6f4db] px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {event.category}
                  </div>
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
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/programma"
              className="inline-block bg-[#3d7183] text-[#f6f4db] px-8 py-3 rounded-lg hover:bg-[#2d5563] transition-colors"
            >
              Bekijk volledig programma
            </Link>
          </div>
        </div>
      </section>

      <EventDrawer 
        event={selectedEvent}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </>
  );
}