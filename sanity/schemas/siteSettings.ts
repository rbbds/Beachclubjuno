import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Website-instellingen',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Telefoonnummer',
      type: 'string'
    }),
    defineField({
      name: 'email',
      title: 'E-mailadres',
      type: 'string'
    }),
    defineField({
      name: 'address',
      title: 'Adres',
      type: 'object',
      fields: [
        { name: 'street', title: 'Straat + huisnummer', type: 'string' },
        { name: 'postal', title: 'Postcode', type: 'string' },
        { name: 'city', title: 'Stad', type: 'string' },
      ],
    }),
    defineField({
      name: 'openingHours',
      title: 'Openingstijden',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'days', title: 'Dagen (bijv. Ma - Do)', type: 'string' },
          { name: 'hours', title: 'Tijden (bijv. 10:00 - 22:00)', type: 'string' },
        ],
      }],
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url'
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url'
    }),
    defineField({
      name: 'mapsEmbed',
      title: 'Google Maps iframe src URL',
      type: 'url'
    }),
  ],
});
