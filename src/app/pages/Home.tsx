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

export function Home() {
  useEffect(() => {
    document.title = 'Beachclub Juno — Zon. Strand. Cultuur. | Kijkduin';
  }, []);

  return (
    <div className="min-h-screen bg-background">
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