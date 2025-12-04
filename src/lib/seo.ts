import { Metadata } from 'next'

export interface PageSEO {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  noindex?: boolean
  structuredData?: object
}

export function generateSEO(page: PageSEO, baseUrl: string = 'https://grar-alfa.co.il'): Metadata {
  const title = `${page.title} | Grar Alfa`
  const description = page.description
  const canonical = page.canonical || baseUrl

  return {
    title,
    description,
    keywords: page.keywords,
    authors: [{ name: 'Grar Alfa - גיא נגר' }],
    creator: 'Grar Alfa',
    publisher: 'Grar Alfa',
    formatDetection: {
      email: false,
      address: false,
      telephone: true,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      locale: 'he_IL',
      url: canonical,
      title,
      description,
      siteName: 'Grar Alfa',
      images: [
        {
          url: page.ogImage || '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [page.ogImage || '/images/og-image.jpg'],
    },
    robots: {
      index: !page.noindex,
      follow: !page.noindex,
      googleBot: {
        index: !page.noindex,
        follow: !page.noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
    other: {
      'google-site-verification': 'your-google-verification-code',
    },
  }
}

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'גרירת אופנועים, ATV ו-RZR/UTV מקצועית',
    description: 'שירותי גרירה וחילוץ מקצועיים לאופנועים, ATV ו-RZR/UTV בכל הארץ. זמינים 24/7 עם ציוד מתקדם וצוות מומחים. בעלים: גיא נגר - טלפון: 052-482-3435.',
    keywords: [
      'גרירת אופנועים',
      'חילוץ אופנועים',
      'ATV',
      'RZR',
      'UTV',
      'גרירה מקצועית',
      'חילוץ דרכים',
      'Grar Alfa',
      'גיא נגר',
      'גרירה 24/7',
      'שירותי דרך',
      'עזרה בדרך',
      'טרקטורון',
      'רזאר',
      'גרר אלפא'
    ],
  },
  about: {
    title: 'אודותינו - Grar Alfa',
    description: 'חברת גרירת האופנועים המובילה בישראל עם שירות מקצועי, בטוח ואמין. הכירו את הצוות והשירותים שלנו.',
    keywords: ['אודותינו', 'גיא נגר', 'צוות מקצועי', 'שירותי גרירה', 'חברה מובילה'],
  },
  contact: {
    title: 'צור קשר - Grar Alfa',
    description: 'צור קשר עם Grar Alfa לשירותי גרירה וחילוץ. טלפון: 052-482-3435, וואטסאפ זמין 24/7.',
    keywords: ['צור קשר', 'טלפון', 'וואטסאפ', 'יצירת קשר', 'שירות לקוחות'],
  },
  services: {
    motorcycle: {
      title: 'גרירת אופנועים מקצועית',
      description: 'שירותי גרירה וחילוץ לאופנועים בכל הסוגים. ציוד מתמחה ונהגים מוסמכים.',
      keywords: ['גרירת אופנועים', 'חילוץ אופנועים', 'שירותי דרך לאופנועים'],
    },
    atv: {
      title: 'גרירת ATV וטרקטורונים',
      description: 'שירותי גרירה וחילוץ לכלי ATV וטרקטורונים בכל סוגי השטח.',
      keywords: ['גרירת ATV', 'טרקטורון', 'חילוץ שטח', 'גרירת טרקטורונים'],
    },
    rzr: {
      title: 'גרירת RZR/UTV מקצועית',
      description: 'שירותי גרירה מיוחדים לכלי RZR ו-UTV כבדים עם ציוד מתמחה.',
      keywords: ['גרירת RZR', 'גרירת UTV', 'רזאר', 'כלי כבדים'],
    },
  },
  testimonials: {
    title: 'ביקורות וחוות דעת - Grar Alfa',
    description: 'קראו ביקורות אמיתיות מלקוחות מרוצים של Grar Alfa. דירוג 5 כוכבים משירות מקצועי.',
    keywords: ['ביקורות', 'חוות דעת', 'לקוחות מרוצים', 'דירוג 5 כוכבים'],
  },
  gallery: {
    title: 'גלריה מקצועית - Grar Alfa',
    description: 'תמונות מהשטח - חילוצים, העברות ושירותים מקצועיים בכל רחבי הארץ.',
    keywords: ['גלריה', 'תמונות', 'חילוצים', 'שירותים מקצועיים'],
  },
  blog: {
    title: 'בלוג MotoGar - טיפים לרוכבי אופנועים',
    description: 'טיפים, עצות ומידע חשוב לרוכבי אופנועים. מדריכים מקצועיים מתחזוקה ועד טיפולי חירום.',
    keywords: ['בלוג', 'טיפים', 'רוכבי אופנועים', 'מדריכים', 'תחזוקה'],
  },
  'pro-garage': {
    title: 'Pro Garage - מדריכים מקצועיים',
    description: 'מדריכי תיקון ותחזוקה מפורטים למכונאים מקצועיים. כלים וידע מתקדם.',
    keywords: ['Pro Garage', 'מדריכים', 'תיקונים', 'תחזוקה', 'מכונאים'],
  },
}

// Structured Data Generators
export function generateLocalBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Grar Alfa",
    "alternateName": "גרר אלפא",
    "description": "שירותי גרירה וחילוץ מקצועיים לאופנועים, ATV ו-RZR/UTV בכל הארץ",
    "url": "https://grar-alfa.co.il",
    "telephone": "+972-52-482-3435",
    "email": "contact@grar-alfa.co.il",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IL",
      "addressRegion": "כל הארץ"
    },
    "founder": {
      "@type": "Person",
      "name": "גיא נגר"
    },
    "serviceType": ["גרירת אופנועים", "חילוץ ATV", "גרירת RZR/UTV", "שירותי דרך"],
    "areaServed": "ישראל",
    "priceRange": "₪₪",
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      "https://wa.me/972524823435",
      "https://grar-alfa.co.il"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150"
    }
  }
}

export function generateServiceStructuredData(serviceType: string) {
  const services = {
    motorcycle: {
      name: "גרירת אופנועים",
      description: "שירותי גרירה וחילוץ מקצועיים לאופנועים"
    },
    atv: {
      name: "גרירת ATV",
      description: "שירותי גרירה וחילוץ לכלי ATV וטרקטורונים"
    },
    rzr: {
      name: "גרירת RZR/UTV",
      description: "שירותי גרירה לכלי RZR ו-UTV כבדים"
    }
  }

  const service = services[serviceType as keyof typeof services]
  if (!service) return null

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Grar Alfa"
    },
    "areaServed": "ישראל",
    "serviceType": service.name
  }
}

export function generateArticleStructuredData(article: {
  title: string
  description: string
  url: string
  publishedTime: string
  modifiedTime?: string
  author: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "url": article.url,
    "datePublished": article.publishedTime,
    "dateModified": article.modifiedTime || article.publishedTime,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Grar Alfa",
      "logo": {
        "@type": "ImageObject",
        "url": "https://grar-alfa.co.il/images/logo.png"
      }
    },
    "image": article.image || "https://grar-alfa.co.il/images/og-image.jpg"
  }
}