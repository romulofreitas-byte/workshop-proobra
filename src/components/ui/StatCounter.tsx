'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'

interface StatCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function StatCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}: StatCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
      let start = 0
      const increment = value / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(start))
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      className={className}
    >
      <span className="text-4xl md:text-5xl font-bold text-proobra-orange">
        {prefix}
        {displayValue.toLocaleString()}
        {suffix}
      </span>
    </motion.div>
  )
}
