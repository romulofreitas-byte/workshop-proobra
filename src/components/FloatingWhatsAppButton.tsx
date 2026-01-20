'use client'

import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '5511999999999' // Substituir pelo número correto
const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre o Workshop PROOBRA.'

export default function FloatingWhatsAppButton() {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 animate-float"
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  )
}
