import { WaveDecoration } from './WaveDecoration';
import { SectionWaveTop } from './SectionWaveTop';
import { SectionHeader } from './SectionHeader';
import { Link } from 'react-router';
import { images } from '../data/images';
import { useState, useEffect } from 'react';
import { sanityClient, urlFor } from '../../lib/sanity';

export function Events() {
  const [sectionTitle, setSectionTitle] = useState('EVENTS & VERHUUR');
  const [sectionSubtitle, setSectionSubtitle] = useState('De perfecte locatie voor uw bijzondere moment');
  const [bruiloftenImg, setBruiloftenImg] = useState<string | null>(null);
  const [zakelijkImg, setZakelijkImg] = useState<string | null>(null);
  const [particulierImg, setParticulierImg] = useState<string | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "homePage"][0]{ events }`)
      .then(data => {
        if (data?.events?.title) setSectionTitle(data.events.title);
        if (data?.events?.subtitle) setSectionSubtitle(data.events.subtitle);
        if (data?.events?.bruiloftenImage)
          setBruiloftenImg(urlFor(data.events.bruiloftenImage).width(900).url());
        if (data?.events?.zakelijkImage)
          setZakelijkImg(urlFor(data.events.zakelijkImage).width(900).url());
        if (data?.events?.particulierImage)
          setParticulierImg(urlFor(data.events.particulierImage).width(900).url());
      })
      .catch(() => {});
  }, []);

  return (
    <section id="events" className="py-20 px-6 font-body">
      <SectionWaveTop fillColor="#f6f4db" />
      
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          title={sectionTitle}
          subtitle={sectionSubtitle}
          waveVariant="special"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Bruiloften */}
          <div className="group reveal-stagger">
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img 
                src={bruiloftenImg ?? images.events.bruiloften}
                alt="Strandbruiloft bij Beachclub Juno Kijkduin"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 
                className="absolute bottom-6 left-6 text-background tracking-wide font-display"
                style={{ 
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: '1'
                }}
              >
                BRUILOFTEN
              </h3>
            </div>
            <p className="text-primary text-lg mb-4 leading-relaxed">
              Trouwen met de Noordzee als getuige. Van intieme ceremonies tot grote feesten — 
              wij regelen alles voor uw droombruiloft aan zee.
            </p>
            <Link to="/bruiloften" className="inline-flex items-center text-accent hover:text-accent/85 transition-all py-2">
              <span 
                className="hover:underline"
                style={{ fontWeight: 700, fontSize: '16px' }}
              >
                Meer informatie
              </span>
              <span className="ml-1 hover:translate-x-1 transition-transform" style={{ fontSize: '16px' }}>→</span>
            </Link>
          </div>

          {/* Zakelijke Events */}
          <div className="group reveal-stagger">
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img 
                src={zakelijkImg ?? images.events.bedrijfsfeesten}
                alt="Zakelijk evenement aan zee bij Beachclub Juno Den Haag"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 
                className="absolute bottom-6 left-6 text-background tracking-wide font-display"
                style={{ 
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: '1'
                }}
              >
                ZAKELIJKE EVENTS
              </h3>
            </div>
            <p className="text-primary text-lg mb-4 leading-relaxed">
              Vergaderen, teambuilding of eindejaarsfeest — inspirerende zakelijke bijeenkomsten met de Noordzee als achtergrond.
            </p>
            <Link to="/bedrijfsfeesten" className="inline-flex items-center text-accent hover:text-accent/85 transition-all py-2">
              <span 
                className="hover:underline"
                style={{ fontWeight: 700, fontSize: '16px' }}
              >
                Meer informatie
              </span>
              <span className="ml-1 hover:translate-x-1 transition-transform" style={{ fontSize: '16px' }}>→</span>
            </Link>
          </div>

          {/* Particuliere Events */}
          <div className="group reveal-stagger">
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img 
                src={particulierImg ?? images.events.bruiloften}
                alt="Particulier feest op het strand bij Beachclub Juno Kijkduin"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 
                className="absolute bottom-6 left-6 text-background tracking-wide font-display"
                style={{ 
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: '1'
                }}
              >
                PARTICULIERE EVENTS
              </h3>
            </div>
            <p className="text-primary text-lg mb-4 leading-relaxed">
              Verjaardag, jubileum, familiefeest of gewoon omdat het kan — wij maken er een onvergetelijke dag van aan het strand.
            </p>
            <Link to="/particuliere-events" className="inline-flex items-center text-accent hover:text-accent/85 transition-all py-2">
              <span 
                className="hover:underline"
                style={{ fontWeight: 700, fontSize: '16px' }}
              >
                Meer informatie
              </span>
              <span className="ml-1 hover:translate-x-1 transition-transform" style={{ fontSize: '16px' }}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
