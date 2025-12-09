'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { generateWhatsAppLink, formatPhone } from '@/lib/utils'
import { useLanguage } from '@/lib/i18n'

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleType: '',
    location: '',
    message: '',
    urgency: 'normal'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const businessPhone = '0524823435'
  const businessEmail = 'guy@motogar.co.il'
  const ownerName = 'גיא נגר'

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        vehicleType: '',
        location: '',
        message: '',
        urgency: 'normal'
      })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: t('form-phone'),
      value: formatPhone(businessPhone),
      action: () => window.open(`tel:${businessPhone}`, '_blank'),
      color: 'text-green-400'
    },
    {
      icon: Mail,
      title: t('form-email'),
      value: businessEmail,
      action: () => window.open(`mailto:${businessEmail}`, '_blank'),
      color: 'text-blue-400'
    },
    {
      icon: MapPin,
      title: t('coverage-title'),
      value: t('coverage-subtitle'),
      action: null,
      color: 'text-red-400'
    },
    {
      icon: Clock,
      title: t('stats-availability'),
      value: '24/7',
      action: null,
      color: 'text-yellow-400'
    }
  ]

  return (
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
            {t('contact-title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            {t('contact-subtitle')}
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-2xl moto-gradient-text">{t('send-message')}</CardTitle>
                <CardDescription className="text-gray-300">
                  {t('service-call-subtitle')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-right text-gray-300">
                        {t('form-full-name')} *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder={t('form-full-name')}
                        className="text-right bg-gray-800 border-gray-600 text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-right text-gray-300">
                        {t('form-phone')} *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="054-1234567"
                        className="text-right bg-gray-800 border-gray-600 text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-right text-gray-300">
                      {t('form-email')}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="text-right bg-gray-800 border-gray-600 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-right text-gray-300">
                        {t('form-vehicle-type')} *
                      </label>
                      <select
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent text-right"
                      >
                        <option value="">{t('form-vehicle-type')}</option>
                        <option value="motorcycle">{t('motorcycle-service')}</option>
                        <option value="atv">{t('atv-service')}</option>
                        <option value="rzr">{t('rzr-service')}</option>
                        <option value="other">{t('vehicle-other')}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-right text-gray-300">
                        {t('form-urgency')}
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent text-right"
                      >
                        <option value="normal">{t('urgency-normal')}</option>
                        <option value="urgent">{t('urgency-urgent')}</option>
                        <option value="emergency">{t('urgency-emergency')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-right text-gray-300">
                      {t('form-location')}
                    </label>
                    <Input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder={t('form-location')}
                      className="text-right bg-gray-800 border-gray-600 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-right text-gray-300">
                      {t('form-message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder={t('form-message')}
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-right"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg font-semibold neon-glow"
                  >
                    {isSubmitting ? (
                      t('form-sending')
                    ) : (
                      <>
                        <Send className="w-5 h-5 ml-2" />
                        {t('form-send')}
                      </>
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="flex items-center p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                      <span className="text-green-400">{t('form-success')}</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-500 ml-2" />
                      <span className="text-red-400">{t('form-error')}</span>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-2xl moto-gradient-text">{t('contact-title')}</CardTitle>
                <CardDescription className="text-gray-300">
                  {t('owner-title')}: {ownerName}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-4 rounded-lg bg-gray-800/50 cursor-pointer hover:bg-gray-800 transition-colors ${info.action ? 'hover:border-orange-500/30 border border-transparent' : ''
                      }`}
                    onClick={info.action || undefined}
                  >
                    <info.icon className={`w-6 h-6 ml-3 ${info.color}`} />
                    <div className="text-right">
                      <h3 className="font-semibold text-white">{info.title}</h3>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-xl text-white">{t('quick-service')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-right">
                  {t('contact-subtitle')}
                </p>
                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    onClick={() => window.open(`tel:${businessPhone}`, '_blank')}
                  >
                    <Phone className="w-4 h-4 ml-2" />
                    {t('call-us')}
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-green-500/30 text-green-400 hover:bg-green-500/10"
                    onClick={() => window.open(generateWhatsAppLink(businessPhone, t('contact-us')), '_blank')}
                  >
                    {t('whatsapp')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}