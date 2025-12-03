'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Clock, Shield, Wrench, ArrowRight, CheckCircle, Flame, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { generateWhatsAppLink, formatPhone } from '@/lib/utils'

export default function HeroSection() {

  const businessPhone = '0524823435'
  const ownerName = 'גיא נגר'

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-gray-900 via-black to-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Speed Lines */}
        <div className="absolute top-20 left-0 w-full h-px bg-linear-to-r from-transparent via-orange-500 to-transparent speed-line" />
        <div className="absolute top-40 left-0 w-full h-px bg-linear-to-r from-transparent via-yellow-500 to-transparent speed-line" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-60 left-0 w-full h-px bg-linear-to-r from-transparent via-red-500 to-transparent speed-line" style={{ animationDelay: '1s' }} />

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, -5, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-xl"
        />

        {/* Tire Tracks Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" className="tire-spin">
            <defs>
              <pattern id="tirePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#ff6b35" strokeWidth="2" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="#ffd23f" strokeWidth="1" />
                <path d="M50 10 L50 90 M10 50 L90 50" stroke="#ff6b35" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tirePattern)" />
          </svg>
        </div>
      </div>

       <div className="relative z-10 container mx-auto px-4 py-16">
         {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-linear-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-sm font-medium text-orange-400 neon-glow"
              >
                <Flame className="w-4 h-4 ml-2" />
                שירות מקצועי 24/7 - רק לאופנועים, ATV ו-RZR/UTV
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                גרירה
                <span className="moto-gradient-text"> מקצועית</span>
                <br />
                לאופנועים
                <br />
                <span className="text-3xl lg:text-4xl text-orange-400">בכל זמן ובכל מקום</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                שירותי גרירה וחילוץ מתמחים לאופנועים, ATV ו-RZR/UTV בכל רחבי הארץ.
                ציוד מתקדם, צוות מומחים, וזמינות 24/7. בעלים: <span className="font-bold text-orange-400">{ownerName}</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="xl"
                  className="text-xl px-8 py-6 neon-glow"
                  onClick={() => window.open(`tel:${businessPhone}`, '_blank')}
                >
                  <Phone className="w-6 h-6 ml-3" />
                  התקשר עכשיו
                  <ArrowRight className="w-6 h-6 mr-3" />
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="text-xl px-8 py-6 bg-black/50 backdrop-blur border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                  onClick={() => window.open(generateWhatsAppLink(businessPhone, 'שלום, אני צריך שירות גרירה לאופנוע'), '_blank')}
                >
                  <MessageCircle className="w-6 h-6 ml-3" />
                  WhatsApp
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 ml-1" />
                  <span>זמינות 24/7</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 ml-1" />
                  <span>כיסוי ארצי</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 ml-1" />
                  <span>מחירים הוגנים</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30 shadow-2xl">
                <CardHeader className="text-right pb-4">
                  <CardTitle className="text-2xl moto-gradient-text">
                    בקשת שירות מיידית
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-300">
                    מלאו את הפרטים ונחזור אליכם תוך 5 דקות
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-right text-gray-300">שם מלא</label>
                      <Input
                        type="text"
                        placeholder="ישראל ישראלי"
                        className="text-right bg-gray-800 border-gray-600 text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-right text-gray-300">טלפון</label>
                      <Input
                        type="tel"
                        placeholder="054-1234567"
                        className="text-right bg-gray-800 border-gray-600 text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-right text-gray-300">סוג רכב</label>
                    <select className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-right">
                      <option>אופנוע</option>
                      <option>ATV</option>
                      <option>RZR/UTV</option>
                      <option>אחר</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-right text-gray-300">מיקום</label>
                    <Input
                      type="text"
                      placeholder="עיר או כתובת מדויקת"
                      className="text-right bg-gray-800 border-gray-600 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <Button
                    className="w-full py-4 text-lg font-semibold neon-glow"
                    onClick={() => window.location.href = '/service-call'}
                  >
                    <Clock className="w-5 h-5 ml-2" />
                    שלח בקשה מיידית
                  </Button>

                  <p className="text-center text-sm text-gray-400">
                    או התקשרו ישירות: <span className="font-bold text-orange-400">{formatPhone(businessPhone)}</span>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-500/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <Card className="card-hover bg-linear-to-br from-gray-900 to-black border-orange-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">זמינות 24/7</h3>
              <p className="text-gray-300">שירות זמין בכל שעות היממה, גם בשבתות וחגים</p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-linear-to-br from-gray-900 to-black border-orange-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-linear-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">ציוד מתמחה</h3>
              <p className="text-gray-300">ציוד חילוץ וגרירה המותאם במיוחד לאופנועים, ATV ו-RZR/UTV</p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-linear-to-br from-gray-900 to-black border-orange-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-linear-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">ביטוח מלא</h3>
              <p className="text-gray-300">כל הרכבים מבוטחים במהלך השירות לשלומכם</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}