'use client'

import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { ArrowRight, Mail, Calendar } from 'lucide-react'
import { trackCTAClick } from '@/lib/metaPixel'

export default function FinalCTAWorkshopSection() {
  const PAYMENT_LINK = 'https://pag.ae/81scCkfpp'
  
  const handleCTAClick = () => {
    trackCTAClick('Final CTA - Garanta sua vaga')
    window.open(PAYMENT_LINK, '_blank')
  }

  return (
    <Section id="cta-final" background="gradient">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          Você pode continuar orçando no achismo…
          <br />
          <span className="highlight-text-glow">ou começar a blindar seus orçamentos.</span>
        </motion.h2>

        <motion.p 
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Adquira a segurança de orçar reformas com lucro garantido, não uma surpresa.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
            <Button
              variant="cta"
              size="lg"
              onClick={handleCTAClick}
              className="w-full sm:w-auto"
            >
              Garanta sua vaga agora
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <ArrowRight className="ml-2 w-5 h-5 inline-block" />
              </motion.span>
            </Button>
          </a>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div 
            className="flex items-center justify-center gap-3 text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Mail className="w-6 h-6 text-proobra-orange" />
            </motion.div>
            <span>Receba o link do encontro por e-mail</span>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center gap-3 text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: -5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Calendar className="w-6 h-6 text-proobra-orange" />
            </motion.div>
            <span>Participe ao vivo no horário agendado</span>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
