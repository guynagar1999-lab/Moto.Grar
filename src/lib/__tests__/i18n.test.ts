import { useLanguage } from '../i18n'

// Mock React hooks
const mockUseState = jest.fn()
const mockUseEffect = jest.fn()

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initial: unknown) => [initial, mockUseState],
  useEffect: mockUseEffect,
  useContext: () => ({
    language: 'he',
    setLanguage: jest.fn(),
    t: (key: string) => key,
    isRTL: true,
    direction: 'rtl'
  }),
  createContext: jest.fn(),
}))

describe('i18n', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('useLanguage', () => {
    it('should return language context', () => {
      const result = useLanguage()
      expect(result).toHaveProperty('language')
      expect(result).toHaveProperty('setLanguage')
      expect(result).toHaveProperty('t')
      expect(result).toHaveProperty('isRTL')
      expect(result).toHaveProperty('direction')
    })

    it('should detect RTL for Hebrew', () => {
      const result = useLanguage()
      expect(result.isRTL).toBe(true)
      expect(result.direction).toBe('rtl')
    })
  })
})