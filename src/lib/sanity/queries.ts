import { groq } from 'next-sanity'

export const allToursQuery = groq`*[_type == "tour"] {
  _id,
  title,
  slug,
  category,
  departureLocation,
  price,
  dates,
  coverImage,
  itinerary
} | order(_createdAt desc)`

export const tourBySlugQuery = groq`*[_type == "tour" && slug.current == $slug][0] {
  ...,
  galleryImages
}`
