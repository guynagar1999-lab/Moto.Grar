'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    MessageCircle,
    Phone,
    Star,
    Instagram,
    Plus,
    Bot,
    Headset
} from 'lucide-react'
import ChatbotModal from './chatbot-modal'

export function MegaFAB() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const [chatbotOpen, setChatbotOpen] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const fabItems = [
        {
            id: 'chatbot',
            icon: Bot,
            label: 'צאט בוט AI',
            color: 'from-purple-500 to-indigo-600',
            shadow: 'shadow-purple-500/40',
            action: () => {
                setChatbotOpen(true)
                setIsOpen(false)
            },
        },
        {
            id: 'call',
            icon: Phone,
            label: 'התקשר עכשיו',
            color: 'from-green-500 to-emerald-600',
            shadow: 'shadow-green-500/40',
            action: () => window.open('tel:0524823435', '_blank'),
        },
        {
            id: 'whatsapp',
            icon: MessageCircle,
            label: 'WhatsApp',
            color: 'from-green-400 to-green-600',
            shadow: 'shadow-green-400/40',
            action: () => window.open('https://wa.me/972524823435?text=שלום, אני צריך עזרה עם שירותי גרירה', '_blank'),
        },
        {
            id: 'review',
            icon: Star,
            label: 'דרג אותנו',
            color: 'from-yellow-400 to-orange-500',
            shadow: 'shadow-yellow-400/40',
            action: () => window.open('https://search.google.com/local/writereview?placeid=ChIJVbNrMDWcUYsRfAcvoLusLmM', '_blank'),
        },
        {
            id: 'social',
            icon: Instagram,
            label: 'אינסטגרם',
            color: 'from-pink-500 to-rose-600',
            shadow: 'shadow-pink-500/40',
            action: () => window.open('https://www.instagram.com/guynagar87/', '_blank'),
        },
    ]

    if (!isMounted) return null

    return (
        <>
            {/* MegaFAB - Positioned Bottom Left with proper z-index */}
            <div
                className="fixed transition-all duration-300 bottom-4 left-4 md:bottom-8 md:left-8"
                style={{
                    zIndex: 9998,
                    isolation: 'isolate',
                    WebkitTransform: 'translateZ(0)',
                    transform: 'translateZ(0)',
                    willChange: 'transform'
                }}
            >
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop for mobile */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                                style={{ zIndex: -1 }}
                                onClick={() => setIsOpen(false)}
                            />

                            {/* Menu Items */}
                            <div className="absolute bottom-20 left-0 flex flex-col-reverse gap-4 items-start w-max max-w-[calc(100vw-2rem)]">
                                {fabItems.map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        initial={{ opacity: 0, scale: 0.8, x: -20 }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, x: -20 }}
                                        transition={{
                                            delay: index * 0.05,
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 25
                                        }}
                                        onClick={item.action}
                                        className="group flex items-center gap-3 pl-1"
                                        style={{
                                            WebkitTapHighlightColor: 'transparent',
                                            touchAction: 'manipulation'
                                        }}
                                    >
                                        {/* Icon Container */}
                                        <div
                                            className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg ${item.shadow} group-hover:scale-110 group-active:scale-95 transition-transform duration-300 border border-white/10 relative z-10`}
                                        >
                                            <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                                        </div>

                                        {/* Label (To the right of icon) */}
                                        <motion.span
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md text-gray-900 dark:text-white text-sm md:text-base font-bold px-4 py-2.5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 whitespace-nowrap"
                                        >
                                            {item.label}
                                        </motion.span>
                                    </motion.button>
                                ))}
                            </div>
                        </>
                    )}
                </AnimatePresence>

                {/* Main Toggle Button */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 overflow-hidden ${isOpen
                        ? 'bg-gray-900 rotate-0 ring-4 ring-orange-500/50'
                        : 'bg-gradient-to-tr from-orange-600 via-red-600 to-red-500 hover:shadow-orange-500/60 ring-2 ring-white/20'
                        }`}
                    style={{
                        zIndex: 10,
                        WebkitTapHighlightColor: 'transparent',
                        touchAction: 'manipulation',
                        WebkitTransform: 'translateZ(0)',
                        transform: 'translateZ(0)'
                    }}
                    aria-label={isOpen ? 'סגור תפריט מהיר' : 'פתח תפריט מהיר'}
                >
                    {/* Glass Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none" />

                    {/* Pulse Effect - Only when closed */}
                    {!isOpen && (
                        <>
                            <span className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping duration-[2000ms]" />
                            <span className="absolute inset-0 rounded-full bg-orange-500/10 animate-pulse duration-[3000ms]" />
                        </>
                    )}

                    {/* Icon */}
                    <div className="relative z-10">
                        {isOpen ? (
                            <Plus className="w-8 h-8 md:w-9 md:h-9 text-white rotate-45 transition-transform duration-300" />
                        ) : (
                            <Headset className="w-8 h-8 md:w-9 md:h-9 text-white fill-white/10" />
                        )}
                    </div>
                </motion.button>
            </div>

            <ChatbotModal isOpen={chatbotOpen} onClose={() => setChatbotOpen(false)} />
        </>
    )
}
