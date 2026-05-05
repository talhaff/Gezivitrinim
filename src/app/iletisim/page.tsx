import { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İletişim | Gezi Vitrinim — Malatya Turizm',
  description: 'Gezi Vitrinim iletişim bilgileri. WhatsApp, telefon ve e-posta ile bize ulaşın. Malatya\'nın en iyi tur acentesi.',
}

const contactMethods = [
  {
    icon: Phone,
    title: 'Telefon',
    value: '+90 (500) 000 00 00',
    href: 'tel:+905000000000',
    color: 'blue',
    gradient: 'from-blue-500 to-blue-700',
    desc: 'Hafta içi 09:00 - 18:00'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+90 (500) 000 00 00',
    href: 'https://wa.me/905000000000?text=Merhaba, tur hakkında bilgi almak istiyorum.',
    color: 'green',
    gradient: 'from-green-500 to-emerald-600',
    desc: 'Hızlı yanıt garantisi'
  },
  {
    icon: Mail,
    title: 'E-posta',
    value: 'info@gezivitrinim.com',
    href: 'mailto:info@gezivitrinim.com',
    color: 'purple',
    gradient: 'from-purple-500 to-violet-600',
    desc: '24 saat içinde dönüş'
  },
  {
    icon: MapPin,
    title: 'Adres',
    value: 'Malatya, Türkiye',
    href: 'https://maps.google.com/?q=Malatya,Turkey',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600',
    desc: 'Ofisimizi ziyaret edin'
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/15 rounded-full blur-[80px]" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
            Bize{' '}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #60A5FA, #A78BFA)' }}>
              Ulaşın
            </span>
          </h1>
          <p className="text-white/60 text-xl font-medium">
            Hayalinizdeki tur için uzman ekibimiz hazır.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 section-light -mt-8">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {contactMethods.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-5 p-7 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <c.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">{c.title}</p>
                  <p className="font-black text-slate-900 text-lg group-hover:text-blue-700 transition-colors">{c.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{c.desc}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Mesaj Gönderin</h2>
            <p className="text-slate-500 mb-8">Formu doldurun, en kısa sürede dönüş yapalım.</p>
            <form
              action="https://formspree.io/f/XXXXX"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black text-slate-700 mb-2">Ad Soyad</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Adınız Soyadınız"
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-slate-700 mb-2">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+90 (5XX) XXX XX XX"
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-black text-slate-700 mb-2">E-posta</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="ornek@email.com"
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-black text-slate-700 mb-2">İlgilendiğiniz Tur</label>
                <input
                  type="text"
                  name="tour"
                  placeholder="Örn: Kapadokya Turu, GAP Turu..."
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-black text-slate-700 mb-2">Mesajınız</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tur hakkında sorularınızı yazın..."
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center text-base py-4 rounded-2xl"
              >
                <Mail className="w-5 h-5" />
                Gönder
              </button>
            </form>
          </div>

          {/* Working Hours */}
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div>
              <h4 className="font-black text-blue-900 text-lg mb-1">Çalışma Saatleri</h4>
              <p className="text-blue-700 font-medium">
                Pazartesi – Cumartesi: <strong>09:00 – 18:00</strong> &nbsp;|&nbsp;
                Pazar: <strong>10:00 – 15:00</strong>
              </p>
              <p className="text-blue-500 text-sm mt-1">WhatsApp'tan 7/24 ulaşabilirsiniz.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber="905000000000" />
    </main>
  )
}
