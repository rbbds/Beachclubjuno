import { X, Calendar, Clock, MapPin, Euro } from 'lucide-react';
import { WaveDecoration } from './WaveDecoration';
import { BaseDrawer } from './BaseDrawer';

export interface EventData {
  id: number;
  date: string;
  title: string;
  category: string;
  image: string;
  fullDate: string;
  time: string;
  doors: string;
  price: string;
  description: string;
  artist: {
    name: string;
    photo: string;
    bio: string;
  };
  ticket_url?: string;
}

interface EventDrawerProps {
  event: EventData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function EventDrawer({ event, isOpen, onClose }: EventDrawerProps) {
  if (!event) return null;

  return (
    <BaseDrawer isOpen={isOpen} onClose={onClose}>
      <div className="font-body">
        {/* Event Photo */}
        <div className="relative w-full h-64">
          <img 
            src={event.image}
            alt={event.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background text-primary flex items-center justify-center hover:bg-background/90 transition-all cursor-pointer"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Category & Date */}
          <div className={`mb-4 ${isOpen ? 'drawer-content-1' : ''}`}>
            <span className="inline-block bg-secondary text-background px-3 py-1 rounded-full text-sm font-medium mb-2">
              {event.category}
            </span>
            <p className="text-primary/70 text-sm">
              {event.fullDate} • {event.time}
            </p>
          </div>

          {/* Title */}
          <h2 
            className={`text-primary mb-4 tracking-wide font-display ${isOpen ? 'drawer-content-2' : ''}`}
            style={{ 
              fontSize: '2.5rem',
              lineHeight: '1.1'
            }}
          >
            {event.title}
          </h2>

          {/* Wave Divider */}
          <WaveDecoration variant="special" className={`w-20 h-3 mb-6 ${isOpen ? 'drawer-content-3' : ''}`} />

          {/* Description */}
          <p className={`text-primary leading-relaxed mb-8 ${isOpen ? 'drawer-content-4' : ''}`}>
            {event.description}
          </p>

          {/* Artist Info */}
          <div className={`bg-white p-6 rounded-xl mb-6 ${isOpen ? 'drawer-content-5' : ''}`}>
            <div className="flex gap-4 items-start">
              <img 
                src={event.artist.photo}
                alt={event.artist.name}
                loading="lazy"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 
                  className="text-primary mb-2 tracking-wide font-display"
                  style={{ 
                    fontSize: '1.25rem'
                  }}
                >
                  {event.artist.name}
                </h3>
                <p className="text-primary text-sm leading-relaxed">
                  {event.artist.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Info Row */}
          <div className={`grid grid-cols-2 gap-4 mb-6 ${isOpen ? 'drawer-content-6' : ''}`}>
            <div className="flex items-center gap-2 text-primary">
              <Calendar className="w-4 h-4 text-accent" />
              <div>
                <p className="text-xs text-primary/70">Datum</p>
                <p className="text-sm font-medium">{event.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Clock className="w-4 h-4 text-accent" />
              <div>
                <p className="text-xs text-primary/70">Aanvang deuren</p>
                <p className="text-sm font-medium">{event.doors}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="w-4 h-4 text-accent" />
              <div>
                <p className="text-xs text-primary/70">Locatie</p>
                <p className="text-sm font-medium">Juno Kijkduin</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Euro className="w-4 h-4 text-accent" />
              <div>
                <p className="text-xs text-primary/70">Prijs p.p.</p>
                <p className="text-sm font-medium">{event.price}</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={`border-t border-secondary my-6 ${isOpen ? 'drawer-content-6' : ''}`} />

          {/* Buttons */}
          <div className={`space-y-3 ${isOpen ? 'drawer-content-7' : ''}`}>
            {event.ticket_url && (
              <a
                href={event.ticket_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-accent text-background py-4 rounded-lg hover:bg-accent/85 transition-colors font-medium text-center"
              >
                Koop tickets
              </a>
            )}
          </div>
        </div>
      </div>
    </BaseDrawer>
  );
}