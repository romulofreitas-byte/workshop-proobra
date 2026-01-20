import type { Metadata } from 'next'
import ProobraPageContent from '@/components/sections/ProobraPageContent'

export const metadata: Metadata = {
  title: 'Workshop PROOBRA | Gestão Lucrativa de Obras em 2 Horas',
  description: 'Workshop ao vivo de 2 horas onde você aprende a controlar custos, tomar decisões com segurança e proteger seu lucro na gestão de obras. Método PROOBRA desenvolvido por Gabriel Gelape.',
  keywords: 'workshop gestão de obras, método PROOBRA, Gabriel Gelape, gestão lucrativa de obras, controle de custos, engenharia civil',
  openGraph: {
    title: 'Workshop PROOBRA | Gestão Lucrativa de Obras em 2 Horas',
    description: 'Workshop ao vivo de 2 horas onde você aprende a controlar custos, tomar decisões com segurança e proteger seu lucro na gestão de obras.',
    type: 'website',
    images: [
      {
        url: '/workshop-proobra.png',
        width: 1200,
        height: 630,
        alt: 'Workshop PROOBRA - Método de Gestão Lucrativa de Obras',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workshop PROOBRA | Gestão Lucrativa de Obras em 2 Horas',
    description: 'Aprenda o método que transforma execução de obra em gestão lucrativa. Workshop ao vivo com Gabriel Gelape.',
    images: ['/workshop-proobra.png'],
  },
}

export default function Home() {
  return <ProobraPageContent />
}
