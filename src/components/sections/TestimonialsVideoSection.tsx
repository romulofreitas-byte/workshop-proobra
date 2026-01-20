'use client'

import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import VideoModal from '@/components/ui/VideoModal'

export default function TestimonialsVideoSection() {
  return (
    <Section id="video" background="dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Aula de Apresentação do Método PROOBRA
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Descubra como transformar a gestão da sua obra e proteger seu lucro
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <VideoModal
            thumbnail="/workshop-proobra.png"
            videoId="adOVI5Y9aSE"
            title="Aula de Apresentação do Método PROOBRA"
            className="w-full max-w-4xl"
          />
        </motion.div>
      </div>
    </Section>
  )
}
