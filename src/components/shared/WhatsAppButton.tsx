'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  className?: string
  tourName?: string
}

export default function WhatsAppButton({ 
  phoneNumber, 
  message = "Merhaba, bilgi almak istiyorum.", 
  className,
  tourName 
}: WhatsAppButtonProps) {
  
  const handleWhatsAppClick = () => {
    const finalMessage = tourName 
      ? `Merhaba, "${tourName}" turu hakkında bilgi almak istiyorum.`
      : message
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`
    window.open(url, '_blank')
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 rounded-full h-14 px-6 shadow-2xl transition-all hover:scale-110 bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center gap-2 font-bold",
        className
      )}
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span>WhatsApp'tan Bilgi Al</span>
    </Button>
  )
}
