'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Truck, Facebook, Instagram, Youtube, Shield, Award, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { generateWhatsAppLink, formatPhone } from '@/lib/utils'
import { useLanguage } from '@/lib/i18n'

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export default function Footer() {
  const { t } = useLanguage()
  const businessPhone = '0524823435'
  const businessEmail = 'info@motogar.co.il'
  const ownerName = 'גיא נגר'

  const currentYear = new Date().getFullYear()

  const footerNavigation = {
    services: [
      { name: t('motorcycle-service'), href: '/services/motorcycle' },
      { name: t('atv-service'), href: '/services/atv' },
      { name: t('rzr-service'), href: '/services/rzr' },
    ],
    company: [
      { name: t('about'), href: '/about' },
      { name: t('blog'), href: '/blog' },
      { name: t('testimonials'), href: '/testimonials' },
      { name: t('contact'), href: '/contact' },
      { name: t('pro-garage'), href: '/pro-garage' },
      { name: t('gallery'), href: '/gallery' },
    ],
    resources: [
      { name: 'שאלות נפוצות', href: '/faq' },
      { name: 'תנאי שימוש', href: '/terms' },
      { name: 'מדיניות פרטיות', href: '/privacy' },
      { name: 'נגישות', href: '/accessibility' },
      { name: 'מפת האתר', href: '/sitemap' },
    ],
  }

  return (
    <footer className="bg-linear-to-br from-gray-900 via-black to-gray-800 border-t border-orange-500/20">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold moto-gradient-text">MotoGrar</h3>
                <p className="text-xs text-gray-400">{ownerName}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              שירותי גרירה וחילוץ מקצועיים לאופנועים, ATV ו-RZR/UTV בכל רחבי הארץ.
              זמינים 24/7 עם ציוד מתקדם וצוות מומחים.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">שירותים</h4>
            <ul className="space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">{t('footer-about')}</h4>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <h4 className="text-white font-semibold mb-4">משאבים</h4>
            <ul className="space-y-2">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">צור קשר</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 space-x-reverse text-sm">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={`tel:${businessPhone}`}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  {formatPhone(businessPhone)}
                </a>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-sm">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={`mailto:${businessEmail}`}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  {businessEmail}
                </a>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-sm">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="text-gray-300">זמינים 24/7</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-sm">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="text-gray-300">כל רחבי הארץ</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                size="sm"
                className="w-full neon-glow"
                onClick={() => window.open(generateWhatsAppLink(businessPhone, t('contact-us')), '_blank')}
              >
                <MessageCircle className="w-4 h-4 ml-2" />
                {t('whatsapp')}
              </Button>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-orange-400 font-bold text-lg">500+</div>
                  <div className="text-gray-400 text-xs">גרירות בשנה</div>
                </div>
                <div className="text-center">
                  <div className="text-green-400 font-bold text-lg">98%</div>
                  <div className="text-gray-400 text-xs">שביעות רצון</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} MotoGrar - {t('footer-rights')} | {ownerName}
            </div>
            <div className="flex items-center space-x-6 space-x-reverse text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors">
                תנאי שימוש
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors">
                מדיניות פרטיות
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-orange-400 transition-colors">
                נגישות
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-orange-400 transition-colors">
                מפת האתר
              </Link>
            </div>
          </div>

          {/* Creator Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-4 p-4 bg-linear-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg backdrop-blur-sm">
              <div className="text-left">
                <div className="text-blue-400 font-semibold text-sm">Created by Angel0S-Platform</div>
                <div className="text-gray-400 text-xs">Business & Personal Promotion Services</div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-transparent border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
                  onClick={() => window.open('mailto:Angel4Project@gmail.com', '_blank')}
                >
                  <Mail className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  onClick={() => window.open('https://angel0s-platform.vercel.app', '_blank')}
                >
                  Visit Platform
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <div className="flex justify-center items-center space-x-8 space-x-reverse mt-6 opacity-80">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Clock className="w-4 h-4 text-orange-400" />
              <div className="text-center">
                <div className="text-orange-400 font-semibold text-sm">24/7</div>
                <div className="text-gray-500 text-xs">זמינות מלאה</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Shield className="w-4 h-4 text-green-400" />
              <div className="text-center">
                <div className="text-green-400 font-semibold text-sm">ביטוח</div>
                <div className="text-gray-500 text-xs">כיסוי מלא</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Award className="w-4 h-4 text-blue-400" />
              <div className="text-center">
                <div className="text-blue-400 font-semibold text-sm">מקצועי</div>
                <div className="text-gray-500 text-xs">צוות מומחים</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Star className="w-4 h-4 text-yellow-400" />
              <div className="text-center">
                <div className="text-yellow-400 font-semibold text-sm">5.0</div>
                <div className="text-gray-500 text-xs">דירוג לקוחות</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}