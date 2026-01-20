import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'gradient' | 'dark'
}

export default function Section({
  children,
  className,
  id,
  background = 'dark',
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900/90',
    dark: 'bg-gray-900',
  }

  return (
    <section
      id={id}
      className={cn('py-16 md:py-24', backgrounds[background], className)}
    >
      <div className="container-custom">{children}</div>
    </section>
  )
}
