import { Suspense } from 'react'
import { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { Tour, TourCategory, CATEGORY_MAP } from '@/types'
import TourCard from '@/components/shared/TourCard'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { Compass, Search } from 'lucide-react'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Tüm Turlar | Gezi Vitrinim — Malatya Çıkışlı Turlar',
  description: 'Malatya çıkışlı günübirlik, konaklamalı, yurt dışı ve kültür turlarını keşfet. 100+ seçenek, en uygun fiyatlar.',
  keywords: ['Malatya tur', 'günübirlik tur', 'konaklamalı tur', 'kültür turu', 'yurt dışı tur', 'gezi vitrinim'],
  openGraph: {
    title: 'Tüm Turlar | Gezi Vitrinim',
    description: 'Malatya çıkışlı 100\'den fazla tur seçeneği.',
    type: 'website',
  },
}

const CATEGORY_TABS: { value: TourCategory | 'all'; label: string }[] = [
  { value: 'all',         label: 'Tümü' },
  { value: 'gunubirlik',  label: 'Günübirlik' },
  { value: 'konaklamali', label: 'Konaklamalı' },
  { value: 'yurtdisi',    label: 'Yurt Dışı' },
  { value: 'kultur',      label: 'Kültür Turu' },
]

async function getAllTours(kategori?: string): Promise<Tour[]> {
  const filter = kategori && kategori !== 'all'
    ? `_type == "tour" && category == "${kategori}"`
    : `_type == "tour"`
  const query = `*[${filter}] | order(_createdAt desc) {
    _id, title, slug, category, price, departureLocation, coverImage, dates
  }`
  return client.fetch(query, {}, { next: { revalidate: 3600 } })
}

interface ToursPageProps {
  searchParams: Promise<{ kategori?: string }>
}

export default async function ToursPage({ searchParams }: ToursPageProps) {
  const { kategori: kategoriParam } = await searchParams
  const kategori = kategoriParam ?? 'all'
  const tours = await getAllTours(kategori)

  const activeLabel = CATEGORY_TABS.find(t => t.value === kategori)?.label ?? 'Tüm Turlar'

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Page Hero */}
      <section className="gradient-hero pt-36 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/15 rounded-full blur-[80px]" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Compass className="w-4 h-4 text-blue-400" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Malatya Çıkışlı</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
              {kategori !== 'all' ? (
                <>
                  <span className="bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B, #F43F5E)' }}>
                    {activeLabel}
                  </span>
                  {' '}Turlarımız
                </>
              ) : (
                <>Tüm <span className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #60A5FA, #A78BFA)' }}>
                  Turlarımız
                </span></>
              )}
            </h1>
            <p className="text-white/60 text-lg font-medium">
              {tours.length} tur bulundu · Fiyatlar kişi başı başlangıç fiyatıdır.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="bg-white sticky top-0 z-40 border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-4">
            {CATEGORY_TABS.map((tab) => {
              const isActive = tab.value === kategori
              const catInfo = tab.value !== 'all' ? CATEGORY_MAP[tab.value] : null
              return (
                <a
                  key={tab.value}
                  href={`/turlar${tab.value !== 'all' ? `?kategori=${tab.value}` : ''}`}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                    isActive
                      ? 'text-white shadow-lg'
                      : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
                  }`}
                  style={isActive ? {
                    background: catInfo
                      ? `linear-gradient(135deg, ${catInfo.color}, ${catInfo.color}CC)`
                      : 'linear-gradient(135deg, #2563EB, #1D4ED8)',
                    boxShadow: catInfo
                      ? `0 8px 24px ${catInfo.color}40`
                      : '0 8px 24px rgba(37,99,235,0.4)',
                  } : undefined}
                >
                  {tab.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-6 max-w-7xl">
          {tours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {tours.map((tour, index) => (
                <TourCard key={tour._id} tour={tour} index={index} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                <Search className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Bu kategoride tur bulunamadı</h3>
              <p className="text-slate-500 mb-8">Diğer kategorilere göz atabilir veya bizimle iletişime geçebilirsiniz.</p>
              <a href="/turlar" className="btn-primary rounded-2xl">
                Tüm Turları Gör
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 section-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h3 className="text-2xl font-black text-slate-900 mb-3">
            Aradığınız turu bulamadınız mı?
          </h3>
          <p className="text-slate-500 mb-8">
            Size özel tur programı hazırlayabiliriz. WhatsApp'tan bize yazın!
          </p>
          <a
            href="https://wa.me/905000000000?text=Merhaba, özel tur planı istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex rounded-2xl text-base px-10 py-4"
          >
            Özel Tur Talep Et
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber="905000000000" />
    </main>
  )
}
