/**
 * VSL em /public. Prefira MP4 na web (menor, mais compatível).
 * NEXT_PUBLIC_VSL_PREFER_MP4=1 tenta .mp4 primeiro; senão usa .mov.
 *
 * ffmpeg -i vsl-workshop.mov -c:v libx264 -crf 23 -c:a aac vsl-workshop.mp4
 */
const MOV = '/vsl-workshop.mov'
const MP4 = '/vsl-workshop.mp4'

export function getVslPrimaryAndFallbackSrc(): [string, string] {
  if (process.env.NEXT_PUBLIC_VSL_PREFER_MP4 === '1') {
    return [MP4, MOV]
  }
  return [MOV, MP4]
}

/** Atraso (ms) antes do modal VSL — hero fica visível primeiro. 0 = imediato. */
export function getVslDelayMs(): number {
  const raw = process.env.NEXT_PUBLIC_VSL_DELAY_MS
  if (raw === undefined || raw === '') return 4000
  const n = Number(raw)
  return Number.isFinite(n) && n >= 0 ? n : 4000
}
