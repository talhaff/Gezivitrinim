'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Compass, Plane, Star, MapPin, Users, Award } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Başarılı Tur', icon: Compass },
  { value: '20K+', label: 'Mutlu Misafir', icon: Users },
  { value: '15',   label: 'Yıllık Deneyim', icon: Award },
  { value: '4.9',  label: 'Ortalama Puan', icon: Star },
]

const highlights = [
  { label: 'Kapadokya Turu',   price: '₺1.850', gradient: 'from-orange-500 to-amber-400',    delay: 0 },
  { label: 'Bodrum Tatili',    price: '₺2.100', gradient: 'from-blue-500 to-cyan-400',       delay: 0.15 },
  { label: 'GAP Kültür Turu', price: '₺1.650', gradient: 'from-purple-500 to-pink-400',     delay: 0.3 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden gradient-hero noise">

      {/* Animated Mesh Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] animate-float" />
      </div>

      {/* Floating highlight cards (desktop decoration) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-10">
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + h.delay, duration: 0.6 }}
            style={{ animationDelay: `${i * 0.3}s` }}
            className="animate-float"
          >
            <div className="glass rounded-2xl px-5 py-3.5 flex items-center gap-4 shadow-xl min-w-[200px]">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${h.gradient} flex items-center justify-center shadow-lg`}>
                <Plane className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">{h.label}</p>
                <p className="text-amber-300 font-black text-sm">{h.price}'den</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-6 max-w-7xl pt-32 pb-16">
          <div className="max-w-3xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8 glass px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/90 text-xs font-bold uppercase tracking-[0.2em]">
                Malatya Çıkışlı · Yaz 2025 Turları Açık
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8"
            >
              Hayalin
              <br />
              <span className="gradient-text-warm bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B, #F43F5E)' }}>
                Tatili
              </span>
              <br />
              <span className="text-blue-300">Malatya'dan.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-white/70 max-w-lg mb-10 leading-relaxed font-medium"
            >
              Günübirlik turlardan yurt dışı gezilerine, kültür turlarından deniz tatillerine kadar 
              <span className="text-white font-bold"> 100'den fazla özel rota</span> sizin için hazır.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <Link href="/turlar" className="btn-primary text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-2xl">
                <Compass className="w-5 h-5" />
                Turları Keşfet
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/905000000000?text=Merhaba, tur hakkında bilgi almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-2xl"
              >
                <MapPin className="w-5 h-5" />
                WhatsApp'tan Yaz
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="glass rounded-2xl p-4 text-center"
                >
                  <p className="text-2xl md:text-3xl font-black text-white">{s.value}</p>
                  <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mt-1">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="relative z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full -mb-1 block">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  )
}
