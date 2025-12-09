'use client'

import { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Accessibility,
    ZoomIn,
    ZoomOut,
    Type,
    Moon,
    Sun,
    Contrast,
    X,
    Mouse,
    ChevronRight
} from 'lucide-react'

// Accessibility Context
interface AccessibilityContextType {
    fontSize: number
    setFontSize: (size: number) => void
    contrast: string
    setContrast: (mode: string) => void
    cursorSize: string
    setCursorSize: (size: string) => void
    darkMode: boolean
    setDarkMode: (mode: boolean) => void
    resetAll: () => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function useAccessibility() {
    const context = useContext(AccessibilityContext)
    if (!context) {
        throw new Error('useAccessibility must be used within AccessibilityProvider')
    }
    return context
}

export function AccessibilityProvider({ children }: { children: ReactNode }) {
    const [fontSize, setFontSize] = useState(100)
    const [contrast, setContrast] = useState('normal')
    const [cursorSize, setCursorSize] = useState('normal')
    const [darkMode, setDarkMode] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        // Load saved preferences
        const savedFontSize = localStorage.getItem('accessibility-font-size')
        const savedContrast = localStorage.getItem('accessibility-contrast')
        const savedCursor = localStorage.getItem('accessibility-cursor')
        const savedDarkMode = localStorage.getItem('accessibility-dark-mode')

        if (savedFontSize) setFontSize(parseInt(savedFontSize))
        if (savedContrast) setContrast(savedContrast)
        if (savedCursor) setCursorSize(savedCursor)
        if (savedDarkMode) setDarkMode(savedDarkMode === 'true')
    }, [])

    useEffect(() => {
        if (!isMounted) return

        // Apply font size
        document.documentElement.style.fontSize = `${fontSize}%`
        localStorage.setItem('accessibility-font-size', fontSize.toString())

        // Apply contrast
        document.documentElement.setAttribute('data-contrast', contrast)
        localStorage.setItem('accessibility-contrast', contrast)

        // Apply cursor size
        document.documentElement.setAttribute('data-cursor', cursorSize)
        localStorage.setItem('accessibility-cursor', cursorSize)

        // Apply dark mode
        if (darkMode) {
            document.documentElement.classList.add('dark-mode')
        } else {
            document.documentElement.classList.remove('dark-mode')
        }
        localStorage.setItem('accessibility-dark-mode', darkMode.toString())
    }, [fontSize, contrast, cursorSize, darkMode, isMounted])

    const resetAll = () => {
        setFontSize(100)
        setContrast('normal')
        setCursorSize('normal')
        setDarkMode(false)
        localStorage.removeItem('accessibility-font-size')
        localStorage.removeItem('accessibility-contrast')
        localStorage.removeItem('accessibility-cursor')
        localStorage.removeItem('accessibility-dark-mode')
    }

    return (
        <AccessibilityContext.Provider value={{
            fontSize,
            setFontSize,
            contrast,
            setContrast,
            cursorSize,
            setCursorSize,
            darkMode,
            setDarkMode,
            resetAll
        }}>
            {children}
        </AccessibilityContext.Provider>
    )
}

