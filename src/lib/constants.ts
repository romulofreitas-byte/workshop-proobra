export const WORKSHOP_INFO = {
  title: 'WORKSHOP PROOBRA | MÉTODO DE GESTÃO LUCRATIVA DE OBRAS',
  subtitle: 'O método que transforma execução de obra em gestão lucrativa',
  date: '[DATA DO WORKSHOP]', // Atualizar com data real
  dateObj: new Date(), // Atualizar com data real
  time: '[HORÁRIO]', // Ex: "19:00"
  timezone: 'America/Sao_Paulo',
  duration: '2 horas',
  format: 'Online • Ao vivo via Google Meet',
  price: 49.99,
  mentor: 'Gabriel Gelape',
  mentorTitle: 'Engenheiro Civil',
  currency: 'BRL',
}

export const GOOGLE_MEET_CONFIG = {
  link: process.env.GOOGLE_MEET_LINK || 'https://meet.google.com/xxx-xxxx-xxx',
  phone: process.env.GOOGLE_MEET_PHONE || '+55 XX XXXX-XXXX',
  pin: process.env.GOOGLE_MEET_PIN || 'XXX XXX XXX#',
  phoneLink: process.env.GOOGLE_MEET_PHONE_LINK || 'https://tel.meet/xxx-xxxx-xxx?pin=xxxxxxxxxxxx',
}
