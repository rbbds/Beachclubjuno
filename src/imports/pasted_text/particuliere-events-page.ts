Make the following changes. Do not change anything else.

--- FILE: sanity/schemas/particuliereEventsPage.ts (CREATE) ---

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'particuliereEventsPage',
  title: 'Particuliere Events pagina',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero sectie',
      type: 'object',
      fields: [
        { name: 'image', title: 'Achtergrondafbeelding', type: 'image', options: { hotspot: true } },
        { name: 'videoUrl', title: 'Video URL (optioneel, overschrijft afbeelding)', type: 'url', description: 'Directe MP4 URL. Laat leeg om afbeelding te gebruiken.' },
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
  ],
});

--- FILE: sanity/schemas/index.ts (UPDATE — full replacement) ---

import event from './event';
import artist from './artist';
import siteSettings from './siteSettings';
import homePage from './homePage';
import watersportActivity from './watersportActivity';
import faqPage from './faqPage';
import bruiloftenPage from './bruiloftenPage';
import zakelijkeEventsPage from './zakelijkeEventsPage';
import particuliereEventsPage from './particuliereEventsPage';

export const schemaTypes = [
  event,
  artist,
  siteSettings,
  homePage,
  watersportActivity,
  faqPage,
  bruiloftenPage,
  zakelijkeEventsPage,
  particuliereEventsPage,
];

--- FILE: sanity/deskStructure.ts (UPDATE — full replacement) ---

import type { StructureBuilder } from 'sanity/structure';

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Beheer')
    .items([
      S.listItem()
        .title('Website-instellingen')
        .icon(() => '⚙️')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Homepage')
        .icon(() => '🏠')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('Bruiloften')
        .icon(() => '💍')
        .child(S.document().schemaType('bruiloftenPage').documentId('bruiloftenPage')),
      S.listItem()
        .title('Zakelijke Events')
        .icon(() => '💼')
        .child(S.document().schemaType('zakelijkeEventsPage').documentId('zakelijkeEventsPage')),
      S.listItem()
        .title('Particuliere Events')
        .icon(() => '🎉')
        .child(S.document().schemaType('particuliereEventsPage').documentId('particuliereEventsPage')),
      S.listItem()
        .title('FAQ pagina')
        .icon(() => '❓')
        .child(S.document().schemaType('faqPage').documentId('faqPage')),
      S.divider(),
      S.documentTypeListItem('event').title('Evenementen').icon(() => '🎭'),
      S.documentTypeListItem('watersportActivity').title('Watersport activiteiten').icon(() => '🏄'),
    ]);