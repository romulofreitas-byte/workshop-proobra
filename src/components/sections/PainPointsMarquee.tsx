'use client'

const painPoints = [
  'Orçamentos feitos no achismo',
  'Custos que aparecem tarde demais',
  'Falta de clareza para explicar números ao cliente',
  'Lucro corroído por pequenos erros acumulados',
  'Decisões tomadas no escuro',
  'Falta de controle real sobre a obra',
]

export default function PainPointsMarquee() {
  // Triplicar o array para loop perfeito
  const triplePoints = [...painPoints, ...painPoints, ...painPoints]

  return (
    <div className="overflow-hidden bg-gray-900 border-t border-gray-800 py-4">
      <div className="flex animate-marquee whitespace-nowrap w-max">
        {triplePoints.map((point, index) => (
          <div key={index} className="flex items-center mx-6">
            <span className="text-gray-200 text-sm sm:text-base font-medium">
              {point}
            </span>
            <span className="text-proobra-orange mx-4">•</span>
          </div>
        ))}
      </div>
    </div>
  )
}
