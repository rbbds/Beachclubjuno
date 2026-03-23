import { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Intro } from '../components/Intro';
import { Restaurant } from '../components/Restaurant';
import { Programma } from '../components/Programma';
import { Events } from '../components/Events';
import { Gallery } from '../components/Gallery';
import { Watersport } from '../components/Watersport';
import { Reviews } from '../components/Reviews';
import { Footer } from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Home() {
  const scrollRef = useScrollReveal();
  
  useEffect(() => {
    document.title = 'Beachclub Juno — Zon. Strand. Cultuur. | Kijkduin';
  }, []);

  return (
    <div className="min-h-screen bg-background" ref={scrollRef}>
      <Navigation />
      <Hero />
      <Intro />
      <Restaurant />
      <Programma />
      <Events />
      <Gallery />
      <Watersport />
      <Reviews />
      <Footer />
    </div>
  );
}