'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'he' | 'en' | 'ar' | 'fr' | 'ru'

export const languageNames: Record<Language, string> = {
  he: 'עברית',
  en: 'English',
  ar: 'العربية',
  fr: 'Français',
  ru: 'Русский'
}

export const languageFlags: Record<Language, string> = {
  he: '🇮🇱',
  en: '🇺🇸',
  ar: '🇸🇦',
  fr: '🇫🇷',
  ru: '🇷🇺'
}

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
  faq: string
  terms: string
  privacy: string
  accessibility: string
  sitemap: string

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
  'form-message': string
  'form-send': string
  'form-sending': string
  'form-success': string
  'form-error': string
  'vehicle-other': string
  'form-description': string
  'form-submit': string
  'form-required': string
  'form-urgency': string
  'urgency-normal': string
  'urgency-urgent': string
  'urgency-emergency': string
  'form-photo': string
  'send-via-whatsapp': string

  // Services
  'motorcycle-service': string
  'atv-service': string
  'rzr-service': string
  'service-description': string
  'pricing': string
  'contact-us': string
  'professional-towing': string
  'available-247': string

  // About
  'about-title': string
  'about-subtitle': string
  'owner-name': string
  'owner-title': string
  'stats-experience': string
  'stats-satisfaction': string
  'stats-availability': string
  'stats-years': string
  'why-choose-us': string
  'ready-to-help': string
  'value-safety-title': string
  'value-safety-desc': string
  'value-availability-title': string
  'value-availability-desc': string
  'value-professionalism-title': string
  'value-professionalism-desc': string
  'value-service-title': string
  'value-service-desc': string
  'coverage-title': string
  'coverage-subtitle': string
  'coverage-north': string
  'coverage-center': string
  'coverage-jerusalem': string
  'coverage-south': string
  'coverage-sharon': string
  'coverage-haifa': string
  'coverage-galilee': string
  'coverage-valley': string

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
  'footer-info': string
  'rate-us-google': string

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
  'call-us': string
  'email-us': string

  // Status Page
  'status-pending': string
  'status-approved': string
  'status-en-route': string
  'status-completed': string
  'status-cancelled': string
  'eta': string

  // Accessibility
  'accessibility-title': string
  'font-size': string
  'high-contrast': string
  'grayscale': string
  'highlight-links': string
  'readable-font': string
  'reset-settings': string
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
    faq: 'שאלות נפוצות',
    terms: 'תנאי שימוש',
    privacy: 'מדיניות פרטיות',
    accessibility: 'נגישות',
    sitemap: 'מפת האתר',

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
    'form-message': 'הודעה',
    'form-send': 'שלח הודעה',
    'form-sending': 'שולח...',
    'form-success': 'ההודעה נשלחה בהצלחה! נחזור אליך בקרוב.',
    'form-error': 'אירעה שגיאה. אנא נסה שוב או התקשר אלינו.',
    'vehicle-other': 'אחר',
    'form-description': 'תיאור הבעיה',
    'form-submit': 'שלח בקשה',
    'form-required': 'שדה חובה',
    'form-urgency': 'דחיפות',
    'urgency-normal': 'רגיל',
    'urgency-urgent': 'דחוף',
    'urgency-emergency': 'חירום',
    'form-photo': 'צרף תמונה',
    'send-via-whatsapp': 'שלח באמצעות WhatsApp',

    // Services
    'motorcycle-service': 'גרירת אופנועים',
    'atv-service': 'גרירת ATV',
    'rzr-service': 'גרירת RZR/UTV',
    'service-description': 'מה כולל השירות?',
    'pricing': 'מחירים והזמנה',
    'contact-us': 'צור קשר',
    'professional-towing': 'גרירה מקצועית',
    'available-247': 'זמינות 24/7',

    // About
    'about-title': 'אודותינו',
    'about-subtitle': 'חברת גרירת האופנועים המובילה בישראל',
    'owner-name': 'גיא נגר',
    'owner-title': 'מייסד ובעלים',
    'stats-experience': 'גרירות בשנה',
    'stats-satisfaction': 'שביעות רצון לקוחות',
    'stats-availability': 'זמינות מלאה',
    'stats-years': 'שנות ניסיון',
    'why-choose-us': 'למה לבחור בנו?',
    'ready-to-help': 'מוכנים לעזור לך?',
    'value-safety-title': 'בטיחות מעל הכל',
    'value-safety-desc': 'אנו מתמחים בגרירה בטוחה של אופנועים, ATV ו-RZR/UTV עם ציוד מתמחה ונהגים מוסמכים.',
    'value-availability-title': 'זמינות 24/7',
    'value-availability-desc': 'שירות חירום זמין בכל שעות היממה, כולל שבתות וחגים, בכל רחבי הארץ.',
    'value-professionalism-title': 'מקצועיות טכנית',
    'value-professionalism-desc': 'צוות טכני מנוסה עם ידע מעמיק בכל סוגי הכלים המוטוריים והציוד המקצועי.',
    'value-service-title': 'שירות אישי',
    'value-service-desc': 'יחס אישי לכל לקוח, הבנה לצרכים הייחודיים והתאמה אישית של השירות.',
    'coverage-title': 'אזורי כיסוי',
    'coverage-subtitle': 'כיסוי ארצי מלא בכל רחבי ישראל',
    'coverage-north': 'צפון - כל האזור עד הגבול',
    'coverage-center': 'מרכז - תל אביב והסביבה',
    'coverage-jerusalem': 'ירושלים והסביבה',
    'coverage-south': 'דרום - באר שבע ונגב',
    'coverage-sharon': 'השרון והשפלה',
    'coverage-haifa': 'חיפה וקריות',
    'coverage-galilee': 'גליל עליון ותחתון',
    'coverage-valley': 'עמק יזרעאל',

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
    'blog-title': 'בלוג MotoGrar',
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
    'footer-info': 'מידע ושימוש',
    'rate-us-google': 'דרג אותנו בגוגל',

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
    'learn-more': 'למידע נוסף',
    'call-us': 'התקשרו אלינו',
    'email-us': 'שלחו אימייל',

    // Status Page
    'status-pending': 'ממתין לאישור',
    'status-approved': 'אושר',
    'status-en-route': 'בדרך אליך',
    'status-completed': 'הושלם',
    'status-cancelled': 'בוטל',
    'eta': 'זמן הגעה משוער',

    // Accessibility
    'accessibility-title': 'נגישות',
    'font-size': 'גודל טקסט',
    'high-contrast': 'ניגודיות גבוהה',
    'grayscale': 'גווני אפור',
    'highlight-links': 'הדגש קישורים',
    'readable-font': 'גופן קריא',
    'reset-settings': 'איפוס הגדרות'
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
    faq: 'FAQ',
    terms: 'Terms of Use',
    privacy: 'Privacy Policy',
    accessibility: 'Accessibility',
    sitemap: 'Sitemap',

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
    'form-message': 'Message',
    'form-send': 'Send Message',
    'form-sending': 'Sending...',
    'form-success': 'Message sent successfully! We will get back to you soon.',
    'form-error': 'An error occurred. Please try again or call us.',
    'vehicle-other': 'Other',
    'form-description': 'Problem Description',
    'form-submit': 'Send Request',
    'form-required': 'Required field',
    'form-urgency': 'Urgency',
    'urgency-normal': 'Normal',
    'urgency-urgent': 'Urgent',
    'urgency-emergency': 'Emergency',
    'form-photo': 'Attach Photo',
    'send-via-whatsapp': 'Send via WhatsApp',

    // Services
    'motorcycle-service': 'Motorcycle Towing',
    'atv-service': 'ATV Towing',
    'rzr-service': 'RZR/UTV Towing',
    'service-description': 'What\'s included?',
    'pricing': 'Pricing & Booking',
    'contact-us': 'Contact Us',
    'professional-towing': 'Professional Towing',
    'available-247': '24/7 Availability',

    // About
    'about-title': 'About Us',
    'about-subtitle': 'Israel\'s Leading Motorcycle Towing Company',
    'owner-name': 'Guy Nagar',
    'owner-title': 'Founder & Owner',
    'stats-experience': 'Tows per year',
    'stats-satisfaction': 'Customer satisfaction',
    'stats-availability': 'Full availability',
    'stats-years': 'Years of experience',
    'why-choose-us': 'Why Choose Us?',
    'ready-to-help': 'Ready to Help?',
    'value-safety-title': 'Safety First',
    'value-safety-desc': 'We specialize in safe towing of motorcycles, ATVs and RZR/UTVs with specialized equipment and certified drivers.',
    'value-availability-title': '24/7 Availability',
    'value-availability-desc': 'Emergency service available around the clock, including weekends and holidays, nationwide.',
    'value-professionalism-title': 'Technical Professionalism',
    'value-professionalism-desc': 'Experienced technical team with in-depth knowledge of all types of motor vehicles and professional equipment.',
    'value-service-title': 'Personal Service',
    'value-service-desc': 'Personal attention to every customer, understanding unique needs and customizing the service.',
    'coverage-title': 'Coverage Areas',
    'coverage-subtitle': 'Full nationwide coverage across Israel',
    'coverage-north': 'North - All area up to the border',
    'coverage-center': 'Center - Tel Aviv and surroundings',
    'coverage-jerusalem': 'Jerusalem and surroundings',
    'coverage-south': 'South - Be\'er Sheva and Negev',
    'coverage-sharon': 'Sharon and Lowlands',
    'coverage-haifa': 'Haifa and Krayot',
    'coverage-galilee': 'Upper and Lower Galilee',
    'coverage-valley': 'Jezreel Valley',

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
    'blog-title': 'MotoGrar Blog',
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
    'footer-info': 'Information',
    'rate-us-google': 'Rate us on Google',

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
    'learn-more': 'Learn More',
    'call-us': 'Call Us',
    'email-us': 'Email Us',

    // Status Page
    'status-pending': 'Pending Approval',
    'status-approved': 'Approved',
    'status-en-route': 'On the Way',
    'status-completed': 'Completed',
    'status-cancelled': 'Cancelled',
    'eta': 'Estimated Arrival',

    // Accessibility
    'accessibility-title': 'Accessibility',
    'font-size': 'Font Size',
    'high-contrast': 'High Contrast',
    'grayscale': 'Grayscale',
    'highlight-links': 'Highlight Links',
    'readable-font': 'Readable Font',
    'reset-settings': 'Reset Settings'
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    services: 'الخدمات',
    testimonials: 'آراء العملاء',
    contact: 'اتصل بنا',
    about: 'من نحن',
    blog: 'المدونة',
    'pro-garage': 'Pro Garage',
    'service-call': 'طلب خدمة',
    gallery: 'المعرض',
    faq: 'أسئلة شائعة',
    terms: 'شروط الاستخدام',
    privacy: 'سياسة الخصوصية',
    accessibility: 'إمكانية الوصول',
    sitemap: 'خريطة الموقع',

    // Hero Section
    'hero-title': 'سحب دراجات احترافي',
    'hero-subtitle': 'خدمة 24/7 في جميع أنحاء إسرائيل',
    'hero-description': 'معدات متقدمة وفريق خبراء لإنقاذ الدراجات النارية و ATV و RZR/UTV',
    'call-now': 'اتصل الآن',
    whatsapp: 'واتساب',
    'quick-service': 'طلب خدمة سريعة',

    // Service Call Form
    'service-call-title': 'طلب خدمة فوري',
    'service-call-subtitle': 'املأ التفاصيل وسنصل خلال 15-45 دقيقة',
    'form-full-name': 'الاسم الكامل',
    'form-phone': 'الهاتف',
    'form-email': 'البريد الإلكتروني',
    'form-vehicle-type': 'نوع المركبة',
    'form-location': 'الموقع',
    'form-message': 'رسالة',
    'form-send': 'أرسل رسالة',
    'form-sending': 'جار الإرسال...',
    'form-success': 'تم إرسال الرسالة بنجاح! سنعود إليك قريبا.',
    'form-error': 'حدث خطأ. يرجى المحاولة مرة أخرى أو الاتصال بنا.',
    'vehicle-other': 'آخر',
    'form-description': 'وصف المشكلة',
    'form-submit': 'إرسال الطلب',
    'form-required': 'حقل مطلوب',
    'form-urgency': 'الأولوية',
    'urgency-normal': 'عادي',
    'urgency-urgent': 'عاجل',
    'urgency-emergency': 'طوارئ',
    'form-photo': 'إرفاق صورة',
    'send-via-whatsapp': 'إرسال عبر واتساب',

    // Services
    'motorcycle-service': 'سحب الدراجات النارية',
    'atv-service': 'سحب ATV',
    'rzr-service': 'سحب RZR/UTV',
    'service-description': 'ماذا تشمل الخدمة؟',
    'pricing': 'الأسعار والحجز',
    'contact-us': 'اتصل بنا',
    'professional-towing': 'سحب احترافي',
    'available-247': 'متاح 24/7',

    // About
    'about-title': 'من نحن',
    'about-subtitle': 'شركة سحب الدراجات الرائدة في إسرائيل',
    'owner-name': 'غاي نغار',
    'owner-title': 'المؤسس والمالك',
    'stats-experience': 'عمليات سحب سنوياً',
    'stats-satisfaction': 'رضا العملاء',
    'stats-availability': 'توفر كامل',
    'stats-years': 'سنوات الخبرة',
    'why-choose-us': 'لماذا تختارنا؟',
    'ready-to-help': 'جاهزون للمساعدة؟',
    'value-safety-title': 'Safety First',
    'value-safety-desc': 'We specialize in safe towing of motorcycles, ATVs and RZR/UTVs with specialized equipment and certified drivers.',
    'value-availability-title': '24/7 Availability',
    'value-availability-desc': 'Emergency service available around the clock, including weekends and holidays, nationwide.',
    'value-professionalism-title': 'Technical Professionalism',
    'value-professionalism-desc': 'Experienced technical team with in-depth knowledge of all types of motor vehicles and professional equipment.',
    'value-service-title': 'Personal Service',
    'value-service-desc': 'Personal attention to every customer, understanding unique needs and customizing the service.',
    'coverage-title': 'Coverage Areas',
    'coverage-subtitle': 'Full nationwide coverage across Israel',
    'coverage-north': 'North - All area up to the border',
    'coverage-center': 'Center - Tel Aviv and surroundings',
    'coverage-jerusalem': 'Jerusalem and surroundings',
    'coverage-south': 'South - Be\'er Sheva and Negev',
    'coverage-sharon': 'Sharon and Lowlands',
    'coverage-haifa': 'Haifa and Krayot',
    'coverage-galilee': 'Upper and Lower Galilee',
    'coverage-valley': 'Jezreel Valley',

    // Testimonials
    'testimonials-title': 'آراء وتقييمات',
    'testimonials-subtitle': 'ماذا يقول عملاؤنا عن خدمتنا',
    'rating': 'التقييم',

    // Contact
    'contact-title': 'اتصل بنا',
    'contact-subtitle': 'نحن هنا للمساعدة في أي أسئلة أو طلبات',
    'send-message': 'إرسال رسالة',
    'message-sent': 'تم إرسال الرسالة بنجاح!',
    'message-error': 'حدث خطأ. حاول مرة أخرى.',

    // Blog
    'blog-title': 'مدونة MotoGrar',
    'blog-subtitle': 'نصائح ومعلومات مهمة لراكبي الدراجات',
    'read-more': 'اقرأ المزيد',
    'published': 'نُشر',
    'author': 'بواسطة',

    // Footer
    'footer-about': 'من نحن',
    'footer-links': 'روابط مهمة',
    'footer-contact': 'اتصل بنا',
    'footer-follow': 'تابعنا',
    'footer-rights': 'جميع الحقوق محفوظة',
    'footer-info': 'معلومات',
    'rate-us-google': 'قيمنا على جوجل',

    // Common
    'loading': 'جارٍ التحميل...',
    'error': 'خطأ',
    'success': 'نجاح',
    'cancel': 'إلغاء',
    'confirm': 'تأكيد',
    'close': 'إغلاق',
    'next': 'التالي',
    'previous': 'السابق',
    'view-all': 'عرض الكل',
    'learn-more': 'معرفة المزيد',
    'call-us': 'اتصل بنا',
    'email-us': 'راسلنا',

    // Status Page
    'status-pending': 'في انتظار الموافقة',
    'status-approved': 'تمت الموافقة',
    'status-en-route': 'في الطريق',
    'status-completed': 'مكتمل',
    'status-cancelled': 'ملغي',
    'eta': 'الوقت المتوقع للوصول',

    // Accessibility
    'accessibility-title': 'إمكانية الوصول',
    'font-size': 'حجم الخط',
    'high-contrast': 'تباين عالي',
    'grayscale': 'تدرج رمادي',
    'highlight-links': 'تمييز الروابط',
    'readable-font': 'خط مقروء',
    'reset-settings': 'إعادة ضبط الإعدادات'
  },
  fr: {
    // Navigation
    home: 'Accueil',
    services: 'Services',
    testimonials: 'Témoignages',
    contact: 'Contact',
    about: 'À Propos',
    blog: 'Blog',
    'pro-garage': 'Pro Garage',
    'service-call': 'Demande de Service',
    gallery: 'Galerie',
    faq: 'FAQ',
    terms: 'Conditions d\'Utilisation',
    privacy: 'Politique de Confidentialité',
    accessibility: 'Accessibilité',
    sitemap: 'Plan du Site',

    // Hero Section
    'hero-title': 'Remorquage Professionnel de Motos',
    'hero-subtitle': 'Service 24/7 dans Tout Israël',
    'hero-description': 'Équipement avancé et équipe d\'experts pour le dépannage de motos, ATV et RZR/UTV',
    'call-now': 'Appeler Maintenant',
    whatsapp: 'WhatsApp',
    'quick-service': 'Demande Rapide',

    // Service Call Form
    'service-call-title': 'Demande de Service Immédiate',
    'service-call-subtitle': 'Remplissez vos informations et nous arriverons dans 15-45 minutes',
    'form-full-name': 'Nom Complet',
    'form-phone': 'Téléphone',
    'form-email': 'Email',
    'form-vehicle-type': 'Type de Véhicule',
    'form-location': 'Emplacement',
    'form-message': 'Message',
    'form-send': 'Envoyer le message',
    'form-sending': 'Envoi...',
    'form-success': 'Message envoyé avec succès ! Nous vous répondrons bientôt.',
    'form-error': 'Une erreur s\'est produite. Veuillez réessayer ou nous appeler.',
    'vehicle-other': 'Autre',
    'form-description': 'Description du Problème',
    'form-submit': 'Envoyer',
    'form-required': 'Champ obligatoire',
    'form-urgency': 'Urgence',
    'urgency-normal': 'Normal',
    'urgency-urgent': 'Urgent',
    'urgency-emergency': 'Urgence',
    'form-photo': 'Joindre Photo',
    'send-via-whatsapp': 'Envoyer via WhatsApp',

    // Services
    'motorcycle-service': 'Remorquage Motos',
    'atv-service': 'Remorquage ATV',
    'rzr-service': 'Remorquage RZR/UTV',
    'service-description': 'Qu\'est-ce qui est inclus?',
    'pricing': 'Tarifs & Réservation',
    'contact-us': 'Contactez-nous',
    'professional-towing': 'Remorquage Professionnel',
    'available-247': 'Disponible 24/7',

    // About
    'about-title': 'À Propos',
    'about-subtitle': 'Première Entreprise de Remorquage de Motos en Israël',
    'owner-name': 'Guy Nagar',
    'owner-title': 'Fondateur & Propriétaire',
    'stats-experience': 'Remorquages par an',
    'stats-satisfaction': 'Satisfaction client',
    'stats-availability': 'Disponibilité totale',
    'stats-years': 'Années d\'expérience',
    'why-choose-us': 'Pourquoi Nous Choisir?',
    'ready-to-help': 'Prêts à Vous Aider?',
    'value-safety-title': 'Safety First',
    'value-safety-desc': 'We specialize in safe towing of motorcycles, ATVs and RZR/UTVs with specialized equipment and certified drivers.',
    'value-availability-title': '24/7 Availability',
    'value-availability-desc': 'Emergency service available around the clock, including weekends and holidays, nationwide.',
    'value-professionalism-title': 'Technical Professionalism',
    'value-professionalism-desc': 'Experienced technical team with in-depth knowledge of all types of motor vehicles and professional equipment.',
    'value-service-title': 'Personal Service',
    'value-service-desc': 'Personal attention to every customer, understanding unique needs and customizing the service.',
    'coverage-title': 'Coverage Areas',
    'coverage-subtitle': 'Full nationwide coverage across Israel',
    'coverage-north': 'North - All area up to the border',
    'coverage-center': 'Center - Tel Aviv and surroundings',
    'coverage-jerusalem': 'Jerusalem and surroundings',
    'coverage-south': 'South - Be\'er Sheva and Negev',
    'coverage-sharon': 'Sharon and Lowlands',
    'coverage-haifa': 'Haifa and Krayot',
    'coverage-galilee': 'Upper and Lower Galilee',
    'coverage-valley': 'Jezreel Valley',

    // Testimonials
    'testimonials-title': 'Avis & Témoignages',
    'testimonials-subtitle': 'Ce que nos clients disent de notre service',
    'rating': 'Note',

    // Contact
    'contact-title': 'Contactez-nous',
    'contact-subtitle': 'Nous sommes là pour répondre à vos questions',
    'send-message': 'Envoyer',
    'message-sent': 'Message envoyé avec succès!',
    'message-error': 'Une erreur s\'est produite. Veuillez réessayer.',

    // Blog
    'blog-title': 'Blog MotoGrar',
    'blog-subtitle': 'Conseils et informations importantes pour les motards',
    'read-more': 'Lire Plus',
    'published': 'Publié',
    'author': 'Par',

    // Footer
    'footer-about': 'À Propos',
    'footer-links': 'Liens Importants',
    'footer-contact': 'Contact',
    'footer-follow': 'Suivez-nous',
    'footer-rights': 'Tous droits réservés',
    'footer-info': 'Informations',
    'rate-us-google': 'Évaluez-nous sur Google',

    // Common
    'loading': 'Chargement...',
    'error': 'Erreur',
    'success': 'Succès',
    'cancel': 'Annuler',
    'confirm': 'Confirmer',
    'close': 'Fermer',
    'next': 'Suivant',
    'previous': 'Précédent',
    'view-all': 'Voir Tout',
    'learn-more': 'En Savoir Plus',
    'call-us': 'Appelez-nous',
    'email-us': 'Envoyez-nous un Email',

    // Status Page
    'status-pending': 'En Attente',
    'status-approved': 'Approuvé',
    'status-en-route': 'En Route',
    'status-completed': 'Terminé',
    'status-cancelled': 'Annulé',
    'eta': 'Heure d\'Arrivée Estimée',

    // Accessibility
    'accessibility-title': 'Accessibilité',
    'font-size': 'Taille de Police',
    'high-contrast': 'Contraste Élevé',
    'grayscale': 'Niveaux de Gris',
    'highlight-links': 'Surligner les Liens',
    'readable-font': 'Police Lisible',
    'reset-settings': 'Réinitialiser'
  },
  ru: {
    // Navigation
    home: 'Главная',
    services: 'Услуги',
    testimonials: 'Отзывы',
    contact: 'Контакты',
    about: 'О Нас',
    blog: 'Блог',
    'pro-garage': 'Pro Garage',
    'service-call': 'Заказать Услугу',
    gallery: 'Галерея',
    faq: 'Частые Вопросы',
    terms: 'Условия Использования',
    privacy: 'Политика Конфиденциальности',
    accessibility: 'Доступность',
    sitemap: 'Карта Сайта',

    // Hero Section
    'hero-title': 'Профессиональная Эвакуация Мотоциклов',
    'hero-subtitle': 'Сервис 24/7 по Всему Израилю',
    'hero-description': 'Современное оборудование и команда экспертов для эвакуации мотоциклов, ATV и RZR/UTV',
    'call-now': 'Позвонить',
    whatsapp: 'WhatsApp',
    'quick-service': 'Быстрый Заказ',

    // Service Call Form
    'service-call-title': 'Срочный Вызов',
    'service-call-subtitle': 'Заполните форму и мы приедем через 15-45 минут',
    'form-full-name': 'Полное Имя',
    'form-phone': 'Телефон',
    'form-email': 'Email',
    'form-vehicle-type': 'Тип ТС',
    'form-location': 'Местоположение',
    'form-message': 'Сообщение',
    'form-send': 'Отправить сообщение',
    'form-sending': 'Отправка...',
    'form-success': 'Сообщение успешно отправлено! Мы скоро свяжемся с вами.',
    'form-error': 'Произошла ошибка. Пожалуйста, попробуйте еще раз или позвоните нам.',
    'vehicle-other': 'Другое',
    'form-description': 'Описание Проблемы',
    'form-submit': 'Отправить',
    'form-required': 'Обязательное поле',
    'form-urgency': 'Срочность',
    'urgency-normal': 'Обычная',
    'urgency-urgent': 'Срочная',
    'urgency-emergency': 'Экстренная',
    'form-photo': 'Прикрепить Фото',
    'send-via-whatsapp': 'Отправить через WhatsApp',

    // Services
    'motorcycle-service': 'Эвакуация Мотоциклов',
    'atv-service': 'Эвакуация ATV',
    'rzr-service': 'Эвакуация RZR/UTV',
    'service-description': 'Что включено?',
    'pricing': 'Цены и Заказ',
    'contact-us': 'Связаться',
    'professional-towing': 'Профессиональная Эвакуация',
    'available-247': 'Доступно 24/7',

    // About
    'about-title': 'О Нас',
    'about-subtitle': 'Ведущая Компания по Эвакуации Мотоциклов в Израиле',
    'owner-name': 'Гай Нагар',
    'owner-title': 'Основатель и Владелец',
    'stats-experience': 'Эвакуаций в год',
    'stats-satisfaction': 'Удовлетворённость клиентов',
    'stats-availability': 'Полная доступность',
    'stats-years': 'Лет опыта',
    'why-choose-us': 'Почему Мы?',
    'ready-to-help': 'Готовы Помочь?',
    'value-safety-title': 'Safety First',
    'value-safety-desc': 'We specialize in safe towing of motorcycles, ATVs and RZR/UTVs with specialized equipment and certified drivers.',
    'value-availability-title': '24/7 Availability',
    'value-availability-desc': 'Emergency service available around the clock, including weekends and holidays, nationwide.',
    'value-professionalism-title': 'Technical Professionalism',
    'value-professionalism-desc': 'Experienced technical team with in-depth knowledge of all types of motor vehicles and professional equipment.',
    'value-service-title': 'Personal Service',
    'value-service-desc': 'Personal attention to every customer, understanding unique needs and customizing the service.',
    'coverage-title': 'Coverage Areas',
    'coverage-subtitle': 'Full nationwide coverage across Israel',
    'coverage-north': 'North - All area up to the border',
    'coverage-center': 'Center - Tel Aviv and surroundings',
    'coverage-jerusalem': 'Jerusalem and surroundings',
    'coverage-south': 'South - Be\'er Sheva and Negev',
    'coverage-sharon': 'Sharon and Lowlands',
    'coverage-haifa': 'Haifa and Krayot',
    'coverage-galilee': 'Upper and Lower Galilee',
    'coverage-valley': 'Jezreel Valley',

    // Testimonials
    'testimonials-title': 'Отзывы Клиентов',
    'testimonials-subtitle': 'Что говорят наши клиенты о нашем сервисе',
    'rating': 'Рейтинг',

    // Contact
    'contact-title': 'Контакты',
    'contact-subtitle': 'Мы здесь чтобы помочь с любыми вопросами',
    'send-message': 'Отправить',
    'message-sent': 'Сообщение отправлено!',
    'message-error': 'Произошла ошибка. Попробуйте снова.',

    // Blog
    'blog-title': 'Блог MotoGrar',
    'blog-subtitle': 'Советы и важная информация для мотоциклистов',
    'read-more': 'Читать Далее',
    'published': 'Опубликовано',
    'author': 'Автор',

    // Footer
    'footer-about': 'О Нас',
    'footer-links': 'Полезные Ссылки',
    'footer-contact': 'Контакты',
    'footer-follow': 'Следите за Нами',
    'footer-rights': 'Все права защищены',
    'footer-info': 'Информация',
    'rate-us-google': 'Оцените нас в Google',

    // Common
    'loading': 'Загрузка...',
    'error': 'Ошибка',
    'success': 'Успех',
    'cancel': 'Отмена',
    'confirm': 'Подтвердить',
    'close': 'Закрыть',
    'next': 'Далее',
    'previous': 'Назад',
    'view-all': 'Смотреть Все',
    'learn-more': 'Узнать Больше',
    'call-us': 'Позвоните Нам',
    'email-us': 'Напишите Нам',

    // Status Page
    'status-pending': 'Ожидает Подтверждения',
    'status-approved': 'Подтверждено',
    'status-en-route': 'В Пути',
    'status-completed': 'Завершено',
    'status-cancelled': 'Отменено',
    'eta': 'Примерное Время Прибытия',

    // Accessibility
    'accessibility-title': 'Доступность',
    'font-size': 'Размер Шрифта',
    'high-contrast': 'Высокий Контраст',
    'grayscale': 'Оттенки Серого',
    'highlight-links': 'Выделить Ссылки',
    'readable-font': 'Читаемый Шрифт',
    'reset-settings': 'Сбросить Настройки'
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
  const [language, setLanguage] = useState<Language>('he')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('motogar-language') as Language
      if (savedLang && ['he', 'en', 'ar', 'fr', 'ru'].includes(savedLang)) {
        setLanguage(savedLang)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('motogar-language', language)
  }, [language])

  const t = (key: keyof Translation): string => {
    return translations[language][key] || key
  }

  const isRTL = language === 'he' || language === 'ar'
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