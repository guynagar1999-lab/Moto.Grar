'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface CarouselImage {
  id: string
  src: string
  title: string
  description: string
}

const carouselImages: CarouselImage[] = [
  {
    id: '1',
    src: '/images/gallery/motorcycle-towing-1.jpg',
    title: 'חילוץ אופנוע Z',
    description: 'חילוץ אופנוע מתקדם בדרך הררית'
  },
  {
    id: '2',
    src: '/images/gallery/motorcycle-towing-2.jpg',
    title: 'העברת אופנוע למוסך',
    description: 'שירות העברה בטוחה של אופנוע פגוע'
  },
  {
    id: '3',
    src: '/images/gallery/atv-recovery-1.jpg',
    title: 'שירות דחוף בלילה',
    description: 'חילוץ דחוף באמצע הלילה עם צוות מיומן'
  },
  {
    id: '4',
    src: '/images/gallery/atv-recovery-2.jpg',
    title: 'חילוץ ATV מדרכים',
    description: 'חילוץ רכב ATV מתקוע בבוץ'
  },
  {
    id: '5',
    src: '/images/gallery/rzr-towing-1.jpg',
    title: 'העברת RZR למוסך',
    description: 'שירות מקצועי להעברת RZR עם ציוד מתמחה'
  },
  {
    id: '6',
    src: '/images/gallery/rzr-towing-2.jpg',
    title: 'חילוץ בשטח קשה',
    description: 'חילוץ מורכב משטח קשה עם ציוד כבד'
  },
  {
    id: '7',
    src: '/images/gallery/night-service-1.jpg',
    title: 'שירות לילה מאוחר',
    description: 'זמינות מלאה גם בשעות הלילה המאוחרות'
  },
  {
    id: '8',
    src: '/images/gallery/night-service-2.jpg',
    title: 'חילוץ אופנוע ספורט',
    description: 'חילוץ מהיר ומקצועי של אופנוע ספורט'
  },
  {
    id: '9',
    src: '/images/gallery/equipment-1.jpg',
    title: 'העברת אופנוע ישן',
    description: 'טיפול זהיר באופנועים קלאסיים וישנים'
  },
  {
    id: '10',
    src: '/images/gallery/equipment-2.jpg',
    title: 'חילוץ בחורף',
    description: 'שירות מלא גם בתנאי מזג אוויר קשים'
  },
  {
    id: '11',
    src: '/images/gallery/rzr-towing-1.jpg',
    title: 'חילוץ RZR מקצועי',
    description: 'מומחיות מיוחדת בחילוץ רכבי RZR/UTV'
  }
]

export default function GalleryPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isHovered])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
          מה אנחנו
          <span className="moto-gradient-text"> עושים</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          תמונות מהשטח - חילוצים והעברות מקצועיות בכל רחבי הארץ
        </p>
      </motion.div>

      {/* 3D Carousel Container */}
      <div
        className="relative h-96 md:h-[500px] perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-full preserve-3d">
          {carouselImages.map((image, index) => {
            const isActive = index === currentIndex
            const isPrev = index === (currentIndex - 1 + carouselImages.length) % carouselImages.length
            const isNext = index === (currentIndex + 1) % carouselImages.length

            let transform = ''
            let zIndex = 0
            let opacity = 0.3

            if (isActive) {
              transform = 'translateX(0) translateZ(0) rotateY(0deg) scale(1)'
              zIndex = 10
              opacity = 1
            } else if (isPrev) {
              transform = 'translateX(-60%) translateZ(-200px) rotateY(45deg) scale(0.8)'
              zIndex = 5
              opacity = 0.6
            } else if (isNext) {
              transform = 'translateX(60%) translateZ(-200px) rotateY(-45deg) scale(0.8)'
              zIndex = 5
              opacity = 0.6
            } else {
              transform = 'translateX(0) translateZ(-400px) rotateY(0deg) scale(0.6)'
              zIndex = 1
              opacity = 0.2
            }

            return (
              <motion.div
                key={image.id}
                className="absolute inset-0 w-full h-full cursor-pointer"
                style={{
                  transform,
                  zIndex,
                  opacity
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                onClick={() => goToSlide(index)}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = '/placeholder-image.jpg'
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm md:text-base text-gray-200">{image.description}</p>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute top-4 right-4 w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="text-white hover:bg-white/10 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Progress Indicators */}
          <div className="flex gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-orange-500 w-8'
                    : 'bg-white/50 hover:bg-white/75'
                  }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="text-white hover:bg-white/10 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Auto-play Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleAutoPlay}
            className="text-white hover:bg-white/10 backdrop-blur-sm ml-4"
          >
            {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* View All Gallery Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-8"
      >
        <Button
          variant="outline"
          size="lg"
          className="px-8 py-4 text-lg font-semibold bg-black/50 backdrop-blur border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
          onClick={() => window.location.href = '/gallery'}
        >
          צפה בכל הגלריה
        </Button>
      </motion.div>
    </div>
  )
}