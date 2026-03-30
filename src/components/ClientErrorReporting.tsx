'use client'

import { useEffect } from 'react'
import { registerGlobalErrorHandlers } from '@/lib/clientErrorReporting'

export default function ClientErrorReporting() {
  useEffect(() => {
    registerGlobalErrorHandlers()
  }, [])
  return null
}
