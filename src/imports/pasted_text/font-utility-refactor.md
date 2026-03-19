// Dit staat nu op de section wrapper ✓
<div style={{ fontFamily: 'Museo, sans-serif' }}>

// Maar dit staat OOK op elk child element ✗
<h2 style={{ fontFamily: 'Bebas Neue, sans-serif', ... }}>
<h3 style={{ fontFamily: 'Bebas Neue, sans-serif', ... }}>
```

**Oplossing:** Headings die Bebas Neue nodig hebben binnen een Museo-wrapper kunnen een utility class krijgen, bijv. `font-display`.

---

### Probleem 3 — Geen gedeelde UI-primitieven voor herhalende patronen

**Wat er misgaat:** Dezelfde visuele patronen worden telkens opnieuw gebouwd met hardcoded styling:

- **Section headers** (h2 + WaveDecoration + subtitle) komen voor in minstens 8 secties
- **CTA-knoppen** worden 15+ keer opnieuw gestijld met dezelfde klassen
- **Event cards** hebben vergelijkbare markup in `Programma.tsx` én `VolledigProgramma.tsx`
- **Hero-secties** op subpagina's hebben allemaal dezelfde ~40 regels identieke code

---

### Probleem 4 — Geen font-utility class voor Bebas Neue

**Wat er misgaat:** Er is geen Tailwind-klasse voor `font-family: 'Bebas Neue'`. Dit wordt nu overal inline gedaan. Met één toevoeging aan `theme.css` kun je `font-display` gebruiken als utility.

---

### De drie prompts voor Figma Make

---

#### **Prompt 1 — Design tokens versterken**
```
REFACTOR: Strengthen design tokens — replace all hardcoded hex values with Tailwind semantic utilities

