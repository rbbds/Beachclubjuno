import { SectionHeader } from './SectionHeader';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './ui/accordion';

interface EventFaqSectionProps {
  items: Array<{ question: string; answer: string }>;
  image: string;
  imageAlt?: string;
}

export function EventFaqSection({ items, image, imageAlt = 'FAQ' }: EventFaqSectionProps) {
  return (
    <section className="py-20 px-6 font-body bg-background">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left column - Image */}
        <div>
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-[600px] object-cover rounded-xl sticky top-24"
          />
        </div>

        {/* Right column - FAQ Accordion */}
        <div>
          <SectionHeader
            title="VEELGESTELDE VRAGEN"
            align="left"
            waveVariant="special"
            className="mb-8"
          />

          <Accordion type="multiple">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-secondary/30 last:border-b-0"
              >
                <AccordionTrigger className="text-primary font-bold text-left hover:text-accent hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-primary/80 leading-relaxed pb-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
