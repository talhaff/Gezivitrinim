import { client } from '@/sanity/lib/client'
import TourCard from '@/components/shared/TourCard'
import { Tour } from '@/types'
import { Compass, ArrowRight } from 'lucide-react'
import Link from 'next/link'

async function getTours(): Promise<Tour[]> {
  const query = `*[_type == "tour"] | order(_createdAt desc)[0..8] {
    _id,
    title,
    slug,
    category,
    price,
    departureLocation,
    coverImage,
    dates
  }`
  return client.fetch(query, {}, { next: { revalidate: 3600 } })
}

export default async function FeaturedTours() {
  const tours = await getTours()

  if (!tours || tours.length === 0) return null

  return (
    <section className="py-20 section-light">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-[0.2em]">
              <Compass className="w-3.5 h-3.5" />
              Öne Çıkan Turlar
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              En Çok Tercih Edilen
              <br />
              <span style={{ backgroundImage: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
                className="bg-clip-text text-transparent">
                Rotalarımız
              </span>
            </h2>
          </div>
          <Link
            href="/turlar"
            className="inline-flex items-center gap-2 text-blue-600 font-black hover:text-blue-700 transition-colors group flex-shrink-0"
          >
            Tüm Turları Gör
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tours.map((tour, index) => (
            <TourCard key={tour._id} tour={tour} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        {tours.length >= 6 && (
          <div className="mt-12 text-center">
            <Link
              href="/turlar"
              className="btn-primary inline-flex text-base px-10 py-4 rounded-2xl"
            >
              <Compass className="w-5 h-5" />
              Tüm {tours.length}+ Turu Gör
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
