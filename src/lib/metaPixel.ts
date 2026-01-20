// Meta Pixel tracking functions

declare global {
  interface Window {
    fbq: (...args: any[]) => void
  }
}

export const trackCTAClick = (ctaName: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: ctaName,
      content_category: 'CTA',
    })
  }
}

export const trackViewContent = (contentName: string, contentType: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: contentName,
      content_type: contentType,
    })
  }
}

export const trackPurchase = (value: number, currency: string = 'BRL') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      value: value,
      currency: currency,
    })
  }
}

export const trackInitiateCheckout = (value: number, currency: string = 'BRL') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      value: value,
      currency: currency,
    })
  }
}
