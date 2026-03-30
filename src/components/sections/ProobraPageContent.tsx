'use client'

import { useEffect, useRef, useState } from 'react'
import { ModalProvider } from '@/contexts/ModalContext'
import HeroSectionWorkshop from './HeroSectionWorkshop'
import TestimonialsVideoSection from './TestimonialsVideoSection'
import WhyYouStuckSection from './WhyYouStuckSection'
import EventDetailsSection from './EventDetailsSection'
import WhatYouWillLearnSection from './WhatYouWillLearnSection'
import WhoIsItForWorkshopSection from './WhoIsItForWorkshopSection'
import AboutGabrielProobraSection from './AboutGabrielProobraSection'
import InvestmentSection from './InvestmentSection'
import FinalCTAWorkshopSection from './FinalCTAWorkshopSection'
import WorkshopFAQSection from './WorkshopFAQSection'
import Footer from './Footer'
import VslIntroPopup from '@/components/ui/VslIntroPopup'
import StickyCtaBar from '@/components/StickyCtaBar'
import { getVslDelayMs } from '@/lib/vslConfig'
import { pushAnalyticsEvent } from '@/lib/analytics'

export default function ProobraPageContent() {
  const [isVslOpen, setIsVslOpen] = useState(() => getVslDelayMs() === 0)
  const [vslDismissed, setVslDismissed] = useState(false)
  const firstScrollRef = useRef(false)

  useEffect(() => {
    const delay = getVslDelayMs()
    if (delay === 0) return
    const id = window.setTimeout(() => setIsVslOpen(true), delay)
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (firstScrollRef.current) return
      firstScrollRef.current = true
      pushAnalyticsEvent('first_scroll', {})
      window.removeEventListener('scroll', onScroll, true)
    }
    window.addEventListener('scroll', onScroll, { passive: true, capture: true })
    return () => window.removeEventListener('scroll', onScroll, true)
  }, [])

  const handleCloseVsl = () => {
    setIsVslOpen(false)
    setVslDismissed(true)
  }

  return (
    <ModalProvider>
      <main className={vslDismissed ? 'pb-16 sm:pb-14' : undefined}>
        <HeroSectionWorkshop />
        <TestimonialsVideoSection />
        <WhyYouStuckSection />
        <EventDetailsSection />
        <WhatYouWillLearnSection />
        <WhoIsItForWorkshopSection />
        <AboutGabrielProobraSection />
        <InvestmentSection />
        <FinalCTAWorkshopSection />
        <WorkshopFAQSection />
        <Footer />
      </main>
      <VslIntroPopup
        isOpen={isVslOpen}
        onClose={handleCloseVsl}
        onCloseMeta={({ elapsedMs, endedNaturally }) => {
          pushAnalyticsEvent('vsl_close', {
            elapsed_ms: elapsedMs,
            ended_naturally: endedNaturally,
          })
        }}
        title="Aprenda a orçar reformas com tanta segurança que o lucro será garantido."
        subtitle="Neste workshop ao vivo, você vai aprender o método que transforma insegurança em controle total na hora de orçar suas reformas."
      />
      <StickyCtaBar visible={vslDismissed} />
    </ModalProvider>
  )
}
