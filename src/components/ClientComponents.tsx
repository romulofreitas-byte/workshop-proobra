'use client'

import { ErrorBoundary } from './ErrorBoundary'
import MetaPixel from './MetaPixel'
import Clarity from './Clarity'
import CookieConsent from './CookieConsent'
import FloatingWhatsAppButton from './FloatingWhatsAppButton'
import AttributionBootstrap from './AttributionBootstrap'
import ClientErrorReporting from './ClientErrorReporting'

export default function ClientComponents() {
  return (
    <ErrorBoundary>
      <ClientErrorReporting />
      <AttributionBootstrap />
      <MetaPixel />
      <Clarity />
      <CookieConsent />
      <FloatingWhatsAppButton />
    </ErrorBoundary>
  )
}
