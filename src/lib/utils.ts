import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) {
    return `0${cleaned.slice(1, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7)}`
  }
  return phone
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: 'ILS'
  }).format(price)
}

export function generateWhatsAppLink(phone: string, message: string): string {
  const formattedPhone = phone.replace(/[^\d]/g, '')
  return `https://wa.me/972${formattedPhone.slice(1)}?text=${encodeURIComponent(message)}`
}

export function getServiceIcon(service: string): string {
  const icons = {
    'motorcycle': '🏍️',
    'atv': '🚜',
    'rzr': '🏎️',
    'recovery': '🔧',
    'transport': '🚛',
    'emergency': '🚨'
  }
  return icons[service as keyof typeof icons] || '🚗'
}

export function getServiceColor(service: string): string {
  const colors = {
    'motorcycle': 'from-orange-500 to-red-500',
    'atv': 'from-yellow-500 to-orange-500',
    'rzr': 'from-purple-500 to-pink-500',
    'recovery': 'from-blue-500 to-cyan-500',
    'transport': 'from-green-500 to-emerald-500',
    'emergency': 'from-red-500 to-pink-500'
  }
  return colors[service as keyof typeof colors] || 'from-gray-500 to-gray-600'
}

// Security: Input sanitization for XSS prevention
export function sanitizeInput(input: string): string {
  if (!input) return ''
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .replace(/\\/g, '&#x5C;')
    .replace(/`/g, '&#x60;')
    .trim()
}

// Security: Validate and sanitize phone number
export function sanitizePhone(phone: string): string {
  // Only allow digits, hyphens, and spaces (common in Israeli phone format)
  return phone.replace(/[^\d\s\-]/g, '').slice(0, 15)
}

// Security: Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

// Security: Sanitize text for display (strips HTML)
export function sanitizeForDisplay(input: string): string {
  if (!input) return ''
  const div = typeof document !== 'undefined' ? document.createElement('div') : null
  if (div) {
    div.textContent = input
    return div.innerHTML
  }
  // Server-side fallback
  return sanitizeInput(input)
}

// Security: Limit string length to prevent overflow
export function limitLength(input: string, maxLength: number): string {
  if (!input) return ''
  return input.slice(0, maxLength)
}