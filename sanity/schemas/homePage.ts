import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero sectie',
      type: 'object',
      fields: [
        { name: 'image', title: 'Achtergrondafbeelding', type: 'image',
          options: { hotspot: true } },
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'subtitle', title: 'Subtitel', type: 'string' },
        { name: 'ctaLabel', title: 'Knoptekst', type: 'string' },
      ],
    }),
    defineField({
      name: 'intro',
      title: 'Intro sectie',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'paragraph1', title: 'Alinea 1', type: 'text', rows: 4 },
        { name: 'paragraph2', title: 'Alinea 2', type: 'text', rows: 4 },
        { name: 'image', title: 'Afbeelding', type: 'image',
          options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'restaurant',
      title: 'Restaurant sectie',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'description', title: 'Beschrijving', type: 'text', rows: 4 },
        { name: 'menuUrl', title: 'Menukaart PDF URL', type: 'url' },
        { name: 'image', title: 'Afbeelding', type: 'image',
          options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'programma',
      title: 'Programma sectie',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Subtitel', type: 'string' },
      ],
    }),
    defineField({
      name: 'events',
      title: 'Events & Verhuur sectie',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Subtitel', type: 'string' },
      ],
    }),
    defineField({
      name: 'watersport',
      title: 'Watersport sectie',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Subtitel', type: 'string' },
      ],
    }),
    defineField({
      name: 'gallery',
      title: "Galerij (max. 10 foto's)",
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: r => r.max(10),
    }),
  ],
});