CONTEXT:
The project uses Tailwind CSS v4 with CSS custom properties already defined in src/styles/theme.css. 
The @theme inline block already maps these to Tailwind utilities. 
Currently, ALL components use hardcoded hex values like text-[#3d7183] instead of the available semantic utilities.

STEP 1 — Add font-family utilities to theme.css
In src/styles/theme.css, inside the @theme inline block, add these two lines:
  --font-display: 'Bebas Neue', sans-serif;
  --font-body: 'Museo', DM Sans, sans-serif;

This makes font-display and font-body available as Tailwind utilities (font-display, font-body).

STEP 2 — Replace all hardcoded colors in every component file

Apply these substitutions throughout ALL files in src/app/components/ and src/app/pages/:

REPLACE → WITH:
text-[#3d7183]       → text-primary
bg-[#3d7183]         → bg-primary
border-[#3d7183]     → border-primary
text-[#3d7183]/70    → text-primary/70
text-[#3d7183]/80    → text-primary/80
text-[#3d7183]/60    → text-primary/60

text-[#cc6435]       → text-accent
bg-[#cc6435]         → bg-accent
border-[#cc6435]     → border-accent
hover:bg-[#cc6435]   → hover:bg-accent
hover:text-[#cc6435] → hover:text-accent

bg-[#f6f4db]         → bg-background
text-[#f6f4db]       → text-background
border-[#f6f4db]     → border-background
bg-[#f6f4db]/10      → bg-background/10
bg-[#f6f4db]/20      → bg-background/20
bg-[#f6f4db]/80      → bg-background/80
bg-[#f6f4db]/90      → bg-background/90
bg-[#f6f4db]/95      → bg-background/95

bg-[#9fbaae]         → bg-secondary
text-[#9fbaae]       → text-secondary
border-[#9fbaae]     → border-secondary
bg-[#9fbaae]/10      → bg-secondary/10
bg-[#9fbaae]/30      → bg-secondary/30

Also replace hover states:
hover:bg-[#b55730]   → hover:bg-accent/85
hover:bg-[#2d5563]   → hover:bg-primary/85

Also replace these inline style fontFamily declarations:
style={{ fontFamily: 'Museo, sans-serif' }}        → className="font-body" (remove the style prop)
style={{ fontFamily: 'Bebas Neue, sans-serif' }}   → className="font-display" (remove the style prop)

IMPORTANT RULES:
- Do NOT change any logic, structure, or other styling
- Do NOT change animation classes (drawer-open, drawer-close, etc.)
- Do NOT change the BaseDrawer overlay color bg-[#3d7183]/50 — replace with bg-primary/50
- Preserve all existing className strings, only swap the color tokens listed above
- The color values in CSS comments or strings (not className) do NOT need changing

FILES TO UPDATE (process all of these):
src/app/components/BaseDrawer.tsx
src/app/components/EventDrawer.tsx
src/app/components/Events.tsx
src/app/components/Footer.tsx
src/app/components/Gallery.tsx
src/app/components/Hero.tsx
src/app/components/Intro.tsx
src/app/components/Navigation.tsx
src/app/components/Programma.tsx
src/app/components/Restaurant.tsx
src/app/components/Reviews.tsx
src/app/components/Watersport.tsx
src/app/components/WaveDecoration.tsx
src/app/pages/Bedrijfsfeesten.tsx
src/app/pages/Bruiloften.tsx
src/app/pages/VeelgesteldeVragen.tsx
src/app/pages/VolledigProgramma.tsx
```

---

#### **Prompt 2 — Gedeelde UI-primitieven**
```
CREATE: Shared UI primitives to eliminate repeated styling patterns

CONTEXT:
The Juno codebase has several patterns that are copy-pasted across multiple components 
with identical or near-identical markup and styling. After the token refactor (Prompt 1), 
create the following shared components. All new components live in src/app/components/.

---

COMPONENT 1: SectionHeader.tsx

Create src/app/components/SectionHeader.tsx

This pattern currently appears in: Programma, Events, Gallery, Watersport, Reviews, 
Bedrijfsfeesten (x3), Bruiloften (x2), VeelgesteldeVragen, VolledigProgramma

Props interface:
  title: string           — displayed in Bebas Neue, uppercase
  subtitle?: string       — optional body text below wave
  waveVariant?: 'default' | 'inverted' | 'special'  — default: 'special'
  align?: 'left' | 'center'  — default: 'center'
  className?: string

Implementation:
- Title: Bebas Neue (font-display), text-primary, clamp(2.5rem, 6vw, 4rem), tracking-wide, lineHeight 1
- WaveDecoration: w-24 h-3, mx-auto if centered, mt-3 mb-4
- Subtitle: text-primary, text-lg, max-w-2xl, mx-auto if centered

Usage example (replace existing patterns with this):
  <SectionHeader 
    title="CULTUREEL PROGRAMMA" 
    subtitle="Van intieme jazz tot hilarische comedy" 
    waveVariant="inverted"
  />

---

COMPONENT 2: JunoButton.tsx

Create src/app/components/JunoButton.tsx

This pattern currently appears 15+ times across all pages.

Props interface:
  variant: 'primary' | 'secondary' | 'outline-light' | 'outline-dark'
  size?: 'sm' | 'md' | 'lg'  — default: 'md'
  href?: string               — renders as <a> if provided
  onClick?: () => void
  target?: string
  children: React.ReactNode
  className?: string
  fullWidth?: boolean

Variants:
  primary:       bg-accent text-background, hover:bg-accent/85, rounded-lg
  secondary:     bg-primary text-background, hover:bg-primary/85, rounded-lg  
  outline-light: border-2 border-background text-background, hover:bg-background hover:text-primary, rounded-lg
  outline-dark:  border-2 border-primary text-primary, hover:bg-primary hover:text-background, rounded-lg

Sizes:
  sm: px-6 py-2 text-base
  md: px-8 py-3 text-lg
  lg: px-8 py-4 text-lg

Font: font-body (Museo)
Transition: transition-colors

Renders as <a> with target and href if href is provided, otherwise as <button> with onClick.
If fullWidth is true, add w-full to the element.

---

COMPONENT 3: PageHero.tsx

Create src/app/components/PageHero.tsx

This compact hero pattern (not fullscreen) is used on: 
VolledigProgramma, VeelgesteldeVragen, and should be used on future pages.

Props interface:
  image: string           — URL of background image
  title: string           — Bebas Neue headline
  subtitle?: string       — Museo body text
  waveVariant?: 'default' | 'inverted' | 'special'   — default: 'inverted'
  height?: string         — default: 'h-[50vh] min-h-[320px]'

Implementation:
- Wrapper: relative, overflow-hidden, flex items-center justify-center
- Background img: absolute inset-0 w-full h-full object-cover
- Overlay: absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50
- Content: relative z-10 text-center px-6
- Title: font-display, text-background, clamp(2.8rem, 6vw, 5rem), letterSpacing 0.04em
- WaveDecoration: w-24 h-3 mx-auto mb-5
- Subtitle: text-background/80, max-w-md mx-auto

---

AFTER creating the three components, update these files to use them:

In src/app/pages/VolledigProgramma.tsx:
- Replace the hero section markup with <PageHero image={images.programma.jazz.event} title="VOLLEDIG PROGRAMMA" subtitle="Van comedyavond tot jazzsessie — altijd iets te beleven bij Juno" />
- Replace the filter section header with <SectionHeader /> if applicable

In src/app/pages/VeelgesteldeVragen.tsx:
- Replace the hero section markup with <PageHero image={images.hero.main} title="VEELGESTELDE VRAGEN" subtitle="Alles wat je wilt weten over Juno" />

In src/app/components/Programma.tsx:
- Replace the title/wave/subtitle block with <SectionHeader title="CULTUREEL PROGRAMMA" subtitle="Van intieme jazz tot hilarische comedy — ontdek ons gevarieerde aanbod" waveVariant="inverted" />

In src/app/components/Events.tsx:
- Replace the title/wave/subtitle block with <SectionHeader title="EVENTS & VERHUUR" subtitle="De perfecte locatie voor uw bijzondere moment" />

In src/app/components/Watersport.tsx:
- Replace the title/wave/subtitle block with <SectionHeader title="WATERSPORT" subtitle="Bij Juno kun je het strand beleven zoals het bedoeld is" />

In src/app/components/Reviews.tsx:
- Replace the title/wave block with <SectionHeader title="WAT ONZE GASTEN ZEGGEN" />

Do NOT break any existing functionality. Do NOT change the data, logic, or other styling.
```

---

#### **Prompt 3 — Fix bekende TODO's uit de projectdocumentatie**
```
FIX: Resolve known issues listed in the project documentation

Fix the following three known issues. Make no other changes.

---

FIX 1: Hero.tsx — migrate local scrollToSection to shared utility

FILE: src/app/components/Hero.tsx

The file currently has a local scrollToSection function. 
Check if it imports from utils/scroll.ts. If not:

1. Add this import at the top:
   import { scrollToSection } from '../utils/scroll';

2. Remove any local scrollToSection function definition in the file.

3. The button onClick should call: onClick={() => scrollToSection('verhaal')}

Do not change anything else in Hero.tsx.

---

FIX 2: JunoLogo.tsx — add onClick to TypeScript interface

FILE: src/app/components/JunoLogo.tsx

The onClick prop is used in Footer.tsx but missing from the interface, causing a TypeScript warning.

The current interface is:
  interface JunoLogoProps {
    variant: 'default' | 'inverted' | 'special';
    className?: string;
  }

Replace with:
  interface JunoLogoProps {
    variant: 'default' | 'inverted' | 'special';
    className?: string;
    onClick?: () => void;
  }

The SVG element should already spread onClick — verify it has:
  onClick={onClick}
on the <svg> element. If not, add it.

Do not change anything else.

---

FIX 3: index.html — update language and meta

FILE: index.html

1. Change <html lang="en"> to <html lang="nl">

2. Replace <title>Beachclub Juno Website Design</title> with <title>Beachclub Juno — Zon. Strand. Cultuur. | Kijkduin</title>

3. Add these meta tags inside <head>, after the existing <meta> tags:
   <meta name="description" content="Beachclub Juno in Kijkduin, Den Haag. Restaurant aan zee, cultureel programma (comedy, theater, jazz), bruiloften en bedrijfsfeesten." />
   <meta name="theme-color" content="#3d7183" />

Do not change anything else.