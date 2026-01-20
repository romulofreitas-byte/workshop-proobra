'use client'

import { ErrorBoundary } from './ErrorBoundary'
import MetaPixel from './MetaPixel'
import Clarity from './Clarity'
import CookieConsent from './CookieConsent'
import FloatingWhatsAppButton from './FloatingWhatsAppButton'

export default function ClientComponents() {
  return (
    <ErrorBoundary>
      <MetaPixel />
      <Clarity />
      <CookieConsent />
      <FloatingWhatsAppButton />
    </ErrorBoundary>
  )
}
