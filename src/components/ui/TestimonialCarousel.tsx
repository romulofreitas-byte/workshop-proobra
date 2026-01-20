'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import TestimonialCard from './TestimonialCard'

interface Testimonial {
  name: string
  role?: string
  image?: string
  text: string
  rating?: number
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  className?: string
}

export default function TestimonialCarousel({
  testimonials,
  className = '',
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full px-4">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/40 border border-gray-700/50 rounded-full p-2 shadow-lg hover:shadow-proobra-orange/30 hover:border-proobra-orange/50 backdrop-blur-xl transition-all"
        aria-label="Depoimento anterior"
      >
        <ChevronLeft className="w-6 h-6 text-proobra-orange" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/40 border border-gray-700/50 rounded-full p-2 shadow-lg hover:shadow-proobra-orange/30 hover:border-proobra-orange/50 backdrop-blur-xl transition-all"
        aria-label="Próximo depoimento"
      >
        <ChevronRight className="w-6 h-6 text-proobra-orange" />
      </button>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-proobra-orange w-8' : 'bg-gray-600'
            }`}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
