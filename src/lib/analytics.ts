/**
 * Atribuição (UTM) e micro-eventos para funil pago → landing.
 * Persiste primeira toque de UTMs na sessão e espelha no dataLayer (GA4-ready).
 */

export type UtmParams = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
}

const STORAGE_KEY = 'proobra_attribution_v1'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

function ensureDataLayer() {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
}

export function parseUtmFromSearch(search: string): UtmParams {
  const params = new URLSearchParams(search)
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const
  const out: UtmParams = {}
  for (const k of keys) {
    const v = params.get(k)
    if (v) out[k] = v
  }
  return out
}

export function getStoredAttribution(): UtmParams | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as UtmParams
  } catch {
    return null
  }
}

/** Grava UTMs da URL na primeira visita da sessão e dispara dataLayer. */
export function initAttributionFromUrl(): UtmParams {
  if (typeof window === 'undefined') return {}

  const fromUrl = parseUtmFromSearch(window.location.search)
  const existing = getStoredAttribution()

  if (Object.keys(fromUrl).length === 0) {
    if (existing && Object.keys(existing).length > 0) {
      pushAnalyticsEvent('attribution_restore', { ...existing })
    }
    return existing || {}
  }

  const merged = { ...existing, ...fromUrl }
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
  } catch {
    /* ignore quota */
  }

  ensureDataLayer()
  pushAnalyticsEvent('utm_first_touch', merged)
  return merged
}

export function pushAnalyticsEvent(
  event: string,
  params?: Record<string, unknown>
) {
  if (typeof window === 'undefined') return
  ensureDataLayer()
  window.dataLayer!.push({
    event,
    ...params,
    ts: Date.now(),
  })
}
