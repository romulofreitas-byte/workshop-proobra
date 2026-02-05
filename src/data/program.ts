export interface ProgramModule {
  key: string
  title: string
  duration: string
  description: string
  topics: string[]
}

export const programModules: ProgramModule[] = [
  {
    key: 'conscientizacao',
    title: 'Bloco 1: A Conscientização',
    duration: '20 min',
    description:
      'Entenda o problema real e a promessa: você vai orçar reformas com tanta segurança que o lucro será garantido.',
    topics: [
      'Introdução impactante e contextualização do universo de reformas',
      'A dor do mercado: insegurança e falta de padronização',
      'O verdadeiro objetivo do orçamento além de passar preço',
      'Expectativa vs. realidade: o alinhamento essencial',
    ],
  },
  {
    key: 'ciencia',
    title: 'Bloco 2: A Ciência do Orçamento',
    duration: '40 min',
    description:
      'O conceito por trás do método: como transformar demanda em serviços executáveis e orçáveis.',
    topics: [
      'Importância das visitas técnicas e coleta de informações',
      'Transformando demanda do cliente em serviços executáveis',
      'Elementos básicos do orçamento blindado (serviço, material, preço)',
      'Fluxograma do Método de Orçamento PROOBRA',
    ],
  },
  {
    key: 'pratica',
    title: 'Bloco 3: O Choque de Realidade',
    duration: '30 min',
    description:
      'Exercício prático ao vivo: monte uma tabela de orçamento em 10 minutos e descubra onde estão as falhas.',
    topics: [
      'Exercício dinâmico ao vivo: orçamento de banheiro',
      'Discussão das dificuldades encontradas pelos participantes',
      'Análise dos resultados e pontos de insegurança',
      'A prova da necessidade de um método blindado',
    ],
  },
  {
    key: 'solucao',
    title: 'Bloco 4: A Solução Definitiva',
    duration: '30 min',
    description:
      'Resultados além do preço final e apresentação da Planilha PROOBRA como ferramenta essencial.',
    topics: [
      'Custo por item de serviço, prestador e classe de materiais',
      'Visão 360° do orçamento: controle total',
      'Demonstração da Planilha PROOBRA na prática',
      'Oferta exclusiva para participantes do workshop',
    ],
  },
]
