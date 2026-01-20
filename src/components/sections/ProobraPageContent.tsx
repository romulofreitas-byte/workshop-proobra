'use client'

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

export default function ProobraPageContent() {
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
    </ModalProvider>
  )
}
