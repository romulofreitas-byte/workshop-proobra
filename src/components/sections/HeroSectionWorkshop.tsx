'use client'

import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import PainPointsMarquee from './PainPointsMarquee'
import { WORKSHOP_INFO } from '@/lib/constants'
import { trackCTAClick } from '@/lib/metaPixel'
import ProtectedImage from '@/components/ui/ProtectedImage'

export default function HeroSectionWorkshop() {
  const PAYMENT_LINK = 'https://pag.ae/81scCkfpp'
  
  const handleCTAClick = () => {
    trackCTAClick('Hero - Garanta sua vaga')
  }

  const progressPercentage = 18
  
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="relative overflow-hidden flex flex-col bg-gray-900 min-h-screen lg:h-screen">
      
      {/* Header */}
      <div className="relative z-10 border-b border-gray-800">
        <div className="container-custom py-1.5 sm:py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <ProtectedImage
                src="/logo-proobra.png"
                alt="PROOBRA"
                width={100}
                height={28}
                className="h-5 sm:h-7 w-auto"
              />
              <span className="text-white text-[10px] sm:text-sm">Workshop Orçamento Blindado</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-proobra-orange" />
                <span className="text-white text-[9px] sm:text-xs">{WORKSHOP_INFO.date}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-proobra-blue-light" />
                <span className="text-white text-[9px] sm:text-xs">{WORKSHOP_INFO.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Background que cobre até o marquee */}
      <div className="relative flex-1 lg:hidden">
        {/* Imagem Mobile - Background absoluto */}
        <div className="absolute inset-0" style={{ top: '-50px' }}>
          <ProtectedImage
            src="/gabriel-hero-mobile4.png"
            alt={WORKSHOP_INFO.mentor}
            fill
            sizes="100vw"
            className="object-cover object-top z-0"
            priority
          />
        </div>

        {/* Badge acima da imagem - Mobile */}
        <motion.div 
          className="px-4 pt-4 pb-2 text-center relative z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-proobra-orange/30 to-proobra-orange/20 border border-proobra-orange/50 rounded-full backdrop-blur-sm shadow-lg">
            <span className="text-proobra-orange font-semibold text-[10px]">
              2 horas • Google Meet • Ao vivo
            </span>
          </div>
        </motion.div>

        {/* Conteúdo Mobile */}
        <motion.div 
          className="px-4 pb-6 flex flex-col justify-end relative z-20 flex-1"
          style={{ paddingTop: '45vh' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
        <div className="max-w-md mx-auto text-center space-y-3">
          <motion.h1 
            className="text-[17px] sm:text-xl font-black leading-tight"
            variants={itemVariants}
          >
            Aprenda a orçar reformas com tanta{' '}
            <span className="highlight-text-glow">segurança</span>
            <br />
            que o lucro será{' '}
            <span className="highlight-text-glow">garantido</span>.
          </motion.h1>
          
          <motion.p 
            className="text-[11px] text-gray-200"
            variants={itemVariants}
          >
            Neste workshop ao vivo, você vai aprender o método que transforma insegurança em controle total na hora de orçar suas reformas.
          </motion.p>

          {/* Preço Mobile */}
          <motion.div 
            className="flex items-center justify-center gap-3"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-800/70 border border-proobra-orange/40 rounded-xl backdrop-blur-sm">
              <span className="text-gray-300 text-sm line-through">De R$ 297</span>
              <span className="text-proobra-orange font-bold text-xl">R$ {WORKSHOP_INFO.price.toFixed(2)}</span>
            </div>
          </motion.div>

          {/* CTA Mobile */}
          <motion.div variants={itemVariants}>
            <motion.a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCTAClick}
              className="group relative inline-flex items-center justify-center px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-proobra-orange to-[#d8891f] text-white font-black text-sm sm:text-base rounded-full hover:from-[#d8891f] hover:to-proobra-orange transition-all duration-300 shadow-2xl hover:shadow-proobra-orange/40 hover:scale-105 button-shine-effect cursor-pointer w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative drop-shadow-sm">Garantir vaga por R$ {WORKSHOP_INFO.price.toFixed(2)}</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-proobra-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </motion.div>

          {/* Barra de Progresso Mobile */}
          <motion.div 
            className="space-y-2"
            variants={itemVariants}
          >
            <div className="flex items-center justify-between text-xs text-gray-200">
              <span>Vagas disponíveis</span>
              <span className="text-proobra-orange font-semibold">{progressPercentage}% preenchidas</span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden relative">
              <motion.div 
                className="h-full bg-gradient-to-r from-proobra-blue-dark to-proobra-blue-light rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              ></motion.div>
              <div className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-proobra-blue-light/40 to-transparent animate-progress-flow"></div>
            </div>
          </motion.div>
        </div>
        </motion.div>
      </div>

      {/* Layout Desktop */}
      <div className="hidden lg:block relative flex-1">
        {/* Imagem Desktop - Full Screen Background */}
        <div className="absolute inset-0">
          <ProtectedImage
            src="/gabriel-hero-desktop4.png"
            alt={WORKSHOP_INFO.mentor}
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
        </div>
        
        {/* Conteúdo sobreposto */}
        <div className="container-custom relative z-30 h-full flex items-center py-12">
          <motion.div 
            className="max-w-xl text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-proobra-orange/30 to-proobra-orange/20 border border-proobra-orange/50 rounded-full backdrop-blur-sm shadow-lg mb-6"
              variants={itemVariants}
            >
              <span className="text-proobra-orange font-semibold text-xs tracking-wide">
                2 horas • Google Meet • Ao vivo
              </span>
            </motion.div>

            <motion.h1 
              className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-4"
              variants={itemVariants}
            >
              Aprenda a orçar reformas com tanta{' '}
              <span className="highlight-text-glow">segurança</span>
              <br />
              que o lucro será{' '}
              <span className="highlight-text-glow">garantido</span>.
            </motion.h1>
            
            <motion.p 
              className="text-[13px] sm:text-sm text-gray-200 mb-6"
              variants={itemVariants}
            >
              Neste workshop ao vivo, você vai aprender o método que transforma insegurança em controle total na hora de orçar suas reformas.
            </motion.p>

            {/* Preço Desktop */}
            <motion.div 
              className="flex items-center gap-3 mb-6"
              variants={itemVariants}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-800/70 border border-proobra-orange/40 rounded-xl backdrop-blur-sm">
                <span className="text-gray-300 text-sm line-through">De R$ 297</span>
                <span className="text-proobra-orange font-bold text-xl">R$ {WORKSHOP_INFO.price.toFixed(2)}</span>
              </div>
            </motion.div>

            {/* CTA Desktop */}
            <motion.div 
              className="mb-6"
              variants={itemVariants}
            >
              <motion.a
                href={PAYMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCTAClick}
                className="group relative inline-flex items-center justify-center px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-proobra-orange to-[#d8891f] text-white font-black text-sm sm:text-base rounded-full hover:from-[#d8891f] hover:to-proobra-orange transition-all duration-300 shadow-2xl hover:shadow-proobra-orange/40 button-shine-effect cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative drop-shadow-sm">Garantir vaga por R$ {WORKSHOP_INFO.price.toFixed(2)}</span>
                <ArrowRight className="ml-2 w-5 h-5 inline-block" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-proobra-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            </motion.div>

            {/* Barra de Progresso Desktop */}
            <motion.div 
              className="space-y-2 max-w-md"
              variants={itemVariants}
            >
              <div className="flex items-center justify-between text-xs text-gray-200">
                <span>Vagas disponíveis</span>
                <span className="text-proobra-orange font-semibold">{progressPercentage}% preenchidas</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden relative">
                <motion.div 
                  className="h-full bg-gradient-to-r from-proobra-blue-dark to-proobra-blue-light rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                ></motion.div>
                <div className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-proobra-blue-light/40 to-transparent animate-progress-flow"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* PainPointsMarquee */}
      <div className="relative z-[35] mt-auto">
        <PainPointsMarquee />
      </div>

    </section>
  )
}
