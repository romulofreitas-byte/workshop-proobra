export interface ProgramModule {
  key: string
  title: string
  description: string
  topics: string[]
}

export const programModules: ProgramModule[] = [
  {
    key: 'mentalidade',
    title: 'Chave 1: Mentalidade de Gestor',
    description:
      'Como sair da execução cega e assumir o papel de quem controla a obra com visão estratégica.',
    topics: [
      'Mudança de mindset: de executor para gestor',
      'Visão estratégica da obra',
      'Controle proativo vs. reativo',
      'Tomada de decisão baseada em dados',
    ],
  },
  {
    key: 'controle',
    title: 'Chave 2: Controle que Evita Prejuízo',
    description:
      'O que precisa estar organizado antes da obra começar e como evitar perdas invisíveis que matam o lucro.',
    topics: [
      'Estruturação antes da obra começar',
      'Controle de custos desde o início',
      'Identificação de perdas invisíveis',
      'Proteção do lucro em cada etapa',
    ],
  },
  {
    key: 'metodo',
    title: 'Chave 3: Método que Sustenta Crescimento',
    description:
      'Como estruturar um processo replicável, que gera previsibilidade e confiança.',
    topics: [
      'Processo replicável e estruturado',
      'Geração de previsibilidade',
      'Construção de confiança com clientes',
      'Escalabilidade do método',
    ],
  },
]
