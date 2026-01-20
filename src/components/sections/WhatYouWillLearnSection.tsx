'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Section from '@/components/ui/Section'
import { programModules } from '@/data/program'
import { Key, Target, TrendingUp, ChevronDown } from 'lucide-react'

const icons = [Key, Target, TrendingUp]

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

export default function WhatYouWillLearnSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleCardInteraction = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(index)
    }
  }

  return (
    <Section id="o-que-vai-aprender" background="gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            O que você vai aprender
          </h2>
          <p className="text-lg md:text-xl text-gray-300/90 max-w-2xl mx-auto font-light">
            Três chaves fundamentais para transformar sua gestão de obras
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {programModules.map((module, index) => {
            const Icon = icons[index]
            const isHovered = hoveredIndex === index
            const isExpanded = expandedIndex === index
            const showTopics = isHovered || isExpanded
            
            return (
              <motion.div
                key={module.key}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { 
                      duration: 0.6, 
                      ease: [0.22, 1, 0.36, 1] 
                    },
                  },
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardInteraction(index)}
                className="group relative"
              >
                <motion.div
                  className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 cursor-pointer overflow-hidden transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: 'rgba(4, 157, 217, 0.3)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-proobra-blue-light/10 to-proobra-orange/5 opacity-0"
                    animate={{ opacity: showTopics ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div 
                      className="mb-5 md:mb-6"
                      animate={{ 
                        scale: showTopics ? 1.1 : 1,
                        rotate: showTopics ? 5 : 0,
                      }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-proobra-blue-light/20 to-proobra-blue-dark/20 border border-proobra-blue-light/20">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-proobra-blue-light" />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3 tracking-tight">
                      {module.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300/80 mb-4 md:mb-6 text-sm md:text-base leading-relaxed font-light">
                      {module.description}
                    </p>

                    {/* Topics */}
                    <AnimatePresence>
                      {showTopics && (
                        <motion.ul 
                          className="space-y-2 md:space-y-3 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/10"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {module.topics.map((topic, topicIndex) => (
                            <motion.li
                              key={topicIndex}
                              className="flex items-start text-xs md:text-sm text-gray-300/90"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: topicIndex * 0.05 }}
                            >
                              <motion.span 
                                className="text-proobra-orange mr-2 md:mr-3 mt-0.5 flex-shrink-0"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: topicIndex * 0.05 + 0.1, type: 'spring' }}
                              >
                                <ChevronDown className="w-3.5 h-3.5 md:w-4 md:h-4 rotate-[-90deg]" />
                              </motion.span>
                              <span className="leading-relaxed">{topic}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>

                    {/* Hover/Tap indicator */}
                    {!showTopics && (
                      <motion.div
                        className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/10 text-xs md:text-sm text-proobra-blue-light/70 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="hidden md:inline">Passe o mouse para ver mais</span>
                        <span className="md:hidden">Toque para ver mais</span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}
