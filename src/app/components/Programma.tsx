import { WaveDecoration } from './WaveDecoration';
import { Calendar } from 'lucide-react';
import { useState } from 'react';
import { EventDrawer, EventData } from './EventDrawer';
import { Link } from 'react-router';
import { featuredEvents } from '../data/events';

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
      <section id="programma" className="relative py-20 px-6 bg-[#9fbaae]" style={{ fontFamily: 'Museo, sans-serif' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <WaveDecoration variant="inverted" className="w-24 h-4 mx-auto mb-4" />
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
            {featuredEvents.map((event) => (
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