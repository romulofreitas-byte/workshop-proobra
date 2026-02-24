import type { Metadata } from 'next'
import ThankYouContent from '@/components/sections/ThankYouContent'

export const metadata: Metadata = {
  title: 'Inscrição Confirmada | Workshop Orçamento de Aço',
  description: 'Sua vaga está garantida! Confira o guia de preparação para o Workshop Orçamento de Aço.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ObrigadoPage() {
  return <ThankYouContent />
}
