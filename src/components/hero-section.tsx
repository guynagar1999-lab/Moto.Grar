'use client'

import React from 'react'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { Phone, Clock, Shield, Wrench, ArrowRight, CheckCircle, Flame, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { generateWhatsAppLink, formatPhone } from '@/lib/utils'
import { SmartContactButton } from '@/components/smart-contact-button'
import { useLanguage } from '@/lib/i18n'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 }
  }
}

export default function HeroSection() {
  const { t } = useLanguage()
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  const businessPhone = '0524823435'
  const ownerName = 'גיא נגר'

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950 flex items-center justify-center">
      {/* Modern Abstract Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Animated Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -60, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-20 container mx-auto px-4 py-20 lg:py-32">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-8 relative">
              {/* Text Background Glow */}
              <div className="absolute -inset-10 bg-black/40 blur-3xl -z-10 rounded-full" />

              <motion.div
                variants={itemVariants}
                className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-sm font-bold text-orange-400 backdrop-blur-sm"
              >
                <Flame className="w-4 h-4 ml-2 text-orange-500" />
                <span suppressHydrationWarning>{t('hero-subtitle')}</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-2xl"
              >
                <span suppressHydrationWarning>{t('hero-title')}</span>
                <br />
                <span className="text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500" suppressHydrationWarning>
                  {t('available-247')}
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-lg"
              >
                <span suppressHydrationWarning>{t('hero-description')}</span>
                <br />
                <span suppressHydrationWarning>{t('owner-title')}</span>: <span className="font-bold text-orange-400">{ownerName}</span>
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <SmartContactButton
                  phoneNumber={businessPhone}
                  size="xl"
                  className="text-xl px-8 py-6 bg-orange-600 hover:bg-orange-700 text-white border-none shadow-xl shadow-orange-600/20 group font-bold rounded-2xl"
                >
                  <span className="relative z-10 flex items-center">
                    <Phone className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform" />
                    <span suppressHydrationWarning>{t('call-now')}</span>
                    <ArrowRight className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </SmartContactButton>
                <Button
                  variant="default"
                  size="xl"
                  className="text-xl px-8 py-6 bg-green-600 hover:bg-green-700 text-white border-none shadow-xl shadow-green-600/20 group font-bold rounded-2xl"
                  onClick={() => window.open(generateWhatsAppLink(businessPhone, t('contact-us')), '_blank')}
                >
                  <MessageCircle className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" />
                  <span suppressHydrationWarning>{t('whatsapp')}</span>
                </Button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-6 text-sm text-gray-300 pt-6 font-medium"
              >
                <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-lg border border-white/5 backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span suppressHydrationWarning>{t('available-247')}</span>
                </div>
                <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-lg border border-white/5 backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span suppressHydrationWarning>{t('stats-availability')}</span>
                </div>
                <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-lg border border-white/5 backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span suppressHydrationWarning>{t('pricing')}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              <Card className="bg-gray-900/80 border-orange-500/20 shadow-2xl backdrop-blur-xl rounded-3xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-600" />
                <CardHeader className="text-right pb-6 pt-8 px-8">
                  <CardTitle className="text-3xl font-black text-white mb-2">
                    <span suppressHydrationWarning>{t('quick-service')}</span>
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-400">
                    <span suppressHydrationWarning>{t('service-call-subtitle')}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5 px-8 pb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-right text-gray-300" suppressHydrationWarning>{t('form-full-name')}</label>
                      <Input
                        type="text"
                        placeholder={t('form-full-name')}
                        className="text-right bg-gray-950/50 border-gray-700 text-white placeholder:text-gray-600 focus:border-orange-500 focus:ring-orange-500/20 h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 text-right text-gray-300" suppressHydrationWarning>{t('form-phone')}</label>
                      <Input
                        type="tel"
                        placeholder="05x-xxxxxxx"
                        className="text-right bg-gray-950/50 border-gray-700 text-white placeholder:text-gray-600 focus:border-orange-500 focus:ring-orange-500/20 h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-right text-gray-300" suppressHydrationWarning>{t('form-vehicle-type')}</label>
                    <select className="w-full px-4 h-12 border border-gray-700 rounded-xl bg-gray-950/50 text-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-right appearance-none">
                      <option suppressHydrationWarning>{t('motorcycle-service')}</option>
                      <option suppressHydrationWarning>{t('atv-service')}</option>
                      <option suppressHydrationWarning>{t('rzr-service')}</option>
                      <option suppressHydrationWarning>{t('urgency-normal')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-right text-gray-300" suppressHydrationWarning>{t('form-location')}</label>
                    <Input
                      type="text"
                      placeholder={t('form-location')}
                      className="text-right bg-gray-950/50 border-gray-700 text-white placeholder:text-gray-600 focus:border-orange-500 focus:ring-orange-500/20 h-12 rounded-xl"
                    />
                  </div>

                  <Button
                    className="w-full py-7 text-xl font-black bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-none shadow-lg shadow-orange-500/20 rounded-xl mt-4 transition-all hover:scale-[1.02]"
                    onClick={() => window.location.href = '/service-call'}
                  >
                    <Clock className="w-6 h-6 ml-2 animate-spin-slow" />
                    <span suppressHydrationWarning>{t('form-submit')}</span>
                  </Button>

                  <p className="text-center text-sm text-gray-500 mt-4 font-medium">
                    <span suppressHydrationWarning>{t('call-us')}</span>: <span className="font-bold text-orange-400 text-base">{formatPhone(businessPhone)}</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <Card className="bg-gray-900/60 border-white/5 backdrop-blur-sm hover:bg-gray-800/60 transition-colors duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors" suppressHydrationWarning>{t('available-247')}</h3>
              <p className="text-gray-400 font-medium" suppressHydrationWarning>{t('hero-subtitle')}</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border-white/5 backdrop-blur-sm hover:bg-gray-800/60 transition-colors duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-500/20 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors" suppressHydrationWarning>{t('professional-towing')}</h3>
              <p className="text-gray-400 font-medium" suppressHydrationWarning>{t('hero-description')}</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border-white/5 backdrop-blur-sm hover:bg-gray-800/60 transition-colors duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors" suppressHydrationWarning>{t('stats-satisfaction')}</h3>
              <p className="text-gray-400 font-medium" suppressHydrationWarning>{t('stats-availability')}</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}