import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { deskStructure } from './deskStructure';

export default defineConfig({
  name: 'beachclub-juno',
  title: 'Beachclub Juno CMS',
  projectId: '3rey3gs4',
  dataset: 'production',
  plugins: [
    deskTool({ structure: deskStructure }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});