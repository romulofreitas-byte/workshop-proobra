import React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
  highlight?: boolean
}

export default function Card({ 
  children, 
  className, 
  hover = true,
  glass = false,
  highlight = false
}: CardProps) {
  const glassStyles = glass
    ? 'bg-gray-800/60 border border-gray-700/50 backdrop-blur-xl'
    : highlight
    ? 'bg-gray-800/60 border-2 border-proobra-orange/50 backdrop-blur-xl shadow-2xl'
    : 'bg-gray-800/50 border border-gray-700/50'

  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        glassStyles,
        hover && 'hover:border-proobra-orange/60 hover:shadow-proobra-orange/30 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1',
        highlight && 'hover:shadow-proobra-orange/40 hover:shadow-2xl',
        className
      )}
    >
      {children}
    </div>
  )
}
