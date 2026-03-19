Fix all WaveTransition usage on the three event pages and their shared 
components. Apply a strict, consistent rule everywhere.

---

THE RULE:
WaveTransition is ONLY used between two adjacent sections that BOTH have 
a solid background color (no photo). The fillColor always equals the hex 
of the section directly BELOW.

NEVER place a WaveTransition:
- Above or below a photo strip section (full-bleed image sections)
- If the section below is a photo strip
- If the section above is a photo strip  
- Anywhere in EventManagerContact or EventFaqSection (remove the prop 
  and component entirely from these — the parent page controls transitions)

---

CHANGE 1 — src/app/components/EventManagerContact.tsx

Remove the nextBg prop entirely from the interface.
Remove the WaveTransition import.
Remove the <WaveTransition> from the JSX.
The component renders no wave at all — transitions are handled by the page.

---

CHANGE 2 — src/app/components/EventFaqSection.tsx

Same: remove nextBg prop, WaveTransition import, and <WaveTransition> from JSX.

---

CHANGE 3 — src/app/pages/Bruiloften.tsx

The page sections in order:
1. Split hero (bg-background, left col) + photo (right col)  
2. HOE WIJ HET REGELEN (bg-navy-soft)
3. EventManagerContact first (bg-background)
4. Foto strip (full-bleed photo)
5. MOMENTEN (bg-background)
6. EventFaqSection (bg-background)
7. EventManagerContact second (bg-sage-soft)
8. Footer (bg-primary)

Apply waves ONLY where both neighbors are solid-bg sections:

Between section 2 (bg-navy-soft) and section 3 (bg-background):
→ Add <WaveTransition fillColor="#f6f4db" /> at bottom of section 2
→ Add relative to section 2's className

Between section 3 (bg-background) and section 4 (foto strip):
→ NO wave (next is photo)

Between section 4 (foto strip) and section 5 (bg-background):
→ NO wave (previous is photo)

Between section 5 and section 6 (both bg-background):
→ NO wave (same color — add thin separator instead if desired, but not a wave)

Between section 6 (bg-background) and section 7 (bg-sage-soft):
→ Add <WaveTransition fillColor="#f0f5f3" /> at bottom of section 6
→ But section 6 is EventFaqSection component — add the wave AFTER the 
  component in the page JSX:
  
  Instead of putting it inside the component, wrap in a relative div:
  <div className="relative">
    <EventFaqSection ... />
    <WaveTransition fillColor="#f0f5f3" />
  </div>
  
  Wait — WaveTransition uses absolute positioning so it needs to be inside 
  a relative parent. Better approach: add a thin bridging div between sections:
  
  Between EventFaqSection and EventManagerContact second:
  <div className="relative h-20 bg-background">
    <WaveTransition fillColor="#f0f5f3" />
  </div>

Between section 7 (bg-sage-soft) and footer (bg-primary):
→ Add <WaveTransition fillColor="#3d7183" /> at bottom of EventManagerContact section
→ Since EventManagerContact no longer has the wave internally, wrap it:
  <div className="relative">
    <EventManagerContact ... />
    <WaveTransition fillColor="#3d7183" />
  </div>
  
  But again WaveTransition needs a relative parent with height. Use:
  <div className="relative">
    <EventManagerContact bgColor="sage" ... />
  </div>
  Then add <WaveTransition fillColor="#3d7183" /> INSIDE that div after EventManagerContact.
  
  Actually the cleanest solution: add a bridging div after each EventManagerContact 
  and EventFaqSection where a wave is needed:
  
  Pattern to use throughout all three pages:
  <div className="relative bg-[sourceColor] h-0 overflow-visible">
    <WaveTransition fillColor="[targetColor]" />
  </div>
  
  No wait — simplest correct approach:
  
  For transitions between solid sections where we can't put the wave inside 
  the component, add the wave as a standalone section bridge:
  
  <div className="relative" style={{ height: '80px', background: '[sourceColor]' }}>
    <WaveTransition fillColor="[targetColor]" />
  </div>

