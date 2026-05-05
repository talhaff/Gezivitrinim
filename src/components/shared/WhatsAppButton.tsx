'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  className?: string
  tourName?: string
}

export default function WhatsAppButton({ 
  phoneNumber, 
  message = "Merhaba, turlarınız hakkında bilgi almak istiyorum.", 
  className,
  tourName 
}: WhatsAppButtonProps) {
  
  const handleWhatsAppClick = () => {
    const finalMessage = tourName 
      ? `Merhaba, "${tourName}" turu hakkında detaylı bilgi alabilir miyim?`
      : message
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`
    window.open(url, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleWhatsAppClick}
      className={cn(
        "fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 rounded-full h-14 md:h-16 px-5 md:px-6 shadow-[0_10px_40px_-10px_rgba(37,211,102,0.8)] bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white flex items-center gap-3 font-black text-sm md:text-base border border-white/20 transition-shadow",
        className
      )}
    >
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-[150%] w-[150%] rounded-full bg-white opacity-20 animate-ping"></span>
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 relative z-10 fill-current" />
      </div>
      <span className="hidden sm:inline">WhatsApp Destek</span>
    </motion.button>
  )
}
