'use client'

import { HelpCircle } from 'lucide-react'
import { useModalContext } from '@/contexts/ModalContext'

interface SubtleHelpModalProps {
  title: string
  content: React.ReactNode
  className?: string
}

export default function SubtleHelpModal({
  title,
  content,
  className = '',
}: SubtleHelpModalProps) {
  const { openModal } = useModalContext()

  const handleClick = () => {
    openModal(
      <div className="p-6 bg-gray-900 text-white">
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <div className="text-gray-300">{content}</div>
      </div>
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 text-proobra-orange hover:text-[#d8891f] transition-colors ${className}`}
      aria-label={`Ajuda: ${title}`}
    >
      <HelpCircle className="w-5 h-5" />
      <span className="text-sm">Ajuda</span>
    </button>
  )
}
