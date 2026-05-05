'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Calendar, ArrowUpRight, Star } from 'lucide-react'
import { urlForImage } from '@/sanity/lib/image'
import { Tour, CATEGORY_MAP } from '@/types'

interface TourCardProps {
  tour: Tour
  index?: number
}

export default function TourCard({ tour, index = 0 }: TourCardProps) {
  const catInfo = CATEGORY_MAP[tour.category] ?? {
    label: tour.category,
    badgeClass: 'badge-gunubirlik',
  }

  const nearestDate = tour.dates?.[0]
    ? new Date(tour.dates[0]).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' })
    : 'Bize Sorun'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={`/turlar/${tour.slug.current}`} className="block group card-tour">

        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {tour.coverImage ? (
            <Image
              src={urlForImage(tour.coverImage).width(640).height(480).url()}
              alt={tour.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <MapPin className="w-12 h-12 text-white/40" />
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 gradient-card-overlay opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`badge-cat ${catInfo.badgeClass} shadow-sm`}>
              {catInfo.label}
            </span>
          </div>

          {/* Rating Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
            <Star className="w-3 h-3 text-amber-400 fill-current" />
            <span className="text-white text-xs font-bold">4.9</span>
          </div>

          {/* Arrow Button */}
          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-0 -rotate-45 transition-transform duration-300" />
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5">
          {/* Tour Name */}
          <h3 className="font-black text-slate-900 text-lg leading-tight mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
            {tour.title}
          </h3>

          {/* Meta Row */}
          <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              <span className="font-medium truncate max-w-[100px]">{tour.departureLocation}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-emerald-500" />
              <span className="font-medium">{nearestDate}</span>
            </div>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Başlangıç Fiyatı</p>
              <p className="text-2xl font-black text-blue-700">
                ₺{tour.price.toLocaleString('tr-TR')}
              </p>
            </div>
            <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-2 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              İNCELE →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
