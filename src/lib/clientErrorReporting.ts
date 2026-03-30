import { pushAnalyticsEvent } from '@/lib/analytics'

type ErrorPayload = {
  message: string
  source?: string
  lineno?: number
  colno?: number
  stack?: string
  type: 'error' | 'unhandledrejection' | 'react_boundary'
}

function sendToEndpoint(payload: ErrorPayload) {
  const url = process.env.NEXT_PUBLIC_ERROR_REPORT_URL
  if (!url) return
  const body = JSON.stringify({
    ...payload,
    href: typeof window !== 'undefined' ? window.location.href : '',
    ua: typeof navigator !== 'undefined' ? navigator.userAgent : '',
  })
  try {
    void fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    })
  } catch {
    /* ignore */
  }
}

export function reportClientError(payload: ErrorPayload) {
  console.error('[clientError]', payload.type, payload.message, payload)
  pushAnalyticsEvent('client_error', payload as unknown as Record<string, unknown>)
  sendToEndpoint(payload)
}

let globalHandlersRegistered = false

export function registerGlobalErrorHandlers() {
  if (typeof window === 'undefined' || globalHandlersRegistered) return
  globalHandlersRegistered = true

  window.addEventListener('error', (event) => {
    reportClientError({
      type: 'error',
      message: event.message || String(event.error),
      source: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      stack: event.error?.stack,
    })
  })

  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason
    const message =
      reason instanceof Error ? reason.message : typeof reason === 'string' ? reason : 'unhandledrejection'
    reportClientError({
      type: 'unhandledrejection',
      message,
      stack: reason instanceof Error ? reason.stack : undefined,
    })
  })
}
