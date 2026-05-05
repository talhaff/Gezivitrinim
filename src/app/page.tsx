import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/home/Hero'
import FeaturedTours from '@/components/home/FeaturedTours'
import FeaturedToursSkeleton from '@/components/home/FeaturedToursSkeleton'
import { Suspense } from 'react'
import Categories from '@/components/home/Categories'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { ShieldCheck, Headphones, Wallet, Award, MessageCircle, ArrowRight } from 'lucide-react'

const trustItems = [
  {
    icon: ShieldCheck,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    title: 'TÜRSAB Güvencesi',
    desc: 'Tüm turlarımız TÜRSAB lisanslı, güvende seyahat edin.'
  },
  {
    icon: Wallet,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    title: 'En İyi Fiyat',
    desc: 'Fiyat farkı bulursanız aynı fiyata yaparız.'
  },
  {
    icon: Headphones,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    title: '7/24 Destek',
    desc: 'Tur sırasında ve öncesinde her zaman yanınızdayız.'
  },
  {
    icon: Award,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    title: '15 Yıl Deneyim',
    desc: 'Malatya\'nın en köklü turizm acentesi olarak hizmetinizdeyiz.'
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* === HERO === */}
      <Hero />

      {/* === CATEGORIES === */}
      <Categories />

      {/* === FEATURED TOURS (Ana Odak) === */}
      <Suspense fallback={<FeaturedToursSkeleton />}>
        <FeaturedTours />
      </Suspense>

      {/* === TRUST SECTION === */}
      <section className="py-20 section-dark relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Neden{' '}
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #60A5FA, #A78BFA)' }}>
                Gezi Vitrinim?
              </span>
            </h2>
            <p className="text-slate-400 font-medium">
              Güvenli, kaliteli ve unutulmaz tatil deneyimi için doğru adres.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 space-y-4 hover:bg-white/8 hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-white text-lg mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA SECTION === */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-6 max-w-4xl">
          <div
            className="rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #F43F5E 100%)' }}
          >
            {/* Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -ml-24 -mb-24" />

            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                  Hayalin Tatili<br />Bir Mesaj Uzağında!
                </h2>
                <p className="text-white/80 text-lg font-medium">
                  Uzman ekibimiz size özel tur planı hazırlasın.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/905000000000?text=Merhaba, tur planlamak istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 h-14 px-10 bg-white text-emerald-700 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp'tan Yaz
                </a>
                <a
                  href="/turlar"
                  className="flex items-center gap-2 h-14 px-10 bg-white/15 border border-white/30 text-white font-black rounded-2xl hover:bg-white/25 transition-all"
                >
                  Tüm Turları Gör
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber="905000000000" />
    </main>
  )
}
