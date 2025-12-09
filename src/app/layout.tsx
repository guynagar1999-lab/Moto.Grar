import type { Metadata } from "next";
import { generateLocalBusinessStructuredData } from "@/lib/seo";
import { ClientLayout } from "@/components/client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grar Alfa - גרירת אופנועים וטרקטורונים 24/7",
  description: "שירותי גרירה וחילוץ מקצועיים לאופנועים, טרקטורונים ורכבי שטח. זמינות 24/7, שירות מהיר ומקצועי בכל הארץ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate structured data on the server
  const structuredData = generateLocalBusinessStructuredData();

  return (
    <ClientLayout structuredData={structuredData}>
      {children}
    </ClientLayout>
  );
}
