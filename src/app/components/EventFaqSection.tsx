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
  bgColor?: 'cream' | 'navy' | 'sage';
}

export function EventFaqSection({ items, image, imageAlt = 'FAQ', bgColor = 'cream' }: EventFaqSectionProps) {
  const bgClass = 
    bgColor === 'cream' ? 'bg-background' : 
    bgColor === 'navy' ? 'bg-navy-soft' :
    'bg-sage-soft';

  return (
    <section className={`py-28 px-6 pb-32 font-body ${bgClass} group`}>
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left column - Image */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="w-full h-[600px] object-cover sticky top-24 transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Right column - FAQ Accordion */}
        <div>
          <SectionHeader
            title="VEELGESTELDE VRAGEN"
            align="left"
            waveVariant="special"
            className="mb-8 text-primary"
          />

          <Accordion type="multiple">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-secondary/30 last:border-b-0"
              >
                <AccordionTrigger className="text-primary font-bold text-left text-base hover:text-accent hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-primary/80 leading-relaxed pb-4 text-base">
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
