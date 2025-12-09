'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle, Truck, Facebook, Instagram, Shield, Award, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { generateWhatsAppLink, formatPhone } from '@/lib/utils'
import { useLanguage } from '@/lib/i18n'

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/people/%D7%9E%D7%95%D7%98%D7%95-%D7%92%D7%A8%D7%A8/61570426060339/', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/guynagar87/', icon: Instagram },
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
      { name: t('faq'), href: '/faq' },
      { name: t('terms'), href: '/terms' },
      { name: t('privacy'), href: '/privacy' },
      { name: t('accessibility'), href: '/accessibility' },
      { name: t('sitemap'), href: '/sitemap-page' },
    ],
  }

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-black to-gray-900 border-t border-orange-500/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black moto-gradient-text tracking-tight">MotoGrar</h3>
                <p className="text-xs text-gray-400 font-medium">{ownerName}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('hero-description')}
            </p>

            <div className="flex flex-col gap-4">
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110 border border-white/5"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Google Review Button */}
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJVbNrMDWcUYsRfAcvoLusLmM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-bold px-5 py-3 rounded-xl transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 text-sm group"
              >
                <Star className="w-4 h-4 fill-white group-hover:rotate-12 transition-transform" />
                {t('rate-us-google')}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
              {t('services')}
            </h4>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-orange-500 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
              {t('footer-about')}
            </h4>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-orange-500 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
              {t('footer-links')}
            </h4>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-orange-500 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
              {t('contact')}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${businessPhone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group p-2 rounded-lg hover:bg-white/5 -mx-2"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all border border-white/5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-medium">חייג אלינו</span>
                    <span className="text-sm font-bold dir-ltr">{formatPhone(businessPhone)}</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={generateWhatsAppLink(businessPhone, t('contact-us'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group p-2 rounded-lg hover:bg-white/5 -mx-2"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all border border-white/5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-medium">וואטסאפ</span>
                    <span className="text-sm font-bold">צ&apos;אט מהיר</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessEmail}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group p-2 rounded-lg hover:bg-white/5 -mx-2"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all border border-white/5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-medium">אימייל</span>
                    <span className="text-sm font-bold">{businessEmail}</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-400 group p-2 -mx-2">
                  <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center border border-white/5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-medium">אזורי שירות</span>
                    <span className="text-sm font-bold">{t('coverage-subtitle')}</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-400 group p-2 -mx-2">
                  <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center border border-white/5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-medium">זמינות</span>
                    <span className="text-sm font-bold">24/7 - {t('available-247')}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm text-center md:text-right font-medium">
            © {currentYear} MotoGrar. {t('footer-rights')}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
              <Shield className="w-4 h-4" />
              <span className="font-bold">{t('value-safety-title')}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">
              <Award className="w-4 h-4" />
              <span className="font-bold">{t('professional-towing')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}