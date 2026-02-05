import type { Metadata } from 'next'
import { Ubuntu, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import ClientComponents from '@/components/ClientComponents'
import './globals.css'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Workshop PROOBRA | Gestão Lucrativa de Obras',
  description: 'Aprenda o método que transforma execução de obra em gestão lucrativa. Controle custos, tome decisões com segurança e proteja seu lucro antes, durante e depois da obra.',
  keywords: 'gestão de obras, controle de custos, método PROOBRA, engenharia civil, gestão lucrativa, orçamento de obra',
  authors: [{ name: 'Gabriel Gelape' }],
  creator: 'Gabriel Gelape',
  publisher: 'Workshop PROOBRA',
  icons: {
    icon: '/logo-proobra.png',
    shortcut: '/logo-proobra.png',
    apple: '/logo-proobra.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3002'),
  openGraph: {
    title: 'Workshop PROOBRA | Gestão Lucrativa de Obras',
    description: 'O método que transforma execução de obra em gestão lucrativa. Workshop ao vivo de 2 horas.',
    url: '/',
    siteName: 'Workshop PROOBRA',
    images: [
      {
        url: '/workshop-proobra.png',
        width: 1200,
        height: 630,
        alt: 'Workshop PROOBRA',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workshop PROOBRA | Gestão Lucrativa de Obras',
    description: 'O método que transforma execução de obra em gestão lucrativa.',
    images: ['/workshop-proobra.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${ubuntu.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <ClientComponents />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
