Create Sanity schemas for all page-level content.

--- FILE: sanity/schemas/homePage.ts ---
  import { defineType, defineField } from 'sanity';
  export default defineType({
    name: 'homePage',
    title: 'Homepage',
    type: 'document',
    fields: [
      defineField({
        name: 'hero', title: 'Hero sectie', type: 'object',
        fields: [
          { name: 'image', title: 'Achtergrondafbeelding', type: 'image',
            options: { hotspot: true } },
          { name: 'headline', title: 'Headline', type: 'string' },
          { name: 'subtitle', title: 'Subtitel', type: 'string' },
          { name: 'ctaLabel', title: 'Knoptekst', type: 'string' },
        ],
      }),
      defineField({
        name: 'intro', title: 'Intro sectie', type: 'object',
        fields: [
          { name: 'paragraph1', title: 'Alinea 1', type: 'text', rows: 4 },
          { name: 'paragraph2', title: 'Alinea 2', type: 'text', rows: 4 },
          { name: 'image', title: 'Afbeelding', type: 'image',
            options: { hotspot: true } },
        ],
      }),
      defineField({
        name: 'restaurant', title: 'Restaurant sectie', type: 'object',
        fields: [
          { name: 'description', title: 'Beschrijving', type: 'text', rows: 4 },
          { name: 'menuUrl', title: 'Menukaart PDF URL', type: 'url' },
          { name: 'image', title: 'Afbeelding', type: 'image',
            options: { hotspot: true } },
        ],
      }),
      defineField({
        name: 'gallery', title: "Galerij (max. 10 foto's)", type: 'array',
        of: [{ type: 'image', options: { hotspot: true } }],
        validation: r => r.max(10),
      }),
    ],
  });

--- FILE: sanity/schemas/watersportActivity.ts ---
  import { defineType, defineField } from 'sanity';
  export default defineType({
    name: 'watersportActivity',
    title: 'Watersport activiteit',
    type: 'document',
    fields: [
      defineField({ name: 'title', title: 'Titel', type: 'string',
        validation: r => r.required() }),
      defineField({ name: 'cardTitle', title: 'Kaarttitel (kort)',
        type: 'string' }),
      defineField({ name: 'image', title: 'Afbeelding', type: 'image',
        options: { hotspot: true } }),
      defineField({ name: 'description', title: 'Beschrijving',
        type: 'text', rows: 6 }),
      defineField({ name: 'extraLine',
        title: 'Extra alinea (partner-vermelding)', type: 'string' }),
      defineField({ name: 'buttonText', title: 'Knoptekst', type: 'string' }),
      defineField({ name: 'buttonLink', title: 'Knop URL', type: 'url' }),
      defineField({ name: 'order', title: 'Volgorde', type: 'number' }),
    ],
    preview: { select: { title: 'title', media: 'image' } },
  });

--- FILE: sanity/schemas/faqPage.ts ---
  import { defineType, defineField } from 'sanity';
  export default defineType({
    name: 'faqPage',
    title: 'FAQ pagina',
    type: 'document',
    fields: [
      defineField({
        name: 'groups', title: 'Vraaggroepen', type: 'array',
        of: [{
          type: 'object',
          fields: [
            { name: 'label', title: 'Groepsnaam', type: 'string' },
            {
              name: 'items', title: 'Vragen', type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'question', title: 'Vraag', type: 'string' },
                  { name: 'answer', title: 'Antwoord', type: 'text', rows: 3 },
                ],
              }],
            },
          ],
        }],
      }),
    ],
  });

--- FILE: sanity/schemas/index.ts (FINAL UPDATE) ---
  import event from './event';
  import siteSettings from './siteSettings';
  import homePage from './homePage';
  import watersportActivity from './watersportActivity';
  import faqPage from './faqPage';

  export const schemaTypes = [
    event,
    siteSettings,
    homePage,
    watersportActivity,
    faqPage,
  ];