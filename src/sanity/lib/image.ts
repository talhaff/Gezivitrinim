import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageAsset } from '@/types'
import { projectId, dataset } from './client'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '36mahx0k',
  dataset: dataset || 'production',
})

// We use `as any` on the builder call because @sanity/image-url expects
// Sanity's open `Image` type (with an index signature), but our
// SanityImageAsset is structurally identical and safe to pass here.
export const urlForImage = (source: SanityImageAsset) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return imageBuilder?.image(source as any).auto('format').fit('max')
}
