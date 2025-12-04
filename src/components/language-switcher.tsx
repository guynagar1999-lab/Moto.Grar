'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Languages, ChevronDown, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage, Language } from '@/lib/i18n'

const languageOptions = [
  { code: 'he' as Language, name: 'עברית', flag: '🇮🇱' },
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' }
]

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languageOptions.find(lang => lang.code === language)

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    setIsOpen(false)
  }

  useEffect(() => {
    // Update document direction and language when language changes
    document.documentElement.lang = language
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr'
  }, [language])

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-700/50"
      >
        <Languages className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage?.flag}</span>
        <span className="hidden md:inline">{currentLanguage?.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50"
          >
            {languageOptions.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-800 transition-colors first:rounded-t-lg last:rounded-b-lg"
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="flex-1 text-gray-300 hover:text-white">{lang.name}</span>
                {language === lang.code && (
                  <Check className="w-4 h-4 text-orange-400" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}