'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import ProtectedImage from '@/components/ui/ProtectedImage'
import { WORKSHOP_INFO } from '@/lib/constants'

export default function AboutGabrielProobraSection() {
  return (
    <Section id="mentor" background="dark">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quem vai conduzir o{' '}
            <span className="gradient-text-shimmer">Workshop</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-proobra-orange to-transparent mx-auto mt-4"></div>
        </motion.div>

        <div className="relative">
          {/* Card principal com gradiente moderno */}
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Efeito de brilho animado no fundo */}
            <div className="absolute inset-0 bg-gradient-to-r from-proobra-orange/5 via-proobra-blue-light/5 to-proobra-orange/5 animate-shimmer bg-[length:200%_auto]"></div>
            
            {/* Borda brilhante animada */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-proobra-orange/30 via-proobra-blue-light/30 to-proobra-orange/30 bg-clip-border opacity-50"></div>
            
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Foto em destaque - lado esquerdo */}
                <motion.div 
                  className="flex-shrink-0 relative"
                  initial={{ opacity: 0, scale: 0.8, x: -50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Anel decorativo ao redor da foto */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-proobra-orange via-proobra-blue-light to-proobra-orange opacity-60 blur-xl animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-proobra-orange/40 via-proobra-blue-light/40 to-proobra-orange/40" style={{ animation: 'spin 20s linear infinite' }}></div>
                  
                  {/* Container da foto com borda gradiente */}
                  <div className="relative p-2 rounded-full bg-gradient-to-r from-proobra-orange via-proobra-blue-light to-proobra-orange">
                    <div className="relative rounded-full overflow-hidden bg-gray-900 p-1">
                      <ProtectedImage
                        src="/gabriel-mentor.jpg"
                        alt={WORKSHOP_INFO.mentor}
                        width={320}
                        height={320}
                        className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl"
                      />
                    </div>
                  </div>
                  
                  {/* Badge decorativo */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-proobra-orange to-proobra-blue-light rounded-full shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <span className="text-white font-bold text-sm">Mentor</span>
                  </motion.div>
                </motion.div>

                {/* Conteúdo - lado direito */}
                <motion.div 
                  className="flex-1 text-center lg:text-left"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold text-white mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {WORKSHOP_INFO.mentor}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-proobra-blue-light font-semibold text-lg md:text-xl mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {WORKSHOP_INFO.mentorTitle}
                  </motion.p>
                  
                  <motion.div
                    className="space-y-4 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Engenheiro Civil com vivência real em campo, especialista em orçamento e gestão de reformas. Criador do{' '}
                      <span className="text-proobra-orange font-semibold">Método PROOBRA</span>, desenvolvido a partir de erros, acertos e validações em obras reais — com foco total em orçamentos blindados, controle e lucro garantido.
                    </p>
                  </motion.div>
                  
                  {/* Quote destacado */}
                  <motion.div
                    className="relative mt-8 p-6 rounded-2xl bg-gradient-to-r from-proobra-orange/10 via-proobra-blue-light/10 to-proobra-orange/10 border border-proobra-orange/30"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <div className="absolute top-4 left-4 text-proobra-orange text-4xl opacity-30">"</div>
                    <p className="text-gray-200 font-medium italic text-lg md:text-xl relative z-10 pl-8">
                      O método de orçamento que ensino foi construído no chão da obra. Cada erro virou aprendizado, cada acerto virou processo.
                    </p>
                    <div className="absolute bottom-4 right-4 text-proobra-orange text-4xl opacity-30">"</div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
