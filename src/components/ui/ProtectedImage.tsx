'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ProtectedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
}

export default function ProtectedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
}: ProtectedImageProps) {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault()
  }

  if (fill) {
    return (
      <div className={cn('relative', className)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes || '100vw'}
          priority={priority}
          className="protected-image"
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
        />
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={cn('protected-image', className)}
      priority={priority}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
    />
  )
}
