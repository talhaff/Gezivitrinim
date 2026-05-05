import Link from 'next/link'
import { Phone, Mail, MapPin, ExternalLink, Heart, Compass, Share2, MessageSquare, Play } from 'lucide-react'

const quickLinks = [
  { label: 'Tüm Turlar',    href: '/turlar' },
  { label: 'Günübirlik',    href: '/turlar?kategori=gunubirlik' },
  { label: 'Konaklamalı',   href: '/turlar?kategori=konaklamali' },
  { label: 'Yurt Dışı',     href: '/turlar?kategori=yurtdisi' },
  { label: 'Kültür Turları', href: '/turlar?kategori=kultur' },
]

const companyLinks = [
  { label: 'Hakkımızda',  href: '/hakkimizda' },
  { label: 'İletişim',    href: '/iletisim' },
  { label: 'Gizlilik Politikası', href: '/gizlilik' },
  { label: 'KVKK Metni',  href: '/kvkk' },
]

const socials = [
  { icon: Share2,       href: '#', label: 'Instagram', color: 'hover:bg-pink-500' },
  { icon: MessageSquare,href: '#', label: 'Facebook',  color: 'hover:bg-blue-600' },
  { icon: Play,         href: '#', label: 'YouTube',   color: 'hover:bg-red-600' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Top Wave */}
      <div className="-mt-1">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="#F8FAFC" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-black text-xl shadow-lg">
                G
              </div>
              <div>
                <p className="text-xl font-black tracking-tight leading-none text-white">
                  GEZİ<span className="text-blue-400">VİTRİNİM</span>
                </p>
                <p className="text-[9px] text-amber-400 font-bold uppercase tracking-[0.2em]">Tatilin Yeni Yüzü</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Malatya'nın lider turizm acentesi. 15 yıllık deneyimimizle günübirlik turlardan 
              yurt dışı gezilerine hayalinizdeki tatili gerçeğe dönüştürüyoruz.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 ${s.color}`}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-black text-white mb-6 flex items-center gap-2">
              <Compass className="w-4 h-4 text-blue-400" />
              Turlarımız
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 hover:text-white text-sm font-medium transition-colors hover:translate-x-1 inline-flex items-center gap-1 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-black text-white mb-6">Kurumsal</h5>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 hover:text-white text-sm font-medium transition-colors group inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-black text-white mb-6">İletişim</h5>
            <ul className="space-y-4">
              <li>
                <a href="tel:+905000000000" className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Telefon</p>
                    <p className="text-sm font-bold text-white">+90 (500) 000 00 00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@gezivitrinim.com" className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                    <Mail className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">E-posta</p>
                    <p className="text-sm font-bold text-white">info@gezivitrinim.com</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Adres</p>
                    <p className="text-sm font-bold text-white">Malatya, Türkiye</p>
                  </div>
                </div>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/905000000000?text=Merhaba, tur hakkında bilgi almak istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 w-full justify-center text-sm py-3 rounded-xl"
            >
              WhatsApp'tan Yaz
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Gezi Vitrinim.
            <span className="hidden md:inline">Tüm Hakları Saklıdır.</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-current" />
            ile yapıldı.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">TÜRSAB Üyesi</span>
            <div className="w-px h-4 bg-white/10" />
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">ISO 9001</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
