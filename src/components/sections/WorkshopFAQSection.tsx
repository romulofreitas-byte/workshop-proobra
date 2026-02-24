import Section from '@/components/ui/Section'
import FAQ from '@/components/ui/FAQ'
import { faqItems } from '@/data/faq'

export default function WorkshopFAQSection() {
  return (
    <Section id="faq" background="dark">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-200">
            Tire suas dúvidas sobre o Workshop Orçamento de Aço
          </p>
        </div>

        <FAQ items={faqItems} />
      </div>
    </Section>
  )
}
