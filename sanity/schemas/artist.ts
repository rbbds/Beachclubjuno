import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'artist',
  title: 'Artiest',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Naam',
      type: 'string',
      validation: r => r.required()
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 3
    }),
  ],
});
