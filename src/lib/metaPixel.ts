// Meta Pixel tracking — alinhado ao funil: Lead só após inscrição confirmada (/obrigado).

import { WORKSHOP_INFO } from '@/lib/constants'

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
  }
}

function fbqSafe(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq(...args)
  }
}

/** Clique em CTA que leva ao checkout externo — não confundir com Lead. */
export const trackInitiateCheckoutCTA = (ctaName: string) => {
  fbqSafe('track', 'InitiateCheckout', {
    value: WORKSHOP_INFO.price,
    currency: WORKSHOP_INFO.currency,
    content_name: ctaName,
    content_category: 'CTA',
  })
}

/** Conversão primária: página de obrigado após compra/inscrição. */
export const trackLeadComplete = (contentName: string = 'Workshop registration confirmed') => {
  fbqSafe('track', 'Lead', {
    content_name: contentName,
    content_category: 'Registration',
    value: WORKSHOP_INFO.price,
    currency: WORKSHOP_INFO.currency,
  })
}

export const trackViewContent = (contentName: string, contentType: string) => {
  fbqSafe('track', 'ViewContent', {
    content_name: contentName,
    content_type: contentType,
  })
}

export const trackVslCustom = (action: string, payload?: Record<string, unknown>) => {
  fbqSafe('trackCustom', `VSL_${action}`, payload ?? {})
}

export const trackPurchase = (value: number, currency: string = 'BRL') => {
  fbqSafe('track', 'Purchase', {
    value,
    currency,
  })
}

export const trackWhatsAppClick = (placement: string = 'floating_fab') => {
  fbqSafe('trackCustom', 'WhatsAppClick', { placement })
}
