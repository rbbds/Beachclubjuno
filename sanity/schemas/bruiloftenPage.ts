import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'bruiloftenPage',
  title: 'Bruiloften pagina',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero sectie',
      type: 'object',
      fields: [
        { name: 'image', title: 'Achtergrondafbeelding', type: 'image', options: { hotspot: true } },
        { name: 'videoUrl', title: 'Video URL (optioneel, overschrijft afbeelding)', type: 'url', description: 'Vimeo of directe MP4 URL. Laat leeg om afbeelding te gebruiken.' },
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Subtitel', type: 'string' },
      ],
    }),
    defineField({
      name: 'intro',
      title: 'Intro sectie',
      type: 'object',
      fields: [
        { name: 'label', title: 'Label (klein, boven titel)', type: 'string' },
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'paragraph', title: 'Tekst', type: 'text', rows: 5 },
        { name: 'usps', title: 'Checkmarks (USPs)', type: 'array', of: [{ type: 'string' }] },
        { name: 'ctaPrimary', title: 'Primaire knop tekst', type: 'string' },
        { name: 'ctaSecondary', title: 'Secondaire knop tekst', type: 'string' },
      ],
    }),
    defineField({
      name: 'momenten',
      title: 'Momenten sectie',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Subtitel', type: 'string' },
        {
          name: 'cards',
          title: 'Moment cards',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'title', title: 'Titel', type: 'string' },
              { name: 'subtitle', title: 'Subtitel', type: 'string' },
              { name: 'image', title: 'Afbeelding', type: 'image', options: { hotspot: true } },
            ],
          }],
        },
      ],
    }),
    defineField({
      name: 'regelingen',
      title: 'Hoe wij het regelen sectie',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Subtitel', type: 'string' },
        {
          name: 'cards',
          title: 'Regeling cards',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'title', title: 'Titel', type: 'string' },
              { name: 'description', title: 'Beschrijving', type: 'text', rows: 3 },
              { name: 'image', title: 'Afbeelding', type: 'image', options: { hotspot: true } },
            ],
          }],
        },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact sectie',
      type: 'object',
      fields: [
        { name: 'name', title: 'Naam contactpersoon', type: 'string' },
        { name: 'role', title: 'Functie', type: 'string' },
        { name: 'intro', title: 'Introductietekst', type: 'text', rows: 4 },
        { name: 'photo', title: 'Foto', type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'fotostrip',
      title: 'Foto strip',
      type: 'object',
      fields: [
        { name: 'image', title: 'Afbeelding', type: 'image', options: { hotspot: true } },
        { name: 'text', title: 'Overlay tekst', type: 'string' },
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ vragen',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'question', title: 'Vraag', type: 'string' },
          { name: 'answer', title: 'Antwoord', type: 'text', rows: 3 },
        ],
      }],
    }),
  ],
});
