'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

interface GalleryImage {
  id: string
  src: string
  title: string
  description: string
  date: string
  location: string
  category: string
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/motorcycle-towing-1.jpg',
    title: 'חילוץ אופנוע Z',
    description: 'חילוץ אופנוע מתקדם בדרך הררית עם ציוד מיוחד',
    date: '15/11/2024',
    location: 'הרי ירושלים',
    category: 'חילוץ דרכים'
  },
  {
    id: '2',
    src: '/images/gallery/motorcycle-towing-2.jpg',
    title: 'העברת אופנוע למוסך',
    description: 'שירות העברה בטוחה של אופנוע פגוע למוסך מורשה',
    date: '12/11/2024',
    location: 'תל אביב',
    category: 'העברת אופנוע'
  },
  {
    id: '3',
    src: '/images/gallery/atv-recovery-1.jpg',
    title: 'שירות דחוף בלילה',
    description: 'חילוץ דחוף באמצע הלילה עם צוות מיומן 24/7',
    date: '10/11/2024',
    location: 'חיפה',
    category: 'שירות דחוף'
  },
  {
    id: '4',
    src: '/images/gallery/atv-recovery-2.jpg',
    title: 'חילוץ ATV מדרכים',
    description: 'חילוץ רכב ATV מתקוע בבוץ עם משאית מיוחדת',
    date: '08/11/2024',
    location: 'גליל עליון',
    category: 'חילוץ דרכים'
  },
  {
    id: '5',
    src: '/images/gallery/rzr-towing-1.jpg',
    title: 'העברת RZR למוסך',
    description: 'שירות מקצועי להעברת RZR עם ציוד מתמחה',
    date: '05/11/2024',
    location: 'באר שבע',
    category: 'העברת אופנוע'
  },
  {
    id: '6',
    src: '/images/gallery/rzr-towing-2.jpg',
    title: 'חילוץ בשטח קשה',
    description: 'חילוץ מורכב משטח קשה עם ציוד כבד',
    date: '03/11/2024',
    location: 'נגב',
    category: 'חילוץ דרכים'
  },
  {
    id: '7',
    src: '/images/gallery/night-service-1.jpg',
    title: 'שירות לילה מאוחר',
    description: 'זמינות מלאה גם בשעות הלילה המאוחרות',
    date: '01/11/2024',
    location: 'ירושלים',
    category: 'שירות דחוף'
  },
  {
    id: '8',
    src: '/images/gallery/night-service-2.jpg',
    title: 'חילוץ אופנוע ספורט',
    description: 'חילוץ מהיר ומקצועי של אופנוע ספורט',
    date: '28/10/2024',
    location: 'נתניה',
    category: 'חילוץ דרכים'
  },
  {
    id: '9',
    src: '/images/gallery/equipment-1.jpg',
    title: 'העברת אופנוע ישן',
    description: 'טיפול זהיר באופנועים קלאסיים וישנים',
    date: '25/10/2024',
    location: 'חולון',
    category: 'העברת אופנוע'
  },
  {
    id: '10',
    src: '/images/gallery/equipment-2.jpg',
    title: 'חילוץ בחורף',
    description: 'שירות מלא גם בתנאי מזג אוויר קשים',
    date: '22/10/2024',
    location: 'צפת',
    category: 'שירות דחוף'
  },
  {
    id: '11',
    src: '/images/gallery/rescue-1.jpg',
    title: 'חילוץ RZR מקצועי',
    description: 'מומחיות מיוחדת בחילוץ רכבי RZR/UTV',
    date: '20/10/2024',
    location: 'אילת',
    category: 'חילוץ דרכים'
  }
]

const categories = ['כל התמונות', 'חילוץ דרכים', 'העברת אופנוע', 'שירות דחוף']

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('כל התמונות')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages = selectedCategory === 'כל התמונות'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const currentFilteredIndex = filteredImages.findIndex(img => img.id === selectedImage?.id)
    const nextIndex = (currentFilteredIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
    setCurrentImageIndex(nextIndex)
  }

  const prevImage = () => {
    const currentFilteredIndex = filteredImages.findIndex(img => img.id === selectedImage?.id)
    const prevIndex = currentFilteredIndex === 0 ? filteredImages.length - 1 : currentFilteredIndex - 1
    setSelectedImage(filteredImages[prevIndex])
    setCurrentImageIndex(prevIndex)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">
            גלריה
            <span className="moto-gradient-text"> מקצועית</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            תמונות מהשטח - חילוצים, העברות ושירותים מקצועיים בכל רחבי הארץ
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 ${selectedCategory === category
                ? 'bg-orange-500 text-white neon-glow'
                : 'bg-black/50 backdrop-blur border-orange-500/30 text-orange-400 hover:bg-orange-500/10'
                }`}
            >
              <Filter className="w-4 h-4 ml-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
                onClick={() => openModal(image, index)}
              >
                <Card className="overflow-hidden bg-linear-to-br from-gray-900 to-black border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 card-hover">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = '/placeholder-image.jpg'
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-300 line-clamp-2">{image.description}</p>
                    </div>
                    <Badge className="absolute top-2 right-2 bg-orange-500/90 text-white">
                      {image.category}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] w-full mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -top-12 right-0 text-white hover:bg-white/10 z-10"
                  onClick={closeModal}
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation Buttons */}
                {filteredImages.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10"
                      onClick={prevImage}
                    >
                      <ChevronRight className="w-8 h-8" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10"
                      onClick={nextImage}
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </Button>
                  </>
                )}

                {/* Image */}
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = '/placeholder-image.jpg'
                    }}
                  />
                </div>

                {/* Image Info */}
                <div className="mt-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
                  <p className="text-gray-300 mb-4">{selectedImage.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 ml-2 text-orange-400" />
                      <span>{selectedImage.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 ml-2 text-orange-400" />
                      <span>{selectedImage.location}</span>
                    </div>
                    <Badge className="bg-orange-500/90 text-white">
                      {selectedImage.category}
                    </Badge>
                  </div>

                  {/* Progress Indicator */}
                  {filteredImages.length > 1 && (
                    <div className="mt-4 flex justify-center">
                      <div className="flex gap-2">
                        {filteredImages.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-orange-500' : 'bg-gray-600'
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}