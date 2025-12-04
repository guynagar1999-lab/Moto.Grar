'use client'

import type { Metadata } from 'next'
import { generateSEO, pageSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO(pageSEO.about)

import { motion } from 'framer-motion'
import { Truck, Shield, Clock, Award, Users, MapPin, Phone, CheckCircle, Star, Wrench, Heart, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { generateWhatsAppLink, formatPhone } from '@/lib/utils'

export default function AboutPage() {
  const businessPhone = '0524823435'
  const ownerName = 'גיא נגר'

  const stats = [
    { icon: Truck, value: '500+', label: 'גרירות בשנה', color: 'text-blue-400' },
    { icon: Users, value: '98%', label: 'שביעות רצון לקוחות', color: 'text-green-400' },
    { icon: Clock, value: '24/7', label: 'זמינות מלאה', color: 'text-orange-400' },
    { icon: Award, value: '8+', label: 'שנות ניסיון', color: 'text-purple-400' }
  ]

  const values = [
    {
      icon: Shield,
      title: 'בטיחות מעל הכל',
      description: 'אנו מתמחים בגרירה בטוחה של אופנועים, ATV ו-RZR/UTV עם ציוד מתמחה ונהגים מוסמכים.'
    },
    {
      icon: Clock,
      title: 'זמינות 24/7',
      description: 'שירות חירום זמין בכל שעות היממה, כולל שבתות וחגים, בכל רחבי הארץ.'
    },
    {
      icon: Wrench,
      title: 'מקצועיות טכנית',
      description: 'צוות טכני מנוסה עם ידע מעמיק בכל סוגי הכלים המוטוריים והציוד המקצועי.'
    },
    {
      icon: Heart,
      title: 'שירות אישי',
      description: 'יחס אישי לכל לקוח, הבנה לצרכים הייחודיים והתאמה אישית של השירות.'
    }
  ]

  const services = [
    'גרירת אופנועים מכל הסוגים',
    'גרירת ATV וטרקטורונים',
    'גרירת RZR/UTV',
    'חילוץ משטחים ודרכים קשות',
    'שירותי דרך וחירום',
    'יעוץ טכני והכוונה',
    'שירותי אחסנה בטוחה',
    'הובלת כלי רכב מיוחדים'
  ]

  const coverage = [
    'צפון - כל האזור עד הגבול',
    'מרכז - תל אביב והסביבה',
    'ירושלים והסביבה',
    'דרום - באר שבע ונגב',
    'השרון והשפלה',
    'חיפה וקריות',
    'גליל עליון ותחתון',
    'עמק יזרעאל'
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 pt-16 lg:pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-r from-orange-600 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 bg-linear-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center neon-glow">
              <Users className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-6xl font-black mb-4"
          >
            אודותינו
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto"
          >
            חברת גרירת האופנועים המובילה בישראל עם שירות מקצועי, בטוח ואמין
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="bg-linear-to-br from-gray-900 to-black border-orange-500/30 text-center">
              <CardContent className="p-6">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* About Owner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30">
            <CardHeader>
              <CardTitle className="text-3xl moto-gradient-text text-center">פגוש את הבעלים</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="w-32 h-32 bg-linear-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{ownerName}</h3>
              <p className="text-orange-400 mb-4">מייסד ובעלים - MotoGrar</p>
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-lg">
                עם יותר מ-8 שנות ניסיון בתחום גרירת כלי רכב דו-גלגליים, {ownerName} הקים את MotoGrar מתוך תשוקה אמיתית לעולם האופנועים והרצון לספק שירות ברמה הגבוהה ביותר.
                הצוות שלנו מתמחה בגרירה בטוחה ומקצועית של אופנועים, ATV ו-RZR/UTV בכל רחבי הארץ, עם דגש על שירות אישי ויחס לכל לקוח.
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <Button
                  onClick={() => window.open(`tel:${businessPhone}`, '_blank')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Phone className="w-4 h-4 ml-2" />
                  {formatPhone(businessPhone)}
                </Button>
                <Button
                  onClick={() => window.open(generateWhatsAppLink(businessPhone, 'שלום, אני רוצה ללמוד עוד על השירותים שלכם'), '_blank')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="w-4 h-4 ml-2" />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">הערכים שלנו</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-linear-to-br from-gray-900 to-black border-orange-500/30 h-full">
                <CardContent className="p-6 text-center">
                  <value.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Services & Coverage */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30 h-full">
              <CardHeader>
                <CardTitle className="text-2xl moto-gradient-text flex items-center">
                  <Wrench className="w-6 h-6 ml-3" />
                  השירותים שלנו
                </CardTitle>
                <CardDescription>שירות מקיף לכל צרכי הגרירה והחילוץ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 ml-3 shrink-0" />
                      {service}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Coverage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
          >
            <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30 h-full">
              <CardHeader>
                <CardTitle className="text-2xl moto-gradient-text flex items-center">
                  <MapPin className="w-6 h-6 ml-3" />
                  אזורי כיסוי
                </CardTitle>
                <CardDescription>כיסוי ארצי מלא בכל רחבי ישראל</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {coverage.map((area, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 text-orange-400 ml-3 shrink-0" />
                      {area}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="mb-16"
        >
          <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30">
            <CardHeader>
              <CardTitle className="text-3xl moto-gradient-text text-center">למה לבחור בנו?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-white mb-2">בטיחות מקסימלית</h3>
                  <p className="text-gray-300">ציוד מתמחה ונהגים מוסמכים לגרירת כלי רכב דו-גלגליים</p>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-white mb-2">מהירות הגעה</h3>
                  <p className="text-gray-300">זמן הגעה ממוצע של 15-45 דקות בכל הארץ</p>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-white mb-2">אמינות מוכחת</h3>
                  <p className="text-gray-300">98% שביעות רצון מלקוחות חוזרים</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="text-center"
        >
          <Card className="bg-linear-to-br from-red-600 to-orange-600 border-none">
            <CardContent className="p-8 text-white">
              <Truck className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">מוכנים לעזור לך?</h2>
              <p className="text-xl mb-6">
                צור קשר עכשיו לקבלת שירות מקצועי ומהיר
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={() => window.location.href = '/service-call'}
                  className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3"
                >
                  בקש שירות עכשיו
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3"
                  onClick={() => window.open(`tel:${businessPhone}`, '_blank')}
                >
                  <Phone className="w-4 h-4 ml-2" />
                  {formatPhone(businessPhone)}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}