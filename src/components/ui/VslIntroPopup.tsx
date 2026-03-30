'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { trackViewContent, trackVslCustom } from '@/lib/metaPixel'
import { getVslPrimaryAndFallbackSrc } from '@/lib/vslConfig'

interface VslIntroPopupProps {
  isOpen: boolean
  onClose: () => void
  onCloseMeta?: (meta: { elapsedMs: number; endedNaturally: boolean }) => void
  title: string
  subtitle: string
}

const FALLBACK_VIDEO_DURATION_SECONDS = 180

export default function VslIntroPopup({
  isOpen,
  onClose,
  onCloseMeta,
  title,
  subtitle,
}: VslIntroPopupProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const openedAtRef = useRef<number | null>(null)

  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [srcPair] = useState(() => getVslPrimaryAndFallbackSrc())
  const [primarySrc, fallbackSrc] = srcPair
  const [videoSrc, setVideoSrc] = useState(primarySrc)

  const requestClose = useCallback(
    (endedNaturally: boolean) => {
      const start = openedAtRef.current
      const elapsedMs = start != null ? Date.now() - start : 0
      onCloseMeta?.({ elapsedMs, endedNaturally })
      trackVslCustom('Close', {
        elapsed_ms: elapsedMs,
        completed_video: endedNaturally,
      })
      onClose()
    },
    [onClose, onCloseMeta]
  )

  useEffect(() => {
    if (!isOpen) {
      openedAtRef.current = null
      document.body.style.overflow = 'unset'
      return
    }

    openedAtRef.current = Date.now()
    trackViewContent('VSL Workshop Intro', 'video')
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      setProgress(0)
      setIsMuted(true)
      setVideoSrc(primarySrc)
      return
    }

    const video = videoRef.current
    if (!video) return

    video.currentTime = 0
    video.muted = true
    const tryPlay = () => {
      void video.play().catch(() => {
        // Autoplay pode falhar; o usuário pode usar controles se existirem.
      })
    }
    // Um frame após o commit: ref + src estáveis (evita play antes do elemento estar pronto).
    const rafId = requestAnimationFrame(() => {
      tryPlay()
    })

    const animateProgress = () => {
      const liveDuration =
        Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 0
      const baseDuration = liveDuration || FALLBACK_VIDEO_DURATION_SECONDS
      const linear = Math.min(video.currentTime / baseDuration, 1)

      const eased = 1 - Math.pow(1 - linear, 3)
      setProgress(eased)

      if (linear < 1 && isOpen && !video.ended) {
        rafRef.current = requestAnimationFrame(animateProgress)
      }
    }

    rafRef.current = requestAnimationFrame(animateProgress)

    return () => {
      cancelAnimationFrame(rafId)
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [isOpen, primarySrc])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        requestClose(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, requestClose])

  const handleToggleMute = () => {
    const video = videoRef.current
    if (!video) return

    const nextMutedState = !isMuted
    video.muted = nextMutedState
    setIsMuted(nextMutedState)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-b from-[#031425] via-[#061f34] to-[#031425]">
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-proobra-blue-light/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-proobra-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.75)_100%)]" />
      <div className="relative mx-auto flex h-[100svh] w-full max-w-6xl flex-col overflow-hidden px-0 pb-4 pt-4 sm:px-6 sm:pb-6 sm:pt-6">
        <button
          type="button"
          onClick={() => requestClose(false)}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white hover:bg-black/55"
          aria-label="Fechar vídeo de abertura"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-3 mt-10 px-4 text-center sm:mb-4 sm:mt-10 sm:px-0">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-4xl text-sm text-gray-200 sm:text-base lg:text-base"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="relative min-h-0 flex-1">
          <div className="relative h-full w-full overflow-hidden rounded-none border border-white/20 sm:rounded-2xl sm:border-white/15">
            <video
              key={videoSrc}
              ref={videoRef}
              src={videoSrc}
              className="h-full w-full object-contain"
              autoPlay
              muted
              playsInline
              controls={false}
              preload="auto"
              onError={() => {
                setVideoSrc((current) => (current !== fallbackSrc ? fallbackSrc : current))
              }}
              onEnded={() => requestClose(true)}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

            <div className="absolute bottom-4 left-4 right-4 space-y-3">
              <div className="h-2 w-full overflow-hidden rounded-full bg-black/55">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-proobra-orange via-proobra-blue-light to-proobra-orange"
                  style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.12, ease: 'easeOut' }}
                className="flex items-center justify-between"
              >
                <button
                  type="button"
                  onClick={handleToggleMute}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/35 bg-black/50 px-4 py-2 text-xs font-semibold text-white hover:bg-black/65 sm:text-sm"
                  aria-label={isMuted ? 'Desmutar vídeo' : 'Mutar vídeo'}
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-10 w-10 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  {isMuted ? 'Desmutar' : 'Mutar'}
                </button>

                <button
                  type="button"
                  onClick={() => requestClose(false)}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/35 bg-black/50 px-4 py-2 text-xs font-semibold text-white hover:bg-black/65 sm:text-sm"
                  aria-label="Fechar popup de abertura"
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-10 w-10 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                  Fechar
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
