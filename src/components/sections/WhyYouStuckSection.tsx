'use client'

import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { AlertTriangle } from 'lucide-react'

const problems = [
  {
    title: 'Orçamentos feitos no achismo',
    description:
      'Sem estruturação adequada, os orçamentos são baseados em estimativas que não refletem a realidade.',
  },
  {
    title: 'Custos que aparecem tarde demais',
    description:
      'Gastos imprevistos só aparecem quando já impactam diretamente o lucro da obra.',
  },
  {
    title: 'Falta de clareza para explicar números ao cliente',
    description:
      'Dificuldade em justificar valores e mudanças, gerando desconfiança e conflitos.',
  },
  {
    title: 'Lucro corroído por pequenos erros acumulados',
    description:
      'Pequenos descontroles se somam e corroem o lucro de forma silenciosa.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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

export default function WhyYouStuckSection() {
  return (
    <Section id="problema" background="dark">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O problema não é a obra.
            <br />
            <span className="highlight-text">É a falta de método.</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            A maioria dos profissionais luta contra os mesmos problemas. Mas o problema real não está na execução, e sim na forma como a obra é gerida.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {problems.map((problem, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card glass hover>
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <AlertTriangle className="w-8 h-8 text-proobra-orange flex-shrink-0 mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-gray-200">{problem.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
