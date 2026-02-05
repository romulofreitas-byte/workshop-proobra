'use client'

import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { Calendar, Clock, Video, Users } from 'lucide-react'
import { WORKSHOP_INFO } from '@/lib/constants'

export default function EventDetailsSection() {
  return (
    <Section id="detalhes" background="dark">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Workshop Orçamento Blindado
          </h2>
          <p className="text-xl text-gray-200">
            Como orçar reformas com 100% de segurança e lucro garantido
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card glass className="bg-gray-800/60 border-2 border-proobra-blue-dark/50">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Video className="w-6 h-6 text-proobra-blue-light mt-1 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Formato</h3>
                    <p className="text-gray-300">{WORKSHOP_INFO.format}</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Clock className="w-6 h-6 text-proobra-blue-light mt-1 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Duração</h3>
                    <p className="text-gray-300">{WORKSHOP_INFO.duration}</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Calendar className="w-6 h-6 text-proobra-blue-light mt-1 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Data e Horário</h3>
                    <p className="text-gray-300">
                      {WORKSHOP_INFO.date} às {WORKSHOP_INFO.time}
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-6">
                <motion.div 
                  className="bg-gray-800/60 rounded-lg p-4 border border-gray-700/50 backdrop-blur-sm"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <h3 className="font-semibold text-white mb-3">Acesso via Google Meet</h3>
                  <p className="text-sm text-gray-200">
                    O link de acesso será enviado por e-mail após a inscrição. Em caso de dúvidas, entre em contato com o Gabriel.
                  </p>
                </motion.div>

              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
