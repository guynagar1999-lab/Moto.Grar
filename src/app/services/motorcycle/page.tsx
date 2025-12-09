'use client'


import { motion } from 'framer-motion'
import { ArrowRight, Clock, Shield, Wrench, Phone, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { generateWhatsAppLink, formatPhone } from '@/lib/utils'
import Head from 'next/head'

// SEO JSON-LD Schema for Motorcycle Towing Service
const motorcycleServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "גרירת אופנועים",
  "description": "שירותי גרירה וחילוץ מקצועיים לאופנועים בכל רחבי הארץ. ציוד מתמחה ונהגים מוסמכים.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Grar Alfa",
    "telephone": "+972-52-482-3435"
  },
  "areaServed": "ישראל",
  "serviceType": "גרירת אופנועים"
}

export default function MotorcycleServicePage() {
  const businessPhone = '0524823435'
  const ownerName = 'גיא נגר'

  return (
    <>
      <Head>
        <title>גרירת אופנועים מקצועית | Grar Alfa - שירות 24/7</title>
        <meta name="description" content="שירותי גרירה וחילוץ מקצועיים לאופנועים בכל רחבי הארץ. ציוד מתמחה, נהגים מוסמכים, וזמינות 24/7. התקשרו עכשיו: 052-482-3435" />
        <meta name="keywords" content="גרירת אופנועים, חילוץ אופנועים, שירותי דרך לאופנועים, גרירה מקצועית" />
        <link rel="canonical" href="https://grar-alfa.co.il/services/motorcycle" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(motorcycleServiceSchema) }}
        />
      </Head>
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 pt-16 lg:pt-20">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-linear-to-r from-orange-600 to-red-600 py-20">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative container mx-auto px-4 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-black mb-4"
            >
              שירותי גרירה לאופנועים
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              גרירה מקצועית ומהירה לאופנועים בכל רחבי הארץ
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-black text-lg shadow-xl">
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
                    <h3 className="text-lg font-semibold text-white">גרירה בטוחה ומהירה</h3>
                    <p className="text-gray-300">משאיות גרירה מתמחות עם ציוד מיוחד לאופנועים</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 ml-3 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">כיסוי ארצי</h3>
                    <p className="text-gray-300">שירות בכל רחבי הארץ, 24/7</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 ml-3 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">ביטוח מלא</h3>
                    <p className="text-gray-300">האופנוע מבוטח במהלך כל תהליך הגרירה</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 ml-3 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">צוות מומחים</h3>
                    <p className="text-gray-300">נהגים מנוסים עם ניסיון רב בגרירת אופנועים</p>
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
              <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30">
                <CardHeader>
                  <CardTitle className="text-2xl moto-gradient-text">מחירים והזמנה</CardTitle>
                  <CardDescription className="text-gray-300">
                    מחירים התחלתיים - יתכן שינוי בהתאם למרחק ולמורכבות
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                      <span className="text-white">גרירה בתוך העיר</span>
                      <span className="text-orange-400 font-bold">₪150-250</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                      <span className="text-white">גרירה בין ערים</span>
                      <span className="text-orange-400 font-bold">₪300-600</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                      <span className="text-white">גרירה דחופה (חילוץ)</span>
                      <span className="text-orange-400 font-bold">₪400-800</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button
                      className="w-full py-4 text-lg font-semibold neon-glow"
                      onClick={() => window.open(`tel:${businessPhone}`, '_blank')}
                    >
                      <Phone className="w-5 h-5 ml-2" />
                      התקשר להזמנה
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full py-4 text-lg border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                      onClick={() => window.open(generateWhatsAppLink(businessPhone, 'שלום, אני מעוניין בשירות גרירה לאופנוע'), '_blank')}
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
            <h2 className="text-3xl font-bold text-white text-center mb-12">שירותים נוספים לאופנועים</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-hover bg-linear-to-br from-gray-900 to-black border-orange-500/30">
                <CardContent className="p-6 text-center">
                  <Wrench className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">תיקונים בשטח</h3>
                  <p className="text-gray-300">תיקונים בסיסיים במקום התקלה</p>
                </CardContent>
              </Card>
              <Card className="card-hover bg-linear-to-br from-gray-900 to-black border-orange-500/30">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">ביטוח מקיף</h3>
                  <p className="text-gray-300">כיסוי מלא לכל סוגי הנזקים</p>
                </CardContent>
              </Card>
              <Card className="card-hover bg-linear-to-br from-gray-900 to-black border-orange-500/30">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">זמינות מיידית</h3>
                  <p className="text-gray-300">הגעה תוך 30-60 דקות</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}