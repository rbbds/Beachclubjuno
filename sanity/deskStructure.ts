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
        .title('FAQ pagina')
        .icon(() => '❓')
        .child(S.document().schemaType('faqPage').documentId('faqPage')),
      S.divider(),
      S.documentTypeListItem('event').title('Evenementen').icon(() => '🎭'),
      S.documentTypeListItem('watersportActivity').title('Watersport activiteiten').icon(() => '🏄'),
    ]);
