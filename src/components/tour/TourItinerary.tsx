'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'
import { ItineraryDay } from '@/types'

interface TourItineraryProps {
  itinerary: ItineraryDay[]
}

export default function TourItinerary({ itinerary }: TourItineraryProps) {
  const [openDay, setOpenDay] = useState<string | null>(itinerary?.[0]?._key ?? null)

  if (!itinerary || itinerary.length === 0) return null

  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-7 shadow-sm">
      <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3 mb-7">
        <div className="w-9 h-9 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">
          <MapPin className="w-4 h-4 text-white" />
        </div>
        Tur Programı
      </h3>
      <div className="space-y-3">
        {itinerary.map((day, i) => {
          const isOpen = openDay === day._key
          return (
            <div
              key={day._key}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-blue-200 bg-blue-50/50 shadow-sm'
                  : 'border-slate-100 bg-slate-50/50 hover:border-slate-200'
              }`}
            >
              <button
                onClick={() => setOpenDay(isOpen ? null : day._key)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0 ${
                    isOpen ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-500 border border-slate-200'
                  }`}>
                    {i + 1}
                  </span>
                  <div className="text-left">
                    <p className={`text-[10px] font-black uppercase tracking-widest ${isOpen ? 'text-blue-500' : 'text-slate-400'}`}>
                      {day.day}
                    </p>
                    <p className="font-black text-slate-900 text-base">{day.title}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-blue-600' : 'text-slate-300'
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pl-[4.25rem]">
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">{day.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
