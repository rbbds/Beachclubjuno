// Wave ownership rule:
// - Solid-color sections own their INCOMING wave via 
//   <SectionWaveTop fillColor={ownBgHex} />.
//   When this section's bg color changes, update fillColor here.
// - Photo strip sections (no solid bg) are the exception:
//   their outgoing wave stays at the bottom of the photo section,
//   owned by the photo section itself (PageHero, Gallery, etc).
// - Never put a WaveTransition at the bottom of a solid-color 
//   section pointing to the next section's color.

// HOMEPAGE WAVE CHAIN:
// Hero              → Intro (cream):          fillColor="#f6f4db"
// Restaurant        → Programma (sage-soft):  fillColor="#f0f5f3"
// Programma         → Events (cream):         fillColor="#f6f4db"
// Gallery           → Watersport (navy-soft): fillColor="#e8f0f3"
// Watersport        → Reviews (terra-soft):   fillColor="#faf0ea"
// Reviews           → Footer (primary):       fillColor="#3d7183"
//
// CONTACT PAGE:
// PageHero          → main (navy-soft):       waveColor="#e8f0f3"
// main content      → Footer (primary):       fillColor="#3d7183"
//
// FAQ PAGE:
// PageHero          → FAQ content (terra-soft): waveColor="#faf0ea"
// FAQ content       → CTA block (navy-soft):    fillColor="#e8f0f3"
// CTA block         → Footer (primary):          fillColor="#3d7183"

import { WaveTransition } from './WaveTransition';

interface SectionWaveTopProps {
  fillColor: string;
}

export function SectionWaveTop({ fillColor }: SectionWaveTopProps) {
  return (
    <div className="relative h-20 -mt-20 pointer-events-none overflow-hidden">
      <WaveTransition fillColor={fillColor} />
    </div>
  );
}