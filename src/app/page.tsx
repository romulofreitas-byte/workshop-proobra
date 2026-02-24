import type { Metadata } from 'next'
import ProobraPageContent from '@/components/sections/ProobraPageContent'

export const metadata: Metadata = {
  title: 'Orçamento de Aço | Como Orçar Reformas com 100% de Segurança e Lucro Garantido',
  description: 'Workshop ao vivo de 2 horas onde você aprende a orçar reformas com segurança total e lucro garantido. Método PROOBRA desenvolvido por Gabriel Gelape.',
  keywords: 'orçamento de reformas, orçamento blindado, método PROOBRA, Gabriel Gelape, orçar reformas, planilha de orçamento, engenharia civil, reformas residenciais',
  openGraph: {
    title: 'Orçamento de Aço | Como Orçar Reformas com 100% de Segurança e Lucro Garantido',
    description: 'Workshop ao vivo de 2 horas onde você aprende a orçar reformas com segurança total e lucro garantido.',
    type: 'website',
    images: [
      {
        url: '/workshop-proobra.png',
        width: 1200,
        height: 630,
        alt: 'Workshop Orçamento de Aço - Método PROOBRA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orçamento de Aço | Como Orçar Reformas com 100% de Segurança e Lucro Garantido',
    description: 'Aprenda a orçar reformas com segurança total e lucro garantido. Workshop ao vivo com Gabriel Gelape.',
    images: ['/workshop-proobra.png'],
  },
}

export default function Home() {
  return <ProobraPageContent />
}
