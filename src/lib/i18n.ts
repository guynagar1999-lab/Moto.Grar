'use client'

import React, { createContext, useContext, useState } from 'react'

export type Language = 'he' | 'en' | 'ar'

export interface Translation {
  // Navigation
  home: string
  services: string
  testimonials: string
  contact: string
  about: string
  'pro-garage': string
  'service-call': string

  // Hero Section
  'hero-title': string
  'hero-subtitle': string
  'hero-description': string
  'call-now': string
  'whatsapp': string

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

  // Common
  'loading': string
  'error': string
  'success': string
  'cancel': string
  'confirm': string
}

const translations: Record<Language, Translation> = {
  he: {
    home: 'בית',
    services: 'שירותים',
    testimonials: 'ביקורות',
    contact: 'צור קשר',
    about: 'אודותינו',
    'pro-garage': 'Pro Garage',
    'service-call': 'קריאת שירות',

    'hero-title': 'גרירה מקצועית לאופנועים',
    'hero-subtitle': 'שירות 24/7 בכל הארץ',
    'hero-description': 'ציוד מתקדם וצוות מומחים לחילוץ אופנועים, ATV ו-RZR/UTV',
    'call-now': 'התקשר עכשיו',
    whatsapp: 'וואטסאפ',

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

    loading: 'טוען...',
    error: 'שגיאה',
    success: 'הצלחה',
    cancel: 'ביטול',
    confirm: 'אישור'
  },
  en: {
    home: 'Home',
    services: 'Services',
    testimonials: 'Testimonials',
    contact: 'Contact',
    about: 'About Us',
    'pro-garage': 'Pro Garage',
    'service-call': 'Service Call',

    'hero-title': 'Professional Motorcycle Towing',
    'hero-subtitle': '24/7 Service Across Israel',
    'hero-description': 'Advanced equipment and expert team for motorcycle, ATV and RZR/UTV recovery',
    'call-now': 'Call Now',
    whatsapp: 'WhatsApp',

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

    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  ar: {
    home: 'الرئيسية',
    services: 'الخدمات',
    testimonials: 'التقييمات',
    contact: 'اتصل بنا',
    about: 'من نحن',
    'pro-garage': 'الكراج المهني',
    'service-call': 'طلب خدمة',

    'hero-title': 'سحب الدراجات النارية المهني',
    'hero-subtitle': 'خدمة 24/7 في جميع أنحاء إسرائيل',
    'hero-description': 'معدات متقدمة وفريق خبراء لإنقاذ الدراجات النارية وATV وRZR/UTV',
    'call-now': 'اتصل الآن',
    whatsapp: 'واتساب',

    'service-call-title': 'طلب خدمة فوري',
    'service-call-subtitle': 'املأ التفاصيل وسنصل خلال 15-45 دقيقة',
    'form-full-name': 'الاسم الكامل',
    'form-phone': 'الهاتف',
    'form-email': 'البريد الإلكتروني',
    'form-vehicle-type': 'نوع المركبة',
    'form-location': 'الموقع',
    'form-description': 'وصف المشكلة',
    'form-submit': 'إرسال الطلب',
    'form-required': 'حقل مطلوب',

    loading: 'جارٍ التحميل...',
    error: 'خطأ',
    success: 'نجح',
    cancel: 'إلغاء',
    confirm: 'تأكيد'
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof Translation) => string
  detectLanguage: () => Language
  translateText: (text: string, targetLang: Language) => Promise<string>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const detectLanguage = (): Language => {
    // Check browser language
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('ar')) return 'ar'
      if (browserLang.startsWith('en')) return 'en'
    }
    return 'he' // Default to Hebrew
  }

  const [language, setLanguage] = useState<Language>(detectLanguage)

  const t = (key: keyof Translation): string => {
    return translations[language][key] || key
  }

  const translateText = async (text: string): Promise<string> => {
    // In a real implementation, this would call a translation API
    // For now, we'll return the original text
    return text
  }

  return React.createElement(LanguageContext.Provider, {
    value: {
      language,
      setLanguage,
      t,
      detectLanguage,
      translateText
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