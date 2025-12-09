import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://grar-alfa.co.il'

  // Static routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/services/motorcycle',
    '/services/atv',
    '/services/rzr',
    '/testimonials',
    '/gallery',
    '/pro-garage',
    '/service-call',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}