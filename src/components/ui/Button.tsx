'use client'

import React, { useState } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])
  
  const baseStyles = 'relative font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden'
  
  const variants = {
    primary: 'bg-gradient-to-r from-proobra-blue-dark to-proobra-blue-light text-white hover:from-proobra-blue-light hover:to-proobra-blue-dark shadow-lg hover:shadow-proobra-blue-light/40',
    secondary: 'bg-gray-800/40 text-white border-2 border-gray-700/50 hover:border-proobra-orange/50 hover:bg-gray-800/60 shadow-md hover:shadow-proobra-orange/20 backdrop-blur-xl',
    outline: 'bg-transparent text-proobra-orange border-2 border-proobra-orange/50 hover:bg-proobra-orange/10 hover:border-proobra-orange',
    ghost: 'bg-transparent text-white hover:bg-gray-800/40 backdrop-blur-sm',
    cta: 'bg-gradient-to-r from-proobra-orange to-[#d8891f] text-white hover:from-[#d8891f] hover:to-proobra-orange shadow-2xl hover:shadow-proobra-orange/40 button-shine-effect',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const newRipple = {
      x,
      y,
      id: Date.now(),
    }
    
    setRipples((prev) => [...prev, newRipple])
    
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
    }, 600)
    
    onClick?.(e)
  }

  return (
    <motion.button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={handleClick}
      whileHover={{ scale: variant === 'cta' ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
          }}
          animate={{
            width: 300,
            height: 300,
            x: -150,
            y: -150,
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
