'use client'

import { motion } from 'framer-motion'
import { Truck, Shield, Clock, Award, Users, MapPin, Phone, CheckCircle, Star, Wrench, Heart, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { generateWhatsAppLink, formatPhone } from '@/lib/utils'
import { useLanguage } from '@/lib/i18n'

export default function AboutPage() {
  const { t } = useLanguage()
  const businessPhone = '0524823435'
  const ownerName = 'גיא נגר'

  const stats = [
    { icon: Truck, value: '1000+', label: t('stats-experience'), color: 'text-blue-400' },
    { icon: Users, value: '100%', label: t('stats-satisfaction'), color: 'text-green-400' },
    { icon: Clock, value: '24/6', label: t('stats-availability'), color: 'text-orange-400' },
    { icon: Award, value: '12+', label: t('stats-years'), color: 'text-purple-400' }
  ]

  const values = [
    {
      icon: Shield,
      title: t('value-safety-title'),
      description: t('value-safety-desc')
    },
    {
      icon: Clock,
      title: t('value-availability-title'),
      description: t('value-availability-desc')
    },
    {
      icon: Wrench,
      title: t('value-professionalism-title'),
      description: t('value-professionalism-desc')
    },
    {
      icon: Heart,
      title: t('value-service-title'),
      description: t('value-service-desc')
    }
  ]

  const services = [
    t('motorcycle-service'),
    t('atv-service'),
    t('rzr-service'),
    t('professional-towing'),
    t('service-description'),
    t('pro-garage'),
    t('stats-availability'),
    t('stats-satisfaction')
  ]

  const coverage = [
    t('coverage-north'),
    t('coverage-center'),
    t('coverage-jerusalem'),
    t('coverage-south'),
    t('coverage-sharon'),
    t('coverage-haifa'),
    t('coverage-galilee'),
    t('coverage-valley')
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
            {t('about-title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto"
          >
            {t('about-subtitle')}
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
              <CardTitle className="text-3xl moto-gradient-text text-center">{t('owner-title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="w-32 h-32 bg-linear-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{ownerName}</h3>
              <p className="text-orange-400 mb-4">{t('owner-title')} - MotoGrar</p>
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-lg">
                {t('hero-description')}
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
                  onClick={() => window.open(generateWhatsAppLink(businessPhone, t('contact-us')), '_blank')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="w-4 h-4 ml-2" />
                  {t('whatsapp')}
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">{t('why-choose-us')}</h2>
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
                  {t('services')}
                </CardTitle>
                <CardDescription>{t('service-description')}</CardDescription>
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
                  {t('coverage-title')}
                </CardTitle>
                <CardDescription>{t('coverage-subtitle')}</CardDescription>
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

        {/* Why Choose Us (Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="mb-16"
        >
          <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30">
            <CardHeader>
              <CardTitle className="text-3xl moto-gradient-text text-center">{t('why-choose-us')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-white mb-2">{t('value-safety-title')}</h3>
                  <p className="text-gray-300">{t('value-safety-desc')}</p>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-white mb-2">{t('value-availability-title')}</h3>
                  <p className="text-gray-300">{t('eta')}</p>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-white mb-2">{t('stats-satisfaction')}</h3>
                  <p className="text-gray-300">98% {t('stats-satisfaction')}</p>
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
          <Card className="bg-gradient-to-br from-gray-900 to-black border-orange-500/30">
            <CardContent className="p-8">
              <Truck className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-white text-center">{t('ready-to-help')}</h2>
              <p className="text-xl mb-6 text-gray-300 text-center">
                {t('contact-subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={() => window.location.href = '/service-call'}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3"
                >
                  {t('service-call')}
                </Button>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3"
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