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
import { setPageMeta } from '../utils/seo';

export function Home() {
  const scrollRef = useScrollReveal();
  
  useEffect(() => {
    setPageMeta(
      'Beachclub Juno — Zon. Strand. Cultuur. | Kijkduin',
      'Beachclub Juno in Kijkduin, Den Haag. Restaurant aan zee, cultureel programma met comedy, theater en jazz, bruiloften en bedrijfsfeesten op het strand van Kijkduin.'
    );
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