import type { Metadata } from 'next'
import { generateSEO, pageSEO } from '@/lib/seo'
import HeroSection from '@/components/hero-section'
import GalleryPreview from '@/components/gallery-preview'

export const metadata: Metadata = generateSEO(pageSEO.home)

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20">
      <HeroSection />
      <GalleryPreview />
    </div>
  )
}
