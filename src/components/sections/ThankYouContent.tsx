'use client'

import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Monitor, 
  Wifi, 
  Headphones, 
  MapPin, 
  BellOff, 
  Droplets,
  PenTool,
  Calculator,
  Brain,
  Sparkles,
  Calendar,
  Mail,
  MessageCircle
} from 'lucide-react'
import { WORKSHOP_SESSIONS } from '@/lib/constants'
import ProtectedImage from '@/components/ui/ProtectedImage'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const preparationSections = [
  {
    title: 'Preparação Técnica Essencial',
    icon: Monitor,
    color: 'proobra-blue-light',
    items: [
      {
        icon: Monitor,
        title: 'Acesso ao Google Drive e Google Planilhas',
        description: 'Certifique-se de ter uma conta Google (Gmail) ativa. Acesse drive.google.com e sheets.google.com para verificar se consegue navegar e criar documentos.',
      },
      {
        icon: Wifi,
        title: 'Teste sua Conexão',
        description: 'Verifique se sua internet está estável. Uma conexão de qualidade é fundamental para acompanhar a transmissão ao vivo.',
      },
      {
        icon: Monitor,
        title: 'Dispositivo',
        description: 'Recomendamos usar um computador ou notebook. A tela maior facilitará a visualização do conteúdo e a participação no exercício prático.',
      },
      {
        icon: Headphones,
        title: 'Áudio e Vídeo',
        description: 'Teste seus fones de ouvido ou o áudio do seu dispositivo. Garanta que você conseguirá ouvir claramente durante todo o workshop.',
      },
    ],
  },
  {
    title: 'Ambiente de Foco e Aprendizado',
    icon: MapPin,
    color: 'proobra-orange',
    items: [
      {
        icon: MapPin,
        title: 'Local Tranquilo',
        description: 'Escolha um local onde você não será interrompido(a) durante as 2 horas do workshop. Avise as pessoas ao seu redor.',
      },
      {
        icon: BellOff,
        title: 'Elimine Distrações',
        description: 'Feche outras abas do navegador, silencie notificações do celular e de outros aplicativos. Seu foco total fará toda a diferença.',
      },
      {
        icon: Droplets,
        title: 'Hidrate-se',
        description: 'Tenha uma garrafa de água ou uma xícara de café/chá por perto. Mantenha-se hidratado(a) para manter a concentração.',
      },
    ],
  },
  {
    title: 'Materiais de Apoio Físicos',
    icon: PenTool,
    color: 'proobra-blue-light',
    items: [
      {
        icon: PenTool,
        title: 'Caderno e Caneta',
        description: 'Tenha à mão para fazer anotações importantes, insights e, principalmente, para o nosso exercício prático de orçamento.',
      },
      {
        icon: Calculator,
        title: 'Calculadora',
        description: 'Uma calculadora simples pode ser útil para o exercício, caso prefira não usar a do computador.',
      },
    ],
  },
  {
    title: 'Mentalidade de Sucesso (Warm-up)',
    icon: Brain,
    color: 'proobra-orange',
    items: [
      {
        icon: Brain,
        title: 'Reflita sobre suas Dores',
        description: 'Pense nos últimos orçamentos de reforma que você fez. Quais foram as maiores dificuldades? Você sentiu segurança? Essa reflexão vai te ajudar a absorver o conteúdo.',
      },
      {
        icon: Sparkles,
        title: 'Venha com a Mente Aberta',
        description: 'Esteja pronto(a) para desaprender alguns conceitos e aprender uma nova forma de orçar que trará mais segurança e lucro para o seu negócio.',
      },
    ],
  },
]

export default function ThankYouContent() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="container-custom py-3">
          <div className="flex items-center justify-center gap-2">
            <ProtectedImage
              src="/icon-proobra.png"
              alt="PROOBRA"
              width={32}
              height={32}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <span className="text-white text-sm sm:text-base font-medium">Workshop Orçamento de Aço</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            >
              <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-green-500" />
            </motion.div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Parabéns! Sua vaga está{' '}
              <span className="text-green-500">garantida!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Você está a um passo de transformar a forma como orça suas reformas. 
              Prepare-se para blindar seus orçamentos!
            </p>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <motion.div 
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Calendar className="w-6 h-6 text-proobra-orange mx-auto mb-2" />
                <p className="text-sm text-gray-400 mb-2">Turmas disponíveis</p>
                <div className="space-y-1">
                  {WORKSHOP_SESSIONS.map((session) => (
                    <p key={session.id} className="text-white font-semibold text-sm">
                      {session.fullLabel}
                    </p>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Mail className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Link de Acesso</p>
                <p className="text-white font-semibold">Enviado por e-mail</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <MessageCircle className="w-6 h-6 text-proobra-blue-light mx-auto mb-2" />
                <p className="text-sm text-gray-400">Aviso importante</p>
                <p className="text-white font-semibold text-sm">
                  Após a compra, o Gabriel entrará em contato para enviar os documentos e links do Workshop.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Preparation Guide */}
      <section className="py-12 md:py-16 bg-gray-800/30">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Guia de Preparação: 24h para o Workshop
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Para garantir que você aproveite ao máximo cada minuto e saia com uma verdadeira 
              "virada de chave" na sua forma de orçar reformas, preparamos um checklist simples.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {preparationSections.map((section, sectionIndex) => {
              const SectionIcon = section.icon
              return (
                <motion.div 
                  key={sectionIndex}
                  className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 md:p-8"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-lg bg-${section.color}/20 flex items-center justify-center`}>
                      <SectionIcon className={`w-5 h-5 text-${section.color}`} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {section.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => {
                      const ItemIcon = item.icon
                      return (
                        <motion.div 
                          key={itemIndex}
                          className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-colors"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="w-8 h-8 rounded-lg bg-gray-700/50 flex items-center justify-center flex-shrink-0">
                            <ItemIcon className="w-4 h-4 text-gray-400" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-proobra-orange/10 via-proobra-blue-light/10 to-proobra-orange/10 border border-proobra-orange/30 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Estamos ansiosos para te encontrar!
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                Prepare-se para transformar a sua forma de orçar reformas e blindar seus lucros!
              </p>
              <p className="text-proobra-orange font-semibold">
                Até o workshop!
                <br />
                <span className="text-white">Equipe Método PROOBRA</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6">
        <div className="container-custom">
          <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Método PROOBRA. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  )
}
