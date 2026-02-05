'use client'

import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { WORKSHOP_INFO } from '@/lib/constants'
import { DollarSign, Video, Users, CreditCard, QrCode, FileText } from 'lucide-react'
import { trackCTAClick } from '@/lib/metaPixel'

export default function InvestmentSection() {
  const PAYMENT_LINK = 'https://pag.ae/81scCkfpp'
  
  const handleCTAClick = () => {
    trackCTAClick('Investment - Garanta sua vaga')
    window.open(PAYMENT_LINK, '_blank')
  }

  // Sincronizado com o hero - mesma porcentagem
  const progressPercentage = 18

  return (
    <Section id="investimento" background="dark">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Por que este workshop custa menos do que um erro de orçamento
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Um único item esquecido no orçamento, um serviço mal calculado ou um material sem preço definido costuma custar muito mais do que o valor deste workshop.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card glass highlight className="bg-gradient-to-br from-gray-800/50 to-gray-800/30 border-2 border-proobra-orange/50 p-6 md:p-8">
            {/* Preço e Badges de Pagamento */}
            <div className="text-center mb-8">
              <motion.div 
                className="flex items-center justify-center gap-2 mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <DollarSign className="w-8 h-8 text-proobra-orange" />
                </motion.div>
                <span className="text-5xl font-bold text-white">R$ {WORKSHOP_INFO.price.toFixed(2)}</span>
              </motion.div>
              
              <p className="text-xl text-gray-300 mb-6">
                Valor único • Sem mensalidades
              </p>

              {/* Badges de Formas de Pagamento */}
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Badge variant="success" className="flex items-center gap-2">
                  <QrCode className="w-4 h-4" />
                  <span>PIX</span>
                </Badge>
                <Badge variant="primary" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Boleto</span>
                </Badge>
                <Badge variant="warning" className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  <span>Cartão</span>
                </Badge>
              </motion.div>

              {/* Barra de Progresso Sincronizada */}
              <motion.div 
                className="space-y-2 max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center justify-between text-xs text-gray-200">
                  <span>Vagas disponíveis</span>
                  <span className="text-proobra-orange font-semibold">{progressPercentage}% preenchidas</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden relative">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-proobra-blue-dark to-proobra-blue-light rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${progressPercentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.6 }}
                  ></motion.div>
                  <div className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-proobra-blue-light/40 to-transparent animate-progress-flow"></div>
                </div>
              </motion.div>
            </div>

            {/* Benefícios */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div 
                className="flex items-start gap-3 bg-gray-800/60 rounded-lg p-4 border border-gray-700/50 backdrop-blur-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Video className="w-6 h-6 flex-shrink-0 mt-1 text-proobra-blue-light" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Encontro ao vivo</h3>
                  <p className="text-sm text-gray-200">
                    Via Google Meet, com interação em tempo real
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-3 bg-gray-800/60 rounded-lg p-4 border border-gray-700/50 backdrop-blur-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Users className="w-6 h-6 flex-shrink-0 mt-1 text-proobra-orange" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Interação ao vivo</h3>
                  <p className="text-sm text-gray-200">
                    Tire suas dúvidas em tempo real durante o workshop
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="cta"
                  size="lg"
                  onClick={handleCTAClick}
                  className="w-full md:w-auto"
                >
                  Garanta sua vaga agora
                </Button>
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
