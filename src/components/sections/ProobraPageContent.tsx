'use client'

import { useEffect, useState } from 'react'
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

const VSL_INTRO_SESSION_KEY = 'proobra-vsl-intro-seen'

export default function ProobraPageContent() {
  const [isVslOpen, setIsVslOpen] = useState(true)

  useEffect(() => {
    const wasAlreadyShown = sessionStorage.getItem(VSL_INTRO_SESSION_KEY) === '1'
    if (wasAlreadyShown) {
      setIsVslOpen(false)
    }
  }, [])

  const handleCloseVsl = () => {
    sessionStorage.setItem(VSL_INTRO_SESSION_KEY, '1')
    setIsVslOpen(false)
  }

  return (
    <ModalProvider>
      <main>
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
        title="Aprenda a orçar reformas com tanta segurança que o lucro será garantido."
        subtitle="Neste workshop ao vivo, você vai aprender o método que transforma insegurança em controle total na hora de orçar suas reformas."
      />
    </ModalProvider>
  )
}
