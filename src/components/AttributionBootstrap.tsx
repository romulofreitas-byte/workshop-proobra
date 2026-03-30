'use client'

import { useEffect } from 'react'
import { initAttributionFromUrl } from '@/lib/analytics'

export default function AttributionBootstrap() {
  useEffect(() => {
    initAttributionFromUrl()
  }, [])
  return null
}
