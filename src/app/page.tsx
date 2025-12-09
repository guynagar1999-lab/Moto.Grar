import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { generateSEO, pageSEO } from '@/lib/seo'
import HeroSection from '@/components/hero-section'

const GalleryPreview = dynamic(() => import('@/components/gallery-preview'), {
  loading: () => <div className="h-[400px] bg-gray-900 animate-pulse" />
})
const ReviewCarousel = dynamic(() => import('@/components/review-carousel').then(mod => mod.ReviewCarousel), {
  loading: () => <div className="h-[400px] bg-gray-900 animate-pulse" />
})

export const metadata: Metadata = generateSEO(pageSEO.home)

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20">
      <HeroSection />
      <GalleryPreview />
      <ReviewCarousel />
    </div>
  )
}
