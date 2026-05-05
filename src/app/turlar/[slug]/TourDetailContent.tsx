import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { tourBySlugQuery } from '@/lib/sanity/queries'
import { urlForImage } from '@/sanity/lib/image'
import { Tour, CATEGORY_MAP } from '@/types'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import TourItinerary from '@/components/tour/TourItinerary'
import { Check, X, MapPin, Calendar, Users, ChevronRight, Home } from 'lucide-react'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface Props {
  slug: string
}

export async function TourDetailContent({ slug }: Props) {
  const tour: Tour = await client.fetch(tourBySlugQuery, { slug }, { next: { revalidate: 3600 } })

  if (!tour) notFound()

  const catInfo = CATEGORY_MAP[tour.category]
  const nearestDate = tour.dates?.[0]
    ? new Date(tour.dates[0]).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
    : null

  // JSON-LD Schema (TouristTrip)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": tour.title,
    "description": `${tour.departureLocation} çıkışlı ${tour.title}`,
    "image": urlForImage(tour.coverImage).url(),
    "touristType": tour.category,
    "offers": {
      "@type": "Offer",
      "price": tour.price,
      "priceCurrency": "TRY",
      "availability": "https://schema.org/InStock"
    },
    "itinerary": tour.itinerary?.map(day => ({
      "@type": "ItemList",
      "name": day.title
    }))
  }

  // BreadcrumbList JSON-LD
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://gezivitrinim.com" },
      { "@type": "ListItem", "position": 2, "name": "Turlar", "item": "https://gezivitrinim.com/turlar" },
      { "@type": "ListItem", "position": 3, "name": tour.title, "item": `https://gezivitrinim.com/turlar/${slug}` },
    ]
  }

  const waMessage = encodeURIComponent(`Merhaba, "${tour.title}" turu hakkında bilgi almak istiyorum.`)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />

      {/* Hero Image */}
      <section className="relative h-[55vh] min-h-[380px]">
        <Image
          src={urlForImage(tour.coverImage).width(1920).height(900).url()}
          alt={tour.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-0 right-0">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex items-center gap-2 text-white/60 text-sm font-medium">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Ana Sayfa
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/turlar" className="hover:text-white transition-colors">Turlar</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white font-bold truncate max-w-[200px]">{tour.title}</span>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container mx-auto max-w-7xl">
            {catInfo && (
              <span className={`badge-cat ${catInfo.badgeClass} mb-4 inline-flex shadow-sm`}>
                {catInfo.label}
              </span>
            )}
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
              {tour.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-white/80 text-sm font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{tour.departureLocation}</span>
              </div>
              {nearestDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>En Yakın: {nearestDate}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-bold">Sınırlı Kontenjan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 section-light">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left: Details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Itinerary */}
              {tour.itinerary && tour.itinerary.length > 0 && (
                <TourItinerary itinerary={tour.itinerary} />
              )}

              {/* Included / Excluded */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl border border-slate-100 p-7 shadow-sm">
                  <h4 className="text-xl font-black text-slate-900 flex items-center gap-2.5 mb-6">
                    <div className="w-8 h-8 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    Dahil Hizmetler
                  </h4>
                  {tour.included && tour.included.length > 0 ? (
                    <ul className="space-y-3">
                      {tour.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <div className="w-5 h-5 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-emerald-600" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-400 text-sm">Bilgi için bizi arayın.</p>
                  )}
                </div>

                <div className="bg-white rounded-3xl border border-slate-100 p-7 shadow-sm">
                  <h4 className="text-xl font-black text-slate-900 flex items-center gap-2.5 mb-6">
                    <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                    Dahil Olmayanlar
                  </h4>
                  {tour.excluded && tour.excluded.length > 0 ? (
                    <ul className="space-y-3">
                      {tour.excluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <div className="w-5 h-5 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <X className="w-3 h-3 text-red-500" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-400 text-sm">Bilgi için bizi arayın.</p>
                  )}
                </div>
              </div>

              {/* Dates List */}
              {tour.dates && tour.dates.length > 0 && (
                <div className="bg-white rounded-3xl border border-slate-100 p-7 shadow-sm">
                  <h4 className="text-xl font-black text-slate-900 flex items-center gap-2.5 mb-6">
                    <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-blue-600" />
                    </div>
                    Kalkış Tarihleri
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {tour.dates.map((d, i) => (
                      <span key={i} className="px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-2xl text-sm font-bold">
                        {new Date(d).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Sticky Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-7 space-y-6">
                  {/* Price */}
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">Başlangıç Fiyatı</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-blue-700">
                        ₺{tour.price.toLocaleString('tr-TR')}
                      </span>
                      <span className="text-slate-400 text-sm">/kişi</span>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-3 py-4 border-t border-b border-slate-100">
                    {[
                      { icon: MapPin,    label: 'Kalkış', value: tour.departureLocation },
                      { icon: Calendar,  label: 'En Yakın Tarih', value: nearestDate ?? 'Bize Sorun' },
                      { icon: Users,     label: 'Kontenjan', value: 'Sınırlı', bold: true, color: 'text-emerald-600' },
                    ].map((row, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-slate-500 font-medium">
                          <row.icon className="w-4 h-4" />
                          {row.label}
                        </span>
                        <span className={`font-black ${row.color ?? 'text-slate-900'}`}>{row.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href={`https://wa.me/905000000000?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center text-base py-4 rounded-2xl"
                  >
                    WhatsApp'tan Bilgi Al
                  </a>
                  <a
                    href="tel:+905000000000"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-blue-700 text-sm bg-blue-50 hover:bg-blue-100 transition-colors border border-blue-100"
                  >
                    Hemen Ara
                  </a>
                  <p className="text-[10px] text-center text-slate-400">
                    KDV dahil fiyat. TÜRSAB güvencesi altındadır.
                  </p>
                </div>

                {/* Category badge card */}
                {catInfo && (
                  <div className={`rounded-2xl p-5 border`} style={{ backgroundColor: catInfo.bg, borderColor: catInfo.color + '30' }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: catInfo.color }}>
                      Tur Kategorisi
                    </p>
                    <p className="font-black text-slate-900">{catInfo.label}</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber="905000000000" tourName={tour.title} />
    </>
  )
}
