Extract the duplicate inline drawer logic from Bedrijfsfeesten.tsx and ParticuliereEvents.tsx into a shared component.

--- STEP 1: Create shared component ---

CREATE file: src/app/components/EventInfoDrawer.tsx

Content:
  import { X } from 'lucide-react';
  import { BaseDrawer } from './BaseDrawer';
  import { WaveDecoration } from './WaveDecoration';
  import { JunoButton } from './JunoButton';

  export interface EventInfoItem {
    title: string;
    image: string;
    description: string;
    bullets: string[];
    cta: string;
    ctaAction: () => void;
  }

  interface EventInfoDrawerProps {
    item: EventInfoItem | null;
    onClose: () => void;
  }

  export function EventInfoDrawer({ item, onClose }: EventInfoDrawerProps) {
    if (!item) return null;
    return (
      <BaseDrawer isOpen={!!item} onClose={onClose}>
        <div className="font-body">
          <div className="relative w-full aspect-video">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background text-primary flex items-center justify-center hover:bg-background/90 transition-all"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
              aria-label="Sluiten"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-8">
            <h2
              className="text-primary mb-4 tracking-wide font-display"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1' }}
            >
              {item.title}
            </h2>
            <WaveDecoration variant="special" className="w-20 h-3 mb-6" />
            <p className="text-primary text-lg leading-relaxed mb-6">
              {item.description}
            </p>
            <ul className="space-y-3 mb-8">
              {item.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 items-start text-primary">
                  <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <JunoButton variant="primary" size="lg" fullWidth onClick={item.ctaAction}>
              {item.cta}
            </JunoButton>
          </div>
        </div>
      </BaseDrawer>
    );
  }

--- STEP 2: Refactor Bedrijfsfeesten.tsx ---

FILE: src/app/pages/Bedrijfsfeesten.tsx

Add import:
  import { EventInfoDrawer, EventInfoItem } from '../components/EventInfoDrawer';

Update drawerInfo array type and add ctaAction to each item:
  const drawerInfo: EventInfoItem[] = [
    { ...existing item 1 fields..., ctaAction: () => openMiceWidget('83bbfd1669f7') },
    { ...existing item 2 fields..., ctaAction: () => openMiceWidget('83bbfd1669f7') },
    { ...existing item 3 fields..., ctaAction: () => openMiceWidget('83bbfd1669f7') },
  ];

Replace the entire {selectedCard && (<BaseDrawer>...</BaseDrawer>)} block at the bottom with:
  <EventInfoDrawer item={selectedCard} onClose={() => setSelectedCard(null)} />

Remove these imports if no longer used elsewhere in the file:
  import { BaseDrawer } from '../components/BaseDrawer';
  import { WaveDecoration } from '../components/WaveDecoration';
  import { X } from 'lucide-react';

--- STEP 3: Apply the same refactor to ParticuliereEvents.tsx ---

FILE: src/app/pages/ParticuliereEvents.tsx
Apply the exact same pattern as STEP 2.
Keep the existing openMiceWidget ID for this page.

--- DO NOT change any card content, images, or page structure ---