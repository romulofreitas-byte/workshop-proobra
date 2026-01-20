import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'proobra'
  className?: string
}

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  const variants = {
    default: 'bg-gray-800/40 text-gray-300 border border-gray-700/50 backdrop-blur-sm',
    primary: 'bg-proobra-blue-dark/20 text-proobra-blue-light border border-proobra-blue-dark/30 backdrop-blur-sm',
    success: 'bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm',
    warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 backdrop-blur-sm',
    danger: 'bg-red-500/20 text-red-400 border border-red-500/30 backdrop-blur-sm',
    proobra: 'bg-gradient-to-r from-proobra-orange/20 to-proobra-orange/10 text-proobra-orange border border-proobra-orange/30 backdrop-blur-sm shadow-lg',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300',
        variants[variant],
        variant === 'proobra' && 'hover:shadow-proobra-orange/20',
        className
      )}
    >
      {children}
    </span>
  )
}
