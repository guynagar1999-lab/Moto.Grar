'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Languages, ChevronDown, Check } from 'lucide-react'
import { useLanguage, Language, languageNames, languageFlags } from '@/lib/i18n'

export default function LanguageSwitcher() {
  const { language, setLanguage, isRTL } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Handle mount state for hydration
  useEffect(() => {
    setHasMounted(true)
  }, [])

  // Update document direction
  useEffect(() => {
    if (hasMounted) {
      document.documentElement.lang = language
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    }
  }, [language, isRTL, hasMounted])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    setIsOpen(false)
  }

  const languageOptions: { code: Language; name: string; flag: string }[] = [
    { code: 'he', name: languageNames.he, flag: languageFlags.he },
    { code: 'en', name: languageNames.en, flag: languageFlags.en },
    { code: 'ar', name: languageNames.ar, flag: languageFlags.ar },
    { code: 'fr', name: languageNames.fr, flag: languageFlags.fr },
    { code: 'ru', name: languageNames.ru, flag: languageFlags.ru }
  ]

  const currentLanguage = languageOptions.find(lang => lang.code === language) || languageOptions[0]

  // Render the same content on server and client to prevent hydration mismatch
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 border border-white/10 hover:border-orange-500/50 transition-all text-white backdrop-blur-md min-w-[100px] justify-center"
        style={{
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'manipulation'
        }}
        aria-label="Select language"
      >
        <Languages className="w-4 h-4 text-orange-400" />
        <span className="text-lg leading-none">{hasMounted ? currentLanguage.flag : '🇮🇱'}</span>
        <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-gray-900/95 backdrop-blur-xl border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
            style={{
              zIndex: 9999,
              maxWidth: 'calc(100vw - 2rem)',
            }}
          >
            <div className="max-h-[60vh] overflow-y-auto">
              {languageOptions.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-800 transition-colors ${language === lang.code ? 'bg-orange-500/20 border-r-2 border-orange-500' : ''
                    }`}
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className={`flex-1 font-medium ${language === lang.code ? 'text-orange-400' : 'text-gray-200'}`}>
                    {lang.name}
                  </span>
                  {language === lang.code && (
                    <Check className="w-4 h-4 text-orange-400" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}