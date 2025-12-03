'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Truck, Facebook, Instagram, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { generateWhatsAppLink, formatPhone } from '@/lib/utils'

const footerNavigation = {
  services: [
    { name: 'גרירת אופנועים', href: '/services/motorcycle' },
    { name: 'גרירת ATV', href: '/services/atv' },
    { name: 'גרירת RZR/UTV', href: '/services/rzr' },
  ],
  company: [
    { name: 'אודותינו', href: '/about' },
    { name: 'ביקורות', href: '/testimonials' },
    { name: 'צור קשר', href: '/contact' },
    { name: 'Pro Garage', href: '/pro-garage' },
  ],
  support: [
    { name: 'שאלות נפוצות', href: '/faq' },
    { name: 'תנאי שימוש', href: '/terms' },
    { name: 'מדיניות פרטיות', href: '/privacy' },
    { name: 'תמיכה', href: '/support' },
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export default function Footer() {
  const businessPhone = '0524823435'
  const businessEmail = 'info@motogar.co.il'
  const ownerName = 'גיא נגר'

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-linear-to-br from-gray-900 via-black to-gray-800 border-t border-orange-500/20">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
            <h4 className="text-white font-semibold mb-4">החברה</h4>
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

            <Button
              size="sm"
              className="w-full neon-glow"
              onClick={() => window.open(generateWhatsAppLink(businessPhone, 'שלום, אני מעוניין בשירות גרירה'), '_blank')}
            >
              <MessageCircle className="w-4 h-4 ml-2" />
              WhatsApp
            </Button>
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
              © {currentYear} MotoGrar - כל הזכויות שמורות | {ownerName}
            </div>
            <div className="flex items-center space-x-6 space-x-reverse text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors">
                תנאי שימוש
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors">
                מדיניות פרטיות
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-orange-400 transition-colors">
                מפת האתר
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center items-center space-x-8 space-x-reverse mt-6 opacity-60">
            <div className="text-center">
              <div className="text-orange-400 font-semibold text-sm">24/7</div>
              <div className="text-gray-500 text-xs">זמינות מלאה</div>
            </div>
            <div className="text-center">
              <div className="text-green-400 font-semibold text-sm">ביטוח</div>
              <div className="text-gray-500 text-xs">כיסוי מלא</div>
            </div>
            <div className="text-center">
              <div className="text-blue-400 font-semibold text-sm">מקצועי</div>
              <div className="text-gray-500 text-xs">צוות מומחים</div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}