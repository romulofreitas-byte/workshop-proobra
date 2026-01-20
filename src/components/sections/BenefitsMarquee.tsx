'use client'

import { benefits } from '@/data/benefits'

export default function BenefitsMarquee() {
  const benefitTitles = benefits.map((b) => b.title)
  // Triplicar para loop perfeito
  const tripleBenefits = [...benefitTitles, ...benefitTitles, ...benefitTitles]

  return (
    <div className="overflow-hidden bg-gradient-to-r from-proobra-blue-dark via-proobra-blue-light to-proobra-blue-dark py-4">
      <div className="flex animate-marquee whitespace-nowrap w-max">
        {tripleBenefits.map((title, index) => (
          <div key={index} className="flex items-center mx-6">
            <span className="text-white text-sm sm:text-base font-medium">
              {title}
            </span>
            <span className="text-proobra-orange mx-4">•</span>
          </div>
        ))}
      </div>
    </div>
  )
}
