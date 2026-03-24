import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'watersportActivity',
  title: 'Watersport activiteit',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: r => r.required()
    }),
    defineField({
      name: 'cardTitle',
      title: 'Kaarttitel (kort)',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Afbeelding',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'description',
      title: 'Beschrijving',
      type: 'text',
      rows: 6
    }),
    defineField({
      name: 'extraLine',
      title: 'Extra alinea (partner-vermelding)',
      type: 'string'
    }),
    defineField({
      name: 'buttonText',
      title: 'Knoptekst',
      type: 'string'
    }),
    defineField({
      name: 'buttonLink',
      title: 'Knop URL',
      type: 'url'
    }),
    defineField({
      name: 'order',
      title: 'Volgorde',
      type: 'number'
    }),
  ],
  preview: { select: { title: 'title', media: 'image' } },
});
