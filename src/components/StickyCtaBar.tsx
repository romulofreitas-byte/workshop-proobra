'use client'

import { WORKSHOP_INFO } from '@/lib/constants'
import { trackInitiateCheckoutCTA } from '@/lib/metaPixel'

const PAYMENT_LINK = 'https://pag.ae/81scCkfpp'

type StickyCtaBarProps = {
  visible: boolean
}

export default function StickyCtaBar({ visible }: StickyCtaBarProps) {
  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[500] border-t border-white/10 bg-gray-900/95 px-3 py-2 shadow-lg backdrop-blur-md sm:px-4">
      <div className="mx-auto flex max-w-4xl items-center justify-center gap-3">
        <p className="hidden min-w-0 flex-1 truncate text-[11px] text-gray-300 sm:block sm:text-sm">
          <span className="font-semibold text-white">Workshop ao vivo</span>
          {' · '}
          Garanta sua vaga
        </p>
        <a
          href={PAYMENT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackInitiateCheckoutCTA('Sticky bar - Garanta sua vaga')}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-proobra-orange to-[#d8891f] px-4 py-2.5 text-xs font-black text-white shadow-md transition hover:from-[#d8891f] hover:to-proobra-orange sm:px-6 sm:text-sm"
        >
          Garantir vaga — R$ {WORKSHOP_INFO.price.toFixed(2)}
        </a>
      </div>
    </div>
  )
}
