'use client'

import { Play } from 'lucide-react'
import { useModalContext } from '@/contexts/ModalContext'
import ProtectedImage from './ProtectedImage'

interface VideoModalProps {
  thumbnail: string
  videoId?: string
  videoUrl?: string
  title?: string
  className?: string
}

export default function VideoModal({
  thumbnail,
  videoId,
  videoUrl,
  title = 'Vídeo',
  className = '',
}: VideoModalProps) {
  const { openModal } = useModalContext()

  const handleClick = () => {
    let embedUrl = ''
    
    if (videoId) {
      embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`
    } else if (videoUrl) {
      embedUrl = videoUrl
    }

    if (embedUrl) {
      openModal(
        <div className="p-4 bg-gray-900 text-white">
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <div className="aspect-video w-full">
            <iframe
              src={embedUrl}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`relative group w-full ${className}`}
      aria-label={`Reproduzir: ${title}`}
    >
      <div className="relative overflow-hidden rounded-lg shadow-xl">
        <ProtectedImage
          src={thumbnail}
          alt={title}
          width={1200}
          height={675}
          className="w-full h-auto aspect-video object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all flex items-center justify-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-proobra-orange to-[#d8891f] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
            <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" fill="white" />
          </div>
        </div>
      </div>
    </button>
  )
}
