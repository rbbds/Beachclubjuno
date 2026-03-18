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
      <div style={{ fontFamily: 'Museo, sans-serif' }}>
        {/* Event Photo */}
        <div className="relative w-full h-64">
          <img 
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#f6f4db] text-[#3d7183] flex items-center justify-center hover:bg-[#f6f4db]/90 transition-all"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Category & Date */}
          <div className={`mb-4 ${isOpen ? 'drawer-content-1' : ''}`}>
            <span className="inline-block bg-[#9fbaae] text-[#f6f4db] px-3 py-1 rounded-full text-sm font-medium mb-2">
              {event.category}
            </span>
            <p className="text-[#3d7183]/70 text-sm">
              {event.fullDate} • {event.time}
            </p>
          </div>

          {/* Title */}
          <h2 
            className={`text-[#3d7183] mb-4 tracking-wide ${isOpen ? 'drawer-content-2' : ''}`}
            style={{ 
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '2.5rem',
              lineHeight: '1.1'
            }}
          >
            {event.title}
          </h2>

          {/* Wave Divider */}
          <WaveDecoration variant="special" className={`w-20 h-3 mb-6 ${isOpen ? 'drawer-content-3' : ''}`} />

          {/* Description */}
          <p className={`text-[#3d7183] leading-relaxed mb-8 ${isOpen ? 'drawer-content-4' : ''}`}>
            {event.description}
          </p>

          {/* Artist Info */}
          <div className={`bg-white p-6 rounded-xl mb-6 ${isOpen ? 'drawer-content-5' : ''}`}>
            <div className="flex gap-4 items-start">
              <img 
                src={event.artist.photo}
                alt={event.artist.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 
                  className="text-[#3d7183] mb-2 tracking-wide"
                  style={{ 
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: '1.25rem'
                  }}
                >
                  {event.artist.name}
                </h3>
                <p className="text-[#3d7183] text-sm leading-relaxed">
                  {event.artist.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Info Row */}
          <div className={`grid grid-cols-2 gap-4 mb-6 ${isOpen ? 'drawer-content-6' : ''}`}>
            <div className="flex items-center gap-2 text-[#3d7183]">
              <Calendar className="w-4 h-4 text-[#cc6435]" />
              <div>
                <p className="text-xs text-[#3d7183]/70">Datum</p>
                <p className="text-sm font-medium">{event.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#3d7183]">
              <Clock className="w-4 h-4 text-[#cc6435]" />
              <div>
                <p className="text-xs text-[#3d7183]/70">Aanvang deuren</p>
                <p className="text-sm font-medium">{event.doors}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#3d7183]">
              <MapPin className="w-4 h-4 text-[#cc6435]" />
              <div>
                <p className="text-xs text-[#3d7183]/70">Locatie</p>
                <p className="text-sm font-medium">Juno Kijkduin</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#3d7183]">
              <Euro className="w-4 h-4 text-[#cc6435]" />
              <div>
                <p className="text-xs text-[#3d7183]/70">Prijs p.p.</p>
                <p className="text-sm font-medium">{event.price}</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={`border-t border-[#9fbaae] my-6 ${isOpen ? 'drawer-content-6' : ''}`} />

          {/* Buttons */}
          <div className={`space-y-3 ${isOpen ? 'drawer-content-7' : ''}`}>
            <button className="w-full bg-[#cc6435] text-[#f6f4db] py-4 rounded-lg hover:bg-[#b55730] transition-colors font-medium">
              Koop tickets
            </button>
            <button className="w-full border-2 border-[#3d7183] text-[#3d7183] py-4 rounded-lg hover:bg-[#3d7183] hover:text-[#f6f4db] transition-colors font-medium">
              Voeg toe aan agenda
            </button>
          </div>
        </div>
      </div>
    </BaseDrawer>
  );
}