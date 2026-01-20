import { Star, Quote } from 'lucide-react'
import ProtectedImage from './ProtectedImage'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  name: string
  role?: string
  image?: string
  text: string
  rating?: number
  className?: string
}

export default function TestimonialCard({
  name,
  role,
  image,
  text,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <div className={cn('bg-gray-800/40 border border-gray-700/50 rounded-xl backdrop-blur-xl shadow-lg p-6 h-full flex flex-col hover:border-proobra-orange/50 transition-all duration-300', className)}>
      {rating > 0 && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-5 h-5',
                i < rating ? 'text-proobra-orange fill-proobra-orange' : 'text-gray-600'
              )}
            />
          ))}
        </div>
      )}
      <Quote className="w-8 h-8 text-proobra-blue-light/50 mb-4" />
      <p className="text-gray-300 mb-6 flex-grow">"{text}"</p>
      <div className="flex items-center gap-4">
        {image && (
          <ProtectedImage
            src={image}
            alt={name}
            width={60}
            height={60}
            className="rounded-full"
          />
        )}
        <div>
          <p className="font-semibold text-white">{name}</p>
          {role && <p className="text-sm text-gray-400">{role}</p>}
        </div>
      </div>
    </div>
  )
}
