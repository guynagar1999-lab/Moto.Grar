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