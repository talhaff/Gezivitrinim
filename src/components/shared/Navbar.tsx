'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MapPin, Compass, Globe, Home, Info } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Ana Sayfa',  href: '/',            icon: Home },
  { label: 'Turlarımız', href: '/turlar',       icon: Compass },
  { label: 'Hakkımızda', href: '/hakkimizda',   icon: Info },
  { label: 'İletişim',   href: '/iletisim',     icon: Phone },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-500',
          scrolled ? 'py-2 px-4' : 'py-4 px-4 md:px-8'
        )}
      >
        <div
          className={cn(
            'mx-auto max-w-7xl flex items-center justify-between transition-all duration-500',
            scrolled
              ? 'h-16 bg-white/95 backdrop-blur-xl shadow-xl shadow-blue-900/10 rounded-2xl px-6'
              : 'h-20 bg-transparent px-2'
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-lg border border-white/20 group-hover:scale-105 transition-transform duration-500">
              <Image 
                src="/images/logo_01.jpg" 
                alt="Gezi Vitrinim Logo" 
                fill 
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col -space-y-0.5">
              <span className={cn(
                'text-xl font-black tracking-tight leading-none transition-colors duration-300',
                scrolled ? 'text-slate-900' : 'text-white drop-shadow-md'
              )}>
                GEZİ<span className="text-blue-500">VİTRİNİM</span>
              </span>
              <span className={cn(
                'text-[9px] font-bold uppercase tracking-[0.2em] transition-colors duration-300',
                scrolled ? 'text-amber-500' : 'text-amber-300'
              )}>
                Malatya Çıkışlı Turlar
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200',
                  scrolled
                    ? 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+905322669039"
              className={cn(
                'hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300',
                scrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30'
                  : 'bg-white/15 text-white border border-white/20 hover:bg-white/25'
              )}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">Hemen Ara</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menüyü Aç/Kapat"
              className={cn(
                'lg:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200',
                scrolled
                  ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  : 'bg-white/15 text-white hover:bg-white/25'
              )}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              ref={menuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-[300px] bg-white shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div>
                  <p className="font-black text-lg text-slate-900">
                    GEZİ<span className="text-blue-600">VİTRİNİM</span>
                  </p>
                  <p className="text-[10px] text-amber-500 font-bold uppercase tracking-wider">Malatya Çıkışlı Turlar</p>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 p-6 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 p-4 rounded-2xl text-slate-700 font-bold hover:bg-blue-50 hover:text-blue-700 transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                        <link.icon className="w-4 h-4" />
                      </div>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="p-6 space-y-3 border-t bg-slate-50">
                <a
                  href="https://wa.me/905397106544?text=Merhaba, tur hakkında bilgi almak istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-white text-sm btn-whatsapp"
                >
                  <MapPin className="w-4 h-4" />
                  WhatsApp'tan Yaz
                </a>
                <a
                  href="tel:+905322669039"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-blue-700 text-sm bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Hemen Ara
                </a>
                <p className="text-[10px] text-center text-slate-400 pt-2">
                  © 2025 Gezi Vitrinim. TÜRSAB Üyesi.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