This is getting complex. Use the SIMPLEST correct approach:

SIMPLEST APPROACH — wrap each EventManagerContact and EventFaqSection 
in a relative div on the page, and place WaveTransition after the component 
inside that wrapper div:

Example:
<div className="relative">
  <EventFaqSection items={faqItems} image={...} />
  <WaveTransition fillColor="#f0f5f3" />
</div>

This works because WaveTransition is absolute-positioned to bottom:0 of 
its nearest relative ancestor — so it sits at the bottom of the wrapper div 
which ends at the same place as the component.

Apply this wrapper pattern for all transitions that need a wave on all three pages.

---

CHANGE 4 — Apply to Bruiloften.tsx with wrapper pattern:

Section 2 (HOE WIJ HET REGELEN, bg-navy-soft) → Section 3 (bg-background):
Add relative to section 2, add <WaveTransition fillColor="#f6f4db" /> before </section>

Section 6+7 transition:
<div className="relative">
  <EventFaqSection items={faqItems} image={...} imageAlt="..." />
  <WaveTransition fillColor="#f0f5f3" />
</div>

Section 7+footer transition:
<div className="relative">
  <EventManagerContact name="Sarah" ... bgColor="sage" />
  <WaveTransition fillColor="#3d7183" />
</div>

NO waves on foto strip sections (section 4).
NO waves between sections 5 and 6 (same color).

---

CHANGE 5 — Apply same logic to Bedrijfsfeesten.tsx:

Section sequence:
1. Hero
2. AANBOD (bg-background)
3. Foto strip
4. EventManagerContact first (bg-background)
5. WAAROM JUNO (bg-navy-soft)
6. Foto strip
7. EventFaqSection (bg-background)
8. EventManagerContact second (bg-sage-soft)
9. Footer

Waves needed:
- Section 4 → 5 (bg-background → bg-navy-soft): 
  Wrap EventManagerContact first:
  <div className="relative">
    <EventManagerContact ... bgColor="cream" />
    <WaveTransition fillColor="#e8f0f3" />
  </div>

- Section 5 → 6 (bg-navy-soft → foto strip): NO wave
- Section 7 → 8 (bg-background → bg-sage-soft):
  <div className="relative">
    <EventFaqSection ... />
    <WaveTransition fillColor="#f0f5f3" />
  </div>
- Section 8 → footer (bg-sage-soft → bg-primary):
  <div className="relative">
    <EventManagerContact ... bgColor="sage" />
    <WaveTransition fillColor="#3d7183" />
  </div>

---

CHANGE 6 — Apply same logic to ParticuliereEvents.tsx (identical structure to Bedrijfsfeesten).

---

CHANGE 7 — Add hero wave to all three pages

Each page hero (PageHero component or split hero) needs a wave at the bottom 
pointing to the first content section color.

For Bruiloften (split hero, left bg-background, first content section bg-navy-soft):
The split hero section: add relative and <WaveTransition fillColor="#e8f0f3" /> 
inside the section before </section>

For Bedrijfsfeesten and ParticuliereEvents (PageHero component):
src/app/components/PageHero.tsx already has space for a wave at the bottom.
Check if it has a WaveTransition. If not, add a waveColor prop:
  waveColor?: string  — default: "#f6f4db"
Add <WaveTransition fillColor={waveColor} /> at the bottom of the PageHero div.
Import WaveTransition in PageHero.

Then in Bedrijfsfeesten.tsx pass waveColor="#f6f4db" (first section is bg-background).
In ParticuliereEvents.tsx pass waveColor="#f6f4db" (first section is bg-background).

---

DESIGN RULES:
- Photo strip sections NEVER have waves above or below them
- Same-color adjacent sections get NO wave (use thin separator if needed)  
- Hero always gets a wave pointing to first content section color
- Never hardcode hex anywhere except WaveTransition fillColor props
- Do not change any other styling, logic, data, or component structure