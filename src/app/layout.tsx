'use client'

import { Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider, useLanguage } from "@/lib/i18n";
import { generateLocalBusinessStructuredData } from "@/lib/seo";
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


function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingChatButton />
    </>
  )
}

function DynamicHtml({ children }: { children: React.ReactNode }) {
  const { language, direction } = useLanguage()

  return (
    <html lang={language} dir={direction}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff6b35" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessStructuredData())
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <DynamicHtml>
        <LayoutContent>{children}</LayoutContent>
      </DynamicHtml>
    </LanguageProvider>
  );
}
