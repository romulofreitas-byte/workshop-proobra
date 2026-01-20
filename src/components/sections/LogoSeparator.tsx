import Image from 'next/image'

export default function LogoSeparator() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex items-center gap-4">
        <div className="h-px bg-gray-300 w-20"></div>
        <Image
          src="/icon-proobra.png"
          alt="PROOBRA"
          width={60}
          height={60}
          className="opacity-60"
        />
        <div className="h-px bg-gray-300 w-20"></div>
      </div>
    </div>
  )
}