export function AccessibilityWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const [fontSize, setFontSize] = useState(100)
    const [contrast, setContrast] = useState('normal')
    const [cursorSize, setCursorSize] = useState('normal')
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        // Load saved preferences
        const savedFontSize = localStorage.getItem('accessibility-font-size')
        const savedContrast = localStorage.getItem('accessibility-contrast')
        const savedCursor = localStorage.getItem('accessibility-cursor')
        const savedDarkMode = localStorage.getItem('accessibility-dark-mode')

        if (savedFontSize) setFontSize(parseInt(savedFontSize))
        if (savedContrast) setContrast(savedContrast)
        if (savedCursor) setCursorSize(savedCursor)
        if (savedDarkMode) setDarkMode(savedDarkMode === 'true')
    }, [])

    useEffect(() => {
        if (!isMounted) return

        // Apply font size
        document.documentElement.style.fontSize = `${fontSize}%`
        localStorage.setItem('accessibility-font-size', fontSize.toString())

        // Apply contrast
        document.documentElement.setAttribute('data-contrast', contrast)
        localStorage.setItem('accessibility-contrast', contrast)

        // Apply cursor size
        document.documentElement.setAttribute('data-cursor', cursorSize)
        localStorage.setItem('accessibility-cursor', cursorSize)

        // Apply dark mode
        if (darkMode) {
            document.documentElement.classList.add('dark-mode')
        } else {
            document.documentElement.classList.remove('dark-mode')
        }
        localStorage.setItem('accessibility-dark-mode', darkMode.toString())
    }, [fontSize, contrast, cursorSize, darkMode, isMounted])

    const resetAll = () => {
        setFontSize(100)
        setContrast('normal')
        setCursorSize('normal')
        setDarkMode(false)
        localStorage.removeItem('accessibility-font-size')
        localStorage.removeItem('accessibility-contrast')
        localStorage.removeItem('accessibility-cursor')
        localStorage.removeItem('accessibility-dark-mode')
    }

    if (!isMounted) return null

    return (
        <>
            {/* Global CSS for accessibility features */}
            <style jsx global>{`
                [data-contrast="high"] {
                    filter: contrast(1.5);
                }
                [data-contrast="inverted"] {
                    filter: invert(1) hue-rotate(180deg);
                }
                [data-cursor="large"] * {
                    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="10" fill="white" stroke="black" stroke-width="2"/></svg>') 16 16, auto !important;
                }
                .dark-mode {
                    filter: brightness(0.9) contrast(1.1);
                }
            `}</style>

            {/* Fixed Sidebar Tab - Attached to left edge */}
            <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[9999]">
                {/* Tab Button - Always visible, attached to edge */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`
                        relative flex items-center justify-center
                        w-10 h-24 rounded-r-xl
                        transition-all duration-300 ease-out
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                        ${isOpen
                            ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-xl'
                            : 'bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl hover:w-12'
                        }
                    `}
                    style={{
                        boxShadow: isOpen
                            ? '4px 0 20px rgba(59, 130, 246, 0.4)'
                            : '4px 0 15px rgba(59, 130, 246, 0.3)',
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="פתח תפריט נגישות"
                    aria-expanded={isOpen}
                >
                    <div className="flex flex-col items-center gap-1">
                        <Accessibility className="w-5 h-5" />
                        <span className="text-[9px] font-bold tracking-tight writing-vertical">נגישות</span>
                        <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Pulse indicator */}
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse border-2 border-white" />
                </motion.button>
            </div>

            {/* Modal Panel - Centered on screen */}
            <AnimatePresence mode="wait">
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101]"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Centered Container */}
                        <motion.div
                            key="container"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { delay: 0.1 } }}
                            className="fixed inset-0 z-[102] flex items-center justify-center pointer-events-none p-4"
                        >
                            {/* Panel */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                                className="w-full max-w-[350px] max-h-[85vh] overflow-y-auto
                                           bg-white dark:bg-gray-900 rounded-2xl shadow-2xl
                                           border border-gray-200 dark:border-gray-700 pointer-events-auto"
                                style={{
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)',
                                }}
                            >
                                {/* Header */}
                                <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-t-2xl z-10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                                                <Accessibility className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold text-base">הגדרות נגישות</h3>
                                                <p className="text-blue-100 text-xs">התאמה אישית</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                            aria-label="סגור תפריט נגישות"
                                        >
                                            <X className="w-4 h-4 text-white" />
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 space-y-5">
                                    {/* Font Size Control */}
                                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <label className="text-gray-700 dark:text-gray-200 font-semibold flex items-center gap-2 text-sm">
                                                <Type className="w-4 h-4 text-blue-500" />
                                                גודל טקסט
                                            </label>
                                            <span className="text-blue-600 dark:text-blue-400 font-mono text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-md">
                                                {fontSize}%
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => setFontSize(Math.max(80, fontSize - 10))}
                                                className="w-9 h-9 rounded-lg bg-white dark:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                                                aria-label="הקטן טקסט"
                                            >
                                                <ZoomOut className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                                            </button>
                                            <input
                                                type="range"
                                                min="80"
                                                max="150"
                                                step="10"
                                                value={fontSize}
                                                onChange={(e) => setFontSize(parseInt(e.target.value))}
                                                className="flex-1 accent-blue-600 h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
                                                aria-label="שנה גודל טקסט"
                                            />
                                            <button
                                                onClick={() => setFontSize(Math.min(150, fontSize + 10))}
                                                className="w-9 h-9 rounded-lg bg-white dark:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                                                aria-label="הגדל טקסט"
                                            >
                                                <ZoomIn className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Contrast Control */}
                                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                                        <label className="text-gray-700 dark:text-gray-200 font-semibold flex items-center gap-2 mb-3 text-sm">
                                            <Contrast className="w-4 h-4 text-blue-500" />
                                            ניגודיות
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[
                                                { value: 'normal', label: 'רגיל' },
                                                { value: 'high', label: 'גבוהה' },
                                                { value: 'inverted', label: 'הפוכה' }
                                            ].map((mode) => (
                                                <button
                                                    key={mode.value}
                                                    onClick={() => setContrast(mode.value)}
                                                    className={`py-2 px-2 rounded-lg text-xs font-bold transition-all border ${contrast === mode.value
                                                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                                                        : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-blue-400'
                                                        }`}
                                                    aria-pressed={contrast === mode.value}
                                                >
                                                    {mode.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Cursor Size */}
                                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                                        <label className="text-gray-700 dark:text-gray-200 font-semibold flex items-center gap-2 mb-3 text-sm">
                                            <Mouse className="w-4 h-4 text-blue-500" />
                                            גודל סמן
                                        </label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {[
                                                { value: 'normal', label: 'רגיל' },
                                                { value: 'large', label: 'גדול' }
                                            ].map((size) => (
                                                <button
                                                    key={size.value}
                                                    onClick={() => setCursorSize(size.value)}
                                                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border ${cursorSize === size.value
                                                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                                                        : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-blue-400'
                                                        }`}
                                                    aria-pressed={cursorSize === size.value}
                                                >
                                                    {size.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Dark Mode Toggle */}
                                    <button
                                        onClick={() => setDarkMode(!darkMode)}
                                        className="w-full py-3 px-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 flex items-center justify-between transition-all border border-gray-200 dark:border-gray-700"
                                        aria-pressed={darkMode}
                                    >
                                        <span className="text-gray-700 dark:text-gray-200 font-semibold flex items-center gap-2 text-sm">
                                            {darkMode ? <Moon className="w-4 h-4 text-blue-400" /> : <Sun className="w-4 h-4 text-orange-500" />}
                                            מצב {darkMode ? 'לילה' : 'יום'}
                                        </span>
                                        <div className={`w-11 h-6 rounded-full transition-colors relative ${darkMode ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}>
                                            <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-all ${darkMode ? 'left-[22px]' : 'left-0.5'}`} />
                                        </div>
                                    </button>

                                    {/* Reset Button */}
                                    <button
                                        onClick={resetAll}
                                        className="w-full py-3 px-4 rounded-xl bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-bold transition-colors border border-red-200 dark:border-red-800/30 flex items-center justify-center gap-2"
                                    >
                                        <X className="w-4 h-4" />
                                        אפס הגדרות
                                    </button>
                                </div>

                                {/* Footer */}
                                <div className="px-4 pb-4">
                                    <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                                        ♿ נגישות מלאה לכל המשתמשים
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
