import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MotoGrar - גרירת אופנועים, ATV ו-RZR/UTV',
    short_name: 'MotoGrar',
    description: 'שירותי גרירה וחילוץ מקצועיים לאופנועים, ATV ו-RZR/UTV בכל הארץ. זמינים 24/7.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#ff6b35',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/images/icons/icon-192.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
        purpose: 'maskable'
      },
      {
        src: '/images/icons/icon-512.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'maskable'
      }
    ],
    categories: ['utilities', 'business', 'transportation', 'automotive'],
    lang: 'he',
    dir: 'rtl'
  }
}