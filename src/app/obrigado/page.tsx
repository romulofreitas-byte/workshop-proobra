import type { Metadata } from 'next'
import ThankYouContent from '@/components/sections/ThankYouContent'

export const metadata: Metadata = {
  title: 'Inscrição Confirmada | Workshop Orçamento Blindado',
  description: 'Sua vaga está garantida! Confira o guia de preparação para o Workshop Orçamento Blindado.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ObrigadoPage() {
  return <ThankYouContent />
}
