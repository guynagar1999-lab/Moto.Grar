'use client'


import { motion } from 'framer-motion'
import { ArrowRight, Clock, Shield, Phone, CheckCircle, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { generateWhatsAppLink, formatPhone } from '@/lib/utils'
import Head from 'next/head'

// SEO JSON-LD Schema for ATV Towing Service
const atvServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "גרירת ATV וטרקטורונים",
  "description": "שירותי גרירה וחילוץ לכלי ATV וטרקטורונים בכל סוגי השטח.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Grar Alfa",
    "telephone": "+972-52-482-3435"
  },
  "areaServed": "ישראל",
  "serviceType": "גרירת ATV"
}

export default function ATVServicePage() {
  const businessPhone = '0524823435'
  const ownerName = 'גיא נגר'

  return (
    <>
      <Head>
        <title>גרירת ATV וטרקטורונים | Grar Alfa - שירות 24/7</title>
        <meta name="description" content="שירותי גרירה וחילוץ לכלי ATV וטרקטורונים בכל סוגי השטח. ציוד 4x4 מיוחד, צוות מומחים, וזמינות 24/7. התקשרו: 052-482-3435" />
        <meta name="keywords" content="גרירת ATV, טרקטורון, חילוץ שטח, גרירת טרקטורונים" />
        <link rel="canonical" href="https://grar-alfa.co.il/services/atv" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(atvServiceSchema) }}
        />
      </Head>
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 pt-16 lg:pt-20">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-linear-to-r from-yellow-600 to-orange-600 py-20">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative container mx-auto px-4 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-black mb-4"
            >
              שירותי גרירה ל-ATV
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              גרירה מקצועית לכלי רכב ATV בכל סוגי השטח
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 font-black text-lg shadow-xl">
                <Phone className="w-5 h-5 ml-2" />
                {formatPhone(businessPhone)}
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-400 hover:to-green-500 font-black text-lg shadow-xl">
                הזמן שירות עכשיו
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Service Details */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Service Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">מה כולל השירות?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 ml-3 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">ציוד מיוחד לשטח</h3>
                    <p className="text-gray-300">משאיות 4x4 עם ציוד גרירה מתאים לכלי ATV</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 ml-3 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">חילוץ משטח</h3>
                    <p className="text-gray-300">חילוץ מירבול, חול, בוץ וכל סוגי השטח</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 ml-3 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">ביטוח מלא</h3>
                    <p className="text-gray-300">כיסוי מלא לכלי הרכב במהלך הגרירה</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 ml-3 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">ניסיון רב</h3>
                    <p className="text-gray-300">צוות עם ניסיון של שנים בגרירת כלי ATV</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pricing & Contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-linear-to-br from-gray-900 to-black border-yellow-500/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-yellow-400">מחירים והזמנה</CardTitle>
                  <CardDescription className="text-gray-300">
                    מחירים משוערים - יתכן שינוי בהתאם למרחק ולמורכבות
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                      <span className="text-white">גרירה בשטח קל</span>
                      <span className="text-yellow-400 font-bold">₪200-350</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                      <span className="text-white">חילוץ משטח קשה</span>
                      <span className="text-yellow-400 font-bold">₪400-700</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                      <span className="text-white">גרירה דחופה</span>
                      <span className="text-yellow-400 font-bold">₪500-900</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button
                      className="w-full py-4 text-lg font-semibold bg-yellow-600 hover:bg-yellow-700"
                      onClick={() => window.open(`tel:${businessPhone}`, '_blank')}
                    >
                      <Phone className="w-5 h-5 ml-2" />
                      התקשר להזמנה
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full py-4 text-lg border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10"
                      onClick={() => window.open(generateWhatsAppLink(businessPhone, 'שלום, אני מעוניין בשירות גרירה ל-ATV'), '_blank')}
                    >
                      <ArrowRight className="w-5 h-5 ml-2" />
                      WhatsApp
                    </Button>
                  </div>

                  <p className="text-center text-sm text-gray-400">
                    בעלים: {ownerName} • זמינות 24/7
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">שירותים מיוחדים ל-ATV</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-hover bg-linear-to-br from-gray-900 to-black border-yellow-500/30">
                <CardContent className="p-6 text-center">
                  <Truck className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">גרירה 4x4</h3>
                  <p className="text-gray-300">משאיות עם הנעה כפולה לכל סוגי השטח</p>
                </CardContent>
              </Card>
              <Card className="card-hover bg-linear-to-br from-gray-900 to-black border-yellow-500/30">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">ביטוח מקיף</h3>
                  <p className="text-gray-300">כיסוי לנזקים בשטח ובמהלך הגרירה</p>
                </CardContent>
              </Card>
              <Card className="card-hover bg-linear-to-br from-gray-900 to-black border-yellow-500/30">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">זמינות מיידית</h3>
                  <p className="text-gray-300">הגעה תוך 45-90 דקות בהתאם למיקום</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}