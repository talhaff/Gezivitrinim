import { Metadata } from 'next'
import { Suspense } from 'react'
import { client } from '@/sanity/lib/client'
import { tourBySlugQuery } from '@/lib/sanity/queries'
import { urlForImage } from '@/sanity/lib/image'
import { Tour } from '@/types'
import TourDetailSkeleton from '@/components/tour/TourDetailSkeleton'
import { TourDetailContent } from './TourDetailContent'

export const revalidate = 3600

interface Props {
  params: Promise<{ slug: string }>
}

// Dinamik Meta Veri (SEO)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour: Tour = await client.fetch(tourBySlugQuery, { slug }, { next: { revalidate: 3600 } })
  
  if (!tour) return { 
    title: 'Tur Bulunamadı | Gezi Vitrinim',
    description: 'Aradığınız tur sayfası bulunamadı.'
  }

  const imageUrl = urlForImage(tour.coverImage).url()

  return {
    title: `${tour.title} - Tur Detayları | Gezi Vitrinim`,
    description: `${tour.departureLocation} çıkışlı ${tour.title}. Detaylar, program, fiyat ve rezervasyon bilgisi. ₺${tour.price?.toLocaleString('tr-TR')}'den başlayan fiyatlar.`,
    keywords: [tour.title, tour.category, tour.departureLocation, 'tur', 'seyahat', 'Malatya'],
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url: `https://gezivitrinim.com/turlar/${slug}`,
      siteName: 'Gezi Vitrinim',
      title: `${tour.title} | Gezi Vitrinim`,
      description: `${tour.departureLocation} çıkışlı ${tour.title}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: tour.title,
          type: 'image/jpeg',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tour.title} | Gezi Vitrinim`,
      description: `${tour.departureLocation} çıkışlı tur`,
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://gezivitrinim.com/turlar/${slug}`,
    },
  }
}

export default async function TourDetail({ params }: Props) {
  const { slug } = await params
  return (
    <main className="min-h-screen">
      <Suspense fallback={<TourDetailSkeleton />}>
        <TourDetailContent slug={slug} />
      </Suspense>
    </main>
  )
}
