'use client'

import { BookOpen, CheckCircle } from 'lucide-react'
import { useModalContext } from '@/contexts/ModalContext'
import AnimatedButton from './AnimatedButton'

interface MethodModalProps {
  title: string
  description: string
  steps: string[]
}

export default function MethodModal({
  title,
  description,
  steps,
}: MethodModalProps) {
  const { openModal } = useModalContext()

  const handleClick = () => {
    openModal(
      <div className="p-6 max-h-[80vh] overflow-y-auto bg-gray-900 text-white">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-8 h-8 text-proobra-blue-light" />
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 mb-6">{description}</p>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-proobra-orange" />
              </div>
              <div className="flex-1">
                <p className="text-gray-300">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <AnimatedButton onClick={handleClick} variant="outline">
      Conhecer o Método
    </AnimatedButton>
  )
}
