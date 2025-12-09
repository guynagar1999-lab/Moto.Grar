'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Bike, Truck, Zap, Clock, Shield, Star, Phone, ArrowLeft } from 'lucide-react'

const AtvIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 14h16" />
    <circle cx="7" cy="17" r="3" />
    <circle cx="17" cy="17" r="3" />
    <path d="M4 14V9a1 1 0 0 1 1-1h2.5l1.5-3h6l1.5 3H19a1 1 0 0 1 1 1v5" />
    <path d="M11 14V8" />
    <path d="M7 11h10" />
  </svg>
)

const RzrIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M19 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M12 17V7" />
    <path d="m5 11 4-7h6l4 7" />
    <path d="M2 11h20" />
    <path d="M12 3v4" />
  </svg>
)

import { useLanguage } from '@/lib/i18n'

// ... imports and icons

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Bike,
      title: t('motorcycle-service'),
      description: t('service-description'),
      href: '/services/motorcycle',
      color: 'from-blue-500 to-blue-700',
      stats: t('stats-experience')
    },
    {
      icon: AtvIcon,
      title: t('atv-service'),
      description: t('service-description'),
      href: '/services/atv',
      color: 'from-green-500 to-green-700',
      stats: t('stats-availability')
    },
    {
      icon: RzrIcon,
      title: t('rzr-service'),
      description: t('service-description'),
      href: '/services/rzr',
      color: 'from-red-500 to-red-700',
      stats: t('stats-satisfaction')
    }
  ]

  const features = [
    { icon: Clock, value: '24/7', label: t('available-247') },
    { icon: Zap, value: '15 דק\'', label: t('eta') },
    { icon: Shield, value: '100%', label: t('stats-satisfaction') },
    { icon: Star, value: '5.0', label: t('rating') }
  ]

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent" />
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              {t('services')} <span className="text-orange-500">{t('professional-towing')}</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              {t('hero-description')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-gray-900/50 border-y border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <feature.icon className="w-5 h-5 text-orange-400" />
                  <span className="text-2xl font-bold text-white">{feature.value}</span>
                </div>
                <p className="text-gray-400 text-sm">{feature.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block h-full"
              >
                <div className="h-full bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${service.color} p-6`}>
                    <service.icon className="w-12 h-12 text-white mb-4" />
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-orange-400 font-medium">
                        {service.stats}
                      </span>
                      <span className="flex items-center gap-1 text-white group-hover:text-orange-400 transition-colors">
                        {t('learn-more')}
                        <ArrowLeft className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-900/30 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">{t('why-choose-us')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('hero-description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('professional-towing'), desc: t('hero-description') },
              { title: t('stats-years'), desc: t('about-subtitle') },
              { title: t('pricing'), desc: t('service-description') },
              { title: t('stats-satisfaction'), desc: t('testimonials-subtitle') }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('ready-to-help')}
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {t('contact-subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/service-call"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-colors"
            >
              {t('service-call')}
            </Link>
            <a
              href="tel:0524823435"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg z-10"
            >
              <Phone className="w-5 h-5" />
              052-4823-435
            </a>
          </div>
        </motion.div>
      </div>
    </div >
  )
}