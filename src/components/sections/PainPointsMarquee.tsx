'use client'

const painPoints = [
  'Insegurança ao passar orçamento',
  'Falta de padronização para orçar',
  'Variáveis infinitas nas reformas',
  'Medo de esquecer algo crucial',
  'Orçamento só para passar preço',
  'Lucro que vira surpresa negativa',
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
