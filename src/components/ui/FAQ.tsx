'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  className?: string
}

export default function FAQ({ items, className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-gray-800/40 border border-gray-700/50 rounded-lg backdrop-blur-xl overflow-hidden hover:border-proobra-orange/50 transition-all duration-300"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/60 transition-colors"
          >
            <span className="font-semibold text-white">{item.question}</span>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-proobra-orange transition-transform duration-200 flex-shrink-0 ml-4',
                openIndex === index && 'transform rotate-180'
              )}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-300 animate-fade-in">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
