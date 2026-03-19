Add four new "soft surface" color tokens to the design system and replace 
problematic section backgrounds on the three event pages.

---

STEP 1 — Add tokens to src/styles/theme.css

In the :root block, add after the existing color variables:
  --navy-soft: #e8f0f3;
  --terracotta-soft: #faf0ea;
  --sage-soft: #f0f5f3;

In the @theme inline block, add:
  --color-navy-soft: var(--navy-soft);
  --color-terracotta-soft: var(--terracotta-soft);
  --color-sage-soft: var(--sage-soft);

This makes bg-navy-soft, bg-terracotta-soft, bg-sage-soft available as Tailwind utilities.
All text inside these surfaces remains text-primary (navy) — no color inversions needed.

---

STEP 2 — Update src/app/components/SectionHeader.tsx

The h2 currently has text-primary hardcoded. Add support for inheriting text color
so it works on both light and dark backgrounds.

Change:
  className="text-primary uppercase tracking-wide font-display"

To:
  className="uppercase tracking-wide font-display"
  (remove text-primary — let the parent's text color cascade)

Also change the subtitle p tag from:
  className={`text-primary text-lg max-w-2xl font-body mb-8 ...`}
To:
  className={`text-lg max-w-2xl font-body mb-8 opacity-80 ...`}
  (remove text-primary — let it inherit, add opacity-80 for subtlety)

This allows SectionHeader to work on any background color.

---

STEP 3 — Update src/app/components/EventManagerContact.tsx

The bgColor prop currently maps 'sage' and 'navy' both to bg-primary (dark navy).
Update the mapping to use soft surfaces instead:

Change the bgClass logic to:
  bgColor === 'cream' → bg-background  (unchanged)
  bgColor === 'sage'  → bg-sage-soft   (was bg-primary — too dark)
  bgColor === 'navy'  → bg-navy-soft   (was bg-primary — too dark)

Change the textClass logic to:
  all variants → text-primary  (navy text works on all soft surfaces)

Change the waveVariant logic to:
  all variants → 'special'  (terracotta wave on all soft backgrounds)

Change the buttonOutlineVariant logic to:
  all variants → 'outline-dark'  (navy outline on all soft backgrounds)

Also change the "LET'S TALK" label from text-accent to text-accent (unchanged — this is fine).

---

STEP 4 — Update src/app/components/EventFaqSection.tsx

The bgColor='navy' currently maps to bg-primary with inverted text.
Change:
  bgColor === 'cream' → bg-background  (unchanged)
  bgColor === 'navy'  → bg-navy-soft   (was bg-primary)

For bgColor === 'navy' (now navy-soft), update text colors:
  All text → text-primary  (no more text-background needed)
  waveVariant → 'special'  (terracotta on soft background)
  AccordionTrigger → text-primary hover:text-accent hover:no-underline

---

STEP 5 — Update section backgrounds on all three event pages

In src/app/pages/Bedrijfsfeesten.tsx:
- SECTION 2 (Aanbod): change bg-background → bg-background  (keep cream, no change)
- SECTION 4 (EventManagerContact first): bgColor="cream" → unchanged
- SECTION 5 (Waarom Juno): change bg-primary → bg-navy-soft
  Inside this section, ALL text-background → text-primary
  ALL text-background/70 etc → text-primary/70
  JunoButton variant="secondary" → variant="primary" (terracotta CTA on soft bg)
- SECTION 7 (FAQ): EventFaqSection bgColor prop: remove or set to "cream"
- SECTION 8 (EventManagerContact second): bgColor="sage" → bgColor="sage" (now sage-soft, looks good)

In src/app/pages/ParticuliereEvents.tsx:
- Same changes as Bedrijfsfeesten for sections 5, 7, 8

In src/app/pages/Bruiloften.tsx:
- SECTION 2 (Hoe wij het regelen): change bg-primary → bg-navy-soft
  Inside: ALL text-background → text-primary
  Card class: change bg-white → bg-background
  Card border: border-secondary/30 stays the same
  Icons: text-primary stays (works on navy-soft)
  SectionHeader: remove any className overrides for text-background (no longer needed)
- SECTION 5 (Momenten/FAQ): EventFaqSection bgColor: remove navy, use "cream"
- SECTION 6 (EventManagerContact): bgColor="sage" → bgColor="sage" (now looks good)

---

STEP 6 — Update the Programma section on homepage

In src/app/components/Programma.tsx:
The section currently uses bg-secondary (full sage #9fbaae) which is also too heavy.
Change: className="relative py-20 px-6 bg-secondary font-body"
To:     className="relative py-20 px-6 bg-sage-soft font-body"

The SectionHeader waveVariant="inverted" (cream wave) no longer makes sense on a light background.
Change waveVariant="inverted" to waveVariant="special"  (terracotta wave on sage-soft)

---

DESIGN RULES:
- Never use hardcoded hex values anywhere — only the new token names
- The hard brand colors (bg-primary, bg-accent, bg-secondary) are only for:
  buttons, icons, category tags, the footer, and photo overlays
- Soft surfaces (bg-background, bg-navy-soft, bg-sage-soft, bg-terracotta-soft) 
  are for section backgrounds only
- bg-terracotta-soft is available but not yet used — leave it for later use
- Do not change routes, data, or component logic
- Do not change any foto strip sections (those use photo + overlay, no bg color needed)