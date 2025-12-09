'use client'

import * as React from 'react';
import { Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider, useLanguage } from "@/lib/i18n";
import { ThemeProvider } from "@/components/theme-provider";
import dynamic from 'next/dynamic';
import Header from "@/components/header";
import Footer from "@/components/footer";

// Dynamically import heavy client components to avoid hydration issues and circular dependencies
const MegaFAB = dynamic(() => import("@/components/mega-fab").then(mod => mod.MegaFAB), {
    ssr: false
});

const AccessibilityWidget = dynamic(() => import("@/components/accessibility-widget").then(mod => mod.AccessibilityWidget), {
    ssr: false
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
    display: "swap",
});

function HtmlBody({ children, structuredData }: { children: React.ReactNode; structuredData: any }) {
    const { language, direction } = useLanguage();
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <html lang={language} dir={direction} suppressHydrationWarning>

            <body
                className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
                suppressHydrationWarning
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                    {isMounted && (
                        <>
                            <MegaFAB />
                            <AccessibilityWidget />
                        </>
                    )}
                </ThemeProvider>

                {/* Render structured data script */}
                {structuredData && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(structuredData),
                        }}
                    />
                )}
            </body>
        </html>
    );
}

export function ClientLayout({ children, structuredData }: { children: React.ReactNode; structuredData: any }) {
    return (
        <LanguageProvider>
            <HtmlBody structuredData={structuredData}>
                {children}
            </HtmlBody>
        </LanguageProvider>
    );
}
