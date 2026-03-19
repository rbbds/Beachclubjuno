// Wave ownership rule:
// - Solid-color sections own their INCOMING wave via 
//   <SectionWaveTop fillColor={ownBgHex} />.
//   When this section's bg color changes, update fillColor here.
// - Photo strip sections (no solid bg) are the exception:
//   their outgoing wave stays at the bottom of the photo section,
//   owned by the photo section itself (PageHero, Gallery, etc).
// - Never put a WaveTransition at the bottom of a solid-color 
//   section pointing to the next section's color.

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
