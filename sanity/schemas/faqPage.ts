import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'faqPage',
  title: 'FAQ pagina',
  type: 'document',
  fields: [
    defineField({
      name: 'groups',
      title: 'Vraaggroepen',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Groepsnaam', type: 'string' },
          {
            name: 'items',
            title: 'Vragen',
            type: 'array',
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
