import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { WaveDecoration } from '../components/WaveDecoration';
import { EventDrawer, EventData } from '../components/EventDrawer';
import { Calendar, Clock } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { allEvents } from '../data/events';
import { scrollToSection } from '../utils/scroll';

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

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f6f4db]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6" style={{ fontFamily: 'Museo, sans-serif' }}>
        <div className="max-w-[1200px] mx-auto text-center">
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
          <WaveDecoration variant="special" className="w-24 h-6 mx-auto mt-3 mb-4" />
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
          
          <WaveDecoration variant="inverted" className="w-32 h-6 mx-auto mb-8" />
          
          <button 
            className="inline-block bg-[#cc6435] text-[#f6f4db] px-8 py-4 text-lg rounded-lg hover:bg-[#b55730] transition-colors"
            style={{ fontFamily: 'Museo, sans-serif' }}
            onClick={() => {
              navigate('/');
              setTimeout(() => scrollToSection('events'), 100);
            }}
          >
            Bekijk Events & Verhuur
          </button>
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