'use client'

import { MessageCircle } from 'lucide-react'
import { trackWhatsAppClick } from '@/lib/metaPixel'

const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/C3S03IRnJ2l0ocKsTbPDzI'

export default function FloatingWhatsAppButton() {
  const handleClick = () => {
    trackWhatsAppClick('floating_fab')
    window.open(WHATSAPP_GROUP_LINK, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-[520] w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 animate-float"
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  )
}
