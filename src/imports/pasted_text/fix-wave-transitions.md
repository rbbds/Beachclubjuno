FIX: Wave transitions on Contact and FAQ pages + enforce wave architecture rules

---

BUGS TO FIX:

BUG 1 — src/app/pages/ContactPage.tsx

The main content section has bg-navy-soft. The wave at its bottom 
points to the footer (bg-primary = #3d7183).

CURRENT (wrong): The section probably has no relative wrapper or 
the WaveTransition fillColor is wrong.

CORRECT structure:
  <section className="relative py-20 px-6 bg-navy-soft">
    [content...]
    <WaveTransition fillColor="#3d7183" />
  </section>

Also check: the PageHero at the top needs a wave at its bottom 
pointing to the first content section (bg-navy-soft = #e8f0f3):
In src/app/components/PageHero.tsx, the WaveTransition should use 
the waveColor prop. Verify ContactPage passes waveColor="#e8f0f3".

---

BUG 2 — src/app/pages/VeelgesteldeVragen.tsx

THREE issues on this page:

Issue A — FAQ content section wave:
The FAQ section has bg-terracotta-soft. The CTA block below it 
should be bg-primary. The wave between them is wrong or missing.

CORRECT:
  <section className="relative py-16 px-6 font-body bg-terracotta-soft">
    [accordion content...]
    <WaveTransition fillColor="#3d7183" />
  </section>

Issue B — CTA block "Nog een vraag?" must NOT be bg-primary:
Change the CTA block background from bg-primary to bg-primary.

Wait — re-read the brief. The instruction says: "alleen de footer 
mag donkerblauw zijn". So the CTA block "NOG EEN VRAAG?" must be 
changed to a soft surface color.

Change the CTA section:
  FROM: className="relative bg-primary py-20 px-6 text-center font-body"
  TO:   className="relative bg-navy-soft py-20 px-6 text-center font-body"

Update all text inside this section that was text-background:
  - h2: text-background → text-primary
  - WaveDecoration: variant="inverted" → variant="special"
  - p: text-background/80 → text-primary/80
  - JunoButton "Stuur een e-mail": variant="primary" (stays terracotta, fine on navy-soft)
  - JunoButton "Bel ons": variant="outline-light" → variant="outline-dark"

Then add wave at bottom of CTA block pointing to footer:
  <WaveTransition fillColor="#3d7183" />
  (section already needs to be relative for this to work)

Issue C — The WaveTransition that currently exists inside the 
CTA block with fillColor="#3d7183" is probably in the wrong position 
relative to the background. Ensure it sits at the very bottom, 
INSIDE the section, not above the content.

---

ARCHITECTURE RULES TO ENFORCE (add as comments to the relevant files):

Add this comment block at the top of src/app/components/WaveTransition.tsx:

// WAVE ARCHITECTURE RULES — read before touching any wave
//
// 1. OWNERSHIP: A section owns the wave at its OWN BOTTOM.
//    fillColor = hex of the section BELOW (the receiving section's bg).
//
// 2. ONLY BETWEEN SOLID BG SECTIONS: Never place a WaveTransition
//    above or below a photo strip section (full-bleed images).
//
// 3. SOFT SURFACE HEX REFERENCE (for fillColor props only):
//    bg-background      → #f6f4db
//    bg-navy-soft       → #e8f0f3
//    bg-sage-soft       → #f0f5f3
//    bg-terracotta-soft → #faf0ea
//    bg-primary (footer)→ #3d7183
//
// 4. THE SECTION MUST BE RELATIVE: The parent section of a
//    WaveTransition must have "relative" in its className.
//    WaveTransition uses absolute positioning — without relative
//    it will escape to the wrong ancestor.
//
// 5. SAME COLOR = NO WAVE: Adjacent sections with the same bg
//    color never get a wave between them.
//
// 6. CHANGING A SECTION COLOR? Update two things:
//    a) The section's own className (bg-*)
//    b) The fillColor in the section ABOVE it (that wave points to this section)
//    c) The fillColor in this section's own WaveTransition (points to section below)

---

COMPLETE WAVE CHAIN REFERENCE (add as comment to src/app/components/SectionWaveTop.tsx):

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

---

RULES — do not change anything except what is listed above:
- No logic, routing, or data changes
- No new components
- Only bg- Tailwind tokens in className (no hardcoded hex except fillColor props)
- WaveTransition fillColor is the ONLY place hex values are allowed