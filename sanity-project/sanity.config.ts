// import { defineConfig } from 'sanity';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: '8eio6dub',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  
  schema: {
    types: schemaTypes,
  },
});
