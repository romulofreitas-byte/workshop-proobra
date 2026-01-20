'use client'

import { Calendar, Clock, MapPin } from 'lucide-react'
import { useModalContext } from '@/contexts/ModalContext'
import AnimatedButton from './AnimatedButton'

interface TimelineModalProps {
  title: string
  items: Array<{
    time: string
    title: string
    description: string
  }>
}

export default function TimelineModal({ title, items }: TimelineModalProps) {
  const { openModal } = useModalContext()

  const handleClick = () => {
    openModal(
      <div className="p-6 max-h-[80vh] overflow-y-auto bg-gray-900 text-white">
        <h3 className="text-2xl font-bold mb-6 text-white">{title}</h3>
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-proobra-orange rounded-full" />
                {index < items.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-700 mt-2" />
                )}
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-proobra-blue-light" />
                  <span className="font-semibold text-proobra-blue-light">{item.time}</span>
                </div>
                <h4 className="font-bold text-lg mb-1 text-white">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <AnimatedButton onClick={handleClick} variant="primary">
      Ver Programação Completa
    </AnimatedButton>
  )
}
