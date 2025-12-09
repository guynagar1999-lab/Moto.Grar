'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, User, Send, Phone, MessageCircle, X, Minimize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { generateWhatsAppLink, formatPhone } from '@/lib/utils'

interface Message {
    id: string
    text: string
    sender: 'user' | 'bot'
    timestamp: Date
}

const knowledgeBase = {
    services: {
        motorcycle: {
            towing: 'גרירת אופנועים: ₪150-₪350',
            roadside: 'עזרה בדרך: ₪250-₪450',
            recovery: 'חילוץ משטחים: ₪350-₪650'
        },
        atv: {
            towing: 'גרירת ATV: ₪250-₪450',
            recovery: 'חילוץ משטחים: ₪450-₪750'
        },
        rzr: {
            towing: 'גרירת RZR/UTV: ₪350-₪550',
            recovery: 'חילוץ משטחים: ₪550-₪850'
        }
    },
    coverage: {
        areas: 'כיסוי ארצי מלא - צפון, מרכז, דרום',
        response: 'זמן הגעה ממוצע: 15-45 דקות',
        hours: 'זמינות 24/7 כולל שבתות וחגים'
    },
    contact: {
        owner: 'גיא נגר',
        phone: '0524823435'
    }
}

interface ChatbotModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function ChatbotModal({ isOpen, onClose }: ChatbotModalProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: `שלום! אני בוט Grar Alfa 🤖

אני כאן לעזור לך עם:
• 💰 מחירי שירותים
• 📍 אזורי כיסוי
• ⏰ זמני הגעה
• 📞 צור קשר מיידי
• ⭐ ביקורות לקוחות

מה תרצה לדעת?`,
            sender: 'bot',
            timestamp: new Date()
        }
    ])
    const [inputValue, setInputValue] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const generateResponse = (userMessage: string): string => {
        const message = userMessage.toLowerCase()

        // Emergency detection
        if (message.includes('חירום') || message.includes('דחוף') || message.includes('תקלה')) {
            return `🚨 **שירות חירום 24/7!**

📞 התקשר עכשיו: ${formatPhone('0524823435')}
⚡ זמן הגעה: 15-45 דקות
🏍️ ציוד מתמחה לכל סוגי הרכב

אנחנו כאן לעזור לך!`
        }

        // Price inquiries
        if (message.includes('מחיר') || message.includes('כמה')) {
            if (message.includes('אופנוע')) {
                return `💰 מחירי גרירת אופנועים:
${knowledgeBase.services.motorcycle.towing}
${knowledgeBase.services.motorcycle.roadside}
${knowledgeBase.services.motorcycle.recovery}

צור קשר לתמחור מדויק!
📞 ${formatPhone('0524823435')}`
            }
            if (message.includes('atv') || message.includes('טרקטורון')) {
                return `💰 מחירי גרירת ATV:
${knowledgeBase.services.atv.towing}
${knowledgeBase.services.atv.recovery}

צור קשר לתמחור מדויק!
📞 ${formatPhone('0524823435')}`
            }
            if (message.includes('rzr') || message.includes('ראזר')) {
                return `💰 מחירי גרירת RZR/UTV:
${knowledgeBase.services.rzr.towing}
${knowledgeBase.services.rzr.recovery}

צור קשר לתמחור מדויק!
📞 ${formatPhone('0524823435')}`
            }
            return `💰 המחירים משתנים לפי סוג הרכב:
• אופנועים: ₪150-₪450
• ATV: ₪250-₪650
• RZR/UTV: ₪350-₪750

📞 התקשר: ${formatPhone('0524823435')}`
        }

        // Location inquiries
        if (message.includes('איפה') || message.includes('אזור') || message.includes('כיסוי')) {
            return `📍 ${knowledgeBase.coverage.areas}

⏰ ${knowledgeBase.coverage.response}

🕐 ${knowledgeBase.coverage.hours}

🏍️ מתמחים בגרירה וחילוץ של אופנועים, ATV ו-RZR/UTV`
        }

        // Contact inquiries
        if (message.includes('צור קשר') || message.includes('טלפון')) {
            return `📞 צור קשר עם ${knowledgeBase.contact.owner}:

טלפון: ${formatPhone(knowledgeBase.contact.phone)}
💬 WhatsApp זמין
📧 Instagram: @guynagar87

זמינות 24/7!`
        }

        // Default response
        return `אני כאן לעזור! תוכל לשאול אותי על:

• מחירים ושירותים
• זמני הגעה
• אזורי כיסוי
• צור קשר

או פשוט התקשר: ${formatPhone('0524823435')}`
    }

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return

        const userMessage: Message = {
            id: `msg-${Date.now()}`,
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        }

        setMessages(prev => [...prev, userMessage])
        setInputValue('')
        setIsTyping(true)

        // Simulate typing delay
        setTimeout(() => {
            const botMessage: Message = {
                id: `msg-${Date.now() + 1}`,
                text: generateResponse(inputValue),
                sender: 'bot',
                timestamp: new Date()
            }
            setMessages(prev => [...prev, botMessage])
            setIsTyping(false)
        }, 800)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-end justify-end p-4 pointer-events-none">
                {/* Backdrop for mobile */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm md:hidden pointer-events-auto"
                />

                {/* Chatbot Window */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        height: isMinimized ? 'auto' : '600px'
                    }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="relative bg-gray-900 rounded-2xl shadow-2xl border border-orange-500/30 pointer-events-auto overflow-hidden"
                    style={{
                        width: '90vw',
                        maxWidth: '420px',
                        maxHeight: '85vh'
                    }}
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="font-bold">Grar Alfa Bot</h3>
                                <p className="text-xs opacity-90 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    זמין עכשיו
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setIsMinimized(!isMinimized)}
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <Minimize2 className="w-4 h-4 text-white" />
                            </button>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <X className="w-4 h-4 text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Messages Container */}
                    {!isMinimized && (
                        <>
                            <div className="h-[400px] overflow-y-auto p-4 space-y-3 bg-gray-800/50 backdrop-blur-sm">
                                <AnimatePresence>
                                    {messages.map((message) => (
                                        <motion.div
                                            key={message.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className={`flex items-start gap-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user'
                                                        ? 'bg-gradient-to-br from-orange-500 to-red-600'
                                                        : 'bg-gradient-to-br from-blue-500 to-cyan-600'
                                                    }`}>
                                                    {message.sender === 'user' ? (
                                                        <User className="w-4 h-4 text-white" />
                                                    ) : (
                                                        <Bot className="w-4 h-4 text-white" />
                                                    )}
                                                </div>
                                                <div className={`rounded-2xl px-4 py-2 ${message.sender === 'user'
                                                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                                                        : 'bg-gray-700 text-gray-100'
                                                    }`}>
                                                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                                                    <p className="text-xs opacity-70 mt-1">
                                                        {message.timestamp.toLocaleTimeString('he-IL', {
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        })}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>

                                {/* Typing Indicator */}
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex justify-start"
                                    >
                                        <div className="bg-gray-700 rounded-2xl px-4 py-3">
                                            <div className="flex gap-1">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <div className="p-4 bg-gray-900 border-t border-gray-700">
                                <div className="flex gap-2 mb-3">
                                    <Input
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="הקלד הודעה..."
                                        className="flex-1 bg-gray-800 border-gray-600 text-white placeholder:text-gray-500 rounded-xl"
                                    />
                                    <Button
                                        onClick={handleSendMessage}
                                        disabled={!inputValue.trim() || isTyping}
                                        className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 rounded-xl px-4"
                                    >
                                        <Send className="w-4 h-4" />
                                    </Button>
                                </div>

                                {/* Quick Actions */}
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => window.open('tel:0524823435', '_blank')}
                                        className="flex-1 border-green-500/30 text-green-400 hover:bg-green-500/10 text-xs"
                                    >
                                        <Phone className="w-3 h-3 ml-1" />
                                        התקשר
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => window.open(generateWhatsAppLink('0524823435', 'שלום, אני צריך עזרה'), '_blank')}
                                        className="flex-1 border-green-500/30 text-green-400 hover:bg-green-500/10 text-xs"
                                    >
                                        <MessageCircle className="w-3 h-3 ml-1" />
                                        WhatsApp
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    )
}
