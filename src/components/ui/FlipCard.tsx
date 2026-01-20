'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FlipCardProps {
  front: React.ReactNode
  back: React.ReactNode
  className?: string
}

export default function FlipCard({ front, back, className }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={cn('relative w-full h-64 perspective-1000', className)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 backface-hidden">
          <div className="w-full h-full bg-gray-800/40 border border-gray-700/50 rounded-xl backdrop-blur-xl shadow-lg p-6 flex items-center justify-center">
            {front}
          </div>
        </div>
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="w-full h-full bg-gradient-to-br from-proobra-blue-dark to-proobra-blue-light rounded-xl shadow-lg p-6 flex items-center justify-center text-white">
            {back}
          </div>
        </div>
      </motion.div>
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}
