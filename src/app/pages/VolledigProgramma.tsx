import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { WaveDecoration } from '../components/WaveDecoration';
import { SectionWaveTop } from '../components/SectionWaveTop';
import { EventDrawer, EventData } from '../components/EventDrawer';
import { PageHero } from '../components/PageHero';
import { JunoButton } from '../components/JunoButton';
import { Calendar, Clock } from 'lucide-react';
import { allEvents } from '../data/events';
import { scrollToSection } from '../utils/scroll';
import { images } from '../data/images';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { setPageMeta } from '../utils/seo';

const categories = ['Alles', 'Comedy', 'Theater', 'Live Muziek', 'Jazz', 'Pop & Dans', 'Speciaal'];

export function VolledigProgramma() {
  const [selectedCategory, setSelectedCategory] = useState('Alles');
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setPageMeta(
      'Programma | Beachclub Juno Kijkduin',
      'Ontdek het culturele programma van Beachclub Juno. Comedy, theater, jazz en pop aan de Noordzee in Kijkduin, Den Haag. Tickets en informatie per evenement.'
    );
    return () => { document.title = 'Beachclub Juno — Zon. Strand. Cultuur. | Kijkduin'; };
  }, []);

  const scrollRef = useScrollReveal();

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
    <div className="min-h-screen bg-background" ref={scrollRef}>
      <Navigation />

      {/* Photo Hero */}
      <PageHero
        image={images.programma.jazz.event}
        title="VOLLEDIG PROGRAMMA"
        subtitle="Van comedyavond tot jazzsessie — altijd iets te beleven bij Juno"
      />

      {/* Filter Pills & Event Grid */}
      <section className="pt-12 pb-20 px-6 bg-sage-soft">
        <SectionWaveTop fillColor="#f0f5f3" />
        <div className="max-w-[1200px] mx-auto">
          
          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-accent text-background'
                    : 'bg-background border-2 border-primary text-primary hover:border-accent hover:text-accent'
                }`}
                style={{ fontWeight: 500, fontSize: '14px' }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Event grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div 
                key={event.id}
                onClick={() => handleEventClick(event)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1 reveal-stagger"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-background px-4 py-1.5 rounded-full"
                    style={{ fontWeight: 700, fontSize: '14px' }}
                  >
                    {event.date}
                  </div>
                </div>
                
                <div className="p-5">
                  <span className="inline-block bg-secondary text-background px-3 py-1 rounded-full text-xs font-medium mb-2">
                    {event.category}
                  </span>
                  
                  <h3 
                    className="text-primary mb-2 tracking-wide font-display"
                    style={{ 
                      fontSize: '1.5rem',
                      lineHeight: '1.2'
                    }}
                  >
                    {event.title}
                  </h3>
                  
                  <p className="text-primary text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-primary text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
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
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <JunoButton variant="outline-dark">
              Laad meer evenementen
            </JunoButton>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6 bg-primary">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 
            className="text-background mb-4 tracking-wider font-display"
            style={{ 
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              lineHeight: '1'
            }}
          >
            EEN EVENEMENT ORGANISEREN<br />BIJ JUNO?
          </h2>
          
          <WaveDecoration variant="inverted" className="w-32 h-4 mx-auto mb-8" />
          
          <button 
            className="inline-block bg-accent text-background px-8 py-4 text-lg rounded-lg hover:bg-accent/85 transition-colors cursor-pointer"
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