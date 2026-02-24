'use client'

import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import ProtectedImage from '@/components/ui/ProtectedImage'

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
            Resumo do Método Orçamento de Aço
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Entenda de forma visual como funciona o método para orçar com segurança e lucro.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-4xl bg-gray-800/50 border border-gray-700 rounded-2xl p-3 sm:p-4">
            <ProtectedImage
              src="/metodo-orcamento-aco.jpeg"
              alt="Resumo do método Orçamento de Aço"
              width={1600}
              height={900}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
