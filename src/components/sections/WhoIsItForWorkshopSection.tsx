'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import AnimatedCard from '@/components/ui/AnimatedCard'
import { Check, X, Star, Target, Users, Briefcase, TrendingUp, AlertCircle } from 'lucide-react'

const forWho = [
  { text: 'Engenheiros civis', icon: Target },
  { text: 'Arquitetos', icon: Users },
  { text: 'Empreiteiros', icon: Briefcase },
  { text: 'Profissionais que gerenciam obras', icon: Users },
  { text: 'Quem quer ganhar clareza, controle e margem', icon: TrendingUp },
]

const notFor = [
  { text: 'Quem busca atalhos mágicos', icon: AlertCircle },
  { text: 'Quem não quer mudar a forma de pensar', icon: AlertCircle },
  { text: 'Quem acredita que gestão é burocracia', icon: AlertCircle },
]

export default function WhoIsItForWorkshopSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <Section id="para-quem" background="dark">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Star className="w-6 h-6 text-proobra-orange fill-proobra-orange" />
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Para quem é este <span className="gradient-text">workshop</span>
            </h2>
            <Star className="w-6 h-6 text-proobra-orange fill-proobra-orange" />
          </motion.div>
          <p className="text-gray-400 text-lg mt-4">
            Descubra se este workshop é para você
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Card: Para quem é */}
          <motion.div 
            variants={itemVariants}
            className="h-full"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatedCard 
              glass 
              className="h-full flex flex-col bg-gradient-to-br from-gray-800/80 via-gray-800/60 to-gray-900/60 border-2 border-proobra-blue-light/30 hover:border-proobra-blue-light/70 transition-all duration-500 relative overflow-hidden group"
            >
              {/* Efeito de brilho animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-proobra-blue-light/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              {/* Header do card */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-proobra-blue-dark via-proobra-blue-light to-proobra-blue-dark rounded-2xl flex items-center justify-center shadow-lg shadow-proobra-blue-light/30 group-hover:shadow-proobra-blue-light/50 transition-all duration-300">
                    <Check className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-br from-proobra-blue-light to-proobra-blue-dark rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"
                    animate={{ rotate: hoveredIndex === 0 ? 360 : 0 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    Para quem é
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-proobra-blue-light to-proobra-blue-dark rounded-full" />
                </div>
              </div>

              {/* Lista de itens */}
              <ul className="space-y-4 flex-1 relative z-10">
                {forWho.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-4 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="mt-1 flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <div className="w-10 h-10 bg-proobra-blue-light/20 rounded-lg flex items-center justify-center group-hover/item:bg-proobra-blue-light/40 transition-colors duration-300">
                          <Icon className="w-5 h-5 text-proobra-blue-light" />
                        </div>
                      </motion.div>
                      <span className="text-gray-300 text-base md:text-lg group-hover/item:text-white transition-colors duration-300 flex-1 pt-1.5">
                        {item.text}
                      </span>
                    </motion.li>
                  )
                })}
              </ul>

              {/* Decoração de fundo */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-proobra-blue-light/5 rounded-full blur-3xl group-hover:bg-proobra-blue-light/10 transition-all duration-500" />
            </AnimatedCard>
          </motion.div>

          {/* Card: Não é para */}
          <motion.div 
            variants={itemVariants}
            className="h-full"
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatedCard 
              glass 
              className="h-full flex flex-col bg-gradient-to-br from-gray-800/80 via-gray-800/60 to-gray-900/60 border-2 border-red-500/30 hover:border-red-500/70 transition-all duration-500 relative overflow-hidden group"
            >
              {/* Efeito de brilho animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              {/* Header do card */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.15, rotate: [0, 10, -10, 10, 0] }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 via-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:shadow-red-500/50 transition-all duration-300">
                    <X className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"
                    animate={{ rotate: hoveredIndex === 1 ? -360 : 0 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    Não é para
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
                </div>
              </div>

              {/* Lista de itens */}
              <ul className="space-y-4 flex-1 relative z-10">
                {notFor.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-4 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="mt-1 flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-red-500/40 transition-colors duration-300">
                          <Icon className="w-5 h-5 text-red-400" />
                        </div>
                      </motion.div>
                      <span className="text-gray-300 text-base md:text-lg group-hover/item:text-white transition-colors duration-300 flex-1 pt-1.5">
                        {item.text}
                      </span>
                    </motion.li>
                  )
                })}
              </ul>

              {/* Decoração de fundo */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-all duration-500" />
            </AnimatedCard>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
