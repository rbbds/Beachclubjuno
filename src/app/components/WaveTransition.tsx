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

interface WaveTransitionProps {
  fillColor: string;
  className?: string;
}

export function WaveTransition({ fillColor, className = '' }: WaveTransitionProps) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 w-full overflow-hidden ${className}`}>
      <svg 
        className="w-full h-[80px] md:h-[80px]"
        viewBox="0 0 1200 80" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: 'none' }}
      >
        <path 
          d="M0,40 Q150,0 300,40 T600,40 T900,40 T1200,40 L1200,80 L0,80 Z" 
          fill={fillColor}
          style={{ animation: 'none' }}
        />
      </svg>
    </div>
  );
}