'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Truck, MessageCircle, ChevronDown, Zap, Home, Info, Briefcase, MapPin, Image as ImageIcon, BookOpen } from 'lucide-react'
import { generateWhatsAppLink, formatPhone } from '@/lib/utils'
import LanguageSwitcher from '@/components/language-switcher'
import { useLanguage } from '@/lib/i18n'

export default function Header() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hasMounted, setHasMounted] = useState(false)
  const pathname = usePathname()

  const businessPhone = '0524823435'
  const slogan = '⚡ הגרירה הכי מהירה בישראל'

  // Navigation items
  const navigation = [
    { name: 'home', href: '/', icon: Home },
    {
      name: 'services',
      href: '/services',
      icon: Briefcase,
      children: [
        { name: 'motorcycle-service', href: '/services/motorcycle' },
        { name: 'atv-service', href: '/services/atv' },
        { name: 'rzr-service', href: '/services/rzr' },
      ]
    },
    { name: 'about', href: '/about', icon: Info },
    { name: 'blog', href: '/blog', icon: BookOpen },
    { name: 'testimonials', href: '/testimonials', icon: MessageCircle },
    { name: 'service-call', href: '/service-call', icon: Phone },
    { name: 'contact', href: '/contact', icon: MapPin },
    { name: 'pro-garage', href: '/pro-garage', icon: Zap },
    { name: 'gallery', href: '/gallery', icon: ImageIcon },
  ]

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
        ? 'bg-gray-950/90 backdrop-blur-xl border-b border-orange-500/20 shadow-2xl shadow-black/50 py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group relative z-50 shrink-0">
            <div className="relative">
              <div className="absolute -inset-2 bg-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-300 group-hover:scale-105 relative z-10 border border-white/10">
                <Truck className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tight leading-none whitespace-nowrap">
                MotoGrar
              </h1>
              <p className="text-[10px] md:text-xs text-orange-400 font-bold tracking-wider uppercase mt-0.5 whitespace-nowrap" suppressHydrationWarning>
                {slogan}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-gray-900/50 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md shadow-inner absolute left-1/2 -translate-x-1/2">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${isActive(item.href)
                        ? 'text-gray-900 bg-orange-500 shadow-lg shadow-orange-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      suppressHydrationWarning
                    >
                      <span suppressHydrationWarning>{t(item.name as any)}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </Link>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full right-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-xl border border-orange-500/20 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden z-50 p-1.5"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${isActive(child.href)
                                ? 'text-orange-400 bg-orange-500/10'
                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                }`}
                              suppressHydrationWarning
                            >
                              <div className={`w-1.5 h-1.5 rounded-full ${isActive(child.href) ? 'bg-orange-500' : 'bg-gray-600'}`} />
                              <span suppressHydrationWarning>{t(child.name as any)}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${isActive(item.href)
                      ? 'text-gray-900 bg-orange-500 shadow-lg shadow-orange-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    suppressHydrationWarning
                  >
                    <span suppressHydrationWarning>{t(item.name as any)}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Actions Section */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language Switcher - Desktop */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden relative z-50 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 transition-all active:scale-95"
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 xl:hidden"
                style={{ top: 0 }}
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-gray-950/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl z-50 xl:hidden flex flex-col"
              >
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Truck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-white font-black text-lg tracking-tight block">MotoGrar</span>
                      <span className="text-orange-400 text-[10px] font-bold tracking-wide uppercase">Premium Service</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                  {navigation.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {item.children ? (
                        <div className="space-y-2 mb-2">
                          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5">
                            <item.icon className="w-5 h-5 text-orange-500" />
                            <span className="font-bold text-base text-white" suppressHydrationWarning>{t(item.name as any)}</span>
                          </div>
                          <div className="mr-4 pl-4 border-r-2 border-white/10 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all rounded-xl ${isActive(child.href)
                                  ? 'text-orange-400 bg-orange-500/10'
                                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                                  }`}
                                suppressHydrationWarning
                              >
                                <div className={`w-1.5 h-1.5 rounded-full ${isActive(child.href) ? 'bg-orange-500' : 'bg-gray-600'}`} />
                                <span suppressHydrationWarning>{t(child.name as any)}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold text-base transition-all ${isActive(item.href)
                            ? 'text-white bg-gradient-to-r from-orange-600 to-red-600 shadow-lg shadow-orange-500/20'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                          suppressHydrationWarning
                        >
                          <item.icon className={`w-5 h-5 ${isActive(item.href) ? 'text-white' : 'text-gray-500'}`} />
                          <span suppressHydrationWarning>{t(item.name as any)}</span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Footer */}
                <div className="p-4 border-t border-white/5 bg-black/20">
                  <div className="grid grid-cols-2 gap-3">
                    <LanguageSwitcher />
                    <a
                      href={`tel:${businessPhone}`}
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-500 transition-colors shadow-lg shadow-green-900/20"
                    >
                      <Phone className="w-4 h-4" />
                      <span>חייג</span>
                    </a>
                  </div>
                  <p className="text-center text-gray-500 text-xs mt-4">
                    © {new Date().getFullYear()} MotoGrar
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}