import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingChatButton from "@/components/floating-chat-button";

// Disable React DevTools in production
if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__ = undefined;
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Grar Alfa - גרירת אופנועים, ATV ו-RZR/UTV מקצועית",
    template: "%s | Grar Alfa"
  },
  description: "שירותי גרירה וחילוץ מקצועיים לאופנועים, ATV ו-RZR/UTV בכל הארץ. זמינים 24/7 עם ציוד מתקדם וצוות מומחים. בעלים: גיא נגר - טלפון: 052-482-3435.",
  keywords: [
    "גרירת אופנועים",
    "חילוץ אופנועים",
    "ATV",
    "RZR",
    "UTV",
    "גרירה מקצועית",
    "חילוץ דרכים",
    "Grar Alfa",
    "גיא נגר",
    "גרירה 24/7",
    "שירותי דרך",
    "עזרה בדרך",
    "טרקטורון",
    "רזאר",
    "גרר אלפא"
  ],
  authors: [{ name: "Grar Alfa - גיא נגר" }],
  creator: "Grar Alfa",
  publisher: "Grar Alfa",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL('https://grar-alfa.co.il'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://grar-alfa.co.il',
    title: 'Grar Alfa - גרירת אופנועים, ATV ו-RZR/UTV מקצועית',
    description: 'שירותי גרירה וחילוץ מקצועיים לאופנועים, ATV ו-RZR/UTV בכל הארץ. זמינים 24/7 עם ציוד מתקדם וצוות מומחים.',
    siteName: 'Grar Alfa',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grar Alfa - גרירת אופנועים מקצועית',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grar Alfa - גרירת אופנועים, ATV ו-RZR/UTV מקצועית',
    description: 'שירותי גרירה וחילוץ מקצועיים לאופנועים, ATV ו-RZR/UTV בכל הארץ.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff6b35" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingChatButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
