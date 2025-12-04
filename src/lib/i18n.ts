'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'he' | 'en'

export interface Translation {
  // Navigation
  home: string
  services: string
  testimonials: string
  contact: string
  about: string
  blog: string
  'pro-garage': string
  'service-call': string
  gallery: string

  // Hero Section
  'hero-title': string
  'hero-subtitle': string
  'hero-description': string
  'call-now': string
  whatsapp: string
  'quick-service': string

  // Service Call Form
  'service-call-title': string
  'service-call-subtitle': string
  'form-full-name': string
  'form-phone': string
  'form-email': string
  'form-vehicle-type': string
  'form-location': string
  'form-description': string
  'form-submit': string
  'form-required': string
  'form-urgency': string
  'urgency-normal': string
  'urgency-urgent': string
  'urgency-emergency': string

  // Services
  'motorcycle-service': string
  'atv-service': string
  'rzr-service': string
  'service-description': string
  'pricing': string
  'contact-us': string

  // About
  'about-title': string
  'about-subtitle': string
  'owner-name': string
  'owner-title': string
  'stats-experience': string
  'stats-satisfaction': string
  'stats-availability': string
  'stats-years': string

  // Testimonials
  'testimonials-title': string
  'testimonials-subtitle': string
  'rating': string

  // Contact
  'contact-title': string
  'contact-subtitle': string
  'send-message': string
  'message-sent': string
  'message-error': string

  // Blog
  'blog-title': string
  'blog-subtitle': string
  'read-more': string
  'published': string
  'author': string

  // Footer
  'footer-about': string
  'footer-links': string
  'footer-contact': string
  'footer-follow': string
  'footer-rights': string

  // Common
  'loading': string
  'error': string
  'success': string
  'cancel': string
  'confirm': string
  'close': string
  'next': string
  'previous': string
  'view-all': string
  'learn-more': string
}

