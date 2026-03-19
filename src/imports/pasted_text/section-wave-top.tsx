REFACTOR: Move WaveTransition ownership — waves belong to the 
section whose color they match, not the section above them.

CURRENT (wrong) pattern:
  <SectionA bg-cream>
    content...
    <WaveTransition fillColor="#f0f5f3" />  ← owned by A, color of B
  </SectionA>
  <SectionB bg-sage-soft>
    content...
  </SectionB>

TARGET (correct) pattern:
  <SectionA bg-cream>
    content...
  </SectionA>
  <SectionB bg-sage-soft>
    <div className="relative h-20 -mt-20 pointer-events-none">
      <WaveTransition fillColor="#f0f5f3" />
    </div>
    content...
  </SectionB>

With this pattern, the wave is owned by the section whose color 
it represents. When SectionB's background color changes, you 
only update fillColor in one place — inside SectionB itself.

---

IMPLEMENTATION APPROACH:

Instead of moving every wave manually (risky, many files), 
create a reusable wrapper that each section uses at its own top:

Create a new component: src/app/components/SectionWaveTop.tsx

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

  Import WaveTransition from './WaveTransition'.

---

Then refactor each section on the homepage in order:

FILE: src/app/components/Restaurant.tsx
  - REMOVE the WaveTransition at the bottom of this section entirely.
  - Restaurant is cream, the wave below it belongs to Programma.

FILE: src/app/components/Programma.tsx
  - ADD <SectionWaveTop fillColor="#f0f5f3" /> as the very first 
    child inside the <section> element, before the <div> wrapper.
  - This wave pulls in from the cream section above and 
    transitions into the sage-soft background of Programma.
  - REMOVE any WaveTransition that currently exists at the 
    bottom of this section.

FILE: src/app/components/Events.tsx
  - Events is bg-background (cream), Programma above it is 
    bg-sage-soft. 
  - ADD <SectionWaveTop fillColor="#f6f4db" /> as the very 
    first child inside the <section> element.
  - This makes Events own its own incoming wave.

FILE: src/app/components/Gallery.tsx
  - Gallery has no top wave needed (follows cream Events section,
    Gallery is a photo grid — no solid bg).
  - The existing WaveTransition at the BOTTOM of Gallery 
    (pointing to Watersport = cream) stays where it is — 
    waves at the bottom of photo sections are the exception 
    to this rule, because photo sections don't have a bg color 
    to own the wave.

FILE: src/app/components/Watersport.tsx  
  - No top wave needed (follows Gallery photo strip).
  - The existing WaveTransition at the bottom (pointing to 
    Reviews/Footer) stays as-is — same photo-strip exception.

---

RULE TO DOCUMENT (add as a comment at the top of 
SectionWaveTop.tsx):

  // Wave ownership rule:
  // - Solid-color sections own their INCOMING wave via 
  //   <SectionWaveTop fillColor={ownBgHex} />.
  //   When this section's bg color changes, update fillColor here.
  // - Photo strip sections (no solid bg) are the exception:
  //   their outgoing wave stays at the bottom of the photo section,
  //   owned by the photo section itself (PageHero, Gallery, etc).
  // - Never put a WaveTransition at the bottom of a solid-color 
  //   section pointing to the next section's color.

---

After this refactor, changing a section's background color only 
requires updating:
  1. The section's own bg- className
  2. The fillColor in its own <SectionWaveTop>
  3. The fillColor in the NEXT solid-color section's <SectionWaveTop>
     (because that wave also needs to match the new color)

Point 3 is unavoidable — a wave between two sections always 
references both colors. But with this pattern, you at least 
find it immediately because it lives inside the section you 
just changed, not somewhere else in the codebase.

Do not change any other styling, logic, animations, or data.