export interface SanityImageAsset {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface ItineraryDay {
  _key: string
  day: string
  title: string
  description: string
}

export type TourCategory = 'gunubirlik' | 'konaklamali' | 'yurtdisi' | 'kultur'

export interface Tour {
  _id: string
  _createdAt: string
  title: string
  slug: {
    current: string
  }
  category: TourCategory
  departureLocation: string
  price: number
  dates: string[]
  coverImage: SanityImageAsset
  galleryImages: SanityImageAsset[]
  itinerary: ItineraryDay[]
  included: string[]
  excluded: string[]
}

export const CATEGORY_MAP: Record<TourCategory, { label: string; color: string; bg: string; badgeClass: string }> = {
  gunubirlik:  { label: 'Günübirlik',  color: '#2563EB', bg: '#EFF6FF', badgeClass: 'badge-gunubirlik' },
  konaklamali: { label: 'Konaklamalı', color: '#059669', bg: '#ECFDF5', badgeClass: 'badge-konaklamali' },
  yurtdisi:    { label: 'Yurt Dışı',   color: '#7C3AED', bg: '#F5F3FF', badgeClass: 'badge-yurtdisi' },
  kultur:      { label: 'Kültür Turu', color: '#EA580C', bg: '#FFF7ED', badgeClass: 'badge-kultur' },
}