const translations: Record<Language, Translation> = {
  he: {
    // Navigation
    home: 'בית',
    services: 'שירותים',
    testimonials: 'ביקורות',
    contact: 'צור קשר',
    about: 'אודותינו',
    blog: 'בלוג',
    'pro-garage': 'Pro Garage',
    'service-call': 'קריאת שירות',
    gallery: 'גלריה',

    // Hero Section
    'hero-title': 'גרירה מקצועית לאופנועים',
    'hero-subtitle': 'שירות 24/7 בכל הארץ',
    'hero-description': 'ציוד מתקדם וצוות מומחים לחילוץ אופנועים, ATV ו-RZR/UTV',
    'call-now': 'התקשר עכשיו',
    whatsapp: 'וואטסאפ',
    'quick-service': 'בקשת שירות מיידית',

    // Service Call Form
    'service-call-title': 'קריאת שירות מיידית',
    'service-call-subtitle': 'מלא את הפרטים ונגיע תוך 15-45 דקות',
    'form-full-name': 'שם מלא',
    'form-phone': 'טלפון',
    'form-email': 'אימייל',
    'form-vehicle-type': 'סוג רכב',
    'form-location': 'מיקום',
    'form-description': 'תיאור הבעיה',
    'form-submit': 'שלח בקשה',
    'form-required': 'שדה חובה',
    'form-urgency': 'דחיפות',
    'urgency-normal': 'רגיל',
    'urgency-urgent': 'דחוף',
    'urgency-emergency': 'חירום',

    // Services
    'motorcycle-service': 'גרירת אופנועים',
    'atv-service': 'גרירת ATV',
    'rzr-service': 'גרירת RZR/UTV',
    'service-description': 'מה כולל השירות?',
    'pricing': 'מחירים והזמנה',
    'contact-us': 'צור קשר',

    // About
    'about-title': 'אודותינו',
    'about-subtitle': 'חברת גרירת האופנועים המובילה בישראל',
    'owner-name': 'גיא נגר',
    'owner-title': 'מייסד ובעלים',
    'stats-experience': 'גרירות בשנה',
    'stats-satisfaction': 'שביעות רצון לקוחות',
    'stats-availability': 'זמינות מלאה',
    'stats-years': 'שנות ניסיון',

    // Testimonials
    'testimonials-title': 'ביקורות וחוות דעת',
    'testimonials-subtitle': 'מה הלקוחות שלנו אומרים על השירות',
    'rating': 'דירוג',

    // Contact
    'contact-title': 'צור קשר',
    'contact-subtitle': 'אנו כאן לעזור לך בכל שאלה או בקשה',
    'send-message': 'שלח הודעה',
    'message-sent': 'ההודעה נשלחה בהצלחה!',
    'message-error': 'אירעה שגיאה. אנא נסה שוב.',

    // Blog
    'blog-title': 'בלוג MotoGar',
    'blog-subtitle': 'טיפים, עצות ומידע חשוב לרוכבי אופנועים',
    'read-more': 'קרא עוד',
    'published': 'פורסם',
    'author': 'מאת',

    // Footer
    'footer-about': 'אודותינו',
    'footer-links': 'קישורים חשובים',
    'footer-contact': 'צור קשר',
    'footer-follow': 'עקוב אחרינו',
    'footer-rights': 'כל הזכויות שמורות',

    // Common
    'loading': 'טוען...',
    'error': 'שגיאה',
    'success': 'הצלחה',
    'cancel': 'ביטול',
    'confirm': 'אישור',
    'close': 'סגור',
    'next': 'הבא',
    'previous': 'קודם',
    'view-all': 'צפה בהכל',
    'learn-more': 'למד עוד'
  },
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    testimonials: 'Testimonials',
    contact: 'Contact',
    about: 'About Us',
    blog: 'Blog',
    'pro-garage': 'Pro Garage',
    'service-call': 'Service Call',
    gallery: 'Gallery',

    // Hero Section
    'hero-title': 'Professional Motorcycle Towing',
    'hero-subtitle': '24/7 Service Across Israel',
    'hero-description': 'Advanced equipment and expert team for motorcycle, ATV and RZR/UTV recovery',
    'call-now': 'Call Now',
    whatsapp: 'WhatsApp',
    'quick-service': 'Quick Service Request',

    // Service Call Form
    'service-call-title': 'Immediate Service Call',
    'service-call-subtitle': 'Fill in your details and we\'ll arrive within 15-45 minutes',
    'form-full-name': 'Full Name',
    'form-phone': 'Phone',
    'form-email': 'Email',
    'form-vehicle-type': 'Vehicle Type',
    'form-location': 'Location',
    'form-description': 'Problem Description',
    'form-submit': 'Send Request',
    'form-required': 'Required field',
    'form-urgency': 'Urgency',
    'urgency-normal': 'Normal',
    'urgency-urgent': 'Urgent',
    'urgency-emergency': 'Emergency',

    // Services
    'motorcycle-service': 'Motorcycle Towing',
    'atv-service': 'ATV Towing',
    'rzr-service': 'RZR/UTV Towing',
    'service-description': 'What\'s included?',
    'pricing': 'Pricing & Booking',
    'contact-us': 'Contact Us',

    // About
    'about-title': 'About Us',
    'about-subtitle': 'Israel\'s Leading Motorcycle Towing Company',
    'owner-name': 'Guy Nagar',
    'owner-title': 'Founder & Owner',
    'stats-experience': 'Tows per year',
    'stats-satisfaction': 'Customer satisfaction',
    'stats-availability': 'Full availability',
    'stats-years': 'Years of experience',

    // Testimonials
    'testimonials-title': 'Reviews & Testimonials',
    'testimonials-subtitle': 'What our customers say about our service',
    'rating': 'Rating',

    // Contact
    'contact-title': 'Contact Us',
    'contact-subtitle': 'We\'re here to help with any questions or requests',
    'send-message': 'Send Message',
    'message-sent': 'Message sent successfully!',
    'message-error': 'An error occurred. Please try again.',

    // Blog
    'blog-title': 'MotoGar Blog',
    'blog-subtitle': 'Tips, advice and important information for motorcyclists',
    'read-more': 'Read More',
    'published': 'Published',
    'author': 'By',

    // Footer
    'footer-about': 'About Us',
    'footer-links': 'Important Links',
    'footer-contact': 'Contact',
    'footer-follow': 'Follow Us',
    'footer-rights': 'All rights reserved',

    // Common
    'loading': 'Loading...',
    'error': 'Error',
    'success': 'Success',
    'cancel': 'Cancel',
    'confirm': 'Confirm',
    'close': 'Close',
    'next': 'Next',
    'previous': 'Previous',
    'view-all': 'View All',
    'learn-more': 'Learn More'
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof Translation) => string
  isRTL: boolean
  direction: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Initialize with localStorage value if available, otherwise default to Hebrew
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('motogar-language') as Language
      if (savedLang && (savedLang === 'he' || savedLang === 'en')) {
        return savedLang
      }
    }
    return 'he' // Default to Hebrew
  })

  useEffect(() => {
    // Save language preference to localStorage whenever it changes
    localStorage.setItem('motogar-language', language)
  }, [language])

  const t = (key: keyof Translation): string => {
    return translations[language][key] || key
  }

  const isRTL = language === 'he'
  const direction = isRTL ? 'rtl' : 'ltr'

  return React.createElement(LanguageContext.Provider, {
    value: {
      language,
      setLanguage,
      t,
      isRTL,
      direction
    }
  }, children)
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export { translations }