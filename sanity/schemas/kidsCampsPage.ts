import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'kidsCampsPage',
  title: 'Kids & Camps pagina',
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
        { name: 'brochureUrl', title: 'Brochure PDF URL', type: 'url', description: 'Link naar downloadbare brochure PDF. Laat leeg om knop te verbergen.' },
        {
          name: 'bookingWidgetId',
          title: 'Booking widget ID (MICE Operations)',
          type: 'string',
          description: 'Widget-ID van Gijs voor het aanmeldsysteem. Zolang dit leeg is, staat de boekknop uitgeschakeld op de site.',
        },
      ],
    }),
    defineField({
      name: 'weekprogramma',
      title: 'Weekprogramma sectie',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Subtitel', type: 'string' },
        {
          name: 'days',
          title: 'Dagen',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'dayLabel', title: 'Dag (kort, bijv. MA)', type: 'string' },
              { name: 'title', title: 'Titel', type: 'string' },
              { name: 'description', title: 'Beschrijving', type: 'text', rows: 3 },
            ],
          }],
        },
      ],
    }),
    defineField({
      name: 'veiligheid',
      title: 'Veiligheid & vertrouwd sectie',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Subtitel', type: 'string' },
        {
          name: 'punten',
          title: 'Veiligheidspunten',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'title', title: 'Titel', type: 'string' },
              { name: 'description', title: 'Beschrijving', type: 'text', rows: 3 },
            ],
          }],
        },
        {
          name: 'stats',
          title: 'Statistieken (bijv. 4 begeleiders, 20 max kinderen)',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'number', title: 'Cijfer (bijv. "4" of "1:5")', type: 'string' },
              { name: 'label', title: 'Label', type: 'string' },
            ],
          }],
        },
      ],
    }),
    defineField({
      name: 'pricing',
      title: 'Prijs sectie',
      type: 'object',
      fields: [
        { name: 'price', title: 'Prijs (bijv. "€375")', type: 'string' },
        { name: 'priceUnit', title: 'Eenheid (bijv. "per kind per week")', type: 'string' },
        { name: 'priceNote', title: 'Toelichting (bijv. "Alles inclusief, geen verborgen kosten")', type: 'string' },
        { name: 'includedItems', title: 'Inbegrepen (lijst)', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
    defineField({
      name: 'meenemen',
      title: 'Wat neem je mee sectie',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'items', title: "Mee te nemen items", type: 'array', of: [{ type: 'string' }] },
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
      name: 'faqImage',
      title: 'FAQ afbeelding (links naast de vragen)',
      type: 'image',
      options: { hotspot: true },
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
