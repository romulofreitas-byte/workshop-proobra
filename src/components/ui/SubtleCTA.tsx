'use client'

import { ArrowRight } from 'lucide-react'
import AnimatedButton from './AnimatedButton'

interface SubtleCTAProps {
  text: string
  onClick?: () => void
  href?: string
  className?: string
}

export default function SubtleCTA({
  text,
  onClick,
  href,
  className = '',
}: SubtleCTAProps) {
  const content = (
    <AnimatedButton
      variant="outline"
      className={`group ${className}`}
      onClick={onClick}
    >
      {text}
      <ArrowRight className="ml-2 w-5 h-5 inline-block transition-transform group-hover:translate-x-1" />
    </AnimatedButton>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }

  return content
}
