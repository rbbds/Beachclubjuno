import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Evenement',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: r => r.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    }),
    defineField({
      name: 'date',
      title: 'Datum',
      type: 'date',
      validation: r => r.required()
    }),
    defineField({
      name: 'time',
      title: 'Aanvangstijd (bijv. 20:30)',
      type: 'string'
    }),
    defineField({
      name: 'doorsOpen',
      title: 'Deuren open (bijv. 19:30)',
      type: 'string'
    }),
    defineField({
      name: 'price',
      title: 'Prijs (bijv. €32,50)',
      type: 'string'
    }),
    defineField({
      name: 'category',
      title: 'Categorie',
      type: 'string',
      options: {
        list: ['Comedy', 'Jazz', 'Theater', 'Pop & Dans', 'Speciaal'],
      },
    }),
    defineField({
      name: 'description',
      title: 'Beschrijving',
      type: 'text',
      rows: 5
    }),
    defineField({
      name: 'image',
      title: 'Afbeelding',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'artist',
      title: 'Artiest',
      type: 'artist'
    }),
    defineField({
      name: 'featured',
      title: 'Uitgelicht op homepage?',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'order',
      title: 'Volgorde (homepage)',
      type: 'number'
    }),
    defineField({
      name: 'ticket_url',
      title: 'Ticketlink (URL)',
      type: 'url',
      description: 'Laat leeg als het evenement gratis is of geen tickets vereist.',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'date', media: 'image' },
  },
});
