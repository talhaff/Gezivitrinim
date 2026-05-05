import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '36mahx0k'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'Gezi Vitrinim Yönetim Paneli',

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schema.types,
  },
})
