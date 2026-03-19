REFACTOR: Apply soft-surface color variety across ALL pages 
and components — homepage + all subpages.

AVAILABLE TOKENS:
  bg-background       = cream    #f6f4db
  bg-terracotta-soft  = warm     #faf0ea
  bg-sage-soft        = green    #f0f5f3
  bg-navy-soft        = blue     #e8f0f3

RULE: Never use the same bg color twice in a row.
Photo strips have no bg color and break the sequence.
WaveTransition fillColor always matches the RECEIVING
section's bg hex value.

---

HOMEPAGE COMPONENTS

FILE: src/app/components/Restaurant.tsx
  Change section bg: bg-background → bg-terracotta-soft
  The overlapping card inside stays bg-background (unchanged).
  Wave out (bottom): fillColor="#f0f5f3" → into Programma

FILE: src/app/components/Programma.tsx
  Background stays bg-sage-soft (unchanged).
  Wave in (top): fillColor="#f0f5f3" (from terra-soft above)
  Wave out (bottom): fillColor="#f6f4db" → into Events

FILE: src/app/components/Events.tsx
  Background stays bg-background (unchanged).
  No wave changes needed here.

FILE: src/app/components/Gallery.tsx
  Update WaveTransition at bottom of Gallery:
  fillColor="#e8f0f3" (was "#f6f4db") → into Watersport

FILE: src/app/components/Watersport.tsx
  Change section bg: bg-background → bg-navy-soft
  Wave out (bottom): fillColor="#faf0ea" → into Reviews

FILE: src/app/components/Reviews.tsx
  Change section bg: bg-background → bg-terracotta-soft
  The white review cards (bg-white) stay white.
  Star icons (text-accent) stay unchanged.
  Wave out (bottom): fillColor="#3d7183" → into Footer
  If no WaveTransition exists at bottom of Reviews, add one.
  Ensure section wrapper has "relative" in className.

---

HOMEPAGE WAVE CHAIN (complete reference):
  Hero bottom:        fillColor="#f6f4db"  → Intro
  Restaurant top:     fillColor="#faf0ea"  (from cream Intro)
  Restaurant bottom:  fillColor="#f0f5f3"  → Programma
  Programma bottom:   fillColor="#f6f4db"  → Events
  Gallery bottom:     fillColor="#e8f0f3"  → Watersport
  Watersport bottom:  fillColor="#faf0ea"  → Reviews
  Reviews bottom:     fillColor="#3d7183"  → Footer

---

SUBPAGES

FILE: src/app/pages/Bruiloften.tsx

Target sequence:
  S1  split hero        white/foto     (unchanged)
  S2  Hoe we regelen    navy-soft      (unchanged)
  S3  EventManager 1    terracotta-soft (was cream)
  S4  fotostrip                        (unchanged)
  S5  Momenten          cream          (unchanged)
  S6  EventFaqSection   sage-soft      (was cream)
  S7  EventManager 2    terracotta-soft (was sage-soft)
  Footer                primary        (unchanged)

Changes:
  S3 EventManagerContact: bgColor="terracotta"
  S6 EventFaqSection: bgColor="sage"
  S7 EventManagerContact: bgColor="terracotta"

Wave updates:
  S2 bottom (navy-soft → terra-soft):  fillColor="#faf0ea"
  S6 bottom (sage-soft → terra-soft):  fillColor="#faf0ea"
  S7 bottom (terra-soft → footer):     fillColor="#3d7183"

---

FILE: src/app/pages/Bedrijfsfeesten.tsx

Target sequence:
  S1  PageHero          foto           (unchanged)
  S2  Aanbod            cream          (unchanged)
  S3  fotostrip                        (unchanged)
  S4  EventManager 1    terracotta-soft (was cream)
  S5  Waarom Juno       navy-soft      (unchanged)
  S6  fotostrip                        (unchanged)
  S7  EventFaqSection   sage-soft      (was cream)
  S8  EventManager 2    terracotta-soft (was sage-soft)
  Footer                primary        (unchanged)

Changes:
  S4 EventManagerContact: bgColor="terracotta"
  S7 EventFaqSection: bgColor="sage"
  S8 EventManagerContact: bgColor="terracotta"

Wave updates:
  S4 bottom (terra-soft → navy-soft):  fillColor="#e8f0f3"
  S7 bottom (sage-soft → terra-soft):  fillColor="#faf0ea"
  S8 bottom (terra-soft → footer):     fillColor="#3d7183"

---

FILE: src/app/pages/ParticuliereEvents.tsx

Identical structure to Bedrijfsfeesten — apply the exact
same changes as Bedrijfsfeesten.tsx above.

---

FILE: src/app/pages/VolledigProgramma.tsx

Target sequence:
  PageHero      foto           (unchanged)
  Filter pills  cream          (unchanged)
  Event grid    sage-soft      (was cream)
  CTA banner    primary        (unchanged)
  Footer        primary        (unchanged)

Changes:
  Event grid section: add bg-sage-soft to the <section>
  wrapping the event card grid (className contains pb-20 px-6).

---

FILE: src/app/pages/VeelgesteldeVragen.tsx

Target sequence:
  PageHero       foto           (unchanged)
  FAQ content    terracotta-soft (was cream)
  CTA block      primary        (unchanged)
  Footer         primary        (unchanged)

Changes:
  FAQ content section: add bg-terracotta-soft.
  Wave at bottom of FAQ section: fillColor="#3d7183"
  Ensure section wrapper has "relative" in className.

---

FILE: src/app/pages/ContactPage.tsx

Target sequence:
  PageHero        foto           (unchanged)
  Main content    navy-soft      (was cream)
  Footer          primary        (unchanged)

Changes:
  Main content section: bg-background → bg-navy-soft
  The white contact form card stays bg-white.
  Wave at bottom: fillColor="#3d7183"
  Ensure section wrapper has "relative" in className.

---

SHARED COMPONENTS

FILE: src/app/components/EventManagerContact.tsx

Add bgColor="terracotta" support to bgClass mapping:
  bgColor === 'terracotta' → bg-terracotta-soft
  (text, wave, and button logic same as 'cream')

FILE: src/app/components/EventFaqSection.tsx

Add bgColor="sage" support to bgClass mapping:
  bgColor === 'sage' → bg-sage-soft
  AccordionTrigger: text-primary + hover:text-accent (unchanged)

---

WAVE HEX REFERENCE:
  cream           #f6f4db
  terracotta-soft #faf0ea
  sage-soft       #f0f5f3
  navy-soft       #e8f0f3
  footer/primary  #3d7183

DESIGN RULES:
  - Only Tailwind bg- tokens in className, never hardcoded hex
  - fillColor on WaveTransition is the only hex exception
  - White cards (bg-white) inside sections stay white
  - Photo strip sections never get a background color
  - Do not change text colors, component logic, or data