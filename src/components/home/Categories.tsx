'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Map, Trees, Globe, Camera, ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Günübirlik',
    icon: Map,
    href: '/turlar?kategori=gunubirlik',
    gradient: 'from-blue-500 to-cyan-400',
    bg: 'bg-blue-50',
    ring: 'ring-blue-200',
    count: '12 Tur',
    desc: 'Gün içinde keşfet, akşam döndüm'
  },
  {
    title: 'Konaklamalı',
    icon: Trees,
    href: '/turlar?kategori=konaklamali',
    gradient: 'from-emerald-500 to-green-400',
    bg: 'bg-emerald-50',
    ring: 'ring-emerald-200',
    count: '18 Tur',
    desc: 'Otelde kal, şehri içten yaşa'
  },
  {
    title: 'Yurt Dışı',
    icon: Globe,
    href: '/turlar?kategori=yurtdisi',
    gradient: 'from-purple-500 to-violet-400',
    bg: 'bg-purple-50',
    ring: 'ring-purple-200',
    count: '8 Tur',
    desc: 'Pasaportunu al, dünyayı gör'
  },
  {
    title: 'Kültür Turu',
    icon: Camera,
    href: '/turlar?kategori=kultur',
    gradient: 'from-orange-500 to-amber-400',
    bg: 'bg-orange-50',
    ring: 'ring-orange-200',
    count: '10 Tur',
    desc: 'Tarihe dokun, kültürü yaşa'
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Categories() {
  return (
    <section className="py-20 section-white">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-xs font-black uppercase tracking-[0.2em]">
            <Map className="w-3.5 h-3.5" />
            Tur Kategorileri
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Sana En Uygun{' '}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B, #F43F5E)' }}>
              Tatil Türü
            </span>
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            Zamanına, bütçene ve hayallerine göre tur seç.
          </p>
        </div>

        {/* Category Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat) => (
            <motion.div key={cat.title} variants={item}>
              <Link href={cat.href} className="block group">
                <div className={`${cat.bg} ring-1 ${cat.ring} rounded-3xl p-8 space-y-5 transition-all duration-400 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 hover:ring-2`}>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <cat.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Text */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-black text-slate-900">{cat.title}</h3>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-white rounded-full px-2 py-0.5">
                        {cat.count}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 font-medium">{cat.desc}</p>
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-1 text-xs font-black text-slate-700 group-hover:text-blue-600 transition-colors">
                    Turları Gör <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
