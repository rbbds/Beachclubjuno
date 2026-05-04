import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'zakelijkeEventsPage',
  title: 'Zakelijke Events pagina',
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
      name: 'aanbod',
      title: 'Aanbod sectie',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Subtitel', type: 'string' },
        { name: 'brochureUrl', title: 'Brochure PDF URL', type: 'url', description: 'Link naar downloadbare brochure PDF. Laat leeg om knop te verbergen.' },
        {
          name: 'cards',
          title: 'Event cards',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'tagline', title: 'Tagline (klein, boven titel)', type: 'string' },
              { name: 'title', title: 'Titel', type: 'string' },
              { name: 'image', title: 'Afbeelding', type: 'image', options: { hotspot: true } },
              { name: 'bullets', title: 'Checkmarks', type: 'array', of: [{ type: 'string' }] },
              { name: 'drawerTitle', title: 'Drawer titel', type: 'string' },
              { name: 'drawerDescription', title: 'Drawer beschrijving', type: 'text', rows: 4 },
              { name: 'drawerBullets', title: 'Drawer checkmarks', type: 'array', of: [{ type: 'string' }] },
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
      name: 'waarom',
      title: 'Waarom Juno sectie',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'usps', title: 'Checkmarks', type: 'array', of: [{ type: 'string' }] },
        { name: 'image', title: 'Afbeelding', type: 'image', options: { hotspot: true } },
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
    defineField({
      name: 'fotostrip1',
      title: 'Foto strip 1 (halverwege)',
      type: 'object',
      fields: [
        { name: 'text', title: 'Overlay tekst', type: 'string' },
        { name: 'image', title: 'Afbeelding', type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'fotostrip2',
      title: 'Foto strip 2 (onder waarom sectie)',
      type: 'object',
      fields: [
        { name: 'text', title: 'Overlay tekst', type: 'string' },
        { name: 'image', title: 'Afbeelding', type: 'image', options: { hotspot: true } },
      ],
    }),
  ],
});
