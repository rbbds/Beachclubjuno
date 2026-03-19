Add WaveTransition components between sections on the three event pages
and the shared EventManagerContact and EventFaqSection components.

The WaveTransition component works by sitting absolute at the bottom of a 
section, and the fillColor must EXACTLY match the background color of the 
NEXT section below it.

The soft color hex values to use in fillColor props:
- bg-background (cream) = "#f6f4db"
- bg-navy-soft = "#e8f0f3"  
- bg-sage-soft = "#f0f5f3"
- bg-primary (footer/dark) = "#3d7183"
- Photo strip sections have no wave (they are full-bleed images, not colored backgrounds)

---

CHANGE 1 — src/app/components/EventManagerContact.tsx

The section wrapper needs position relative to contain the wave.
Change: className={`py-28 px-6 font-body ${bgClass}`}
To:     className={`relative py-28 px-6 font-body ${bgClass}`}

Add a WaveTransition prop so the parent page can control the fill color.
Add to props interface:
  nextBg?: string  — hex color of the section below, default "#f6f4db"

Add at the bottom of the section, just before the closing </section>:
  <WaveTransition fillColor={nextBg ?? '#f6f4db'} />

Import WaveTransition at the top of the file.

---

CHANGE 2 — src/app/components/EventFaqSection.tsx

Same pattern:
Add to props interface:
  nextBg?: string  — default "#f6f4db"

Change section wrapper: add relative

Add before closing </section>:
  <WaveTransition fillColor={nextBg ?? '#f6f4db'} />

Import WaveTransition.

---

CHANGE 3 — src/app/pages/Bruiloften.tsx

Add WaveTransition at the bottom of sections that have a colored bg.
Each section already has a set bg — add relative to the section wrapper 
and a WaveTransition pointing to the color of the next section.

Section sequence and wave fillColors:
1. Split hero (bg-background) → next is bg-primary: no wave needed (hero has no wave)
2. HOE WIJ HET REGELEN (bg-navy-soft) → next is EventManagerContact (bg-background):
   Add relative to section, add <WaveTransition fillColor="#f6f4db" /> before </section>
3. EventManagerContact first (bg-background) → next is foto strip: 
   Pass nextBg="#f6f4db" (foto strips have transparent-ish overlay, cream wave disappears 
   into the photo which is fine — or use the overlay color. Use "#000000" at 0% — 
   actually skip wave here, foto strips don't need it)
   Pass nextBg prop to blend: leave as default cream
4. Foto strip — no wave (full bleed photo)
5. MOMENTEN (bg-background) → next is EventFaqSection (bg-background):
   Add <div className="h-px bg-secondary/20 max-w-[1200px] mx-auto" /> as subtle separator
   instead of a wave (same color sections don't need waves)
6. EventFaqSection (bg-background) → next is EventManagerContact second (bg-sage-soft):
   Pass nextBg="#f0f5f3" to EventFaqSection
7. EventManagerContact second (bg-sage-soft) → next is Footer (bg-primary):
   Pass nextBg="#3d7183" to EventManagerContact

---

CHANGE 4 — src/app/pages/Bedrijfsfeesten.tsx

Section sequence:
1. Hero — no wave
2. AANBOD (bg-background) → next is foto strip: no wave needed
3. Foto strip — no wave  
4. EventManagerContact first (bg-background) → next is WAAROM JUNO (bg-navy-soft):
   Pass nextBg="#e8f0f3"
5. WAAROM JUNO (bg-navy-soft) → next is foto strip: no wave (into photo)
6. Foto strip — no wave
7. EventFaqSection (bg-background) → next is EventManagerContact second (bg-sage-soft):
   Pass nextBg="#f0f5f3"
8. EventManagerContact second (bg-sage-soft) → next is Footer (bg-primary):
   Pass nextBg="#3d7183"

For WAAROM JUNO section:
Add relative to the section className
Add <WaveTransition fillColor="#f6f4db" /> just before </section>
(the foto strip below has a photo, cream wave fades into it gracefully)

---

CHANGE 5 — src/app/pages/ParticuliereEvents.tsx

Same section sequence as Bedrijfsfeesten — apply identical changes.

---

RULES:
- Only add relative and WaveTransition to sections that have a solid bg-color
- Photo strip sections (full-bleed images with overlay) never get WaveTransition
- Never use hardcoded hex values except inside fillColor="" props of WaveTransition 
  (WaveTransition requires a hex string, not a Tailwind class — this is the only exception)
- Do not change any other styling, logic, or data