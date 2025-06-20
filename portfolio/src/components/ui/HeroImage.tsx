'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const HeroImage = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-lg" /> // Skeleton fallback

  const imageSrc = theme === 'dark' ? '/images/home-dark.png' : '/images/home-light.png'

  return (
    <Image
      src={imageSrc}
      alt="Hero image"
      width={1200}
      height={600}
      className="w-full h-auto object-cover rounded-lg shadow-md"
      priority
    />
  )
}

export default HeroImage
