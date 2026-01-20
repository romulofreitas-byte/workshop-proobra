'use client'

import { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900 text-white shadow-lg border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="w-6 h-6 text-proobra-orange mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Cookies</h3>
            <p className="text-sm text-gray-300">
              Este site usa cookies para melhorar sua experiência. Ao continuar
              navegando, você concorda com o uso de cookies.
            </p>
          </div>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-gradient-to-r from-proobra-orange to-[#d8891f] hover:from-[#d8891f] hover:to-proobra-orange text-white rounded-lg text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-proobra-orange/40"
          >
            Aceitar
          </button>
          <button
            onClick={handleDecline}
            className="px-4 py-2 bg-gray-800 border border-gray-700 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors"
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  )
}
