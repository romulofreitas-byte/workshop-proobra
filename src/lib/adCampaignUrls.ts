/**
 * Convenção de UTMs para campanhas Meta (Instagram/Facebook) → esta landing.
 * Use uma combinação estável por conjunto/criativo para correlacionar no Clarity/GA4.
 *
 * Exemplo de URL base (troque o host pelo seu domínio):
 *   https://seu-dominio.com/?utm_source=facebook&utm_medium=paid&utm_campaign=workshop_abr2026&utm_content=video_hook_a
 *
 * - utm_source: facebook | instagram | meta
 * - utm_medium: paid | cpc | paid_social
 * - utm_campaign: identificador da campanha (ex.: workshop_abr2026)
 * - utm_content: id do criativo ou variação (ex.: reel_orcamento_01)
 * - utm_term: opcional (palavra-chave Advantage+ ou rótulo interno)
 */

export function buildLandingUrlWithUtm(
  baseUrl: string,
  utm: {
    source: string
    medium: string
    campaign: string
    content?: string
    term?: string
  }
): string {
  const u = new URL(baseUrl.includes('://') ? baseUrl : `https://${baseUrl}`)
  u.searchParams.set('utm_source', utm.source)
  u.searchParams.set('utm_medium', utm.medium)
  u.searchParams.set('utm_campaign', utm.campaign)
  if (utm.content) u.searchParams.set('utm_content', utm.content)
  if (utm.term) u.searchParams.set('utm_term', utm.term)
  return u.toString()
}
