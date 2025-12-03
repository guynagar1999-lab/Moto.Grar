'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Truck, MessageCircle, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { generateWhatsAppLink, formatPhone } from '@/lib/utils'
import LanguageSwitcher from '@/components/language-switcher'

const navigation = [
  { name: 'בית', href: '/' },
  {
    name: 'שירותים',
    href: '#',
    children: [
      { name: 'גרירת אופנועים', href: '/services/motorcycle' },
      { name: 'גרירת ATV', href: '/services/atv' },
      { name: 'גרירת RZR/UTV', href: '/services/rzr' },
    ]
  },
  { name: 'אודותינו', href: '/about' },
  { name: 'ביקורות', href: '/testimonials' },
  { name: 'קריאת שירות', href: '/service-call' },
  { name: 'צור קשר', href: '/contact' },
  { name: 'Pro Garage', href: '/pro-garage' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const businessPhone = '0524823435'
  const ownerName = 'גיא נגר'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-orange-500/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 lg:w-12 lg:h-12 bg-linear-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center neon-glow"
            >
              <Truck className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-lg lg:text-xl font-bold moto-gradient-text">MotoGrar</h1>
              <p className="text-xs text-gray-400 hidden sm:block">{ownerName}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className={`flex items-center space-x-1 space-x-reverse px-3 py-2 rounded-lg transition-colors ${
                      activeDropdown === item.name ? 'text-orange-400' : 'text-white hover:text-orange-400'
                    }`}>
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full right-0 mt-2 w-56 bg-gray-900 border border-orange-500/20 rounded-lg shadow-xl overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-3 text-sm hover:bg-orange-500/10 transition-colors ${
                                isActive(child.href) ? 'text-orange-400 bg-orange-500/5' : 'text-gray-300'
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'text-orange-400 bg-orange-500/10'
                        : 'text-white hover:text-orange-400 hover:bg-orange-500/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Buttons & Language Switcher */}
          <div className="hidden md:flex items-center space-x-3 space-x-reverse">
            <LanguageSwitcher />
            <Button
              variant="outline"
              size="sm"
              className="bg-black/50 backdrop-blur border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
              onClick={() => window.open(`tel:${businessPhone}`, '_blank')}
            >
              <Phone className="w-4 h-4 ml-2" />
              {formatPhone(businessPhone)}
            </Button>
            <Button
              size="sm"
              className="neon-glow"
              onClick={() => window.open(generateWhatsAppLink(businessPhone, 'שלום, אני מעוניין בשירות גרירה'), '_blank')}
            >
              <MessageCircle className="w-4 h-4 ml-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-orange-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div className="space-y-1">
                        <div className="px-4 py-2 text-orange-400 font-medium">{item.name}</div>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-8 py-2 text-sm hover:bg-orange-500/10 transition-colors ${
                              isActive(child.href) ? 'text-orange-400' : 'text-gray-300'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-2 rounded-lg transition-colors ${
                          isActive(item.href)
                            ? 'text-orange-400 bg-orange-500/10'
                            : 'text-white hover:text-orange-400 hover:bg-orange-500/5'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Contact Buttons */}
                <div className="px-4 pt-4 space-y-2 border-t border-gray-700">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-black/50 backdrop-blur border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                    onClick={() => {
                      window.open(`tel:${businessPhone}`, '_blank')
                      setIsOpen(false)
                    }}
                  >
                    <Phone className="w-4 h-4 ml-2" />
                    {formatPhone(businessPhone)}
                  </Button>
                  <Button
                    size="sm"
                    className="w-full neon-glow"
                    onClick={() => {
                      window.open(generateWhatsAppLink(businessPhone, 'שלום, אני מעוניין בשירות גרירה'), '_blank')
                      setIsOpen(false)
                    }}
                  >
                    <MessageCircle className="w-4 h-4 ml-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}