export const WORKSHOP_INFO = {
  title: 'ORÇAMENTO DE AÇO | WORKSHOP PROOBRA',
  subtitle: 'Como orçar reformas com 100% de segurança e lucro garantido',
  date: '07/03',
  dateObj: new Date('2026-03-07T10:00:00-03:00'),
  time: '10h',
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
