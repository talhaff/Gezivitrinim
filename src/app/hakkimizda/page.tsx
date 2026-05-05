import Image from 'next/image'
import { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { Award, Users, MapPin, Heart, Star, ShieldCheck, Compass } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hakkımızda | Gezi Vitrinim — Malatya Turizm Acentesi',
  description: 'Malatya\'nın köklü turizm acentesi Gezi Vitrinim hakkında. 15 yıllık deneyim, 20.000+ mutlu misafir, TÜRSAB lisanslı hizmet.',
}

const milestones = [
  { year: '2009', title: 'Kuruluş', desc: 'Malatya\'da küçük bir ofisle yolculuğumuza başladık.' },
  { year: '2013', title: 'Büyüme', desc: 'İlk 5.000 müşterimize ulaştık, yurt dışı turları ekledik.' },
  { year: '2018', title: 'TÜRSAB', desc: 'TÜRSAB A grubu seyahat acentesi belgesi aldık.' },
  { year: '2024', title: 'Dijital', desc: 'Dijital dönüşümle daha fazla kişiye ulaşmaya başladık.' },
]

const team = [
  { name: 'Battal Özdemir', role: 'Kurucu & Genel Müdür', initials: 'BÖ', color: 'from-blue-600 to-blue-800' },
  { name: 'Taha Özdemir',   role: 'Tur Koordinatörü', initials: 'TÖ', color: 'from-purple-600 to-violet-800' },
  { name: 'Gezi Vitrinim',  role: 'Satış Ekibi', initials: 'GV', color: 'from-emerald-500 to-green-700' },
]

const values = [
  { icon: ShieldCheck, title: 'Güven',      desc: 'TÜRSAB güvencesi altında, şeffaf fiyatlarla hizmet.',   color: 'text-blue-600',   bg: 'bg-blue-50' },
  { icon: Heart,       title: 'Tutku',      desc: 'Seyahati seviyoruz. Bu tutku her turumuza yansıyor.',   color: 'text-red-500',    bg: 'bg-red-50' },
  { icon: Star,        title: 'Kalite',     desc: '4.9/5 puan ortalamasıyla kalite bizim önceliğimiz.',     color: 'text-amber-500',  bg: 'bg-amber-50' },
  { icon: Compass,     title: 'Keşif',      desc: 'Yeni rotalar, yeni deneyimler — her zaman keşfediyoruz.', color: 'text-emerald-600', bg: 'bg-emerald-50' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-[#0F172A]">
        {/* Animated Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="w-full h-full relative animate-zoom-bg">
            <Image
              src="/images/pages/about_bg.png"
              alt="Hakkımızda Arka Plan"
              fill
              className="object-cover object-center"
              priority
              quality={90}
            />
          </div>
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
        </div>

        {/* Ambient Orbs */}
        <div className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-60">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/20 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Malatya, Türkiye</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Biz Kimiz?
          </h1>
          <p className="text-white/70 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
            2009'dan bu yana Malatya'nın en güvenilir turizm acentesi olarak{' '}
            <span className="text-white font-bold">20.000'den fazla misafirimizle</span>{' '}
            hayallerini gerçeğe dönüştürüyoruz.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-light py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-12">
            {[
              { value: '15+', label: 'Yıllık Deneyim', icon: Award },
              { value: '20K+', label: 'Mutlu Misafir',  icon: Users },
              { value: '500+', label: 'Başarılı Tur',   icon: Compass },
              { value: '4.9',  label: 'Müşteri Puanı',  icon: Star },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-3xl p-7 text-center shadow-lg border border-slate-100">
                <s.icon className="w-6 h-6 text-blue-500 mx-auto mb-3" />
                <p className="text-4xl font-black text-slate-900">{s.value}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 section-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-slate-900">
                Hikayemiz
              </h2>
              <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                <p>
                  2009 yılında Malatya'da küçük bir ofisle başladık. Amacımız tek ve netti: 
                  İnsanlara yeni yerler keşfetme sevincini yaşatmak.
                </p>
                <p>
                  Yıllar içinde büyüdük, ekibimizi genişlettik ve Türkiye'nin dört bir yanından 
                  güzel destinasyonları Malatyalı misafirlerimizle buluşturduk.
                </p>
                <p>
                  Bugün TÜRSAB A grubu lisansıyla, deneyimli ekibimiz ve modern altyapımızla 
                  hizmetinizdeyiz. Her tur, bir anı; her yolculuk, bir hikaye.
                </p>
              </div>
            </div>
            {/* Timeline */}
            <div className="space-y-4">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-sm shadow-lg flex-shrink-0">
                      {m.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-0.5 flex-1 bg-blue-100 my-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="text-xs font-black text-blue-500 uppercase tracking-wider">{m.year}</p>
                    <h4 className="font-black text-slate-900 text-lg mt-0.5">{m.title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-black text-slate-900 text-center mb-12">Değerlerimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 ${v.bg} ${v.color} rounded-2xl flex items-center justify-center mb-5`}>
                  <v.icon className="w-7 h-7" />
                </div>
                <h4 className="font-black text-slate-900 text-xl mb-2">{v.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 section-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-3">Ekibimiz</h2>
          <p className="text-slate-500 mb-12 font-medium">Hayallerinizi gerçeğe dönüştüren uzman kadromuz.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((t, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black text-3xl shadow-xl mb-5`}>
                  {t.initials}
                </div>
                <h4 className="font-black text-slate-900 text-xl">{t.name}</h4>
                <p className="text-slate-500 text-sm font-medium mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber="905000000000" />
    </main>
  )
}
