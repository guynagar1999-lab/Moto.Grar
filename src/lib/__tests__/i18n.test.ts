import { renderHook, act } from '@testing-library/react'
import { useLanguage, LanguageProvider } from '../i18n'

describe('i18n', () => {
  it('should return default language (hebrew)', () => {
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider
    })

    expect(result.current.language).toBe('he')
    expect(result.current.isRTL).toBe(true)
    expect(result.current.direction).toBe('rtl')
    expect(result.current.t('home')).toBe('בית')
  })

  it('should allow changing language', () => {
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider
    })

    act(() => {
      result.current.setLanguage('en')
    })

    expect(result.current.language).toBe('en')
    expect(result.current.isRTL).toBe(false)
    expect(result.current.direction).toBe('ltr')
    expect(result.current.t('home')).toBe('Home')
  })
})