import { defineType, defineField } from 'sanity';

const dishField = {
  type: 'object',
  fields: [
    { name: 'name', title: 'Naam', type: 'string' },
    { name: 'price', title: 'Prijs (bijv. €14)', type: 'string' },
    { name: 'description', title: 'Omschrijving', type: 'string' },
    { name: 'isFavorite', title: 'Favoriet?', type: 'boolean', initialValue: false },
    { name: 'isVegan', title: 'Vegan?', type: 'boolean', initialValue: false },
  ],
  preview: { select: { title: 'name', subtitle: 'price' } },
};

const categoryField = {
  type: 'object',
  fields: [
    { name: 'title', title: 'Categorie naam', type: 'string' },
    { name: 'timeLabel', title: 'Tijdslabel (bijv. 11.00 – 21.00)', type: 'string' },
    { name: 'dishes', title: 'Gerechten', type: 'array', of: [dishField] },
  ],
  preview: { select: { title: 'title' } },
};

export default defineType({
  name: 'menuPage',
  title: 'Menukaart',
  type: 'document',
  fields: [
    defineField({
      name: 'etenCategories',
      title: "Menukaart — categorieën",
      description: 'Om te delen, Bocadillos, Salades, Pizza, Pasta, Dessert, etc.',
      type: 'array',
      of: [categoryField],
    }),
    defineField({
      name: 'bitesCategories',
      title: "Bites & Dranken — categorieën",
      description: 'Bites, Specials, Cocktails, Dranken, Bieren & Wijnen, etc.',
      type: 'array',
      of: [categoryField],
    }),
    defineField({
      name: 'footerText',
      title: 'Footer tekst',
      type: 'text',
      rows: 3,
      initialValue: 'JUNO staat voor een nieuw begin en voor het vieren van het leven. Van intieme diners tot volle dansvloeren en bruiloften op het strand.',
    }),
    defineField({
      name: 'footerTag',
      title: 'Footer tagline',
      type: 'string',
      initialValue: 'If you know, JUNO.',
    }),
  ],
});
