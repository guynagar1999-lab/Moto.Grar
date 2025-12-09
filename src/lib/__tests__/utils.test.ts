import { formatPhone, formatPrice, generateWhatsAppLink } from '../utils'

describe('Utils', () => {
  describe('formatPhone', () => {
    it('should format Israeli phone number correctly', () => {
      expect(formatPhone('0524823435')).toBe('052-4823-435')
      expect(formatPhone('0541234567')).toBe('054-1234-567')
    })

    it('should return original string if not 10 digits', () => {
      expect(formatPhone('052482343')).toBe('052482343')
      expect(formatPhone('05248234356')).toBe('05248234356')
    })
  })

  describe('formatPrice', () => {
    it('should format price in ILS currency', () => {
      expect(formatPrice(150)).toBe('‏150.00 ‏₪')
      expect(formatPrice(250.5)).toBe('‏250.50 ‏₪')
    })
  })

  describe('generateWhatsAppLink', () => {
    it('should generate WhatsApp link with message', () => {
      const link = generateWhatsAppLink('0524823435', 'Hello World')
      expect(link).toContain('https://wa.me/972524823435')
      expect(link).toContain('Hello%20World')
    })
  })
})